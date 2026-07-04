"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Industry = {
  id: string;
  number: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  href: string;
  bg?: "light" | "white";
};

const industries: Industry[] = [
  {
    id: "1",
    number: "01",
    title: "Commercial",
    highlight: "Development",
    description:
      "Geotechnical investigations and site drilling for commercial buildings, industrial facilities, retail developments, and mixed-use projects.",
    image: "/images/industry-1.png",
    href: "/industries/commercial",
    bg: "light",
  },
  {
    id: "2",
    number: "02",
    title: "Geotechnical",
    highlight: "Consultants",
    description:
      "Drilling, sampling, and testing services delivered to consultant specifications and investigation programmes.",
    image: "/images/industry-2.png",
    href: "/industries/geotechnical-consultants",
    bg: "white",
  },
  {
    id: "3",
    number: "03",
    title: "Environmental",
    highlight: "Consultants",
    description:
      "Environmental drilling support for contaminated land investigations, Phase 2 DSI programs, and groundwater monitoring projects.",
    image: "/images/industry-3.png",
    href: "/industries/environmental-consultant",
    bg: "light",
  },
  {
    id: "4",
    number: "04",
    title: "Government Bodies",
    highlight: "& Utilities",
    description:
      "Ground investigation drilling for public infrastructure, council projects, and utility corridor developments.",
    image: "/images/industry-4.png",
    href: "/industries/government-bodies-utilities",
    bg: "white",
  },
  {
    id: "5",
    number: "05",
    title: "Civil &",
    highlight: "Infrastructure",
    description:
      "Site investigations supporting road, bridge, rail, transport, and civil construction projects.",
    image: "/images/industry-5.png",
    href: "/industries/civil-infrastructure",
    bg: "light",
  },
  {
    id: "6",
    number: "06",
    title: "Mining &",
    highlight: "Resources",
    description:
      "Preliminary geotechnical and environmental drilling for mining, exploration, and resource-sector projects.",
    image: "/images/industry-6.png",
    href: "/industries/mining-resources",
    bg: "white",
  },
] 

export default function IndustriesWeSupport() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const active = industries[activeIndex];

  return (
    <section className="relative overflow-hidden">
      {/* ---------------- MOBILE ---------------- */}
      <div className="md:hidden">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className={`px-5 py-5 ${
              industry.bg === "light" ? "bg-[#F4F1EB]" : "bg-white"
            }`}
          >
            <div className="flex flex-col gap-5">
              {/* Content */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded border border-[#56554F]">
                      <span className="font-mono text-[14px] font-medium tracking-[1.4px] text-[#56554F]">
                        {industry.number}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="font-heading text-[24px] font-semibold leading-[30px] tracking-[-1px]"
                  >
                    <span className="text-[#1A1917]">
                      {industry.title}{" "}
                    </span>
                    <span className="text-[#E53935]">
                      {industry.highlight}
                    </span>
                  </h3>
                </div>

                <p className="text-[16px] leading-[26px] text-[#56554F]">
                  {industry.description}
                </p>

                <Link
                  href={industry.href}
                  className="inline-flex h-[44px] w-[136px] items-center justify-center whitespace-nowrap border border-[#56554F] px-6 font-mono text-[14px] uppercase tracking-[0.4px] text-[#1A1917]"
                >
                  Learn More
                </Link>
              </div>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded">
                <img
                  src={industry.image}
                  alt={`${industry.title} ${industry.highlight}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- DESKTOP ---------------- */}
      <div className="hidden md:block">
        <div
          className={`transition-colors duration-500 ${
            active.bg === "light" ? "bg-[#F4F1EB]" : "bg-white"
          }`}
        >
          <div className="mx-auto max-w-[1440px] px-20 py-20">
            <div className="relative flex min-h-[580px] items-center gap-14">
              {/* LEFT CONTENT */}
              <div className="flex flex-1 flex-col justify-center gap-14">
                <div className="flex flex-col gap-6">
                  <div className="flex h-7 w-7 items-center justify-center rounded border border-[#56554F]">
                    <span className="font-mono text-[14px] font-medium tracking-[1.4px] text-[#56554F]">
                      {active.number}
                    </span>
                  </div>

                  <h2 className="font-heading text-[48px] font-semibold leading-[56px] tracking-[-2px]">
                    <span className="text-[#1A1917]">
                      {active.title}{" "}
                    </span>
                    <span className="text-[#E53935]">
                      {active.highlight}
                    </span>
                  </h2>

                  <p className="max-w-[608px] text-[18px] leading-[30px] text-[#56554F]">
                    {active.description}
                  </p>
                </div>

                <Link
                  href={active.href}
                  className="inline-flex h-[44px] w-[136px] shrink-0 items-center justify-center whitespace-nowrap border border-[#56554F] px-6 font-mono text-[14px] font-medium leading-6 uppercase tracking-[0.4px] text-[#1A1917]">
                  Learn More
                </Link>
              </div>

              {/* IMAGE */}
              <div className="relative h-[580px] w-[524px] overflow-hidden rounded-[6px] border border-[rgba(86,85,79,0.5)]">
                <img
                  src={active.image}
                  alt={active.title}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                />

                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* DOT NAVIGATION */}
              <div className="absolute right-[-60px] top-1/2 flex -translate-y-1/2 flex-col gap-4">
                {industries.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-[10px] w-[10px] rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-[#E53935]"
                        : "bg-[rgba(86,85,79,0.2)]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}