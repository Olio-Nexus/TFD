import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { industries } from "@/data/industries";
import IndustriesRenderer from "@/components/Industries/IndustriesDetail/IndustriesRenderer";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, type JsonLdSchema } from "@/lib/seo";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const industry = industries.find(
    (industry) => industry.slug === slug
  );

  if (!industry) {
    return {};
  }

  return {
    title: industry.seo?.title,
    description: industry.seo?.description,
  };
}

export default async function Page({
  params,
}: Props) {
  const { slug } = await params;

  const industry = industries.find(
    (industry) => industry.slug === slug
  );

  if (!industry) {
    notFound();
  }

  const schemas: JsonLdSchema[] = [organizationSchema];
  if (industry.schema) schemas.push(industry.schema);
  if (industry.faqSchema) schemas.push(industry.faqSchema);

  return (
    <>
      <JsonLd schemas={schemas} />
      <IndustriesRenderer sections={industry.sections} />
    </>
  );
}
