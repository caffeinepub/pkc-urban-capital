import { CONTACT_CONFIG } from './contact';

export const WHATSAPP_CONFIG = {
  phoneNumber: CONTACT_CONFIG.whatsappPhone,
};

export function generateWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}`;
  
  // Only append ?text= if a message is explicitly provided and non-empty
  if (message && message.trim().length > 0) {
    const encodedMessage = encodeURIComponent(message);
    return `${baseUrl}?text=${encodedMessage}`;
  }
  
  // Return clean link without query string
  return baseUrl;
}

export function generatePropertyWhatsAppLink(propertyName: string, location: string): string {
  const message = `Hi, I am interested in the ${propertyName} property in ${location}. Please share the best price and more details.`;
  return generateWhatsAppLink(message);
}
