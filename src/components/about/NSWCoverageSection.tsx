"use client";

import Image from "next/image";
import { useState } from "react";

const locations = [
  {
    id: "sydney",
    label: "Sydney",
    x: "92%",
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
    y: "69%",
  },
  {
    id: "new-england",
    label: "New England & Northwest",
    x: "88%",
    y: "60%",
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
    y: "76%",
  },
];

export default function NSWCoverageSection() {
  const [active, setActive] = useState(locations[0]);

  return (
    <section className="overflow-hidden bg-[#EFEAE1]">
      {/* ========================= */}
      {/* DESKTOP - UNCHANGED */}
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
                  className="absolute z-20 transition-all duration-500 ease-out"
                  style={{
                    left: active.x,
                    top: active.y,
                    transform: "translate(-100%, -100%)",
                  }}
                >
                  <div className="absolute left-1/2 top-1/2 h-[108px] w-[108px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-md" />

                  <div className="absolute left-1/2 top-1/2 h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E53935]/30" />

                  <div className="absolute left-1/2 top-1/2 h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E53935]/20 animate-ping" />

                  <Image
                    src="/maps/pin.svg"
                    alt="Location"
                    width={12}
                    height={15}
                    className="relative z-10"
                  />
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