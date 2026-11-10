import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Terms of use — Utsavam" },
  description:
    "The terms for using Utsavam: free personal use, acceptable use, no warranty, MIT licensed code and open-source contributions.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "9 November 2026";

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: "Utsavam terms of use",
            description:
              "Terms for using the free, open-source Utsavam celebration link maker.",
            path: "/terms",
            image: "/opengraph-image",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Terms", path: "/terms" },
          ]),
        ]}
      />

      <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Breadcrumbs items={[{ name: "Terms" }]} />

        <header className="animate-rise">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Terms of use
          </h1>
          <p className="mt-4 text-sm text-faint">Last updated: {LAST_UPDATED}</p>
        </header>

        <div className="mt-10 space-y-10 text-sm leading-7 text-muted sm:text-base">
          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Agreement
            </h2>
            <p className="mt-3">
              By using Utsavam, you agree to these terms. If you do not agree,
              please do not use the site. The service is operated as an
              open-source project by {SITE.creator.name}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              What the service is
            </h2>
            <p className="mt-3">
              Utsavam is a free tool for creating and sharing personalised
              celebration links. The site does not provide printed cards, delivery
              services, guest management or payment processing. Card data is
              encoded in the link you generate, as described in the{" "}
              <Link
                href="/privacy"
                className="text-gold underline decoration-gold/30 underline-offset-4"
              >
                privacy note
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Acceptable use
            </h2>
            <p className="mt-3">You agree not to use Utsavam to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Harass, threaten, defame or impersonate any person.</li>
              <li>Publish hateful, obscene or unlawful content.</li>
              <li>Share another person&apos;s private information without consent.</li>
              <li>Distribute spam, phishing links or malware.</li>
              <li>Attempt to disrupt, scrape at scale or reverse-engineer the hosted service in a harmful way.</li>
            </ul>
            <p className="mt-3">
              You are responsible for the content you put into a card and for
              sharing it only with the intended recipients.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Your content
            </h2>
            <p className="mt-3">
              You keep ownership of the names, messages and other details you
              enter. Because those details are encoded into a URL rather than
              stored in an account, Utsavam has no copy to moderate or remove. We
              may block or remove access to the hosted site for abuse of the
              service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Availability and changes
            </h2>
            <p className="mt-3">
              The service is provided as-is and may change, pause or be
              discontinued at any time. Features, celebrations and the link format
              may be updated. Old links are designed to keep working, but long-term
              availability is not guaranteed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              No warranty
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by law, Utsavam is provided without
              warranties of any kind, express or implied, including fitness for a
              particular purpose and non-infringement. The project is not
              affiliated with any religious body, temple, church, gurdwara, mosque
              or government organisation.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Limitation of liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by law, the maintainers are not
              liable for indirect, incidental, special or consequential damages
              arising from your use of the service, including lost links, missed
              events or unauthorised access to a shared URL.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Open-source licence
            </h2>
            <p className="mt-3">
              The source code is released under the{" "}
              <a
                href={SITE.licenseUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-gold underline decoration-gold/30 underline-offset-4"
              >
                MIT License
              </a>
              . These terms govern use of the hosted website; the licence governs
              use, modification and redistribution of the code.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Contact
            </h2>
            <p className="mt-3">
              Questions about these terms can be raised on the{" "}
              <a
                href={SITE.repoIssues}
                target="_blank"
                rel="noreferrer noopener"
                className="text-gold underline decoration-gold/30 underline-offset-4"
              >
                project issue tracker
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
