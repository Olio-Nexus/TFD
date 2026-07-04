"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";

type ServiceItem = {
  id: string;
  title: string;
  slug: string | null;
  description: string;
  image: string;
};

export interface ServicesAWSProps {
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
  services: ServiceItem[];
}

export default function ServicesAWS({
  tag = "Our Services",
  title,
  highlight,
  description,
  services,
}: ServicesAWSProps) {
  const [activeService, setActiveService] = useState(services[0]?.id ?? "");

  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="bg-[#FBFAF6] py-12 md:py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10 lg:mb-14">
          <div className="mb-5 flex items-center gap-3 lg:gap-4">
            <div className="w-3 border-t border-[var(--accent)] lg:w-5" />
            <span className="tag">{tag}</span>
          </div>

          <h2 className="heading-lg">
            {parts[0]}
            {highlight && (
              <span className="text-[var(--accent)]">{highlight}</span>
            )}
            {parts[1]}
          </h2>

          {description && (
            <p className="body mt-2 lg:mt-3 max-w-[876px]">{description}</p>
          )}
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

                  <h3 className="font-heading text-[20px] font-semibold leading-6">
                    {service.title}
                  </h3>
                </button>

                {isActive && (
                  <div className="pb-4">
                    <p className="body mb-4">{service.description}</p>

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
                  isActive ? "bg-white" : "bg-[#FBFAF6]"
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
