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
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/5 z-[1]"></div>
      
      {/* All paths in a single SVG element */}
      <svg className="absolute inset-0 w-full h-full z-[2]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1400 800">
        {/* Secondary subtle paths - spread across full viewport */}
        <path id="path-four" d="M-200,60 Q400,20 800,100 T1600,80" fill="none" stroke="#000" strokeOpacity="0.12" strokeWidth="2" strokeDasharray="5 25" className="path-four" />
        <path id="path-five" d="M-200,740 Q400,780 800,720 T1600,760" fill="none" stroke="#000" strokeOpacity="0.08" strokeWidth="2" strokeDasharray="4 20" className="path-five" />
        
        {/* Main animated paths - natural curves with better spacing */}
        <path 
          id="path-one" 
          d="M-200,120 Q250,80 600,160 T1200,120 T2000,180" 
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
          d="M-200,680 Q250,720 600,640 T1200,680 T2000,620" 
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
          d="M-200,400 Q250,360 600,440 T1200,380 T2000,420" 
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
      <div className="absolute inset-0 w-full h-full z-[3]">
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