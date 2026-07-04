"use client";

import Link from "next/link";
import Image from "next/image";

function Wave() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 h-auto w-full"
      viewBox="0 0 1440 572"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g opacity="0.6">
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
    </svg>
  );
}

type ContactCardProps = {
  iconSrc: string;
  label: string;
  value: string;
};

function ContactCard({ iconSrc, label, value }: ContactCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-[#D1D1D1] bg-white p-4 md:p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-[#D1D1D1] bg-[#F4F1EB] md:h-[52px] md:w-[52px]">
        <Image
          src={iconSrc}
          alt={label}
          width={28}
          height={28}
          className="object-contain"
        />
      </div>

      <div>
        <div className="font-body text-[14px] font-medium uppercase tracking-[0.04em] text-[#56554F] md:text-[16px]">
          {label}
        </div>

        <div className="font-heading text-[16px] font-semibold tracking-[0.6px] text-[#1A1917] md:text-[18px] md:leading-7">
          {value}
        </div>
      </div>
    </div>
  );
}

export default function ProjectCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Wave for both Desktop & Mobile */}
      <div className="absolute inset-0">
        <Wave />
      </div>

      <div className="container-custom relative z-10 py-10 md:py-[150px]">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-20">
          {/* LEFT */}
          <div className="max-w-[648px]">
            <h2 className="font-heading text-[36px] font-semibold leading-[40px] tracking-[-1px] text-[#1A1917] md:text-[56px] md:leading-[64px] md:tracking-[-2.38px]">
              Working on a{" "}
              <span className="text-[#E53935]">
                Project in
                <br />
                NSW?
              </span>
            </h2>

            <p className="mt-3 max-w-[648px] text-[18px] leading-[26px] text-[#56554F] md:text-[16px] md:leading-[26px]">
              We work with consultants, developers, contractors, and
              government agencies. Drilling, sampling, testing, we handle it
              so your job stays on track.
            </p>

            <div className="mt-6 flex flex-col gap-4 md:mt-8 md:flex-row md:gap-5">
              <Link
                href="/contact"
                className="flex h-11 items-center justify-center rounded-sm bg-[#E53935] px-6 font-mono text-[16px] font-medium uppercase tracking-[0.4px] text-[#F3F1ED] transition hover:opacity-90 md:w-fit"
              >
                Get A Quote
              </Link>

              <Link
                href="/services"
                className="flex h-11 items-center justify-center rounded-sm border border-[#56554F] bg-transparent px-6 font-mono text-[16px] font-medium uppercase tracking-[0.4px] text-[#1A1917]"
              >
                View Our Services
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex w-full max-w-[552px] flex-col gap-4 md:gap-5">
            <ContactCard
              iconSrc="/icons/email-1.svg"
              label="Email"
              value="sales@tfdrilling.com.au"
            />

            <ContactCard
              iconSrc="/icons/phone-1.svg"
              label="Phone"
              value="(02) 7239 8878"
            />
          </div>
        </div>
      </div>
    </section>
  );
}