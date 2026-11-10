"use client";

import { getNativeName, LANGUAGE_MAP } from "@/lib/language";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";

/**
 * Renders a celebration's native name in the language the visitor selected.
 * English remains the primary name everywhere; this is the optional second line.
 */
export function NativeName({
  slug,
  name,
  className,
}: {
  slug: string;
  name?: string;
  className?: string;
}) {
  const { language } = useLanguage();
  const native = getNativeName(slug, language);

  if (!native || native === name) return null;

  return (
    <span
      lang={LANGUAGE_MAP[language].htmlLang}
      className={cn(LANGUAGE_MAP[language].fontClass, className)}
    >
      {native}
    </span>
  );
}
