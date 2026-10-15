import { trackPageView } from './lib/analytics';
const SolutionsPage=lazy(()=>import('./pages/SolutionsPage'));
const ApproachPage=lazy(()=>import('./pages/ApproachPage'));
const PricingPage=lazy(()=>import('./pages/PricingPage'));
const AboutPage=lazy(()=>import('./pages/AboutPage'));
import { lazy, Suspense, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
const BusinessSystemsPage=lazy(()=>import('./pages/BusinessSystemsPage'));
const PortfolioPage=lazy(()=>import('./pages/PortfolioPage'));
const ProjectCaseStudyPage=lazy(()=>import('./pages/ProjectCaseStudyPage'));
const ServicesPage=lazy(()=>import('./pages/ServicesPage'));
const ServicePage=lazy(()=>import('./pages/ServicePage'));
const ContactPage=lazy(()=>import('./pages/ContactPage'));
const PrivacyPage=lazy(()=>import('./pages/PrivacyPage'));
function RouteScrollManager() {
  const { pathname, hash }=useLocation();
  const previousPath=useRef(pathname);
  useEffect(()=>{trackPageView(pathname);},[pathname]);
  useEffect(()=>{
    if(previousPath.current!==pathname) document.getElementById('main-content')?.focus({preventScroll:true});
    previousPath.current=pathname;
    if(!hash) {window.scrollTo({top:0,left:0,behavior:'instant'});return;}
    let id: string;
    try {id=decodeURIComponent(hash.slice(1));} catch {return;}
    const scroll=()=>{const target=document.getElementById(id);if(!target) return false;target.scrollIntoView();return true;};
    const frame=requestAnimationFrame(scroll);
    const observer=new MutationObserver(()=>{if(scroll()) observer.disconnect();});
    observer.observe(document.getElementById('main-content')!,{childList:true,subtree:true});
    const timeout=window.setTimeout(()=>observer.disconnect(),3000);
    return ()=>{cancelAnimationFrame(frame);observer.disconnect();window.clearTimeout(timeout);};
  },[pathname,hash]);
  return null;
}
export default function App() {
  return <BrowserRouter><RouteScrollManager /><SiteLayout><Suspense fallback={<div role="status" className="shell min-h-[70vh] pt-36 text-slate-copy">Loading page…</div>}><Routes><Route path="/" element={<HomePage />} /><Route path="/services" element={<ServicesPage />} /><Route path="/services/:slug" element={<ServicePage />} /><Route path="/solutions" element={<SolutionsPage />} /><Route path="/approach" element={<ApproachPage />} /><Route path="/pricing" element={<PricingPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="/privacy" element={<PrivacyPage />} /><Route path="/business-systems-automation" element={<BusinessSystemsPage />} /><Route path="/portfolio" element={<PortfolioPage />} /><Route path="/portfolio/:slug" element={<ProjectCaseStudyPage />} /><Route path="*" element={<NotFound />} /></Routes></Suspense></SiteLayout></BrowserRouter>;
}