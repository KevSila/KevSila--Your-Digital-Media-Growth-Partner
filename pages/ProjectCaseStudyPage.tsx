import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Flag, Layers3, Lightbulb, ShieldCheck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import PortfolioVisual from '../components/portfolio/PortfolioVisual';
import { getPortfolioProject, portfolioProjects } from '../data/portfolioProjects';
import { SITE_URL, WHATSAPP_LINK } from '../constants';

const ProjectCaseStudyPage = () => {
  const { slug } = useParams();
  const project = getPortfolioProject(slug);

  useEffect(() => {
    if (!project) return;

    const id = 'portfolio-case-study-schema';
    document.getElementById(id)?.remove();

    const url = `${SITE_URL}/portfolio/${project.slug}`;
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CreativeWork',
          name: project.name,
          description: project.metaDescription,
          url,
          mainEntityOfPage: url,
          isPartOf: { '@type': 'CollectionPage', name: 'Silatech Growth Partners Portfolio', url: `${SITE_URL}/portfolio` },
          creator: { '@type': 'Organization', name: 'Silatech Growth Partners', url: SITE_URL },
          keywords: project.disciplines.join(', ')
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${SITE_URL}/portfolio` },
            { '@type': 'ListItem', position: 3, name: project.shortName, item: url }
          ]
        }
      ]
    });

    document.head.appendChild(script);
    return () => script.remove();
  }, [project]);

  if (!project) {
    return (
      <>
        <PageMeta
          title="Case Study Not Found | Silatech Growth Partners"
          description="The requested Silatech case study could not be found."
          path={slug ? `/portfolio/${slug}` : '/portfolio'}
          robots="noindex, follow"
        />
        <section className="grid min-h-[75vh] place-items-center bg-cloud px-6 pt-24 text-center text-ink">
          <div>
            <p className="eyebrow">Case study not found</p>
            <h1 className="mt-5 text-4xl font-bold !text-ink">This project is not in the portfolio.</h1>
            <Link to="/portfolio" className="btn-dark mt-8">Back to portfolio</Link>
          </div>
        </section>
      </>
    );
  }

  const currentIndex = portfolioProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = portfolioProjects[(currentIndex + 1) % portfolioProjects.length];

  return (
    <>
      <PageMeta
        path={`/portfolio/${project.slug}`}
        title={`${project.name} Case Study | Silatech Growth Partners`}
        description={project.metaDescription}
        ogType="article"
        imageAlt={`${project.name} case study by Silatech Growth Partners`}
      />

      <section className="relative overflow-hidden bg-ink pb-20 pt-28 sm:pb-28 sm:pt-36">
        <div className="hero-grid absolute inset-0" />
        <div className="hero-orb absolute -left-40 -top-40 h-[600px] w-[600px]" />
        <div className="shell relative">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-copy transition hover:text-white"><ArrowLeft className="h-4 w-4" />Back to selected work</Link>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3"><span className="eyebrow-light">{project.kicker}</span><span className="rounded-full border border-white/10 bg-white/[.06] px-3 py-1 text-[10px] font-bold text-slate-200">{project.stage}</span></div>
              <h1 className="display-title mt-6">{project.name}</h1>
              <p className="body-lg mt-7 max-w-3xl text-slate-copy">{project.summary}</p>
              <div className="mt-8 flex flex-wrap gap-2">{project.disciplines.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-2 text-[11px] font-semibold text-slate-300">{item}</span>)}</div>
            </div>
            <PortfolioVisual project={project} />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-ink sm:py-32">
        <div className="shell grid gap-12 lg:grid-cols-2">
          <article>
            <div className="flex items-center gap-3 text-cobalt"><Flag className="h-5 w-5" /><span className="text-xs font-bold uppercase tracking-[.16em]">The problem</span></div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-.03em] !text-ink">What needed to become clearer?</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">{project.problem}</p>
          </article>
          <article className="rounded-[2rem] bg-cloud p-7 sm:p-9">
            <div className="flex items-center gap-3 text-cobalt"><Lightbulb className="h-5 w-5" /><span className="text-xs font-bold uppercase tracking-[.16em]">Core philosophy</span></div>
            <h2 className="mt-5 font-display text-2xl font-bold leading-tight tracking-[-.025em] !text-ink">{project.philosophyTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">{project.philosophy}</p>
          </article>
        </div>
      </section>

      <section className="bg-cloud py-24 text-ink sm:py-32">
        <div className="shell">
          <div className="max-w-3xl"><span className="eyebrow">What we built</span><h2 className="section-title mt-5 !text-ink">Turning the principle into a working experience.</h2></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {project.built.map((item, index) => <article key={item} className="card-light p-6"><span className="font-display text-xs font-bold text-cobalt">0{index + 1}</span><p className="mt-5 text-sm font-semibold leading-7 text-slate-700">{item}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-ink sm:py-32">
        <div className="shell grid gap-12 lg:grid-cols-[.86fr_1.14fr] lg:items-start">
          <div><span className="eyebrow">Operational value</span><h2 className="section-title mt-5 !text-ink">What the system is designed to improve.</h2><p className="body-lg mt-6 text-slate-600">These are capability and workflow improvements, not invented revenue or conversion claims.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{project.value.map((item) => <div key={item} className="rounded-[1.5rem] border border-slate-200 p-6"><CheckCircle2 className="h-5 w-5 text-mint" /><p className="mt-5 text-sm font-semibold leading-7 text-slate-700">{item}</p></div>)}</div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className="shell relative grid gap-12 lg:grid-cols-2">
          <article>
            <div className="flex items-center gap-3 text-mint"><ShieldCheck className="h-5 w-5" /><span className="text-xs font-bold uppercase tracking-[.16em]">Evidence & status</span></div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight">What exists today.</h2>
            <ul className="mt-7 space-y-4">{project.evidence.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-slate-copy"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-mint" />{item}</li>)}</ul>
            {project.externalLinks && <div className="mt-8 flex flex-wrap gap-3">{project.externalLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="btn-light">{link.label}<ExternalLink className="h-4 w-4" /></a>)}</div>}
          </article>
          <article className="card-dark p-7 sm:p-9">
            <div className="flex items-center gap-3 text-mint"><Layers3 className="h-5 w-5" /><span className="text-xs font-bold uppercase tracking-[.16em]">Next opportunity</span></div>
            <h2 className="mt-5 font-display text-2xl font-bold">Where the work can evolve.</h2>
            <div className="mt-7 space-y-4">{project.next.map((item, index) => <div key={item} className="flex gap-4"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mint/10 text-[10px] font-bold text-mint">0{index + 1}</span><p className="text-sm leading-7 text-slate-copy">{item}</p></div>)}</div>
          </article>
        </div>
      </section>

      <section className="bg-white py-24 text-ink sm:py-32">
        <div className="shell">
          <div className="grid gap-6 rounded-[2rem] bg-[#eaf0ff] p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><p className="eyebrow">Continue exploring</p><h2 className="mt-4 font-display text-2xl font-bold !text-ink sm:text-3xl">Next case study: {nextProject.shortName}</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{nextProject.summary}</p></div>
            <Link to={`/portfolio/${nextProject.slug}`} className="btn-dark w-full sm:w-auto">View next project <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-6 text-center"><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-cobalt">Have a similar workflow problem? Book a diagnostic <ArrowRight className="h-4 w-4" /></a></div>
        </div>
      </section>
    </>
  );
};

export default ProjectCaseStudyPage;
