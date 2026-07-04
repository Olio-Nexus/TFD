"use client";

import { useState } from "react";
import { ArrowDown } from "lucide-react";

type CoverageGroup = {
  name: string;
  suburbs: string[];
};

export interface AreaCoverageProps {
  tag?: string;
  title: string;
  highlight?: string;
  paragraphs: string[];
  groups: CoverageGroup[];
}

export default function AreaCoverage({
  tag = "Available Drilling Services",
  title,
  highlight,
  paragraphs,
  groups,
}: AreaCoverageProps) {
  const [activeGroup, setActiveGroup] = useState(groups[0]?.name ?? "");

  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container-custom flex flex-col gap-5 lg:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <div className="flex flex-col gap-4 lg:max-w-[620px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="h-px w-5 bg-[var(--accent)]" />
              <span className="tag">{tag}</span>
            </div>

            {/* Heading */}
            <h2
              className="
                font-heading text-[24px] font-semibold leading-[30px] tracking-[-1px]
                text-[#1A1917]
                lg:text-[48px] lg:leading-[56px] lg:tracking-[-2px]
              "
            >
              {titleParts[0]}
              {highlight && (
                <span className="text-[var(--accent)]">{highlight}</span>
              )}
              {titleParts[1]}
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-4 lg:max-w-[608px] lg:pt-2">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {groups.map((group) => {
            const isActive = activeGroup === group.name;

            return (
              <div
                key={group.name}
                className={`rounded-[4px] border border-[#D1D1D1] ${
                  isActive ? "bg-[#F4F1EB]" : "bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveGroup(isActive ? "" : group.name)}
                  aria-expanded={isActive}
                  className="flex w-full items-center justify-between gap-3 p-3 text-left lg:p-5"
                >
                  <span className="flex items-center gap-3">
                    {isActive && (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(229,57,53,0.2)]">
                        <span className="h-[10px] w-[10px] rounded-full bg-[var(--accent)]" />
                      </span>
                    )}

                    <span className="font-heading text-[20px] font-semibold leading-6 tracking-[-0.1px] text-[#1A1917]">
                      {group.name}
                    </span>
                  </span>

                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors lg:h-8 lg:w-8 ${
                      isActive
                        ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                        : "border-[#D1D1D1] text-[#1A1917]"
                    }`}
                  >
                    <ArrowDown
                      size={14}
                      className={`transition-transform ${
                        isActive ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>

                {isActive && (
                  <div className="px-3 pb-3 lg:px-5 lg:pb-5">
                    <div className="border-t border-[#D1D1D1] pt-3 lg:pt-5">
                      <div className="flex flex-wrap gap-3">
                        {group.suburbs.map((suburb) => (
                          <span
                            key={suburb}
                            className="rounded-[4px] border border-[#D1D1D1] bg-white px-3 py-1.5 text-[14px] font-medium capitalize leading-6 tracking-[0.5px] text-[#101010]"
                          >
                            {suburb}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
