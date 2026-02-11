import { SiWhatsapp } from 'react-icons/si';
import { generateWhatsAppLink } from '../config/whatsapp';

export default function FloatingWhatsAppButton() {
  const handleClick = () => {
    // Generate clean WhatsApp link without prefilled message
    const link = generateWhatsAppLink();
    window.open(link, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Contact us on WhatsApp"
    >
      <SiWhatsapp className="h-7 w-7" />
    </button>
  );
}
