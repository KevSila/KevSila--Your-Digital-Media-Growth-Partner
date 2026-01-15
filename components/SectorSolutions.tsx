
import React from 'react';
import { BENTO_INDUSTRIES } from '../constants';

const SectorSolutions: React.FC = () => {
  return (
    <section id="industries" className="py-32 bg-[#F4F4F9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-24 text-center">
          <h2 className="text-blue-600 font-black tracking-[0.2em] uppercase text-xs mb-6">Market Reach</h2>
          <p className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[0.95]">
            Solutions for Every <br /><span className="text-blue-600">Hustle.</span>
          </p>
          <p className="mt-6 text-slate-500 font-medium text-lg max-w-2xl mx-auto">From micro-kiosks to established clinics, we build the digital foundation for your success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[300px]">
          {BENTO_INDUSTRIES.map((item, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-[2.5rem] bento-card flex flex-col justify-end p-8 group
                ${item.size === 'large' ? 'md:col-span-4 lg:col-span-3' : ''}
                ${item.size === 'medium' ? 'md:col-span-2 lg:col-span-3' : ''}
                ${item.size === 'small' ? 'md:col-span-2 lg:col-span-2' : ''}
              `}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-hover:from-white/95 transition-all"></div>
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 block mb-2">{item.subtitle}</span>
                <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorSolutions;
