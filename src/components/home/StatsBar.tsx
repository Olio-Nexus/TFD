import React from "react";

type Stat = {
  id: string;
  title: React.ReactNode;
  label: string;
  highlight?: boolean;
};

const stats: Stat[] = [
  {
    id: "01",
    title: (
      <>
        Greater Sydney &
        <br />
        <span className="text-[var(--accent)]">Regional NSW.</span>
      </>
    ),
    label: "Coverage",
  },
  {
    id: "02",
    title: (
      <>
        Hydraulic Interlocks.
        <span className="text-[var(--accent)]"> Service Records.</span>
        <span className="text-[var(--accent)]"> Zero Compromise.</span>
      </>
    ),
    label: "Tier 1 Capabilities",
  },
  {
    id: "03",
    title: (
      <>
        ISO Certified -
        <span className="text-[var(--accent)]">
          {" "}
          Quality,
          <br />
          Safety, & Environment
        </span>
      </>
    ),
    label: "Trusted By",
  },
  {
    id: "04",
    title: "10,000+",
    label: "Boreholes Drilled",
    highlight: true,
  },
];

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-[#1A1917]">
      {/* Mobile Wave (Figma) */}
      <svg
        aria-hidden="true"
       className="
        pointer-events-none
          absolute
          inset-x-0
          top-[366px]
          z-0
          h-[125px]
          w-full

          xl:left-0
          xl:right-auto
          xl:top-[105px]
          xl:h-[226px]
          "
        viewBox="0 0 1440 226"
        preserveAspectRatio="none"
      >
        <path
          d="M0 68.2237C261.818 -32.1053 480 160.526 807.273 48.1579C1047.27 -40.1316 1243.64 88.2895 1440 0V226H0V68.2237Z"
          fill="#F1E9DC"
          fillOpacity="0.1"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-full px-5 md:px-10 xl:px-20">
        {/* Desktop preserved, mobile updated */}
        <div
          className="
            grid
            grid-cols-2

            overflow-hidden
            rounded-[4px]
            border border-white/[0.08]

            md:grid-cols-2

            xl:grid-cols-4
            xl:border-0
            xl:rounded-none
          "
        >
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`
                relative
                flex
                flex-col
                gap-4
                px-5
                pt-5
                pb-5

                ${
                  index < 2
                    ? "h-[239px] border-b border-white/[0.08]"
                    : "h-[213px]"
                }

                ${
                  index === 0 || index === 2
                    ? "border-r border-white/[0.08]"
                    : ""
                }

                xl:h-auto
                xl:min-h-[214px]
                xl:px-5
                xl:py-10
                xl:gap-4
                xl:border-b-0

                ${
                  index !== stats.length - 1
                    ? "xl:border-r xl:border-r-white/10"
                    : ""
                }
              `}
            >
              {/* Number Badge */}
              <div
                className="
                  inline-flex
                  h-[26px]
                  w-[30px]
                  items-center
                  justify-center
                  rounded-[2px]
                  border
                  border-[rgba(229,57,53,0.35)]
                  bg-[rgba(229,57,53,0.06)]
                "
              >
                <span
                  className="
                    font-mono
                    text-[14px]
                    font-semibold
                    leading-5
                    tracking-[1.2px]
                    text-[var(--accent)]
                  "
                >
                  {stat.id}
                </span>
              </div>

              {/* Content */}
              <div
                className={
                  stat.id === "04"
                    ? "flex flex-1 flex-col justify-between"
                    : "flex flex-1 flex-col justify-between"
                }
              >
                <h3
                  className={`
                    max-w-[280px]
                    font-heading
                    text-[20px]
                    font-semibold
                    leading-[26px]
                    tracking-[-0.1px]
                    ${
                      stat.highlight
                        ? "text-white"
                        : "text-white"
                    }
                  `}
                >
                  {stat.title}
                </h3>

                <p
                  className="
                    text-[12px]
                    font-medium
                    uppercase
                    leading-[18px]
                    tracking-[1.5px]
                    text-white/70
                  "
                >
                  {stat.id === "04" ? (
                    <>
                      Boreholes
                      <br />
                      Drilled
                    </>
                  ) : (
                    stat.label
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}