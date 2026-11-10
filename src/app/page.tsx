import type { Metadata } from "next";
import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { CelebrationAmbience } from "@/components/celebration-ambience";
import { CelebrationCard } from "@/components/celebration-card";
import { Confetti } from "@/components/confetti";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Motif } from "@/components/motif";
import { NativeName } from "@/components/native-name";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { WishCard } from "@/components/wish-card";
import {
  ArrowRight,
  BoltIcon,
  GithubIcon,
  GlobeIcon,
  HeartIcon,
  ShieldIcon,
  SparkleIcon,
} from "@/components/ui-icons";
import { CATEGORIES } from "@/lib/celebrations/categories";
import {
  CELEBRATIONS,
  getCelebration,
  toCardData,
} from "@/lib/celebrations";
import type { Faq } from "@/lib/celebrations/types";
import { faqJsonLd, howToJsonLd, itemListJsonLd, organizationJsonLd, softwareApplicationJsonLd, webPageJsonLd, websiteJsonLd } from "@/lib/seo";
import { DEFAULT_KEYWORDS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Utsavam — free celebration links for Indian festivals",
  description:
    "Create a personalised Diwali, Onam, Pongal, Holi, Christmas, Ramzan, birthday or wedding card and share it as one link. Free, no signup, no app, open source.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Utsavam — one beautiful link for every celebration",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Utsavam — one beautiful link for every celebration",
    description: SITE.description,
  },
};

const HOME_FAQS: Faq[] = [
  {
    q: "What is Utsavam?",
    a: "Utsavam is a free, open-source web app for creating personalised celebration links. You pick a festival or life moment, add names and a short message, and share the generated link on WhatsApp, email or social media. There is no signup and no app to install.",
  },
  {
    q: "Which celebrations can I create a link for?",
    a: "Utsavam covers 32 celebrations: Hindu festivals such as Diwali, Holi, Onam, Pongal, Navratri, Ganesh Chaturthi, Janmashtami, Raksha Bandhan, Ugadi, Makar Sankranti, Maha Shivratri, Ram Navami, Karva Chauth, Vishu and Chhath Puja; Sikh and Jain observances such as Vaisakhi, Guru Nanak Gurpurab, Bandi Chhor Divas, Mahavir Jayanti and Paryushan; Christmas and New Year; Ramzan, Eid and Muharram; plus birthdays, weddings, engagements, ear piercing, namkaran, annaprashan, griha pravesh and upanayana.",
  },
  {
    q: "Is Utsavam really free?",
    a: "Yes. Utsavam is free to use and fully open source. You can create and share as many celebration links as you like, with no watermark, trial or paywall.",
  },
  {
    q: "Do I need an account to create a card?",
    a: "No account, email address or phone number is needed. Every card is generated in your browser, so you can start and finish in under two minutes.",
  },
  {
    q: "How does the personalised link work?",
    a: "The details you type are encoded into the link itself. When someone opens the link, their browser decodes the same information and shows the card. Utsavam does not store your names, message or venue on a server.",
  },
  {
    q: "Can I share the link on WhatsApp?",
    a: "Yes. Every card page includes one-tap sharing for WhatsApp, Telegram, X and Facebook, plus a copy-link button. The link opens in any browser and needs no app.",
  },
  {
    q: "Is Utsavam available in Indian languages?",
    a: "Cards display the festival or occasion name in a second Indian language of your choice — Tamil, Hindi, Telugu or Malayalam. Tamil is selected by default, and your choice is remembered on your device. The form and the rest of the site are in English.",
  },
  {
    q: "Is the project open source?",
    a: "Yes. The full source code is on GitHub. You can self-host it, contribute celebrations, or adapt the design for your own community.",
  },
];

