"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { areaHrefForRegion } from "@/data/areas/regionLinks";

type Region = {
  id: string;
  name: string;
  top: string;
  left: string;
};

export interface WhereWeDrillProps {
  regions: Region[];
}

/* ---------------- PIN ---------------- */

/* Single marker shape (Figma location_on, 31 x 36) reused for both states —
   black when idle, white when active — so the pin never changes size when
   selected; the active state only adds the glow layer behind it. */

const Marker = ({
  fill,
  className,
}: {
  fill: string;
  className?: string;
}) => (
  <svg
    aria-hidden
    viewBox="0 0 31 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.2386 16.2533C17.7686 15.7235 18.0336 15.0846 18.0336 14.3366C18.0336 13.5886 17.7686 12.9496 17.2386 12.4196C16.7089 11.8899 16.07 11.625 15.322 11.625C14.574 11.625 13.9351 11.8899 13.4054 12.4196C12.8754 12.9496 12.6104 13.5886 12.6104 14.3366C12.6104 15.0846 12.8754 15.7235 13.4054 16.2533C13.9351 16.783 14.574 17.0479 15.322 17.0479C16.07 17.0479 16.7089 16.783 17.2386 16.2533ZM15.322 31.5142C11.547 28.2432 8.7162 25.1991 6.8297 22.3819C4.9432 19.5644 4 16.9777 4 14.622C4 11.1605 5.1196 8.3581 7.3589 6.2149C9.5984 4.0716 12.2528 3 15.322 3C18.3913 3 21.0456 4.0716 23.2851 6.2149C25.5244 8.3581 26.644 11.1605 26.644 14.622C26.644 16.9777 25.7008 19.5644 23.8143 22.3819C21.9278 25.1991 19.097 28.2432 15.322 31.5142Z"
      fill={fill}
    />
  </svg>
);

/* ---------------- MAIN ---------------- */

export default function WhereWeDrill({
  regions,
}: WhereWeDrillProps) {
  const [active, setActive] = useState(
    regions[0]?.id || "sydney"
  );

  return (
    <section className="relative overflow-hidden bg-[#F4F1EB] py-6 lg:py-[120px]">
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
                    <div className="relative z-20 flex h-6 w-6 items-center justify-center transition-all duration-300">
                      {/* Glow — Figma: Ellipse 2 (from About coverage pin) */}
                      {isActive && (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute left-1/2 top-1/2 h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full lg:h-[132px] lg:w-[132px]"
                          style={{
                            background:
                              "radial-gradient(59.42% 59.42% at 50% 48.7%, #2D2D2D 3.68%, #FFFFFF 78.19%)",
                            opacity: 0.4,
                          }}
                        />
                      )}

                      {/* Marker — same size in both states, only color changes */}
                      <Marker
                        fill={isActive ? "#FFFFFF" : "#1A1917"}
                        className="relative h-[22px] w-[19px] lg:h-[30px] lg:w-[26px]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CONTENT */}

          <div className="order-2 lg:order-1 px-5 lg:px-0">
            <h2 className="hidden lg:block font-heading text-[48px] font-semibold leading-[56px] tracking-[-2px] text-[#1A1917]">
              Where We{" "}
              <span className="text-[#E53935]">Drill</span>
            </h2>

            <div className="mt-4 lg:mt-14">
              {regions.map((region) => {
                const isActive = active === region.id;
                const href = areaHrefForRegion(region.id);

                const className = `
                      group
                      relative
                      flex
                      w-full
                      items-center
                      justify-between
                      py-4
                      text-left
                      lg:border-b
                      lg:border-[#1A1917]/20
                      lg:px-0.5
                      lg:py-5
                      lg:last:border-b-0
                    `;

                const content = (
                  <>
                    <span
                      className={`absolute bottom-0 left-0 bg-[#E53935] transition-all duration-300 lg:hidden ${
                        isActive ? "w-[70px]" : "w-0"
                      } h-[1px]`}
                    />

                    <span className="font-heading text-[16px] lg:text-[20px] font-medium lg:font-semibold lg:tracking-[0.6px] text-[#1A1917]">
                      {region.name}
                    </span>

                    <span
                      className={`hidden lg:flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isActive
                          ? "border-[#E53935] bg-[#E53935] text-white"
                          : "border-[#1A1917]/30 text-[#1A1917]"
                      }`}
                    >
                      <ArrowUpRight size={14} strokeWidth={2} />
                    </span>
                  </>
                );

                return href ? (
                  <Link
                    key={region.id}
                    href={href}
                    onMouseEnter={() => setActive(region.id)}
                    className={className}
                  >
                    {content}
                  </Link>
                ) : (
                  <button
                    key={region.id}
                    onMouseEnter={() => setActive(region.id)}
                    onClick={() => setActive(region.id)}
                    className={className}
                  >
                    {content}
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