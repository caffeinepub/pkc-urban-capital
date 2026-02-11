import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from './components/ui/sonner';
import SiteHeader from './components/layout/SiteHeader';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FeaturedPropertiesSection from './components/sections/FeaturedPropertiesSection';
import WhyInvestPuneSection from './components/sections/WhyInvestPuneSection';
import InvestorCalculatorSection from './components/sections/InvestorCalculatorSection';
import LeadCaptureFormSection from './components/sections/LeadCaptureFormSection';
import SiteFooter from './components/layout/SiteFooter';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import FloatingCallButton from './components/FloatingCallButton';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <div className="min-h-screen bg-background text-foreground pb-24">
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
            <LeadCaptureFormSection ref={leadFormRef} />
          </main>

          <SiteFooter />
          <FloatingWhatsAppButton />
          <FloatingCallButton />
        </div>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
