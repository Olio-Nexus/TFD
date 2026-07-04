/* eslint-disable @next/next/no-img-element */
const certificates = [
  {
    iso: "9001:2015",
    title: "Quality Management Systems",
    image: "/cert-1.svg",
  },
  {
    iso: "14001:2015",
    title: "Environmental Management Systems",
    image: "/cert-2.svg",
  },
  {
    iso: "45001:2018",
    title: "Occupational Health & Safety Management Systems",
    image: "/cert-3.svg",
  },
];

export default function Certificates() {
  return (
    <section className="bg-[#F4F1EB]">
      <div className="container-custom py-12 md:py-20">
        {/* Header */}
        <div className="mb-8 md:mb-14">
          <h2 className="font-heading text-[24px] leading-[32px] tracking-[-1px] font-semibold text-[#1A1917] md:text-[48px] md:leading-[56px] md:tracking-[-2px]">
            Latest <span className="text-[#E53935]">Articles & Updates</span>
          </h2>

          <p className="mt-3 max-w-[634px] body text-[#56554F]">
            We work under internationally recognised management systems,
            certified by TQCSI International.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5">
          {certificates.map((item) => (
            <article
              key={item.iso}
              className="relative overflow-hidden rounded-md border border-[#D1D1D1] bg-white"
            >
              {/* Left Accent Line */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-[#E53935]" />

              <div className="p-3 md:p-6">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading text-[24px] font-semibold leading-7 tracking-[-1px] text-[#1A1917] md:text-[36px] md:leading-[44px] md:tracking-[-2px]">
                      ISO
                    </h3>

                    <p className="mt-1 font-heading text-base font-semibold tracking-[0.6px] text-[#E53935] md:text-[20px] md:leading-7">
                      {item.iso}
                    </p>
                  </div>

                  <img
                    src={item.image}
                    alt={item.iso}
                    width={68}
                    height={90}
                    className="h-[60px] w-[45px] object-contain md:h-[90px] md:w-[68px]"
                  />
                </div>

                {/* Bottom */}
                <h4
                  className={`mt-5 font-heading font-semibold tracking-[0.6px] text-[#1A1917]
                    ${
                      item.title.length > 35
                        ? "text-[18px] leading-7 md:text-[20px]"
                        : "text-[18px] leading-7 md:text-[20px] md:leading-7"
                    }`}
                >
                  {item.title}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}