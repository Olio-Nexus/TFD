import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type Props = {
  number: string;
  category: string;
  title: string;
  highlight?: string;
  description: string;
  image: string;
  slug: string;
  imagePosition?: "left" | "right";
  background?: "white" | "alt";
};

export default function ServiceListing({
  number,
  category,
  title,
  highlight,
  description,
  image,
  slug,
  imagePosition = "left",
  background = "white",
}: Props) {
  return (
    <section
      className={clsx(
        background === "alt"
          ? "bg-[var(--bg-alt)]"
          : "bg-white"
      )}
    >
      <div className="container-custom">
        <div
          className={clsx(
            "flex flex-col gap-5 py-5 lg:items-center lg:gap-14 lg:py-20",
            imagePosition === "right"
              ? "lg:flex-row-reverse"
              : "lg:flex-row"
          )}
        >
          {/* IMAGE */}
          <div className="order-2 w-full lg:order-none lg:flex-1">
            <div
              className="
                relative overflow-hidden
                rounded
                h-[362px]
                border border-[rgba(86,85,79,0.5)]
                lg:h-[520px]
                lg:rounded-lg
              "
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>

          {/* CONTENT */}
          <div className="order-1 flex w-full flex-col gap-4 lg:flex-1 lg:gap-6">
            {/* EYEBROW */}
            <div className="flex items-center gap-[10px] lg:gap-5">
              <span
                className="
                  font-mono
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[1.4px]
                  text-[var(--accent)]
                  lg:text-[14px]
                "
              >
                {number}
              </span>

              <span className="h-px w-3 bg-[var(--accent)] lg:w-6" />

              <span
                className="
                  font-mono
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[1.4px]
                  text-[var(--muted)]
                  lg:text-[14px]
                "
              >
                {category}
              </span>
            </div>

            {/* TITLE + TEXT */}
            <div className="flex flex-col gap-4">
              <h2
                className="
                  font-heading
                  text-[24px]
                  font-semibold
                  leading-[30px]
                  tracking-[-1px]
                  text-[var(--text)]
                  lg:text-[48px]
                  lg:leading-[56px]
                  lg:tracking-[-2px]
                "
              >
                {title}{" "}
                {highlight && (
                  <span className="text-[var(--accent)]">
                    {highlight}
                  </span>
                )}
              </h2>

              <p
                className="
                  text-[16px]
                  leading-[26px]
                  text-[var(--muted)]
                  lg:text-[18px]
                  lg:leading-[30px]
                "
              >
                {description}
              </p>
            </div>

            {/* BUTTON */}
            <div className="pt-1 lg:pt-8">
              <Link
                href={`/services/${slug}`}
                className="
                    inline-flex
                    h-[44px]
                    w-[136px]
                    items-center
                    justify-center
                    whitespace-nowrap
                    rounded-[2px]
                    border
                    border-[var(--muted)]
                    px-6
                    font-mono
                    text-[14px]
                    font-medium
                    uppercase
                    tracking-[0.4px]
                    text-[var(--text)]
                    transition-all
                    hover:bg-[var(--text)]
                    hover:text-white
                "
                >
                Learn More
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}