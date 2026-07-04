
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { services } from "@/data/services";
import ServiceRenderer from "@/components/services/ServiceRenderer";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, type JsonLdSchema } from "@/lib/seo";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(
    (service) => service.slug === slug
  );

  if (!service) {
    return {};
  }

  return {
    title: service.seo?.title,
    description: service.seo?.description,
  };
}

export default async function Page({
  params,
}: Props) {
  const { slug } = await params;

  const service = services.find(
    (service) => service.slug === slug
  );

  if (!service) {
    notFound();
  }

  const schemas: JsonLdSchema[] = [organizationSchema];
  if (service.schema) schemas.push(service.schema);
  if (service.faqSchema) schemas.push(service.faqSchema);

  return (
    <>
      <JsonLd schemas={schemas} />
      <ServiceRenderer
        sections={service.sections}
      />
    </>
  );
}

