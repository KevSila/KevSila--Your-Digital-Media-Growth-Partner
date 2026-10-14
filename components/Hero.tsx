import { ArrowDown, ArrowRight, Check, Compass, Link2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => (
  <section className="relative overflow-hidden bg-ink pb-16 pt-32 sm:pb-24 sm:pt-40">
    <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
    <div className="hero-orb pointer-events-none absolute -left-36 -top-36 h-[650px] w-[650px]" aria-hidden="true" />
    <div className="shell relative">
      <div className="mb-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.16em] text-mint sm:mb-14"><span className="h-2 w-2 rounded-full bg-mint" /> Technology Solutions & Digital Transformation</div>
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
        <div>
          <h1 className="hero-title max-w-4xl">Technology that fits your business<span className="block text-sky">—and helps it work better.</span></h1>
          <p className="body-lg mt-7 max-w-2xl text-slate-copy">Choose and implement the right technology. Connect your tools, simplify operations, adopt AI responsibly, and make better decisions.</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">For businesses and organisations taking their first digital steps, improving existing systems, or building something new.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link to="/contact?intent=consultation" className="btn-primary">Let’s talk technology <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link><Link to="/services" className="btn-light">Explore our services <ArrowDown aria-hidden="true" className="h-4 w-4" /></Link></div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-copy">{['Business needs first', 'Practical tools', 'People at the centre'].map(item => <span className="flex items-center gap-2" key={item}><Check className="h-3.5 w-3.5 text-mint" aria-hidden="true" />{item}</span>)}</div>
        </div>
        <div className="technology-map relative mx-auto w-full max-w-lg" role="img" aria-label="Illustration: start with your business needs, choose suitable tools, connect the work and support people in using it.">
          <div className="mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-4"><span className="text-[10px] font-bold uppercase tracking-[.18em] text-slate-copy">A clearer way forward</span><span className="text-[10px] text-mint">The Silatech approach</span></div>
          <div className="rounded-2xl border border-mint/25 bg-mint/[.07] p-6"><span className="text-[10px] font-bold uppercase tracking-[.16em] text-mint">Start here</span><p className="mt-3 font-display text-2xl font-semibold text-white">What does your business need?</p><p className="mt-2 text-sm leading-6 text-slate-copy">Your people. Your priorities. Your starting point.</p></div>
          <div className="mx-auto h-7 w-px bg-gradient-to-b from-mint/60 to-white/15" />
          <div className="grid grid-cols-2 gap-3"><div className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><Compass aria-hidden="true" className="mb-6 h-5 w-5 text-sky" /><p className="text-sm font-bold text-white">Choose well</p><p className="mt-2 text-xs leading-5 text-slate-copy">A practical direction</p></div><div className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><Link2 aria-hidden="true" className="mb-6 h-5 w-5 text-sky" /><p className="text-sm font-bold text-white">Connect the work</p><p className="mt-2 text-xs leading-5 text-slate-copy">Tools that fit together</p></div></div>
          <div className="mx-auto h-7 w-px bg-white/15" /><div className="flex items-center gap-4 rounded-2xl bg-cloud p-5 text-ink"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cobalt/10"><Sparkles aria-hidden="true" className="h-5 w-5 text-cobalt" /></span><div><p className="text-sm font-bold">Make it useful. Make it usable.</p><p className="mt-1 text-xs leading-5 text-slate-600">Implementation, training and improvement.</p></div></div>
          <p className="mt-4 text-[10px] text-slate-400">An illustration of our approach, not a software product.</p>
        </div>
      </div>
      <div className="mt-14 border-t border-white/10 pt-6 sm:mt-20"><p className="text-sm leading-6 text-slate-copy"><span className="font-semibold text-white">Start where you are.</span> A solo founder, a small business, a professional firm, a nonprofit, or an established organisation.</p></div>
    </div>
  </section>
);
export default Hero;