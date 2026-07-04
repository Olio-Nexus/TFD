import { ChevronRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#1A1917] py-12 pt-[72px] md:py-[192px]">
      {/* Decorative wave band (shared with the projects hero) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 226"
        preserveAspectRatio="xMidYMax slice"
        className="pointer-events-none absolute bottom-0 left-0 h-[226px] w-full"
      >
        <path
          d="M0 68.2237C261.818 -32.1053 480 160.526 807.273 48.1579C1047.27 -40.1316 1243.64 88.2895 1440 0V226H0V68.2237Z"
          fill="#F1E9DC"
          fillOpacity="0.1"
        />
      </svg>

      <div className="relative z-10 mx-auto flex max-w-[862px] flex-col items-start px-5 md:items-center md:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex w-full items-center gap-[10px] font-mono text-[12px] uppercase tracking-[1px] text-white/70 md:justify-center md:text-[14px] md:tracking-[1.4px]">
          <span>Company</span>

          <ChevronRight size={12} className="text-white/70" />

          <span className="text-white">Contact</span>
        </div>

        {/* Title */}
        <h1 className="max-w-[862px] text-left font-heading text-[36px] font-semibold leading-[40px] tracking-[-1px] text-white md:text-center md:text-[56px] md:leading-[64px] md:tracking-[-2px]">
          Need a Quote for Your Next{" "}
          <span className="text-[var(--accent)]">Drilling Job?</span>
        </h1>

        {/* Description */}
        <div className="mt-3 flex max-w-[838px] flex-col gap-4 md:mt-4">
          <p className="text-left text-[18px] leading-[26px] text-[#B8B8B8] md:text-center md:leading-[30px]">
            If you&apos;re a geotechnical or environmental consultant, developer,
            contractor, or project manager, send us your project scope, site
            location, and drilling requirements.
          </p>

          <p className="text-left text-[18px] leading-[26px] text-[#B8B8B8] md:text-center md:leading-[30px]">
            We&apos;ll provide straightforward drilling solutions and usually a
            same-day quote.
          </p>
        </div>
      </div>
    </section>
  );
}
