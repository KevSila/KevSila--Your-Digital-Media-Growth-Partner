
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Process from '../components/Process';
import WhySilatech from '../components/WhySilatech';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <Process />
      <WhySilatech />
      <Pricing />
      <CTA />
    </>
  );
};

export default HomePage;
