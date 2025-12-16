import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { USE_CASES } from '../constants';
import { Sparkles, Plus } from 'lucide-react';

// Custom AI Star Icon (Four-pointed star)
const AIStarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
  </svg>
);

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Increase duration to allow reading the longer text and seeing all integrations pop up
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % USE_CASES.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  const currentCase = USE_CASES[currentIndex];

  // Container variants for staggering the integration pills
  const integrationContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const integrationItemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 } 
    }
  };

  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-10 max-w-7xl mx-auto overflow-hidden">
      
      {/* Main Heading Area */}
      <div className="text-center w-full max-w-5xl mx-auto space-y-2 md:space-y-4 mb-16">
        
        {/* Static Top Line with Cursive Accent */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-sans font-medium text-clevrr-secondary tracking-tight flex flex-col md:block items-center justify-center gap-2 md:gap-3"
        >
          <span className="px-4 font-cursive font-bold text-4xl md:text-6xl lg:text-7xl text-gradient-pulse pb-2 inline-block transform translate-y-1">
            AI Co-founder
          </span>
          <span className="text-clevrr-secondary">that can</span>
        </motion.h1>

        {/* Dynamic Animated Line */}
        <div className="h-40 md:h-56 flex items-center justify-center relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCase.id}
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-x-0 flex justify-center items-center"
            >
              {/* Mixed Typography Use Case */}
              <div className="relative flex flex-col md:block items-center justify-center px-4">
                <span className="font-cursive font-bold text-5xl md:text-7xl lg:text-8xl text-gradient-pulse px-4 pb-2 leading-none">
                  {currentCase.actionText.highlight}
                </span>
                <span className="text-3xl md:text-5xl lg:text-6xl font-sans font-medium text-clevrr-secondary tracking-tight flex flex-col md:block items-center justify-center gap-2 md:gap-3">
                  {currentCase.actionText.rest}
                </span>
                
                {/* Decorative sparkle to emphasize "AI" magic */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  className="absolute -top-1 -right-2 md:-top-1 md:-right-12 z-10"
                >
                  <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-clevrr-primary fill-clevrr-primary animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Integration Line - Multiple Items */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-xl md:text-2xl font-light text-slate-500 mt-2 h-auto min-h-[60px]">
          <span className="mb-2 md:mb-0">with</span>
          
          <AnimatePresence mode="wait">
             <motion.div 
                key={`container-${currentCase.id}`}
                variants={integrationContainerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
             >
                {currentCase.integrations.map((integration, index) => (
                  <React.Fragment key={`${integration.name}-${index}`}>
                    <motion.div
                      variants={integrationItemVariants}
                      className="flex items-center gap-2 bg-white/70 px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-white/60 shadow-sm backdrop-blur-md"
                    >
                      <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center overflow-hidden">
                         <img 
                           src={integration.logo} 
                           alt={integration.name}
                           className="w-full h-full object-contain"
                           loading="lazy"
                         />
                      </div>
                      <span className="text-sm md:text-lg font-medium text-slate-700 whitespace-nowrap">
                        {integration.name}
                      </span>
                    </motion.div>
                    
                    {/* Add a plus sign between items, but not after the last one */}
                    {index < currentCase.integrations.length - 1 && (
                      <motion.div variants={integrationItemVariants} className="text-slate-300">
                        <Plus className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
             </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* AI Input Interface with Futuristic Gradient Border */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full max-w-3xl mx-auto relative group mt-8 px-2"
      >
        {/* Animated Rotating Gradient Border Container */}
        <div className="relative rounded-2xl p-[2px] overflow-hidden shadow-2xl shadow-clevrr-primary/20">
          {/* The Conic Gradient that spins - Updated with Brand Colors */}
          <div className="absolute inset-[-50%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0_340deg,#2A51F4_360deg)] opacity-100"></div>
          
          {/* Static background to cover the center, leaving only the border visible */}
          <div className="relative bg-white rounded-[14px] w-full h-full z-10 flex items-center p-1">
            <input 
              type="text" 
              placeholder={currentCase.placeholder}
              className="w-full bg-transparent px-4 py-4 md:py-5 text-base md:text-lg text-slate-800 placeholder-slate-400 focus:outline-none font-poppins font-light tracking-wide"
            />
            
            {/* Primary Action Button - Solid Gradient with AI Star */}
            <button className="relative group/btn flex items-center justify-center p-3 md:p-3.5 rounded-xl transition-all duration-300 flex-shrink-0 mr-1 shadow-lg shadow-clevrr-primary/20 bg-gradient-vivid hover:shadow-clevrr-primary/40 hover:scale-105 active:scale-95">
               <AIStarIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Ambient Glow behind the whole box */}
        <div className="absolute -inset-4 bg-clevrr-primary rounded-3xl blur-3xl opacity-10 -z-10 transition-all duration-1000"></div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
           <SuggestionPill label="Pause Campaigns" icon="⏸️" />
           <SuggestionPill label="Check RTO Rates" icon="📉" />
           <SuggestionPill label="Reconcile Payments" icon="💸" />
        </div>
      </motion.div>
    </section>
  );
};

const SuggestionPill: React.FC<{ label: string; icon: string }> = ({ label, icon }) => (
  <button className="px-4 py-2 bg-white/60 hover:bg-white backdrop-blur-sm border border-white/50 rounded-full text-xs md:text-sm font-medium text-slate-600 hover:text-clevrr-primary hover:border-clevrr-primary/30 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2">
    <span>{icon}</span>
    {label}
  </button>
);

export default Hero;