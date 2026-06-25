import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";

interface HeroProps {
  title: string;
  highlight: string;
  description: string;
  breadcrumb: string;
}

export default function Hero({
  title,
  highlight,
  description,
  breadcrumb,
}: HeroProps) {
  const parts = highlight
    ? title.split(highlight)
    : [title];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    {
      label: breadcrumb
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#1A1917] pt-[72px]">

      {/* Background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 w-full">
        <svg
          viewBox="0 0 1439 226"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" block h-[226px] w-full"
        >
          <path
            d="M0 68.2237C261.818 -32.1053 480 160.526 807.273 48.1579C1047.27 -40.1316 1243.64 88.2895 1440 0V226H0V68.2237Z"
            fill="#F1E9DC"
            fillOpacity="0.1"
          />
        </svg>
      </div>

      {/* DESKTOP */}
      <div className="relative z-10 hidden min-h-[602px] flex-col items-center justify-center px-[80px] py-[120px] lg:flex">

        <Breadcrumb items={breadcrumbItems} />

        <div className="mt-8 flex max-w-[862px] flex-col items-center gap-8">

          <div className="flex flex-col items-center gap-5">

            <h1 className="text-center font-heading text-[56px] font-semibold leading-[64px] tracking-[-2px] text-white">
              {parts[0]}
              <span className="text-[#F53D37]">{highlight}</span>
              {parts[1]}
            </h1>

            <p className="max-w-[838px] text-center text-[18px] leading-[30px] text-[#B8B8B8]">
              {description}
            </p>

          </div>

          <div className="flex gap-5">
            <Link href="/contact" className="btn-primary h-[44px] min-w-[198px] text-[16px]">
              Request a Quote
            </Link>
          </div>

        </div>
      </div>

      {/* MOBILE */}
      <div className="relative z-10 lg:hidden">

        <div className="border-t border-white/10 px-5 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className="px-5 py-5">

          <div className="flex flex-col gap-6">

            <h1 className="font-heading text-[36px] font-semibold leading-[40px] tracking-[-1px] text-white">
              {parts[0]}
              <span className="text-[#F53D37]">{highlight}</span>
              {parts[1]}
            </h1>

            <p className="text-[18px] leading-[26px] text-[#B8B8B8]">
              {description}
            </p>

            <div className="flex flex-col gap-3">
              <Link href="/contact" className="btn-primary h-[44px] w-full text-[16px]">
                Request a Quote
              </Link>

              {/* <Link href="/services" className="btn-glass h-[44px] w-full text-[16px]">
                View Our Services
              </Link> */}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}