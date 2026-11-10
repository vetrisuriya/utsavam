"use client";

import { ChevronDownIcon, GlobeIcon } from "@/components/ui-icons";
import { useLanguage } from "@/components/language-provider";
import {
  isLanguageCode,
  LANGUAGES,
  type LanguageCode,
} from "@/lib/language";
import { cn } from "@/lib/utils";

export function LanguageSelect({
  variant = "desktop",
  className,
}: {
  variant?: "desktop" | "mobile";
  className?: string;
}) {
  const { language, setLanguage } = useLanguage();

  function change(value: string) {
    if (isLanguageCode(value)) setLanguage(value as LanguageCode);
  }

  if (variant === "mobile") {
    return (
      <div className={cn("px-1 py-2", className)}>
        <p className="flex items-center gap-2 px-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-faint">
          <GlobeIcon className="h-3.5 w-3.5" />
          Second language
        </p>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {LANGUAGES.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => setLanguage(option.code)}
              aria-pressed={language === option.code}
              className={cn(
                "rounded-xl border px-3 py-2 text-left text-sm transition",
                language === option.code
                  ? "border-gold/40 bg-gold/10 text-ink"
                  : "border-white/10 text-muted hover:bg-white/5 hover:text-ink",
              )}
            >
              <span className={cn("block text-base leading-tight", option.fontClass)}>
                {option.nativeLabel}
              </span>
              <span className="mt-0.5 block text-[10px] uppercase tracking-[0.16em] text-faint">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <GlobeIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
      <label htmlFor="second-language" className="sr-only">
        Second language
      </label>
      <select
        id="second-language"
        value={language}
        onChange={(event) => change(event.target.value)}
        className="h-9 appearance-none rounded-full border border-white/10 bg-white/[0.03] pl-9 pr-8 text-xs font-medium text-muted outline-none transition hover:border-white/20 hover:text-ink focus:border-gold/50"
      >
        {LANGUAGES.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label} · {option.nativeLabel}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-faint" />
    </div>
  );
}
