import { ChevronRight } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#1A1917] py-12 md:py-[120px] mt-[72px]">
      {/* Decorative wave band */}
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

      <div className="relative z-10 mx-auto flex max-w-[862px] flex-col items-center px-5 md:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex w-full items-center gap-[10px] font-mono text-[12px] uppercase tracking-[1px] text-white/70 md:justify-center md:text-[14px] md:tracking-[1.4px]">
          <span>Company</span>

          <ChevronRight
            size={12}
            className="text-white/70"
          />

          <span className="text-white">Blogs</span>
        </div>

        {/* Title */}
        <h1 className="font-heading max-w-[842px] text-left text-[36px] font-semibold leading-[40px] tracking-[-1px] text-white md:text-center md:text-[56px] md:leading-[64px] md:tracking-[-2px]">
          Geotechnical &amp; Environmental{" "}
          <span className="text-[var(--accent)]">Drilling Insights</span>
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-[792px] text-left text-[18px] leading-[26px] text-[#B8B8B8] md:mt-4 md:text-center md:leading-[30px]">
          Explore practical insights, project knowledge, and industry updates
          from TerraForma Drilling. Our articles cover geotechnical
          investigations, environmental assessments, drilling methods, testing
          procedures, and field practices that support engineering decisions.
        </p>
      </div>
    </section>
  );
}
