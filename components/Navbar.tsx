
import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Monitor } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK, BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Monitor className="text-white" size={20} />
              </div>
              <span className="hidden sm:inline">{BRAND_NAME}</span>
              <span className="sm:hidden">Kevin Sila</span>
            </span>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-12">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-500 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2"
              >
                BOOK FREE AUDIT
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 absolute top-20 left-0 w-full shadow-xl">
          <div className="px-6 pt-4 pb-12 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 block px-4 py-4 rounded-xl text-lg font-bold border-b border-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-blue-600 text-white block px-4 py-5 rounded-2xl text-lg font-black mt-8"
            >
              GET FREE AUDIT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
