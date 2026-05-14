import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Deep-dive into organizational function to identify operational inefficiencies and growth bottlenecks.'
  },
  {
    number: '02',
    title: 'Diagnose',
    description: 'Technical audit of current workflows, reporting structures, and digital infrastructure.'
  },
  {
    number: '03',
    title: 'Design',
    description: 'Engineering a custom blueprint for practical systems, automation, and decision support layers.'
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Seamless integration of tech-enabled processes and visibility systems into core operations.'
  },
  {
    number: '05',
    title: 'Optimize',
    description: 'Continuous refinement of workflows and analytics to ensure measurable business impact.'
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Methodology
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Strategic Implementation</h2>
          <p className="text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
            Our systematic approach ensures that every solution is anchored in business objective and engineered for long-term scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative group"
            >
              <div className="mb-8">
                <span className="text-6xl font-display font-medium text-white/5 group-hover:text-white/10 transition-colors uppercase select-none block mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <div className="w-8 h-[2px] bg-brand-blue group-hover:w-16 transition-all duration-500" />
              </div>
              <p className="text-sm text-slate-500 leading-bold group-hover:text-slate-400 transition-colors">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
