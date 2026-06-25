// components/ServicesCTA.tsx

import Link from "next/link";

export default function AreaWeServeCta() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* ========================= */}
      {/* DESKTOP BACKGROUND */}
      {/* ========================= */}
      <div className="absolute inset-0 hidden md:block">
        <svg
          viewBox="0 0 1440 572"
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <g opacity="0.6" clipPath="url(#desktop-clip)">
            <path
              opacity="0.85"
              d="M-214 136.729C75.7534 78.7782 336.532 194.68 684.236 136.729C1031.94 78.7782 1350.67 194.68 1611.45 136.729C1727.35 107.754 1814.27 136.729 1872.22 122.241V629.31H-214V136.729Z"
              fill="#EFEAE1"
            />
            <path
              opacity="0.14"
              d="M-214 252.729C104.729 194.778 394.482 310.68 742.186 252.729C1060.92 200.573 1379.64 310.68 1640.42 252.729C1756.32 226.651 1828.76 252.729 1872.22 244.036V629.408H-214V252.729Z"
              fill="#E53935"
            />
            <path
              opacity="0.22"
              d="M-214 358.729C133.704 300.778 452.433 416.68 800.137 358.729C1118.87 306.573 1437.59 416.68 1698.37 358.729C1785.3 341.344 1843.25 358.729 1872.22 352.934V619.507H-214V358.729Z"
              fill="#56554F"
            />
            <path
              opacity="0.92"
              d="M-214 451.401C162.68 393.45 481.408 494.864 858.088 451.401C1176.82 413.733 1495.55 494.864 1727.35 451.401C1814.27 434.016 1857.74 451.401 1872.22 448.504V567.303H-214V451.401Z"
              fill="#1A1917"
            />
          </g>

          <defs>
            <clipPath id="desktop-clip">
              <rect width="1440" height="572" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* ========================= */}
      {/* MOBILE BACKGROUND */}
      {/* ========================= */}
      <div className="absolute inset-0 md:hidden">
        <svg
          viewBox="0 0 402 354"
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <g opacity="0.6">
            <path
              opacity="0.85"
              d="M-101.67 107C35 82 158 136 322 107C486 82 636 136 759 107C814 93 855 107 882 100V349H-101.67V107Z"
              fill="#EFEAE1"
            />
            <path
              opacity="0.14"
              d="M-101.67 188C48 163 185 213 349 188C499 165 649 213 772 188C827 177 861 188 882 184V375H-101.67V188Z"
              fill="#E53935"
            />
            <path
              opacity="0.22"
              d="M-101.67 262C62 235 212 289 376 262C526 238 676 289 799 262C840 254 867 262 882 259V394H-101.67V262Z"
              fill="#56554F"
            />
            <path
              opacity="0.92"
              d="M-484 324C-307 296 -157 344 20 324C170 306 320 344 429 324C470 316 491 324 498 322V447H-484V324Z"
              fill="#1A1917"
            />
          </g>
        </svg>
      </div>

      {/* ========================= */}
      {/* CONTENT */}
      {/* ========================= */}
      <div
        className="
          relative z-10
          flex flex-col items-center justify-center
          gap-14
          px-5 py-10
          md:min-h-[568px]
          md:px-20
          md:py-[150px]
        "
      >
        <div className="flex max-w-[648px] flex-col items-center text-center">
          <h2
            className="
              font-heading
              text-[36px]
              font-semibold
              leading-[40px]
              tracking-[-1px]
              text-[#1A1917]
              md:text-[56px]
              md:leading-[64px]
              md:tracking-[-2.38px]
            "
          >
            Big Rigs Can&apos;t Move?
            <br className="md:hidden" /> Site Too Remote?{" "}
            <span className="text-[#E53935]">Let&apos;s Talk!</span>
          </h2>

          <p
            className="
              mt-3
              max-w-[566px]
              text-[16px]
              leading-[26px]
              text-[#56554F]
            "
          >
            We go where most drillers won&apos;t. Tight urban sites. Regional
            NSW. You need us there? We&apos;ll be there.
          </p>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="
            hidden md:inline-flex
            h-[44px]
            items-center
            justify-center
            rounded-[2px]
            bg-[#E53935]
            px-6
            font-mono
            text-[14px]
            font-medium
            uppercase
            tracking-[0.4px]
            text-[#F3F1ED]
            transition-opacity
            hover:opacity-90
          "
        >
          Tell Us Where You Need Drilling
        </Link>

        {/* Mobile CTA */}
        <Link
          href="/contact"
          className="
            flex h-[44px] w-full max-w-[362px]
            items-center justify-center
            rounded-[2px]
            bg-[#E53935]
            px-6
            font-mono
            text-[16px]
            font-medium
            uppercase
            tracking-[0.4px]
            text-[#F3F1ED]
            transition-opacity
            hover:opacity-90
            md:hidden
          "
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}