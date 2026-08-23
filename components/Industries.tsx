import { BriefcaseBusiness, Building2, HeartPulse, PackageCheck, Sprout } from 'lucide-react';

const sectors = [
  { icon: BriefcaseBusiness, title: 'Professional services', copy: 'Consultants, lawyers, accountants, coaches, agencies, and real estate teams.' },
  { icon: HeartPulse, title: 'Clinics & service businesses', copy: 'Clinics, wellness providers, gyms, salons, and appointment-led businesses.' },
  { icon: PackageCheck, title: 'Operations-heavy SMEs', copy: 'Furniture sellers, retailers, pharmacies, hardware stores, and distributors.' },
  { icon: Building2, title: 'NGOs & community organizations', copy: 'Field teams, youth networks, county chapters, and donor-supported programs.' },
  { icon: Sprout, title: 'Agribusiness & product brands', copy: 'Food, honey, and emerging product businesses that need better records and trust.' },
];

const Industries = () => (
  <section id="industries" className="bg-white py-24 text-ink sm:py-32">
    <div className="shell">
      <div className="mx-auto max-w-3xl text-center"><span className="eyebrow">Who we help</span><h2 className="section-title mt-5 !text-ink">Built for teams where missed follow-up or poor records cost real money.</h2><p className="body-lg mt-6 text-slate-600">Our strongest fit is a growing organization with useful tools already in place—but too much work still happening manually between them.</p></div>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {sectors.map(({ icon: Icon, title, copy }) => <article key={title} className="rounded-[1.5rem] border border-slate-200 bg-cloud p-6"><Icon className="h-6 w-6 text-cobalt" /><h3 className="mt-8 text-base font-bold !text-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p></article>)}
      </div>
    </div>
  </section>
);

export default Industries;
