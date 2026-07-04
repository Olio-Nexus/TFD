import { Fragment } from "react";
import { ChevronRight } from "lucide-react";

import type { Project } from "@/data/projects/projects";

export default function ProjectDetailHero({ project }: { project: Project }) {
  const [beforeHighlight, afterHighlight] = project.titleHighlight
    ? project.title.split(project.titleHighlight)
    : [project.title, ""];

  return (
    <section className="relative overflow-hidden bg-[#1A1917] py-12 pt-[72px] md:py-[192px]">
      {/* Decorative wave band (shared with the projects hub hero) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 226"
        preserveAspectRatio="xMidYMax slice"
        className="pointer-events-none absolute bottom-0 left-0 h-[226px] w-full"
      >
        <path
          d="M0 68.2237C261.818 -32.1053 480 160.526 807.273 48.1579C1047.27 -40.1316 1243.64 88.2895 1440 0V226H0V68.2237Z"
          fill="#F1E9DC"
          fillOpacity="0.1"
        />
      </svg>

      <div className="relative z-10 mx-auto flex max-w-[1000px] flex-col items-start px-5 md:items-center md:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex w-full items-center gap-[10px] font-mono text-[12px] uppercase tracking-[1px] text-white/70 md:justify-center md:text-[14px] md:tracking-[1.4px]">
          <span>Company</span>

          <ChevronRight size={12} className="text-white/70" />

          <span className="text-white">Case Study</span>
        </div>

        {/* Title */}
        <h1 className="max-w-[842px] text-left font-heading text-[36px] font-semibold leading-[40px] tracking-[-1px] text-white md:text-center md:text-[56px] md:leading-[64px] md:tracking-[-2px]">
          {beforeHighlight}
          {project.titleHighlight && (
            <span className="text-[var(--accent)]">{project.titleHighlight}</span>
          )}
          {afterHighlight}
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-[792px] text-left text-[18px] leading-[26px] text-[#B8B8B8] md:mt-4 md:text-center md:leading-[30px]">
          {project.description}
        </p>

        {/* Meta row — stacked on mobile, pipe-separated on desktop */}
        {project.heroTags && project.heroTags.length > 0 && (
          <div className="mt-8 flex flex-col items-start gap-3 md:mt-12 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-5 md:gap-y-3">
            {project.heroTags.map((tag, index) => (
              <Fragment key={tag}>
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-[18px] w-px bg-[#56554F] md:block"
                  />
                )}
                <span className="text-[16px] leading-none text-white">
                  {tag}
                </span>
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
