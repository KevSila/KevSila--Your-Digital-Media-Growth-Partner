import { BookOpen, KeyRound, ShieldCheck, UsersRound } from 'lucide-react';
const principles = [
  { icon: ShieldCheck, title: 'Security & privacy', copy: 'Appropriate access, careful data collection, credential handling and clear responsibilities.' },
  { icon: UsersRound, title: 'Human oversight', copy: 'Defined review and approval points for AI, with limitations and fallback behaviour made clear.' },
  { icon: KeyRound, title: 'Client ownership', copy: 'Client-owned accounts where possible, transparent ongoing costs and avoidable lock-in kept in view.' },
  { icon: BookOpen, title: 'Adoption & handover', copy: 'Staff involvement, useful documentation, training and a plan for ongoing improvement.' },
];
export default function ResponsibleDelivery() {
  return <section className="bg-[#eaf2ef] py-20 text-ink sm:py-24"><div className="shell grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><span className="eyebrow !text-[#267258]">Responsible by design</span><h2 className="section-title mt-5 !text-ink">Useful technology.<br />Thoughtful implementation.</h2><p className="mt-6 text-base leading-8 text-slate-600">The tools matter. So do the people, data and decisions around them. We consider these responsibilities in the scope of each engagement.</p></div><div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">{principles.map(({icon: Icon, title, copy}) => <article key={title}><Icon className="h-5 w-5 text-[#267258]" aria-hidden="true" /><h3 className="mt-4 text-base font-bold !text-ink">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p></article>)}</div></div></section>;
}