const STEPS = [
  {
    title: "Pick a celebration",
    body: "Choose from Hindu festivals, Sikh and Jain observances, Christmas, New Year, Ramzan, Muharram or a family function such as a wedding or ear piercing.",
    motif: "diya" as const,
  },
  {
    title: "Add your details",
    body: "The form changes for each occasion — names, muhurtham time, venue, RSVP or a personal message. A live preview shows the card as you type.",
    motif: "rangoli" as const,
  },
  {
    title: "Share one link",
    body: "Create the link and send it on WhatsApp, SMS or email. No signup, no attachments and nothing stored on our servers.",
    motif: "rakhi" as const,
  },
];

const FEATURES = [
  {
    title: "No signup, ever",
    body: "Open a celebration, fill the form, share the link. There is no account to create and no email to verify.",
    icon: BoltIcon,
  },
  {
    title: "Private by design",
    body: "Your details live inside the link, not in a database. We do not store names, messages or venue addresses.",
    icon: ShieldIcon,
  },
  {
    title: "Made for Indian celebrations",
    body: "Fields designed around muhurtham, samskaras, sadya, pookalam and langar — not a generic greeting template.",
    icon: HeartIcon,
  },
  {
    title: "Works everywhere",
    body: "One link opens on Android, iPhone and desktop, in any browser. Native share sheets and WhatsApp previews are supported.",
    icon: GlobeIcon,
  },
];

