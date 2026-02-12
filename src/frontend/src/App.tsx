import { useRef } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from './components/ui/sonner';
import SiteHeader from './components/layout/SiteHeader';
import SiteFooter from './components/layout/SiteFooter';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import OurApproachSection from './components/sections/OurApproachSection';
import FeaturedPropertiesSection from './components/sections/FeaturedPropertiesSection';
import WhyInvestPuneSection from './components/sections/WhyInvestPuneSection';
import PuneWestGrowthOutlookSection from './components/sections/PuneWestGrowthOutlookSection';
import InvestorCalculatorSection from './components/sections/InvestorCalculatorSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import LeadCaptureFormSection from './components/sections/LeadCaptureFormSection';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import FloatingCallButton from './components/FloatingCallButton';

function App() {
  const propertiesRef = useRef<HTMLElement | null>(null);
  const consultationRef = useRef<HTMLElement | null>(null);

  const scrollToProperties = () => {
    propertiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen flex flex-col">
        <SiteHeader onConsultationClick={scrollToConsultation} />
        
        <main className="flex-1">
          <HeroSection 
            onViewInvestments={scrollToProperties}
            onGetConsultation={scrollToConsultation}
          />
          <AboutSection />
          <OurApproachSection />
          <FeaturedPropertiesSection ref={propertiesRef} />
          <WhyInvestPuneSection />
          <PuneWestGrowthOutlookSection />
          <InvestorCalculatorSection />
          <TestimonialsSection />
          <LeadCaptureFormSection ref={consultationRef} />
        </main>

        <SiteFooter />
        
        <FloatingWhatsAppButton />
        <FloatingCallButton />
      </div>
      
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
