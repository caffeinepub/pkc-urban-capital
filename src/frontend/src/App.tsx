import { useRef } from 'react';
import { ThemeProvider } from 'next-themes';
import SiteHeader from './components/layout/SiteHeader';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FeaturedPropertiesSection from './components/sections/FeaturedPropertiesSection';
import WhyInvestPuneSection from './components/sections/WhyInvestPuneSection';
import InvestorCalculatorSection from './components/sections/InvestorCalculatorSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import LeadCaptureFormSection from './components/sections/LeadCaptureFormSection';
import SiteFooter from './components/layout/SiteFooter';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

export default function App() {
  const propertiesRef = useRef<HTMLElement>(null);
  const leadFormRef = useRef<HTMLElement>(null);

  const scrollToProperties = () => {
    propertiesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToLeadForm = () => {
    leadFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader onConsultationClick={scrollToLeadForm} />
        
        <main>
          <HeroSection 
            onViewInvestments={scrollToProperties}
            onGetConsultation={scrollToLeadForm}
          />
          <AboutSection />
          <FeaturedPropertiesSection ref={propertiesRef} />
          <WhyInvestPuneSection />
          <InvestorCalculatorSection />
          <TestimonialsSection />
          <LeadCaptureFormSection ref={leadFormRef} />
        </main>

        <SiteFooter />
        <FloatingWhatsAppButton />
      </div>
    </ThemeProvider>
  );
}
