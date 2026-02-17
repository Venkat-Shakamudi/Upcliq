import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import useScrollReveal from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContactButton />
    </>
  );
};

export default Index;
