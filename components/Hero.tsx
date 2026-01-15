
import React from 'react';
import { ArrowRight, Globe, ShieldCheck, Map } from 'lucide-react';
import { WHATSAPP_LINK, KENYAN_CITIES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F4F4F9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-10 border border-blue-100">
            <Globe size={14} /> Remote-First Mastery across 47 Counties & Beyond
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
            Automating Kenya’s <br />Hardest-Working <span className="text-blue-600">SMEs.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            We operate <span className="text-slate-900 font-bold">100% remotely</span>, serving every corner of Kenya and the global market. Whether you're in a listed city or a remote town, we build your digital sales machine without boundaries.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3"
            >
              Run National Growth Audit
              <ArrowRight size={20} />
            </a>
            <div className="flex items-center gap-2 text-slate-500 font-bold text-sm uppercase tracking-widest">
              <Map size={18} className="text-blue-600" /> Serving All Towns Nationwide
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-24 py-12 border-y border-slate-200 bg-white/50 backdrop-blur-sm relative overflow-hidden">
        <div className="marquee flex gap-12 items-center">
          {[...KENYAN_CITIES, ...KENYAN_CITIES].map((city, idx) => (
            <div key={idx} className="flex items-center gap-4 text-slate-400 font-black text-2xl uppercase tracking-tighter italic">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              {city}
            </div>
          ))}
          {/* Explicit statement in the marquee */}
          <div className="flex items-center gap-4 text-blue-600 font-black text-2xl uppercase tracking-tighter italic">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            SERVING ALL 47 COUNTIES NATIONWIDE
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
