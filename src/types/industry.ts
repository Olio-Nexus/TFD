import type { HeroProps } from "@/components/Industries/IndustriesDetail/Hero";
import type { AboutSectionProps } from "@/components/Industries/IndustriesDetail/AboutSection";
import type { ServicesIndustriesProps } from "@/components/Industries/IndustriesDetail/ServicesIndustries";
import type { HowItWorksIndustriesProps } from "@/components/Industries/IndustriesDetail/HowItWorksIndustries";
import type { ConsultantChecklistProps } from "@/components/Industries/IndustriesDetail/ConsultantChecklist";
import type { WhyChooseUsIndustriesProps } from "@/components/Industries/IndustriesDetail/WhyChooseUsIndustries";
import type { FaqSectionProps } from "@/components/Industries/IndustriesDetail/FaqSection";
import type { CtaSectionProps } from "@/components/Industries/IndustriesDetail/CtaSection";
import type { CaseStudiesProps } from "@/components/services/detail/CaseStudiesServices";

export type IndustrySection =
  | { type: "hero"; data: HeroProps }
  | { type: "about"; data: AboutSectionProps }
  | { type: "services"; data: ServicesIndustriesProps }
  | { type: "howItWorks"; data: HowItWorksIndustriesProps }
  | { type: "consultantChecklist"; data: ConsultantChecklistProps }
  | { type: "whyChooseUs"; data: WhyChooseUsIndustriesProps }
  | { type: "caseStudies"; data: CaseStudiesProps }
  | { type: "faq"; data: FaqSectionProps }
  | { type: "cta"; data: CtaSectionProps };

export type JsonLdSchema = Record<string, unknown>;

export interface Industry {
  slug: string;

  seo: {
    title: string;
    description: string;
  };

  /** Page-specific JSON-LD (structured data). */
  schema?: JsonLdSchema;

  /** FAQPage JSON-LD (structured data). */
  faqSchema?: JsonLdSchema;

  sections: IndustrySection[];
}
