"use client";

import { useMemo, useRef, useState } from "react";
import { WishCard } from "@/components/wish-card";
import { ShareButtons } from "@/components/share-buttons";
import { CheckIcon, CopyIcon, SparkleIcon } from "@/components/ui-icons";
import { Confetti } from "@/components/confetti";
import { encodeWish } from "@/lib/codec";
import { isInvitation } from "@/lib/celebrations/presentation";
import type { Celebration, FieldDef, FieldSection } from "@/lib/celebrations/types";
import { cn } from "@/lib/utils";

const SECTION_META: Record<
  FieldSection,
  { kicker: string; title: string; description: string }
> = {
  who: {
    kicker: "Step 1",
    title: "Who is this for?",
    description: "Names make it personal. Keep them exactly as you want them shown.",
  },
  details: {
    kicker: "Step 2",
    title: "When and where",
    description: "Add the details guests or your recipient will need at a glance.",
  },
  message: {
    kicker: "Step 3",
    title: "Say it in your words",
    description: "A line or two in your own voice is worth more than any template.",
  },
};

const SECTION_ORDER: FieldSection[] = ["who", "details", "message"];

function buildInitialValues(celebration: Celebration): Record<string, string> {
  const values: Record<string, string> = {};
  for (const field of celebration.fields) {
    values[field.key] = "";
  }
  return values;
}

function FieldLabel({
  field,
  htmlFor,
}: {
  field: FieldDef;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-baseline justify-between gap-3 text-sm font-medium text-ink"
    >
      <span>
        {field.label}
        {field.required ? (
          <span className="ml-1 text-gold" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-2 text-[10px] uppercase tracking-[0.18em] text-faint">
            optional
          </span>
        )}
      </span>
    </label>
  );
}

