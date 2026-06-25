import AboutSection from "@/components/about/AboutSection";
import AboutStory from "@/components/about/AboutStory";
import CertificationsSection from "@/components/about/CertificationsSection";
import EquipmentSafetySection from "@/components/about/EquipmentSafetySection";
import NSWCoverageSection from "@/components/about/NSWCoverageSection";
import StatsStrip from "@/components/about/StatsStrip";
import AboutFaq from "@/components/about/AboutFaq";
import AboutCta from "@/components/about/AboutCta"


export default function AboutPage() {
  return (
  <>
   <AboutSection/>
   <StatsStrip/>
   <AboutStory/>
   <EquipmentSafetySection/>
   <CertificationsSection/>
   <NSWCoverageSection/>
   <AboutCta/>
   <AboutFaq/>
   </>
  )
}