
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import AIIntegration from './components/AIIntegration';
import SectorSolutions from './components/SectorSolutions';
import AuditSection from './components/AuditSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Services />
        <AIIntegration />
        <SectorSolutions />
        <AuditSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
