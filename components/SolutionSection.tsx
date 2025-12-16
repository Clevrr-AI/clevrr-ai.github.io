import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { SWARM_INTEGRATIONS } from '../constants';
import { LayoutDashboard, Bell, TrendingUp, Users, Package, AlertCircle, CheckCircle2 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Phase 1: Swarm to Core (0 to 0.4)
  const swarmScale = useTransform(smoothScroll, [0, 0.4], [1, 0]);
  const swarmOpacity = useTransform(smoothScroll, [0.3, 0.4], [1, 0]);
  const coreScale = useTransform(smoothScroll, [0, 0.4, 0.5], [0.5, 1.5, 30]); // Explodes outward
  const coreOpacity = useTransform(smoothScroll, [0, 0.4, 0.45], [0, 1, 0]);   // Fades out during explosion
  
  // Phase 2: Dashboard Reveal (0.45 to 1.0)
  const dashOpacity = useTransform(smoothScroll, [0.45, 0.6], [0, 1]);
  const dashRotateX = useTransform(smoothScroll, [0.45, 1], [45, 15]); // Start tilted, straighten slightly
  const dashScale = useTransform(smoothScroll, [0.45, 1], [0.6, 1]);
  const dashY = useTransform(smoothScroll, [0.45, 1], [200, 0]);

  // Generate random positions for the swarm
  const generateRandomPos = (index: number) => {
    // Deterministic random based on index
    const angle = (index * 137.5) * (Math.PI / 180); // Golden angle dispersion
    const r = 250 + (index * 30) % 150; 
    return {
      x: Math.cos(angle) * r,
      y: Math.sin(angle) * r
    };
  };

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-slate-950">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Background Ambient Light */}
        <div className="absolute inset-0 bg-slate-950 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-clevrr-secondary/20 blur-[100px] rounded-full"></div>
        </div>

        {/* Text Layer - Fades out as dashboard enters */}
        <motion.div 
          style={{ opacity: useTransform(smoothScroll, [0, 0.2], [1, 0]) }}
          className="relative z-20 text-center max-w-4xl px-4 mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6 tracking-tight">
            Chaos, Meet <span className="text-clevrr-primary">Control.</span>
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
            Your entire stack, unified into one founder-level brain.
          </p>
        </motion.div>

        {/* The Core Animation Container */}
        <div className="absolute inset-0 flex items-center justify-center z-10 perspective-1000">
          
          {/* 1. The Swarm */}
          <motion.div 
            style={{ scale: swarmScale, opacity: swarmOpacity }}
            className="relative w-0 h-0 flex items-center justify-center"
          >
            {SWARM_INTEGRATIONS.map((tool, i) => {
              const pos = generateRandomPos(i);
              return (
                <motion.div
                  key={tool.name}
                  className="absolute w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-xl shadow-lg flex items-center justify-center p-3 border border-white/50 backdrop-blur-sm"
                  style={{ x: pos.x, y: pos.y }}
                >
                  <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                </motion.div>
              );
            })}
          </motion.div>

          {/* 2. The Core (Clevrr Brain) */}
          <motion.div
            style={{ scale: coreScale, opacity: coreOpacity }}
            className="absolute w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl shadow-[0_0_100px_rgba(42,81,244,0.8)] z-30 flex items-center justify-center p-6 border-4 border-clevrr-primary"
          >
             <img src="https://getclevrr.com/logos/logo-dark.png" alt="Clevrr Core" className="w-full h-auto object-contain" />
          </motion.div>

          {/* 3. The Dashboard Reveal (3D Interface) */}
          <motion.div
            style={{ 
              opacity: dashOpacity, 
              rotateX: dashRotateX,
              scale: dashScale,
              y: dashY,
            }}
            className="w-[99vw] max-w-[1200px] aspect-video bg-clevrr-secondary rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden transform-style-3d origin-bottom"
          >
            {/* Dashboard Mockup Content - Placeholder for Screenshots */}
            <div className="absolute inset-0 flex flex-col">
              <img src="/dashboard.png" alt="dashboard" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;