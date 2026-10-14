import { Suspense } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Routes, Route } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import BusinessSystemsPage from './pages/BusinessSystemsPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectCaseStudyPage from './pages/ProjectCaseStudyPage';
import NotFound from './pages/NotFound';
export { pageMetadata, publicPaths } from './data/siteMetadata';
export function render(path: string) {
  return renderToString(<StaticRouter location={path}><SiteLayout><Suspense fallback={<div role="status" className="shell min-h-[70vh] pt-36 text-slate-copy">Loading page…</div>}><Routes><Route path="/" element={<HomePage />} /><Route path="/services" element={<ServicesPage />} /><Route path="/services/:slug" element={<ServicePage />} /><Route path="/contact" element={<ContactPage />} /><Route path="/privacy" element={<PrivacyPage />} /><Route path="/business-systems-automation" element={<BusinessSystemsPage />} /><Route path="/portfolio" element={<PortfolioPage />} /><Route path="/portfolio/:slug" element={<ProjectCaseStudyPage />} /><Route path="*" element={<NotFound />} /></Routes></Suspense></SiteLayout></StaticRouter>);
}