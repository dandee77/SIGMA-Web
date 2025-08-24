import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
export function App() {
  return <div className="w-full min-h-screen bg-white text-black font-sans">
      <Navbar />
      <HeroSection />
    </div>;
}