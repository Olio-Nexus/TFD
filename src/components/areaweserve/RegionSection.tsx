"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const regions = [
  {
    name: "Sydney",
    href: "/areas-we-serve/sydney",
  },
  {
    name: "Newcastle & Hunter",
    href: "/areas-we-serve/newcastle",
  },
  {
    name: "Wollongong & Illawarra",
    href: "/areas-we-serve/wollongong",
  },
  {
    name: "Central West NSW",
    href: "/areas-we-serve/central-west-nsw",
  },
  {
    name: "New England & Northwest",
    href: "/areas-we-serve/new-england-northwest",
  },
  {
    name: "Riverina & Murray",
    href: "/areas-we-serve/riverina-murray",
  },
  {
    name: "North Coast NSW",
    href: "/areas-we-serve/north-coast-nsw",
  },
  {
    name: "Southern Tablelands",
    href: "/areas-we-serve/southern-tablelands",
  },
];

export default function RegionSection() {
  return (
    <section className="bg-[#1A1917] text-white py-20 lg:py-28 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <h2 className="heading-xl max-w-[780px] leading-none">
              Geotechnical & Environmental Drilling{" "}
              <span className="text-[#E53935]">
                Services Across NSW
              </span>
            </h2>

            <p className="body mt-8 max-w-[640px] text-[#B8B8B8]!">
              TerraForma Drilling provides geotechnical drilling,
              environmental drilling, testing, and monitoring bore
              installation services across Sydney and the New South Wales
              area.
            </p>

            <div className="mt-12">
              <Image
                src="/maps/nsw-map.svg"
                alt="Australia Map"
                width={850}
                height={650}
                priority
                className="w-full max-w-[760px] h-auto object-contain"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="w-full max-w-[420px]">
              <p className="body text-[#B8B8B8]!">
                Choose your region below to learn more about our local
                drilling capabilities and project experience.
              </p>

              <div className="mt-12">
                {regions.map((region) => (
                  <Link
                    key={region.name}
                    href={region.href}
                    className="group grid grid-cols-[1fr_48px] items-center gap-8 py-8 border-b border-white/10"
                  >
                    <span className="font-heading text-[22px] font-semibold tracking-[-0.02em] text-white">
                      {region.name}
                    </span>

                    <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#E53935] group-hover:border-[#E53935]">
                      <ArrowUpRight
                        size={18}
                        className="text-white transition-colors duration-300"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}