import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbs } from "@/lib/breadcrumbs";

export default function ClientsHero() {
  return (
    <section className="relative overflow-hidden bg-[#1A1917]">
      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center px-5 py-16 text-center md:px-10 md:py-[120px]">
        {/* Breadcrumb */}
        <Breadcrumb
          items={breadcrumbs.company.clientsCertifications}
          className="mb-8 md:mb-10"
        />

        {/* Heading */}
        <h1 className="font-heading max-w-[934px] text-left text-[36px] font-semibold leading-[40px] tracking-[-1px] text-white md:text-center md:text-[56px] md:leading-[64px] md:tracking-[-2px]">
          Supporting Consultants, Developers
          <br className="hidden md:block" />
          <span className="block md:inline"> &amp; </span>
          <span className="text-[#E53935]">
            Project Teams Across NSW
          </span>
        </h1>

        {/* Paragraph 1 */}
        <p className="mt-5 max-w-[934px] text-left font-body text-[18px] leading-[26px] text-[#B8B8B8] md:mt-6 md:text-center md:leading-[30px]">
          We work with geotechnical and environmental consultants,
          developers, civil contractors, councils, and government
          organisations across New South Wales.
        </p>

        {/* Paragraph 2 */}
        <p className="mt-5 max-w-[934px] text-left font-body text-[18px] leading-[26px] text-[#B8B8B8] md:mt-4 md:text-center md:leading-[30px]">
          As a specialist drilling subcontractor, we follow your
          project team&apos;s bore plans, testing requirements, and
          installation specifications to support site investigations.
        </p>
      </div>

      {/* Bottom Wave */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 226"
          preserveAspectRatio="none"
          className="h-[120px] w-full md:h-[226px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 68.2237C261.818 -32.1053 480 160.526 807.273 48.1579C1047.27 -40.1316 1243.64 88.2895 1440 0V226H0V68.2237Z"
            fill="#F1E9DC"
            fillOpacity="0.10"
          />
        </svg>
      </div>
    </section>
  );
}