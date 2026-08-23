const steps = [
  ['Discover', 'Understand the people, tools, records, and routines behind the current workflow.'],
  ['Diagnose', 'Find where leads, time, money, or information are being lost.'],
  ['Design', 'Choose the simplest useful system and map how it should work.'],
  ['Deploy', 'Build, test, document, and train the people who will use it.'],
  ['Optimize', 'Review adoption, repair weak points, and improve as the business grows.'],
];

const Process = () => (
  <section id="process" className="relative overflow-hidden bg-ink py-24 sm:py-32">
    <div className="hero-grid absolute inset-0 opacity-40" />
    <div className="shell relative">
      <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><span className="eyebrow-light">How we work</span><h2 className="section-title mt-5">A clear path from operational friction to a system your team can use.</h2></div><p className="body-lg max-w-2xl text-slate-copy lg:justify-self-end">Technology follows the workflow. We first understand what is happening, then build only what creates practical value.</p></div>
      <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {steps.map(([title, copy], index) => <li key={title} className="relative border-t border-white/12 pt-7"><span className="font-display text-xs font-bold text-mint">0{index + 1}</span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-4 text-sm leading-6 text-slate-copy">{copy}</p></li>)}
      </ol>
    </div>
  </section>
);

export default Process;
