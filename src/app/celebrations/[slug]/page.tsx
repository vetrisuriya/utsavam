import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CelebrationCard } from "@/components/celebration-card";
import { FaqList } from "@/components/faq-list";
import { CelebrationAmbience } from "@/components/celebration-ambience";
import { JsonLd } from "@/components/json-ld";
import { Motif } from "@/components/motif";
import { NativeName } from "@/components/native-name";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { WishCard } from "@/components/wish-card";
import { ArrowRight } from "@/components/ui-icons";
import {
  CELEBRATIONS,
  getCelebration,
  getRelated,
  toCardData,
} from "@/lib/celebrations";
import { CATEGORY_MAP } from "@/lib/celebrations/categories";
import { isInvitation } from "@/lib/celebrations/presentation";
import type { Celebration } from "@/lib/celebrations/types";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  festivalJsonLd,
  howToJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

// The route is fully prerendered for every known celebration, so a blocking
// navigation is expected and preferable to an empty streaming shell.
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
  if (!celebration) {
    return { title: "Celebration not found" };
  }

  const noun = isInvitation(celebration) ? "invitation" : "wish";
  const title = `${celebration.name} ${noun} link — create & share for free`;
  const description = `${celebration.blurb} Create your free ${celebration.name} ${noun} link in minutes — no signup, no app.`;

  return {
    title,
    description,
    keywords: celebration.keywords,
    alternates: {
      canonical: `/celebrations/${celebration.slug}`,
    },
    openGraph: {
      type: "website",
      url: `/celebrations/${celebration.slug}`,
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

function pickRecipientKey(celebration: Celebration): string | undefined {
  const keys = [
    "to",
    "celebrant",
    "child",
    "baby",
    "name",
    "bride",
    "partner1",
    "family",
  ];
  return keys.find((key) =>
    celebration.fields.some((field) => field.key === key),
  );
}

function buildSampleValues(celebration: Celebration): Record<string, string> {
  const values: Record<string, string> = {};
  const recipientKey = pickRecipientKey(celebration);

  for (const field of celebration.fields) {
    if (field.type === "textarea") continue;
    if (field.key === "from") {
      values[field.key] = "Vetri Suriya";
    } else if (field.key === recipientKey) {
      values[field.key] = "Meera";
    } else if (field.key === "groom" || field.key === "partner2") {
      values[field.key] = "Karthik";
    } else if (field.key === "bride" || field.key === "partner1") {
      values[field.key] = "Meera";
    } else if (field.key === "family") {
      values[field.key] = "The Sharma family";
    } else if (field.type === "select") {
      values[field.key] = field.options?.[0] ?? "";
    } else if (field.type === "date") {
      values[field.key] = "2026-11-08";
    } else if (field.type === "time") {
      values[field.key] = "19:30";
    } else {
      const placeholder = field.placeholder ?? "";
      if (/e\.g\./i.test(placeholder)) {
        values[field.key] = placeholder.replace(/e\.g\.\s*/i, "");
      }
    }
  }

  values.message = celebration.defaultMessage;
  return values;
}

export default async function CelebrationPage({ params }: PageProps) {
  const { slug } = await params;
  const celebration = getCelebration(slug);
  if (!celebration) notFound();

  const category = CATEGORY_MAP[celebration.category];
  const related = getRelated(celebration);
  const invitation = isInvitation(celebration);
  const sample = buildSampleValues(celebration);
  const inputFields = celebration.fields.filter(
    (field) => field.type !== "textarea",
  );
  const noun = invitation ? "invitation" : "greeting";
  const region = celebration.region
    ? celebration.region.charAt(0).toLowerCase() + celebration.region.slice(1)
    : "across India and the diaspora";
  const quickAnswer =
    celebration.category === "life"
      ? `A ${celebration.name} invitation link is free to create, opens on any phone and needs no account. Add your details, preview the card live, then share one link.`
      : `${celebration.name} is celebrated around ${celebration.dateLabel}, ${region}. A personalised ${noun} link is free to create, needs no account and opens in any browser.`;

  return (
    <>
      <JsonLd
        data={[
          festivalJsonLd(celebration),
          howToJsonLd(celebration),
          faqJsonLd(celebration.faqs),
          webPageJsonLd({
            name: `${celebration.name} ${noun} link`,
            description: celebration.blurb,
            path: `/celebrations/${celebration.slug}`,
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
          ]),
        ]}
      />

      <div className="relative isolate">
        <CelebrationAmbience
          slug={celebration.slug}
          accent={celebration.theme.accent}
          accent2={celebration.theme.accent2}
        />
        <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-70"
          style={{
            background: `radial-gradient(60% 100% at 50% 0%, ${celebration.theme.accent}22, transparent 70%)`,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-24 h-64 w-64 rounded-full opacity-[0.18] blur-3xl animate-aurora"
          style={{ backgroundColor: celebration.theme.accent }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-64 h-56 w-56 rounded-full opacity-[0.12] blur-3xl animate-aurora"
          style={{
            backgroundColor: celebration.theme.accent2 ?? celebration.theme.accent,
            animationDelay: "-8s",
          }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Celebrations", href: "/celebrations" },
              { name: celebration.name },
            ]}
          />

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="animate-rise">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`/celebrations#${category.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition hover:border-white/25"
                  style={{ color: category.accent }}
                >
                  <Motif name={category.motif} className="h-3.5 w-3.5" />
                  {category.name}
                </Link>
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-faint">
                  {celebration.dateLabel}
                </span>
              </div>

              <h1 className="mt-5 font-display text-[2.6rem] leading-[1.02] tracking-tight text-ink sm:text-6xl">
                {celebration.name}
              </h1>
              <NativeName
                slug={celebration.slug}
                name={celebration.name}
                className="mt-2 block text-2xl text-gold/85"
              />

              <p className="mt-5 max-w-2xl font-display text-xl leading-snug text-ink/90 sm:text-2xl">
                {celebration.tagline}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                {celebration.intro}
              </p>
              <p className="quick-answer mt-4 max-w-2xl rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-muted">
                {quickAnswer}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href={`/create/${celebration.slug}`}
                  className="btn-shine group inline-flex h-12 items-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-[#241200] transition hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-[0_20px_50px_-20px_rgba(246,183,60,0.9)]"
                >
                  Create your {noun}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/celebrations"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-ink transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                  Browse others
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
                    Where it is celebrated
                  </p>
                  <p className="mt-1.5 text-sm text-ink">
                    {celebration.region ?? "Across India and the diaspora"}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-faint">
                    When it falls
                  </p>
                  <p className="mt-1.5 text-sm text-ink">
                    {celebration.dateLabel}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative animate-rise" style={{ animationDelay: "140ms" }}>
              <div
                aria-hidden="true"
                className="animate-glow absolute -inset-8 -z-10 rounded-full opacity-50 blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${celebration.theme.accent}33, transparent 70%)`,
                }}
              />
              <Motif
                aria-hidden="true"
                name={celebration.motif}
                className="animate-float pointer-events-none absolute -right-5 -top-7 h-14 w-14 opacity-40"
                style={{ color: celebration.theme.accent }}
              />
              <Motif
                aria-hidden="true"
                name="star"
                className="animate-twinkle pointer-events-none absolute -bottom-6 -left-5 h-9 w-9 opacity-50"
                style={{
                  color: celebration.theme.accent2 ?? celebration.theme.accent,
                }}
              />
              <WishCard celebration={celebration} values={sample} />
              <p className="mt-3 text-center text-xs text-faint">
                Sample {noun} · yours will use your names and words
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-white/10 bg-white/[0.012]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <section>
            <Reveal variant="left">
            <h2 className="font-display text-2xl tracking-tight text-ink">
              How {celebration.name} is celebrated
            </h2>
            <ul className="mt-5 space-y-3">
              {celebration.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: celebration.theme.accent }}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
            </Reveal>
          </section>

          <section>
            <Reveal variant="right" delay={100}>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              What your card can include
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              The {celebration.name} form is built for this occasion, so you only
              fill in what matters.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {inputFields.map((field) => (
                <li
                  key={field.key}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted"
                >
                  {field.label}
                  {field.required ? (
                    <span className="ml-1 text-gold" aria-hidden="true">
                      *
                    </span>
                  ) : null}
                </li>
              ))}
              <li className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted">
                A personal message
              </li>
            </ul>
            <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/[0.06] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Ready in about two minutes
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Fill the form, watch the live preview, then share one link. No
                signup, no payment and nothing stored on a server.
              </p>
              <Link
                href={`/create/${celebration.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-gold-soft"
              >
                Start your {noun}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            </Reveal>
          </section>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal variant="left">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              {celebration.name} questions
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Short answers about the festival, the card and sharing it.{" "}
              <Link
                href="/about"
                className="text-gold underline decoration-gold/30 underline-offset-4 transition hover:text-gold-soft"
              >
                More about Utsavam
              </Link>
            </p>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <FaqList faqs={celebration.faqs} />
          </Reveal>
        </div>

        {related.length > 0 ? (
          <section className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-4">
              <h2 className="font-display text-2xl tracking-tight text-ink">
                You may also celebrate
              </h2>
              <Link
                href="/celebrations"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition hover:text-gold-soft"
              >
                All celebrations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} className="h-full" delay={index * 70}>
                  <CelebrationCard celebration={toCardData(item)} />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.025] p-8 sm:p-10">
          <Reveal variant="zoom">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold/80">
                Free · No signup · Open source
              </p>
              <h2 className="mt-2 font-display text-2xl tracking-tight text-ink sm:text-3xl">
                Create a {celebration.name} {noun} now
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                Add names, a message and the details you want to share. Your link
                is ready in one click.
              </p>
            </div>
            <Link
              href={`/create/${celebration.slug}`}
              className="btn-shine group inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-[#241200] transition hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              Create link
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          </Reveal>
        </section>
      </div>
      </div>

      <SiteFooter />
    </>
  );
}
