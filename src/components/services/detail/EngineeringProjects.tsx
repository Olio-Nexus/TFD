"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

type AccordionItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export interface EngineeringProjectsProps {
  title: string;
  highlight: string;
  items: AccordionItem[];
}

export default function EngineeringProjects({
  title,
  highlight,
  items,
}: EngineeringProjectsProps) {
  const [active, setActive] = useState<number>(0);

  const splitTitle = highlight
    ? title.split(highlight)
    : [title];

  const beforeHighlight = splitTitle[0] ?? "";
  const afterHighlight = splitTitle[1] ?? "";

  const activeItem = items?.[active];

  return (
    <section className="bg-[#F4F1EB] py-20 lg:py-[80px]">
      <div className="container-custom">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-14">
          {/* LEFT CONTENT */}
          <div className="w-full lg:flex-1">
            {/* Heading */}
            <div className="max-w-[612px]">
              <h2 className="font-heading text-[24px] leading-[30px] font-semibold tracking-[-1px] text-[#1A1917] md:text-[48px] md:leading-[56px] md:tracking-[-2px]">
                {beforeHighlight}
                <span className="text-[#E53935]">{highlight}</span>
                {afterHighlight}
              </h2>

              <p className="mt-4 max-w-[550px] text-[16px] leading-[26px] text-[#56554F]">
                Solid Flight Auger drilling supports a wide range of
                investigation programmes across NSW.
              </p>
            </div>

            {/* DESKTOP ACCORDION */}
            <div className="mt-14 hidden lg:block">
              {items.map((item, index) => {
                const isOpen = active === index;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActive(index)}
                    className={`group flex w-full items-start gap-3 border-b border-[rgba(184,184,184,0.2)] py-5 text-left transition-all ${
                      isOpen ? "min-h-[132px]" : "min-h-[68px]"
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-[16px] font-semibold uppercase tracking-[1.4px] ${
                            isOpen ? "text-[#E53935]" : "text-[#1A1917]"
                          }`}
                        >
                          {item.id} -
                        </span>

                        <h3
                          className={`font-heading text-[18px] font-semibold leading-7 tracking-[0.6px] ${
                            isOpen ? "text-[#E53935]" : "text-[#1A1917]"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      {isOpen && (
                        <p className="mt-3 max-w-[500px] text-[16px] leading-[26px] text-[#56554F]">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all ${
                        isOpen
                          ? "border-[#E53935] bg-[#E53935]"
                          : "border-[rgba(86,85,79,0.8)]"
                      }`}
                    >
                      {isOpen ? (
                        <ArrowUp className="h-4 w-4 text-white" />
                      ) : (
                        <ArrowDown className="h-4 w-4 text-[#56554F]" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* MOBILE ACCORDION */}
            <div className="mt-8 lg:hidden">
              {items.map((item, index) => {
                const isOpen = active === index;

                return (
                  <div
                    key={item.id}
                    className={`border-[#D1D1D1] ${
                      index === 0
                        ? "border-y"
                        : index === items.length - 1
                        ? ""
                        : "border-b"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setActive(isOpen ? -1 : index)
                      }
                      className="flex w-full items-center justify-between py-4"
                    >
                      <div className="flex flex-col items-start gap-3">
                        <span
                          className={`font-mono text-[14px] font-semibold tracking-[1.2px] ${
                            isOpen ? "text-[#E53935]" : "text-[#5F5E5D]"
                          }`}
                        >
                          {item.id}
                        </span>

                        <h3 className="font-heading text-[18px] font-semibold leading-6 text-[#1A1917]">
                          {item.title}
                        </h3>
                      </div>

                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                          isOpen
                            ? "border-[#E53935] bg-[#E53935]"
                            : "border-[rgba(26,25,23,0.2)]"
                        }`}
                      >
                        {isOpen ? (
                          <ArrowUp className="h-3.5 w-3.5 text-white" />
                        ) : (
                          <ArrowDown className="h-3.5 w-3.5 text-[#5F5E5D]" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="pb-4">
                        <p className="text-[16px] leading-[26px] text-[#56554F]">
                          {item.description}
                        </p>

                        <div className="relative mt-4 h-[386px] overflow-hidden rounded-[4px]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill sizes="(max-width: 1024px) 100vw, 612px"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE (DESKTOP) */}
          <div className="relative hidden h-[712px] w-full max-w-[612px] lg:block">
            <div className="absolute -left-4 -top-4 z-20">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
                <path
                  d="M0.5 26V4.5C0.5 2.29086 2.29086 0.5 4.5 0.5H26.5"
                  stroke="#E53935"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="absolute -bottom-4 -right-4 z-20">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
                <path
                  d="M26.5 0.5V22C26.5 24.2091 24.7091 26 22.5 26H0.5"
                  stroke="#E53935"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="relative h-full overflow-hidden rounded-[6px] border border-[#D1D1D1]">
              <Image
                key={activeItem?.image}
                src={activeItem?.image || ""}
                alt={activeItem?.title || ""}
                fill sizes="612px"
                priority
                className="object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}