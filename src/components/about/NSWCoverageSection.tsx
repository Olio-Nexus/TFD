"use client";

import Image from "next/image";
import { useState } from "react";

const locations = [
  {
    id: "sydney",
    label: "Sydney",
    x: "90%",
    y: "69%",
  },
  {
    id: "newcastle",
    label: "Newcastle & Hunter",
    x: "92%",
    y: "63%",
  },
  {
    id: "wollongong",
    label: "Wollongong & Illawarra",
    x: "88%",
    y: "73%",
  },
  {
    id: "central-west",
    label: "Central West NSW",
    x: "83%",
    y: "65%",
  },
  {
    id: "new-england",
    label: "New England & Northwest",
    x: "88%",
    y: "58%",
  },
  {
    id: "riverina",
    label: "Riverina & Murray",
    x: "80%",
    y: "70%",
  },
  {
    id: "north-coast",
    label: "North Coast NSW",
    x: "95%",
    y: "60%",
  },
  {
    id: "southern-tablelands",
    label: "Southern Tablelands",
    x: "87%",
    y: "71%",
  },
];

export default function NSWCoverageSection() {
  const [active, setActive] = useState(locations[0]);

  return (
    <section className="overflow-hidden bg-[#EFEAE1]">
      {/* ========================= */}
      {/* DESKTOP  */}
      {/* ========================= */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-full px-5 lg:px-[80px] py-[80px]">
          <div className="grid items-center gap-10 lg:grid-cols-[620px_minmax(0,1fr)]">
            {/* LEFT CONTENT */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-5 bg-[#E53935]" />
                <span className="font-mono text-[14px] uppercase tracking-[1.4px] text-[#E53935]">
                  WHERE WE WORK
                </span>
              </div>

              <h2 className="max-w-[620px] text-[42px] font-semibold leading-[1.15] tracking-[-2px] text-[#1A1917] xl:text-[48px]">
                Geotechnical Drilling Services
                <br />
                <span className="text-[#E53935]">
                  Across New South Wales
                </span>
              </h2>

              <p className="mt-6 max-w-[545px] text-[18px] leading-[30px] text-[#56554F]">
                TerraForma Drilling offers geotechnical drilling
                services throughout NSW, supporting projects in
                cities, regional areas, and remote locations.
              </p>

              <div className="mt-12 flex flex-col gap-6">
                {locations.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActive(item)}
                    className={`w-fit text-left text-[16px] font-medium tracking-[0.4px] transition-all ${
                      active.id === item.id
                        ? "border-b border-[#E53935] pb-1"
                        : "hover:text-[#E53935]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <p className="mt-24 max-w-[545px] text-[16px] leading-[26px] text-[#56554F]">
                <span className="font-medium text-[#1A1917]">
                  Please note:
                </span>{" "}
                We currently operate only in New South Wales and
                do not offer drilling services outside NSW.
              </p>
            </div>

            {/* MAP */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[825px]">
                <Image
                  src="/maps/nsw-map.svg"
                  alt="Australia Coverage Map"
                  width={825}
                  height={748}
                  priority
                  className="h-auto w-full object-contain"
                />

                <div
                  className="pointer-events-none absolute z-20 transition-[top,left] duration-500 ease-out"
                  style={{
                    left: active.x,
                    top: active.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Pin frame — Figma: Frame 30285 (108 x 108) */}
                  <div className="relative h-[108px] w-[108px]">
                    {/* Glow — Figma: Ellipse 2 */}
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "radial-gradient(59.42% 59.42% at 50% 48.7%, #2D2D2D 3.68%, #FFFFFF 78.19%)",
                        opacity: 0.4,
                      }}
                    />

                    {/* Marker — Figma: location_on (21.74 x 25.25, centered) */}
                    <svg
                      aria-hidden
                      width="22"
                      height="26"
                      viewBox="0 0 22 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <mask
                        id="coveragePinMask"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="22"
                        height="26"
                      >
                        <rect
                          width="21.7403"
                          height="25.2468"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#coveragePinMask)">
                        <path
                          d="M12.0889 11.3985C12.4606 11.027 12.6465 10.5789 12.6465 10.0544C12.6465 9.52979 12.4606 9.08166 12.0889 8.70997C11.7174 8.33846 11.2694 8.1527 10.7448 8.1527C10.2202 8.1527 9.77218 8.33846 9.40067 8.70997C9.02898 9.08166 8.84313 9.52979 8.84313 10.0544C8.84313 10.5789 9.02898 11.027 9.40067 11.3985C9.77218 11.77 10.2202 11.9558 10.7448 11.9558C11.2694 11.9558 11.7174 11.77 12.0889 11.3985ZM10.7448 22.101C8.09739 19.8071 6.11219 17.6722 4.78919 15.6965C3.46619 13.7206 2.80469 11.9066 2.80469 10.2545C2.80469 7.82695 3.58988 5.86165 5.16026 4.35859C6.73082 2.85553 8.59233 2.104 10.7448 2.104C12.8973 2.104 14.7588 2.85553 16.3293 4.35859C17.8997 5.86165 18.6849 7.82695 18.6849 10.2545C18.6849 11.9066 18.0234 13.7206 16.7004 15.6965C15.3774 17.6722 13.3922 19.8071 10.7448 22.101Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* MOBILE FIGMA VERSION */}
      {/* ========================= */}
      <div className="lg:hidden px-5 py-5">
        <div className="flex flex-col gap-5">
          {/* Label */}
          <div className="flex items-center gap-[10px]">
            <div className="h-px w-3 bg-[#E53935]" />
            <span className="font-mono text-[12px] font-medium uppercase tracking-[1.4px] text-[#E53935]">
              EQUIPMENTS & SAFETY CREDENTIALS
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[24px] font-semibold leading-[30px] tracking-[-1px] text-[#1A1917]">
              Geotechnical Drilling Services
              <br />
              <span className="text-[#E53935]">
                Across New South Wales
              </span>
            </h2>

            <p className="text-[16px] leading-[26px] text-[#56554F]">
              TerraForma Drilling offers geotechnical drilling
              services throughout NSW, supporting projects in
              cities, regional areas, and remote locations.
            </p>
          </div>

          {/* Static Map */}
          <div className="relative">
            <Image
              src="/maps/nsw-map.svg"
              alt="NSW Coverage Map"
              width={362}
              height={328}
              className="h-auto w-full"
            />
          </div>

          {/* Chips */}
          <div className="flex flex-wrap gap-3">
            {locations.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-[4px] bg-white px-[8px] py-[4px]"
              >
                <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#E53935]/20">
                  <div className="h-2 w-2 rounded-full bg-[#E53935]" />
                </div>

                <span className="text-[14px] font-medium leading-6 text-[#1A1917]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-[14px] leading-[26px] text-[#1A1917]">
            Please note: We currently operate only in New South
            Wales and do not offer drilling services outside NSW.
          </p>
        </div>
      </div>
    </section>
  );
}