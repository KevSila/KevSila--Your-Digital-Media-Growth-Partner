import React from 'react';
import { motion } from 'motion/react';
import { Bot, Search, MessageSquare, LineChart, Globe, Settings2 } from 'lucide-react';

const services = [
  {
    title: 'Business Systems Diagnostics',
    description: 'Deep-dive analysis of your current operational infrastructure to identify bottlenecks and design high-leverage growth blueprints.',
    outcome: 'Clear operational roadmap',
    icon: <Search className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: 'AI Workflow Automation',
    description: 'Bespoke automation of repetitive administrative and sales tasks, integrating practical AI to reclaim 20+ executive hours weekly.',
    outcome: '80% Reduction in manual work',
    icon: <Bot className="w-6 h-6 text-brand-emerald" />,
  },
  {
    title: 'Operational Intelligence Systems',
    description: 'Custom reporting dashboards that centralize your fragmented data into a single source of truth for executive decision support.',
    outcome: 'Real-time business visibility',
    icon: <LineChart className="w-6 h-6 text-brand-purple" />,
  },
  {
    title: 'Client Operations & CRM',
    description: 'Engineering intelligent CRM ecosystems and client onboarding workflows that maximize follow-up efficiency and long-term retention.',
    outcome: 'Improved lead-to-client velocity',
    icon: <MessageSquare className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: 'Operational Process Optimization',
    description: 'Restructuring core business workflows and SOPs to ensure your organization can scale without losing quality or sanity.',
    outcome: 'Defensible, scalable operations',
    icon: <Settings2 className="w-6 h-6 text-slate-400" />,
  },
  {
    title: 'Digital Transformation Advisory',
    description: 'Strategic partnership for transitioning legacy systems into a modernized, tech-enabled enterprise ready for global markets.',
    outcome: 'Future-proofed tech architecture',
    icon: <Globe className="w-6 h-6 text-green-500" />,
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
            Operational Infrastructure, <br /><span className="text-slate-500 text-2xl md:text-4xl">Not Just Digital Services.</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl font-light">
            We don't sell generic marketing or web design. We engineer the internal systems that allow your business to function with intelligence, speed, and precision.
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
