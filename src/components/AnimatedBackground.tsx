import { useEffect, useState } from 'react';
import AnimatedSymbol from './AnimatedSymbol';
import TracingCircle from './TracingCircle';
import GlowingPath from './GlowingPath';
import BackgroundGrid from './BackgroundGrid';
const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  // Only render animations after component is mounted to avoid SSR issues
  if (!mounted) return <div className="absolute inset-0 w-full h-full bg-white"></div>;
  return <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Background grid at the bottom layer */}
      <BackgroundGrid />
      {/* Secondary subtle paths */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1400 800">
        <path id="path-four" d="M-100,50 Q300,150 700,100 T1400,180 T2200,120" fill="none" stroke="#000" strokeOpacity="0.12" strokeWidth="2" strokeDasharray="5 25" className="path-four" />
        <path id="path-five" d="M-100,500 Q300,400 700,480 T1400,380 T2200,450" fill="none" stroke="#000" strokeOpacity="0.08" strokeWidth="2" strokeDasharray="4 20" className="path-five" />
      </svg>
      {/* Main animated paths with thicker lines */}
      <div className="absolute inset-0 w-full h-full z-[3]">
        <GlowingPath id="path-one" path="M-200,150 Q250,50 600,200 T1200,100 T2000,250" strokeWidth={3} glowWidth={0} glowColor="transparent" dashArray="12 18" animationDuration={80} animationDirection="normal" />
        <GlowingPath id="path-two" path="M-200,450 Q250,650 700,450 T1400,550 T2100,450" strokeWidth={3.5} glowWidth={0} glowColor="transparent" dashArray="14 20" animationDuration={95} animationDirection="reverse" />
        <GlowingPath id="path-three" path="M-200,300 Q250,400 600,300 T1200,200 T2000,300" strokeWidth={2.8} glowWidth={0} glowColor="transparent" dashArray="10 16" animationDuration={85} animationDirection="normal" />
      </div>
      {/* Tracing circles */}
      <div className="absolute inset-0 w-full h-full z-[4]">
        <TracingCircle pathId="path-one" size={14} color="#000" duration={60} delay={5} glowIntensity={2} />
        <TracingCircle pathId="path-two" size={20} color="#000" duration={75} delay={0} glowIntensity={3} />
        <TracingCircle pathId="path-three" size={12} color="#000" duration={65} delay={20} glowIntensity={2.5} />
        <TracingCircle pathId="path-one" size={17} color="#000" duration={60} delay={25} glowIntensity={3} />
        <TracingCircle pathId="path-two" size={16} color="#000" duration={75} delay={40} glowIntensity={2} />
      </div>
      {/* Animated mathematical symbols - positioned across the hero section */}
      <div className="absolute inset-0 w-full h-full z-[5]">
        {/* Spinning symbols */}
        <AnimatedSymbol 
          symbol="Σ" 
          x={15} 
          y={25} 
          size="45px" 
          color="#000" 
          animationType="spin" 
          duration={8} 
          delay={0} 
        />
        <AnimatedSymbol 
          symbol="π" 
          x={85} 
          y={35} 
          size="40px" 
          color="#000" 
          animationType="spin" 
          duration={10} 
          delay={2} 
        />
        <AnimatedSymbol 
          symbol="∫" 
          x={20} 
          y={75} 
          size="42px" 
          color="#000" 
          animationType="spin" 
          duration={12} 
          delay={4} 
        />
        
        {/* Floating symbols */}
        <AnimatedSymbol 
          symbol="∆" 
          x={75} 
          y={20} 
          size="38px" 
          color="#000" 
          animationType="float" 
          duration={6} 
          delay={1} 
        />
        <AnimatedSymbol 
          symbol="λ" 
          x={10} 
          y={50} 
          size="44px" 
          color="#000" 
          animationType="float" 
          duration={8} 
          delay={3} 
        />
        <AnimatedSymbol 
          symbol="∑" 
          x={90} 
          y={70} 
          size="40px" 
          color="#000" 
          animationType="float" 
          duration={7} 
          delay={5} 
        />
        
        {/* Pulsing symbols */}
        <AnimatedSymbol 
          symbol="O(n)" 
          x={15} 
          y={90} 
          size="36px" 
          color="#000" 
          animationType="pulse" 
          duration={4} 
          delay={0.5} 
        />
        <AnimatedSymbol 
          symbol="∞" 
          x={35} 
          y={60} 
          size="48px" 
          color="#000" 
          animationType="pulse" 
          duration={5} 
          delay={2.5} 
        />
        <AnimatedSymbol 
          symbol="θ" 
          x={80} 
          y={85} 
          size="41px" 
          color="#000" 
          animationType="pulse" 
          duration={6} 
          delay={1.5} 
        />
        <AnimatedSymbol 
          symbol="α" 
          x={60} 
          y={80} 
          size="39px" 
          color="#000" 
          animationType="pulse" 
          duration={4.5} 
          delay={3.5} 
        />
      </div>
      {/* Large subtle decorative elements */}
      <div className="absolute top-[10%] left-[8%] w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-white opacity-20 blur-lg z-[2]"></div>
      <div className="absolute bottom-[15%] right-[10%] w-48 h-48 rounded-full bg-gradient-to-tl from-gray-200 to-white opacity-15 blur-xl z-[2]"></div>
      <div className="absolute top-[40%] left-[15%] w-24 h-24 rounded-full bg-gradient-to-r from-gray-100 to-white opacity-20 blur-md z-[2]"></div>
      <div className="absolute top-[30%] right-[20%] w-16 h-16 rounded-full bg-gradient-to-b from-gray-200 to-white opacity-15 blur-lg z-[2]"></div>
    </div>;
};
export default AnimatedBackground;