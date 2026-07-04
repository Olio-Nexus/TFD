import type { Metadata } from "next";

import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, organizationSchema, type JsonLdSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Resources & Guides | TerraForma Drilling",
  description:
    "Browse TerraForma Drilling's collection of guides and resources. Select a topic below to learn more.",
};

const pageSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/blog`,
  name: "Resources and Guides | TerraForma Drilling",
  url: `${SITE_URL}/blog`,
  description:
    "Browse TerraForma Drilling's collection of guides and resources. Select a topic below to learn more.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources and Guides",
        item: `${SITE_URL}/blog`,
      },
    ],
  },
};

export default function Blog() {
  return (
    <>
      <JsonLd schemas={[organizationSchema, pageSchema]} />
      <BlogHero />
      <BlogGrid />
    </>
  );
}
