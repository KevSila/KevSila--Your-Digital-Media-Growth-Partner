import { SITE_URL, BRAND_NAME } from '../constants';
import { services } from './services';
import { portfolioProjects } from './portfolioProjects';
export type SiteMetadata = { path: string; title: string; description: string; ogType?: 'website' | 'article' };
export const pageMetadata: Record<string, SiteMetadata> = {
  '/': { path: '/', title: 'Technology Solutions & Digital Transformation | Silatech Growth Partners', description: 'Choose and implement the right technology, connect your tools, streamline operations and adopt AI responsibly. Support from first digital setup to custom products.' },
  '/services': { path: '/services', title: 'Technology Consulting & Implementation Services | Silatech', description: 'Explore six connected services: technology strategy, business platforms, AI automation, data and dashboards, websites, and custom applications.' },
  '/solutions': { path: '/solutions', title: 'Business Technology Solutions for Practical Needs | Silatech', description: 'Find a practical path to a website, business platforms, connected customer workflows, automation, reporting, responsible AI or a custom application.' },
  '/approach': { path: '/approach', title: 'Our Approach to Technology Implementation | Silatech', description: 'How Silatech assesses requirements, selects suitable technology, implements in stages and supports adoption, ownership and responsible improvement.' },
  '/pricing': { path: '/pricing', title: 'Pricing & Technology Engagement Models | Silatech', description: 'Explore consultations, paid assessments, fixed-scope projects, development milestones, support and advisory. Understand professional fees and third-party costs.' },
  '/about': { path: '/about', title: 'About Silatech | Founder-Led Technology Solutions', description: 'Meet Silatech Growth Partners: a founder-led technology and digital transformation partner connecting business operations, data, websites and product development.' },
  '/privacy': { path: '/privacy', title: 'Privacy & Analytics | Silatech Growth Partners', description: 'How the Silatech website handles enquiry drafts, contact links, analytics and external services.' },
  '/contact': { path: '/contact', title: 'Discuss Your Technology Needs or Project | Silatech', description: 'Start a technology consultation or project enquiry with Silatech. Tell us what you want to improve or build, whether starting from scratch or improving existing tools.' },
  '/business-systems-automation': { path: '/business-systems-automation', title: 'Business Systems, CRM & Workflow Automation | Silatech Kenya', description: 'Explore practical business systems for customer records, follow-up, reporting, appointments and operations. Start with new foundations or improve your existing tools.' },
  '/portfolio': { path: '/portfolio', title: 'Technology & Digital Product Case Studies | Silatech', description: 'Explore Asili, BeeEPiC WISDOM Mapper and Stawi: working systems, client workflows and product prototypes, with implementation evidence and clear status.' },
};
services.forEach(service => {
  const path=`/services/${service.slug}`;
  pageMetadata[path]={path,title:`${service.title} | Silatech`,description:service.description};
});
portfolioProjects.forEach(project=>{
  const path=`/portfolio/${project.slug}`;
  pageMetadata[path]={path,title:`${project.name} Case Study | Silatech Growth Partners`,description:project.metaDescription,ogType:'article'};
});
export const publicPaths=Object.keys(pageMetadata);
export function structuredData(path: string) {
  if (!pageMetadata[path]) return null;
  const organization={ '@type':'ProfessionalService', '@id':`${SITE_URL}/#organisation`, name:BRAND_NAME, url:SITE_URL, logo:`${SITE_URL}/favicon.svg`, description:pageMetadata['/'].description, telephone:'+254717578394', areaServed:['Kenya','Worldwide'], founder:{'@type':'Person',name:'Kevin Sila',url:'https://www.linkedin.com/in/kevin-sila-9143b618a/'}, sameAs:['https://www.linkedin.com/in/kevin-sila-9143b618a/','https://github.com/KevSila'] };
  const graph: Record<string,unknown>[]=[organization,{'@type':'WebSite','@id':`${SITE_URL}/#website`,url:SITE_URL,name:BRAND_NAME,publisher:{'@id':`${SITE_URL}/#organisation`}}];
  if(['/', '/contact', '/privacy', '/business-systems-automation', '/solutions', '/approach', '/pricing', '/about'].includes(path)) graph.push({'@type':path==='/contact' ? 'ContactPage' : path==='/about' ? 'AboutPage' : 'WebPage',name:pageMetadata[path].title,description:pageMetadata[path].description,url:`${SITE_URL}${path}`,isPartOf:{'@id':`${SITE_URL}/#website`},about:{'@id':`${SITE_URL}/#organisation`}});
  const service=services.find(item=>path===`/services/${item.slug}`);
  const project=portfolioProjects.find(item=>path===`/portfolio/${item.slug}`);
  if(service) graph.push({'@type':'Service','@id':`${SITE_URL}${path}#service`,name:service.title,description:service.description,url:`${SITE_URL}${path}`,provider:{'@id':`${SITE_URL}/#organisation`}});
  if(project) graph.push({'@type':'CreativeWork',name:project.name,description:project.metaDescription,url:`${SITE_URL}${path}`,mainEntityOfPage:`${SITE_URL}${path}`,creator:{'@id':`${SITE_URL}/#organisation`},keywords:project.disciplines.join(', ')});
  if(path==='/portfolio' || path==='/services') {
    const items=path==='/portfolio' ? portfolioProjects.map(item=>({name:item.name,url:`${SITE_URL}/portfolio/${item.slug}`})) : services.map(item=>({name:item.title,url:`${SITE_URL}/services/${item.slug}`}));
    graph.push({'@type':'CollectionPage',name:pageMetadata[path].title,url:`${SITE_URL}${path}`,isPartOf:{'@id':`${SITE_URL}/#website`},mainEntity:{'@type':'ItemList',numberOfItems:items.length,itemListElement:items.map((item,i)=>({'@type':'ListItem',position:i+1,...item}))}});
  }
  if(path!=='/') {
    const ancestors=[{name:'Home',url:SITE_URL}];
    if(service) ancestors.push({name:'Services',url:`${SITE_URL}/services`});
    if(project) ancestors.push({name:'Selected work',url:`${SITE_URL}/portfolio`});
    ancestors.push({name:service?.title || project?.shortName || (path==='/privacy' ? 'Privacy & analytics' : path==='/contact' ? 'Contact' : path==='/portfolio' ? 'Selected work' : path==='/services' ? 'Services' : path==='/solutions' ? 'Solutions' : path==='/approach' ? 'Our approach' : path==='/pricing' ? 'Pricing & engagements' : path==='/about' ? 'About Silatech' : 'Business systems'),url:`${SITE_URL}${path}`});
    graph.push({'@type':'BreadcrumbList',itemListElement:ancestors.map((item,i)=>({'@type':'ListItem',position:i+1,name:item.name,item:item.url}))});
  }
  return {'@context':'https://schema.org','@graph':graph};
}