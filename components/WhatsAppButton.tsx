import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/254712345678?text=Hello%20Silatech%20Growth%20Partners,%20I'd%20like%20to%20discuss%20a%20potential%20project.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20"
      title="Inquire on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
