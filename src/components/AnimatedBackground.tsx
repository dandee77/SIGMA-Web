import { useEffect, useState } from 'react';
import AnimatedSymbol from './AnimatedSymbol';
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
      {/* All paths in a single SVG element */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1400 800">
        {/* Secondary subtle paths */}
        <path id="path-four" d="M-100,50 Q300,150 700,100 T1400,180 T2200,120" fill="none" stroke="#000" strokeOpacity="0.12" strokeWidth="2" strokeDasharray="5 25" className="path-four" />
        <path id="path-five" d="M-100,500 Q300,400 700,480 T1400,380 T2200,450" fill="none" stroke="#000" strokeOpacity="0.08" strokeWidth="2" strokeDasharray="4 20" className="path-five" />
        
        {/* Main animated paths with thicker lines that circles will follow */}
        <path 
          id="path-one" 
          d="M0,150 Q350,50 700,200 T1400,100" 
          fill="none" 
          stroke="#000" 
          strokeWidth="6" 
          strokeDasharray="12 18" 
          strokeLinecap="round" 
          strokeOpacity="0.7" 
          className="animate-path-path-one"
          style={{ animation: `dashOffset 80s linear infinite normal` }}
        />
        <path 
          id="path-two" 
          d="M0,450 Q350,650 700,450 T1400,550" 
          fill="none" 
          stroke="#000" 
          strokeWidth="7" 
          strokeDasharray="14 20" 
          strokeLinecap="round" 
          strokeOpacity="0.7" 
          className="animate-path-path-two"
          style={{ animation: `dashOffset 95s linear infinite reverse` }}
        />
        <path 
          id="path-three" 
          d="M0,300 Q350,400 700,300 T1400,200" 
          fill="none" 
          stroke="#000" 
          strokeWidth="5.6" 
          strokeDasharray="10 16" 
          strokeLinecap="round" 
          strokeOpacity="0.7" 
          className="animate-path-path-three"
          style={{ animation: `dashOffset 85s linear infinite normal` }}
        />
      </svg>
      
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