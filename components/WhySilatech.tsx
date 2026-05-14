import React from 'react';
import { motion } from 'motion/react';
import { Zap, Cpu, Target, Network } from 'lucide-react';

const reasons = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: 'Operational Deep-Dive',
    description: 'We enjoy understanding how your organization functions at a root level before designing any technical solution.'
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Practical Automation',
    description: 'Focusing on high-impact systems that simplify workflows and reclaim time without unnecessary complexity.'
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Strategic Implementation',
    description: 'Every system is anchored in business objectives, ensuring technology creates measurable, defensible value.'
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: 'Scalable Growth',
    description: 'Building sustainable growth infrastructure for SMEs and firms ready to modernize their operations.'
  }
];

const WhySilatech: React.FC = () => {
  return (
    <section id="why-silatech" className="py-24 bg-white/2 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              Why Silatech
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Technology Integration <br />Meets Business Strategy.
            </h2>
            <div className="space-y-8">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                    <p className="text-slate-400 text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card aspect-square relative overflow-hidden flex items-center justify-center"
            >
              <div className="absolute inset-0 glow-mesh opacity-30" />
              <div className="text-center p-12 relative z-10">
                <div className="text-6xl font-display font-black text-white mb-4">60%</div>
                <div className="text-xl font-medium text-slate-300 mb-8 uppercase tracking-widest text-sm">Improvement in operational efficiency.</div>
                <p className="text-slate-400">
                  Targeted technology integration doesn't just save time—it creates brand equity and defensible market value.
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-8">
                <div className="w-12 h-12 border-t-2 border-r-2 border-white/10 rounded-tr-3xl" />
              </div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 border-b-2 border-l-2 border-white/10 rounded-bl-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySilatech;
