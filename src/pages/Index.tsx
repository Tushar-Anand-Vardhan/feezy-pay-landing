import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import UseCasesSection from "@/components/UseCasesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import VideoSection from "../components/VideoSection";
import AskClaudeSection from "@/components/AskClaudeSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <HeroSection />
      
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      <section id="demo" className="scroll-mt-24">
        <VideoSection />
      </section>
      
      {/* <section id="use-cases">
        <UseCasesSection />
      </section> */}
      
      <section id="benefits">
        <BenefitsSection />
      </section>

      <section id="claude" className="scroll-mt-24">
        <AskClaudeSection />
      </section>
      
      {/* <TestimonialsSection /> */}
      
      <section id="pricing">
        <PricingSection />
      </section>
      
      <section id="faq">
        <FAQSection />
      </section>
      
      <FinalCTASection />
      
      <Footer />
    </main>
  );
};

export default Index;
