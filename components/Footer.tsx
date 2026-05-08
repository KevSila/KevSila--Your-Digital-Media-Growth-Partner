import React from 'react';
import { Linkedin, Github, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-purple rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-soft-black rounded-sm" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white uppercase">SILATECH</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm font-light">
              Building intelligent systems and strategic growth infrastructure for modern businesses.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#services" className="hover:text-white transition-colors">Business Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Multi-Channel Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Strategic SEO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Tech Transformation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transparency</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Silatech Growth Partners. All rights reserved.
          </p>
          <div className="flex items-center space-x-8 text-slate-500">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-2 text-xs">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-2 text-xs">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a href={SOCIAL_LINKS.linktree} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-2 text-xs">
              <LinkIcon className="w-4 h-4" />
              <span>Linktree</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
