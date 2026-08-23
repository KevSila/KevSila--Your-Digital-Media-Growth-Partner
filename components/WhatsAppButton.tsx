import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton = () => <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="Message Silatech Growth Partners on WhatsApp" className="floating-contact fixed z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-[#062e17] shadow-[0_18px_45px_-16px_rgba(37,211,102,.85)] transition hover:-translate-y-1 hover:scale-105 sm:!bottom-7 sm:!right-7 sm:h-14 sm:w-14"><MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" /></a>;

export default WhatsAppButton;
