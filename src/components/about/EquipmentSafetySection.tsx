"use client";

import Image from "next/image";

const equipmentItems = [
  "Ute-mounted Solid Flight Auger rig",
  "Calibrated SPT equipment",
  "Calibrated DCP equipment",
  "Equipped for day and night operations",
];

const safetyItems = [
  {
    icon: "/about/shield.svg",
    text: "Full hydraulic interlocks and safety systems",
  },
  {
    icon: "/about/wrench.svg",
    text: "Documented maintenance programme",
  },
  {
    icon: "/about/clock.svg",
    text: "Service records available on request",
  },
  {
    icon: "/about/speedometer.svg",
    text: "Calibration records available on request",
  },
  {
    icon: "/about/hat.svg",
    text: "WHS documentation available",
  },
  {
    icon: "/about/checklist.svg",
    text: "SWMS available for pre-qualification submissions",
  },
];

export default function EquipmentSafetySection() {
  return (
    <section className="bg-white py-12 md:bg-[#F4F1EB]  md:py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="h-px w-3 md:w-5 bg-[#E53935]" />

            <span className="font-mono text-[12px] md:text-[14px] font-medium uppercase tracking-[1.4px] text-[#E53935]">
              Equipments & Safety Credentials
            </span>
          </div>

          <h2 className="font-heading text-[24px] leading-[30px] tracking-[-1px] font-semibold text-[#1A1917] md:max-w-[650px] md:text-[48px] md:leading-[56px] md:tracking-[-2px]">
            Purpose-Built Equipment.
            <br />
            <span className="text-[#E53935]">
              Proven Safety Systems.
            </span>
          </h2>
        </div>

        {/* Desktop Cards */}
        <div className="mt-14 hidden gap-6 md:flex">
          {/* Equipment */}
          <div className="w-[474px] rounded-[6px] border border-[#D1D1D1] bg-white p-8">
            <h3 className="font-heading text-[28px] font-semibold leading-[40px] text-[#1A1917]">
              Equipment
            </h3>

            <ul className="mt-6 flex flex-col gap-5">
              {equipmentItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-5"
                >
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#E5393533]">
                    <div className="h-2 w-2 rounded-full bg-[#E53935]" />
                  </div>

                  <span className="font-heading text-[20px] leading-[28px] tracking-[0.4px] text-[#101010]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety */}
          <div className="flex-1 rounded-[6px] border border-[#D1D1D1] bg-white p-8">
            <h3 className="font-heading text-[28px] font-semibold leading-[40px] text-[#1A1917]">
              Safety & Compliance
            </h3>

            <ul className="mt-6 flex flex-col gap-5">
              {safetyItems.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-5"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={36}
                    height={36}
                    className="shrink-0"
                  />

                  <span className="font-heading text-[20px] leading-[24px] tracking-[0.4px] text-[#101010]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="mt-8 md:hidden">
          {/* Equipment */}
          <div>
            <h3 className="font-heading text-[18px] font-semibold leading-6 text-[#1A1917]">
              Equipment
            </h3>

            <ul className="mt-3 flex flex-col gap-3">
              {equipmentItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-[#E5393533]">
                    <div className="h-2 w-2 rounded-full bg-[#E53935]" />
                  </div>

                  <span className="text-[16px] leading-[26px] text-[#56554F]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-[#D1D1D1]" />

          {/* Safety */}
          <div>
            <h3 className="font-heading text-[18px] font-semibold leading-6 text-[#1A1917]">
              Safety & Compliance
            </h3>

            <ul className="mt-3 flex flex-col gap-3">
              {safetyItems.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-3"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="mt-[1px] shrink-0"
                  />

                  <span className="text-[16px] leading-[26px] text-[#56554F]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}