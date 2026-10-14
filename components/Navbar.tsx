import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
const Brand=()=> <span className="flex items-center gap-3"><span className="logo-mark grid h-9 w-9 shrink-0 place-items-center rounded-xl" aria-hidden="true"><span className="h-3.5 w-3.5 rotate-45 rounded-[3px] border-2 border-white" /></span><span className="font-display text-[15px] font-bold leading-tight text-white sm:text-base">Silatech <span className="hidden text-slate-copy sm:inline">Growth Partners</span></span></span>;
export default function Navbar() {
  const [open,setOpen]=useState(false);
  const location=useLocation();
  const button=useRef<HTMLButtonElement>(null);
  const menu=useRef<HTMLDivElement>(null);
  useEffect(()=>setOpen(false),[location]);
  useEffect(()=>{
    if(!open) return;
    const previous=document.body.style.overflow;
    document.body.style.overflow='hidden';
    const links=menu.current?.querySelectorAll<HTMLAnchorElement>('a');
    links?.[0]?.focus();
    const onKey=(event: KeyboardEvent)=>{
      if(event.key==='Escape') {setOpen(false);button.current?.focus();}
      if(event.key==='Tab' && links?.length) {
        const first=links[0],last=links[links.length-1];
        if(event.shiftKey && document.activeElement===first) {event.preventDefault();button.current?.focus();}
        else if(!event.shiftKey && document.activeElement===last) {event.preventDefault();button.current?.focus();}
        else if(document.activeElement===button.current) {event.preventDefault();(event.shiftKey ? last : first).focus();}
      }
    };
    document.addEventListener('keydown',onKey);
    return ()=>{document.body.style.overflow=previous;document.removeEventListener('keydown',onKey);};
  },[open]);
  return <header className="nav-blur fixed inset-x-0 top-0 z-50"><nav className="shell flex h-20 items-center justify-between gap-5" aria-label="Main navigation"><Link to="/" aria-label="Silatech Growth Partners home"><Brand /></Link><div className="hidden items-center gap-6 xl:flex">{NAV_LINKS.map(item=><Link key={item.href} to={item.href} aria-current={location.pathname===item.href ? 'page' : undefined} className="text-sm font-semibold text-slate-copy transition hover:text-white">{item.name}</Link>)}<Link to="/contact?intent=project" className="btn-primary px-5 py-3">Let’s talk <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link></div><button ref={button} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 text-white xl:hidden" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}</button></nav><div id="mobile-menu" ref={menu} hidden={!open} className="shell max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-white/10 py-6 xl:hidden"><nav aria-label="Mobile navigation" className="flex flex-col gap-1">{NAV_LINKS.map(item=><Link key={item.href} to={item.href} className="rounded-xl px-3 py-3 text-base font-semibold text-slate-200 hover:bg-white/5">{item.name}</Link>)}<Link to="/contact?intent=project" className="btn-primary mt-4">Discuss your project <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link></nav></div></header>;
}