import Image from "next/image";
import Link from "next/link";

export default function CompanyIntro() {
  return (
    <section className="bg-[#F4F1EB] py-5 lg:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-5 lg:flex-row lg:items-start lg:gap-[72px] lg:px-4">
        {/* LEFT COLUMN */}
        <div className="relative w-full shrink-0 lg:w-[515px]">
          {/* Corner Accent */}
          <div className="absolute -left-4 -top-4 z-20 hidden h-[26px] w-[26px] rounded-[2px] border-l border-t border-[#E53935] lg:block" />

          {/* Image */}
          <div
            className="
              relative
              h-[249px]
              overflow-hidden
              rounded-[4px]
              border
              border-[#56554F]/20
              sm:h-[420px]
              lg:h-[628px]
              lg:rounded-[6px]
              lg:border-[#56554F]/50
              lg:shadow-[0px_158px_95px_rgba(0,0,0,0.02),0px_70px_70px_rgba(0,0,0,0.06),0px_18px_39px_rgba(0,0,0,0.05)]
            "
          >
            <Image
              src="/images/about-drilling.png"
              alt="TerraForma Drilling Rig"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Site Badge */}
          <div
            className="
              absolute
              -left-[8px]
              top-[14px]
              z-20
              flex
              items-center
              rounded-[4px]
              bg-[#1A1917]
              px-[10px]
              py-[6px]
              shadow-[0px_6px_18px_rgba(26,25,23,0.18)]
              lg:left-[-16px]
              lg:top-8
              lg:px-[14px]
              lg:py-[9px]
            "
          >
            <span className="font-mono border-r border-white/15 pr-3 text-[10px] font-semibold uppercase tracking-[1.4px] text-[#E53935] lg:text-[12px]">
              Site
            </span>

            <span className="font-mono pl-3 text-[10px] font-medium tracking-[0.44px] text-[#EFEAE1] lg:text-[12px]">
              -33.8666, 151.2083
            </span>
          </div>

          {/* Desktop Floating Certifications */}
          <div className="absolute bottom-5 right-[-18px] z-20 hidden w-[267px] rounded-[5px] bg-white p-3 shadow-[0px_12px_32px_rgba(26,25,23,0.14)] lg:block">
            <p className="mb-3 text-center font-mono text-[12px] font-semibold uppercase tracking-[0.46px] text-[#1A1917]">
              Certifications
            </p>

            <div className="flex items-center justify-center gap-2">
              <Image
                src="/cert-1.svg"
                alt="ISO 9001"
                width={75}
                height={98}
              />

              <Image
                src="/cert-2.svg"
                alt="ISO 14001"
                width={75}
                height={98}
              />

              <Image
                src="/cert-3.svg"
                alt="ISO 45001"
                width={74}
                height={98}
              />
            </div>
          </div>

          {/* Corner Accent */}
          <div className="absolute -bottom-4 -right-4 z-20 hidden h-[26px] w-[26px] rounded-[2px] border-b border-r border-[#E53935] lg:block" />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-1 flex-col gap-3 lg:gap-0">
          {/* Eyebrow */}
          <div className="flex items-center gap-[10px]">
            <div className="h-px w-3 bg-[#E53935]" />

            <span className="font-mono text-[12px] font-medium uppercase tracking-[1.4px] text-[#E53935] lg:text-[14px]">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              font-heading
              max-w-[693px]
              text-[24px]
              font-semibold
              leading-[30px]
              tracking-[-1px]
              text-[#1A1917]
              lg:text-[48px]
              lg:leading-[56px]
              lg:tracking-[-0.04em]
            "
          >
            Geotechnical Drilling Specialists:
            <br />
            <span className="text-[#E53935]">
              Greater Sydney & NSW Region
            </span>
          </h2>

          {/* Content */}
          <div className="max-w-[693px] space-y-4 lg:mt-6 lg:space-y-6">
            <p className="body">
              TerraForma Drilling is a geotechnical drilling contractor based in
              Sydney, NSW. We work with engineers, consultants, developers, and
              local councils, providing investigation drilling, SPT and DCP
              testing, environmental drilling, and monitoring bore installation.
            </p>

            <p className="body">
              Our rig is a ute-mounted solid flight auger. That means we can get
              into places bigger rigs can&apos;t, such as tight suburban sites,
              sloped blocks, low clearance, you name it. It still does the job
              properly, just without all the access headaches.
            </p>

            <p className="body">
              We&apos;re set up to meet Tier 1 project requirements. Our rig has
              full hydraulic interlocks and safety systems, follows a documented
              service schedule, and complete service records are available if
              you need them. Whether you're doing a single-site investigation or
              a multi-location program, we operate to the standard your project
              demands.
            </p>

            {/* Mobile Certification Card */}
            <div className="lg:hidden">
              <div className="flex items-center gap-4 rounded-[4px] border border-[#D1D1D1] bg-white p-3">
                <div className="shrink-0">
                  <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.46px] text-[#1A1917]">
                    Certifications
                  </p>
                </div>

                <div className="flex flex-1 items-center justify-end gap-[8px]">
                  <Image
                    src="/cert-1.png"
                    alt="ISO 9001"
                    width={65}
                    height={85}
                  />

                  <Image
                    src="/cert-2.png"
                    alt="ISO 14001"
                    width={65}
                    height={85}
                  />

                  <Image
                    src="/cert-3.png"
                    alt="ISO 45001"
                    width={65}
                    height={85}
                  />
                </div>
              </div>
            </div>

            <p className="text-[16px] font-medium leading-[26px] text-[#1A1917]">
              Our operations are independently audited and certified to ISO
              9001, ISO 14001, and ISO 45001 standards.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-2 lg:mt-8">
            <Link
              href="/about"
              className="
                flex
                h-[44px]
                w-full
                items-center
                justify-center
                border
                border-[#56554F]
                font-mono
                text-[14px]
                font-medium
                uppercase
                tracking-[0.4px]
                text-[#1A1917]
                transition
                hover:bg-[#1A1917]
                hover:text-white
                lg:inline-flex
                lg:w-auto
                lg:px-6
              "
            >
              More About TerraForma Drilling
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}