import Link from "next/link";
import Image from "next/image";


function SoilBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[1440px] h-auto"
        viewBox="0 0 1440 487"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.6" clipPath="url(#clip0)">
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
          <clipPath id="clip0">
            <rect width="1440" height="572" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}


function ContactCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-5 rounded-[6px] md:border md:border-[#D1D1D1] md:bg-white p-5">
      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-sm border border-[#D1D1D1] bg-[#F4F1EB]">
        {icon}
      </div>

      <div>
        <div className="font-body text-[16px] font-medium uppercase tracking-[0.04em] text-[#56554F]">
          {label}
        </div>

        <div className="font-heading text-[18px] font-semibold leading-7 tracking-[0.6px] text-[#1A1917]">
          {value}
        </div>
      </div>
    </div>
  );
}

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-white">
      <SoilBackground />

      <div className="container-custom relative z-10">
        <div
          className="
            flex flex-col gap-10
            py-12
            lg:flex-row lg:items-center lg:justify-between
            lg:gap-20 lg:py-[150px]
          "
        >
          {/* LEFT */}
          <div className="max-w-[648px]">
            <h2
              className="
                font-heading
                text-[36px]
                font-semibold
                leading-[40px]
                tracking-[-1px]
                text-[#1A1917]
                md:text-[48px]
                md:leading-[56px]
                lg:text-[56px]
                lg:leading-[64px]
                lg:tracking-[-2.38px]
              "
            >
              Need a Drilling Contractor
              <br />
              <span className="text-[#E53935]">
                You Can Rely On?
              </span>
            </h2>

            <p
              className="
                mt-3
                max-w-[648px]
                text-[18px]
                leading-[26px]
                text-[#56554F]
                lg:mt-3
                lg:text-[16px]
              "
            >
              Speak with our team about geotechnical drilling,
              environmental drilling, testing, or monitoring bore
              installation anywhere in NSW.
            </p>

            <div
              className="
                mt-8
                flex flex-col gap-4
                sm:flex-row
                lg:mt-8 lg:gap-5
              "
            >
              <Link
                href="/contact"
                className="
                  flex h-[44px] items-center justify-center
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
                Request A Quote
              </Link>

              <Link
                href="/services"
                className="
                  flex h-[44px] items-center justify-center
                  rounded-[2px]
                  border border-[#56554F]
                  px-6
                  font-mono
                  text-[14px]
                  font-medium
                  uppercase
                  tracking-[0.4px]
                  text-[#1A1917]
                  backdrop-blur-[0.5px]
                "
              >
                View Our Services
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-[552px] space-y-5">
            <ContactCard
              icon={
                <Image
                src="/icons/email.svg"
                alt="Email"
                width={32}
                height={32}
                />
            }
              label="Email"
              value="sales@tfdrilling.com.au"
            />

            <ContactCard
              icon={ <Image
                src="/icons/phone.svg"
                alt="Phone"
                width={32}
                height={32}
                />
            }
              label="Phone"
              value="(02) 7239 8878"
            />
          </div>
        </div>
      </div>
    </section>
  );
}