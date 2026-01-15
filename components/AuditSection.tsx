
import React from 'react';
import { ShieldCheck, ArrowRight, Zap, Headphones } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const AuditSection: React.FC = () => {
  return (
    <section id="audit" className="py-32 bg-[#F4F4F9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 bento-card p-12 rounded-[3rem] bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-[0.95] tracking-tight">
              Get Your Free <br /><span className="text-blue-600 italic">National</span> Growth Audit.
            </h2>
            <p className="text-lg text-slate-500 mb-12 font-medium max-w-lg">
              Distance is no barrier. From the heart of your city, we analyze your digital systems and find where your customers are hiding.
            </p>
            
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-6 rounded-2xl text-xl font-black hover:bg-slate-900 transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest"
            >
              Start Audit Now
              <ArrowRight size={24} />
            </a>
            
            <div className="mt-16 flex items-center gap-12 opacity-50 grayscale">
               <ShieldCheck size={40} />
               <Zap size={40} />
               <div className="text-xs font-black uppercase tracking-widest">Growth Engine Active</div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <div id="remote" className="bento-card p-10 rounded-[2.5rem] bg-slate-900 text-white flex-1">
              <Headphones className="text-blue-500 mb-6" size={40} />
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">The "Remote" Edge</h3>
              <p className="text-slate-400 font-medium leading-relaxed mb-8">
                Why Remote? We save you office-visit costs and pass the savings to you. Seamless 24/7 support via WhatsApp & Zoom.
              </p>
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                 <span className="text-xs font-black uppercase tracking-widest">24/7 National Support Live</span>
              </div>
            </div>
            
            <div className="bento-card p-8 rounded-[2.5rem] bg-blue-600 text-white">
               <p className="text-sm font-black uppercase tracking-widest mb-2">Current Success</p>
               <p className="text-3xl font-black tracking-tighter">+400% Sales Increase</p>
               <p className="text-xs opacity-70 mt-2 font-medium italic">"Nationwide scaling for our Nairobi-based agency."</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuditSection;
