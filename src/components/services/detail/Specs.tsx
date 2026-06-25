"use client";

type SpecRow = {
  specification: string;
  details: string;
};

interface SpecsProps {
  title: string;
  highlight: string;
  specs: SpecRow[];
}

export default function Specs({ title, highlight, specs }: SpecsProps) {
  const [beforeHighlight, afterHighlight] = title.split(highlight);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container-custom">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-14">
          {/* Sticky Heading */}
          <div className="lg:w-[470px] lg:flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="mb-3 flex items-center gap-4 md:mb-5">
                <div className="h-px w-3 md:w-5 bg-[#E53935]" />
                <span className="font-mono text-[12px] md:text-[14px] font-medium uppercase tracking-[1.4px] text-[#E53935]">
                  Rig Tech Specifications
                </span>
              </div>

              <h2 className="font-heading text-[24px] leading-[30px] font-semibold tracking-[-1px] text-[#1A1917] md:text-[48px] md:leading-[56px] md:tracking-[-2px]">
                {beforeHighlight}
                <span className="text-[#E53935]">{highlight}</span>
                {afterHighlight}
              </h2>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-hidden rounded-[8px] border border-[#D8D8D8]">
            {/* Header */}
            <div className="grid grid-cols-2 bg-[#1A1917]">
              <div className="border-r border-[#D8D8D8] px-4 py-4 md:px-8 md:py-8">
                <h3 className="font-heading text-[18px] leading-6 font-semibold text-white md:text-[24px] md:leading-7">
                  Solid Flight
                  <br className="md:hidden" />
                  <span className="hidden md:inline"> </span>
                  Auger Drilling
                </h3>
              </div>

              <div className="px-4 py-4 md:px-8 md:py-8">
                <h3 className="font-heading text-[18px] leading-6 font-semibold text-white md:text-[24px] md:leading-7">
                  Details
                </h3>
              </div>
            </div>

            {/* Rows */}
            {specs.map((row, index) => (
              <div
                key={row.specification}
                className={`grid grid-cols-2 ${
                  index % 2 === 0 ? "bg-[#F5F3F1]" : "bg-white"
                }`}
              >
                <div className="flex items-center border-r border-[#D8D8D8] px-4 py-4 md:px-8 md:py-8">
                  <h4 className="font-heading text-[16px] leading-6 font-semibold tracking-[-0.1px] text-[#1A1917] md:text-[20px] md:leading-7 md:tracking-[0.6px]">
                    {row.specification}
                  </h4>
                </div>

                <div className="flex items-center px-4 py-4 md:px-8 md:py-8">
                  <p className="font-body text-[16px] leading-[26px] font-normal text-[#101010] md:text-[20px] md:leading-[30px]">
                    {row.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}