import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, Truck, Stethoscope, Scale, GraduationCap } from 'lucide-react';

const sectors = [
  { name: 'Professional Services', icon: <Briefcase className="w-5 h-5" />, desc: 'Law firms, accounting practices, and consulting agencies.' },
  { name: 'Health & Wellness', icon: <Stethoscope className="w-5 h-5" />, desc: 'Medical clinics, gyms, and specialty wellness centers.' },
  { name: 'Logistics & Distribution', icon: <Truck className="w-5 h-5" />, desc: 'Supply chain management and local distribution networks.' },
  { name: 'Real Estate & Property', icon: <Building2 className="w-5 h-5" />, desc: 'Property management firms and real estate developers.' },
  { name: 'Legal & Compliance', icon: <Scale className="w-5 h-5" />, desc: 'Case management and automated documentation systems.' },
  { name: 'NGOs & Education', icon: <GraduationCap className="w-5 h-5" />, desc: 'Stakeholder coordination and reporting for impact.' },
];

const Industries: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Industries Served
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Expertise Across Sectors</h2>
          <p className="text-slate-400 max-w-2xl font-light">
            We solve operational challenges for organizations that are ready to replace manual friction with intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-brand-blue transition-colors">
                {sector.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-white">{sector.name}</h3>
                <p className="text-sm text-slate-500 font-light">{sector.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
