
import React from 'react';
import { Zap, Clock, TrendingUp } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-slate-500 font-black tracking-widest uppercase text-xs mb-4">The Pivot</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Is Your Business Stuck in <span className="text-blue-600">"Manual Mode"?</span>
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              Relying on physical walk-ins and manual WhatsApp replies limits your growth to your local block. We transition you from a local shop to a national brand.
            </p>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg mb-1">Instant Scale</h4>
                  <p className="text-slate-500 text-sm">Reach customers in cities you've never visited.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg mb-1">24/7 Availability</h4>
                  <p className="text-slate-500 text-sm">Automated bots sell while you sleep or handle other tasks.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl">
              <div className="flex justify-between items-center mb-10">
                <div className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-black uppercase">Live Funnel Data</div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Growth Tracking</div>
              </div>
              <div className="space-y-8">
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase mb-1">Revenue Mode</p>
                    <p className="text-2xl font-black">AUTOMATED</p>
                  </div>
                  <TrendingUp className="text-blue-500 mb-2" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase mb-1">Monthly Reach</p>
                    <p className="text-xl font-black text-blue-400">+125,000</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase mb-1">Avg Conversion</p>
                    <p className="text-xl font-black text-blue-400">18.4%</p>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                   <p className="text-xs text-slate-400 italic">"Our shop in Eldoret now delivers to clients in Mombasa daily thanks to this system."</p>
                </div>
              </div>
            </div>
            {/* Absolute element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-full blur-[60px] opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
