import React from 'react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

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
            <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
              Integrating strategic technology into modern business operations to create defensible market value and scalable growth infrastructure.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">Business Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Multi-Channel Ads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Strategic SEO</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tech Transformation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transparency</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Silatech Growth Partners. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-slate-500">
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
