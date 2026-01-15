
import React from 'react';
import { Phone, MessageCircle, Mail, CheckCircle, MapPin } from 'lucide-react';
import { PHONE_NUMBER, TEL_LINK, EMAIL_ADDRESS, MAILTO_LINK, BRAND_NAME, FULL_BRAND_NAME, KENYAN_CITIES, WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-slate-100 py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
          <div className="lg:col-span-2">
            <span className="text-2xl font-black tracking-tight text-slate-900 block mb-10 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              Kevin Sila
            </span>
            <p className="text-slate-500 text-xl font-medium mb-12 max-w-sm leading-relaxed">
              Automating Kenya's hardest-working businesses. We build digital sales machines that dominate nationwide and globally.
            </p>
            <div className="flex gap-4">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-100"
                title="WhatsApp Me"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href={TEL_LINK} 
                className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-100"
                title="Call Me"
              >
                <Phone size={20} />
              </a>
              <a 
                href={MAILTO_LINK} 
                className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-100"
                title="Email Me"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-black mb-8 uppercase text-xs tracking-widest">Contact Directly</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500 group">
                <Phone size={18} className="text-blue-600" />
                <a href={TEL_LINK} className="font-bold hover:text-blue-600 transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center gap-3 text-slate-500 group">
                <Mail size={18} className="text-blue-600" />
                <a href={MAILTO_LINK} className="font-bold hover:text-blue-600 transition-colors">{EMAIL_ADDRESS}</a>
              </li>
              <li className="flex items-center gap-3 text-slate-900 group">
                <CheckCircle size={18} className="text-green-500" />
                <span className="font-bold">Serving All 47 Counties</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black mb-8 uppercase text-xs tracking-widest">Coverage</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest py-1.5 px-4 bg-blue-600 text-white rounded-full">
                Any Town in Kenya
              </span>
              {KENYAN_CITIES.slice(0, 10).map(city => (
                <span key={city} className="text-[10px] font-black uppercase tracking-widest py-1 px-3 bg-slate-50 text-slate-400 rounded-full border border-slate-100">
                  {city}
                </span>
              ))}
              <span className="text-[10px] font-black uppercase tracking-widest py-1 px-3 bg-slate-50 text-slate-400 rounded-full border border-slate-100">
                & Global Remote
              </span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-slate-400 text-xs font-black uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} {FULL_BRAND_NAME}
          </p>
          <div className="flex gap-12 text-xs font-black text-slate-400 uppercase tracking-widest">
            <a href="#services" className="hover:text-blue-600 transition-colors">Web Creation</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">National SEO</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Strategy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
