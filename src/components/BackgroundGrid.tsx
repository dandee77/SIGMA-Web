import React from 'react';
const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* Fine grid lines */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(156, 163, 175, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156, 163, 175, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Medium grid lines every 5th line */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(156, 163, 175, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156, 163, 175, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px',
        }}
      />
      
      {/* Major grid lines every 10th line */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(156, 163, 175, 0.4) 2px, transparent 2px),
            linear-gradient(90deg, rgba(156, 163, 175, 0.4) 2px, transparent 2px)
          `,
          backgroundSize: '400px 400px',
        }}
      />
    </div>
  );
};

export default BackgroundGrid;