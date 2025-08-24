type AnimationType = 'spin' | 'float' | 'pulse';

interface AnimatedSymbolProps {
  symbol: string;
  x: number; // percentage position (0-100)
  y: number; // percentage position (0-100)
  size: string;
  color: string;
  animationType: AnimationType;
  duration: number;
  delay: number;
}

const AnimatedSymbol = ({
  symbol,
  x,
  y,
  size,
  color,
  animationType,
  duration,
  delay
}: AnimatedSymbolProps) => {
  const getAnimationClass = () => {
    switch (animationType) {
      case 'spin':
        return 'animate-spin-slow';
      case 'float':
        return 'animate-float';
      case 'pulse':
        return 'animate-pulse-scale';
      default:
        return '';
    }
  };

  return (
    <div 
      className={`absolute flex items-center justify-center ${getAnimationClass()}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        fontSize: size,
        color: color,
        width: size,
        height: size,
        fontWeight: 'bold',
        zIndex: 5,
        transformOrigin: 'center center',
        opacity: 0.6,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)', // Center the symbol on its position
      }}
    >
      {symbol}
    </div>
  );
};

export default AnimatedSymbol;