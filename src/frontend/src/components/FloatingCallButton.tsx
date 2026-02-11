import { Phone } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function FloatingCallButton() {
  return (
    <a
      href={CONTACT_CONFIG.telLink}
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
