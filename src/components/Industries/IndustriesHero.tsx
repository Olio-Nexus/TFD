import Image from "next/image";


export default function IndustriesHero() {
  return (
    <section className="w-full pt-[72px] bg-[var(--surface-dark)]">
      <div className="flex flex-col lg:flex-row h-auto">
        {/* Content Side */}
        <div className="flex w-full lg:w-1/2 bg-[var(--surface-dark)]">
          <div className="flex flex-col justify-center px-5 py-10 lg:px-20 lg:py-20 max-w-[603px] lg:mx-auto">
            <div className="space-y-5">
              <h1
                className="
                  font-heading
                  font-semibold
                  text-white
                  tracking-[-1px]
                  text-[36px]
                  leading-[40px]
                  lg:text-[56px]
                  lg:leading-[64px]
                  lg:tracking-[-2px]
                "
              >
                Drilling Solutions for a{" "}
                <span className="text-[var(--accent)]">
                  Variety of Industries
                </span>
              </h1>

              <p
                className="
                  text-[#B8B8B8]
                  text-[18px]
                  leading-[26px]
                  lg:leading-[30px]
                "
              >
                Every industry has different investigation requirements,
                access constraints, compliance obligations, and project
                timelines. TerraForma Drilling works alongside consultants,
                developers, contractors, councils, and project teams to
                deliver drilling services tailored to each sector&apos;s
                needs.
              </p>

              <p
                className="
                  text-[#B8B8B8]
                  text-[18px]
                  leading-[26px]
                  lg:leading-[30px]
                "
              >
                Select your industry below to learn how our geotechnical
                drilling, environmental drilling, testing, and monitoring
                bore services support your projects.
              </p>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative w-full lg:w-1/2 h-[444px] lg:h-auto overflow-hidden border border-[rgba(86,85,79,0.5)]">
          <Image
            src="/industries/industryHero.png"
            alt="Drilling operations"
            fill sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </section>
  );
}