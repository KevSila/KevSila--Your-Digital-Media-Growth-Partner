import React from 'react';
import { motion } from 'motion/react';
import { Bot, Search, MessageSquare, LineChart, Globe, Settings2 } from 'lucide-react';

const services = [
  {
    title: 'Business Automation',
    description: 'Bespoke automation workflows tailored to your specific operational needs. We eliminate bottlenecks across sales, support, and internal project management.',
    outcome: 'Reduce manual work by up to 80%',
    icon: <Bot className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: 'Search Visibility & SEO',
    description: 'Strategic search engine optimization that captures high-intent traffic and builds long-term organic dominance in your sector.',
    outcome: 'Sustainable 3x search growth',
    icon: <Search className="w-6 h-6 text-brand-emerald" />,
  },
  {
    title: 'Multi-Channel Ad Management',
    description: 'Scientific advertising across Google, Meta, TikTok, and LinkedIn. Data-driven allocation to the channels that drive the highest CAC:LTV ratio.',
    outcome: 'Optimized CAC & Scalable ROI',
    icon: <LineChart className="w-6 h-6 text-brand-purple" />,
  },
  {
    title: 'Strategic Tech Consulting',
    description: 'Executive advice on the intersection of technology and business value. We identify where tech integration creates the most operational leverage.',
    outcome: 'High-leverage infrastructure',
    icon: <Globe className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: 'AI Systems Integration',
    description: 'Integrating advanced LLMs and proprietary AI tools into your core infrastructure to drive intelligent decision-making.',
    outcome: 'AI-native operational speed',
    icon: <Settings2 className="w-6 h-6 text-slate-400" />,
  },
  {
    title: 'Omnichannel Funnels',
    description: 'Engineering the customer journey across messaging, email, and web to ensure maximum conversion at every touchpoint.',
    outcome: 'Convert leads 4x faster',
    icon: <MessageSquare className="w-6 h-6 text-green-500" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-soft-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Strategic Solutions, <br /><span className="text-slate-500 text-2xl md:text-4xl">Not Generic Offerings.</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl">
            We don't just provide services; we engineer business outcomes. Every solution is tailored to your specific growth stage and operational complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-white/20 transition-all cursor-default"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 block font-sans">Projected Outcome</span>
                <span className="text-white font-medium">{service.outcome}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
