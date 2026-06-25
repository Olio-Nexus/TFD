"use client";

type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Certified Quality Systems",
    description:
      "Send us your project address, target depths, required services, and any access constraints. You don’t need to fill out long forms; just an email or phone call is enough to get started.",
  },
  {
    number: "02",
    title: "Same Day Quote",
    description:
      "We review your scope, flag any site access considerations, and return a clear, itemised quote. Most quotes are returned the same business day.",
  },
  {
    number: "03",
    title: "Site Visit & Drilling",
    description:
      "Our rig comes to your site, usually within 24 hours for Greater Sydney. We complete drilling, testing, and installation in accordance with your engineering team’s specifications.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--bg-alt)] py-5 md:py-16 lg:py-20"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="mb-3 flex items-center gap-[10px]">
            <span className="h-px w-3 bg-[var(--accent)]" />
            <span className="tag">How It Works</span>
          </div>

          <h2 className="mb-2 font-heading text-[24px] font-semibold leading-[30px] tracking-[-1px] text-[var(--text)] md:text-[48px] md:leading-[1.1]">
            From Scope to{" "}
            <span className="text-[var(--accent)]">
              Site Mobilisation
            </span>
          </h2>

          <p className="max-w-[362px] text-[16px] leading-[26px] text-[var(--muted)] md:max-w-[753px]">
            From your first contact to the final report, our process is
            straightforward and avoids unnecessary steps.
          </p>
        </div>

        {/* ========================================= */}
        {/* MOBILE VERSION (FIGMA) */}
        {/* ========================================= */}
        <div className="relative mt-5 lg:hidden">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-start gap-4"
            >
              {/* Timeline */}
              <div className="flex w-9 flex-col items-center">
                <div
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full border border-[#D1D1D1]
                    bg-[var(--bg-alt)]
                  "
                >
                  <span className="font-mono text-[14px] font-semibold tracking-[1.2px] text-[var(--muted)]">
                    {step.number}
                  </span>
                </div>

                {index !== steps.length - 1 && (
                  <div className="mt-2 h-[118px] w-px bg-[#D1D1D1]" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-10 pt-[5px]">
                <h3
                  className="
                    font-heading
                    text-[18px]
                    font-semibold
                    leading-6
                    tracking-[-0.1px]
                    text-[var(--text)]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-[16px]
                    leading-[26px]
                    text-[var(--muted)]
                  "
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================= */}
        {/* DESKTOP VERSION (UNCHANGED) */}
        {/* ========================================= */}
        <div className="relative mt-14 hidden lg:block">
          {/* Desktop line */}
          <div className="absolute left-[16.5%] right-[16.5%] top-10 h-px bg-[#D1D1D1]" />

          <div className="grid grid-cols-3 gap-5">
            {steps.map((step) => (
              <article
                key={step.number}
                className="
                  group relative z-10
                  flex min-h-[287px] flex-col
                  rounded-[6px]
                  border border-[#D1D1D1]
                  bg-[var(--bg-alt)]
                  p-6 md:p-8
                  transition-all duration-300 ease-out
                  hover:bg-white
                  hover:shadow-[0px_113px_68px_rgba(0,0,0,0.02),0px_50px_50px_rgba(0,0,0,0.04),0px_13px_28px_rgba(0,0,0,0.02)]
                "
              >
                {/* Top Row */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="border border-[#D1D1D1] px-2 py-1">
                    <span className="font-mono text-sm font-semibold tracking-[1.2px] text-[var(--muted)]">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex h-4 w-4 items-center justify-center rounded-full border border-[#D1D1D1]">
                    <span
                      className="
                        h-2 w-2 rounded-full
                        bg-[#D1D1D1]
                        transition-colors duration-300
                        group-hover:bg-[var(--accent)]
                      "
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-heading text-[20px] font-semibold leading-7 tracking-[0.4px] text-[var(--text)]">
                    {step.title}
                  </h3>

                  <p className="body">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}