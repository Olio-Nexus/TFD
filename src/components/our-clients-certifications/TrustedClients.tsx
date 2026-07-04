"use client";

import Image from "next/image";
import { useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const logos = [
  "/clients/c-1.png",
  "/clients/c-2.png",
  "/clients/c-3.png",
  "/clients/c-4.png",
  "/clients/c-5.png",
];

export default function TrustedClients() {
  const slides = useMemo(() => [...logos, ...logos], []);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      skipSnaps: true,
    },
    [
      Autoplay({
        delay: 2200,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container-custom">
        <h2 className="mx-auto max-w-[980px] text-center font-heading text-[20px] font-semibold leading-[26px] tracking-[-1px] text-[#1A1917] md:text-[24px] lg:text-[42px] lg:leading-[52px]">
          Trusted by Contractors, Consultants, and Infra Companies Across{" "}
          <span className="text-[#E53935]">New South Wales</span>
        </h2>

        {/* Desktop */}
        <div className="mt-14 hidden md:block">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((logo, index) => (
                <div
                  key={index}
                  className="flex-[0_0_20%] px-3"
                >
                  <div className="flex h-[120px] items-center justify-center rounded bg-[#F4F1EB]">
                    <Image
                      src={logo}
                      alt=""
                      width={220}
                      height={80}
                      className="h-auto max-h-[56px] w-auto max-w-[170px] object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-6 md:hidden">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex h-[58px] items-center justify-center rounded bg-[#F4F1EB]">
              <Image src={logos[0]} alt="" width={90} height={25} />
            </div>

            <div className="flex h-[58px] items-center justify-center rounded bg-[#F4F1EB]">
              <Image src={logos[1]} alt="" width={90} height={25} />
            </div>

            <div className="col-span-2 flex justify-center">
              <div className="flex h-[58px] w-[175px] items-center justify-center rounded bg-[#F4F1EB]">
                <Image src={logos[2]} alt="" width={110} height={34} />
              </div>
            </div>

            <div className="flex h-[58px] items-center justify-center rounded bg-[#F4F1EB]">
              <Image src={logos[3]} alt="" width={95} height={26} />
            </div>

            <div className="flex h-[58px] items-center justify-center rounded bg-[#F4F1EB]">
              <Image src={logos[4]} alt="" width={110} height={28} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}