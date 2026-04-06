import { HeroSection } from "../components/home/HeroSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { StatsSection } from "../components/home/StatsSection";
import { CaseStudiesSection } from "../components/home/CaseStudiesSection";
import { TeamSection } from "../components/home/TeamSection";
import { ContactSection } from "../components/home/ContactSection";
import { Footer } from "../components/home/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <StatsSection />
      <CaseStudiesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
