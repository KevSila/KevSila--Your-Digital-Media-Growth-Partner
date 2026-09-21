import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageMeta from './components/PageMeta';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';

const BusinessSystemsPage = lazy(() => import('./pages/BusinessSystemsPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ProjectCaseStudyPage = lazy(() => import('./pages/ProjectCaseStudyPage'));

const RouteFallback = () => <div className="min-h-screen bg-ink" />;

const RouteScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const NotFound = () => (
  <>
    <PageMeta
      title="Page Not Found | Silatech Growth Partners"
      description="The requested Silatech Growth Partners page could not be found."
      robots="noindex, follow"
    />
    <section className="grid min-h-[75vh] place-items-center bg-cloud px-6 pt-24 text-center text-ink">
      <div>
        <p className="eyebrow">404 · Page not found</p>
        <h1 className="mt-5 text-4xl font-bold !text-ink">This page is not part of the system.</h1>
        <p className="mt-4 text-slate-600">Return to the homepage to explore Silatech’s solutions.</p>
        <Link to="/" className="btn-dark mt-8">Back to homepage</Link>
      </div>
    </section>
  </>
);

const App = () => (
  <BrowserRouter>
    <RouteScrollManager />
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business-systems-automation" element={<Suspense fallback={<RouteFallback />}><BusinessSystemsPage /></Suspense>} />
          <Route path="/portfolio" element={<Suspense fallback={<RouteFallback />}><PortfolioPage /></Suspense>} />
          <Route path="/portfolio/:slug" element={<Suspense fallback={<RouteFallback />}><ProjectCaseStudyPage /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  </BrowserRouter>
);

export default App;
