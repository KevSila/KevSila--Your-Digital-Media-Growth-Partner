import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const tiers = [
  {
    name: 'Starter Growth',
    price: 'Starting from $1,500',
    description: 'Ideal for businesses ready to automate their first core process and establish search dominance.',
    features: [
      'Discovery & Strategic Roadmap',
      'Targeted Search Visibility',
      'Core Process Automation',
      'Monthly Strategic Reviews'
    ],
    highlight: false,
  },
  {
    name: 'Growth Acceleration',
    price: 'Starting from $3,500',
    description: 'For ambitious SMEs looking to scale aggressively with AI-driven systems and multi-channel acquisition.',
    features: [
      'Advanced AI Content Engine',
      'Full Sales Funnel Automation',
      'Multi-Channel Paid Ads',
      'Bi-Weekly Strategic Calls',
      'Custom Analytics Dashboard'
    ],
    highlight: true,
  },
  {
    name: 'Enterprise Transformation',
    price: 'Custom Solution',
    description: 'A complete technological overhaul. Bespoke growth engineering for complex organizations.',
    features: [
      'Custom LLM Integrations',
      'Global Scaling Strategy',
      'Legacy System Modernization',
      'Dedicated Tech Partner',
      'Full Growth Engineering Team'
    ],
    highlight: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-blue/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Engagement
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Partnership Models</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-6 font-light leading-relaxed">
            We operate as a strategic extension of your leadership team. Our engagements are designed for high-impact results and long-term infrastructure value.
          </p>
          <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-brand-blue uppercase tracking-[0.2em] opacity-70">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span>Currently accepting 2 new partners for Q3</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 flex flex-col ${tier.highlight ? 'ring-2 ring-brand-blue bg-white/10' : ''}`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-brand-blue font-semibold mb-4">{tier.price}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{tier.description}</p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3 text-sm text-slate-300">
                    <Check className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 ${tier.highlight ? 'bg-white text-black hover:bg-slate-100' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
              >
                <span>Initiate Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
