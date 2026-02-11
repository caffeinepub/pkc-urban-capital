import { Building2, Phone } from 'lucide-react';
import { CONTACT_CONFIG } from '../../config/contact';
import LoginButton from '../auth/LoginButton';

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
            <p className="text-xs text-muted-foreground hidden sm:block">Authorized Channel Partner</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LoginButton />
          
          <a
            href={CONTACT_CONFIG.telLink}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 md:px-6"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
          
          <button
            onClick={onConsultationClick}
            className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-primary/50 bg-transparent text-primary hover:bg-primary/10 h-10 px-6"
          >
            Get Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
