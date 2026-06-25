"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Region = {
  id: string;
  name: string;
  top: string;
  left: string;
};

interface WhereWeDrillProps {
  regions: Region[];
}

/* ---------------- PIN ICONS ---------------- */

const UnselectedPin = () => (
  <svg width="22" height="24" viewBox="0 0 16 17" fill="none">
    <path
      d="M8.08799 7.96175C8.31084 7.72423 8.42227 7.43778 8.42227 7.10241C8.42227 6.76704 8.31084 6.48054 8.08799 6.24291C7.86524 6.00539 7.59661 5.88663 7.2821 5.88663C6.96758 5.88663 6.69895 6.00539 6.47621 6.24291C6.25335 6.48054 6.14193 6.76704 6.14193 7.10241C6.14193 7.43778 6.25335 7.72423 6.47621 7.96175C6.69895 8.19926 6.96758 8.31802 7.2821 8.31802C7.59661 8.31802 7.86524 8.19926 8.08799 7.96175ZM7.2821 14.8042C5.69481 13.3376 4.50455 11.9727 3.71132 10.7096C2.9181 9.44632 2.52148 8.28658 2.52148 7.23036C2.52148 5.67836 2.99226 4.42189 3.93381 3.46095C4.87546 2.5 5.99156 2.01953 7.2821 2.01953C8.57264 2.01953 9.68874 2.5 10.6304 3.46095C11.5719 4.42189 12.0427 5.67836 12.0427 7.23036C12.0427 8.28658 11.6461 9.44632 10.8529 10.7096C10.0596 11.9727 8.86939 13.3376 7.2821 14.8042Z"
      fill="#1A1917"
    />
  </svg>
);

const SelectedPin = () => (
  <svg width="20" height="23" viewBox="0 0 14 16" fill="none">
    <path
      d="M7.24815 8.85195C7.471 8.62921 7.58242 8.36057 7.58242 8.04606C7.58242 7.73154 7.471 7.46286 7.24815 7.24001C7.0254 7.01726 6.75677 6.90589 6.44225 6.90589C6.12774 6.90589 5.85911 7.01726 5.63636 7.24001C5.41351 7.46286 5.30208 7.73154 5.30208 8.04606C5.30208 8.36057 5.41351 8.62921 5.63636 8.85195C5.85911 9.0747 6.12774 9.18607 6.44225 9.18607C6.75677 9.18607 7.0254 9.0747 7.24815 8.85195ZM6.44225 15.2688C4.85496 13.8934 3.6647 12.6135 2.87148 11.4289C2.07825 10.2442 1.68164 9.15658 1.68164 8.16605C1.68164 6.71058 2.15241 5.53225 3.09396 4.63107C4.03561 3.72989 5.15171 3.2793 6.44225 3.2793C7.7328 3.2793 8.84889 3.72989 9.79054 4.63107C10.7321 5.53225 11.2029 6.71058 11.2029 8.16605C11.2029 9.15658 10.8063 10.2442 10.013 11.4289C9.2198 12.6135 8.02955 13.8934 6.44225 15.2688Z"
      fill="white"
    />
  </svg>
);

/* ---------------- ACTIVE GLOW ---------------- */

const ActivePinGlow = () => (
  <div
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      pointer-events-none
      z-0
      aspect-square
      rounded-full
    "
    style={{
      width: "120px",
      height: "120px",
      background:
        "radial-gradient(circle, rgba(45,45,45,0.55) 0%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.12) 75%, rgba(255,255,255,1) 100%)",
      filter: "blur(10px)",
    }}
  />
);

    <defs>
      <radialGradient
        id="activeGlow"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(84 84) rotate(90) scale(84)"
      >
        <stop offset="0%" stopColor="#2D2D2D" stopOpacity="0.8" />
        <stop offset="45%" stopColor="#5F5F5F" stopOpacity="0.45" />
        <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
    </defs>
;

/* ---------------- MAIN ---------------- */

export default function WhereWeDrill({
  regions,
}: WhereWeDrillProps) {
  const [active, setActive] = useState(
    regions[0]?.id || "sydney"
  );

  return (
    <section className="relative overflow-hidden bg-[#F3EFE8] py-6 lg:py-24">
      <div className="pointer-events-none absolute right-[-250px] top-[-180px] hidden h-[900px] w-[900px] rounded-full bg-white opacity-80 blur-[140px] lg:block" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[540px_1fr] lg:items-center">

          {/* MAP */}

          <div className="order-1 lg:order-2">
            <h2 className="mb-6 px-5 lg:hidden font-heading text-[24px] font-semibold leading-[30px] tracking-[-1px] text-[#1A1917]">
              Where We <span className="text-[#E53935]">Drill</span>
            </h2>

            <div className="relative h-[320px] lg:h-[700px] flex items-center justify-center">

              <img
                src="/maps/Map-2.svg"
                alt="NSW map"
                className="
                  absolute
                  top-1/2
                  left-1/2
                  w-[420px]
                  lg:w-[850px]
                  max-w-none
                  -translate-x-1/2
                  -translate-y-1/2
                "
              />

              {regions.map((region) => {
                const isActive = active === region.id;

                return (
                  <div
                    key={region.id}
                    className="absolute cursor-pointer z-50"
                    style={{
                      top: region.top,
                      left: region.left,
                      transform: "translate(-50%, -50%)",
                    }}
                    onMouseEnter={() => setActive(region.id)}
                    onClick={() => setActive(region.id)}
                  >
                    {isActive && <ActivePinGlow />}

                    <div
                      className={`relative z-20 transition-all duration-300`}
                    >
                      {isActive ? (
                        <SelectedPin />
                      ) : (
                        <UnselectedPin />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CONTENT */}

          <div className="order-2 lg:order-1 px-5 lg:px-0">
            <h2 className="hidden lg:block font-heading text-[56px] font-semibold leading-[60px] tracking-[-2px] text-[#1A1917]">
              Where We{" "}
              <span className="text-[#E53935]">Drill</span>
            </h2>

            <div className="mt-4 lg:mt-10">
              {regions.map((region) => {
                const isActive = active === region.id;

                return (
                  <button
                    key={region.id}
                    onMouseEnter={() => setActive(region.id)}
                    onClick={() => setActive(region.id)}
                    className="
                      group
                      relative
                      flex
                      w-full
                      items-center
                      justify-between
                      py-4
                      text-left
                      lg:border-b
                      lg:border-[#d8d2ca]
                      lg:py-6
                    "
                  >
                    <span
                      className={`absolute bottom-0 left-0 bg-[#E53935] transition-all duration-300 ${
                        isActive
                          ? "w-[70px] lg:w-full"
                          : "w-0"
                      } h-[1px] lg:h-[2px]`}
                    />

                    <span className="font-heading text-[16px] lg:text-[22px] font-medium text-[#1A1917]">
                      {region.name}
                    </span>

                    <span
                      className={`hidden lg:flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                        isActive
                          ? "border-[#E53935] bg-[#E53935] text-white"
                          : "border-[#BDB5AB] text-[#5D5851]"
                      }`}
                    >
                      <ArrowUpRight size={14} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}