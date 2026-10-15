import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
export default function RelatedServices({projectSlug}: {projectSlug?: string}) {
  const related=projectSlug ? services.filter(service=>service.project===projectSlug) : services.filter(service=>['business-platforms-integrations','ai-workflow-automation','data-dashboards-decision-support'].includes(service.slug));
  return <section className="bg-cloud py-16 text-ink"><div className="shell"><span className="eyebrow">Connect the possibilities</span><h2 className="mt-5 text-3xl font-bold !text-ink">Explore related services</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{related.map(service=><Link to={`/services/${service.slug}`} key={service.slug} className="flex items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 hover:border-cobalt"><span><span className="block text-base font-bold">{service.title}</span><span className="mt-2 block text-sm leading-6 text-slate-600">{service.intro}</span></span><ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 text-cobalt" /></Link>)}</div></div></section>;
}