import Image from "next/image";
import Link from "next/link";

import Breadcrumb from "@/components/ui/Breadcrumb";

export interface AreaHeroProps {
  region: string;
  title: string;
  highlight: string;
  paragraphs: string[];
  map: string;
  mapAlt: string;
  /** Glowing/active pin position over the map, as CSS top/left values. */
  pin?: { top: string; left: string };
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

/* Location marker (Figma location_on) — reused from WhereWeDrill so the hero
   pin matches the map's active-state pin. Always rendered white + glowing here
   to mark the current area's city. */
const Marker = ({ className }: { className?: string }) => (
  <svg
    aria-hidden
    viewBox="0 0 31 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.2386 16.2533C17.7686 15.7235 18.0336 15.0846 18.0336 14.3366C18.0336 13.5886 17.7686 12.9496 17.2386 12.4196C16.7089 11.8899 16.07 11.625 15.322 11.625C14.574 11.625 13.9351 11.8899 13.4054 12.4196C12.8754 12.9496 12.6104 13.5886 12.6104 14.3366C12.6104 15.0846 12.8754 15.7235 13.4054 16.2533C13.9351 16.783 14.574 17.0479 15.322 17.0479C16.07 17.0479 16.7089 16.783 17.2386 16.2533ZM15.322 31.5142C11.547 28.2432 8.7162 25.1991 6.8297 22.3819C4.9432 19.5644 4 16.9777 4 14.622C4 11.1605 5.1196 8.3581 7.3589 6.2149C9.5984 4.0716 12.2528 3 15.322 3C18.3913 3 21.0456 4.0716 23.2851 6.2149C25.5244 8.3581 26.644 11.1605 26.644 14.622C26.644 16.9777 25.7008 19.5644 23.8143 22.3819C21.9278 25.1991 19.097 28.2432 15.322 31.5142Z"
      fill="#FFFFFF"
    />
  </svg>
);

/* Glowing active pin — glow ellipse + white marker, matching WhereWeDrill's
   active state. `size` scales the marker between mobile and desktop. */
const MapPin = ({
  top,
  left,
  size = "desktop",
}: {
  top: string;
  left: string;
  size?: "mobile" | "desktop";
}) => (
  <div
    className="pointer-events-none absolute z-20 flex items-center justify-center"
    style={{ top, left, transform: "translate(-50%, -50%)" }}
  >
    <span
      aria-hidden
      className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
        size === "mobile" ? "h-[70px] w-[70px]" : "h-[132px] w-[132px]"
      }`}
      style={{
        background:
          "radial-gradient(59.42% 59.42% at 50% 48.7%, #2D2D2D 3.68%, #FFFFFF 78.19%)",
        opacity: 0.4,
      }}
    />
    <Marker
      className={`relative ${
        size === "mobile" ? "h-[22px] w-[19px]" : "h-[30px] w-[26px]"
      }`}
    />
  </div>
);

export default function AreaHero({
  region,
  title,
  highlight,
  paragraphs,
  map,
  mapAlt,
  pin,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: AreaHeroProps) {
  const parts = highlight ? title.split(highlight) : [title];

  const breadcrumbItems = [
    { label: "Area We Serve", href: "/areas-we-serve" },
    { label: region },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#1A1917] pt-[72px]">
      {/* DESKTOP MAP */}
      <div className="pointer-events-none absolute inset-y-0 right-[3%] hidden w-[64%] lg:block">
        <Image
          src={map}
          alt={mapAlt}
          fill
          priority
          sizes="64vw"
          className="object-cover object-right-bottom"
        />
        {pin && <MapPin top={pin.top} left={pin.left} size="desktop" />}
      </div>

      {/* DESKTOP CONTENT */}
      <div className="relative z-10 hidden lg:block">
        <div className="container-custom">
          <div className="flex h-[780px] max-w-[720px] flex-col justify-center">
            <Breadcrumb items={breadcrumbItems} />

            <h1 className="mt-8 font-heading text-[56px] font-semibold leading-[64px] tracking-[-2px] text-white">
              {parts[0]}
              <span className="text-[#E53935]">{highlight}</span>
              {parts[1]}
            </h1>

            <div className="mt-8 flex flex-col gap-6">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[18px] leading-[30px] text-[#B8B8B8]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 flex gap-5">
              <Link
                href={primaryHref}
                className="btn-primary h-[44px] min-w-[180px] text-[14px]"
              >
                {primaryLabel}
              </Link>

              <Link
                href={secondaryHref}
                className="btn-glass h-[44px] min-w-[180px] text-[14px]"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE CONTENT */}
      <div className="relative z-10 lg:hidden">
        <div className="border-t border-white/10 px-5 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className="px-5 py-5">
          {/* TEXT GROUP — Figma Frame 30604: gap 12px */}
          <div className="flex flex-col gap-3">
            <h1 className="font-heading text-[36px] font-semibold leading-[40px] tracking-[-1px] text-white">
              {parts[0]}
              <span className="text-[#E53935]">{highlight}</span>
              {parts[1]}
            </h1>

            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[18px] leading-[26px] text-[#B8B8B8]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* MAP — Figma: large, bleeds off the left edge, red NSW anchored right */}
          <div className="relative -mx-5 mt-8 h-[380px]">
            <Image
              src={map}
              alt={mapAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 64vw"
              className="object-cover object-right"
            />
            {pin && <MapPin top={pin.top} left={pin.left} size="mobile" />}
          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href={primaryHref}
              className="btn-primary h-[44px] w-full text-[16px]"
            >
              {primaryLabel}
            </Link>

            <Link
              href={secondaryHref}
              className="btn-glass h-[44px] w-full text-[16px]"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
