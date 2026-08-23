import { ExternalLink, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE_NUMBER, SOCIAL_LINKS, TEL_LINK } from '../constants';

const Footer = () => (
  <footer className="border-t border-white/8 bg-ink py-14">
    <div className="shell"><div className="grid gap-12 border-b border-white/8 pb-12 md:grid-cols-[1.3fr_.7fr_.7fr]">
      <div><div className="flex min-w-0 items-center gap-3"><span className="logo-mark grid h-9 w-9 shrink-0 place-items-center rounded-xl"><span className="h-3.5 w-3.5 rotate-45 rounded-[3px] border-2 border-white" /></span><span className="min-w-0 font-display text-base font-bold text-white sm:text-lg">Silatech Growth Partners</span></div><p className="mt-5 max-w-md text-sm leading-7 text-slate-copy">Practical business systems, workflow automation, dashboards, and AI-enabled operations for growing organizations.</p><p className="mt-4 text-sm text-slate-copy">Nairobi, Kenya · Remote delivery available</p></div>
      <div><h3 className="text-xs font-bold uppercase tracking-[.16em] text-white">Explore</h3><div className="mt-5 flex flex-col gap-3 text-sm text-slate-copy"><a href="/#solutions" className="hover:text-white">Solutions</a><a href="/#case-study" className="hover:text-white">Case study</a><Link to="/business-systems-automation" className="hover:text-white">Business systems</Link><a href="/#about" className="hover:text-white">About</a></div></div>
      <div><h3 className="text-xs font-bold uppercase tracking-[.16em] text-white">Connect</h3><div className="mt-5 flex flex-col gap-3 text-sm text-slate-copy"><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><Linkedin className="h-4 w-4" /> LinkedIn</a><a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><Github className="h-4 w-4" /> GitHub</a><a href={SOCIAL_LINKS.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><ExternalLink className="h-4 w-4" /> Portfolio</a><a href={TEL_LINK} className="hover:text-white">{PHONE_NUMBER}</a></div></div>
    </div><div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Silatech Growth Partners. All rights reserved.</p><p>Business systems designed for practical adoption.</p></div></div>
  </footer>
);

export default Footer;
