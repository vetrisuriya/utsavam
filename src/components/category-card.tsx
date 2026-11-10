import Link from "next/link";
import type { CSSProperties } from "react";
import { Motif } from "@/components/motif";
import { ArrowRight } from "@/components/ui-icons";
import type { Category } from "@/lib/celebrations/types";

export function CategoryCard({
  category,
  count,
}: {
  category: Category;
  count: number;
}) {
  const style = {
    "--accent": category.accent,
  } as CSSProperties;

  return (
    <Link
      href={`/celebrations#${category.id}`}
      style={style}
      className="card-shine group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/45 hover:bg-white/[0.05]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
        style={{
          background: `radial-gradient(circle, var(--accent), transparent 70%)`,
        }}
      />
      <Motif
        name={category.motif}
        className="h-7 w-7 text-[var(--accent)]"
      />
      <h3 className="mt-4 font-display text-lg leading-tight text-ink">
        {category.name}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-muted">
        {category.blurb}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-faint">
        <span>{count} celebrations</span>
        <ArrowRight className="h-4 w-4 text-[var(--accent)] transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
