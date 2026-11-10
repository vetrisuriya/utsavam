"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * A thin gold reading-progress line pinned above the header. The transform is
 * written directly on scroll, so it stays in sync even when a browser throttles
 * animation frames in a background tab.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let max = 0;

    const measure = () => {
      const element = document.documentElement;
      max = element.scrollHeight - element.clientHeight;
    };

    const update = () => {
      const element = document.documentElement;
      const progress =
        max > 0 ? Math.min(1, Math.max(0, element.scrollTop / max)) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => update();
    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[2.5px]"
    >
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-gold via-saffron to-rose shadow-[0_0_12px_rgba(246,183,60,0.75)]"
      />
    </div>
  );
}
