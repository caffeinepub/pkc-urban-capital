import { ArrowRight, Award } from 'lucide-react';
import { COPY } from '../../content/copy';

interface HeroSectionProps {
  onViewInvestments: () => void;
  onGetConsultation: () => void;
}

export default function HeroSection({ onViewInvestments, onGetConsultation }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/assets/generated/pkc-hero-bg-texture.dim_2400x1350.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="container relative z-10 px-4 py-20 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary backdrop-blur-sm">
            <Award className="h-4 w-4" />
            <span className="font-medium">Authorized Channel Partner – Commercial Real Estate</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground">
            {COPY.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary font-medium">
            {COPY.hero.subheadline}
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Builder-direct inventory across Pune's growing commercial corridors
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onViewInvestments}
              className="inline-flex items-center justify-center rounded-md text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-gold-glow hover:shadow-lg hover:scale-105 w-full sm:w-auto"
            >
              {COPY.hero.ctaViewInvestments}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button
              onClick={onGetConsultation}
              className="inline-flex items-center justify-center rounded-md text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-primary/50 bg-transparent text-primary hover:bg-primary/10 h-12 px-8 w-full sm:w-auto"
            >
              {COPY.hero.ctaGetConsultation}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
