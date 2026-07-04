"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* =========================
   TYPES
========================= */

export type CaseStudy = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export type CaseStudiesProps = {
  eyebrow?: string;
  heading: {
    title: string;
    highlight: string;
  };
  featuredStudy: CaseStudy;
  secondaryStudy: CaseStudy;
};

/* =========================
   MAIN COMPONENT
========================= */

export default function CaseStudiesServices({
  eyebrow = "Case Study Snippet",
  heading,
  featuredStudy,
  secondaryStudy,
}: CaseStudiesProps) {
  return (
    <section className="bg-[#F4F1EB] py-12 md:py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="h-px w-5 bg-[#E53935]" />
            <span className="font-mono font-medium uppercase tracking-[1.4px] text-[#E53935] md:text-[14px] text-[12px]">
              {eyebrow}
            </span>
          </div>

          <h2 className="font-heading text-[24px] font-semibold leading-[30px] tracking-[-1px] text-[#1A1917] md:text-[48px] md:leading-[56px] md:tracking-[-2px]">
             {heading.title}{" "}
            <span className="text-[#E53935]">{heading.highlight}</span>
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden gap-5 md:flex">
          <HoverCard {...featuredStudy} featured />
          <HoverCard {...secondaryStudy} />
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <MobileCard {...featuredStudy} />
            <MobileCard {...secondaryStudy} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   DESKTOP CARD
========================= */

type HoverCardProps = CaseStudy & {
  featured?: boolean;
};

function HoverCard({
  title,
  description,
  image,
  href,
}: HoverCardProps) {
  return (
    <div
      className="
        group relative h-[570px] overflow-hidden rounded-[6px]
        flex-[1]
        transition-all duration-700 ease-in-out
        hover:flex-[1.8]
      "
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1917]/90 via-[#1A1917]/35 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h3 className="font-heading text-[24px] font-semibold leading-[28px] tracking-[0.4px] text-white">
              {title}
            </h3>

            <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100">
              <div className="overflow-hidden">
                <p className="mt-3 max-w-[637px] text-[16px] leading-[26px] text-white">
                  {description}
                </p>
              </div>
            </div>
          </div>

          <Link
            href={href}
            aria-label={`Read more about ${title}`}
            className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-white/70 opacity-0 translate-y-2 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white/10"
          >
            <ArrowUpRight size={20} className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* =========================
   MOBILE CARD
========================= */

function MobileCard({
  title,
  description,
  image,
  href,
}: CaseStudy) {
  return (
    <article className="flex w-[308px] shrink-0 flex-col rounded-[6px] border border-[#D1D1D1] bg-transparent">
      <div className="flex h-full flex-col p-3">
        <div
          className="h-[324px] w-full rounded-[4px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />

        <div className="mt-4 flex flex-1 flex-col gap-2">
          <h3 className="font-heading text-[18px] font-semibold leading-[24px] tracking-[0.4px] text-[#1A1917]">
            {title}
          </h3>

          <p className="text-[16px] leading-[26px] text-[#56554F]">
            {description}
          </p>
        </div>

        <Link
          href={href}
          className="mt-auto self-start inline-flex h-[44px] items-center justify-center border border-[#56554F] px-6 font-mono text-[14px] font-medium uppercase tracking-[0.4px] text-[#1A1917]"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}