"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Sticky navbar shell with pure white surface, subtle navy border on scroll,
 * and a GPU-composited teal reading-progress hairline along its bottom edge.
 */
export function StickyHeaderShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;

    const updateScrollMetrics = () => {
      rafId = 0;
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 10);

      if (progressRef.current) {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const ratio =
          scrollableHeight > 24
            ? Math.min(1, Math.max(0, scrollTop / scrollableHeight))
            : 0;
        progressRef.current.style.transform = `scaleX(${ratio.toFixed(4)})`;
      }
    };

    const onScroll = () => {
      if (rafId === 0) {
        rafId = window.requestAnimationFrame(updateScrollMetrics);
      }
    };

    updateScrollMetrics();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[border-color,box-shadow] duration-200",
        scrolled
          ? "border-primary-navy/20 shadow-[var(--shadow-card)]"
          : "border-border-subtle"
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 backdrop-blur-md transition-colors duration-200",
          scrolled ? "bg-pure-white/[0.98]" : "bg-pure-white/95"
        )}
      />
      {children}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 -bottom-px h-[2px] overflow-hidden transition-opacity duration-200 motion-reduce:hidden",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      >
        <div
          ref={progressRef}
          className="h-full w-full origin-left bg-teal will-change-transform"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </header>
  );
}
