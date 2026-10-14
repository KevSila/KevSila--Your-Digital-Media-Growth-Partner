import { Link, useLocation } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
export default function NotFound() {
  const { pathname } = useLocation();
  return <><PageMeta path={pathname} title="Page Not Found | Silatech Growth Partners" description="This page could not be found. Explore Silatech services or return to the homepage." robots="noindex, follow" /><section className="grid min-h-[75vh] place-items-center bg-cloud px-6 pb-16 pt-36 text-center text-ink"><div><p className="eyebrow">404 · Page not found</p><h1 className="mt-5 text-4xl font-bold !text-ink">Let’s get you back on track.</h1><p className="mt-4 text-slate-600">Explore our services or start from the homepage.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/" className="btn-dark">Back to homepage</Link><Link to="/services" className="btn-primary">Explore services</Link></div></div></section></>;
}