import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

const PIECES = [
  { left: 3, delay: 0, duration: 8.5, drift: 26, size: 6, color: "#f6b73c" },
  { left: 9, delay: 2.6, duration: 10, drift: -18, size: 5, color: "#ff8fd1" },
  { left: 15, delay: 1.1, duration: 9, drift: 14, size: 7, color: "#ff8a3d" },
  { left: 23, delay: 3.8, duration: 11, drift: -24, size: 5, color: "#7fe3c0" },
  { left: 31, delay: 0.6, duration: 8, drift: 20, size: 6, color: "#ffd98a" },
  { left: 38, delay: 4.4, duration: 10.5, drift: -12, size: 4, color: "#f6b73c" },
  { left: 46, delay: 2.2, duration: 9.5, drift: 16, size: 7, color: "#ff8fd1" },
  { left: 54, delay: 5.1, duration: 11.5, drift: -22, size: 5, color: "#ff8a3d" },
  { left: 62, delay: 1.7, duration: 8.8, drift: 18, size: 6, color: "#7fe3c0" },
  { left: 69, delay: 3.3, duration: 10.2, drift: -16, size: 4, color: "#ffd98a" },
  { left: 76, delay: 0.2, duration: 9.2, drift: 24, size: 6, color: "#f6b73c" },
  { left: 83, delay: 4.8, duration: 11, drift: -20, size: 5, color: "#ff8fd1" },
  { left: 90, delay: 1.9, duration: 8.4, drift: 12, size: 7, color: "#ff8a3d" },
  { left: 96, delay: 3.6, duration: 10.6, drift: -14, size: 5, color: "#7fe3c0" },
];

/**
 * Slow drifting confetti for celebratory panels. CSS-only and reduced-motion
 * safe. Set `burst` for a one-off celebration that clears itself.
 */
export function Confetti({
  className,
  burst = false,
}: {
  className?: string;
  burst?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {PIECES.map((piece, index) => (
        <span
          key={`${piece.left}-${piece.delay}`}
          className="confetti-piece absolute top-0 block rounded-[2px] opacity-0"
          style={
            {
              left: `${piece.left}%`,
              width: piece.size,
              height: piece.size * 1.7,
              backgroundColor: piece.color,
              "--delay": `${piece.delay}s`,
              "--duration": `${piece.duration}s`,
              "--drift": `${piece.drift}px`,
              ...(burst
                ? {
                    animationIterationCount: 1,
                    animationDuration: `${3.2 + (index % 5) * 0.45}s`,
                    animationDelay: `${(index % 7) * 0.06}s`,
                  }
                : {}),
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
