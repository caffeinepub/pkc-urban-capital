import { Building2 } from 'lucide-react';

interface SiteHeaderProps {
  onConsultationClick: () => void;
}

export default function SiteHeader({ onConsultationClick }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
            <Building2 className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-heading font-bold text-primary tracking-tight">
              PKC Urban Capital
            </h1>
            <p className="text-xs text-muted-foreground">Premium Commercial Advisory</p>
          </div>
        </div>

        <button
          onClick={onConsultationClick}
          className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 shadow-gold-glow"
        >
          Get Consultation
        </button>
      </div>
    </header>
  );
}
