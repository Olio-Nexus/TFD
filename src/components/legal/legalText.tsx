import type { ReactNode } from "react";

export const CONTACT_EMAIL = "sales@tfdrilling.com.au";

/* Slugify a heading into a URL-safe anchor id. */
export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/* Render text, turning any occurrence of the contact email into a clickable
   mailto: link while leaving the surrounding text intact. */
export const renderParagraph = (text: string): ReactNode => {
  const parts = text.split(CONTACT_EMAIL);

  return parts.flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <a
            key={i}
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[#1A1917] underline underline-offset-2 transition-colors hover:text-[var(--accent)]"
          >
            {CONTACT_EMAIL}
          </a>,
          part,
        ]
  );
};
