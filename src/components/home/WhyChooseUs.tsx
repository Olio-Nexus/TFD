
import Image from "next/image";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  {
    title: "Access Capabilities",
    description:
      "Our ute-mounted SFA rig reaches places that standard drill rigs cannot, including suburban lots, sloped sites, car parks, and low-clearance areas.",
    icon: "/icons/access-capabilities.svg",
  },
  {
    title: "24-Hour Mobilisation",
    description:
      "We can get our rig to your site in Greater Sydney within 24 hours. For regional NSW, we work with you to arrange a schedule that fits your needs.",
    icon: "/icons/mobilisation.svg",
  },
  {
    title: "Certified Quality Systems",
    description:
      "TerraForma Drilling holds ISO 9001:2015 (Quality Management), ISO 14001 (Environmental Management), and ISO 45001:2018 (Occupational Health & Safety), certified by TQCSI International.",
    icon: "/icons/certified-quality.svg",
  },
  {
    title: "Single-Contractor Scope",
    description:
      "We handle SFA drilling, SPT testing, DCP testing, and monitoring-bore installation as your single point of contact. This leads to fewer handoffs, easier coordination, and a smoother project.",
    icon: "/icons/single-contractor.svg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F4F1EB] py-5 md:py-20 lg:py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-[720px] text-left md:mx-auto md:text-center">
          <div className="mb-3 flex items-center gap-[10px] md:mb-5 md:justify-center md:gap-4">
            <div className="h-px w-3 bg-[#E53935] md:w-5" />
            <span className="tag">Capability</span>
          </div>

          <h2 className="heading-lg">
            Why TerraForma is the{" "}
            <span className="text-[#E53935]">right contractor</span>{" "}
            for your site
          </h2>

          <p className="body mt-3">
            Field-ready, technically compliant and built for the realities of
            NSW site investigation work.
          </p>
        </div>

        {/* Grid */}
        <div className="relative mt-5 p-0 md:mt-14 md:border md:border-dashed md:border-[rgba(86,85,79,0.3)] md:p-8">
          {/* Corner Marks */}
          <div className="absolute -left-2 -top-2 hidden h-4 w-4 md:block">
            <div className="absolute left-1/2 h-full w-px bg-[#E53935]" />
            <div className="absolute top-1/2 h-px w-full bg-[#E53935]" />
          </div>

          <div className="absolute -right-2 -top-2 hidden h-4 w-4 md:block">
            <div className="absolute left-1/2 h-full w-px bg-[#E53935]" />
            <div className="absolute top-1/2 h-px w-full bg-[#E53935]" />
          </div>

          <div className="absolute -bottom-2 -left-2 hidden h-4 w-4 md:block">
            <div className="absolute left-1/2 h-full w-px bg-[#E53935]" />
            <div className="absolute top-1/2 h-px w-full bg-[#E53935]" />
          </div>

          <div className="absolute -bottom-2 -right-2 hidden h-4 w-4 md:block">
            <div className="absolute left-1/2 h-full w-px bg-[#E53935]" />
            <div className="absolute top-1/2 h-px w-full bg-[#E53935]" />
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-0">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`
                  flex flex-col items-start rounded-[4px] bg-white
                  p-3 text-left
                  md:min-h-[290px]
                  md:items-center
                  md:justify-center
                  md:bg-transparent
                  md:px-8
                  md:py-12
                  md:text-center
                  ${
                    index < 2
                      ? "md:border-b md:border-dashed md:border-[rgba(86,85,79,0.3)]"
                      : ""
                  }
                  ${
                    index % 2 === 0
                      ? "md:border-r md:border-dashed md:border-[rgba(86,85,79,0.3)]"
                      : ""
                  }
                `}
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center md:mb-10 md:h-12 md:w-12">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={36}
                    height={36}
                    className="object-contain md:h-12 md:w-12"
                  />
                </div>

                <h3 className="font-heading text-[18px] leading-[24px] font-semibold tracking-[-0.1px] text-[#1A1917] md:heading-sm">
                  {feature.title}
                </h3>

                <p className="body mt-3 max-w-[520px] md:mt-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

