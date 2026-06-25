import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Solid Flight Auger Drilling",
    slug: "solid-flight-auger-drilling",
  },
  {
    title: "Standard Penetration Testing",
    slug: "standard-penetration-testing",
  },
  {
    title: "Environmental Drilling",
    slug: "environmental-drilling",
  },
  {
    title: "Groundwater Well Installation",
    slug: "groundwater-well-installation",
  },
];

const industries = [
  {
    title: "Commercial Development",
    slug: "commercial-development",
  },
  {
    title: "Geotechnical Engineers",
    slug: "geotechnical-engineers",
  },
  {
    title: "Environmental Consultants",
    slug: "environmental-consultants",
  },
  {
    title: "Government & Utilities",
    slug: "government-utilities",
  },
  {
    title: "Civil & Infrastructure",
    slug: "civil-infrastructure",
  },
  {
    title: "Mining & Resources",
    slug: "mining-resources",
  },
];

const company = [
  "About Terraforma",
  "Contact Us",
  "Projects",
  "Case Studies",
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1917] text-[#B8B8B8]">
      {/* ================= MOBILE ================= */}
      <div className="lg:hidden flex flex-col items-center gap-4 px-5 py-5">
        {/* Logo */}
        <Image
          src="/logo-dark.svg"
          alt="Terraforma Drilling"
          width={118}
          height={64}
          className="object-contain"
        />

        {/* Description */}
        <p className="max-w-[342px] text-center text-[14px] leading-[22px] text-[#B8B8B8]">
          Geotechnical drilling contractor for site investigations across
          Greater Sydney & NSW. ISO-certified. Field-ready. Technical.
        </p>

        {/* Services */}
        <div className="w-full border-t border-white/30 pt-4">
          <div className="grid grid-cols-[100px_1fr] gap-12">
            <Link
              href="/services"
              className="text-[14px] font-medium text-white/70"
            >
              Services
            </Link>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[14px] leading-6 tracking-[0.5px] text-white/60"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Industries */}
        <div className="w-full border-t border-white/30 pt-4">
          <div className="grid grid-cols-[100px_1fr] gap-12">
            <Link
              href="/industries"
              className="text-[14px] font-medium text-white/70"
            >
              Industries
            </Link>

            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="text-[14px] leading-6 tracking-[0.5px] text-white/60"
                  >
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company */}
        <div className="w-full border-t border-white/30 pt-4">
          <div className="grid grid-cols-[100px_1fr] gap-12">
            <h4 className="text-[14px] font-medium text-white/70">
              Company
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-[14px] leading-6 tracking-[0.5px] text-white/60"
                >
                  About Terraforma
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-[14px] leading-6 tracking-[0.5px] text-white/60"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/case-studies"
                  className="text-[14px] leading-6 tracking-[0.5px] text-white/60"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="w-full border-t border-white/30 pt-4">
          <div className="grid grid-cols-[100px_1fr] gap-12">
            <h4 className="text-[14px] font-medium text-white/70">
              Contact
            </h4>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/phone.svg"
                  alt="Phone"
                  width={24}
                  height={24}
                />

                <span className="text-[14px] text-white/60">
                  (02) 7239 8878
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/icons/email.svg"
                  alt="Email"
                  width={24}
                  height={24}
                />

                <span className="text-[14px] text-white/60">
                  sales@tfdrilling.com.au
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/icons/location.svg"
                  alt="Location"
                  width={24}
                  height={24}
                />

                <span className="text-[14px] text-white/60">
                  Sydney, NSW, Australia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full border-t border-white/30 pt-4">
          <div className="flex flex-col items-center gap-3">
            <p className="text-center text-[12px] leading-5 text-white/60">
              © 2026 TerraForma Drilling Pty Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-3 text-[12px] leading-5 text-white/60">
              <Link href="/privacy-policy">Privacy Policy</Link>

              <span>|</span>

              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP  ================= */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-20 lg:py-20">
          {/* Top */}
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">
            {/* Brand */}
            <div className="flex max-w-[329px] flex-col justify-between">
              <Image
                src="/logo-dark.svg"
                alt="Terraforma Drilling"
                width={119}
                height={64}
              />

              <p className="mt-9 text-[16px] leading-[25px]">
                Geotechnical drilling contractor for site investigations across
                Greater Sydney & NSW. ISO-certified. Field-ready. Technical.
              </p>
            </div>

            {/* Navigation Columns */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:flex lg:gap-20">
              {/* Services */}
              <div>
               <Link
                  href="/services"
                  className="mb-6 block text-[14px] font-medium uppercase tracking-[0.5px] text-[#F3F1ED99]"
                >
                  Services
               </Link>

                <ul className="space-y-4">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-sm tracking-[0.5px] transition-colors hover:text-white"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <Link
                  href="/industries"
                  className="mb-6 block text-[14px] font-medium uppercase tracking-[0.5px] text-[#F3F1ED99]"
                >
                  Industries
                </Link>

                <ul className="space-y-4">
                  {industries.map((industry) => (
                    <li key={industry.slug}>
                      <Link
                        href={`/industries/${industry.slug}`}
                        className="text-sm tracking-[0.5px] transition-colors hover:text-white"
                      >
                        {industry.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <Link
                  href="/about"
                  className="mb-6 block text-[14px] font-medium uppercase tracking-[0.5px] text-[#F3F1ED99]"
                >
                  Company
                </Link>

                <ul className="space-y-4">
                  {company.map((item) => (
                    <li key={item}>
                      <Link
                        href="/about"
                        className="text-sm tracking-[0.5px] transition-colors hover:text-white"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="my-10 h-px bg-[#EFEAE133]" />

          {/* Middle */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h4 className="mb-6 text-[14px] font-medium uppercase tracking-[0.5px] text-[#F3F1ED99]">
                Contact
              </h4>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/phone.svg"
                    alt="Phone"
                    width={24}
                    height={24}
                  />
                  <span>(02) 7239 8878</span>
                </div>

                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/email.svg"
                    alt="Email"
                    width={24}
                    height={24}
                  />
                  <span>sales@tfdrilling.com.au</span>
                </div>

                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/location.svg"
                    alt="Location"
                    width={24}
                    height={24}
                  />
                  <span>Sydney, NSW, Australia</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-4 lg:gap-5">
              <Image
                src="/cert-1.svg"
                alt="Quality Certification"
                width={116}
                height={153}
              />
              <Image
                src="/cert-2.svg"
                alt="Environmental Certification"
                width={116}
                height={153}
              />
              <Image
                src="/cert-3.svg"
                alt="Safety Certification"
                width={116}
                height={153}
              />
            </div>
          </div>

          <div className="my-10 h-px bg-[#EFEAE133]" />

          {/* Bottom */}
          <div className="flex flex-col gap-4 text-center text-[14px] text-[#F3F1ED99] lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <p>
              © 2026 TerraForma Drilling Pty Ltd. All rights reserved.
            </p>

            <div className="flex items-center justify-center gap-4 lg:justify-end">
              <Link href="/privacy-policy">Privacy Policy</Link>

              <span>|</span>

              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}