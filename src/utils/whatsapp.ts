export const WHATSAPP_NUMBER = "918096923496";

export const getWhatsAppLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const enquireNow = (itemName: string, type: 'course' | 'workshop' | 'training' | 'service') => {
  const message = `Hi Coademic, I'm interested in the ${itemName} ${type}. Could you please provide more details?`;
  window.open(getWhatsAppLink(message), '_blank');
};
