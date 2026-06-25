"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const industries = [
  {
    title: "Commercial Development",
    image: "/images/industry-1.png",
    description:
      "We carry out geotechnical investigations for commercial building projects across NSW, including site classification, foundation assessment, and subsurface profiling, all drilled to your consultant's specifications and your schedule.",
  },
  {
    title: "Geotechnical Engineers",
    image: "/images/industry-2.png",
    description:
      "We are a reliable drilling subcontractor who follows your bore plan, works to your program, and lets you stay in control. We carry out SPT, DCP, and SFA drilling exactly as you instruct."
  },
  {
    title: "Environmental Consultants",
    image: "/images/industry-3.png",
    description:
      "We drill the borehole for your Phase 2 ESA, contaminated land, or acid sulfate investigation. You handle sampling, logging, and chain of custody, and we follow your program.",
  },
  {
    title: "Government & Utilities",
    image: "/images/industry-4.png",
    description:
      "We provide ground investigation drilling for council infrastructure, utility corridors, and government site assessments across NSW. Our systems are ISO-certified, and WHS documentation is available on request.",
  },
  {
    title: "Civil & Infrastructure",
    image: "/images/industry-5.png",
    description:
      "We offer pre-construction geotechnical drilling for road, bridge, rail, and civil infrastructure projects across NSW. Our ute-mounted rig suits tight corridors and staged investigations.",
  },
  {
    title: "Mining & Resources",
    image: "/images/industry-6.png",
    description:
      "We provide preliminary geotechnical and environmental borehole drilling to support mining exploration, tailings investigations, and resource site assessments across NSW and regional areas.",
  },
];

export default function IndustriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [desktopEmblaRef, desktopEmblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const [mobileEmblaRef, mobileEmblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    if (!desktopEmblaApi) return;

    const interval = setInterval(() => {
      desktopEmblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [desktopEmblaApi]);

  const scrollPrev = useCallback(() => {
    desktopEmblaApi?.scrollPrev();
  }, [desktopEmblaApi]);

  const scrollNext = useCallback(() => {
    desktopEmblaApi?.scrollNext();
  }, [desktopEmblaApi]);

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container-custom">
        {/* HEADER */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-5 h-px bg-[#E53935]" />
            <span className="tag">Industries We Serve</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h2 className="heading-lg max-w-[700px]">
                Drilling Services for{" "}
                <span className="text-[#E53935]">Your Industry</span>
              </h2>

              <p className="body max-w-[785px] mt-3">
                Whether you need drilling for suburban development or
                government infrastructure, we provide geotechnical and
                environmental drilling as needed for your program.
              </p>
            </div>

            {/* DESKTOP ONLY */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={scrollPrev}
                className="w-[42px] h-[42px] rounded-full bg-[#E53935] text-white flex items-center justify-center"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={scrollNext}
                className="w-[42px] h-[42px] rounded-full bg-[#E53935] text-white flex items-center justify-center"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* MOBILE VERSION (FIGMA) */}
        {/* ========================================= */}
        <div
          ref={mobileEmblaRef}
          className="overflow-hidden w-full lg:hidden"
        >
          <div className="flex gap-3">
            {industries.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_265px]"
              >
                <div className="h-[588px] border border-[#D1D1D1] rounded-[4px] overflow-hidden bg-white">
                  <div
                    className="h-[324px] bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />

                  <div className="p-3">
                    <h3 className="font-heading text-[18px] leading-[24px] font-semibold text-[#1A1917]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[16px] leading-[26px] text-[#56554F]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================= */}
        {/* DESKTOP VERSION (UNCHANGED) */}
        {/* ========================================= */}
        <div
          ref={desktopEmblaRef}
          className="hidden lg:block overflow-hidden w-full"
        >
          <div className="flex pr-0">
            {industries.map((item, index) => {
              const active = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className="
                    flex-[0_0_85%]
                    md:flex-[0_0_48%]
                    xl:flex-[0_0_381px]
                    pr-5
                  "
                >
                  <div
                    className="relative h-[498px] rounded-[6px] overflow-hidden cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`
                        absolute inset-0
                        transition-opacity duration-300
                        bg-cover bg-center
                        ${active ? "opacity-0" : "opacity-100"}
                      `}
                      style={{
                        backgroundImage: `
                          linear-gradient(
                            180deg,
                            rgba(26,25,23,0) 34.39%,
                            rgba(26,25,23,0.7) 92.35%
                          ),
                          url(${item.image})
                        `,
                      }}
                    />

                    <div
                      className={`
                        absolute inset-0
                        transition-opacity duration-300
                        ${active ? "opacity-100" : "opacity-0"}
                      `}
                    >
                      <div
                        className="absolute inset-0 bg-[#F4F1EB]"
                        style={{
                          backgroundImage:
                            "url('/images/soil-layers.svg')",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                    </div>

                    <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                      <h3
                        className={`
                          text-[24px]
                          leading-[28px]
                          font-semibold
                          transition-colors duration-300
                          ${
                            active
                              ? "text-[#1A1917]"
                              : "text-white"
                          }
                        `}
                      >
                        {item.title}
                      </h3>

                      <div
                        className={`
                          overflow-hidden
                          transition-all duration-300
                          ${
                            active
                              ? "max-h-[250px] opacity-100 mt-3"
                              : "max-h-0 opacity-0"
                          }
                        `}
                      >
                        <p className="text-[16px] leading-[26px] text-[#56554F]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}