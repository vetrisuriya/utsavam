import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CelebrationExplorer } from "@/components/celebration-explorer";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight, SparkleIcon } from "@/components/ui-icons";
import {
  CELEBRATIONS,
  toCardData,
} from "@/lib/celebrations";
import { CATEGORIES } from "@/lib/celebrations/categories";
import type { Faq } from "@/lib/celebrations/types";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { DEFAULT_KEYWORDS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "32 Indian celebrations — festivals and life moments",
  },
  description:
    "Browse all 32 celebrations on Utsavam: Hindu festivals, Sikh and Jain observances, Christmas, New Year, Ramzan, Muharram, birthdays and weddings.",
  alternates: {
    canonical: "/celebrations",
  },
  openGraph: {
    url: "/celebrations",
    title: "All 32 celebrations on Utsavam",
    description:
      "Browse 32 Indian festivals and family functions, each with its own personalised card and invitation form.",
  },
  twitter: {
    card: "summary_large_image",
    title: "All 32 celebrations on Utsavam",
    description:
      "Browse 32 Indian festivals and family functions, each with its own personalised card and invitation form.",
  },
};

const FAQS: Faq[] = [
  {
    q: "How many celebrations does Utsavam support?",
    a: "Utsavam currently supports 32 celebrations across five groups: Hindu festivals, Sikh and Jain observances, Christmas and New Year, Ramzan and Muharram, and life moments such as birthdays, weddings and Hindu samskaras.",
  },
  {
    q: "Can I create a card for a festival that is not listed?",
    a: "Not yet, but the project is open source and new celebrations are added regularly. You can open an issue on GitHub with the festival name, the region it is celebrated in, and the details a card should include.",
  },
  {
    q: "Do festivals and life events use the same form?",
    a: "No. Each celebration has its own field set. Festival cards focus on a personal wish, while invitations include date, time, venue and RSVP fields. Wedding and muhurtham cards also include both partners' names.",
  },
];

export default function CelebrationsPage() {
  const cards = CELEBRATIONS.map(toCardData);

  return (
    <>
      <JsonLd
        data={[
          itemListJsonLd(cards),
          webPageJsonLd({
            name: "All celebrations on Utsavam",
            description:
              "Browse 32 Indian festivals, Sikh and Jain observances, Christmas and New Year celebrations, Islamic observances and life moments.",
            path: "/celebrations",
            type: "CollectionPage",
            image: "/opengraph-image",
            keywords: DEFAULT_KEYWORDS,
          }),
          faqJsonLd(FAQS),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Celebrations", path: "/celebrations" },
          ]),
        ]}
      />

      <div className="relative isolate mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-24 -z-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl animate-aurora"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-32 -z-10 h-72 w-72 rounded-full bg-rose/10 blur-3xl animate-aurora"
          style={{ animationDelay: "-6s" }}
        />
        <Breadcrumbs items={[{ name: "Celebrations" }]} />

        <header className="max-w-3xl animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            <SparkleIcon className="h-3.5 w-3.5" />
            32 celebrations · 5 traditions
          </span>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
            Find your celebration
          </h1>
          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
            Every festival and family function has a card designed around how it
            is actually celebrated — from diyas and pookalam to muhurtham times
            and RSVP numbers. Search, filter by tradition, or browse the full
            list.
          </p>
          <p className="quick-answer mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-muted">
            <strong className="text-ink">Quick answer:</strong> choose a
            celebration, fill in the names and details, then share the generated
            link. No account is required and the details stay inside the link.
          </p>
        </header>

        <div className="mt-10">
          <CelebrationExplorer items={cards} />
        </div>

        <section className="mt-20">
          <Reveal>
            <SectionHeading
              kicker="By tradition"
              title="Browse by category"
              description="Each category has its own themes, motifs and field sets."
              action={{ href: "/", label: "Back to home" }}
            />
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category, index) => {
              const count = CELEBRATIONS.filter(
                (celebration) => celebration.category === category.id,
              ).length;
              return (
                <Reveal key={category.id} className="h-full" delay={index * 60}>
                  <Link
                    href={`#${category.id}`}
                    className="card-shine group flex h-full items-center justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.05]"
                  >
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {category.name}
                      </p>
                      <p className="mt-0.5 text-xs text-faint">
                        {count} celebrations
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-faint transition-transform group-hover:translate-x-0.5 group-hover:text-gold" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal variant="left">
            <SectionHeading
              kicker="Questions"
              title="About the collection"
              description={`Utsavam is free, open source and maintained in the open. Learn more on the About page or on GitHub.`}
              action={{ href: SITE.repo, label: "View on GitHub" }}
            />
          </Reveal>
          <Reveal variant="right" delay={100}>
            <FaqList faqs={FAQS} />
          </Reveal>
        </section>
      </div>

      <SiteFooter />
    </>
  );
}
