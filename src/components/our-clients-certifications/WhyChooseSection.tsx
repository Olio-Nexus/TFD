import Image from "next/image";

const features = [
  {
    title: "Engineering-Focused Field Delivery",
    description:
      "We understand how subsurface data is used in design and assessment, and we ensure every site investigation meets your project goals.",
    icon: "/services/icons/sfa-1.svg",
  },
  {
    title: "Tight-Access Capability",
    description:
      "We have a custom ute-mounted drilling platform that allows us to work in places that larger rigs cannot access.",
    icon: "/services/icons/sfa-2.svg",
  },
  {
    title: "Responsive Support Across NSW",
    description:
      "Fast mobilisation, clear communication, and practical planning help your project team keep moving forward during investigations.",
    icon: "/icons/access-capabilities.svg",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[var(--bg-alt)] py-20 md:py-[80px]">
      <div className="container-custom">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Desktop */}
          <h2 className="hidden md:block font-heading  md:text-[48px] font-semibold leading-[56px] tracking-[-2px] text-[var(--text)]">
            Why They Choose{" "}
            <span className="text-[var(--accent)]">TerraForma</span>
            <br />
            <span className="text-[var(--accent)]">
              Drilling for Sub Contracting
            </span>
          </h2>

          {/* Mobile */}
          <div className="md:hidden text-left">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-[var(--accent)]" />
              <span className="font-mono text-[12px] uppercase tracking-[2px] text-[var(--accent)]">
                Why Choose Us
              </span>
            </div>

            <h2 className="font-heading text-[36px] font-semibold leading-[42px] tracking-[-1.5px] text-[var(--text)]">
              Why Choose{" "}
              <span className="text-[var(--accent)]">
                TerraForma Drilling?
              </span>
            </h2>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="relative mt-14 hidden md:block">
          <div className="border border-dashed border-[rgba(86,85,79,0.30)] p-8">
            <div className="grid grid-cols-3">
              {features.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex min-h-[318px] flex-col items-center justify-center px-6 py-10 text-center ${
                    index !== features.length - 1
                      ? "border-r border-dashed border-[rgba(86,85,79,0.30)]"
                      : ""
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="mb-10"
                  />

                  <h3 className="font-heading text-[20px] font-semibold leading-[28px] tracking-[0.6px] text-[var(--text)]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[360px] body text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Corner Marks */}
          <span className="absolute -left-2 -top-2 h-4 w-4 before:absolute before:left-1/2 before:top-0 before:h-4 before:w-px before:-translate-x-1/2 before:bg-[var(--accent)] after:absolute after:left-0 after:top-1/2 after:h-px after:w-4 after:-translate-y-1/2 after:bg-[var(--accent)]" />

          <span className="absolute -right-2 -top-2 h-4 w-4 before:absolute before:left-1/2 before:top-0 before:h-4 before:w-px before:-translate-x-1/2 before:bg-[var(--accent)] after:absolute after:left-0 after:top-1/2 after:h-px after:w-4 after:-translate-y-1/2 after:bg-[var(--accent)]" />

          <span className="absolute -bottom-2 -left-2 h-4 w-4 before:absolute before:left-1/2 before:top-0 before:h-4 before:w-px before:-translate-x-1/2 before:bg-[var(--accent)] after:absolute after:left-0 after:top-1/2 after:h-px after:w-4 after:-translate-y-1/2 after:bg-[var(--accent)]" />

          <span className="absolute -bottom-2 -right-2 h-4 w-4 before:absolute before:left-1/2 before:top-0 before:h-4 before:w-px before:-translate-x-1/2 before:bg-[var(--accent)] after:absolute after:left-0 after:top-1/2 after:h-px after:w-4 after:-translate-y-1/2 after:bg-[var(--accent)]" />
        </div>

        {/* Mobile Layout */}
        <div className="mt-8 space-y-4 md:hidden">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-[4px] bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="mb-5"
              />

              <h3 className="font-heading text-[18px] font-semibold leading-[28px] tracking-[-0.2px] text-[var(--text)]">
                {item.title}
              </h3>

              <p className="mt-3 text-[16px] leading-[40px] text-[var(--muted)] md:leading-[26px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}