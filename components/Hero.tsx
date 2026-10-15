import { ArrowRight, Check, ClipboardCheck, Compass, Settings2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
const stages = [
  { icon: ClipboardCheck, title: 'Assess', copy: 'Business requirements, people and existing tools.' },
  { icon: Compass, title: 'Select', copy: 'Suitable platforms and a practical implementation plan.' },
  { icon: Settings2, title: 'Implement', copy: 'Configure, connect or build. Test and support adoption.' },
  { icon: TrendingUp, title: 'Improve', copy: 'Review performance, maintain the solution and refine.' },
];
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-orb pointer-events-none absolute -left-36 -top-36 h-[650px] w-[650px]" aria-hidden="true" />
      <div className="shell relative">
        <p className="mb-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.16em] text-mint sm:mb-14"><span className="h-2 w-2 shrink-0 rounded-full bg-mint" />Technology Solutions & Digital Transformation</p>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <div>
            <h1 className="hero-title max-w-4xl">Practical technology solutions <span className="text-sky">for your business.</span></h1>
            <p className="body-lg mt-7 max-w-2xl text-slate-copy">We help businesses plan, build and improve their digital operations through websites, business software, platform integrations, AI automation, data analytics and custom applications.</p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">Whether you’re setting up essential technology or improving existing systems, we help you choose the right approach, implement it effectively and get lasting value from your investment.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link to="/services" className="btn-primary">Explore our services <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link><Link to="/contact?intent=project" className="btn-light">Discuss your project <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link></div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-copy">{['Founder-led delivery', 'Practical implementation', 'Training and handover'].map(item=><span key={item} className="flex items-center gap-2"><Check aria-hidden="true" className="h-3.5 w-3.5 text-mint" />{item}</span>)}</div>
          </div>
          <div className="technology-map mx-auto w-full max-w-lg">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4"><span className="text-[10px] font-bold uppercase tracking-[.18em] text-slate-copy">From requirements to results</span><span className="text-[10px] text-mint">The Silatech approach</span></div>
            <ol className="space-y-3" aria-label="Assess, select, implement and improve">{stages.map(({icon: Icon,title,copy},index)=><li key={title} className={`flex items-start gap-4 rounded-2xl border p-5 ${index===2 ? 'border-mint/25 bg-mint/[.07]' : 'border-white/10 bg-white/[.035]'}`}><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cobalt/15 text-sky"><Icon aria-hidden="true" className="h-5 w-5" /></span><div className="flex-1"><div className="flex items-center justify-between gap-3"><h2 className="text-base font-bold">{title}</h2><span className="text-[10px] font-bold text-mint">0{index+1}</span></div><p className="mt-2 text-xs leading-6 text-slate-copy">{copy}</p></div></li>)}</ol>
            <Link to="/approach" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-sky">How we deliver <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm leading-7 text-slate-copy sm:mt-20 lg:flex-row"><p>Technology that fits your business—and helps it work better.</p><Link to="/portfolio" className="inline-flex items-center gap-2 font-semibold text-white">View implementation evidence <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link></div>
      </div>
    </section>
  );
}