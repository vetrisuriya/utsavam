import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { Motif } from "@/components/motif";
import { CelebrationAmbience } from "@/components/celebration-ambience";
import { ShareButtons } from "@/components/share-buttons";
import { WishCard } from "@/components/wish-card";
import { ArrowRight } from "@/components/ui-icons";
import { decodeWish } from "@/lib/codec";
import { getCelebration } from "@/lib/celebrations";
import { sanitizeValues } from "@/lib/celebrations/presentation";
import { breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

// A card page decodes its payload before rendering and returns a real 404 for
// invalid links, so a blocking navigation is intentional here.
export const instant = false;

interface PageProps {
  params: Promise<{ code: string }>;
}

function decodeCard(code: string) {
  const payload = decodeWish(decodeURIComponent(code));
  if (!payload) return null;
  const celebration = getCelebration(payload.e);
  if (!celebration) return null;
  return {
    celebration,
    values: sanitizeValues(celebration, payload.f),
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { code } = await params;
  const card = decodeCard(code);

  if (!card) {
    return {
      title: "Card not found",
      robots: { index: false, follow: false },
    };
  }

  const { celebration } = card;
  const title = `${celebration.name} ${celebration.category === "life" ? "invitation" : "greeting"} for you`;
  const description = `${celebration.name} · ${celebration.tagline} Open the link to see your personalised card.`;

  return {
    title,
    description,
    robots: { index: false, follow: true },
    openGraph: {
      title,
      description,
      url: `/w/${code}`,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function WishPage({ params }: PageProps) {
  const { code } = await params;
  const card = decodeCard(code);
  if (!card) notFound();

  const { celebration, values } = card;
  const shareUrl = absoluteUrl(`/w/${code}`);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Celebrations", path: "/celebrations" },
          {
            name: celebration.name,
            path: `/celebrations/${celebration.slug}`,
          },
          { name: "Shared card", path: `/w/${code}` },
        ])}
      />

      <div className="relative isolate mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
        <CelebrationAmbience
          slug={celebration.slug}
          accent={celebration.theme.accent}
          accent2={celebration.theme.accent2}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 opacity-60"
          style={{
            background: `radial-gradient(60% 100% at 50% 0%, ${celebration.theme.accent}33, transparent 70%)`,
          }}
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/celebrations/${celebration.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-muted transition hover:border-white/25 hover:text-ink"
          >
            <Motif name={celebration.motif} className="h-4 w-4 text-gold" />
            {celebration.name}
          </Link>
        </div>

        <div className="mt-6 animate-rise">
          <WishCard celebration={celebration} values={values} headingLevel="h1" />
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-faint">
            Share this card
          </p>
          <ShareButtons
            url={shareUrl}
            title={`${celebration.name} card`}
            text={celebration.defaultMessage}
            className="mt-3"
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-gold/20 bg-gold/[0.05] p-6 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">
            Made with Utsavam
          </p>
          <p className="max-w-md text-sm leading-6 text-muted">
            Create your own free {celebration.name}{" "}
            {celebration.category === "life" ? "invitation" : "greeting"} and
            share it as one link.
          </p>
          <Link
            href={`/create/${celebration.slug}`}
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-[#241200] transition hover:-translate-y-0.5 hover:bg-gold-soft"
          >
            Create your own
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </>
  );
}
