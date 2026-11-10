import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy — how your data is handled",
  description:
    "Utsavam has no accounts and no wish database. Card details are encoded into the link you share. Read exactly what is and is not collected.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "9 November 2026";

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: "Privacy at Utsavam",
            description:
              "How Utsavam handles card data, links, logs and third parties.",
            path: "/privacy",
            image: "/opengraph-image",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Privacy", path: "/privacy" },
          ]),
        ]}
      />

      <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Breadcrumbs items={[{ name: "Privacy" }]} />

        <header className="animate-rise">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Privacy, in plain words
          </h1>
          <p className="mt-4 text-sm text-faint">Last updated: {LAST_UPDATED}</p>
        </header>

        <div className="mt-10 space-y-10 text-sm leading-7 text-muted sm:text-base">
          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              The short version
            </h2>
            <p className="mt-3">
              Utsavam has no user accounts and no database of wishes. The names,
              message, date, venue and other details you enter are encoded into
              the link you generate. They are not sent to or stored on our
              servers as a card record.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              What is stored in a link
            </h2>
            <p className="mt-3">
              A generated link contains a base64url-encoded payload with the
              celebration identifier, the fields you filled in, and a timestamp.
              Because the payload is part of the URL, anyone who has the link can
              decode it. Treat a card link like a postcard: share it only with
              people you would be comfortable reading the details.
            </p>
            <p className="mt-3">
              Links do not expire automatically. Deleting your copy of a link does
              not revoke it for people who already have it. Do not put sensitive
              information such as financial details, identity numbers or private
              addresses you would not share publicly into a card.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              What we do not do
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>We do not create accounts or collect email addresses.</li>
              <li>We do not store generated cards in a database.</li>
              <li>We do not sell or share personal data with advertisers.</li>
              <li>We do not use advertising or cross-site tracking cookies.</li>
              <li>We do not require a phone number to create or open a card.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Hosting and server logs
            </h2>
            <p className="mt-3">
              The site is deployed on Vercel. Like most hosting providers, Vercel
              processes standard request metadata — such as IP address, user
              agent, timestamp and the requested URL — to deliver the site,
              prevent abuse and produce aggregate usage metrics. If a card link is
              requested, the encoded card data is part of that requested URL and
              may therefore appear in hosting logs. Utsavam itself does not read
              or retain those logs to build profiles.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Cookies and local storage
            </h2>
            <p className="mt-3">
              Utsavam does not set advertising or analytics cookies. Browser
              storage, if used at all, is limited to preferences on your device.
              Third-party services linked from the site, such as GitHub, have their
              own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Children
            </h2>
            <p className="mt-3">
              Utsavam is intended for general audiences. Because no accounts are
              created, no personal profile of a child is stored by the service.
              Parents and guardians are responsible for what they choose to
              include in a card.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Your choices
            </h2>
            <p className="mt-3">
              Because cards are not stored on a server, there is no account or
              record for us to delete. If you have shared a link and want it to
              stop working, the practical option is to stop sharing it; anyone who
              saved the URL can still open it. If you believe a link hosted at this
              domain contains harmful or unlawful content, report it via the{" "}
              <a
                href={SITE.repoIssues}
                target="_blank"
                rel="noreferrer noopener"
                className="text-gold underline decoration-gold/30 underline-offset-4"
              >
                GitHub issue tracker
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Changes to this note
            </h2>
            <p className="mt-3">
              If the architecture changes — for example, if an optional stored-card
              feature is added — this page will be updated before that feature goes
              live, and the change will be recorded in the{" "}
              <Link
                href="/changelog"
                className="text-gold underline decoration-gold/30 underline-offset-4"
              >
                changelog
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Contact
            </h2>
            <p className="mt-3">
              Questions about privacy can be raised on the{" "}
              <a
                href={SITE.repoIssues}
                target="_blank"
                rel="noreferrer noopener"
                className="text-gold underline decoration-gold/30 underline-offset-4"
              >
                project issue tracker
              </a>
              . The project is maintained by{" "}
              <a
                href={SITE.creator.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-gold underline decoration-gold/30 underline-offset-4"
              >
                {SITE.creator.name}
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
