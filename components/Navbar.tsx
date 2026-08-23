import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, WHATSAPP_LINK } from '../constants';

const Brand = () => (
  <span className="flex items-center gap-3">
    <span className="logo-mark grid h-9 w-9 place-items-center rounded-xl" aria-hidden="true">
      <span className="h-3.5 w-3.5 rotate-45 rounded-[3px] border-2 border-white" />
    </span>
    <span className="font-display text-[15px] font-bold leading-tight tracking-[-.02em] text-white sm:text-base">
      Silatech <span className="hidden text-slate-copy sm:inline">Growth Partners</span>
    </span>
  </span>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? 'nav-blur' : 'bg-transparent'}`}>
      <nav className="shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link to="/" aria-label="Silatech Growth Partners home"><Brand /></Link>
        <div className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {NAV_LINKS.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold text-slate-copy transition hover:text-white">{item.name}</a>
          ))}
          <Link to="/business-systems-automation" className="text-sm font-semibold text-slate-copy transition hover:text-white">Systems</Link>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary px-5 py-3">
            Book a diagnostic <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-white xl:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="shell max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-white/8 py-6 xl:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-semibold text-slate-200 hover:bg-white/5">{item.name}</a>)}
            <Link to="/business-systems-automation" className="rounded-xl px-3 py-3 text-base font-semibold text-slate-200 hover:bg-white/5">Business systems</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary mt-4">Book a diagnostic <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
