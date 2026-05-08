import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, MessageSquare } from 'lucide-react';

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
          <Sparkles className="w-12 h-12 text-white mx-auto mb-8 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl mx-auto leading-tight">
            Ready to Engineer <br />Your Growth Engine?
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-12">
            Join the modern businesses leveraging AI and automation to dominate their markets. Schedule your initial strategy audit today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="btn-primary flex items-center space-x-3 w-full sm:w-auto justify-center">
              <Calendar className="w-5 h-5" />
              <span>Book Strategy Call</span>
            </button>
            <button className="btn-secondary flex items-center space-x-3 w-full sm:w-auto justify-center">
              <MessageSquare className="w-5 h-5" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
