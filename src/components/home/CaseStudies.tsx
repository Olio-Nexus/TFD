"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const studies = [
  {
    title: "Tight-Access Residential Drilling",
    description:
      "When larger rigs could not access the site, our ute-mounted SFA rig completed the full investigation without causing any disruption.",
    image: "/images/casestudy-1.png",
  },
  {
    title: "Same-Day Quote and Fast Mobilisation",
    description:
      "A consultant was urgently needed for drilling. We provided a quote the same day and arrived on site the next, keeping the project on schedule.",
    image: "/images/casestudy-2.png",
  },
  {
    title: "Environmental Investigation Drilling",
    description:
      "We followed strict sampling protocols with no delays. The consultant collected all required samples and kept the assessment on schedule.",
    image: "/images/casestudy-3.png",
  },
  {
    title: "Monitoring Bore Installation",
    description:
      "We installed bores to the exact depth, screen, and casing specifications, making them ready for immediate use by the project team.",
    image: "/images/casestudy-4.png",
  },
  {
    title: "Multi-Site Drilling Programme",
    description:
      "We managed multiple sites with varying conditions, ensuring consistent drilling and safety practices across all locations.",
    image: "/images/casestudy-5.png",
  },
  {
    title: "Shallow Pavement Investigation",
    description:
      "With tight access, hardstand surfaces, and no space for larger equipment, we completed the investigation efficiently without over-mobilising.",
    image: "/images/casestudy-6.png",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? studies.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActive((prev) =>
      prev === studies.length - 1 ? 0 : prev + 1
    );
  };

  const current = studies[active];
  const left =
    studies[(active - 1 + studies.length) % studies.length];
  const right =
    studies[(active + 1) % studies.length];

  return (
    <section className="section bg-white overflow-hidden">
      <div className="w-full">
        {/* Header */}
        <div className="px-[5.55vw] mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="w-5 border-t border-[#E53935]" />
            <span className="tag">Proof</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h2 className="font-heading text-[30px] md:text-[48px] font-semibold tracking-[-2px] leading-[1.15] text-[#1A1917]">
              Case Studies:{" "}
              <span className="text-[#E53935]">
                Drilling in Practice
              </span>
            </h2>

            <div className="hidden lg:flex items-center gap-7">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-[42px] h-[42px] rounded-full bg-[#E53935] flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={next}
                aria-label="Next"
                className="w-[42px] h-[42px] rounded-full bg-[#E53935] flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex h-[39.5vw] max-h-[570px] min-h-[500px] w-[120vw] -ml-[10vw] gap-5">
          {/* Left Preview */}
          <div className="relative w-[23%] h-[63.5%] rounded-[6px] overflow-hidden shrink-0">
            <Image
              src={left.image}
              alt={left.title}
              fill sizes="28vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="font-heading text-white font-semibold text-[clamp(18px,1.4vw,20px)] leading-[1.4]">
                {left.title}
              </h3>
            </div>
          </div>

          {/* Featured */}
          <div className="relative w-[51%] h-full rounded-[6px] overflow-hidden shrink-0">
            <Image
              src={current.image}
              alt={current.title}
              fill sizes="61vw"
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1917]/80 via-transparent to-transparent" />

            <div className="absolute left-[3.6%] right-[3.6%] bottom-[5.6%]">
              <div className="flex items-end justify-between gap-6">
                <div className="max-w-[75%]">
                  <h3 className="font-heading text-white font-semibold text-[clamp(20px,1.7vw,24px)] leading-[1.2] mb-3">
                    {current.title}
                  </h3>

                  <p className="text-white text-[clamp(14px,1.1vw,16px)] leading-[1.625]">
                    {current.description}
                  </p>
                </div>

                <button className="w-[42px] h-[42px] border border-white rounded-full flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Preview */}
          <div className="relative  w-[23%] h-[63.5%]  rounded-[6px] overflow-hidden shrink-0">
            <Image
              src={right.image}
              alt={right.title}
              fill sizes="28vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="font-heading text-white font-semibold text-[clamp(18px,1.4vw,20px)] leading-[1.4]">
                {right.title}
              </h3>
            </div>
          </div>
        </div>

       
        {/* MOBILE */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 px-5 snap-x snap-mandatory">
            {studies.map((study, index) => (
              <article
                key={index}
                className="snap-start shrink-0 w-[308px] rounded-[6px] border border-[rgba(86,85,79,0.2)] bg-[#F3F1ED] p-3"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[4px] aspect-[295/323]">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill sizes="308px"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="pt-4">
                  <h3 className="font-heading text-[20px] font-semibold leading-[120%] tracking-[-0.2px] text-[#1A1917]">
                    {study.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-[26px] text-[#56554F]">
                    {study.description}
                  </p>

                  <button className="mt-5 flex h-[42px] w-[105px] items-center justify-center border border-[#56554F] bg-transparent font-mono text-[14px] font-medium uppercase tracking-[0.4px] text-[#1A1917] transition-colors hover:bg-black hover:text-white">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}