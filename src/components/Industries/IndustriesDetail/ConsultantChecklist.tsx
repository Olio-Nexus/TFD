import Image from "next/image";

type ChecklistItem = {
  icon: string;
  alt: string;
  text: string;
};

export interface ConsultantChecklistProps {
  tag?: string;
  title: string;
  highlight?: string;
  items: ChecklistItem[];
}

function ChecklistCard({ item }: { item: ChecklistItem }) {
  return (
    <div
      className="
        flex min-h-[210px] flex-col items-center justify-center
        rounded-[6px]
        bg-[var(--bg-alt)]
        px-6
        py-6
        text-center
      "
    >
      <div className="relative mb-5 h-16 w-16 shrink-0">
        <Image
          src={item.icon}
          alt={item.alt}
          fill sizes="64px"
          className="object-contain"
        />
      </div>

      <p className="body max-w-[317px] text-[16px] leading-[26px] text-[#101010]!">
        {item.text}
      </p>
    </div>
  );
}

export default function ConsultantChecklist({
  tag = "Consultant Pre-Qualification Checklist",
  title,
  highlight,
  items,
}: ConsultantChecklistProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container-custom">

        {/* Heading */}

        <div className="mx-auto flex max-w-[867px] flex-col items-center gap-5 text-center">

          <div className="flex items-center gap-4">

            <span className="h-px w-5 bg-[var(--accent)]" />

            <span className="tag">{tag}</span>

          </div>

          <h2 className="heading-lg max-w-[867px] text-[var(--surface-dark)]">
            {parts[0]}
            {highlight && <span className="text-[var(--accent)]">{highlight}</span>}
            {parts[1]}
          </h2>

        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {items.slice(0, 3).map((item, index) => (
            <ChecklistCard key={index} item={item} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {items.slice(3).map((item, index) => (
            <ChecklistCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
