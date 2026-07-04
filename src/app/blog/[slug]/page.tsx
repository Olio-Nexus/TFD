import { notFound } from "next/navigation";
import type { Metadata } from "next";

import BlogArticleBody from "@/components/blog/BlogArticleBody";
import BlogArticleHero from "@/components/blog/BlogArticleHero";
import CtaSection from "@/components/Industries/IndustriesDetail/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { blogPosts } from "@/data/blog/posts";
import { SITE_URL, organizationSchema, type JsonLdSchema } from "@/lib/seo";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return {};
  }

  const title = post.titleHighlight
    ? `${post.title} ${post.titleHighlight}`
    : post.title;

  return {
    title: `${title} | TerraForma Drilling`,
    description: post.description,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const headline = post.titleHighlight
    ? `${post.title} ${post.titleHighlight}`
    : post.title;

  const articleSchema: JsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}`,
    headline,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    articleSection: post.category,
    isPartOf: { "@id": `${SITE_URL}/blog` },
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <JsonLd schemas={[organizationSchema, articleSchema]} />
      <BlogArticleHero post={post} />
      <BlogArticleBody post={post} />
      <CtaSection
        title="Need Practical Site Investigation Support?"
        highlight="Site Investigation Support?"
        description="TerraForma Drilling supports geotechnical and environmental consultants with drilling, testing, and groundwater monitoring services across Sydney and NSW. Get a quote or view our services."
        secondaryLabel="View Services"
      />
    </>
  );
}
