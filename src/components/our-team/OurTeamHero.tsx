"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbs } from "@/lib/breadcrumbs";

const images = [
  "/services/gallery-5.png",
  "/services/gallery-2.png",
  "/images/teamImg.png",
  "/services/gallery-7.png",
  "/services/gallery-3.png",
];

export default function OurTeamHero() {

    const autoplay = useRef(
  Autoplay({
    delay: 2500,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    stopOnFocusIn: false,
  })
);

const [emblaRef] = useEmblaCarousel(
  {
    loop: true,
    align: "start",
    dragFree: true,
  },
  // eslint-disable-next-line react-hooks/refs -- Embla reads the autoplay plugin instance at init (documented usage)
  [autoplay.current]
);

  return (
    <section className="relative overflow-hidden bg-[#1A1917] py-12 md:py-20 mt-[72px]">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 h-[220px] w-full bg-[#F1E9DC]/10" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto flex max-w-[862px] flex-col items-center px-5 md:px-8">
          {/* Breadcrumb */}
          <Breadcrumb
            items={breadcrumbs.company.ourTeam}
            className="mb-8 w-full md:justify-center"
          />

          {/* Title */}
          <h2 className="font-heading max-w-[776px] text-left text-[36px] font-semibold leading-[40px] tracking-[-1px] text-white md:text-center md:text-[56px] md:leading-[64px] md:tracking-[-2px]">
            Meet the Team Behind{" "}
            <span className="text-[var(--accent)]">
              TerraForma Drilling
            </span>
          </h2>

          <div className="mt-5 flex flex-col gap-6">
            <p className="body-lg text-left text-[#B8B8B8]! md:text-center">
              At TerraForma Drilling, our team brings practical field
              experience, technical expertise, and a strong commitment to safe,
              efficient project delivery in drilling and investigation services.
            </p>

            <p className="body-lg text-left text-[#B8B8B8]! md:text-center">
              Our field records are meticulous. We are committed to safety on
              every job. And our work is carried out with the understanding that
              your project depends on the quality of our data.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-10 md:mt-14">
          <div
            ref={emblaRef}
            className="overflow-hidden"
          >
            <div className="flex gap-3 pl-5 md:gap-5 md:pl-10">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative min-w-0 flex-[0_0_232px] md:flex-[0_0_433px]"
                >
                  <div className="relative h-[290px] overflow-hidden rounded-[4px] border border-[#56554F]/50 shadow-[0_1px_2px_rgba(20,20,20,0.15),0_3px_3px_rgba(20,20,20,0.13),1px_7px_4px_rgba(20,20,20,0.08),2px_12px_5px_rgba(20,20,20,0.02)] md:h-[477px] md:rounded-[5px]">
                    <Image
                      src={image}
                      alt=""
                      fill sizes="(max-width: 768px) 232px, 433px"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}