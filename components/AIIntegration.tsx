
import React from 'react';
import { Cpu, Database, PieChart, ShieldCheck, ArrowRight, Wallet, TrendingUp } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const AIIntegration: React.FC = () => {
  return (
    <section id="ai-integration" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 -z-10 translate-x-1/2 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bento-card p-8 rounded-[2rem] border-l-4 border-blue-600">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <Database size={24} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">Record Your Items</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Smart item records and digital receipts. No more paper notebooks—keep a perfect record of your inventory in the cloud.
                </p>
              </div>
              <div className="bento-card p-8 rounded-[2rem] border-l-4 border-slate-900 mt-4 sm:mt-12">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6">
                  <TrendingUp size={24} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">Make More Money</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  AI analyzes your busy hours and busy days to help you set prices that maximize your daily profits.
                </p>
              </div>
              <div className="bento-card p-8 rounded-[2rem] border-l-4 border-slate-900">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6">
                  <Wallet size={24} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">Save Money</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Reduce waste and unnecessary expenses by letting AI find where you are losing money on repetitive tasks.
                </p>
              </div>
              <div className="bento-card p-8 rounded-[2rem] border-l-4 border-blue-600 mt-4 sm:mt-12">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <Cpu size={24} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">Save Time</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Automate the boring stuff. Let bots handle bookings and inquiries so you can focus on the real work.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-blue-600 font-black tracking-[0.2em] uppercase text-xs mb-6">AI for the Hustler</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Work Smarter. <br /><span className="text-blue-600">Scale Faster.</span>
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              We bring Artificial Intelligence to the ground level. Whether you run a kiosk, a tailor shop, or a car wash, our AI tools help you <strong>save money</strong>, make better <strong>item records</strong>, and <strong>make more money</strong> by automating the repetitive tasks that slow you down.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-slate-900 font-bold">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-black">✓</div>
                Save 10+ hours a week on administration
              </li>
              <li className="flex items-center gap-3 text-slate-900 font-bold">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-black">✓</div>
                Zero lost records or item stock errors
              </li>
              <li className="flex items-center gap-3 text-slate-900 font-bold">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-black">✓</div>
                Increase revenue with data-driven pricing
              </li>
            </ul>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-black hover:bg-blue-600 transition-all uppercase tracking-widest text-sm"
            >
              Get AI Integration
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIntegration;
