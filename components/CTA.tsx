import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const CTA = () => (
  <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
    <div className="hero-orb absolute -left-48 -top-48 h-[600px] w-[600px]" /><div className="mint-orb absolute -bottom-56 -right-40 h-[620px] w-[620px]" />
    <div className="shell relative text-center"><span className="eyebrow-light">Your next step</span><h2 className="mx-auto mt-6 max-w-4xl font-display text-[2rem] font-bold leading-tight tracking-[-.04em] text-white sm:text-5xl lg:text-6xl">Your business should not depend on remembering everything.</h2><p className="body-lg mx-auto mt-7 max-w-2xl text-slate-copy">Let us identify where leads, time, and information are getting lost—and build a practical system that helps your business run better.</p><div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-auto">Book a diagnostic <ArrowRight className="h-4 w-4" /></a><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-light w-full sm:w-auto"><MessageCircle className="h-4 w-4 text-mint" /> Message us on WhatsApp</a></div></div>
  </section>
);

export default CTA;
