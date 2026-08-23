import { ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const WhySilatech = () => (
  <>
    <section id="case-study" className="bg-cloud py-24 text-ink sm:py-32">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink p-6 shadow-2xl sm:p-9">
          <div className="hero-grid absolute inset-0 opacity-30" />
          <div className="relative">
            <div className="mb-8 flex items-center justify-between"><span className="rounded-full bg-mint/12 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-mint">Live internal case study</span><span className="text-xs text-slate-copy">Asili Eco-Wellness</span></div>
            <div className="rounded-[1.5rem] bg-[#f7f3e9] p-5 text-[#213326] sm:p-7">
              <div className="flex items-start justify-between border-b border-[#dfe6d7] pb-5"><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#74856f]">Batch passport</p><p className="mt-1 font-display text-xl font-bold">Makueni honey</p></div><span className="rounded-lg bg-[#213326] px-3 py-2 text-[10px] font-bold text-white">Verified record</span></div>
              <div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white p-4"><p className="text-[10px] text-[#74856f]">Origin</p><p className="mt-1 text-sm font-bold">Makueni, Kenya</p></div><div className="rounded-xl bg-white p-4"><p className="text-[10px] text-[#74856f]">Batch</p><p className="mt-1 text-sm font-bold">SAMPLE-2604-01</p></div></div>
              <div className="mt-3 rounded-xl bg-white p-4"><div className="mb-2 flex justify-between text-[10px]"><span className="text-[#74856f]">Traceability journey</span><span className="font-bold">QR-linked</span></div><div className="h-2 overflow-hidden rounded-full bg-[#edf1e9]"><div className="h-full w-4/5 rounded-full bg-[#d89b32]" /></div></div>
            </div>
          </div>
        </div>
        <div><span className="eyebrow">Proof through practice</span><h2 className="section-title mt-5 !text-ink">Turning a product website into a clearer trust and traceability experience.</h2><p className="body-lg mt-6 text-slate-600">For Asili, we refined the customer proposition, improved the digital journey, and developed a QR-linked batch passport demonstration that organizes origin and product information.</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">{['Brand and website positioning', 'Customer-focused information design', 'QR-linked batch records', 'Traceability system thinking'].map(item => <li key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-cobalt" />{item}</li>)}</ul>
          <p className="mt-6 text-xs leading-5 text-slate-500">Asili is a Silatech internal brand project. No unverified sales or conversion results are claimed.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="https://asilii.netlify.app" target="_blank" rel="noreferrer" className="btn-dark">Visit Asili <ExternalLink className="h-4 w-4" /></a><a href="https://asilii.netlify.app/b/sample-2604-01" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 text-sm font-bold text-cobalt">View batch passport <ArrowUpRight className="h-4 w-4" /></a></div>
        </div>
      </div>
    </section>

    <section id="about" className="bg-white py-24 text-ink sm:py-32">
      <div className="shell grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:items-center">
        <div className="rounded-[2rem] bg-ink p-8 sm:p-10"><p className="eyebrow-light">Founder-led consultancy</p><div className="mt-10 flex items-center gap-5"><div className="logo-mark grid h-16 w-16 place-items-center rounded-2xl font-display text-xl font-bold text-white">KS</div><div><h3 className="text-2xl font-bold">Kevin Sila</h3><p className="mt-1 text-sm text-slate-copy">Founder · Business systems & operational intelligence</p></div></div><p className="mt-8 text-sm leading-7 text-slate-copy">Based in Kenya and equipped for remote delivery, Silatech combines business operations, data systems, research coordination, digital platforms, dashboards, and practical AI workflows.</p><a href={SOCIAL_LINKS.portfolio} target="_blank" rel="noreferrer" className="btn-light mt-8">View Kevin’s portfolio <ArrowUpRight className="h-4 w-4" /></a></div>
        <div><span className="eyebrow">Why Silatech</span><h2 className="section-title mt-5 !text-ink">Your business probably does not need more complicated software.</h2><p className="body-lg mt-6 text-slate-600">It needs clearer processes and a dependable system that works with the tools your team can adopt. That is where we focus.</p><div className="mt-9 grid gap-5 sm:grid-cols-2">{[['Practical first', 'Low-cost, familiar tools when they can solve the problem well.'],['Business-led', 'Every build begins with the operational outcome, not a fashionable tool.'],['Africa-aware', 'Designed with local workflows, WhatsApp use, budgets, and adoption realities in mind.'],['Built to transfer', 'Documentation, training, and client-owned accounts support long-term control.']].map(([title, copy]) => <div key={title} className="border-l-2 border-mint pl-5"><h3 className="text-lg font-bold !text-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p></div>)}</div></div>
      </div>
    </section>
  </>
);

export default WhySilatech;
