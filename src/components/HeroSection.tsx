import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import { PlayIcon } from 'lucide-react';
const HeroSection = () => {
  return <div className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden bg-white">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-20 pb-32 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Transform Your Business
          <br />
          With Smart Process
          <br />
          Optimization
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Unlock operational excellence through AI-powered automation,
          streamlined workflows, and data-driven insights that accelerate growth
          and maximize efficiency.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full flex items-center justify-center transition-colors font-medium">
            Start Your Project &rarr;
          </button>
          <button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full flex items-center justify-center transition-colors border border-gray-300 font-medium">
            <PlayIcon className="w-5 h-5 mr-2" /> View Demo
          </button>
        </div>
      </div>
    </div>;
};
export default HeroSection;