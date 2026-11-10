import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { CATEGORIES } from "@/lib/celebrations/categories";
import { SITE } from "@/lib/site";
import { GithubIcon, HeartIcon } from "@/components/ui-icons";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-night-2/60">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <LogoMark className="h-11 w-11 rounded-xl" />
            <div>
              <p className="font-display text-2xl leading-none tracking-tight">
                Utsavam
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-faint">
                Celebrate together
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">
            Free, personalised celebration links for every Indian festival and
            family milestone. No signup, no app, no printing.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-faint">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1">
              <HeartIcon className="h-3.5 w-3.5 text-rose" />
              Made in India
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-faint">
            Celebrations
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {CATEGORIES.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/celebrations#${category.id}`}
                  className="text-muted transition-colors hover:text-gold"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-faint">
            Project
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link
                href="/about"
                className="text-muted transition-colors hover:text-gold"
              >
                About Utsavam
              </Link>
            </li>
            <li>
              <Link
                href={SITE.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted transition-colors hover:text-gold"
              >
                GitHub repository
              </Link>
            </li>
            <li>
              <Link
                href="/changelog"
                className="text-muted transition-colors hover:text-gold"
              >
                Changelog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-faint">
            Legal
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link
                href="/privacy"
                className="text-muted transition-colors hover:text-gold"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-muted transition-colors hover:text-gold"
              >
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-sm text-faint sm:flex-row sm:px-8">
          <p>© {SITE.founded} Utsavam.</p>
          <p className="flex items-center gap-2">
            Crafted with
            <HeartIcon className="h-4 w-4 text-rose" />
            by
            <a
              href={SITE.creator.url}
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium text-ink underline decoration-gold/40 underline-offset-4 transition hover:text-gold"
            >
              {SITE.creator.name}
            </a>
            <a
              href={SITE.repo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub repository"
              className="ml-1 inline-grid h-7 w-7 place-items-center rounded-full border border-white/10 text-muted transition hover:border-gold/40 hover:text-gold"
            >
              <GithubIcon className="h-3.5 w-3.5" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
