import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { services } from '../data/services';
const Brand=()=> <span className="flex items-center gap-3"><span className="logo-mark grid h-9 w-9 shrink-0 place-items-center rounded-xl" aria-hidden="true"><span className="h-3.5 w-3.5 rotate-45 rounded-[3px] border-2 border-white" /></span><span className="font-display text-[15px] font-bold leading-tight text-white sm:text-base">Silatech <span className="hidden text-slate-copy sm:inline">Growth Partners</span></span></span>;
export default function Navbar() {
  const [open,setOpen]=useState(false);
  const [servicesOpen,setServicesOpen]=useState(false);
  const [mobileServicesOpen,setMobileServicesOpen]=useState(false);
  const location=useLocation();
  const button=useRef<HTMLButtonElement>(null);
  const menu=useRef<HTMLDivElement>(null);
  const disclosure=useRef<HTMLDivElement>(null);
  const servicesButton=useRef<HTMLButtonElement>(null);
  const serviceList=useRef<HTMLDivElement>(null);
  useEffect(()=>{setOpen(false);setServicesOpen(false);setMobileServicesOpen(false);},[location]);
  useEffect(()=>{
    if(!servicesOpen) return;
    const outside=(event: PointerEvent)=>{if(!disclosure.current?.contains(event.target as Node)) setServicesOpen(false);};
    document.addEventListener('pointerdown',outside);
    return ()=>document.removeEventListener('pointerdown',outside);
  },[servicesOpen]);
  useEffect(()=>{
    if(!open) return;
    const previous=document.body.style.overflow;
    document.body.style.overflow='hidden';
    menu.current?.querySelector<HTMLButtonElement>('button')?.focus();
    const onKey=(event: globalThis.KeyboardEvent)=>{
      if(event.key==='Escape'){setOpen(false);setMobileServicesOpen(false);button.current?.focus();}
      if(event.key==='Tab'){
        const controls=Array.from(menu.current?.querySelectorAll<HTMLElement>('a,button') || []).filter(item=>item.getClientRects().length>0);
        const first=controls[0],last=controls[controls.length-1];
        if(event.shiftKey && document.activeElement===first){event.preventDefault();button.current?.focus();}
        else if(!event.shiftKey && document.activeElement===last){event.preventDefault();button.current?.focus();}
        else if(document.activeElement===button.current){event.preventDefault();(event.shiftKey ? last : first)?.focus();}
      }
    };
    const media=window.matchMedia('(min-width: 1280px)');
    const onResize=()=>{if(media.matches){setOpen(false);setMobileServicesOpen(false);}};
    media.addEventListener('change',onResize);
    document.addEventListener('keydown',onKey);
    return ()=>{document.body.style.overflow=previous;document.removeEventListener('keydown',onKey);media.removeEventListener('change',onResize);};
  },[open]);
  const onServiceKey=(event: KeyboardEvent<HTMLDivElement>)=>{
    if(event.key==='Escape'){event.preventDefault();setServicesOpen(false);servicesButton.current?.focus();return;}
    if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key)) return;
    event.preventDefault();setServicesOpen(true);
    requestAnimationFrame(()=>{
      const links=Array.from(serviceList.current?.querySelectorAll<HTMLAnchorElement>('a') || []);
      const index=links.indexOf(document.activeElement as HTMLAnchorElement);
      const next=event.key==='Home' ? 0 : event.key==='End' ? links.length-1 : event.key==='ArrowDown' ? (index+1)%links.length : index<=0 ? links.length-1 : index-1;
      links[next]?.focus();
    });
  };
  return <header className="nav-blur fixed inset-x-0 top-0 z-50">
    <nav className="shell flex h-20 items-center justify-between gap-5" aria-label="Main navigation">
      <Link to="/" aria-label="Silatech Growth Partners home"><Brand /></Link>
      <div className="hidden items-center gap-6 xl:flex">
        <div ref={disclosure} className="relative" onKeyDown={onServiceKey} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node))setServicesOpen(false);}}>
          <button ref={servicesButton} onClick={()=>setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen} aria-controls="desktop-services" className="flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-copy hover:text-white">Services <ChevronDown aria-hidden="true" className={`h-4 w-4 transition ${servicesOpen ? 'rotate-180' : ''}`} /></button>
          <div id="desktop-services" ref={serviceList} hidden={!servicesOpen} className="absolute -left-8 top-full mt-3 w-[420px] max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain rounded-2xl border border-white/15 bg-ink-soft p-3 shadow-2xl">
            <Link to="/services" className="block rounded-xl px-4 py-3 text-sm font-bold text-mint hover:bg-white/5">All services</Link>
            <ul>{services.map(service=><li key={service.slug}><Link to={`/services/${service.slug}`} className="block rounded-xl px-4 py-3 text-sm leading-6 text-slate-200 hover:bg-white/5">{service.title}</Link></li>)}</ul>
            <div className="mt-2 grid grid-cols-2 border-t border-white/10 pt-2"><Link to="/approach" className="rounded-xl px-4 py-3 text-xs font-bold text-sky hover:bg-white/5">Our approach</Link><Link to="/pricing" className="rounded-xl px-4 py-3 text-xs font-bold text-sky hover:bg-white/5">Pricing & engagements</Link></div>
          </div>
        </div>
        {NAV_LINKS.map(item=><Link key={item.href} to={item.href} aria-current={location.pathname===item.href ? 'page' : undefined} className={item.href==='/contact' ? 'btn-primary px-5 py-3' : 'text-sm font-semibold text-slate-copy hover:text-white'}>{item.name}{item.href==='/contact' && <ArrowUpRight aria-hidden="true" className="h-4 w-4" />}</Link>)}
      </div>
      <button ref={button} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 text-white xl:hidden" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}</button>
    </nav>
    <div id="mobile-menu" ref={menu} hidden={!open} className="shell max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-white/10 py-6 xl:hidden">
      <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
        <button onClick={()=>setMobileServicesOpen(!mobileServicesOpen)} aria-expanded={mobileServicesOpen} aria-controls="mobile-services" className="flex min-h-12 items-center justify-between rounded-xl px-3 py-3 text-left text-base font-semibold text-slate-200 hover:bg-white/5">Services<ChevronDown aria-hidden="true" className={`h-4 w-4 ${mobileServicesOpen ? 'rotate-180' : ''}`} /></button>
        <div id="mobile-services" hidden={!mobileServicesOpen} className="mb-3 rounded-xl border border-white/10 bg-white/[.03] p-2"><Link to="/services" className="block rounded-lg px-3 py-3 text-sm font-bold text-mint">All services</Link><ul>{services.map(service=><li key={service.slug}><Link to={`/services/${service.slug}`} className="block rounded-lg px-3 py-3 text-sm leading-6 text-slate-200 hover:bg-white/5">{service.title}</Link></li>)}</ul></div>
        {NAV_LINKS.map(item=><Link key={item.href} to={item.href} className="rounded-xl px-3 py-3 text-base font-semibold text-slate-200 hover:bg-white/5">{item.name}</Link>)}
        <div className="mt-3 grid gap-1 border-t border-white/10 pt-3"><Link to="/approach" className="rounded-xl px-3 py-3 text-sm text-slate-copy hover:bg-white/5">Our approach</Link><Link to="/pricing" className="rounded-xl px-3 py-3 text-sm text-slate-copy hover:bg-white/5">Pricing & engagements</Link></div>
      </nav>
    </div>
  </header>;
}