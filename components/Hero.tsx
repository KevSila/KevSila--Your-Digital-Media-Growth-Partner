import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label"
          >
            <Sparkles className="w-3 h-3" />
            <span>AI-First Growth Consultancy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-medium leading-[1] tracking-tight text-white mb-8 max-w-5xl mx-auto"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-white to-brand-purple">Strategic Advantage</span> Through Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            We build the intelligent growth infrastructure for modern businesses. By integrating advanced technology into your core operations, we unlock scalable value and market dominance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2 group"
            >
              <span>Start Growth Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#process" className="btn-secondary">
              View Our Process
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50"
          >
            <div className="flex items-center space-x-2 grayscale">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2 grayscale">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">99.9% Automation Uptime</span>
            </div>
            <div className="flex items-center space-x-2 grayscale">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">AI-Forward Thinking</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
