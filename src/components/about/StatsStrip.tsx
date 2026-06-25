import React from "react";


type Stat = {
  title: React.ReactNode;
  accent?: boolean;
  label: string;
};

const stats: Stat[] = [
  {
    title: "21,000",
    accent: true,
    label: "BOREHOLES DRILLED",
  },
  {
    title: (
      <>
        Greater Sydney &{" "}
        <span className="text-[var(--accent)]">Regional NSW</span>
      </>
    ),
    label: "COVERAGE",
  },
  {
    title: (
      <>
        ISO <span className="text-[var(--accent)]">Certified</span>
      </>
    ),
    label: "QUALITY, SAFETY & ENVIRONMENT",
  },
  {
    title: "Calibrated",
    accent: true,
    label: "SPT & DCP EQUIPMENT",
  },
];

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-alt)] z-[-1]">
      {/* Background Wave */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 226"
          className="h-[107px] w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 68.2237C261.818 -32.1053 480 160.526 807.273 48.1579C1047.27 -40.1316 1243.64 88.2895 1440 0V226H0V68.2237Z"
            fill="rgba(26,25,23,0.05)"
          />
        </svg>
         
      </div>

      <div className="relative z-10 mx-auto max-w-full">
        {/* ================= Desktop ================= */}
        <div className="hidden md:flex items-center justify-between px-20 py-[72px]">
            {stats.map((item, index) => (
                <React.Fragment key={index}>
                <div
                    className={`flex flex-col justify-center gap-2 ${
                    index === 1
                        ? "w-[313px]"
                        : index === 2
                        ? "w-[272px]"
                        : "w-[243px]"
                    }`}
                >
                    <h3
                    className={`font-heading text-[20px] leading-[32px] font-bold tracking-[-0.1px] ${
                        item.accent
                        ? "text-[var(--accent)]"
                        : "text-[var(--text)]"
                    }`}
                    >
                    {item.title}
                    </h3>

                    <p className="text-[14px] leading-[18px] font-medium uppercase tracking-[1.5px] text-[var(--muted)]">
                    {item.label}
                    </p>
                </div>

                {index < stats.length - 1 && (
                    <div className="h-16 w-px bg-[rgba(86,85,79,0.4)]" />
                )}
                </React.Fragment>
            ))}
            </div>

        {/* ================= Mobile ================= */}
        <div className="block md:hidden p-5">
          <div className="relative overflow-hidden rounded-[4px] border border-[rgba(86,85,79,0.4)] bg-transparent">
            {/* Row 1 */}
            <div className="grid grid-cols-2">
              <div className="border-r border-[rgba(86,85,79,0.4)] p-5">
                <div className="flex h-[105px] flex-col justify-between">
                  <h3 className="font-heading text-[20px] font-bold leading-[32px] tracking-[-0.1px] text-[var(--accent)]">
                     21,000
                  </h3>

                  <p className="font-body text-[12px] font-medium leading-[18px] tracking-[1.5px] text-[var(--muted)] uppercase">
                    BOREHOLES
                    <br />
                    DRILLED
                  </p>
                </div>
              </div>

              <div className="p-5">
                <div className="flex h-[105px] flex-col gap-2">
                  <h3 className="font-heading text-[20px] font-semibold leading-[26px] tracking-[-0.1px] text-[var(--text)]">
                    Greater Sydney &
                    <br />
                    <span className="text-[var(--accent)]">
                      Regional NSW
                    </span>
                  </h3>

                  <p className="font-body text-[12px] font-medium uppercase tracking-[1.5px] text-[var(--muted)]">
                    COVERAGE
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[rgba(86,85,79,0.4)]" />

            {/* Row 2 */}
            <div className="grid grid-cols-2">
              <div className="border-r border-[rgba(86,85,79,0.4)] p-5">
                <div className="flex h-[105px] flex-col justify-between">
                  <h3 className="font-heading text-[20px] font-semibold leading-[26px] tracking-[-0.1px] text-[var(--text)]">
                    ISO <span className="text-[var(--accent)]">Certified</span>
                  </h3>

                  <p className="font-body text-[12px] font-medium leading-[18px] tracking-[1.5px] text-[var(--muted)] uppercase">
                    QUALITY, SAFETY &
                    <br />
                    ENVIRONMENT
                  </p>
                </div>
              </div>

              <div className="p-5">
                <div className="flex h-[105px] flex-col justify-between">
                  <h3 className="font-heading text-[20px] font-semibold leading-[26px] tracking-[-0.1px] text-[var(--accent)]">
                    Calibrated
                  </h3>

                  <p className="font-body text-[12px] font-medium leading-[18px] tracking-[1.5px] text-[var(--muted)] uppercase">
                    SPT & DCP
                    <br />
                    EQUIPMENT
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}