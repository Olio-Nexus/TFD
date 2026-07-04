import Image from "next/image";

export interface OurProcessProps {
  title: string;
  highlight: string;
  description1: string;
  description2: string;
  image?: string;
  imageAlt?: string;
}

export default function OurProcess({
  title,
  highlight,
  description1,
  description2,
  image = "/images/sfa.png",
  imageAlt = "Solid Flight Auger Drilling",
}: OurProcessProps) {
  const [beforeHighlight, afterHighlight] = title.split(highlight);

  return (
    <section className="bg-[#F4F1EB] py-5 md:py-20">
      <div className="container-custom">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Top Content */}
          <div className="flex justify-between gap-[72px]">
            {/* Left */}
            <div className="max-w-[577px]">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-px w-5 bg-[#E53935]" />
                <span className="font-mono text-[14px] font-medium uppercase tracking-[1.4px] text-[#E53935]">
                  Our Process
                </span>
              </div>

              <h2 className="font-heading text-[48px] font-semibold leading-[56px] tracking-[-2px] text-[#1A1917]">
                {beforeHighlight}
                <span className="text-[#E53935]">{highlight}</span>
                {afterHighlight}
              </h2>
            </div>

            {/* Right */}
            <div className="max-w-[631px] space-y-4">
              <p className="text-[16px] leading-[26px] text-[#56554F]">
                {description1}
              </p>

              <p className="text-[16px] leading-[26px] text-[#56554F]">
                {description2}
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-14">
            {/* Top Left Corner SVG */}
            <svg
              className="absolute -left-3 -top-3 z-20"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M0.5 26V4.5C0.5 2.29086 2.29086 0.5 4.5 0.5H26.5"
                stroke="#E53935"
                strokeLinecap="round"
              />
            </svg>

            {/* Bottom Right Corner SVG */}
            <svg
              className="absolute -bottom-3 -right-3 z-20"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M26.5 0.5V22C26.5 24.2091 24.7091 26 22.5 26H0.5"
                stroke="#E53935"
                strokeLinecap="round"
              />
            </svg>

            {/* Image */}
            <div className="relative h-[680px] overflow-hidden rounded-[8px] border border-[rgba(86,85,79,0.5)]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 1240px"
                priority
                className="object-cover"
              />
            </div>

            {/* Floating Depth Badge */}
              <div className="absolute bottom-[28px] left-[-16px] z-30">
                <div className="flex h-[37px] items-center rounded-[4px] bg-[#1A1917] px-[14px] shadow-[0px_6px_18px_rgba(26,25,23,0.18)]">
                  <div className="mr-3 border-r border-white/20 pr-3">
                    <span className="font-mono text-[12px] font-medium tracking-[0.44px] text-[#E53935]">
                      15M
                    </span>
                  </div>

                  <span className="font-mono text-[12px] font-medium tracking-[0.44px] text-[#EFEAE1]">
                    Maximum Drilling Depth
                  </span>
                </div>
              </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-5 lg:hidden">
          {/* Eyebrow */}
          <div className="flex items-center gap-[10px]">
            <div className="h-px w-3 bg-[#E53935]" />
            <span className="font-mono text-[14px] font-medium uppercase tracking-[1.4px] text-[#E53935]">
              Our Process
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[24px] font-semibold leading-[30px] tracking-[-1px] text-[#1A1917]">
            {beforeHighlight}
            <span className="text-[#E53935]">{highlight}</span>
            {afterHighlight}
          </h2>

          {/* Paragraph 1 */}
          <p className="text-[16px] leading-[26px] text-[#56554F]">
            {description1}
          </p>

          {/* Image */}
          <div className="relative h-[249px] overflow-hidden rounded-[4px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 362px"
              className="object-cover"
            />
          </div>

          {/* Paragraph 2 */}
          <p className="text-[16px] leading-[26px] text-[#56554F]">
            {description2}
          </p>
        </div>
      </div>
    </section>
  );
}