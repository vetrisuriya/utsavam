import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="utsavam-bg" cx="50%" cy="32%" r="78%">
          <stop offset="0" stopColor="#2c1442" />
          <stop offset="0.55" stopColor="#170c26" />
          <stop offset="1" stopColor="#09050f" />
        </radialGradient>
        <linearGradient id="utsavam-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe6a3" />
          <stop offset="0.5" stopColor="#f6b73c" />
          <stop offset="1" stopColor="#e07a1f" />
        </linearGradient>
        <linearGradient id="utsavam-flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff6cf" />
          <stop offset="0.45" stopColor="#ffc24d" />
          <stop offset="1" stopColor="#ff7a1a" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="116" fill="url(#utsavam-bg)" />
      <circle cx="256" cy="250" r="152" fill="#f6b73c" opacity="0.1" />
      <circle
        cx="256"
        cy="256"
        r="168"
        fill="none"
        stroke="url(#utsavam-gold)"
        strokeWidth="5"
        opacity="0.5"
      />
      <g
        stroke="url(#utsavam-gold)"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.42"
      >
        <path d="M256 88v24M256 400v24M88 256h24M400 256h24" />
        <path d="M137 137l17 17M358 358l17 17M375 137l-17 17M154 358l-17 17" />
        <path d="M204 96l7 22M308 394l-7 22M96 204l22 7M394 308l-22-7" />
        <path d="M308 96l-7 22M204 394l7 22M96 308l22-7M394 204l-22 7" />
      </g>
      <path
        d="M142 300c10 37 51 62 114 62s104-25 114-62c-35 10-73 15-114 15s-79-5-114-15Z"
        fill="url(#utsavam-gold)"
      />
      <path
        d="M150 297c31 6 67 9 106 9s75-3 106-9"
        stroke="#7a3d0a"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M256 118c45 72 62 98 41 139-14 27-68 27-82 0-21-41-4-67 41-139Z"
        fill="url(#utsavam-flame)"
      />
      <path
        d="M256 170c22 40 28 55 18 75-8 16-28 16-36 0-10-20-4-35 18-75Z"
        fill="#fff8dc"
        opacity="0.92"
      />
      <rect x="248" y="286" width="16" height="24" rx="8" fill="#4a2404" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  wordmarkClassName,
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
        className,
      )}
      aria-label="Utsavam home"
    >
      <LogoMark
        className={cn(
          "h-9 w-9 rounded-[10px] shadow-[0_8px_24px_-10px_rgba(246,183,60,0.65)] transition-transform duration-300 group-hover:-rotate-3",
          markClassName,
        )}
      />
      <span
        className={cn(
          "font-display text-[1.35rem] leading-none tracking-tight text-ink transition-colors duration-300 group-hover:text-gold-soft",
          wordmarkClassName,
        )}
      >
        Utsavam
      </span>
    </Link>
  );
}
