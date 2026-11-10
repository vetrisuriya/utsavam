import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Motif } from "@/components/motif";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight, GithubIcon, HeartIcon, ShieldIcon, SparkleIcon } from "@/components/ui-icons";
import { CATEGORIES } from "@/lib/celebrations/categories";
import { CELEBRATIONS } from "@/lib/celebrations";
import {
  breadcrumbJsonLd,
  organizationJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { DEFAULT_KEYWORDS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About Utsavam — free, open-source celebration links" },
  description:
    "Utsavam is an open-source project by Vetri Suriya for creating personalised celebration links for Indian festivals, family functions and Hindu samskaras.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    title: "About Utsavam",
    description:
      "Why Utsavam exists, how private links work, and how to contribute to the open-source project.",
  },
};

const PRINCIPLES = [
  {
    title: "Free, without a catch",
    body: "No trial, no watermark and no paid tier. Every celebration is available to everyone, and the code is open source so it stays that way.",
    icon: SparkleIcon,
  },
  {
    title: "Private by architecture",
    body: "There is no database of wishes. Card details are encoded into the link itself, which means we cannot read, sell or leak them.",
    icon: ShieldIcon,
  },
  {
    title: "Respectful by default",
    body: "Wording for each tradition is written carefully, reviewed against how the occasion is observed, and free of greeting-card clichés.",
    icon: HeartIcon,
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(),
          webPageJsonLd({
            name: "About Utsavam",
            description:
              "Why Utsavam exists, how the private link format works, and how to contribute.",
            path: "/about",
            type: "AboutPage",
            image: "/opengraph-image",
            keywords: DEFAULT_KEYWORDS,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <div className="relative isolate mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-20 -z-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-aurora"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-24 -z-10 h-64 w-64 rounded-full bg-rose/10 blur-3xl animate-aurora"
          style={{ animationDelay: "-7s" }}
        />
        <Breadcrumbs items={[{ name: "About" }]} />

        <header className="max-w-3xl animate-rise">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            About the project
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
            A small, careful tool for the way we celebrate.
          </h1>
          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
            Utsavam (उत्सव) is the Sanskrit word for a festival, a celebration, a
            joyous occasion. It is also the name of this project: a free,
            open-source way to make a personal card for every Indian festival and
            family milestone, and to share it as one beautiful link.
          </p>
        </header>

        <section className="mt-14 grid gap-8 border-t border-white/10 pt-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              Why this exists
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-muted sm:text-base">
              <p>
                Every festival season, the same thing happens. Someone forwards a
                blurry image on WhatsApp. Someone else asks for a wedding card in
                editable format. A family spends days designing a printed
                invitation for a small ear-piercing ceremony that only thirty
                people will attend.
              </p>
              <p>
                Utsavam is an attempt to make that easier. Pick the occasion,
                fill in what actually matters — a name, a muhurtham, a venue, a
                line in your own voice — and get a link that opens instantly on
                any phone.
              </p>
              <p>
                It covers Hindu festivals from Diwali and Onam to Chhath Puja and
                Karva Chauth, Sikh and Jain observances, Christmas and New Year,
                Ramzan, Eid and Muharram, and life moments such as birthdays,
                weddings, engagements, ear piercing, namkaran, annaprashan, griha
                pravesh and upanayana.
              </p>
            </div>
          </div>

          <Reveal variant="right" delay={100}>
          <div className="surface rounded-2xl p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">
              At a glance
            </p>
            <dl className="mt-4 space-y-4 text-sm">
              {[
                ["Celebrations", `${CELEBRATIONS.length} across ${CATEGORIES.length} groups`],
                ["Price", "Free, always"],
                ["Account needed", "No"],
                ["Data stored", "None — details live in the link"],
                ["Built with", "Next.js, React, TypeScript, Tailwind CSS"],
                ["Created by", SITE.creator.name],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 border-b border-white/[0.06] pb-3 last:border-0 last:pb-0">
                  <dt className="text-faint">{label}</dt>
                  <dd className="text-right text-ink">{value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={SITE.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-[#241200] transition hover:bg-gold-soft"
            >
              <GithubIcon className="h-4 w-4" />
              View source on GitHub
            </a>
          </div>
          </Reveal>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            How a link works
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
            When you press create, the form values are serialised as compact
            JSON, encoded into the URL, and appended to a path like{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-ink">
              /w/…
            </code>
            . When someone opens the link, the page decodes the payload in the
            browser and renders the card. No wish is ever written to a database.
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "You fill the form",
                body: "Names, message, date, venue and other fields specific to the celebration.",
              },
              {
                step: "02",
                title: "Your browser encodes it",
                body: "The values become a versioned, base64url-encoded payload inside the URL.",
              },
              {
                step: "03",
                title: "Anyone can open it",
                body: "The recipient's browser decodes and renders the same card. No login, no expiry.",
              },
            ].map((item, index) => (
              <li
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
              >
                <Reveal delay={index * 90}>
                  <p className="font-display text-2xl text-gold/60">{item.step}</p>
                  <h3 className="mt-2 text-sm font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">
                    {item.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs leading-5 text-faint">
            The trade-off is honest: anyone with the link can read the card, so
            treat it as you would a postcard. Read the{" "}
            <Link
              href="/privacy"
              className="text-gold underline decoration-gold/30 underline-offset-4"
            >
              privacy note
            </Link>{" "}
            for details.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            What we are trying to get right
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {PRINCIPLES.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Reveal key={principle.title} className="h-full" delay={index * 90}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/10 text-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-ink">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {principle.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10">
          <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            The traditions we cover
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {CATEGORIES.map((category, index) => (
              <Reveal key={category.id} delay={index * 70}>
              <div className="flex gap-3">
                <span
                  className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10"
                  style={{
                    color: category.accent,
                    backgroundColor: `${category.accent}14`,
                  }}
                >
                  <Motif name={category.motif} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">
                    {category.name}
                  </h3>
                  <p className="mt-0.5 text-sm leading-6 text-muted">
                    {category.blurb}
                  </p>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
          <Link
            href="/celebrations"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-gold-soft"
          >
            Browse all celebrations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            Open source, made in India
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-muted sm:text-base">
            <p>
              Utsavam is built and maintained by{" "}
              <a
                href={SITE.creator.url}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-ink underline decoration-gold/40 underline-offset-4 transition hover:text-gold"
              >
                {SITE.creator.name}
              </a>{" "}
              and released as open source. Contributions are welcome:
              corrections to festival descriptions, new celebration ideas,
              translations, accessibility fixes and design improvements.
            </p>
            <p>
              The source, issue tracker and contribution guide live on{" "}
              <a
                href={SITE.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-ink underline decoration-gold/40 underline-offset-4 transition hover:text-gold"
              >
                GitHub
              </a>
              . If something about a tradition is worded incorrectly, please open
              an issue — accuracy matters more than speed.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/changelog"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold text-ink transition hover:border-white/30 hover:bg-white/[0.05]"
            >
              Read the changelog
            </Link>
            <a
              href={`${SITE.repo}/blob/main/CONTRIBUTING.md`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold text-ink transition hover:border-white/30 hover:bg-white/[0.05]"
            >
              Contributing guide
            </a>
          </div>
        </section>
      </div>

      <SiteFooter />
    </>
  );
}
