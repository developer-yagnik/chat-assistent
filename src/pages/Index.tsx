
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';

const Index = () => {
  return (
    <div className="min-h-screen purple-gradient-bg overflow-hidden">
      <div className="container mx-auto px-4 py-4">
        <Navbar />
        <HeroSection />
        <StatsSection />
      </div>
    </div>
  );
};

export default Index;
