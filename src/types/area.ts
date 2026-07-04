import type { AreaHeroProps } from "@/components/areaweserve/detail/AreaHero";
import type { AboutSectionProps } from "@/components/areaweserve/detail/AboutSection";
import type { ServicesAWSProps } from "@/components/areaweserve/detail/ServicesAWS";
import type { AreaCoverageProps } from "@/components/areaweserve/detail/AreaCoverage";
import type { WhereWeDrillProps } from "@/components/areaweserve/detail/WhereWeDrill";
import type { WhyChooseUsProps } from "@/components/areaweserve/detail/WhyChooseUs";
import type { FaqSectionProps } from "@/components/areaweserve/detail/FaqSection";
import type { CtaSectionProps } from "@/components/areaweserve/detail/CtaSection";
import type { CaseStudiesProps } from "@/components/services/detail/CaseStudiesServices";

export type AreaSection =
  | { type: "hero"; data: AreaHeroProps }
  | { type: "about"; data: AboutSectionProps }
  | { type: "services"; data: ServicesAWSProps }
  | { type: "coverage"; data: AreaCoverageProps }
  | { type: "whereWeDrill"; data: WhereWeDrillProps }
  | { type: "whyChooseUs"; data: WhyChooseUsProps }
  | { type: "caseStudies"; data: CaseStudiesProps }
  | { type: "faq"; data: FaqSectionProps }
  | { type: "cta"; data: CtaSectionProps };

export type JsonLdSchema = Record<string, unknown>;

export interface Area {
  slug: string;

  seo: {
    title: string;
    description: string;
  };

  /** Page-specific JSON-LD (structured data). */
  schema?: JsonLdSchema;

  /** FAQPage JSON-LD (structured data). */
  faqSchema?: JsonLdSchema;

  sections: AreaSection[];
}
