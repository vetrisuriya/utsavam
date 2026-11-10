"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CheckIcon,
  CopyIcon,
  FacebookIcon,
  LinkIcon,
  ShareIcon,
  TelegramIcon,
  WhatsAppIcon,
  XIcon,
} from "@/components/ui-icons";
import { cn } from "@/lib/utils";

function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }
  return new Promise<void>((resolve, reject) => {
    const area = document.createElement("textarea");
    area.value = value;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    try {
      document.execCommand("copy");
      resolve();
    } catch (error) {
      reject(error);
    } finally {
      document.body.removeChild(area);
    }
  });
}

export function ShareButtons({
  url,
  title,
  text,
  compact = false,
  className,
}: {
  url: string;
  title: string;
  text?: string;
  compact?: boolean;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const message = text ?? title;

  const links = useMemo(() => {
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(`${message} ${url}`);
    return {
      whatsapp: `https://wa.me/?text=${encodedText}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(message)}`,
      x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };
  }, [message, url]);

  async function handleCopy() {
    try {
      await copyText(url);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  async function handleNativeShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text: message, url });
        return;
      } catch {
        // The user dismissed the share sheet.
        return;
      }
    }
    await handleCopy();
  }

  const itemClass = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] font-semibold text-ink transition hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white/[0.08]",
    compact ? "h-10 px-3 text-xs" : "h-11 px-4 text-sm",
  );

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <button
        type="button"
        onClick={handleNativeShare}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full bg-gold font-semibold text-[#241200] transition hover:-translate-y-0.5 hover:bg-gold-soft",
          compact ? "h-10 px-4 text-xs" : "h-11 px-5 text-sm",
        )}
      >
        <ShareIcon className="h-4 w-4" />
        Share
      </button>

      <button type="button" onClick={handleCopy} className={itemClass}>
        {copied ? (
          <CheckIcon className="h-4 w-4 text-mint" />
        ) : (
          <CopyIcon className="h-4 w-4" />
        )}
        {copied ? "Link copied" : "Copy link"}
      </button>

      <a
        href={links.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
        className={cn(itemClass, "hover:text-[#8ef0b7]")}
        aria-label="Share on WhatsApp"
      >
        <WhatsAppIcon className="h-4 w-4" />
        {compact ? null : "WhatsApp"}
      </a>

      <a
        href={links.telegram}
        target="_blank"
        rel="noreferrer noopener"
        className={cn(itemClass, "hover:text-[#8fc8f7]")}
        aria-label="Share on Telegram"
      >
        <TelegramIcon className="h-4 w-4" />
        {compact ? null : "Telegram"}
      </a>

      <a
        href={links.x}
        target="_blank"
        rel="noreferrer noopener"
        className={cn(itemClass, "hover:text-white")}
        aria-label="Share on X"
      >
        <XIcon className="h-3.5 w-3.5" />
        {compact ? null : "X"}
      </a>

      <a
        href={links.facebook}
        target="_blank"
        rel="noreferrer noopener"
        className={cn(itemClass, "hover:text-[#9dc1ff]")}
        aria-label="Share on Facebook"
      >
        <FacebookIcon className="h-4 w-4" />
        {compact ? null : "Facebook"}
      </a>

      {compact ? (
        <a
          href={url}
          className={itemClass}
          aria-label="Open the celebration link"
        >
          <LinkIcon className="h-4 w-4" />
        </a>
      ) : null}
    </div>
  );
}
