import { Activity, ArrowRight, BadgeCheck, BarChart3, CheckCircle2, ClipboardList, Database, Dumbbell, PackageCheck, Sparkles, UsersRound } from 'lucide-react';
import type { PortfolioProject } from '../../data/portfolioProjects';

const AsiliVisual = () => (
  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink p-5 shadow-2xl sm:p-7" aria-label="Illustrative Asili Business Helper interface">
    <div className="hero-grid absolute inset-0 opacity-30" />
    <div className="relative">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-mint">Asili Business Helper</p><p className="mt-1 text-xs text-slate-copy">Owner operations view</p></div>
        <span className="rounded-full bg-mint/12 px-3 py-1 text-[10px] font-bold text-mint">Working system</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-4 text-ink">
          <div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Order desk</span><PackageCheck className="h-4 w-4 text-cobalt" /></div>
          <p className="mt-4 font-display text-xl font-bold">Customer → order → status</p>
          <div className="mt-5 space-y-2">
            {['Website and manual sales', 'Customer record', 'Stock-aware order', 'Lifecycle status'].map((item) => <p key={item} className="flex items-center gap-2 text-[11px] text-slate-600"><CheckCircle2 className="h-3.5 w-3.5 text-mint" />{item}</p>)}
          </div>
        </div>
        <div className="rounded-2xl bg-[#0d203b] p-4">
          <div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-wider text-slate-copy">Owner visibility</span><BarChart3 className="h-4 w-4 text-mint" /></div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {[['Orders','Structured'],['Stock','Tracked'],['Payments','Receipted'],['Customers','Connected']].map(([label,value]) => <div key={label} className="rounded-xl bg-white/[.06] p-3"><p className="text-[9px] text-slate-copy">{label}</p><p className="mt-1 text-xs font-bold text-white">{value}</p></div>)}
          </div>
        </div>
      </div>
      <div className="mt-3 rounded-2xl bg-[#f7f3e9] p-4 text-[#213326]">
        <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#74856f]">Traceability foundation</p><p className="mt-1 font-display text-sm font-bold">QR-linked batch passport</p></div><BadgeCheck className="h-5 w-5 text-[#d89b32]" /></div>
      </div>
    </div>
  </div>
);

const BeeEpicVisual = () => (
  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1c34] p-5 shadow-2xl sm:p-7" aria-label="Illustrative BeeEPiC WISDOM Mapper workflow">
    <div className="hero-grid absolute inset-0 opacity-25" />
    <div className="relative">
      <div className="mb-6 flex items-center justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-mint">WISDOM Mapper</p><p className="mt-1 text-xs text-slate-copy">Structured assessment flow</p></div><Sparkles className="h-5 w-5 text-mint" /></div>
      <div className="grid gap-3 md:grid-cols-[.85fr_auto_1.15fr] md:items-center">
        <div className="rounded-2xl bg-white/[.06] p-4">
          <ClipboardList className="h-5 w-5 text-sky" />
          <p className="mt-4 text-sm font-bold text-white">Business context</p>
          <div className="mt-4 space-y-2 text-[10px] text-slate-copy"><p>Bottlenecks</p><p>Delegation goals</p><p>Current systems</p><p>Urgency & priorities</p></div>
        </div>
        <ArrowRight className="mx-auto h-5 w-5 rotate-90 text-mint md:rotate-0" />
        <div className="rounded-2xl bg-white p-4 text-ink">
          <div className="flex items-center justify-between"><p className="text-[10px] font-bold uppercase tracking-wider text-cobalt">Recommendation blueprint</p><Database className="h-4 w-4 text-cobalt" /></div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {['Delegation priorities','Support role','Systems-first actions','Suggested KPIs'].map((item) => <div key={item} className="rounded-xl bg-cloud p-3 text-[10px] font-semibold text-slate-700">{item}</div>)}
          </div>
          <p className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-600"><CheckCircle2 className="h-3.5 w-3.5 text-mint" />Reliable baseline + bounded AI refinement</p>
        </div>
      </div>
    </div>
  </div>
);

const StawiVisual = () => (
  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#091a20] p-5 shadow-2xl sm:p-7" aria-label="Illustrative Stawi member and trainer product experience">
    <div className="absolute -right-24 -top-20 h-64 w-64 rounded-full bg-mint/10 blur-3xl" />
    <div className="relative grid gap-4 sm:grid-cols-[.82fr_1.18fr]">
      <div className="mx-auto w-full max-w-[245px] rounded-[2rem] border border-white/10 bg-[#102a31] p-3">
        <div className="rounded-[1.45rem] bg-[#f6f8f2] p-4 text-[#10231f]">
          <div className="flex items-center justify-between"><div><p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#527269]">Stawi</p><p className="mt-1 font-display text-lg font-bold">Today</p></div><Activity className="h-5 w-5 text-[#1d7b65]" /></div>
          <div className="mt-5 rounded-xl bg-white p-3 shadow-sm"><p className="text-[9px] text-[#71857f]">Planned training</p><p className="mt-1 text-xs font-bold">Back & biceps</p><div className="mt-3 h-2 rounded-full bg-[#e8eee9]"><div className="h-full w-2/3 rounded-full bg-[#7fdb59]" /></div></div>
          <div className="mt-3 grid grid-cols-2 gap-2"><div className="rounded-xl bg-[#eaf4ef] p-3"><p className="text-[9px] text-[#71857f]">Progress</p><p className="mt-1 text-xs font-bold">Evidence</p></div><div className="rounded-xl bg-[#eef2f7] p-3"><p className="text-[9px] text-[#71857f]">Recovery</p><p className="mt-1 text-xs font-bold">Context</p></div></div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="mb-5"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-mint">Member + coach context</p><p className="mt-2 font-display text-xl font-bold text-white">One journey, different responsibilities.</p></div>
        <div className="space-y-2">
          {[['Member','Owns the journey',Dumbbell],['Trainer','Guides and amplifies',UsersRound],['Stawi','Connects the evidence',Database]].map(([title,copy,Icon]) => {
            const RowIcon = Icon as typeof Dumbbell;
            return <div key={String(title)} className="flex items-center gap-3 rounded-xl bg-white/[.055] p-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-mint/10 text-mint"><RowIcon className="h-4 w-4" /></span><div><p className="text-xs font-bold text-white">{String(title)}</p><p className="text-[10px] text-slate-copy">{String(copy)}</p></div></div>;
          })}
        </div>
      </div>
    </div>
  </div>
);

const PortfolioVisual = ({ project }: { project: PortfolioProject }) => {
  if (project.visual === 'asili') return <AsiliVisual />;
  if (project.visual === 'beeepic') return <BeeEpicVisual />;
  return <StawiVisual />;
};

export default PortfolioVisual;
