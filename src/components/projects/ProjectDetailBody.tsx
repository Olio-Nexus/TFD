import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects/projects";

export default function ProjectDetailBody({ project }: { project: Project }) {
  const { sections, gallery, details, relatedServices } = project;

  if (!sections?.length && !gallery?.length && !details && !relatedServices) {
    return null;
  }

  const detailRows = details
    ? [
        { label: "Service", value: details.service },
        { label: "Location", value: details.location },
        { label: "Project Type", value: details.projectType },
        { label: "Mobilisation", value: details.mobilisation },
      ]
    : [];

  return (
    <section className="bg-white md:bg-[var(--bg-alt)]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-5 py-10 md:flex-row md:gap-14 md:px-20 md:py-20">
        {/* Left column — narrative + gallery */}
        <div className="flex flex-col gap-5 md:max-w-[828px] md:flex-1 md:gap-14">
          {sections?.map((block, index) => (
            <div key={block.title} className="flex flex-col">
              <div className="flex flex-col gap-3 md:gap-5">
                <div className="flex items-center gap-4 md:gap-5">
                  <span className="inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[2px] bg-[var(--accent)] font-mono text-[16px] font-semibold leading-5 tracking-[1.2px] text-white md:h-[42px] md:w-[42px] md:text-[20px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-[24px] font-semibold leading-[30px] tracking-[-1px] text-[var(--text)] md:text-[32px] md:leading-[41px] md:tracking-normal">
                    {block.title}
                  </h2>
                </div>

                <div className="flex flex-col gap-3">
                  {block.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[16px] leading-[26px] text-[var(--muted)] md:leading-[25px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Divider between blocks — mobile only */}
              {index < sections.length - 1 && (
                <div className="mt-5 h-px w-full bg-[#D1D1D1] md:hidden" />
              )}
            </div>
          ))}

          {/* Gallery */}
          {gallery && gallery.length > 0 && (
            <div className="flex flex-col gap-3 md:gap-5">
              <GalleryImage
                src={gallery[0]}
                alt={project.title}
                className="aspect-[362/246] md:aspect-[828/589]"
                priority
              />

              {gallery.length > 1 && (
                <div className="flex gap-3 md:gap-5">
                  {gallery.slice(1, 3).map((src, i) => (
                    <GalleryImage
                      key={src + i}
                      src={src}
                      alt={project.title}
                      className="aspect-[173/246] flex-1 md:aspect-[404/589]"
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right column — sticky sidebar */}
        {(details || relatedServices) && (
          <aside className="flex w-full flex-col gap-6 md:w-[396px] md:shrink-0 md:self-start md:sticky md:top-[100px]">
            {/* Project Details */}
            {details && (
              <div className="rounded-[6px] border border-[#D1D1D1] bg-white px-6 py-8">
                <div className="flex flex-col gap-6">
                  <CardHeading title="Project Details" />

                  {detailRows.map((row, i) => (
                    <Fragment key={row.label}>
                      {i > 0 && <div className="h-px w-full bg-[#D1D1D1]" />}
                      <div className="flex flex-col gap-2">
                        <span className="text-[14px] font-medium uppercase leading-6 tracking-[0.5px] text-[var(--muted)]">
                          {row.label}
                        </span>
                        <span className="font-heading text-[20px] font-medium leading-[28px] tracking-[0.6px] text-[var(--text)]">
                          {row.value}
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Related Services */}
            {relatedServices && relatedServices.length > 0 && (
              <div className="rounded-[6px] border border-[#D1D1D1] bg-white px-6 py-8">
                <div className="flex flex-col gap-6">
                  <CardHeading title="Related Services" />

                  {relatedServices.map((service, i) => (
                    <Fragment key={service.href}>
                      {i > 0 && <div className="h-px w-full bg-[#D1D1D1]" />}
                      <Link
                        href={service.href}
                        className="group flex items-center gap-4"
                      >
                        {/* Mobile: dot is always accent. Desktop: neutral, accent on hover. */}
                        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[rgba(229,57,53,0.2)] transition-colors md:bg-[rgba(16,16,16,0.2)] md:group-hover:bg-[rgba(229,57,53,0.2)]">
                          <span className="h-2 w-2 rounded-full bg-[var(--accent)] transition-colors md:bg-[rgba(16,16,16,0.7)] md:group-hover:bg-[var(--accent)]" />
                        </span>
                        {/* Text stays dark on mobile; turns accent only on desktop hover. */}
                        <span className="font-heading text-[20px] font-medium leading-[28px] tracking-[0.6px] text-[var(--text)] transition-colors md:group-hover:text-[var(--accent)]">
                          {service.label}
                        </span>
                      </Link>
                    </Fragment>
                  ))}
                </div>
              </div>
            )}
          </aside>
        )}
      </div>
    </section>
  );
}

function CardHeading({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="font-heading text-[24px] font-semibold leading-[28px] tracking-[0.6px] text-[var(--text)]">
        {title}
      </h3>
      <div className="h-px w-full bg-[var(--accent)]" />
    </div>
  );
}

function GalleryImage({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[4px] md:rounded-[6px] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 828px"
        className="object-cover"
        priority={priority}
      />
      <div className="absolute inset-0 bg-[rgba(26,25,23,0.1)]" />
    </div>
  );
}
