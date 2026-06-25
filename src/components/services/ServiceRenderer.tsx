import { ServiceSection } from "@/types/service";

import Hero from "./detail/Hero";
import OurProcess from "./detail/OurProcess";
import Specs from "./detail/Specs";
import EngineeringProjects from "./detail/EngineeringProjects";
import SamplingCapabilities from "./detail/SamplingCapabilities";
import HowItWorksServices from "./detail/HowItWorksServices";
import WhyChooseUsServices from "./detail/WhyChooseUsServices";
import CaseStudiesServices from "./detail/CaseStudiesServices";
import Gallery from "./detail/Gallery";
import WhereWeDrill from "./detail/WhereWeDrill";
import ServicesCta from "./detail/ServicesCta";
import FaqSection from "./detail/FaqSection";

type Props = {
  sections: ServiceSection[];
};

export default function ServiceRenderer({
  sections,
}: Props) {
  return (
    <main>
      {sections.map((section, index) => {
        const key = `${section.type}-${index}`;

        switch (section.type) {
          case "hero":
            return <Hero key={key} {...section.data} />;

          case "ourProcess":
            return <OurProcess key={key} {...section.data} />;

          case "specs":
            return <Specs key={key} {...section.data} />;

          case "engineeringProjects":
            return (
              <EngineeringProjects
                key={key}
                {...section.data}
              />
            );

          case "samplingCapabilities":
            return (
              <SamplingCapabilities
                key={key}
                {...section.data}
              />
            );

          case "howItWorks":
            return (
              <HowItWorksServices
                key={key}
                {...section.data}
              />
            );

          case "whyChooseUs":
            return (
              <WhyChooseUsServices
                key={key}
                {...section.data}
              />
            );

          case "caseStudies":
            return (
              <CaseStudiesServices
                key={key}
                {...section.data}
              />
            );

          case "gallery":
            return <Gallery key={key} {...section.data} />;

          case "whereWeDrill":
            return (
              <WhereWeDrill
                key={key}
                {...section.data}
              />
            );

          case "cta":
            return (
              <ServicesCta
                key={key}
                {...section.data}
              />
            );

          case "faq":
            return <FaqSection key={key} {...section.data} />;

          default:
            return null;
        }
      })}
    </main>
  );
}
     