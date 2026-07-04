import Image from "next/image";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

export interface WhyChooseUsIndustriesProps {
  tag?: string;
  title: string;
  highlight?: string;
  features: Feature[];
}

export default function WhyChooseUsIndustries({
  tag = "Why Choose TerraForma",
  title,
  highlight,
  features,
}: WhyChooseUsIndustriesProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col items-start text-left lg:items-center lg:text-center">
          <div className="mb-5 flex items-center gap-4 self-start lg:self-auto">
            <span className="h-px w-5 bg-[#E53935]" />
            <span className="tag">{tag}</span>
          </div>

          <h2 className="heading-lg max-w-[720px]">
            {parts[0]}
            {highlight && (
              <span className="text-[#E53935]">{highlight}</span>
            )}
            {parts[1]}
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="relative mt-14 hidden lg:block">
          <div className="border border-dashed border-[rgba(86,85,79,0.30)] p-8">
            <div className="grid grid-cols-2">
              {features.map((item, index) => {
                const isRightColumn = index % 2 === 1;
                const isTopRow = index < 2;

                return (
                  <div
                    key={item.title}
                    className={`
                      flex min-h-[318px] flex-col items-center justify-center px-6 py-10 text-center
                      ${
                        !isRightColumn
                          ? "border-r border-dashed border-[rgba(86,85,79,0.30)]"
                          : ""
                      }
                      ${
                        isTopRow
                          ? "border-b border-dashed border-[rgba(86,85,79,0.30)]"
                          : ""
                      }
                    `}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="mb-10"
                    />

                    <h3 className="font-heading mb-4 max-w-[520px] text-[20px] font-semibold leading-[28px] tracking-[0.6px] text-[#1A1917]">
                      {item.title}
                    </h3>

                    <p className="body max-w-[520px] text-center">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Corner markers */}
          <span className="absolute -left-2 -top-2 h-4 w-4">
            <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-[#E53935]" />
            <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-[#E53935]" />
          </span>

          <span className="absolute -right-2 -top-2 h-4 w-4">
            <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-[#E53935]" />
            <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-[#E53935]" />
          </span>

          <span className="absolute -bottom-2 -left-2 h-4 w-4">
            <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-[#E53935]" />
            <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-[#E53935]" />
          </span>

          <span className="absolute -bottom-2 -right-2 h-4 w-4">
            <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-[#E53935]" />
            <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-[#E53935]" />
          </span>
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="mt-8 flex flex-col gap-3 lg:hidden">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-[4px] bg-[#F4F1EB] p-3"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={36}
                height={36}
                className="mb-3"
              />

              <h3 className="mb-3 font-heading text-[18px] font-semibold leading-6 tracking-[-0.1px] text-[#1A1917]">
                {item.title}
              </h3>

              <p className="body text-left text-[16px]!">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
