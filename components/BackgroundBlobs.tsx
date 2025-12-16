import React from 'react';

const BackgroundBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-50">
      {/* Top Right - Primary Blue Blob */}
      <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-clevrr-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      
      {/* Top Left - Secondary Navy/Purple Blob */}
      <div className="absolute top-[0%] -left-[10%] w-[50vw] h-[50vw] bg-clevrr-secondary/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      {/* Bottom Center - Accent Purple Blob (Replaced Pink) */}
      <div className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] bg-clevrr-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Center White Glow overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
    </div>
  );
};

export default BackgroundBlobs;