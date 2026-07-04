"use client";

import Link from "next/link";

export interface ServicesCTAProps {
  title: string;
  highlight: string;
  description: string;
  actionText: string;
  href: string;
}

export default function ServicesCta({
  title,
  highlight,
  description,
  actionText,
  href,
}: ServicesCTAProps) {
  const [beforeHighlight, afterHighlight] = title.split(highlight);

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Section Container */}
      <div className="relative mx-auto flex min-h-[422px] w-full flex-col items-center justify-center px-5 py-12 md:min-h-[692px] md:px-20 md:py-[150px]">
        {/* Background Soil Layers */}
        <div className="absolute inset-0 z-0 opacity-60 md:opacity-50">
          <svg
            viewBox="0 0 1440 572"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-1/2 h-[431px] w-[684px] -translate-x-1/2 md:h-[572px] md:w-full"
            aria-hidden="true"
          >
            <g opacity="0.5">
              {/* Layer 1 */}
              <path
                opacity="0.85"
                d="M-214 128.729C75.7534 70.7782 336.532 186.68 684.236 128.729C1031.94 70.7782 1350.67 186.68 1611.45 128.729C1727.35 99.7536 1814.27 128.729 1872.22 114.241V621.31H-214V128.729Z"
                fill="#EFEAE1"
              />

              {/* Layer 2 */}
              <path
                opacity="0.14"
                d="M-195 237.729C123.729 179.778 413.482 295.68 761.186 237.729C1079.92 185.573 1398.64 295.68 1659.42 237.729C1775.32 211.651 1847.76 237.729 1891.22 229.036V614.408H-195V237.729Z"
                fill="#E53935"
              />

              {/* Layer 3 */}
              <path
                opacity="0.22"
                d="M-214 348.729C133.704 290.778 452.433 406.68 800.137 348.729C1118.87 296.573 1437.59 406.68 1698.37 348.729C1785.3 331.344 1843.25 348.729 1872.22 342.934V609.507H-214V348.729Z"
                fill="#56554F"
              />

              {/* Layer 4 */}
              <path
                opacity="0.92"
                d="M-214 461.401C162.68 403.45 481.408 504.864 858.088 461.401C1176.82 423.733 1495.55 504.864 1727.35 461.401C1814.27 444.016 1857.74 461.401 1872.22 458.504V577.303H-214V461.401Z"
                fill="#1A1917"
              />
            </g>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex w-full max-w-[876px] flex-col items-center">
          <div className="flex w-full max-w-[810px] flex-col items-center gap-3 md:gap-3">
            {/* Heading */}
            <h2
              className="
                font-heading
                text-center
                font-semibold
                tracking-[-1px]
                text-[#1A1917]
                text-[36px]
                leading-[40px]
                md:text-[56px]
                md:leading-[64px]
                md:tracking-[-2.38px]
              "
            >
              {beforeHighlight}
              <span className="text-[#E53935]">
                {highlight}
              </span>
              {afterHighlight}
            </h2>

            {/* Description */}
            <p
              className="
                max-w-[362px]
                text-center
                text-[18px]
                leading-[26px]
                text-[#56554F]
                md:max-w-[634px]
                md:text-[16px]
              "
            >
              {description}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-4 md:mt-8">
            <Link
              href={href}
              className="
                flex
                h-[44px]
                w-[362px]
                items-center
                justify-center
                rounded-[2px]
                bg-[#E53935]
                px-6
                text-center
                font-mono
                text-[16px]
                font-medium
                uppercase
                tracking-[0.4px]
                text-[#F3F1ED]
                transition-opacity
                hover:opacity-90
                md:w-[198px]
              "
            >
              {actionText}
            </Link>
          </div>

          {/* Phone */}
          <p
            className="
              mt-4
              text-center
              font-heading
              text-[16px]
              font-semibold
              leading-[22px]
              tracking-[0.6px]
              text-[#1A1917]
              md:mt-8
              md:font-medium
              md:leading-[28px]
              md:text-[#56554F]
            "
          >
            Or, Call:{" "}
            <a
              href="tel:0272398878"
              className="font-semibold text-current"
            >
              (02) 7239 8878
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}