import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { CHANGELOG } from "@/lib/changelog";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Changelog — what is new",
  description:
    "Release notes for Utsavam: new celebrations, features, accessibility improvements and SEO updates.",
  alternates: { canonical: "/changelog" },
  openGraph: {
    url: "/changelog",
    title: "Utsavam changelog",
    description:
      "Release notes for Utsavam: new celebrations, features, accessibility improvements and SEO updates.",
  },
};

export default function ChangelogPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: "Utsavam changelog",
            description:
              "Release notes for the Utsavam celebration link maker.",
            path: "/changelog",
            image: "/opengraph-image",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Changelog", path: "/changelog" },
          ]),
        ]}
      />

      <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Breadcrumbs items={[{ name: "Changelog" }]} />

        <header className="animate-rise">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            Release notes
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Changelog
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            Everything that changes in Utsavam is recorded here. The same history
            lives in{" "}
            <a
              href={`${SITE.repo}/blob/main/CHANGELOG.md`}
              target="_blank"
              rel="noreferrer noopener"
              className="text-gold underline decoration-gold/30 underline-offset-4"
            >
              CHANGELOG.md
            </a>{" "}
            in the repository.
          </p>
        </header>

        <div className="mt-12 space-y-12">
          {CHANGELOG.map((entry, index) => (
            <Reveal key={entry.version} delay={index * 80}>
            <article
              className="relative border-l border-white/10 pl-6 sm:pl-8"
            >
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_4px_rgba(246,183,60,0.12)]" />
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-display text-2xl tracking-tight text-ink">
                  v{entry.version}
                </h2>
                <span className="rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                  {entry.date}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-ink">{entry.title}</p>
              <p className="mt-1.5 text-sm leading-6 text-muted">
                {entry.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {entry.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold/70"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
          <h2 className="font-display text-xl text-ink">What is next</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Planned work includes more regional festivals, Indian-language form
            labels, downloadable card images, and an optional self-hosting guide.
            Ideas and corrections are welcome on{" "}
            <a
              href={SITE.repoIssues}
              target="_blank"
              rel="noreferrer noopener"
              className="text-gold underline decoration-gold/30 underline-offset-4"
            >
              GitHub Issues
            </a>
            .
          </p>
          <Link
            href="/celebrations"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-gold-soft"
          >
            Browse celebrations
          </Link>
        </div>
        </Reveal>
      </div>

      <SiteFooter />
    </>
  );
}
