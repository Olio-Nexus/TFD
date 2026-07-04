"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = {
  id: number;
  eyebrow: string;
  title: string;
  highlight: string;
  image: string;
  description1: string;
  description2?: string;
  cardTitle: string;
  cardText: string;
};

const slides: Slide[] = [
  {
    id: 1,
    eyebrow: "WHO ARE WE?",
    title: "How TerraForma",
    highlight: "Started",
    image: "/about/about-story-1.png",
    description1:
      "TerraForma Drilling was established to fill a practical gap in site investigations: a highly mobile ute-mounted drilling rig with SPT capability.",
    description2:
      "Our rig bridges the gap between shallow testing and larger tracked rigs. The result is a versatile drilling platform suited to geotechnical and environmental projects across NSW.",
    cardTitle: "Built for Tight-Access Sites",
    cardText:
      "We use a ute-mounted solid flight auger rig, specifically chosen for sites where larger rigs cannot work. Whether it is a narrow residential lot, a low-clearance building, or a tight urban space, we help clients obtain the subsurface data they need without additional access issues.",
  },
  {
    id: 2,
    eyebrow: "WHO ARE WE?",
    title: "What We Are",
    highlight: "Today",
    image: "/about/about-story-2.png",
    description1:
      "Today, we work with consultants, developers, contractors, councils, and government organisations all over New South Wales.",
    description2:
      "Our services include geotechnical and environmental drilling, in-situ testing, and the installation of monitoring bores. We always put safety, quality, and project delivery first.",
    cardTitle: "Drilling by Engineers, for Engineers",
    cardText:
      "Our investigations are driven by engineering outcomes, not just metres drilled. From SPT testing and sampling to monitoring bore installation, every scope is completed with a clear understanding of how the resulting data will be used in design, assessment, and risk management.",
  },
];

export default function AboutStory() {
  const [active, setActive] = useState(0);
  

  useEffect(() => {
    
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[active];

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="relative">
          {/* ===================== */}
          {/* Desktop Slider */}
          {/* ===================== */}

          <div
            className="hidden lg:grid lg:grid-cols-[523px_637px] lg:gap-14"
          >
            {/* Image Side */}
            <div className="relative">
              {/* Decorative Brackets */}

              <div className="absolute -left-3 -top-3 z-20 h-7 w-7 border-l border-t border-[#E53935] rounded-tl-md" />

              <div className="absolute -right-3 -bottom-3 z-20 h-7 w-7 border-r border-b border-[#E53935] rounded-br-md" />

              <div className="relative h-[615px] overflow-hidden rounded-md border border-[#56554F80]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill sizes="523px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content Side */}

            <div className="relative flex flex-col justify-between min-h-[615px]">
              <div>
                {/* Eyebrow */}

                <div className="mb-5 flex items-center gap-4">
                  <div className="w-5 border-t border-[#E53935]" />
                  <span className="tag">{slide.eyebrow}</span>
                </div>

                {/* Heading */}

                <h2 className="font-heading text-[48px] font-semibold leading-[56px] tracking-[-2px] text-[#1A1917]">
                  {slide.title}{" "}
                  <span className="text-[#E53935]">
                    {slide.highlight}
                  </span>
                </h2>

                <div className="mt-4 space-y-4">
                  <p className="text-[18px] leading-[30px] text-[#56554F]">
                    {slide.description1}
                  </p>

                  {slide.description2 && (
                    <p className="text-[18px] leading-[30px] text-[#56554F]">
                      {slide.description2}
                    </p>
                  )}
                </div>
              </div>

              {/* Card */}

              <div className="mt-10 overflow-hidden rounded-md border border-[#D1D1D1] bg-[#F4F1EB]">
                <div className="h-[3px] bg-[#E53935]" />

                <div className="p-6">
                  <h3 className="font-heading text-[28px] font-semibold leading-10 text-[#1A1917]">
                    {slide.cardTitle}
                  </h3>

                  <p className="mt-3 text-[18px] leading-[30px] text-[#56554F]">
                    {slide.cardText}
                  </p>
                </div>
              </div>

              {/* Pagination */}

              <div className="absolute right-[-60px] top-1/2 flex -translate-y-1/2 flex-col gap-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    aria-label={`Slide ${index + 1}`}
                    className={`h-[10px] w-[10px] rounded-full transition-all duration-300 ${
                      active === index
                        ? "bg-[#E53935]"
                        : "bg-[#56554F33]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ===================== */}
          {/* Mobile Stacked Layout */}
          {/* ===================== */}

          <div className="flex flex-col gap-12 lg:hidden">
            {slides.map((slide) => (
              <div key={slide.id} className="flex flex-col gap-5">
                {/* Eyebrow */}

                <div className="flex items-center gap-[10px]">
                  <div className="w-3 border-t border-[#E53935]" />
                  <span className="tag">{slide.eyebrow}</span>
                </div>

                {/* Heading */}

                <h2 className="font-heading text-[24px] font-semibold leading-[30px] tracking-[-1px] text-[#1A1917]">
                  {slide.title}{" "}
                  <span className="text-[#E53935]">
                    {slide.highlight}
                  </span>
                </h2>

                {/* Image */}

                <div className="relative h-[249px] overflow-hidden rounded">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill sizes="(max-width: 1024px) 100vw, 523px"
                    className="object-cover"
                  />
                </div>

                <p className="text-[16px] leading-[26px] text-[#56554F]">
                  {slide.description1}
                </p>

                {slide.description2 && (
                  <p className="text-[16px] leading-[26px] text-[#56554F]">
                    {slide.description2}
                  </p>
                )}

                {/* Card */}

                <div className="overflow-hidden rounded border border-[#D1D1D1] bg-[#F4F1EB]">
                  <div className="h-[3px] bg-[#E53935]" />

                  <div className="p-3">
                    <h3 className="font-heading text-[20px] font-semibold leading-6 text-[#1A1917]">
                      {slide.cardTitle}
                    </h3>

                    <p className="mt-3 text-[16px] leading-[26px] text-[#56554F]">
                      {slide.cardText}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}