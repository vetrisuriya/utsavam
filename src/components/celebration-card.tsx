import Link from "next/link";
import type { CSSProperties } from "react";
import { Motif } from "@/components/motif";
import { NativeName } from "@/components/native-name";
import { ArrowRight } from "@/components/ui-icons";
import { categoryShortName } from "@/lib/celebrations/categories";
import type { CelebrationCardData } from "@/lib/celebrations/types";

export function CelebrationCard({
  celebration,
  compact = false,
}: {
  celebration: CelebrationCardData;
  compact?: boolean;
}) {
  const style = {
    "--accent": celebration.theme.accent,
    "--accent-2": celebration.theme.accent2 ?? celebration.theme.accent,
  } as CSSProperties;

  return (
    <Link
      href={`/celebrations/${celebration.slug}`}
      style={style}
      className="card-shine group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/45 hover:bg-white/[0.05] hover:shadow-[0_30px_60px_-40px_var(--accent)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
        style={{
          background: `radial-gradient(circle, var(--accent), transparent 70%)`,
        }}
      />
      <Motif
        name={celebration.motif}
        className="pointer-events-none absolute -bottom-6 -right-4 h-28 w-28 text-[var(--accent)] opacity-[0.07] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
      />

      <div className="relative flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          {categoryShortName(celebration.category)}
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-[var(--accent)] transition-colors group-hover:border-[var(--accent)]/40">
          <Motif name={celebration.motif} className="h-5 w-5" />
        </span>
      </div>

      <div className="relative mt-4">
        <h3 className="font-display text-xl leading-tight tracking-tight text-ink">
          {celebration.name}
        </h3>
        <NativeName
          slug={celebration.slug}
          name={celebration.name}
          className="mt-1 block text-sm text-[var(--accent)]/80"
        />
        <p className="mt-2.5 line-clamp-2 text-sm leading-6 text-muted">
          {compact ? celebration.tagline : celebration.blurb}
        </p>
      </div>

      <span className="relative mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)]/90 transition-colors group-hover:text-[var(--accent)]">
        Create a card
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
