import React, { useEffect, useRef } from 'react';
interface TracingCircleProps {
  pathId: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
  glowIntensity?: number;
}
const TracingCircle = ({
  pathId,
  size,
  color,
  duration,
  delay,
  glowIntensity = 2
}: TracingCircleProps) => {
  const circleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Wait for DOM to be fully loaded
    const initAnimation = () => {
      const circleElement = circleRef.current;
      if (!circleElement) {
        console.error('Circle element ref not found');
        return;
      }
      // Get the path element to follow
      const path = document.getElementById(pathId);
      if (!path) {
        console.error(`Path with id ${pathId} not found`);
        return;
      }
      try {
        // Check if path has getTotalLength method (it should be an SVG path)
        if (typeof path.getTotalLength !== 'function') {
          console.error(`Path element with id ${pathId} is not an SVG path element or doesn't support getTotalLength`);
          return;
        }
        const pathLength = path.getTotalLength();
        console.log(`Circle path ${pathId} length:`, pathLength);
        // Function to position the element along the path
        const positionElementAlongPath = (progress: number) => {
          try {
            // Get point at a specific percentage along the path
            const point = path.getPointAtLength(progress * pathLength);
            // Position the element - already adjusted for size in the component
            circleElement.style.transform = `translate(${point.x - size / 2}px, ${point.y - size / 2}px)`;
            circleElement.style.opacity = '0.6';
            circleElement.style.visibility = 'visible';
          } catch (error) {
            console.error('Error positioning circle:', error);
          }
        };
        // Initial position
        positionElementAlongPath(0);
        // Animation timing with easing
        let startTime: number | null = null;
        const animatePath = (timestamp: number) => {
          if (!startTime) startTime = timestamp - delay * 1000;
          const elapsed = timestamp - startTime;
          // Use cubic bezier easing for smoother movement
          const linearProgress = elapsed % (duration * 1000) / (duration * 1000);
          const easedProgress = easeInOutCubic(linearProgress);
          positionElementAlongPath(easedProgress);
          requestAnimationFrame(animatePath);
        };
        // Cubic easing function for smoother motion
        function easeInOutCubic(t: number): number {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }
        // Start animation after delay
        const animationFrame = setTimeout(() => {
          requestAnimationFrame(animatePath);
        }, delay * 1000);
        return () => {
          clearTimeout(animationFrame);
        };
      } catch (error) {
        console.error('Error initializing circle animation:', error);
      }
    };
    // Run after a slight delay to ensure DOM is ready
    const timeoutId = setTimeout(initAnimation, 500); // Increased delay to ensure DOM is ready
    return () => clearTimeout(timeoutId);
  }, [pathId, size, duration, delay]);
  return <div ref={circleRef} className="absolute tracing-circle" style={{
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    borderRadius: '50%',
    opacity: 0,
    visibility: 'hidden',
    zIndex: 4,
    boxShadow: `0 0 ${glowIntensity * 2}px ${glowIntensity}px rgba(0,0,0,0.3)`,
    filter: `blur(${size / 10}px)`,
    top: 0,
    left: 0
  }} />;
};
export default TracingCircle;