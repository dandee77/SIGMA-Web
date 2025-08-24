import AnimatedBackground from './AnimatedBackground';
import { PlayIcon } from 'lucide-react';
const HeroSection = () => {
  return <div className="relative w-full min-h-screen overflow-hidden bg-white">
      <AnimatedBackground />
      
      {/* Glassmorphism container for content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-8 min-h-screen text-center">
        {/* Glassmorphism background for text area - centered and compact */}
        <div className="absolute bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30 shadow-2xl"
             style={{
               left: '50%',
               top: '50%',
               transform: 'translate(-50%, -50%)',
               width: 'min(900px, 90vw)',
               height: '500px',
               padding: '60px 40px'
             }}></div>
        
        {/* Content with floating animation and glow */}
        <div className="relative z-10 animate-float-text">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-900 drop-shadow-lg" 
              style={{
                textShadow: '0 0 30px rgba(0, 0, 0, 0.1), 0 0 60px rgba(0, 0, 0, 0.05)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
              }}>
            Summing Innovation
            <br />
            Into Simple
            <br />
            Solutions
          </h1>
          
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-12 drop-shadow-md"
             style={{
               textShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
               filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
             }}>
            Unlock operational excellence through AI-powered automation,
            streamlined workflows, and data-driven insights that accelerate growth
            and maximize efficiency.
          </p>
        </div>
        
        {/* Buttons with floating animation and glassmorphism */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 animate-float-buttons">
          <button className="bg-black/80 hover:bg-black/90 backdrop-blur-sm text-white px-8 py-3 rounded-full flex items-center justify-center transition-all duration-300 font-medium shadow-2xl hover:shadow-3xl hover:scale-105 border border-white/20"
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)',
                  }}>
            Start Your Project &rarr;
          </button>
          
          <button className="bg-white/80 hover:bg-white/90 backdrop-blur-sm text-black px-8 py-3 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-300/50 font-medium shadow-2xl hover:shadow-3xl hover:scale-105"
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.05)',
                  }}>
            <PlayIcon className="w-5 h-5 mr-2" /> View Demo
          </button>
        </div>
      </div>
    </div>;
};
export default HeroSection;