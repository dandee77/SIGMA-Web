import React from 'react';
interface GlowingPathProps {
  id: string;
  path: string;
  strokeWidth: number;
  glowWidth: number;
  glowColor: string;
  dashArray: string;
  animationDuration: number;
  animationDirection: 'normal' | 'reverse';
}
const GlowingPath = ({
  id,
  path,
  strokeWidth,
  glowWidth,
  glowColor,
  dashArray,
  animationDuration,
  animationDirection
}: GlowingPathProps) => {
  const uniqueAnimationClass = `animate-path-${id}`;
  return <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1400 800">
      {/* Main visible path - thicker lines with no glow */}
      <path id={id} d={path} fill="none" stroke="#000" strokeWidth={strokeWidth * 2} // Double the thickness
    strokeDasharray={dashArray} strokeLinecap="round" strokeOpacity="0.7" className={uniqueAnimationClass} style={{
      animation: `dashOffset ${animationDuration}s linear infinite ${animationDirection}`
    }} />
    </svg>;
};
export default GlowingPath;