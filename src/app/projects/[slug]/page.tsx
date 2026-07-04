import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import ProjectDetailBody from "@/components/projects/ProjectDetailBody";
import CtaSection from "@/components/Industries/IndustriesDetail/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { projects } from "@/data/projects/projects";
import { SITE_URL, organizationSchema, type JsonLdSchema } from "@/lib/seo";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | TerraForma Drilling`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const caseStudySchema: JsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/projects/${project.slug}`,
    name: project.title,
    description: project.description,
    image: `${SITE_URL}${project.gallery?.[0] ?? project.image}`,
    url: `${SITE_URL}/projects/${project.slug}`,
    about: project.category,
    isPartOf: { "@id": `${SITE_URL}/projects` },
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <JsonLd schemas={[organizationSchema, caseStudySchema]} />
      <ProjectDetailHero project={project} />
      <ProjectDetailBody project={project} />
      <CtaSection
        title="Let's Discuss the Drilling Needs of Your Project"
        highlight="Drilling Needs of Your Project"
        description="TerraForma Drilling provides geotechnical drilling, environmental drilling, SPT testing, and monitoring bore installation services across Sydney and regional NSW."
        secondaryLabel="View Services"
      />
    </>
  );
}