export default function HomePage() {
  const diwali = getCelebration("diwali");
  const featured = CELEBRATIONS.filter((item) => item.featured).slice(0, 8);
  const cardData = CELEBRATIONS.map(toCardData);
  const howTo = diwali ? howToJsonLd(diwali) : null;

  const jsonLd = [
    websiteJsonLd(),
    organizationJsonLd(),
    softwareApplicationJsonLd(),
    itemListJsonLd(cardData),
    faqJsonLd(HOME_FAQS),
    webPageJsonLd({
      name: "Utsavam — free celebration links for Indian festivals and life moments",
      description: SITE.description,
      path: "/",
      about: "Indian festivals, family functions and celebration greeting links",
      image: "/opengraph-image",
      keywords: DEFAULT_KEYWORDS,
    }),
    ...(howTo ? [howTo] : []),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <CelebrationAmbience slug="utsavam" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-gold/10 blur-3xl animate-aurora"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-rose/10 blur-3xl animate-aurora"
          style={{ animationDelay: "-7s" }}
        />
        <div
          aria-hidden="true"
          className="pattern-grid mask-fade pointer-events-none absolute inset-0 opacity-[0.35]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        >
          <Motif
            name="lotus"
            className="animate-float absolute left-[3%] top-[24%] h-11 w-11 text-saffron/25"
          />
          <Motif
            name="star"
            className="animate-twinkle absolute right-[5%] top-[15%] h-9 w-9 text-gold/40"
          />
          <Motif
            name="mango"
            className="animate-sway absolute bottom-[9%] left-[44%] h-10 w-10 text-mint/20"
          />
          <Motif
            name="thread"
            className="animate-drift absolute bottom-[26%] right-[2%] h-9 w-9 text-rose/25"
          />
        </div>
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-20">
          <div className="animate-rise">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-muted">
              <span className="inline-flex items-center gap-1.5 text-gold">
                <SparkleIcon className="animate-twinkle h-3.5 w-3.5" />
                32 celebrations
              </span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              Free forever
              <span className="h-1 w-1 rounded-full bg-white/20" />
              No signup
            </div>

            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.1rem]">
              One beautiful link for{" "}
              <span className="text-shimmer">every celebration</span>.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Create personalised greeting and invitation links for Diwali,
              Onam, Pongal, Holi, Christmas, Ramzan, birthdays, weddings and
              every function in between. Fill a short form, share one link, and
              skip the printed card.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/celebrations"
                className="btn-shine group inline-flex h-12 items-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-[#241200] transition hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-[0_20px_50px_-20px_rgba(246,183,60,0.95)]"
              >
                Create your first card
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-ink transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                See how it works
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[
                { value: "32", label: "Celebrations" },
                { value: "5", label: "Traditions" },
                { value: "₹0", label: "Always free" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="animate-rise"
                  style={{ animationDelay: `${200 + index * 90}ms` }}
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="font-display text-2xl text-ink sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-[11px] uppercase tracking-[0.22em] text-faint">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {diwali ? (
            <div
              className="relative mx-auto w-full max-w-md animate-rise lg:max-w-none"
              style={{ animationDelay: "140ms" }}
            >
              <div
                aria-hidden="true"
                className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgba(246,183,60,0.18),transparent_65%)] blur-2xl"
              />
              <div className="animate-float">
                <div className="rotate-[-2deg] transition-transform duration-500 hover:rotate-0">
                  <WishCard
                    celebration={diwali}
                    values={{
                      from: "Vetri Suriya",
                      to: "Meera",
                      message:
                        "May your Diwali glow with light, laughter and the sweetness of new beginnings.",
                    }}
                  />
                </div>
              </div>

              <div className="absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-night-2/90 p-3 shadow-2xl backdrop-blur-md sm:block">
                <p className="text-[9px] uppercase tracking-[0.18em] text-faint">
                  Delivered as
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-ink">
                  <Motif name="rakhi" className="h-4 w-4 text-rose" />A single
                  link
                </p>
              </div>

              <div className="absolute -right-3 bottom-14 hidden rounded-2xl border border-white/10 bg-night-2/90 p-3 shadow-2xl backdrop-blur-md sm:block">
                <p className="text-[9px] uppercase tracking-[0.18em] text-faint">
                  Takes about
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-ink">
                  <BoltIcon className="h-4 w-4 text-mint" />2 minutes
                </p>
              </div>

              <Motif
                name="rangoli"
                className="animate-twinkle absolute -right-6 -top-6 hidden h-14 w-14 text-gold/60 sm:block"
              />
              <Motif
                name="modak"
                className="animate-drift absolute -bottom-6 left-8 hidden h-10 w-10 text-saffron/60 sm:block"
              />
            </div>
          ) : null}
        </div>
      </section>

      {/* Native-name ribbon */}
      <div
        aria-hidden="true"
        className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-3"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-night to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-night to-transparent" />
        <div className="marquee-track flex w-max animate-marquee items-center gap-8 px-4">
          {[...CELEBRATIONS, ...CELEBRATIONS].map((celebration, index) => (
            <span
              key={`${celebration.slug}-${index}`}
              className="flex shrink-0 items-center gap-2.5 text-sm text-muted"
            >
              <Motif
                name={celebration.motif}
                className="h-3.5 w-3.5"
                style={{ color: celebration.theme.accent }}
              />
              {celebration.name}
              <NativeName
                slug={celebration.slug}
                name={celebration.name}
                className="text-gold/75"
              />
              <span className="h-1 w-1 rounded-full bg-white/15" />
            </span>
          ))}
        </div>
      </div>

      {/* AEO quick answer */}
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="surface quick-answer rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold/80">
                The short answer
              </p>
              <p className="mt-2 text-base leading-7 text-muted">
                <strong className="text-ink">Utsavam</strong> is a free,
                open-source tool for creating personalised celebration links. It
                supports 32 Indian festivals and family functions — including
                Diwali, Onam, Pongal, Christmas, New Year, Ramzan, Muharram,
                birthdays, weddings and ear piercing — with no signup and no
                data stored on a server.
              </p>
            </div>
            <Link
              href="/about"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold transition hover:text-gold-soft"
            >
              About the project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <Reveal>
          <SectionHeading
            kicker="Browse by tradition"
            title="A card for every occasion you celebrate"
            description="From temple festivals to family milestones, each celebration has its own page, its own fields and its own hand-picked theme."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CATEGORIES.map((category, index) => (
            <Reveal key={category.id} className="h-full" delay={index * 70}>
              <CategoryCard
                category={category}
                count={CELEBRATIONS.filter((item) => item.category === category.id).length}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="border-y border-white/10 bg-white/[0.012]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <Reveal>
            <SectionHeading
              kicker="Most shared"
              title="Popular celebrations this season"
              description="Start with a favourite, or browse the full list of 32 celebrations."
              action={{ href: "/celebrations", label: "All celebrations" }}
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((celebration, index) => (
              <Reveal key={celebration.slug} className="h-full" delay={index * 60}>
                <CelebrationCard celebration={toCardData(celebration)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full event directory */}
      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <Reveal>
          <SectionHeading
            kicker="Everything we cover"
            title="32 celebrations, one place"
            description="Every festival and family function has a dedicated page with fields built around how it is actually celebrated."
          />
        </Reveal>
        <div className="mt-10 space-y-10">
          {CATEGORIES.map((category) => {
            const items = CELEBRATIONS.filter(
              (celebration) => celebration.category === category.id,
            );
            return (
              <Reveal
                key={category.id}
                className="grid gap-5 border-b border-white/10 pb-8 last:border-0 md:grid-cols-[240px_1fr]"
              >
                <div>
                  <div className="flex items-center gap-2.5">
                    <span
                      className="grid h-9 w-9 place-items-center rounded-xl border border-white/10"
                      style={{
                        color: category.accent,
                        backgroundColor: `${category.accent}14`,
                      }}
                    >
                      <Motif name={category.motif} className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg tracking-tight text-ink">
                      {category.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {category.blurb}
                  </p>
                  <Link
                    href={`/celebrations#${category.id}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-gold transition hover:text-gold-soft"
                  >
                    Browse {category.shortName}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/celebrations/${item.slug}`}
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2 text-sm text-muted transition hover:-translate-y-0.5 hover:border-white/25 hover:text-ink"
                      >
                        <Motif
                          name={item.motif}
                          className="h-3.5 w-3.5 text-[var(--chip-accent)]"
                          style={
                            {
                              "--chip-accent": item.theme.accent,
                            } as React.CSSProperties
                          }
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="scroll-mt-24 border-y border-white/10 bg-white/[0.012]"
      >
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <Reveal>
            <SectionHeading
              kicker="How it works"
              title="Three steps, about two minutes"
              description="No design skills, no printing, no account. The preview updates while you type."
              align="center"
            />
          </Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                className="surface relative overflow-hidden rounded-2xl p-6"
              >
                <Reveal delay={index * 100}>
                  <span className="absolute right-5 top-4 font-display text-5xl text-white/[0.06]">
                    0{index + 1}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
                    <Motif name={step.motif} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-muted">
                    {step.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal variant="left">
            <SectionHeading
              kicker="Why Utsavam"
              title="Built for the way India celebrates"
              description="Most greeting apps are generic template galleries. Utsavam is a small, careful tool for the occasions you actually celebrate — and it is open source, so it stays honest."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={index * 80}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/10 text-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {feature.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-y border-white/10 bg-white/[0.012]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal variant="left">
            <SectionHeading
              kicker="Questions"
              title="Everything you might ask"
              description="Still curious? The About page explains the project, the data model and the licence."
              action={{ href: "/about", label: "More about Utsavam" }}
            />
          </Reveal>
          <Reveal variant="right" delay={100}>
            <FaqList faqs={HOME_FAQS} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-[#1c1029] via-[#160c22] to-[#2a1408] p-8 sm:p-12">
          <Confetti />
          <div
            aria-hidden="true"
            className="animate-glow absolute -right-16 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
          />
          <Motif
            aria-hidden="true"
            name="kalash"
            className="animate-float pointer-events-none absolute -bottom-10 right-6 h-48 w-48 text-gold/10"
          />
          <Reveal variant="zoom">
          <div className="relative max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
              Your next celebration
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-ink sm:text-[2.6rem]">
              Someone you love has a reason to celebrate.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Make them a card in the time it takes to send a text message. Free,
              private and open source — today and every festival after.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/celebrations"
                className="btn-shine group inline-flex h-12 items-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-[#241200] transition hover:-translate-y-0.5 hover:bg-gold-soft"
              >
                Browse all celebrations
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={SITE.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-ink transition hover:border-white/30 hover:bg-white/[0.05]"
              >
                <GithubIcon className="h-4 w-4" />
                Star on GitHub
              </Link>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
