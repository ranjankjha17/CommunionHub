import React from 'react';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <Features />
    </div>
  );
}

export default Home;