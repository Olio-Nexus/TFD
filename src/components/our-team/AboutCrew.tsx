import Image from "next/image";

type Card = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const cards: Card[] = [
  {
    id: "01",
    title: "Experienced Drillers",
    description:
      "Hands-on drillers operating rigs, following bore plans, and delivering accurate field data on geotechnical and environmental projects.",
    icon: "/icons/administrator.svg",
  },
  {
    id: "02",
    title: "Operations & Estimation team",
    description:
      "Handles scheduling, mobilisation, documentation, and coordination to ensure smooth project delivery across NSW.",
    icon: "/icons/administrator-2.svg",
  },
  {
    id: "03",
    title: "Off sider",
    description:
      "Assists on-site drilling operations, equipment handling, and sampling while supporting safe and efficient field work.",
    icon: "/icons/construction.svg",
  },
];

export default function AboutCrew() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Heading */}
        <div className="mx-auto max-w-[875px]">
          <h2 className="heading-lg text-left md:text-center leading-[1.15]">
            A Crew of Engineers{" "}
            <span className="text-[var(--accent)]">
              Drilling for Engineers
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-3 md:gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="
                flex flex-col
                justify-between
                rounded-md
                border
                border-[var(--border)]
                bg-[var(--bg-alt)]
                p-3
                lg:min-h-[340px]
                lg:rounded-lg
                lg:p-6
              "
            >
              {/* Number */}
              <div className="flex justify-end">
                <div
                  className="
                    flex h-7 w-7 items-center justify-center
                    rounded
                    border
                    border-[var(--border)]
                    font-mono
                    text-[14px]
                    font-semibold
                    tracking-[1.2px]
                    text-[var(--muted)]
                    lg:h-9
                    lg:w-11
                    lg:text-base
                    lg:tracking-[1.6px]
                  "
                >
                  {card.id}
                </div>
              </div>

              {/* Content */}
              <div className="mt-3 flex flex-col lg:mt-0 lg:gap-8">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="h-9 w-9 lg:h-12 lg:w-12"
                />

                <div className="mt-3 lg:mt-0">
                  <h3
                    className="
                      font-heading
                      text-[18px]
                      font-semibold
                      leading-6
                      tracking-[-0.1px]
                      text-[var(--text)]
                      lg:text-[24px]
                      lg:leading-7
                      lg:tracking-[0.4px]
                    "
                  >
                    {card.title}
                  </h3>

                  <p className="body mt-3">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}