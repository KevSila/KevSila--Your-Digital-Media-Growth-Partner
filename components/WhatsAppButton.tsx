import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton = () => <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="Message Silatech Growth Partners on WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-[#062e17] shadow-[0_18px_45px_-16px_rgba(37,211,102,.85)] transition hover:-translate-y-1 hover:scale-105 sm:bottom-7 sm:right-7"><MessageCircle className="h-6 w-6" /></a>;

export default WhatsAppButton;
