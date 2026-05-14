
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import Process from './components/Process';
import WhySilatech from './components/WhySilatech';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-soft-black text-slate-200">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Industries />
        <Process />
        <WhySilatech />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
