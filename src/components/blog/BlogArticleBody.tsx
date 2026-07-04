import Image from "next/image";

import type { BlogPost } from "@/data/blog/posts";

export default function BlogArticleBody({ post }: { post: BlogPost }) {
  if (!post.content.length) return null;

  return (
    <section className="bg-[var(--bg-alt)] px-5 py-12 md:px-20 md:py-20">
      <div className="mx-auto flex max-w-[820px] flex-col">
        {post.content.map((block, i) => {
          const prev = i > 0 ? post.content[i - 1] : null;
          // Text blocks sit 20px apart; images get a 56px gap on desktop.
          const isImageBoundary =
            block.type === "image" || prev?.type === "image";
          const spacing =
            i === 0 ? "" : isImageBoundary ? "mt-5 md:mt-14" : "mt-5";

          if (block.type === "image") {
            return (
              <div
                key={i}
                className={`relative aspect-[362/221] w-full overflow-hidden rounded-[4px] border border-[rgba(86,85,79,0.5)] shadow-[1.81px_9.05px_3.62px_rgba(20,20,20,0.02),1.21px_5.43px_3.02px_rgba(20,20,20,0.08),0.6px_2.41px_2.41px_rgba(20,20,20,0.13),0px_0.6px_1.21px_rgba(20,20,20,0.15)] md:aspect-[820/456] md:border-0 md:shadow-none ${spacing}`}
              >
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 820px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(26,25,23,0.1)]" />
              </div>
            );
          }

          return (
            <div
              key={i}
              className={spacing}
            >
              {block.paragraphs.map((paragraph, j) => (
                <p
                  key={j}
                  className="text-[16px] leading-[26px] text-[var(--muted)] md:leading-[25px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
