import Image from "next/image";

import type { BlogPost } from "@/data/blog/posts";

export default function BlogArticleHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-dark)] mt-[72px] px-5 py-12 md:px-20 md:py-20">
      {/* Decorative wave band (shared with the blog hub hero) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 226"
        preserveAspectRatio="xMidYMax slice"
        className="pointer-events-none absolute bottom-0 left-0 h-[226px] w-full"
      >
        <path
          d="M0 68.2237C261.818 -32.1053 480 160.526 807.273 48.1579C1047.27 -40.1316 1243.64 88.2895 1440 0V226H0V68.2237Z"
          fill="#F1E9DC"
          fillOpacity="0.1"
        />
      </svg>

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-start gap-5 md:items-center md:gap-14">
        {/* Text group: published date + title + description */}
        <div className="flex w-full flex-col items-start gap-5 md:items-center">
          {/* Published date */}
          <p className="font-mono text-[12px] font-medium uppercase tracking-[1px] text-white md:text-[14px] md:tracking-[1.4px]">
            Published {post.date}
          </p>

          {/* Title + description */}
          <div className="flex w-full flex-col items-start gap-3 md:items-center md:gap-4">
            <h1 className="max-w-[842px] text-left font-heading text-[36px] font-semibold leading-[40px] tracking-[-1px] text-white md:text-center md:text-[56px] md:leading-[64px] md:tracking-[-2px]">
              {post.title}
              {post.titleHighlight ? (
                <>
                  {" "}
                  <span className="text-[var(--accent)]">
                    {post.titleHighlight}
                  </span>
                </>
              ) : null}
            </h1>

            <p className="max-w-[792px] text-left text-[18px] leading-[26px] text-[#B8B8B8] md:text-center md:leading-[30px]">
              {post.description}
            </p>
          </div>
        </div>

        {/* Featured image */}
        <div className="relative aspect-[362/221] w-full overflow-hidden rounded-[4px] border border-[rgba(86,85,79,0.5)] shadow-[1.81px_9.05px_3.62px_rgba(20,20,20,0.02),1.21px_5.43px_3.02px_rgba(20,20,20,0.08),0.6px_2.41px_2.41px_rgba(20,20,20,0.13),0px_0.6px_1.21px_rgba(20,20,20,0.15)] md:aspect-[1280/604] md:border-0 md:shadow-none">
          <Image
            src="/images/blogHero.png"
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[rgba(26,25,23,0.1)]" />
        </div>
      </div>
    </section>
  );
}
