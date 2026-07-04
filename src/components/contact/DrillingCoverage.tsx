const COVERAGE = [
  {
    title: "Greater Sydney",
    areas: [
      "Alexandria",
      "Balmain",
      "Camperdown",
      "Chippendale",
      "Glebe",
      "Leichhardt",
      "Marrickville",
      "Newtown",
      "Pyrmont",
      "Redfern",
      "Rozelle",
      "Sydney CBD",
    ],
  },
  {
    title: "Regional NSW",
    areas: [
      "Newcastle & Hunter",
      "Wollongong & Illawarra",
      "Central West",
      "New England & Northwest",
      "Riverina & Murray",
      "North Coast",
      "Southern Tablelands",
    ],
  },
] as const;

export default function DrillingCoverage() {
  return (
    <section className="bg-[#F4F1EB] px-5 py-5 md:px-[80px] md:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-5 md:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-2 md:gap-3">
          <h2 className="font-heading text-[24px] font-semibold leading-[30px] tracking-[-1px] text-[#1A1917] md:text-[48px] md:leading-[56px] md:tracking-[-2px]">
            Where We Provide{" "}
            <span className="text-[var(--accent)]">Drilling Services</span>
          </h2>
          <p className="max-w-[761px] text-[16px] leading-[26px] text-[#56554F]">
            TerraForma Drilling works on projects across Greater Sydney and regional
            NSW. We handle geotechnical and environmental drilling, Standard
            Penetration Testing (SPT), and bore monitoring installations.
          </p>
        </div>

        {/* Cards + footer */}
        <div className="flex flex-col gap-5 md:gap-9">
          <div className="flex flex-col gap-3 md:flex-row md:gap-5">
            {COVERAGE.map((group) => (
              <div
                key={group.title}
                className="flex flex-1 flex-col gap-4 rounded-[4px] border border-[#D1D1D1] bg-white p-3 md:gap-6 md:rounded-[6px] md:p-6"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(229,57,53,0.2)]">
                    <span className="h-[10px] w-[10px] rounded-full bg-[var(--accent)]" />
                  </span>
                  <h3 className="font-heading text-[20px] font-semibold leading-[24px] tracking-[-0.1px] text-[#1A1917] md:text-[24px] md:leading-[28px] md:tracking-[0.6px]">
                    {group.title}
                  </h3>
                </div>

                {/* Divider (desktop only) */}
                <div className="hidden h-px w-full bg-[#D1D1D1] md:block" />

                {/* Area chips */}
                <div className="flex flex-wrap content-start gap-3 md:gap-5">
                  {group.areas.map((area) => (
                    <span
                      key={area}
                      className="rounded-[4px] border border-[#D1D1D1] bg-[#F4F1EB] px-3 py-[6px] text-[14px] font-medium capitalize leading-6 tracking-[0.5px] text-[#101010] md:bg-[#EFEAE1] md:px-6 md:py-3 md:font-heading md:text-[20px] md:capitalize md:leading-[28px] md:tracking-[0.6px]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-[16px] font-medium leading-[26px] text-[#1A1917] md:text-[20px] md:leading-[30px]">
            Not sure if we cover your area? Just ask. Our team supports projects
            across Greater Sydney and regional NSW.
          </p>
        </div>
      </div>
    </section>
  );
}
