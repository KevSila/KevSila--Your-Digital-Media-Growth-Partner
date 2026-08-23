import CTA from '../components/CTA';
import Hero from '../components/Hero';
import Industries from '../components/Industries';
import PageMeta from '../components/PageMeta';
import Pricing from '../components/Pricing';
import Process from '../components/Process';
import Services from '../components/Services';
import WhySilatech from '../components/WhySilatech';

const HomePage = () => (
  <>
    <PageMeta title="AI Business Automation & Operational Systems in Kenya | Silatech" description="Silatech helps Kenyan SMEs and growing organizations organize WhatsApp leads, automate follow-ups, improve reporting, and build practical business systems." />
    <Hero />
    <Services />
    <Industries />
    <Process />
    <WhySilatech />
    <Pricing />
    <CTA />
  </>
);

export default HomePage;
