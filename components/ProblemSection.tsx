import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Banknote, PackageX, ShoppingBag, BarChart3 } from 'lucide-react';

const PROBLEMS = [
  {
    id: 'ad-spend-oos',
    title: "Burning Ad Spend",
    description: "Ads are running for products that are Out of Stock. You're paying for clicks that can't convert.",
    icon: ShoppingBag,
    angle: 315, // Top Left (approx 10:30)
    color: "text-orange-500",
    bg: "bg-orange-50",
    positionClass: "md:top-[15%] md:left-[0%] lg:left-[5%]"
  },
  {
    id: 'high-rto',
    title: "High RTO on Viral Ads",
    description: "Your campaign is scaling, but so are returns. The ROAS looks good, but the bank balance doesn't.",
    icon: TrendingUp,
    angle: 225, // Bottom Left (approx 7:30)
    color: "text-orange-500",
    bg: "bg-orange-50",
    positionClass: "md:bottom-[15%] md:left-[0%] lg:left-[5%]"
  },
  {
    id: 'unreconciled-cod',
    title: "Unreconciled COD",
    description: "₹5L+ stuck with courier partners. No visibility on who paid what and when.",
    icon: Banknote,
    angle: 45, // Top Right (approx 1:30)
    color: "text-orange-500",
    bg: "bg-orange-50",
    positionClass: "md:top-[15%] md:right-[0%] lg:right-[5%]"
  },
  {
    id: 'shipping-losses',
    title: "Hidden Shipping Losses",
    description: "Volumetric weight discrepancies are eating 15% of your margins silently.",
    icon: PackageX,
    angle: 135, // Bottom Right (approx 4:30)
    color: "text-orange-500",
    bg: "bg-orange-50",
    positionClass: "md:bottom-[15%] md:right-[0%] lg:right-[5%]"
  },
  {
    id: 'blind-forecasting',
    title: "Blind Forecasting",
    description: "Guessing demand on spreadsheets? You're likely overstocking dead stock or stocking out of winners.",
    icon: BarChart3,
    angle: 0, // Top Center (12:00)
    color: "text-orange-500",
    bg: "bg-orange-50",
    positionClass: "md:-top-[5%] md:left-1/2 md:-translate-x-1/2"
  }
];

const ProblemSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  
  // Refs for direct DOM manipulation to ensure high performance animation
  const scannerRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 6000; // 6 seconds per full rotation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calculate continuous rotation
      const progress = (elapsed % duration) / duration; // 0 to 1
      const degrees = progress * 360;

      // Apply rotation directly to DOM elements for smooth 60fps
      if (scannerRef.current) {
        scannerRef.current.style.transform = `rotate(${degrees}deg)`;
      }
      if (beamRef.current) {
        beamRef.current.style.transform = `rotate(${degrees}deg)`;
      }

      // Determine which problem is currently being "scanned"
      // The scanner moves clockwise starting from 0 (12 o'clock)
      let currentActive = null;
      
      PROBLEMS.forEach(p => {
        // Calculate difference between current scanner angle and problem angle
        let diff = degrees - p.angle;
        
        // Handle wrapping around 360 (e.g., scanner at 10 deg, problem at 350 deg)
        if (diff < 0) diff += 360;
        
        // "Lock on" window: Activate if the scanner has just passed the angle (within 30 degrees)
        if (diff < 35) { 
            currentActive = p.id;
        }
      });
      
      // Only trigger state update if it changed
      setActiveId(currentActive);
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
        
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold text-clevrr-secondary uppercase tracking-widest">D2C Reality Check</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-clevrr-secondary mb-6 tracking-tight">
            The <span style={{ filter: 'blur(3.5px)' }}>Invisible</span> Chaos <br className="hidden md:block"/>
            <span className="text-slate-400 font-normal">Draining Your Growth</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Founders rely on gut feelings while revenue leaks through the cracks.
            <strong className="text-slate-700 font-medium ml-1">Do any of these sound familiar?</strong>
          </p>
        </div>

        {/* Radar & Cards Container */}
        <div className="relative min-h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
            
            {/* Mobile Layout: Stack cards */}
            <div className="md:hidden w-full flex flex-col gap-4 relative z-20">
                {PROBLEMS.map((problem) => (
                    <div 
                        key={problem.id}
                        className={`p-5 rounded-2xl border bg-white shadow-lg transition-all duration-300 ${
                            activeId === problem.id 
                            ? 'border-orange-500 ring-1 ring-orange-500/20' 
                            : 'border-slate-100'
                        }`}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2.5 rounded-xl ${problem.bg}`}>
                                <problem.icon className={`w-5 h-5 ${problem.color}`} />
                            </div>
                            <h3 className="font-bold text-slate-800 text-lg">{problem.title}</h3>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">{problem.description}</p>
                    </div>
                ))}
            </div>

            {/* Desktop: Radial Cards */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">
              {PROBLEMS.map((problem) => (
                  <motion.div 
                      key={problem.id}
                      className={`absolute w-72 lg:w-80 p-6 rounded-2xl bg-white border transition-all duration-300 pointer-events-auto ${problem.positionClass} ${
                          activeId === problem.id 
                          ? 'shadow-2xl shadow-orange-500/10 border-orange-500 -translate-y-2 z-30' 
                          : 'shadow-lg shadow-slate-200/50 border-slate-100 opacity-50 grayscale z-10'
                      }`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: activeId === problem.id ? 1 : 0.5, scale: 1 }}
                      viewport={{ once: true }}
                  >
                      <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-xl ${problem.bg}`}>
                              <problem.icon className={`w-6 h-6 ${problem.color}`} />
                          </div>
                          {activeId === problem.id && (
                              <span className="px-2 py-1 bg-orange-100 text-orange-600 text-[10px] font-bold uppercase rounded tracking-wider animate-pulse">
                                  Detected
                              </span>
                          )}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{problem.title}</h3>
                      <p className="text-slate-500 leading-relaxed text-sm">{problem.description}</p>
                  </motion.div>
              ))}
            </div>

            {/* The Radar Interface (Centered) */}
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] flex items-center justify-center">
                
                {/* Concentric Rings */}
                <div className="absolute inset-0 border border-slate-100 rounded-full"></div>
                <div className="absolute inset-[18%] border border-slate-100 rounded-full"></div>
                <div className="absolute inset-[36%] border border-slate-100 rounded-full"></div>
                <div className="absolute inset-[54%] border border-slate-50 rounded-full bg-slate-50/30"></div>

                {/* Axis Lines */}
                <div className="absolute w-full h-px bg-slate-100"></div>
                <div className="absolute h-full w-px bg-slate-100"></div>

                {/* Rotating Scanner Gradient Area */}
                <div 
                  ref={scannerRef}
                  className="absolute inset-0 rounded-full overflow-hidden will-change-transform"
                >
                     <div className={`w-full h-full transition-colors duration-200 ${
                       activeId ? 'bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,rgba(249,115,22,0.15)_360deg)]' : 'bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,rgba(42,81,244,0.05)_360deg)]'
                     }`}></div>
                </div>
                
                {/* Rotating Scanner Tip Line */}
                <div 
                  ref={beamRef}
                  className="absolute inset-0 will-change-transform"
                >
                     <div className={`w-[2px] h-1/2 mx-auto transition-colors duration-200 ${
                        activeId ? 'bg-gradient-to-t from-orange-500 to-transparent shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'bg-gradient-to-t from-clevrr-primary/30 to-transparent'
                     }`}></div>
                </div>

                {/* Center Core */}
                <div className="absolute w-8 h-8 bg-white rounded-full shadow-lg border border-slate-100 z-10 flex items-center justify-center">
                     <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeId ? 'bg-orange-500 animate-pulse' : 'bg-clevrr-primary'}`}></div>
                </div>

                {/* Discrepancy Dots on the Radar */}
                {PROBLEMS.map((problem) => {
                    // Position calculations
                    const radius = 42; // Percentage from center
                    const rad = (problem.angle - 90) * (Math.PI / 180);
                    const x = 50 + radius * Math.cos(rad);
                    const y = 50 + radius * Math.sin(rad);

                    const isActive = activeId === problem.id;

                    return (
                        <div 
                            key={`dot-${problem.id}`}
                            className="absolute w-6 h-6 -ml-3 -mt-3 flex items-center justify-center transition-all duration-300 z-20"
                            style={{ left: `${x}%`, top: `${y}%` }}
                        >
                            {/* The Blip */}
                            <motion.div 
                                animate={isActive ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : { scale: 1, opacity: 0.2 }}
                                transition={{ repeat: isActive ? Infinity : 0, duration: 1.5 }}
                                className={`rounded-full ${isActive ? 'bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]' : 'bg-slate-300'} w-2.5 h-2.5`}
                            />
                            {/* Ripple Effect when active */}
                            {isActive && (
                                <div className="absolute inset-0 rounded-full border border-orange-500/50 animate-ping-slow"></div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;