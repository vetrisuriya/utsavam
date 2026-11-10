import Link from "next/link";
import { Logo } from "@/components/logo";
import { LanguageSelect } from "@/components/language-select";
import { NAV_LINKS, SITE } from "@/lib/site";
import { ArrowRight, GithubIcon, MenuIcon } from "@/components/ui-icons";

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-white/5 bg-night/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo markClassName="h-8 w-8" wordmarkClassName="text-lg sm:text-xl" />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSelect />
          <Link
            href={SITE.repo}
            target="_blank"
            rel="noreferrer noopener"
            className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-ink"
            aria-label="Utsavam on GitHub"
          >
            <GithubIcon className="h-4.5 w-4.5" />
          </Link>
          <Link
            href="/celebrations"
            className="btn-shine group inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-[#241200] transition hover:bg-gold-soft"
          >
            Start creating
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <details className="group relative lg:hidden">
          <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-white/10 text-ink transition hover:bg-white/5 [&::-webkit-details-marker]:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </summary>
          <div className="menu-panel absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-white/10 bg-night-2/95 p-2 shadow-2xl backdrop-blur-xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-3 py-2.5 text-sm text-muted transition hover:bg-white/5 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-white/10" />
            <LanguageSelect variant="mobile" />
            <div className="my-2 h-px bg-white/10" />
            <Link
              href="/celebrations"
              className="flex items-center justify-between rounded-xl bg-gold px-3 py-2.5 text-sm font-semibold text-[#241200]"
            >
              Start creating
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={SITE.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-1 flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-muted transition hover:bg-white/5 hover:text-ink"
            >
              <GithubIcon className="h-4 w-4" />
              Open source on GitHub
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
