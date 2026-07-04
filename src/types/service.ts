import type { HeroProps } from "@/components/services/detail/Hero";
import type { OurProcessProps } from "@/components/services/detail/OurProcess";
import type { SpecsProps } from "@/components/services/detail/Specs";
import type { EngineeringProjectsProps } from "@/components/services/detail/EngineeringProjects";
import type { SamplingCapabilitiesProps } from "@/components/services/detail/SamplingCapabilities";
import type { HowItWorksProps } from "@/components/services/detail/HowItWorksServices";
import type { WhyChooseUsProps } from "@/components/services/detail/WhyChooseUsServices";
import type { CaseStudiesProps } from "@/components/services/detail/CaseStudiesServices";
import type { GalleryProps } from "@/components/services/detail/Gallery";
import type { WhereWeDrillProps } from "@/components/services/detail/WhereWeDrill";
import type { ServicesCTAProps } from "@/components/services/detail/ServicesCta";
import type { FaqSectionProps } from "@/components/services/detail/FaqSection";

export type ServiceSection =
  | { type: "hero"; data: HeroProps }
  | { type: "ourProcess"; data: OurProcessProps }
  | { type: "specs"; data: SpecsProps }
  | { type: "engineeringProjects"; data: EngineeringProjectsProps }
  | { type: "samplingCapabilities"; data: SamplingCapabilitiesProps }
  | { type: "howItWorks"; data: HowItWorksProps }
  | { type: "whyChooseUs"; data: WhyChooseUsProps }
  | { type: "caseStudies"; data: CaseStudiesProps }
  | { type: "gallery"; data: GalleryProps }
  | { type: "whereWeDrill"; data: WhereWeDrillProps }
  | { type: "cta"; data: ServicesCTAProps }
  | { type: "faq"; data: FaqSectionProps };

export type JsonLdSchema = Record<string, unknown>;

export interface Service {
  slug: string;

  seo: {
    title: string;
    description: string;
  };

  /** Page-specific JSON-LD (structured data). */
  schema?: JsonLdSchema;

  /** FAQPage JSON-LD (structured data). */
  faqSchema?: JsonLdSchema;

  sections: ServiceSection[];
}
