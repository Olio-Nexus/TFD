"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "TEMPLATE",
  "LINK",
  "META",
  "NOSCRIPT",
]);

/**
 * Global fade-in-up on scroll. Runs on every route (including dynamic
 * slug pages) by scanning the top-level sections rendered inside <main>
 * and revealing each one as it enters the viewport.
 *
 * The hidden state is applied by this client component only, so it is a
 * progressive enhancement — content stays visible without JS or when the
 * user prefers reduced motion. The first section (hero / above-the-fold)
 * is left untouched to avoid an initial-load flash.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const main = document.querySelector("main");
    if (!main) return;

    const targets = Array.from(main.children)
      .filter(
        (el): el is HTMLElement =>
          el instanceof HTMLElement && !SKIP_TAGS.has(el.tagName)
      )
      // Skip the hero so the first paint is instant, then reveal the rest.
      .slice(1);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    for (const el of targets) {
      el.classList.add("reveal");

      const rect = el.getBoundingClientRect();
      const alreadyInView =
        rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

      if (alreadyInView) {
        // Visible on load — show immediately so there is no entrance flash.
        el.classList.add("reveal-visible");
      } else {
        observer.observe(el);
      }
    }

    return () => {
      observer.disconnect();
      for (const el of targets) {
        el.classList.remove("reveal", "reveal-visible");
      }
    };
  }, [pathname]);

  return null;
}
