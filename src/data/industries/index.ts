import type { Industry, IndustrySection } from "@/types/industry";

import { industrySeo } from "./seo";

import { commercialDevelopmentSections } from "./commercial-development";
import { geotechnicalConsultantsSections } from "./geotechnical-consultants";
import { environmentalConsultantsSections } from "./environmental-consultants";
import { governmentBodiesUtilitiesSections } from "./government-bodies-utilities";
import { civilInfrastructureSections } from "./civil-infrastructure";
import { miningResourcesSections } from "./mining-resources";

/**
 * Build an Industry by pairing its content sections with the meta + JSON-LD
 * sourced from the SEO spec (see ./seo.ts). The `slug` is the canonical route
 * slug and must match the schema URL in the spec.
 */
function buildIndustry(slug: string, sections: IndustrySection[]): Industry {
  const seo = industrySeo[slug];
  if (!seo) {
    throw new Error(`Missing SEO entry for industry slug "${slug}"`);
  }
  return {
    slug,
    seo: { title: seo.title, description: seo.description },
    schema: seo.schema,
    faqSchema: seo.faqSchema,
    sections,
  };
}

export const industries: Industry[] = [
  buildIndustry("commercial", commercialDevelopmentSections),
  buildIndustry("geotechnical-consultants", geotechnicalConsultantsSections),
  buildIndustry("environmental-consultant", environmentalConsultantsSections),
  buildIndustry("government-bodies-utilities", governmentBodiesUtilitiesSections),
  buildIndustry("civil-infrastructure", civilInfrastructureSections),
  buildIndustry("mining-resources", miningResourcesSections),
];
