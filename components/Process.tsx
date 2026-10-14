const steps = [
  ['Understand', 'Listen to the people doing the work. Clarify the problem, priorities and starting point.'],
  ['Choose', 'Compare practical options. Use existing tools where they fit; build custom where justified.'],
  ['Implement', 'Configure, connect or build in clear stages, with testing and review along the way.'],
  ['Enable', 'Document the result, train the people using it, and hand over access and ownership.'],
  ['Improve', 'Review adoption and agreed measures of value. Refine what helps; remove what does not.'],
];
export default function Process() {
  return <section id="process" className="bg-ink py-20 sm:py-28"><div className="shell"><div className="grid gap-6 lg:grid-cols-2"><div><span className="eyebrow-light">Our approach</span><h2 className="section-title mt-5">Clarity first.<br /><span className="text-sky">Technology follows.</span></h2></div><div className="lg:pt-9"><p className="body-lg max-w-xl text-slate-copy">We begin with the real business problem and recommend the smallest maintainable solution that delivers value. Sometimes that means a better process. Sometimes it means a new product.</p></div></div><ol className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">{steps.map(([title, copy], index) => <li key={title} className="border-t border-white/15 pt-6"><span className="text-xs font-bold text-mint">0{index + 1}</span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-copy">{copy}</p></li>)}</ol><blockquote className="mt-14 border-l-2 border-mint py-2 pl-6 font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">“Systemic clarity follows the subtraction of the unnecessary.”</blockquote></div></section>;
}