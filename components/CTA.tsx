import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, MessageSquare } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto glass-card relative overflow-hidden bg-gradient-to-br from-brand-blue/20 via-soft-black to-brand-purple/20 p-12 md:p-20 text-center"
      >
        <div className="absolute inset-0 grid-bg opacity-10" />
        
        <div className="relative z-10">
          <Sparkles className="w-12 h-12 text-white mx-auto mb-8 text-glow animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl mx-auto leading-tight font-display">
            Evaluate Your <br />Operational Architecture.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Most businesses lose 30% of their output to fragmented systems and manual inefficiencies. Let's design the intelligence layer your organization deserves.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-3 w-full sm:w-auto justify-center group"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Systems Consultation</span>
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center space-x-3 w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-5 h-5 text-brand-blue" />
              <span>Discuss Your Challenges</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