export function CelebrationForm({ celebration }: { celebration: Celebration }) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    buildInitialValues(celebration),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(() => {
    return SECTION_ORDER.map((section) => ({
      id: section,
      fields: celebration.fields.filter((field) => field.section === section),
    })).filter((section) => section.fields.length > 0);
  }, [celebration.fields]);

  const previewValues = useMemo(() => values, [values]);

  function updateValue(key: string, value: string) {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => {
      if (!previous[key]) return previous;
      const next = { ...previous };
      delete next[key];
      return next;
    });
    setShareUrl(null);
  }

  function validate(): boolean {
    const nextErrors: Record<string, string> = {};
    for (const field of celebration.fields) {
      const raw = values[field.key]?.trim() ?? "";
      if (field.required && !raw) {
        nextErrors[field.key] = `${field.label} is required.`;
      }
    }
    setErrors(nextErrors);

    const firstKey = Object.keys(nextErrors)[0];
    if (firstKey) {
      const element = formRef.current?.querySelector<HTMLElement>(
        `[name="${firstKey}"]`,
      );
      element?.focus();
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    return true;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const trimmed: Record<string, string> = {};
    for (const field of celebration.fields) {
      const value = values[field.key]?.trim();
      if (value) trimmed[field.key] = value;
    }

    const code = encodeWish({
      v: 1,
      e: celebration.slug,
      f: trimmed,
      t: Date.now(),
    });
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://utsavam.app";
    setShareUrl(`${origin}/w/${code}`);
    setCopied(false);

    window.setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 60);
  }

  async function copyLink() {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function reset() {
    setValues(buildInitialValues(celebration));
    setErrors({});
    setShareUrl(null);
    setCopied(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-start">
      <div className="min-w-0">
        {shareUrl ? (
          <div
            ref={resultRef}
            className="animate-rise relative isolate mb-6 overflow-hidden rounded-2xl border border-mint/30 bg-mint/[0.06] p-5 sm:p-6"
          >
            <Confetti burst className="-z-10" />
            <div className="relative flex items-center gap-2 text-mint">
              <CheckIcon className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em]">
                Your link is ready
              </p>
            </div>
            <p className="mt-2 text-sm text-muted">
              Send this link on WhatsApp, email or anywhere else. You can create
              a fresh one any time.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <input
                readOnly
                value={shareUrl}
                aria-label="Your celebration link"
                onFocus={(event) => event.currentTarget.select()}
                className="h-11 min-w-0 flex-1 rounded-xl border border-white/12 bg-black/30 px-3 text-xs text-ink outline-none focus:border-mint/50"
              />
              <button
                type="button"
                onClick={copyLink}
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-mint px-4 text-sm font-semibold text-[#04231a] transition hover:bg-[#a4f3d8]"
              >
                {copied ? (
                  <CheckIcon className="h-4 w-4" />
                ) : (
                  <CopyIcon className="h-4 w-4" />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <ShareButtons
              url={shareUrl}
              title={celebration.name}
              text={celebration.defaultMessage}
              compact
              className="mt-4"
            />
            <button
              type="button"
              onClick={reset}
              className="mt-4 text-xs font-semibold text-muted underline decoration-white/20 underline-offset-4 transition hover:text-ink"
            >
              Start a new card
            </button>
          </div>
        ) : null}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="surface rounded-2xl p-5 sm:p-7"
        >
          <div className="space-y-9">
            {sections.map((section, index) => {
              const meta = SECTION_META[section.id];
              return (
                <fieldset key={section.id} className="min-w-0">
                  <legend className="w-full">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold/80">
                      {meta.kicker}
                    </span>
                    <span className="mt-1 block font-display text-xl tracking-tight text-ink">
                      {meta.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-muted">
                      {meta.description}
                    </span>
                  </legend>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {section.fields.map((field) => {
                      const id = `${celebration.slug}-${field.key}`;
                      const error = errors[field.key];
                      const value = values[field.key] ?? "";
                      const isTextarea = field.type === "textarea";
                      const baseClasses = cn(
                        "w-full rounded-xl border bg-black/25 px-3.5 py-3 text-sm text-ink outline-none transition placeholder:text-faint/80 focus:ring-2",
                        error
                          ? "border-rose/60 focus:border-rose focus:ring-rose/15"
                          : "border-white/12 focus:border-gold/60 focus:ring-gold/15",
                      );

                      return (
                        <div
                          key={field.key}
                          className={cn(
                            "min-w-0",
                            isTextarea || !field.half ? "sm:col-span-2" : "",
                          )}
                        >
                          <FieldLabel field={field} htmlFor={id} />
                          <div className="mt-2">
                            {isTextarea ? (
                              <textarea
                                id={id}
                                name={field.key}
                                value={value}
                                rows={field.rows ?? 4}
                                maxLength={field.maxLength}
                                placeholder={field.placeholder}
                                onChange={(event) =>
                                  updateValue(field.key, event.target.value)
                                }
                                aria-invalid={error ? true : undefined}
                                aria-describedby={
                                  error
                                    ? `${id}-error`
                                    : field.help
                                      ? `${id}-help`
                                      : undefined
                                }
                                className={cn(baseClasses, "resize-y leading-6")}
                              />
                            ) : field.type === "select" ? (
                              <select
                                id={id}
                                name={field.key}
                                value={value}
                                onChange={(event) =>
                                  updateValue(field.key, event.target.value)
                                }
                                aria-invalid={error ? true : undefined}
                                aria-describedby={
                                  error ? `${id}-error` : undefined
                                }
                                className={cn(baseClasses, "appearance-none")}
                              >
                                <option value="">Select an option</option>
                                {field.options?.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <input
                                id={id}
                                name={field.key}
                                type={field.type}
                                value={value}
                                maxLength={field.maxLength}
                                placeholder={field.placeholder}
                                inputMode={field.inputMode}
                                onChange={(event) =>
                                  updateValue(field.key, event.target.value)
                                }
                                aria-invalid={error ? true : undefined}
                                aria-describedby={
                                  error
                                    ? `${id}-error`
                                    : field.help
                                      ? `${id}-help`
                                      : undefined
                                }
                                className={baseClasses}
                              />
                            )}
                          </div>
                          {error ? (
                            <p
                              id={`${id}-error`}
                              role="alert"
                              className="mt-1.5 text-xs text-rose"
                            >
                              {error}
                            </p>
                          ) : field.help ? (
                            <p
                              id={`${id}-help`}
                              className="mt-1.5 text-xs text-faint"
                            >
                              {field.help}
                            </p>
                          ) : null}
                          {isTextarea && field.maxLength ? (
                            <p className="mt-1.5 text-right text-[10px] text-faint">
                              {value.length}/{field.maxLength}
                            </p>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>

                  {index < sections.length - 1 ? (
                    <div className="mt-8 h-px w-full bg-white/10" />
                  ) : null}
                </fieldset>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-faint">
              Everything stays inside your link. We never store it on a server.
            </p>
            <button
              type="submit"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-[#241200] transition hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-[0_18px_40px_-18px_rgba(246,183,60,0.9)]"
            >
              <SparkleIcon className="h-4 w-4" />
              {isInvitation(celebration)
                ? "Create invitation link"
                : "Create greeting link"}
            </button>
          </div>
        </form>
      </div>

      <div className="min-w-0 lg:sticky lg:top-24">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-faint">
            Live preview
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-faint">
            Updates as you type
          </p>
        </div>
        <WishCard celebration={celebration} values={previewValues} compact />
        <p className="mt-4 text-xs leading-5 text-faint">
          Your card is generated in your browser and encoded into the link
          itself. Nothing is uploaded, and the link works without an account.
        </p>
      </div>
    </div>
  );
}
