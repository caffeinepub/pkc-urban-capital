export const WHATSAPP_CONFIG = {
  phoneNumber: '919876543210', // Replace with actual WhatsApp number (country code + number, no + or spaces)
  defaultMessage: 'Hi, I am interested in commercial investment properties in Pune. Please share more details.'
};

export function generateWhatsAppLink(message?: string): string {
  const encodedMessage = encodeURIComponent(message || WHATSAPP_CONFIG.defaultMessage);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
}

export function generatePropertyWhatsAppLink(propertyName: string, location: string): string {
  const message = `Hi, I am interested in the ${propertyName} property in ${location}. Please share the best price and more details.`;
  return generateWhatsAppLink(message);
}
