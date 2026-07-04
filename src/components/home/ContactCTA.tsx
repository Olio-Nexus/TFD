
"use client";

import Image from "next/image";
import { Check } from "lucide-react";

import { useQuoteModal } from "@/components/ui/QuoteModal";

export default function ContactCTA() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      {/* Background Waves */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[500px] overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 h-full w-full"
          viewBox="0 0 1440 572"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <g opacity="0.6" clipPath="url(#clip0_487_16722)">
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
            <clipPath id="clip0_487_16722">
              <rect width="1440" height="572" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 lg:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[586px_1fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <h2 className="font-heading text-[34px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#1A1917] sm:text-[42px] md:text-[48px] lg:text-[56px] lg:leading-[64px]">
              Start Your Site
              <br />
              <span className="text-[#E53935]">
                Investigation Today
              </span>
            </h2>

            <p className="mt-5 max-w-[586px] text-[16px] leading-[26px] text-[#56554F]">
              We respond to all enquiries within 24 hours. Call us or send your
              project details below to receive a prompt quote and mobilisation
              window.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <ContactCard
                icon="/icons/email-1.svg"
                label="Email"
                value="sales@tfdrilling.com.au"
              />

              <ContactCard
                icon="/icons/phone-1.svg"
                label="Phone"
                value="(02) 7239 8878"
              />
            </div>
          </div>

          {/* Right CTA Card */}
          <div className="w-full">
            <div className="rounded-[6px] bg-[#1A1917] p-6 sm:p-8 lg:p-10">
              <h3 className="font-heading text-[24px] font-semibold leading-[1.4] tracking-[0.6px] text-[#EEEEEE] md:text-[28px] md:leading-[40px]">
                Send your scope and get a quote the same business day.
              </h3>

              <p className="mt-4 text-[16px] leading-[25px] text-[#B8B8B8]">
                No long forms. Share your site address, target depths and
                required services, and we&apos;ll come back within 24 hours with an
                itemized quote and mobilisation window.
              </p>

              <div className="mt-8 space-y-3">
                <ChecklistItem text="Name, email & phone" />
                <ChecklistItem text="Scope of work" />
                <ChecklistItem text="Site location" />
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="w-full rounded-[2px] bg-[#E53935] px-6 py-3 font-mono text-[14px] font-medium uppercase tracking-[0.4px] text-[#F3F1ED] transition hover:opacity-90"
                >
                  OPEN ENQUIRY FORM
                </button>

                <p className="mt-4 text-center text-[14px] font-light leading-[20px] text-[#B2B2B2]">
                  Takes under a minute. We respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ContactCardProps = {
  icon: string;
  label: string;
  value: string;
};

function ContactCard({
  icon,
  label,
  value,
}: ContactCardProps) {
  return (
    <div className="flex items-center gap-5 rounded-[4px] border border-[#D1D1D1] bg-white p-5">
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[2px] border border-[#D1D1D1] bg-[#F4F1EB]">
        <Image
          src={icon}
          alt={label}
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
      </div>

      <div>
        <p className="text-[16px] font-medium uppercase tracking-[0.04em] text-[#56554F]">
          {label}
        </p>

        <p className="font-heading mt-1 text-[18px] font-semibold tracking-[0.6px] text-[#1A1917]">
          {value}
        </p>
      </div>
    </div>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E53935]">
        <Check
          size={12}
          strokeWidth={3}
          className="text-white"
        />
      </div>

      <span className="font-heading text-[16px] tracking-[0.6px] text-[#EEEEEE]">
        {text}
      </span>
    </div>
  );
}

