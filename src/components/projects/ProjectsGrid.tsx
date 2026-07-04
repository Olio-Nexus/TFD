"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, projectCategories } from "@/data/projects/projects";

const ALL = projectCategories[0];

export default function ProjectsGrid() {
  const [active, setActive] = useState(ALL);

  const filtered =
    active === ALL
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <section className="bg-[var(--bg-alt)]">
      <div className="container-custom py-10 md:py-20">
        {/* Heading */}
        <h2 className="mb-8 text-center font-heading text-[28px] font-semibold leading-[34px] tracking-[-1px] text-[var(--text)] md:mb-12 md:text-[48px] md:leading-[56px] md:tracking-[-2px]">
          Explore <span className="text-[var(--accent)]">Projects</span>
        </h2>

        {/* Category filter chips — single row, horizontally scrollable */}
        <div className="mb-8 flex gap-3 overflow-x-auto pb-1 md:mb-14 md:gap-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projectCategories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-[12px] font-medium uppercase tracking-[0.5px] transition-colors duration-300 md:px-5 md:py-3 md:text-[14px] ${
                  isActive
                    ? "bg-[var(--surface-dark)] text-white"
                    : "bg-white text-[var(--text)] hover:bg-[var(--surface-dark)] hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-[#D1D1D1] bg-white transition-colors duration-300 hover:border-[var(--accent)] md:rounded-[6px]"
            >
              {/* Cover image */}
              <div className="relative aspect-[362/196] w-full overflow-hidden md:aspect-[632/326]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-3 md:p-6">
                <span className="font-mono text-[14px] font-medium text-[var(--muted)] md:text-[16px]">
                  {project.category}
                </span>

                <h3 className="mt-2 line-clamp-3 font-heading text-[16px] font-semibold leading-[22px] tracking-[-0.1px] text-[var(--text)] md:mt-3 md:text-[20px] md:leading-[28px] md:tracking-[0.6px]">
                  {project.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-[16px] leading-[26px] text-[var(--muted)] md:mt-3 md:leading-[25px]">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-3 md:pt-5">
                  <div className="h-px w-full bg-[#D1D1D1]" />
                  <div className="mt-3 flex items-center justify-between md:mt-5">
                    <span className="font-mono text-[14px] font-medium uppercase tracking-[1px] text-[var(--muted)]">
                      {project.location}
                    </span>

                    <span className="flex items-center gap-2 text-[14px] font-medium tracking-[0.5px] text-[var(--accent)] md:text-[16px]">
                      View Case Study
                      <ArrowRight
                        size={18}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
