import Image from "next/image";

export interface AboutSectionProps {
  tag?: string;
  title: string;
  highlight?: string;
  paragraphs: string[];
  featuresTitle: string;
  featuresHighlight?: string;
  features: string[];
  image: string;
  imageAlt?: string;
}

/* Red corner brackets that frame the image */
function CornerTopLeft() {
  return (
    <svg
      className="absolute -left-3 -top-3 z-10 hidden lg:block"
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 26V4.5C0.5 2.29086 2.29086 0.5 4.5 0.5H26.5"
        stroke="#E53935"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CornerBottomRight() {
  return (
    <svg
      className="absolute -bottom-3 -right-3 z-10 hidden lg:block"
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.5 0.5V22C26.5 24.2091 24.7091 26 22.5 26H0.5"
        stroke="#E53935"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="group flex items-center gap-5">
      <span
        className="
          flex h-4 w-4 shrink-0 items-center justify-center rounded-full
          bg-[rgba(16,16,16,0.2)]
          transition-colors
          group-hover:bg-[rgba(229,57,53,0.2)]
        "
      >
        <span
          className="
            h-2 w-2 rounded-full
            bg-[rgba(16,16,16,0.7)]
            transition-colors
            group-hover:bg-[#E53935]
          "
        />
      </span>

      <span
        className="
          font-heading text-[18px] font-medium leading-[28px] tracking-[0.6px]
          text-[#101010]
          transition-colors
          group-hover:text-[#E53935]
          lg:text-[20px]
        "
      >
        {text}
      </span>
    </li>
  );
}

export default function AboutSection({
  tag = "Your Drilling Subcontractor",
  title,
  highlight,
  paragraphs,
  featuresTitle,
  featuresHighlight,
  features,
  image,
  imageAlt = "TerraForma Drilling",
}: AboutSectionProps) {
  const titleParts = highlight ? title.split(highlight) : [title];
  const featureParts = featuresHighlight
    ? featuresTitle.split(featuresHighlight)
    : [featuresTitle];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container-custom flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-14">
        {/* TEXT COLUMN */}
        <div className="flex w-full flex-col gap-8 lg:gap-14">
          {/* Intro */}
          <div className="flex flex-col gap-4">
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="h-px w-5 bg-[var(--accent)]" />
              <span className="tag">{tag}</span>
            </div>

            {/* Heading */}
            <h2
              className="
                font-heading text-[28px] font-semibold leading-[34px] tracking-[-1px]
                text-[#1A1917]
                lg:text-[48px] lg:leading-[56px] lg:tracking-[-2px]
              "
            >
              {titleParts[0]}
              {highlight && (
                <span className="text-[var(--accent)]">{highlight}</span>
              )}
              {titleParts[1]}
            </h2>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Mobile image (between intro and features) */}
          <div className="relative lg:hidden">
            <div className="relative h-[420px] w-full overflow-hidden rounded-[8px] border border-[rgba(86,85,79,0.5)]">
              <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 596px" className="object-cover" />
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-8">
            <h3
              className="
                font-heading text-[22px] font-semibold leading-[28px] tracking-[0.6px]
                text-[#1A1917]
                lg:text-[24px]
              "
            >
              {featureParts[0]}
              {featuresHighlight && (
                <span className="text-[var(--accent)]">{featuresHighlight}</span>
              )}
              {featureParts[1]}
            </h3>

            <ul className="flex flex-col gap-5">
              {features.map((feature, index) => (
                <FeatureItem key={index} text={feature} />
              ))}
            </ul>
          </div>
        </div>

        {/* IMAGE COLUMN (desktop) */}
        <div className="relative hidden w-full shrink-0 self-stretch lg:block lg:w-[596px]">
          <CornerTopLeft />
          <div className="relative h-full min-h-[698px] w-full overflow-hidden rounded-[8px] border border-[rgba(86,85,79,0.5)]">
            <Image src={image} alt={imageAlt} fill sizes="596px" className="object-cover" />
          </div>
          <CornerBottomRight />
        </div>
      </div>
    </section>
  );
}
