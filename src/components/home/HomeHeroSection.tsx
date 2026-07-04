"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

import { useQuoteModal } from "@/components/ui/QuoteModal";

const slides = [
  {
    image: "/images/herobanner-1.png",
    label: "Solid Flight Auger Drilling",
  },
  {
    image: "/images/herobanner-2.png",
    label: "Standard Penetration Testing",
  },
  {
    image: "/images/herobanner-3.png",
    label: "Environmental Drilling",
  },
  {
    image: "/images/herobanner-4.png",
    label: "Groundwater Well Installation",
  },
];

export default function HomeHeroSection() {
  const [active, setActive] = useState(0);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden md:h-screen pt-[72px]">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={clsx(
            "absolute inset-0 transition-opacity duration-1000",
            active === index ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
          style={{
            backgroundImage: `linear-gradient(rgba(26,25,23,0.6), rgba(26,25,23,0.6)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* =======================================================
          MOBILE 
      ======================================================= */}
      <div className="md:hidden relative z-20 h-full flex flex-col justify-center items-center px-5 py-5 pt-[95px] gap-8">
        {/* Content */}
        <div className="flex flex-col gap-5 w-full max-w-[362px] text-left">
          {/* Eyebrow */}
          <p className="font-mono text-[12px] leading-[23px] tracking-[1.4px] uppercase font-medium text-white">
            Geotechnical Drilling Contractor
          </p>

          {/* Heading + Description + Buttons */}
          <div className="flex flex-col gap-3">
            <h1 className="font-heading text-[36px] leading-[40px] tracking-[-1px] font-semibold text-white">
              Geotechnical Drilling Contractor in Sydney, NSW
            </h1>

            <p className="font-body text-[18px] leading-[26px] font-normal text-white">
              Our ute-mounted SFA rig is purpose-built for tight access jobs. We
              mobilise anywhere in Greater Sydney and regional NSW within 24
              hours. Drilling, testing, installation, we handle it all, so
              you’re not juggling multiple contractors.
            </p>

            <div className="flex flex-col gap-3 items-center">
              <button
                onClick={openQuoteModal}
                className="btn-primary w-full h-[44px]"
              >
                Request a Quote
              </button>

              <button className="btn-glass w-full h-[44px] items-center">
                View Our Services
              </button>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col items-start gap-3 w-full max-w-[362px]">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={clsx(
                "flex flex-col items-start pb-[2px]",
                active === index && "border-b border-[#E53935]"
              )}
            >
              <span
                className={clsx(
                  "font-body text-[14px] leading-6 tracking-[0.5px] font-medium text-[#F3F1ED]",
                  active === index ? "opacity-100" : "opacity-70"
                )}
              >
                {slide.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* =======================================================
          DESKTOP 
      ======================================================= */}
      <div className="md:flex relative z-20 container-custom h-full flex flex-col justify-center">
        <div className="max-w-[753px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[60px] h-[1px] bg-[var(--accent)]" />
            <p className="eyebrow text-white">
              Geotechnical Drilling Contractor
            </p>
          </div>

          {/* Heading */}
          <h1 className="heading-xl text-white mb-6">
            Geotechnical Drilling Contractor in Sydney, NSW
          </h1>

          {/* Description */}
          <p className="body-lg text-white! mb-8 max-w-[700px]">
            Our ute-mounted SFA rig is purpose-built for tight access jobs. We
            mobilise anywhere in Greater Sydney and regional NSW within 24
            hours. Drilling, testing, installation, we handle it all, so you’re
            not juggling multiple contractors.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary" onClick={openQuoteModal}>
              Request a Quote
            </button>
            <button className="btn-glass">View Our Services</button>
          </div>
        </div>
      </div>

      {/* =======================================================
          DESKTOP TABS
      ======================================================= */}
      <div className="hidden md:block absolute bottom-6 left-0 w-full z-20">
        <div className="container-custom flex flex-wrap gap-6 md:gap-8">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className="flex flex-col items-start"
            >
              <span
                className={clsx(
                  "text-sm md:text-base text-white transition-all",
                  active === index
                    ? "opacity-100"
                    : "opacity-70 hover:opacity-100"
                )}
              >
                {slide.label}
              </span>

              <span
                className={clsx(
                  "h-[1px] bg-[var(--accent)] mt-1 transition-all duration-300",
                  active === index ? "w-full" : "w-0"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}