import React, { useEffect, useState, useRef } from 'react';
interface AnimatedSymbolProps {
  symbol: string;
  pathId: string;
  size: string;
  color: string;
  duration: number;
  delay: number;
  glowEffect?: boolean;
  startPosition?: number;
}
const AnimatedSymbol = ({
  symbol,
  pathId,
  size,
  color,
  duration,
  delay,
  glowEffect = false,
  startPosition = 0
}: AnimatedSymbolProps) => {
  const symbolRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Get numeric size from string (remove 'px' if present)
    const sizeValue = parseInt(size, 10) || 40;
    // Function to animate the symbol along the path
    const animateAlongPath = () => {
      // Get the path element by ID
      const pathElement = document.getElementById(pathId);
      if (!pathElement || !(pathElement instanceof SVGPathElement)) {
        console.error(`Path element with id ${pathId} not found or is not an SVG path`);
        return;
      }
      const symbolElement = symbolRef.current;
      if (!symbolElement) {
        console.error('Symbol element reference not found');
        return;
      }
      // Get the path length to calculate positions
      const pathLength = pathElement.getTotalLength();
      // Set initial position based on startPosition parameter
      let initialPosition = (startPosition || 0) * pathLength;
      // Make symbol visible
      setIsVisible(true);
      // Animation function
      const animate = () => {
        // Get current time
        const now = performance.now() / 1000; // convert to seconds
        // Calculate progress along the path (0 to 1)
        // Adding delay to the calculation
        const effectiveTime = now - delay;
        const progress = effectiveTime % duration / duration % 1;
        // Get the point at the current position on the path
        const point = pathElement.getPointAtLength(progress * pathLength);
        // Calculate rotation angle for added effect
        const angle = progress * 360;
        // Position the symbol at the point, centering it
        symbolElement.style.transform = `translate(${point.x - sizeValue / 2}px, ${point.y - sizeValue / 2}px) rotate(${angle}deg)`;
        // Continue animation
        requestAnimationFrame(animate);
      };
      // Start the animation
      const animationId = requestAnimationFrame(animate);
      // Cleanup function
      return () => {
        cancelAnimationFrame(animationId);
      };
    };
    // Delay the start of animation to ensure DOM is ready
    const timeoutId = setTimeout(animateAlongPath, delay * 1000 + 100);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathId, size, color, duration, delay, startPosition, symbol]);
  return <div ref={symbolRef} className="absolute flex items-center justify-center symbol-animation" style={{
    fontSize: size,
    color: color,
    width: size,
    height: size,
    fontWeight: 'bold',
    zIndex: 5,
    transformOrigin: 'center center',
    opacity: isVisible ? 0.8 : 0,
    visibility: isVisible ? 'visible' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none'
  }}>
      {symbol}
    </div>;
};
export default AnimatedSymbol;