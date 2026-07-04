import { IndustrySection } from "@/types/industry";

import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ServicesIndustries from "./ServicesIndustries";
import HowItWorksIndustries from "./HowItWorksIndustries";
import ConsultantChecklist from "./ConsultantChecklist";
import WhyChooseUsIndustries from "./WhyChooseUsIndustries";
import FaqSection from "./FaqSection";
import CtaSection from "./CtaSection";
import CaseStudiesServices from "@/components/services/detail/CaseStudiesServices";

type Props = {
  sections: IndustrySection[];
};

export default function IndustriesRenderer({
  sections,
}: Props) {
  return (
    <>
      {sections.map((section, index) => {
        const key = `${section.type}-${index}`;

        switch (section.type) {
          case "hero":
            return <Hero key={key} {...section.data} />;

          case "about":
            return <AboutSection key={key} {...section.data} />;

          case "services":
            return <ServicesIndustries key={key} {...section.data} />;

          case "consultantChecklist":
          return (
            <ConsultantChecklist key={key} {...section.data} />
          );
          
          case "whyChooseUs":
            return (
              <WhyChooseUsIndustries key={key} {...section.data} />
            );

          case "howItWorks":
            return (
              <HowItWorksIndustries key={key} {...section.data} />
            );
            
          case "caseStudies":
            return (
              <CaseStudiesServices key={key} {...section.data} />
            );

          case "faq":
            return <FaqSection key={key} {...section.data} />;

          case "cta":
            return <CtaSection key={key} {...section.data} />;

          default:
            return null;
        }
      })}
    </>
  );
}
