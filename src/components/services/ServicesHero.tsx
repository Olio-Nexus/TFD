"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Solid Flight Auger Drilling",
    href: "/services/solid-flight-auger-drilling",
  },
  {
    id: "02",
    title: "Standard Penetration Testing (SPT)",
    href: "/services/standard-penetration-testing",
  },
  {
    id: "03",
    title: "Environmental Drilling",
    href: "/services/environmental-drilling",
  },
  {
    id: "04",
    title: "Groundwater Well Installation",
    href: "/services/groundwater-well-installation",
  },
];

export default function ServicesHero() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#1A1917] text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[768px] pt-[72px]">
        {/* LEFT CONTENT */}
        <div className="w-full lg:flex-1 px-5 lg:pl-20 lg:pr-0 py-5 lg:py-[60px] flex flex-col">
          <div className="max-w-[603px]">
            {/* Heading */}
            <h1 className="font-heading font-semibold tracking-[-1px] lg:tracking-[-2px] text-[36px] leading-[40px] lg:text-[56px] lg:leading-[64px]">
              Geotechnical Drilling
              <br />
              Services Across
              <br />
              <span className="text-[#E53935]">Sydney & NSW</span>
            </h1>

            {/* Description */}
            <p className="mt-3 lg:mt-5 text-[#B8B8B8] text-[18px] leading-[26px] lg:leading-[30px] font-body max-w-[603px]">
              TerraForma Drilling delivers geotechnical and environmental
              drilling, in situ testing, and borehole monitoring across New
              South Wales. Our ute-mounted rig, calibrated equipment, and rapid
              deployment support residential, commercial, environmental, and
              infrastructure projects with fast turnaround and minimal
              disruption.
            </p>

            {/* Services List */}
            <div className="mt-10 lg:mt-[30px]">
              {services.map((service, index) => {
                const isActive = active === index;

                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    onMouseEnter={() => setActive(index)}
                    className={`group flex items-center justify-between py-4 lg:py-5 border-b border-white/10 transition-all duration-300 ${
                      index === services.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 lg:gap-5">
                      <span
                        className={`font-mono text-[14px] lg:text-[16px] font-medium tracking-[0.5px] ${
                          isActive ? "text-[#E53935]" : "text-[#B8B8B8]"
                        }`}
                      >
                        {service.id}
                      </span>

                      <span
                        className={`font-body font-medium tracking-[0.5px] text-[14px] leading-6 lg:text-[16px] ${
                          isActive ? "text-white" : "text-[#B8B8B8]"
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>

                    <div
                      className={`flex items-center justify-center rounded-full transition-all duration-300
                      ${
                        isActive
                          ? "bg-[#E53935] border border-[#E53935] w-6 h-6"
                          : "border border-[#B8B8B84D] w-5 h-5 lg:w-6 lg:h-6"
                      }`}
                    >
                      <ArrowUpRight
                        className={`${
                          isActive
                            ? "text-white"
                            : "text-[#B8B8B8]"
                        }`}
                        size={14}
                        strokeWidth={2}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full lg:w-[701px] h-[444px] lg:h-auto">
          <div className="absolute inset-0 bg-black/10 z-10" />

          <Image
            src="/images/geotechnical-drilling.png"
            alt="Geotechnical drilling excavation"
            fill sizes="(max-width: 1024px) 100vw, 701px"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}