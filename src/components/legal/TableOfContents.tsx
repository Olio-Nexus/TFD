"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

export type TocItem = {
  id: string;
  heading: string;
};

/* Offset so a heading lands below the fixed 72px header (plus breathing room). */
const SCROLL_OFFSET = -110;

export default function TableOfContents({
  items,
  ariaLabel = "Sections",
}: {
  items: TocItem[];
  ariaLabel?: string;
}) {
  const lenis = useLenis();
  const [active, setActive] = useState(items[0]?.id ?? "");

  /* Scroll-spy: mark the section nearest the top of the viewport as active. */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        /* Activation band sits just below the header, ~40% down the viewport. */
        rootMargin: "-120px 0px -55% 0px",
        threshold: 0,
      }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setActive(id);
    const target = document.getElementById(id);
    if (!target) return;

    if (lenis) {
      lenis.scrollTo(target, { offset: SCROLL_OFFSET });
    } else {
      /* Reduced-motion / no-Lenis fallback. */
      const top =
        target.getBoundingClientRect().top + window.scrollY + SCROLL_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav aria-label={ariaLabel} className="lg:sticky lg:top-[110px]">
      <p className="mb-4 font-mono text-[12px] uppercase tracking-[1.4px] text-[#8A847B]">
        On this page
      </p>

      <ul className="flex flex-col">
        {items.map(({ id, heading }) => {
          const isActive = active === id;

          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`flex border-l-2 py-2 pl-4 text-[14px] leading-[20px] transition-colors ${
                  isActive
                    ? "border-[var(--accent)] font-medium text-[#1A1917]"
                    : "border-[#d8d2ca] text-[#5D5851] hover:border-[#8A847B] hover:text-[#1A1917]"
                }`}
              >
                {heading}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
