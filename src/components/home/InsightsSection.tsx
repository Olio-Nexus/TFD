import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Post = {
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  href: string;
};

const posts: Post[] = [
  {
    title:
      "Dial Before You Dig: What Every NSW Developer and Driller Needs to Know",
    excerpt:
      "A DBYD enquiry is required by law before any drilling or excavation in Australia. This guide covers the process, timing, and why every drilling job begins with a completed DBYD enquiry.",
    image: "/images/insight-1.png",
    readTime: "5 MIN READ",
    href: "/blog/dial-before-you-dig",
  },
  {
    title:
      "What Is SPT Testing? A Plain-English Guide for Engineers and Developers",
    excerpt:
      "The standard penetration test is the most common in-situ geotechnical test in Australia. This guide explains what it measures and how to interpret results.",
    image: "/images/insight-2.png",
    readTime: "8 MIN READ",
    href: "/blog/spt-testing",
  },
  {
    title:
      "Monitoring Bore vs Monitoring Well: NSW Terminology Explained",
    excerpt:
      "In NSW, WaterNSW and most geotechnical consultants use the term monitoring bore. This guide explains the differences and when each is used.",
    image: "/images/insight-3.png",
    readTime: "6 MIN READ",
    href: "/blog/monitoring-bore-vs-monitoring-well",
  },
];

function BlogCard({ post }: { post: Post }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[4px] md:rounded-[6px] bg-transparent transition-all duration-300 shadow-[0px_50px_50px_rgba(0,0,0,0.04),0px_13px_28px_rgba(0,0,0,0.02)]">
      {/* Image */}
      <Link href={post.href} className="block overflow-hidden">
        <div className="relative aspect-[362/196] md:aspect-[413/326] w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill sizes="(max-width: 1024px) 100vw, 413px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col border border-[#D1D1D1] border-t-0 p-3 md:p-6 transition-colors duration-300 group-hover:bg-white">
        <div className="flex-1">
          <h3 className="font-heading text-[16px] md:text-[20px] font-semibold leading-[22px] md:leading-[140%] tracking-[-0.1px] md:tracking-[0.6px] text-[#1A1917]">
            {post.title}
          </h3>

          <p className="mt-2 md:mt-3 line-clamp-3 text-[16px] leading-[26px] text-[#56554F]">
            {post.excerpt}
          </p>
        </div>

        {/* Mobile */}
        <div className="mt-2 md:hidden">
          <span className="font-mono text-[12px] font-medium uppercase tracking-[1.5px] text-[#56554F]">
            {post.readTime}
          </span>
        </div>

        {/* Desktop */}
        <div className="mt-5 hidden border-t border-[#D1D1D1] pt-5 md:block">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[14px] font-medium uppercase tracking-[1px] text-[#56554F]">
              {post.readTime}
            </span>

            <Link
              href={post.href}
              className="group/link inline-flex items-center gap-2 text-[14px] font-medium tracking-[0.5px] text-[#E53935]"
            >
              Read the guide
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function InsightsSection() {
  return (
    <section className="bg-[#F4F1EB] py-5 md:py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-center gap-[10px]">
            <div className="h-px w-3 md:w-5 bg-[#E53935]" />

            <span className="font-mono text-[14px] font-medium uppercase tracking-[1.4px] text-[#E53935]">
              From The Field
            </span>
          </div>

          <div className="mt-3 md:mt-5">
            <h2 className="font-heading text-[24px] leading-[30px] tracking-[-1px] font-semibold text-[#1A1917] md:text-[48px] md:leading-[1.1] md:tracking-[-2px]">
              Geotechnical Drilling{" "}
              <span className="text-[#E53935]">Insights</span>
            </h2>

            <p className="mt-2 md:mt-3 max-w-[635px] text-[16px] leading-[26px] text-[#56554F]">
              We offer practical guidance for engineers, consultants, and
              developers working in NSW.
            </p>
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-5 flex flex-col gap-3 lg:hidden">
          {posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>

        {/* Desktop */}
        <div className="mt-14 hidden grid-cols-3 gap-5 lg:grid">
          {posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-5 md:mt-14">
          <Link
            href="/blog"
            className="
              flex
              h-[44px]
              w-full
              items-center
              justify-center
              border
              border-[#56554F]
              font-mono
              text-[14px]
              font-medium
              uppercase
              tracking-[0.4px]
              text-[#1A1917]
              transition
              hover:bg-[#1A1917]
              hover:text-white

              md:mx-auto
              md:w-fit
              md:px-6
            "
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}