import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full flex items-center justify-center shadow-2xl shadow-black/50 overflow-hidden"
      title="Inquire on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366]/10 animate-pulse" />
      <MessageSquare className="w-6 h-6 text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]" />
      <span className="absolute top-3 right-3 flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
