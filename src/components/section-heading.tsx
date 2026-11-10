import Link from "next/link";
import { ArrowRight } from "@/components/ui-icons";
import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  description,
  action,
  align = "left",
  className,
}: {
  kicker?: string;
  title: string;
  description?: string;
  action?: { href: string; label: string };
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        action && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {kicker ? (
          <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-gold/80">
            <span
              aria-hidden="true"
              className="animate-twinkle inline-block h-1.5 w-1.5 rounded-full bg-gold"
            />
            {kicker}
          </p>
        ) : null}
        <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-muted">{description}</p>
        ) : null}
      </div>
      {action ? (
        <Link
          href={action.href}
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold transition hover:text-gold-soft"
        >
          {action.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : null}
    </div>
  );
}
