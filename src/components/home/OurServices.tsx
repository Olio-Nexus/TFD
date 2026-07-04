"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Solid Flight Auger Drilling",
    slug: "solid-flight-auger-drilling",
    description:
      "TerraForma Drilling is a geotechnical drilling contractor based in Sydney, NSW. We work with engineers, consultants, developers, and local councils, providing investigation drilling, SPT and DCP testing, environmental drilling, and monitoring bore installation.",
    image: "/images/service-1.png",
  },
  {
    id: "02",
    title: "Standard Penetration Testing (SPT)",
    slug: "standard-penetration-testing",
    description:
      "In-situ measurement of soil resistance and density using a calibrated SPT hammer provides the N-values your engineering team needs for foundation design and geotechnical assessments.",
    image: "/images/service-2.png",
  },
  {
    id: "03",
    title: "Environmental Drilling",
    slug: "environmental-drilling",
    description:
      "We handle drilling for environmental investigations, including Phase 2 Detailed Site Investigation (DSI) programs, contaminated land assessments, and acid sulfate soil investigations. TerraForma Drilling provides the borehole while your environmental consultant manages sampling and logging. We always follow your chain-of-custody and site protocols.",
    image: "/images/service-3.png",
  },
  {
    id: "04",
    title: "Groundwater Well Installation",
    slug: "groundwater-well-installation",
    description:
      "We professionally install groundwater monitoring bores for environmental and geotechnical programs.",
    image: "/images/service-4.png",
  },
  {
    id: "05",
    title: "Dynamic Cone Penetrometer (DCP) Testing",
    slug: null,
    description:
      "We provide a fast and cost-effective way to test bearing capacity and subgrade strength in shallow soils.",
    image: "/images/service-5.png",
  },
];

export default function OurServices() {
  const [activeService, setActiveService] = useState("01");

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10 lg:mb-14">
          <div className="mb-5 flex items-center gap-3 lg:gap-4">
            <div className="w-3 border-t border-[var(--accent)] lg:w-5" />
            <span className="tag">Our Services</span>
          </div>

          <h2 className="heading-lg">
            Our Geotechnical{" "}
            <span className="text-[var(--accent)]">Drilling Services</span>
          </h2>

          <p className="body mt-2 lg:mt-3 max-w-[876px] text-[16px]!">
            We do specialist drilling and in-situ testing across Sydney and NSW.
            Most jobs, we can be on site within 24 hours.
          </p>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          {services.map((service) => {
            const isActive = activeService === service.id;

            return (
              <div
                key={service.id}
                className={`border-b border-[#D1D1D1] ${
                  isActive ? "border-t" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveService(isActive ? "" : service.id)
                  }
                  className="flex w-full flex-col gap-3 py-4 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[14px] font-semibold tracking-[1.2px] ${
                        isActive
                          ? "text-[var(--accent)]"
                          : "text-[#5F5E5D]"
                      }`}
                    >
                      {service.id}
                    </span>

                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                        isActive
                          ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                          : "border-[rgba(26,25,23,0.2)] text-[#5F5E5D]"
                      }`}
                    >
                      <ArrowDown
                        size={12}
                        className={`transition-transform ${
                          isActive ? "rotate-0" : "rotate-180"
                        }`}
                      />
                    </div>
                  </div>

                  <h3 className="font-heading text-[20px]! font-semibold leading-6">
                    {service.title}
                  </h3>
                </button>

                {isActive && (
                  <div className="pb-4">
                    <p className="body mb-4 text-[16px]!">
                      {service.description}
                    </p>

                    <div className="relative mb-4 h-[249px] overflow-hidden rounded">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 362px"
                        className="object-cover"
                      />
                    </div>

                    {service.slug && (
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex h-[44px] w-full items-center justify-center border border-[#56554F] font-mono text-[14px] font-medium uppercase tracking-[0.4px]"
                      >
                        View Service
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* DESKTOP */}
        <div
          className="hidden overflow-hidden rounded-[6px] lg:block"
          style={{ border: "1px solid #D1D1D1" }}
        >
          {services.map((service) => {
            const isActive = activeService === service.id;

            const gridCols = isActive
              ? service.slug
                ? "lg:grid-cols-[40px_300px_1fr_242px_42px]"
                : "lg:grid-cols-[40px_300px_1fr_242px]"
              : service.slug
              ? "lg:grid-cols-[40px_300px_1fr_42px]"
              : "lg:grid-cols-[40px_300px_1fr]";

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveService(service.id)}
                onMouseEnter={() => setActiveService(service.id)}
                className={`relative w-full border-b border-[#D1D1D1] text-left last:border-b-0 ${
                  isActive ? "bg-[#FBFAF6]" : "bg-white"
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-[var(--accent)]" />
                )}

                <div
                  className={`flex flex-col gap-6 p-8 lg:grid lg:items-center lg:gap-10 ${gridCols}`}
                >
                  <div
                    className={`font-mono text-sm font-semibold tracking-[1.2px] ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {service.id}
                  </div>

                  <h3 className="text-2xl font-semibold leading-7">
                    {service.title}
                  </h3>

                  <p className="body">{service.description}</p>

                  {isActive && (
                    <div className="h-[200px] w-[242px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={242}
                        height={200}
                        className="h-[200px] w-[242px] rounded object-cover"
                      />
                    </div>
                  )}

                  {service.slug && (
                    <div className="flex justify-end">
                      <Link
                        href={`/services/${service.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className={`flex h-[42px] w-[42px] items-center justify-center rounded-full transition-all ${
                          isActive
                            ? "border border-[var(--accent)] bg-[var(--accent)] text-white"
                            : "border border-[#D1D1D1] text-[var(--muted)]"
                        }`}
                      >
                        <ArrowUpRight size={18} />
                      </Link>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}