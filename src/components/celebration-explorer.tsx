"use client";

import { useMemo, useState } from "react";
import type { CategoryId, CelebrationCardData } from "@/lib/celebrations/types";
import { CATEGORIES } from "@/lib/celebrations/categories";
import { CelebrationCard } from "@/components/celebration-card";
import { Reveal } from "@/components/reveal";
import { SearchIcon } from "@/components/ui-icons";
import { getAllNativeNames } from "@/lib/language";
import { cn } from "@/lib/utils";

type Filter = CategoryId | "all";

export function CelebrationExplorer({
  items,
  initialCategory = "all",
}: {
  items: CelebrationCardData[];
  initialCategory?: Filter;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Filter>(initialCategory);

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = active === "all" || item.category === active;
      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;
      const haystack = [
        item.name,
        ...getAllNativeNames(item.slug),
        item.tagline,
        item.blurb,
        ...item.keywords,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [active, items, normalizedQuery]);

  const grouped = useMemo(() => {
    return CATEGORIES.map((category) => ({
      category,
      entries: filtered.filter((item) => item.category === category.id),
    })).filter((group) => group.entries.length > 0);
  }, [filtered]);

  const showGrouped = active === "all" && !normalizedQuery;

  return (
    <div>
      <div className="surface animate-rise rounded-2xl p-3 sm:p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-faint" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Diwali, Onam, birthday, wedding…"
              aria-label="Search celebrations"
              className="h-11 w-full rounded-xl border border-white/10 bg-black/20 pl-11 pr-4 text-sm text-ink outline-none transition placeholder:text-faint focus:border-gold/50 focus:ring-2 focus:ring-gold/15"
            />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            <button
              type="button"
              onClick={() => setActive("all")}
              aria-pressed={active === "all"}
              className={cn(
                "rounded-full border px-3.5 py-2 text-xs font-semibold transition",
                active === "all"
                  ? "border-gold/60 bg-gold text-[#241200]"
                  : "border-white/10 text-muted hover:border-white/20 hover:text-ink",
              )}
            >
              All
            </button>
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActive(category.id)}
                aria-pressed={active === category.id}
                className={cn(
                  "rounded-full border px-3.5 py-2 text-xs font-semibold transition",
                  active === category.id
                    ? "border-transparent text-[#241200]"
                    : "border-white/10 text-muted hover:border-white/20 hover:text-ink",
                )}
                style={
                  active === category.id
                    ? { backgroundColor: category.accent }
                    : undefined
                }
              >
                {category.shortName}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-faint">
        <p aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "celebration" : "celebrations"}
          {normalizedQuery ? ` matching “${query.trim()}”` : ""}
        </p>
        {active !== "all" ? (
          <button
            type="button"
            onClick={() => setActive("all")}
            className="text-xs font-semibold text-gold transition hover:text-gold-soft"
          >
            Clear filter
          </button>
        ) : null}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-white/15 p-10 text-center">
          <p className="font-display text-2xl text-ink">No celebration found</p>
          <p className="mt-2 text-sm text-muted">
            Try a different spelling, or browse all celebrations below.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActive("all");
            }}
            className="mt-5 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-[#241200]"
          >
            Show everything
          </button>
        </div>
      ) : showGrouped ? (
        <div className="mt-10 space-y-14">
          {grouped.map((group) => (
            <section
              key={group.category.id}
              id={group.category.id}
              aria-labelledby={`${group.category.id}-heading`}
              className="scroll-mt-24"
            >
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-faint">
                    {group.entries.length} celebrations
                  </p>
                  <h2
                    id={`${group.category.id}-heading`}
                    className="mt-1 font-display text-2xl tracking-tight text-ink"
                  >
                    {group.category.name}
                  </h2>
                </div>
                <p className="max-w-xl text-sm text-muted">
                  {group.category.blurb}
                </p>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.entries.map((item, index) => (
                  <Reveal key={item.slug} className="h-full" delay={Math.min(index, 7) * 50}>
                    <CelebrationCard celebration={item} />
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item, index) => (
            <Reveal key={item.slug} className="h-full" delay={Math.min(index, 7) * 50}>
              <CelebrationCard celebration={item} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
