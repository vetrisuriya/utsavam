import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CelebrationAmbience } from "@/components/celebration-ambience";
import { CelebrationForm } from "@/components/celebration-form";
import { JsonLd } from "@/components/json-ld";
import { Motif } from "@/components/motif";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight } from "@/components/ui-icons";
import { CELEBRATIONS, getCelebration } from "@/lib/celebrations";
import { isInvitation } from "@/lib/celebrations/presentation";
import {
  breadcrumbJsonLd,
  howToJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

// Every celebration is prerendered, so allow a blocking navigation into the form.
export const instant = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CELEBRATIONS.map((celebration) => ({ slug: celebration.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const celebration = getCelebration(slug);
  if (!celebration) return { title: "Celebration not found" };

  const noun = isInvitation(celebration) ? "invitation" : "wish";
  const title = `Create a ${celebration.name} ${noun} — free link generator`;
  const description = `Fill in the ${celebration.name} form, preview your card live and share a personalised link. No signup, no app and no printing.`;

  return {
    title,
    description,
    keywords: celebration.keywords,
    alternates: {
      canonical: `/create/${celebration.slug}`,
    },
    openGraph: {
      url: `/create/${celebration.slug}`,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CreatePage({ params }: PageProps) {
  const { slug } = await params;
  const celebration = getCelebration(slug);
  if (!celebration) notFound();

  const invitation = isInvitation(celebration);
  const noun = invitation ? "invitation" : "greeting";

  return (
    <>
      <JsonLd
        data={[
          howToJsonLd(celebration),
          webPageJsonLd({
            name: `Create a ${celebration.name} ${noun}`,
            description: celebration.blurb,
            path: `/create/${celebration.slug}`,
            about: celebration.name,
            image: `/celebrations/${celebration.slug}/opengraph-image`,
            keywords: celebration.keywords,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Celebrations", path: "/celebrations" },
            {
              name: celebration.name,
              path: `/celebrations/${celebration.slug}`,
            },
            { name: `Create ${noun}`, path: `/create/${celebration.slug}` },
          ]),
        ]}
      />

      <div className="relative isolate mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <CelebrationAmbience
          slug={celebration.slug}
          accent={celebration.theme.accent}
          accent2={celebration.theme.accent2}
        />
        <Breadcrumbs
          items={[
            { name: "Celebrations", href: "/celebrations" },
            {
              name: celebration.name,
              href: `/celebrations/${celebration.slug}`,
            },
            { name: `Create ${noun}` },
          ]}
        />

        <header className="animate-rise flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold/90">
              <Motif name={celebration.motif} className="h-4 w-4" />
              {celebration.name} {noun}
            </div>
            <h1 className="mt-3 font-display text-3xl leading-[1.05] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Create your {celebration.name} {noun}
            </h1>
            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
              {invitation
                ? "Add the names, date, time and venue. Share one link with everyone on your list."
                : "Add your names and a short message. Share one link that opens beautifully on any phone."}
            </p>
          </div>
          <Link
            href={`/celebrations/${celebration.slug}`}
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-muted transition hover:text-gold"
          >
            About {celebration.name}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </header>

        <div className="mt-8 animate-rise" style={{ animationDelay: "120ms" }}>
          <CelebrationForm celebration={celebration} />
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs leading-5 text-faint">
          Tip: bookmark this page or keep the generated link somewhere safe.
          Utsavam does not store cards, so a lost link cannot be recovered from
          our servers.{" "}
          <Link
            href="/privacy"
            className="underline decoration-white/20 underline-offset-4 transition hover:text-ink"
          >
            How your data works
          </Link>
          .
        </p>
      </div>

      <SiteFooter />
    </>
  );
}
