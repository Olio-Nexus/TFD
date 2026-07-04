"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Solid Flight Auger Drilling",
    image: "/services/gallery-7.png",
  },
  {
    title: "Standard Penetration Testing (SPT)",
    image: "/services/gallery-4.png",
  },
  {
    title: "Environmental Drilling",
    image: "/services/gallery-5.png",
  },
  {
    title: "Groundwater Monitoring Well & Piezometer Installation",
    image: "/services/groundwater.png",
  },
];

export default function ServicesAWS() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -520 : 520,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#F4F1EB]">
      {/* Common Heading */}
      <div className="container-custom px-5 lg:px-0 pt-20">
        <div className="mb-8 lg:mb-14 flex items-start lg:items-center justify-between gap-6">
          <h2 className="font-heading text-[30px] font-semibold leading-[36px] tracking-[-1px] text-[#1A1917] lg:text-[48px] lg:leading-[56px] lg:tracking-[-2px]">
            Services We Offer Across{" "}
            <span className="text-[#E53935]">New South Wales</span>
          </h2>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-7 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#E53935] text-white transition hover:opacity-90"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#E53935] text-white transition hover:opacity-90"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      
<div className="hidden lg:block pb-20 overflow-hidden">
  <div
    ref={sliderRef}
    className="
      flex
      gap-5
      overflow-x-auto
      scroll-smooth
      scrollbar-none
      pl-[max(16px,calc((100vw-var(--container))/2+16px))]
      pr-0
    "
  >
    {services.map((service) => (
      <div
        key={service.title}
        className="relative h-[620px] min-w-[498px] overflow-hidden rounded-lg flex-shrink-0"
      >
        <Image
          src={service.image}
          alt={service.title}
          fill sizes="498px"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="font-heading text-2xl font-semibold leading-7 tracking-[0.4px] text-white">
            {service.title}
          </h3>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden">
        <div className="px-5 pb-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${
                index === 0
                  ? "border-y border-[#D1D1D1]"
                  : index !== services.length - 1
                  ? "border-b border-[#D1D1D1]"
                  : ""
              } py-4`}
            >
              <div
                className={`flex ${
                  index === 3 ? "items-start" : "items-center"
                } gap-3`}
              >
                <span className="font-mono text-[18px] font-semibold tracking-[1.2px] text-[#E53935]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-heading text-[18px] font-semibold leading-6 tracking-[-0.1px] text-[#1A1917]">
                  {service.title}
                </h3>
              </div>

              <div className="relative mt-3 h-[249px] w-full overflow-hidden rounded">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill sizes="(max-width: 1024px) 100vw, 498px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}