import type { Area, AreaSection } from "@/types/area";

import { areaSeo } from "./seo";

import { nswSections } from "./nsw";
import { sydneySections } from "./sydney";
import { wollongongSections } from "./wollongong";
import { newcastleSections } from "./newcastle";
import { newEnglandSections } from "./new-england";
import { centralWestSections } from "./central-west";
import { riverinaSections } from "./riverina";
import { northCoastSections } from "./north-coast";
import { southernTablelandsSections } from "./southern-tablelands";

/**
 * Build an Area by pairing its content sections with the meta + JSON-LD
 * sourced from the SEO spec (see ./seo.ts). The `slug` is the canonical route
 * slug and must match the schema URL in the spec.
 */
function buildArea(slug: string, sections: AreaSection[]): Area {
  const seo = areaSeo[slug];
  if (!seo) {
    throw new Error(`Missing SEO entry for area slug "${slug}"`);
  }
  return {
    slug,
    seo: { title: seo.title, description: seo.description },
    schema: seo.schema,
    faqSchema: seo.faqSchema,
    sections,
  };
}

export const areas: Area[] = [
  buildArea("nsw", nswSections),
  buildArea("sydney", sydneySections),
  buildArea("wollongong", wollongongSections),
  buildArea("newcastle", newcastleSections),
  buildArea("new-england-northwest", newEnglandSections),
  buildArea("central-west-nsw", centralWestSections),
  buildArea("riverina-murray", riverinaSections),
  buildArea("north-coast-nsw", northCoastSections),
  buildArea("southern-tablelands", southernTablelandsSections),
];
