"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryProps {
  title: string;
  images: GalleryImage[];
}

export default function Gallery({ title, images }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const getImage = (offset: number) => {
    const index =
      (currentIndex + offset + images.length) %
      images.length;

    return images[index];
  };

  return (
    <section className="bg-white py-5 md:py-20 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-5 md:mb-14">
          <h2 className="font-heading font-semibold tracking-[-1px] md:tracking-[-2px] text-[#1A1917] text-[24px] leading-[30px] md:text-[48px] md:leading-[56px] max-w-[800px]">
            {title}
          </h2>

          {/* Desktop Arrows Only */}
          <div className="hidden md:flex items-center gap-7 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#E53935] bg-[#E53935] transition-transform hover:scale-105"
            >
              <ChevronLeft
                size={18}
                strokeWidth={2.5}
                className="text-white"
              />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next"
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#E53935] bg-[#E53935] transition-transform hover:scale-105"
            >
              <ChevronRight
                size={18}
                strokeWidth={2.5}
                className="text-white"
              />
            </button>
          </div>
        </div>

        {/* ==========================
            MOBILE DESIGN
        =========================== */}
        <div className="md:hidden overflow-hidden">
          <div
            className="
              flex
              gap-3
              overflow-x-auto
              snap-x
              snap-mandatory
              scrollbar-hide
              -mr-5
              pr-5
            "
          >
            {images.map((image) => (
              <div
                key={image.id}
                className="
                  relative
                  h-[324px]
                  w-[253px]
                  flex-none
                  overflow-hidden
                  rounded-[4px]
                  snap-start
                "
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="253px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ==========================
            TABLET
        =========================== */}
        <div className="hidden md:flex lg:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative h-[500px] min-w-[320px] overflow-hidden rounded-md snap-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* ==========================
            DESKTOP DESIGN
        =========================== */}
        <div className="hidden lg:flex items-center justify-center gap-5 h-[620px]">
          {/* Partial Left */}
          <GalleryCard
            image={getImage(-3)}
            width="w-[180px]"
            height="h-[460px]"
          />

          {/* Left */}
          <GalleryCard
            image={getImage(-2)}
            width="w-[369px]"
            height="h-[460px]"
          />

          {/* Center Large */}
          <GalleryCard
            image={getImage(0)}
            width="w-[498px]"
            height="h-[620px]"
            priority
          />

          {/* Right */}
          <GalleryCard
            image={getImage(2)}
            width="w-[369px]"
            height="h-[460px]"
          />

          {/* Partial Right */}
          <GalleryCard
            image={getImage(3)}
            width="w-[180px]"
            height="h-[460px]"
          />
        </div>
      </div>
    </section>
  );
}

interface GalleryCardProps {
  image: GalleryImage;
  width: string;
  height: string;
  priority?: boolean;
}

function GalleryCard({
  image,
  width,
  height,
  priority = false,
}: GalleryCardProps) {
  return (
    <div
      className={`relative ${width} ${height} overflow-hidden rounded-[6px] shrink-0`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill sizes="498px"
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}