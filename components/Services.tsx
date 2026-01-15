
import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICE_PILLARS } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#F4F4F9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-blue-600 font-black tracking-[0.2em] uppercase text-xs mb-6">The Growth Engine</h2>
          <p className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[0.95]">
            Remote-First <br /><span className="text-blue-600">Efficiency.</span>
          </p>
          <p className="mt-6 text-slate-500 font-medium text-lg">Comprehensive digital solutions for ambitious brands, delivered anywhere in Kenya.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_PILLARS.map((service, idx) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <div key={idx} className="bento-card p-10 rounded-[2.5rem] group relative overflow-hidden">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-blue-600 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                  Scale Now <Icons.ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
