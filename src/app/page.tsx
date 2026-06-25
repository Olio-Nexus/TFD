import AboutHero from "@/components/home/AboutHero";
import CaseStudies from "@/components/home/CaseStudies";
import CompanyIntro from "@/components/home/CompanyIntro";
import ContactCTA from "@/components/home/ContactCTA";
import FaqSection from "@/components/home/FaqSection";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import IndustriesSection from "@/components/home/IndustriesSection";
import InsightsSection from "@/components/home/InsightsSection";
import OurServices from "@/components/home/OurServices";
import StatsBar from "@/components/home/StatsBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";


export default function HomePage() {
  return (
    <>
     <HomeHeroSection/>
     <CompanyIntro/>
     <StatsBar/>
     <OurServices/>
     <WhyChooseUs/>
     <AboutHero/>
     <IndustriesSection/>
     <HowItWorks/>
     <CaseStudies/>
     <InsightsSection/>
     <ContactCTA/>
     <FaqSection/> 
    </>
  );
}