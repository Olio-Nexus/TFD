import Image from "next/image";

interface WhyChooseItem {
  /** Either a path to an SVG asset (e.g. "/icons/house.svg") or a key from ICONS. */
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsProps {
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
  items: WhyChooseItem[];
  note?: string;
}

/* SVG assets keyed by a semantic name. Pass an ".svg" path in the data to use a
   bespoke asset directly instead of one of these keys. */
const ICONS: Record<string, string> = {
  house: "/areas-we-serve/icons/home.svg",
  slope: "/areas-we-serve/icons/mountains.svg",
  "low-clearance": "/areas-we-serve/icons/building2.svg",
  construction: "/areas-we-serve/icons/construction.svg",
  night: "/areas-we-serve/icons/moon.svg",
  ute: "/areas-we-serve/icons/Truck.svg",
};

function ItemIcon({ icon }: { icon: string }) {
  const src = icon.endsWith(".svg") ? icon : ICONS[icon] ?? ICONS.house;
  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      width={48}
      height={48}
      className="h-9 w-9 lg:h-12 lg:w-12"
    />
  );
}

/* Small red cross-hair drawn at each corner of the desktop grid. */
function CornerPlus({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute hidden h-4 w-4 lg:block ${className}`}
    >
      <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-[var(--accent)]" />
      <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-[var(--accent)]" />
    </span>
  );
}

export default function WhyChooseUs({
  tag = "Why Choose TerraForma",
  title,
  highlight,
  description,
  items,
  note,
}: WhyChooseUsProps) {
  const parts = highlight ? title.split(highlight) : [title];
  const total = items.length;

  return (
    <section className="bg-[#F4F1EB] py-12 md:py-20">
      <div className="container-custom flex flex-col gap-8 lg:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3 lg:items-center lg:text-center">
          <div className="flex items-center gap-3 lg:gap-4">
            <span className="h-px w-3 bg-[var(--accent)] lg:w-5" />
            <span className="tag">{tag}</span>
          </div>

          <h2
            className="
              font-heading text-[24px] font-semibold leading-[30px] tracking-[-1px]
              text-[#1A1917]
              lg:text-[48px] lg:leading-[56px] lg:tracking-[-2px]
            "
          >
            {parts[0]}
            {highlight && (
              <span className="text-[var(--accent)]">{highlight}</span>
            )}
            {parts[1]}
          </h2>

          {description && (
            <p className="body lg:mx-auto lg:max-w-[900px]">{description}</p>
          )}
        </div>

        {/* Items */}
        <div className="relative">
          {/* Desktop dashed grid */}
          <div
            className="
              hidden border border-dashed border-[rgba(86,85,79,0.3)] p-8
              lg:block
            "
          >
            <CornerPlus className="-left-2 -top-2" />
            <CornerPlus className="-right-2 -top-2" />
            <CornerPlus className="-bottom-2 -left-2" />
            <CornerPlus className="-bottom-2 -right-2" />

            <div className="grid grid-cols-3">
              {items.map((item, index) => {
                const isLastCol = index % 3 === 2;
                const isLastRow = index >= total - (total % 3 || 3);

                return (
                  <div
                    key={item.title}
                    className={`
                      flex flex-col items-center gap-10 px-6 py-10 text-center
                      border-dashed border-[rgba(86,85,79,0.3)]
                      ${!isLastCol ? "border-r" : ""}
                      ${!isLastRow ? "border-b" : ""}
                    `}
                  >
                    <ItemIcon icon={item.icon} />
                    <div className="flex flex-col gap-4">
                      <h3 className="font-heading text-[20px] font-semibold leading-[28px] tracking-[0.6px] text-[#1A1917]">
                        {item.title}
                      </h3>
                      <p className="body">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile cards */}
          <div className="flex flex-col gap-3 lg:hidden">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-[4px] bg-white p-3"
              >
                <ItemIcon icon={item.icon} />
                <h3 className="font-heading text-[18px] font-semibold leading-6 tracking-[-0.1px] text-[#1A1917]">
                  {item.title}
                </h3>
                <p className="body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        {note && (
          <p className="text-[14px] font-medium leading-[26px] text-[#1A1917] lg:text-center lg:text-[16px]">
            Note:
            <span className="text-[#56554F]">
              {note.replace(/^Note:\s*/, " ")}
            </span>
          </p>
        )}
      </div>
    </section>
  );
}
