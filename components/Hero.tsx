import { motion } from 'motion/react';
import { ArrowRight, Check, MessageSquareText, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_LINK } from '../constants';

const Hero = () => (
  <section className="relative overflow-hidden bg-ink pb-20 pt-32 sm:pb-28 sm:pt-40">
    <div className="hero-grid absolute inset-0" />
    <div className="hero-orb absolute -left-36 -top-36 h-[650px] w-[650px]" />
    <div className="mint-orb absolute -right-40 bottom-0 h-[520px] w-[520px]" />
    <div className="shell relative grid min-w-0 items-center gap-10 sm:gap-14 lg:grid-cols-[1.08fr_.92fr]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
        <span className="eyebrow-light mb-6"><Sparkles className="h-4 w-4" /> AI-powered business systems for growing teams</span>
        <h1 className="display-title max-w-4xl text-white">Stop losing leads. Simplify operations. <span className="text-gradient">Grow with better systems.</span></h1>
        <p className="body-lg mt-7 max-w-2xl text-slate-copy">Silatech helps SMEs, professional firms, and growing organizations organize customer inquiries, automate follow-ups, streamline reporting, and make better decisions using practical business systems.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-auto">Book a systems diagnostic <ArrowRight className="h-4 w-4" /></a>
          <Link to="/business-systems-automation" className="btn-light w-full sm:w-auto">Explore our solutions</Link>
        </div>
        <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-slate-300 sm:text-sm">
          {['Built around your workflow', 'Low-cost tools first', 'Training and handover included'].map(item => <span className="flex items-center gap-2" key={item}><Check className="h-4 w-4 text-mint" />{item}</span>)}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15, duration: .7 }} className="relative mx-auto w-full min-w-0 max-w-xl">
        <div className="absolute -inset-5 rounded-[2.5rem] bg-cobalt/15 blur-2xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#0d203b] p-4 shadow-2xl sm:p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-4">
            <div><p className="text-xs font-bold text-white">Lead follow-up workspace</p><p className="mt-1 text-[11px] text-slate-copy">Today’s activity</p></div>
            <span className="rounded-full bg-mint/12 px-3 py-1 text-[10px] font-bold text-mint">Live workflow</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-[.92fr_1.08fr]">
            <div className="rounded-2xl bg-white/[.055] p-4">
              <div className="mb-4 flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366]/15"><MessageSquareText className="h-4 w-4 text-[#54e68b]" /></span><div><p className="text-[11px] font-bold text-white">New WhatsApp inquiry</p><p className="text-[10px] text-slate-copy">2 minutes ago</p></div></div>
              <div className="rounded-xl bg-white/[.06] p-3 text-[11px] leading-5 text-slate-300">“Hi, I need a quote and want to know when you can deliver.”</div>
              <div className="mt-4 space-y-2 text-[10px]"><p className="flex flex-wrap justify-between gap-2 text-slate-copy"><span>Lead category</span><b className="text-white">Qualified inquiry</b></p><p className="flex flex-wrap justify-between gap-2 text-slate-copy"><span>Next action</span><b className="text-mint">Follow up today</b></p></div>
            </div>
            <div className="rounded-2xl bg-white p-4 text-ink">
              <div className="flex flex-wrap items-end justify-between gap-2"><div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Owner view</p><p className="font-display text-lg font-bold">Opportunity pipeline</p></div><span className="text-xs font-bold text-cobalt">This week</span></div>
              <div className="mt-6 flex h-28 items-end gap-2" aria-label="Example weekly inquiry chart">
                {[38,58,45,78,63,92,72].map((height, index) => <div key={index} className="flex-1 rounded-t-md bg-[#dbe6ff]" style={{height: `${height}%`}}><div className="metric-bar h-full rounded-t-md opacity-80" /></div>)}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4"><div><p className="text-[9px] text-slate-500">New</p><p className="font-display text-lg font-bold">12</p></div><div><p className="text-[9px] text-slate-500">Follow-ups</p><p className="font-display text-lg font-bold">7</p></div><div><p className="text-[9px] text-slate-500">Won</p><p className="font-display text-lg font-bold text-cobalt">4</p></div></div>
            </div>
          </div>
          <p className="mt-4 text-center text-[10px] text-slate-copy">Illustrative Silatech system interface</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
