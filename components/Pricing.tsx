import { ArrowRight, Check } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const offers = [
  { label: 'Start here', title: 'Business Systems Diagnostic', copy: 'A focused review of your workflows, tools, bottlenecks, and highest-value improvement opportunities.', items: ['Workflow and tool review', 'Priority gap analysis', 'Recommended system roadmap'] },
  { label: 'Build', title: 'Focused Systems Implementation', copy: 'A defined solution such as lead follow-up, a reporting dashboard, client intake, or appointment reminders.', items: ['Design and implementation', 'Testing and documentation', 'Team training and handover'], featured: true },
  { label: 'Improve', title: 'Operations Growth Partnership', copy: 'Ongoing monitoring, reporting support, workflow improvement, and small system enhancements.', items: ['System health reviews', 'Reporting and optimization', 'Ongoing advisory support'] },
];

const Pricing = () => (
  <section id="engagement" className="bg-cloud py-24 text-ink sm:py-32">
    <div className="shell"><div className="mx-auto max-w-3xl text-center"><span className="eyebrow">Ways to work together</span><h2 className="section-title mt-5 !text-ink">Start with the operational problem. Scale the solution when it proves useful.</h2><p className="body-lg mt-6 text-slate-600">Scope depends on workflow complexity, integrations, team size, and the tools involved. Third-party subscriptions or messaging charges are confirmed before work begins.</p></div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{offers.map(offer => <article key={offer.title} className={`rounded-[1.75rem] p-6 sm:p-8 ${offer.featured ? 'bg-ink text-white shadow-2xl' : 'border border-slate-200 bg-white text-ink'}`}><span className={`text-[10px] font-bold uppercase tracking-[.18em] ${offer.featured ? 'text-mint' : 'text-cobalt'}`}>{offer.label}</span><h3 className={`mt-5 text-2xl font-bold ${offer.featured ? '' : '!text-ink'}`}>{offer.title}</h3><p className={`mt-4 text-sm leading-6 ${offer.featured ? 'text-slate-copy' : 'text-slate-600'}`}>{offer.copy}</p><ul className={`my-8 space-y-3 border-y py-6 text-sm font-semibold ${offer.featured ? 'border-white/10 text-slate-200' : 'border-slate-100 text-slate-700'}`}>{offer.items.map(item => <li key={item} className="flex gap-2"><Check className={`h-4 w-4 ${offer.featured ? 'text-mint' : 'text-cobalt'}`} />{item}</li>)}</ul><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={offer.featured ? 'btn-primary w-full' : 'btn-dark w-full'}>Discuss this option <ArrowRight className="h-4 w-4" /></a></article>)}</div>
    </div>
  </section>
);

export default Pricing;
