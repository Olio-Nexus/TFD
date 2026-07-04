import React from "react";

const features = [
  {
    number: "01",
    title: "Experienced Drillers",
    description:
      "Our field crew brings hands-on experience across geotechnical and environmental drilling programs. Operating the rig, following bore plans, and delivering accurate field data on every job.",
  },
  {
    number: "02",
    title: "Safety & Professional Standards",
    description:
      "Our team follows clear procedures, maintains equipment in good condition, and adheres to international management systems. This helps us deliver safe and consistent results in the field.",
  },
  {
    number: "03",
    title: "Responsive Communication",
    description:
      "We use clear schedules, give practical advice, and coordinate closely with clients. This helps keep projects on track and avoids unnecessary delays.",
  },
];

export default function WhatDefinesOurTeam() {
  return (
    <section className="bg-[var(--bg-alt)]">
      <div className="container-custom py-12 md:py-16 lg:py-20">
        {/* Heading */}
        <h2 className="font-heading text-center font-semibold tracking-[-1px] text-[24px] leading-[30px] text-[var(--text)] md:text-[48px] md:leading-[56px] md:tracking-[-2px]">
          What Defines{" "}
          <span className="text-[var(--accent)]">Our Team</span>
        </h2>

        {/* Desktop */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={item.number}
              className={[
                "flex h-[280px] flex-col",
                index === 0 && "pr-6",
                index === 1 && "border-x border-[var(--border)] px-8",
                index === 2 && "pl-6",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="font-mono text-[24px] font-semibold leading-7 tracking-[1.56px] text-[var(--accent)]">
                {item.number}
              </span>

              <div className="mt-[120px] max-w-[390nppx]">
                <h3 className="font-heading text-[24px] font-semibold leading-7 tracking-[0.6px] text-[var(--text)] lg:whitespace-nowrap">
                  {item.title}
                </h3>

                <p className="mt-3 body ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet */}
        <div className="mt-8 flex flex-col lg:hidden">
          {features.map((item) => (
            <div
              key={item.number}
              className="border-b border-[var(--border)] py-6 first:pt-0 last:pb-0"
            >
              <div className="flex items-center gap-[10px]">
                <span className="font-mono text-[14px] font-medium uppercase leading-[23px] tracking-[1.4px] text-[var(--accent)]">
                  {item.number}
                </span>

                <h3 className="font-heading text-[20px] font-semibold leading-6 tracking-[-0.1px] text-[var(--text)]">
                  {item.title}
                </h3>
              </div>

              <p className="body mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}