import React from 'react';
import HeroSection from '../components/HeroSection';
import MenuSection from '../components/MenuSection';
import TestimonialsSection from '../components/TestimonialsSection';
import InfoSection from '../components/InfoSection';

const Home = ({ onOrderClick }) => {
  return (
    <main>
      <HeroSection onOrderClick={onOrderClick} />
      <MenuSection />
      <TestimonialsSection />
      <InfoSection />
    </main>
  );
};

export default Home;
