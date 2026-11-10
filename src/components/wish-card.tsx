import type { CSSProperties } from "react";
import { Motif } from "@/components/motif";
import { NativeName } from "@/components/native-name";
import { LogoMark } from "@/components/logo";
import { categoryShortName } from "@/lib/celebrations/categories";
import {
  getDetails,
  getInvitationSubject,
  getMessage,
  getRecipient,
  getSender,
  isInvitation,
} from "@/lib/celebrations/presentation";
import type { Celebration } from "@/lib/celebrations/types";
import { cn } from "@/lib/utils";

export function WishCard({
  celebration,
  values,
  className,
  compact = false,
  showBrand = true,
  headingLevel = "h2",
}: {
  celebration: Celebration;
  values: Record<string, string>;
  className?: string;
  compact?: boolean;
  showBrand?: boolean;
  /** Personal card pages use `h1`; embedded previews keep `h2`. */
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  const { theme } = celebration;
  const details = getDetails(celebration, values);
  const recipient = getRecipient(celebration, values);
  const sender = getSender(celebration, values);
  const message = getMessage(celebration, values);
  const invitation = isInvitation(celebration);
  const hasRecipient = Boolean(values.to);
  const invitationSubject = invitation
    ? getInvitationSubject(celebration, values)
    : null;

  const style = {
    "--from": theme.from,
    "--via": theme.via ?? theme.from,
    "--to": theme.to,
    "--accent": theme.accent,
    "--accent-2": theme.accent2 ?? theme.accent,
    "--ink": theme.ink ?? "#fff7e8",
  } as CSSProperties;

  return (
    <article
      style={style}
      className={cn(
        "card-foil relative isolate overflow-hidden rounded-[1.75rem] border border-[var(--accent)]/25 text-[var(--ink)] shadow-[0_50px_100px_-50px_var(--accent)]",
        compact ? "p-6" : "p-7 sm:p-10",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(155deg, var(--from) 0%, var(--via) 52%, var(--to) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, color-mix(in srgb, var(--accent) 28%, transparent), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pattern-dots absolute inset-0 -z-10 opacity-[0.12]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent), transparent 68%)",
        }}
      />
      <Motif
        name={celebration.motif}
        className="pointer-events-none absolute -bottom-12 -right-10 -z-10 h-64 w-64 text-[var(--accent)] opacity-[0.12]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 rounded-[1.35rem] border border-[var(--accent)]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 rounded-[1.35rem]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 70%)",
        }}
      />

      <header className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            {invitation ? "You are invited" : "A celebration wish"}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--ink)]/60">
            {categoryShortName(celebration.category)}
            {celebration.dateLabel ? ` · ${celebration.dateLabel}` : ""}
          </p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[var(--accent)]/35 bg-black/20 text-[var(--accent)]">
          <Motif name={celebration.motif} className="h-6 w-6" />
        </span>
      </header>

      <div className={cn("relative", compact ? "mt-6" : "mt-8")}>
        <div className="flex items-center gap-2 text-[var(--accent)]">
          <span className="h-px w-8 bg-current opacity-50" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em]">
            {celebration.name}
          </span>
        </div>

        <NativeName
          slug={celebration.slug}
          name={celebration.name}
          className="mt-3 block text-xl text-[var(--accent)]/85"
        />

        <Heading
          className={cn(
            "mt-2 font-display leading-[1.08] tracking-tight",
            compact ? "text-2xl" : "text-[2rem] sm:text-[2.6rem]",
          )}
        >
          {hasRecipient ? (
            <>
              Dear <span className="text-[var(--accent)]">{recipient}</span>,
            </>
          ) : invitationSubject ? (
            <span className="text-[var(--accent)]">{invitationSubject}</span>
          ) : (
            <span className="text-[var(--accent)]">{celebration.tagline}</span>
          )}
        </Heading>

        <p
          className={cn(
            "mt-4 whitespace-pre-line leading-relaxed text-[var(--ink)]/85",
            compact ? "text-sm" : "text-[15px] sm:text-base",
          )}
        >
          {message}
        </p>
      </div>

      {details.length > 0 ? (
        <dl
          className={cn(
            "relative mt-6 grid gap-3 rounded-2xl border border-[var(--accent)]/20 bg-black/20 p-4 sm:grid-cols-2",
            compact && "mt-5",
          )}
        >
          {details.map((detail) => (
            <div key={detail.label}>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]/80">
                {detail.label}
              </dt>
              <dd className="mt-1 text-sm text-[var(--ink)]/90">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      <footer className="relative mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-[var(--accent)]/20 pt-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--ink)]/50">
            {invitation ? "With love" : "Warmly"}
          </p>
          <p className="mt-1 font-display text-lg text-[var(--ink)]">{sender}</p>
        </div>
        {showBrand ? (
          <div className="flex items-center gap-2 text-[var(--ink)]/55">
            <LogoMark className="h-6 w-6 rounded-md" />
            <span className="text-[10px] uppercase tracking-[0.22em]">
              Utsavam
            </span>
          </div>
        ) : null}
      </footer>
    </article>
  );
}
