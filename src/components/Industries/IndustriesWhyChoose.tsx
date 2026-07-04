import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/icons/access-capabilities.svg",
    title: "Tight-access drilling capability",
  },
  {
    icon: "/services/icons/sfa-1.svg",
    title: "Ute-mounted drilling rig with SPT capability",
  },
  {
    icon: "/services/icons/sfa-5.svg",
    title: "Fast mobilisation across Sydney and NSW",
  },
  {
    icon: "/services/icons/sfa-4.svg",
    title: "ISO-certified quality, safety, and environmental systems",
  },
  {
    icon: "/services/icons/sfa-2.svg",
    title: "Drilling by engineers, for engineers",
  },
  {
    icon: "/services/icons/sfa-6.svg",
    title:
      "Well maintained & documented equipment, reliability you can count on.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[var(--bg-alt)] py-12 md:py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto flex w-full flex-col items-start gap-3 md:items-center md:gap-5">
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <span className="h-px w-5 bg-[var(--accent)]" />
            <span className="font-mono text-xs font-medium uppercase tracking-[1.4px] text-[var(--accent)] md:text-sm">
              Why Choose Us
            </span>
          </div>

          {/* Title */}
          <h2 className="font-heading text-left text-[24px] font-semibold leading-[30px] tracking-[-1px] text-[var(--text)] md:text-center md:text-[48px] md:leading-[56px] md:tracking-[-2px]">
            Why Choose{" "}
            <span className="text-[var(--accent)]">
              TerraForma Drilling?
            </span>
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="mt-6 flex flex-col gap-3 md:hidden">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[4px] bg-white p-3"
              >
                <div className="flex flex-col items-start gap-4">
                 <Image
                    src={item.icon}
                    alt={item.title}
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                    />

                  <h3 className="font-heading text-[18px] font-semibold leading-6 tracking-[-0.1px] text-[var(--text)]">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Layout */}
        <div className="relative mt-14 hidden md:block">
          <div className="border border-dashed border-[rgba(86,85,79,0.3)] p-8">
            <div className="grid grid-cols-3">
              {features.map((item, index) => {
                const Icon = item.icon;

                const isLastColumn = (index + 1) % 3 === 0;
                const isFirstRow = index < 3;

                return (
                  <div
                    key={index}
                    className={`
                      flex min-h-[238px] flex-col items-center justify-center
                      px-6 py-10 text-center
                      ${!isLastColumn ? "border-r border-dashed border-[rgba(86,85,79,0.3)]" : ""}
                      ${isFirstRow ? "border-b border-dashed border-[rgba(86,85,79,0.3)]" : ""}
                    `}
                  >
                       <Image
                        src={item.icon}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="mb-10 object-contain"
                        />

                    <h3 className="max-w-[320px] font-heading text-[20px] font-semibold leading-7 tracking-[0.6px] text-[var(--text)]">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Corner markers */}
          <span className="absolute -left-2 -top-2 h-4 w-4">
            <span className="absolute left-1/2 top-0 h-4 w-px bg-[var(--accent)]" />
            <span className="absolute left-0 top-1/2 h-px w-4 bg-[var(--accent)]" />
          </span>

          <span className="absolute -right-2 -top-2 h-4 w-4">
            <span className="absolute left-1/2 top-0 h-4 w-px bg-[var(--accent)]" />
            <span className="absolute left-0 top-1/2 h-px w-4 bg-[var(--accent)]" />
          </span>

          <span className="absolute -bottom-2 -left-2 h-4 w-4">
            <span className="absolute left-1/2 top-0 h-4 w-px bg-[var(--accent)]" />
            <span className="absolute left-0 top-1/2 h-px w-4 bg-[var(--accent)]" />
          </span>

          <span className="absolute -bottom-2 -right-2 h-4 w-4">
            <span className="absolute left-1/2 top-0 h-4 w-px bg-[var(--accent)]" />
            <span className="absolute left-0 top-1/2 h-px w-4 bg-[var(--accent)]" />
          </span>
        </div>
      </div>
    </section>
  );
}