
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TeamTrainingSection } from "@/components/TeamTrainingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-fondo">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamTrainingSection />
      <TestimonialsSection />
      <ContactSection />
      <ExperiencesSection />
      <Footer />
    </div>
  );
};

export default Index;
