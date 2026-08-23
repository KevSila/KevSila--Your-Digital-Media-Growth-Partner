import { lazy, Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';

const BusinessSystemsPage = lazy(() => import('./pages/BusinessSystemsPage'));

const NotFound = () => <section className="grid min-h-[75vh] place-items-center bg-cloud px-6 pt-24 text-center text-ink"><div><p className="eyebrow">404 · Page not found</p><h1 className="mt-5 text-4xl font-bold !text-ink">This page is not part of the system.</h1><p className="mt-4 text-slate-600">Return to the homepage to explore Silatech’s solutions.</p><Link to="/" className="btn-dark mt-8">Back to homepage</Link></div></section>;

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business-systems-automation" element={<Suspense fallback={<div className="min-h-screen bg-ink" />}><BusinessSystemsPage /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  </BrowserRouter>
);

export default App;
