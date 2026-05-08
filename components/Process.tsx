import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Deep-dive into your current systems, growth bottlenecks, and business objectives.'
  },
  {
    number: '02',
    title: 'Diagnose',
    description: 'Technical audit of your digital infrastructure, search visibility, and conversion data.'
  },
  {
    number: '03',
    title: 'Design',
    description: 'Engineering a custom blueprint for your AI growth stack and automation engine.'
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Rapid implementation of prioritized systems, ads, and SEO infrastructure.'
  },
  {
    number: '05',
    title: 'Optimize',
    description: 'Continuous refinement based on real-world data and technological advancements.'
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Strategic Implementation</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Our systematic approach ensures that every solution is anchored in business objective and engineered for long-term scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="mb-6">
                <span className="text-5xl font-display font-black text-white/5 group-hover:text-white/10 transition-colors uppercase select-none">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold -mt-4 text-white">{step.title}</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {step.description}
              </p>
              
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-4 w-8 h-[1px] bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
