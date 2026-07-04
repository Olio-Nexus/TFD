import { AreaSection } from "@/types/area";

import AreaHero from "./AreaHero";
import AboutSection from "./AboutSection";
import ServicesAWS from "./ServicesAWS";
import AreaCoverage from "./AreaCoverage";
import WhyChooseUs from "./WhyChooseUs";
import WhereWeDrill from "./WhereWeDrill";
import CtaSection from "./CtaSection";
import FaqSection from "./FaqSection";

type Props = {
  sections: AreaSection[];
};

export default function AreaRenderer({ sections }: Props) {
  return (
    <>
      {sections.map((section, index) => {
        const key = `${section.type}-${index}`;

        switch (section.type) {
          case "hero":
            return <AreaHero key={key} {...section.data} />;

          case "about":
            return <AboutSection key={key} {...section.data} />;

          case "services":
            return <ServicesAWS key={key} {...section.data} />;

          case "coverage":
            return <AreaCoverage key={key} {...section.data} />;

          case "whereWeDrill":
            return <WhereWeDrill key={key} {...section.data} />;

          case "whyChooseUs":
            return <WhyChooseUs key={key} {...section.data} />;

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
