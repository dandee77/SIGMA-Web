import React from 'react';

interface TracingCircleProps {
  pathId: string;
  duration: number;
  delay?: number;
  size?: number;
}

const TracingCircle: React.FC<TracingCircleProps> = ({ 
  pathId, 
  duration, 
  delay = 0, 
  size = 8 
}) => {
  // Get path data based on pathId
  const getPathData = (id: string): string => {
    switch (id) {
      case 'path-one':
        return 'M-200,120 Q250,80 600,160 T1200,120 T2000,180';
      case 'path-two':
        return 'M-200,680 Q250,720 600,640 T1200,680 T2000,620';
      case 'path-three':
        return 'M-200,400 Q250,360 600,440 T1200,380 T2000,420';
      default:
        return 'M-200,120 Q250,80 600,160 T1200,120 T2000,180';
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full z-[4] pointer-events-none">
      <svg 
        className="absolute inset-0 w-full h-full" 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="none" 
        viewBox="0 0 1400 800"
      >
        {/* Glowing dark circle that traces the path */}
        <circle 
          r={size}
          fill="rgba(0, 0, 0, 0.7)"
          opacity={delay > 0 ? 0 : 1}
          style={{
            filter: 'drop-shadow(0 0 12px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 6px rgba(0, 0, 0, 0.6))',
          }}
        >
          <animateMotion
            dur={`${duration}s`}
            repeatCount="indefinite"
            begin={`${delay}s`}
            path={getPathData(pathId)}
            rotate="auto"
          />
          <animate
            attributeName="opacity"
            values={delay > 0 ? "0;1" : "1"}
            dur="0.1s"
            begin={`${delay}s`}
            fill="freeze"
          />
        </circle>
      </svg>
    </div>
  );
};

export default TracingCircle;