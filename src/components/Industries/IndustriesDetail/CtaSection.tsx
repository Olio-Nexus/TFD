import Link from "next/link";

export interface CtaSectionProps {
  title: string;
  highlight: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

function DesktopWave() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 h-auto w-full"
      viewBox="0 0 1440 500"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g opacity="0.5" clipPath="url(#cta-wave-clip-desktop)">
        <path
          opacity="0.85"
          d="M-214 128.729C75.7534 70.7782 336.532 186.68 684.236 128.729C1031.94 70.7782 1350.67 186.68 1611.45 128.729C1727.35 99.7536 1814.27 128.729 1872.22 114.241V621.31H-214V128.729Z"
          fill="#EFEAE1"
        />
        <path
          opacity="0.14"
          d="M-195 237.729C123.729 179.778 413.482 295.68 761.186 237.729C1079.92 185.573 1398.64 295.68 1659.42 237.729C1775.32 211.651 1847.76 237.729 1891.22 229.036V614.408H-195V237.729Z"
          fill="#E53935"
        />
        <path
          opacity="0.22"
          d="M-214 348.729C133.704 290.778 452.433 406.68 800.137 348.729C1118.87 296.573 1437.59 406.68 1698.37 348.729C1785.3 331.344 1843.25 348.729 1872.22 342.934V609.507H-214V348.729Z"
          fill="#56554F"
        />
        <path
          opacity="0.92"
          d="M-214 461.401C162.68 403.45 481.408 504.864 858.088 461.401C1176.82 423.733 1495.55 504.864 1727.35 461.401C1814.27 444.016 1857.74 461.401 1872.22 458.504V577.303H-214V461.401Z"
          fill="#1A1917"
        />
      </g>
      <defs>
        <clipPath id="cta-wave-clip-desktop">
          <rect width="1440" height="572" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function MobileWave() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 h-auto w-full"
      viewBox="0 0 402 375"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g opacity="0.6" clipPath="url(#cta-wave-clip-mobile)">
        <path
          opacity="0.85"
          d="M-208.668 114.948C-71.0127 87.4165 52.877 142.479 218.063 114.948C383.25 87.4165 534.67 142.479 658.56 114.948C713.622 101.182 754.919 114.948 782.45 108.065V348.961H-208.668V114.948Z"
          fill="#EFEAE1"
        />
        <path
          opacity="0.14"
          d="M-208.668 195.948C-57.2472 168.416 80.4081 223.479 245.594 195.948C397.015 171.17 548.436 223.479 672.326 195.948C727.388 183.559 761.802 195.948 782.45 191.818V374.899H-208.668V195.948Z"
          fill="#E53935"
        />
        <path
          opacity="0.22"
          d="M-208.668 269.948C-43.4817 242.416 107.939 297.479 273.125 269.948C424.546 245.17 575.967 297.479 699.857 269.948C741.153 261.688 768.684 269.948 782.45 267.194V393.837H-208.668V269.948Z"
          fill="#56554F"
        />
        <path
          opacity="0.92"
          d="M-591 340.853C-273.944 287.779 -5.66669 380.658 311.389 340.853C579.667 306.355 847.944 380.658 1043.06 340.853C1116.22 324.93 1152.81 340.853 1165 338.199V447H-591V340.853Z"
          fill="#1A1917"
        />
      </g>
      <defs>
        <clipPath id="cta-wave-clip-mobile">
          <rect width="684" height="431" fill="white" transform="translate(-107)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function CtaSection({
  title,
  highlight,
  description,
  primaryLabel = "Get a Quote",
  primaryHref = "/contact",
  secondaryLabel = "View Our Services",
  secondaryHref = "/services",
}: CtaSectionProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Wave for both Desktop & Mobile */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="hidden h-full md:block">
          <DesktopWave />
        </div>
        <div className="block h-full md:hidden">
          <MobileWave />
        </div>
      </div>

      <div className="container-custom relative z-10 py-16 md:py-[120px]">
        <div className="mx-auto flex max-w-[838px] flex-col items-center gap-6 text-center md:gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-5">
            <h2 className="text-balance font-heading text-[36px] font-semibold leading-[40px] tracking-[-1px] text-[#1A1917] md:text-[56px] md:leading-[64px] md:tracking-[-2.38px]">
              {parts[0]}
              <span className="text-[#F53D37]">{highlight}</span>
              {parts[1]}
            </h2>

            <p className="max-w-[648px] text-[18px] leading-[26px] text-[#56554F] md:text-[18px] md:leading-[30px]">
              {description}
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-5">
            <Link
              href={primaryHref}
              className="flex h-11 items-center justify-center rounded-sm bg-[#E53935] px-6 font-mono text-[16px] font-medium uppercase tracking-[0.4px] text-[#F3F1ED] transition hover:opacity-90"
            >
              {primaryLabel}
            </Link>

            <Link
              href={secondaryHref}
              className="flex h-11 items-center justify-center rounded-sm border border-[#56554F] bg-transparent px-6 font-mono text-[16px] font-medium uppercase tracking-[0.4px] text-[#1A1917] transition hover:bg-[#1A1917] hover:text-white"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
