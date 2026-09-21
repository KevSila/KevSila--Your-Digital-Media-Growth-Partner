import { ArrowRight, CheckCircle2, Search, ShieldCheck, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import PortfolioVisual from '../components/portfolio/PortfolioVisual';
import { portfolioProjects } from '../data/portfolioProjects';
import { WHATSAPP_LINK } from '../constants';

const proofPrinciples = [
  { icon: Search, title: 'Problem first', copy: 'Each project starts with the operational or product problem before choosing a tool.' },
  { icon: Workflow, title: 'System thinking', copy: 'We connect the customer experience, workflow, data, and management view rather than treating them as separate screens.' },
  { icon: ShieldCheck, title: 'Honest evidence', copy: 'Working functionality, prototypes, demonstrations, and future roadmap items are clearly distinguished.' }
];

const PortfolioPage = () => (
  <>
    <PageMeta
      path="/portfolio"
      title="Business Systems & Product Portfolio | Silatech Growth Partners"
      description="Explore Silatech case studies across business operations, product UX, AI-assisted workflows, dashboards, traceability, and connected digital systems."
    />

    <section className="relative overflow-hidden bg-ink pb-24 pt-32 sm:pb-32 sm:pt-44">
      <div className="hero-grid absolute inset-0" />
      <div className="hero-orb absolute -left-40 -top-40 h-[650px] w-[650px]" />
      <div className="mint-orb absolute -right-40 bottom-0 h-[520px] w-[520px]" />
      <div className="shell relative">
        <div className="max-w-4xl">
          <span className="eyebrow-light">Selected work</span>
          <h1 className="display-title mt-6">Systems built around <span className="text-gradient">real operational problems.</span></h1>
          <p className="body-lg mt-7 max-w-3xl text-slate-copy">Explore how Silatech approaches business systems, digital products, operational intelligence, and AI-assisted workflows—from understanding the problem to designing the experience and building the working system.</p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
            {['Business systems', 'Product UX', 'Operational intelligence', 'AI-assisted workflows'].map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.05] px-4 py-2">{item}</span>)}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cloud py-20 text-ink sm:py-24">
      <div className="shell">
        <div className="grid gap-4 md:grid-cols-3">
          {proofPrinciples.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="card-light p-6">
              <Icon className="h-5 w-5 text-cobalt" />
              <h2 className="mt-5 text-lg font-bold !text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-24 text-ink sm:py-32">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div><span className="eyebrow">Case studies</span><h2 className="section-title mt-5 !text-ink">A small number of projects, explained properly.</h2></div>
          <p className="body-lg max-w-2xl text-slate-600 lg:justify-self-end">The emphasis is not the number of screens or technologies used. It is the business or product problem, the reasoning behind the system, what has actually been built, and what becomes possible next.</p>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {portfolioProjects.map((project, index) => (
            <article key={project.slug} className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}><PortfolioVisual project={project} /></div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow">{project.kicker}</span>
                  <span className="rounded-full bg-[#eaf0ff] px-3 py-1 text-[10px] font-bold text-cobalt">{project.stage}</span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-.035em] !text-ink sm:text-4xl">{project.name}</h3>
                <p className="body-lg mt-5 text-slate-600">{project.summary}</p>
                <div className="mt-7 grid gap-2 sm:grid-cols-2">
                  {project.value.slice(0, 4).map((item) => <p key={item} className="flex gap-2 text-sm font-semibold leading-6 text-slate-700"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-mint" />{item}</p>)}
                </div>
                <Link to={`/portfolio/${project.slug}`} className="btn-dark mt-8">View case study <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="hero-grid absolute inset-0 opacity-35" />
      <div className="shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow-light">How we approach the work</span>
          <h2 className="section-title mt-5">From unclear friction to a system people can actually use.</h2>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['01', 'Diagnose', 'Understand the real workflow, users, constraints, and cost of the problem.'],
            ['02', 'Design', 'Define the simpler future workflow, information structure, and experience.'],
            ['03', 'Build', 'Configure or custom-build only the parts that create meaningful value.'],
            ['04', 'Prove', 'Separate working evidence from assumptions, then use what is learned to improve the next version.']
          ].map(([number, title, copy]) => <article key={title} className="card-dark p-6"><span className="font-display text-xs font-bold text-mint">{number}</span><h3 className="mt-6 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-copy">{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="bg-white py-24 text-ink sm:py-32">
      <div className="shell">
        <div className="rounded-[2rem] bg-[#eaf0ff] p-6 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl"><span className="eyebrow">Your workflow could be next</span><h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-.03em] !text-ink sm:text-4xl">Start with the problem worth fixing.</h2><p className="mt-5 text-base leading-7 text-slate-600">We can review your current process, identify the highest-value leak or visibility gap, and scope a realistic first improvement.</p></div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-dark mt-8 w-full shrink-0 sm:w-auto lg:mt-0">Book a systems diagnostic <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  </>
);

export default PortfolioPage;
