/* eslint-disable @next/next/no-img-element */
const certifications = [
  {
    iso: "ISO 9001:2015",
    title: "Quality Management Systems",
    description: "Certified by TQCSI International",
    image: "/cert-1.svg",
  },
  {
    iso: "ISO 14001:2015",
    title: "Environmental Management Systems",
    description: "Certified by TQCSI International",
    image: "/cert-2.svg",
  },
  {
    iso: "ISO 45001:2018",
    title: "Occupational Health & Safety Management Systems",
    description: "Certified by TQCSI International",
    image: "/cert-3.svg",
  },
];

export default function CertificationsSection() {
  return (
    <section className="bg-[#1A1917]">
      <div className="mx-auto max-w-[1440px] px-5 py-5 md:px-20 md:py-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-14">
          {/* Left Content */}
          <div className="flex-1">
            {/* Label */}
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-3 bg-[#E53935] md:w-5" />

              <span className="font-mono text-[12px] font-medium uppercase tracking-[1.4px] text-[#E53935] md:text-[14px]">
                Certifications
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-[574px]
                font-heading
                text-[24px]
                font-semibold
                leading-[30px]
                tracking-[-1px]
                text-white
                md:text-[48px]
                md:leading-[56px]
                md:tracking-[-2px]
              "
            >
              Certified for Better Safety, Quality, &{" "}
              <span className="text-[#E53935]">
                Environmental Compliance
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-3
                max-w-[612px]
                text-[16px]
                leading-[26px]
                text-[#B8B8B8]
                md:mt-6
                md:text-[18px]
                md:leading-[30px]
              "
            >
              TerraForma Drilling operates under internationally recognised
              management systems certified by TQCSI International.
            </p>
          </div>

          {/* Desktop Certification Panel */}
          <div className="hidden w-full max-w-[612px] md:block">
            <div className="overflow-hidden rounded-[6px] border border-[#D1D1D1] bg-white">
              {certifications.map((item, index) => (
                <div
                  key={item.iso}
                  className={`flex min-h-[140px] items-center gap-8 px-6 py-6 ${
                    index !== certifications.length - 1
                      ? "border-b border-[#D1D1D1]"
                      : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.iso}
                    width={66}
                    height={86}
                    className="shrink-0 opacity-90"
                  />

                  <div>
                    <h3 className="font-heading text-[20px] font-bold leading-8 tracking-[-0.1px] text-[#E53935]">
                      {item.iso}
                    </h3>

                    <p className="mt-1 text-[18px] font-medium leading-[26px] text-[#1A1917]">
                      {item.title}
                    </p>

                    <p className="text-[16px] leading-[26px] text-[#56554F]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="flex flex-col gap-3 md:hidden">
            {certifications.map((item) => (
              <div
                key={item.iso}
                className="flex items-center gap-3 rounded-[4px] bg-white p-3"
              >
                <img
                  src={item.image}
                  alt={item.iso}
                  width={66}
                  height={86}
                  className="shrink-0 opacity-90"
                />

                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="font-heading text-[18px] font-semibold leading-6 tracking-[-0.1px] text-[#E53935]">
                    {item.iso}
                  </h3>

                  <div className="mt-2">
                    <p className="font-heading text-[18px] font-medium leading-6 tracking-[-0.1px] text-[#1A1917]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[16px] leading-[26px] text-[#56554F]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}