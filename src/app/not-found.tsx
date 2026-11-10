import Link from "next/link";
import { Motif } from "@/components/motif";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight } from "@/components/ui-icons";

export default function NotFound() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 py-24 text-center sm:px-8">
      <span className="relative grid h-20 w-20 place-items-center rounded-3xl border border-gold/25 bg-gold/10 text-gold">
        <Motif name="diya" className="h-10 w-10" />
        <span className="absolute inset-0 rounded-3xl bg-gold/20 blur-2xl" />
      </span>
      <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.32em] text-gold">
        404 · Page not found
      </p>
      <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
        This celebration has wandered off.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-6 text-muted sm:text-base">
        The page may have moved, or the link may be incomplete. Try browsing all
        celebrations, or start again from the home page.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/celebrations"
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-[#241200] transition hover:-translate-y-0.5 hover:bg-gold-soft"
        >
          Browse celebrations
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="/"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-ink transition hover:border-white/30 hover:bg-white/[0.05]"
        >
          Go home
        </Link>
      </div>
    </div>

      <SiteFooter />
    </>
  );
}
