export type ServiceSection =
  | { type: "hero"; data: any }
  | { type: "ourProcess"; data: any }
  | { type: "specs"; data: any }
  | { type: "engineeringProjects"; data: any }
  | { type: "samplingCapabilities"; data: any }
  | { type: "howItWorks"; data: any }
  | { type: "whyChooseUs"; data: any }
  | { type: "caseStudies"; data: any }
  | { type: "gallery"; data: any }
  | { type: "whereWeDrill"; data: any }
  | { type: "cta"; data: any }
  | { type: "faq"; data: any };

export interface Service {
  slug: string;

  seo: {
    title: string;
    description: string;
  };

  sections: ServiceSection[];
}