import React from 'react';
import { motion } from 'motion/react';
import { Bot, Search, MessageSquare, LineChart, Globe, Settings2 } from 'lucide-react';

const services = [
  {
    title: 'AI-Driven Operational Systems',
    description: 'Integrating bespoke LLMs and intelligent workflow automation to reclaim executive time and optimize resource allocation.',
    outcome: '80% Reduction in manual overhead',
    icon: <Bot className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: 'Search Visibility Infrastructure',
    description: 'Strategic SEO engineering that converts intent into revenue by establishing a defensible organic presence in your sector.',
    outcome: 'Sustainable 300% search growth',
    icon: <Search className="w-6 h-6 text-brand-emerald" />,
  },
  {
    title: 'Multi-Channel Growth Engine',
    description: 'Scientific ad management across Google, Meta, TikTok, and LinkedIn, precision-tuned for scalable customer acquisition.',
    outcome: 'Predictable CAC optimization',
    icon: <LineChart className="w-6 h-6 text-brand-purple" />,
  },
  {
    title: 'Strategic Tech Transformation',
    description: 'High-level consultancy focus on the intersection of modern technology and business value mapping.',
    outcome: 'High-leverage tech stack',
    icon: <Globe className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: 'Automated Communication Systems',
    description: 'Engineering the customer journey through intelligent messaging and support systems that scale without head-count.',
    outcome: 'Convergent 4x lead velocity',
    icon: <MessageSquare className="w-6 h-6 text-green-500" />,
  },
  {
    title: 'Digital Experience Infrastructure',
    description: 'Building high-performance conversion environments that serve as the foundation for all growth initiatives.',
    outcome: 'Scale-ready digital presence',
    icon: <Settings2 className="w-6 h-6 text-slate-400" />,
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
