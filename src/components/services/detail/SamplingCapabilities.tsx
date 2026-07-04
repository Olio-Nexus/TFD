"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Card = {
  title: string;
  description: string;
  image: string;
};

export interface SamplingCapabilitiesProps {
  title: string;
  cards: Card[];
}

function SoilPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 305 399"
      fill="none"
      preserveAspectRatio="none"
    >
      <g opacity="0.6" clipPath="url(#clip0)">
        <path
          opacity="0.85"
          d="M1427 69.5883C1137.25 11.6376 876.468 127.539 528.764 69.5883C181.06 11.6376 -137.669 127.539 -398.447 69.5883C-514.348 40.613 -601.274 69.5883 -659.225 55.1006V562.169H1427V69.5883Z"
          fill="#E6E1D8"
        />
        <path
          opacity="0.14"
          d="M1427 185.588C1108.27 127.638 818.518 243.539 470.814 185.588C152.085 133.433 -166.644 243.539 -427.422 185.588C-543.323 159.51 -615.762 185.588 -659.225 176.896V562.268H1427V185.588Z"
          fill="#E53935"
        />
        <path
          opacity="0.15"
          d="M1427 314.588C1079.3 256.638 760.567 372.539 412.863 314.588C94.134 262.433 -224.595 372.539 -485.373 314.588C-572.299 297.203 -630.25 314.588 -659.225 308.793V575.366H1427V314.588Z"
          fill="#56554F"
        />
        <path
          opacity="0.92"
          d="M1427 433.261C1050.32 375.31 731.592 476.724 354.912 433.261C36.1833 395.593 -282.545 476.724 -514.348 433.261C-601.274 415.875 -644.737 433.261 -659.225 430.363V549.162H1427V433.261Z"
          fill="#1A1917"
        />
      </g>

      <defs>
        <clipPath id="clip0">
          <rect
            width="966"
            height="492"
            fill="white"
            transform="matrix(-1 0 0 1 469 -18.1406)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function SamplingCapabilities({
  title,
  cards,
}: SamplingCapabilitiesProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

const cardsPerView = 4;
const maxSlide = Math.max(0, cards.length - cardsPerView);

const nextSlide = () => {
  setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
};

const prevSlide = () => {
  setCurrentSlide((prev) => Math.max(prev - 1, 0));
};

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container-custom">
            {/* Header */}
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-5">
        
        <div className="flex items-center gap-[10px] md:justify-center md:w-full">
            <div className="h-px w-3 bg-[#E53935] md:w-5" />

            <span className="font-mono text-[12px] uppercase tracking-[1.4px] text-[#E53935] md:text-[14px]">
            Sampling & Testing Methods
            </span>
        </div>


        <h2
            className="w-full text-left font-heading text-[24px] font-semibold leading-[30px] tracking-[-1px] text-[#1A1917] md:max-w-[805px]
            md:mx-auto md:text-center md:text-[48px] md:leading-[56px] md:tracking-[-2px] "
        >
            {title}
        </h2>

        </div>

        {/* Desktop */}
        
      <div className="relative mt-14 hidden md:block">
        {/* Arrows */}
        {cards.length > cardsPerView && (
          <div className="mb-6 flex justify-end gap-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E53935] text-white transition hover:bg-[#d32f2f] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide === maxSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E53935] text-white transition hover:bg-[#d32f2f] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentSlide} * (25% + 16.25px)))`,
            }}
          >
            {cards.map((card, index) => {
              const active = hovered === index;

              return (
                <div
                  key={card.title}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative h-[398px] min-w-[calc(25%-15px)] flex-1 overflow-hidden rounded-[6px] border border-[#D1D1D1]"
                  style={{
                    width: "calc((100% - 60px) / 4)",
                    flexShrink: 0,
                  }}
                >
                  {active ? (
                    <>
                      <div className="absolute inset-0 bg-[#F4F1EB]" />

                      <SoilPattern />

                      <div className="absolute bottom-6 left-6 right-6 z-10">
                        <h3 className="font-heading text-[24px] font-semibold leading-[28px] text-[#1A1917]">
                          {card.title}
                        </h3>

                        <p className="mt-3 text-[16px] leading-[26px] text-[#56554F]">
                          {card.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill sizes="320px"
                        className="object-cover transition-transform duration-300"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                      <div className="absolute bottom-6 left-6 right-6 z-10">
                        <h3 className="font-heading text-[24px] font-semibold leading-[28px] text-white">
                          {card.title}
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

        {/* Mobile */}
        <div className="mt-8 md:hidden">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {cards.map((card) => (
              <div
                key={card.title}
                className="min-w-[265px] overflow-hidden rounded border border-[#D1D1D1] bg-white"
              >
                <div className="relative h-[324px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill sizes="265px"
                    className="object-cover"
                  />
                </div>

                <div className="p-3">
                  <h3 className="font-heading text-[18px] font-semibold leading-6 text-[#1A1917]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[16px] leading-[26px] text-[#56554F]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}