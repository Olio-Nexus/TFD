"use client";

type Step = {
  number: string;
  title: string;
  description: string;
};

export interface HowItWorksIndustriesProps {
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
  steps: Step[];
}

function ActiveDot() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
    >
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="7.5"
        stroke="#D1D1D1"
      />
      <circle cx="8" cy="8" r="4" fill="#E53935" />
    </svg>
  );
}

function InactiveDot() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
    >
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="7.5"
        stroke="#D1D1D1"
      />
      <circle cx="8" cy="8" r="4" fill="#D1D1D1" />
    </svg>
  );
}

function MobileLine() {
  return (
    <svg
      width="1"
      height="71"
      viewBox="0 0 1 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[71px]"
    >
      <line
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="71"
        stroke="url(#paint0_linear_industries)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_industries"
          x1="-0.5"
          y1="0"
          x2="-0.5"
          y2="71"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.458473" stopColor="#D1D1D1" />
          <stop offset="1" stopColor="#D1D1D1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function HowItWorksIndustries({
  tag = "How It Works",
  title,
  highlight,
  description,
  steps,
}: HowItWorksIndustriesProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="bg-[#F4F1EB] py-12 md:py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="w-full">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px w-5 bg-[#E53935]" />
            <span className="tag">{tag}</span>
          </div>

         <h2 className="font-heading max-w-[830px] text-[24px] font-semibold leading-[30px] tracking-[-1px] text-[#1A1917] md:text-[48px] md:leading-[56px] md:tracking-[-2px]">
            {parts[0]}
            {highlight && <span className="text-[#E53935]">{highlight}</span>}
            {parts[1]}
          </h2>

          {description && (
            <p className="mt-3 hidden max-w-[753px] text-[16px] leading-[26px] text-[#56554F] md:block">
              {description}
            </p>
          )}
        </div>

        {/* Desktop */}
        <div className="relative mt-14 hidden lg:block">
          <div className="absolute left-1/2 top-[56px] z-0 h-px w-[78%] -translate-x-1/2 bg-[#D1D1D1]" />

          <div
            className="relative z-10 grid gap-5"
            style={{
              gridTemplateColumns: `repeat(${Math.min(
                steps.length,
                4
              )}, minmax(0, 1fr))`,
            }}
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  group
                  w-[305px]
                  h-[367.14px]
                  pt-8
                  pr-6
                  pb-8
                  pl-6
                  gap-8
                  rounded-[6px]
                  border
                  border-[#D1D1D1]
                  bg-[#F4F1EB]
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:shadow-[0px_113px_68px_rgba(0,0,0,0.02),0px_50px_50px_rgba(0,0,0,0.04),0px_13px_28px_rgba(0,0,0,0.02)]
                "
              >
                {/* Top Row */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="rounded-[2px] border border-[#D1D1D1] px-2 py-[2px]">
                    <span className="font-mono text-[14px] font-semibold tracking-[1.2px] text-[#56554F]">
                      {step.number}
                    </span>
                  </div>

                  <div className="relative h-4 w-4">
                    <div className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                      <InactiveDot />
                    </div>

                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ActiveDot />
                    </div>
                  </div>
                </div>

                <h3 className="font-heading mb-3 text-[20px] font-semibold leading-7 text-[#1A1917]">
                  {step.title}
                </h3>

                <p className="text-[16px] leading-[26px] text-[#56554F]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-8 flex flex-col gap-0 lg:hidden">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex w-9 flex-col items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D1D1D1]">
                  <span className="font-mono text-[14px] font-semibold tracking-[1.2px] text-[#56554F]">
                    {step.number}
                  </span>
                </div>

                <div className="mt-2">
                  <MobileLine />
                </div>
              </div>

              <div className="flex-1 pb-6 pt-[5px]">
                <h3 className="font-heading mb-2 text-[18px] font-semibold leading-6 text-[#1A1917]">
                  {step.title}
                </h3>

                <p className="text-[16px] leading-[26px] text-[#56554F]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}