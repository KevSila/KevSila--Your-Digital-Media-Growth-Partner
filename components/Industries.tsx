const sectors = [
  ['Founders & small businesses', 'A first digital foundation, customer journey or practical operating setup.'],
  ['Professional & service firms', 'Clearer intake, client records, collaboration, bookings and follow-up.'],
  ['Established organisations', 'Better use of existing platforms, connected information and decision support.'],
  ['Nonprofits & community teams', 'Useful collection tools, organised evidence, programme reporting and visibility.'],
];
export default function Industries() {
  return <section id="industries" className="bg-white py-20 text-ink sm:py-24"><div className="shell"><div className="grid gap-6 lg:grid-cols-2"><div><span className="eyebrow">Who we work with</span><h2 className="section-title mt-5 !text-ink">Different organisations.<br />Real, everyday needs.</h2></div><p className="body-lg max-w-xl text-slate-600 lg:pt-9">From a solo founder to an established team, you’re welcome at any stage of technology adoption. Based in Kenya, with remote delivery available.</p></div><div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{sectors.map(([title,copy],i) => <article key={title} className="border-t border-slate-200 pt-5"><span className="text-[10px] font-bold tracking-widest text-cobalt">0{i+1}</span><h3 className="mt-5 text-lg font-bold !text-ink">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p></article>)}</div></div></section>;
}