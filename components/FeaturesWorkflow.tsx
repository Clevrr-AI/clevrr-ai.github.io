import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Search, Bot, ArrowRight, Activity, GitGraph } from 'lucide-react';

const STEPS = [
  { 
    id: 'what', 
    label: '1. What Happened?', 
    icon: BarChart,
    title: "Unified Department Dashboards",
    description: "No more tab switching. Get a single source of truth for Sales, Marketing, Fulfillment, and Finance.",
    features: ["Real-time Sales Velocity", "Ad Spend vs. Inventory", "RTO Heatmaps", "Customer Cohort Retention"],
    visual: (
      <div className="grid grid-cols-2 gap-4 w-full h-full p-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex flex-col justify-between">
            <div className="text-xs text-slate-400">Total Revenue</div>
            <div className="text-xl font-bold text-slate-800">₹24.5L</div>
            <div className="h-8 w-full bg-blue-50 rounded mt-2 overflow-hidden relative">
               <div className="absolute bottom-0 left-0 w-full h-full bg-blue-500/20" style={{ clipPath: 'polygon(0 100%, 20% 60%, 40% 80%, 60% 40%, 80% 50%, 100% 20%, 100% 100%)' }}></div>
            </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex flex-col justify-between">
            <div className="text-xs text-slate-400">Marketing ROAS</div>
            <div className="text-xl font-bold text-orange-500">3.8x</div>
            <div className="h-1 w-full bg-slate-100 rounded mt-auto">
               <div className="h-full w-[70%] bg-orange-500 rounded"></div>
            </div>
        </div>
        <div className="col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-3">
             <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-500">Inventory Health</span>
                <span className="text-[10px] text-red-500 bg-red-50 px-2 py-0.5 rounded">2 Risks</span>
             </div>
             <div className="space-y-2">
                <div className="flex justify-between text-xs">
                    <span>SKU-101 (Blue Shirt)</span>
                    <span className="text-slate-400">Low Stock</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full">
                    <div className="bg-red-500 h-1.5 rounded-full w-[15%]"></div>
                </div>
             </div>
        </div>
      </div>
    )
  },
  { 
    id: 'why', 
    label: '2. Why it Happened?', 
    icon: Search,
    title: "Root Cause Diagnosis",
    description: "Clevrr digs deep into the data to find the correlations you missed. Why did sales drop? Was it the creative, the checkout, or the price?",
    features: ["Automated RCA Trees", "Competitor Price Analysis", "Creative Fatigue Detection", "Gateway Failure Analysis"],
    visual: (
       <div className="w-full h-full p-6 flex items-center justify-center relative">
          <div className="absolute top-1/2 left-4 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center border border-red-200 z-10">
             <Activity className="w-5 h-5 text-red-500" />
          </div>
          <div className="absolute top-1/2 left-16 right-16 h-0.5 bg-slate-200 border-t border-dashed border-slate-300"></div>
          <div className="absolute top-1/2 right-4 w-12 h-12 bg-white rounded-lg shadow-md border border-slate-100 flex flex-col items-center justify-center z-10 p-1">
             <span className="text-[8px] text-slate-400 uppercase">Culprit</span>
             <span className="text-xs font-bold text-slate-800 text-center leading-tight">Image Size</span>
          </div>
          
          {/* Connecting Nodes */}
          <div className="absolute top-[30%] left-[40%] bg-white px-3 py-1 rounded-full border border-slate-200 text-[10px] shadow-sm">
             Bounce Rate +40%
          </div>
          <div className="absolute bottom-[30%] left-[60%] bg-white px-3 py-1 rounded-full border border-slate-200 text-[10px] shadow-sm">
             Page Load Time 5s
          </div>
       </div>
    )
  },
  { 
    id: 'next', 
    label: '3. What to do Next?', 
    icon: Bot,
    title: "Prescriptive Automation",
    description: "Don't just stare at the problem. Fix it. Use our library of pre-built automations or build your own workflows.",
    features: ["1-Click Campaign Scaling", "Auto-Block RTO Pincodes", "Customer Win-back Flows", "Dynamic Pricing Rules"],
    visual: (
       <div className="w-full h-full p-4 flex flex-col gap-3 overflow-hidden">
          <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg border border-slate-800 shadow-lg transform translate-x-4">
             <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
             <div className="text-xs text-white">Rule: <span className="text-green-400">If ROAS {'>'} 4</span></div>
             <ArrowRight className="w-3 h-3 text-slate-500 ml-auto" />
             <div className="text-xs text-slate-300 border border-slate-700 px-2 py-0.5 rounded">Scale Budget 20%</div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg border border-slate-800 shadow-lg transform translate-x-0 opacity-80">
             <div className="w-2 h-2 rounded-full bg-orange-400"></div>
             <div className="text-xs text-white">Rule: <span className="text-orange-400">If Stock &lt; 10</span></div>
             <ArrowRight className="w-3 h-3 text-slate-500 ml-auto" />
             <div className="text-xs text-slate-300 border border-slate-700 px-2 py-0.5 rounded">Pause Ads</div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg shadow-sm transform translate-x-8">
             <div className="w-8 h-8 bg-clevrr-primary/10 rounded flex items-center justify-center text-clevrr-primary">
                <GitGraph className="w-4 h-4" />
             </div>
             <div>
                <div className="text-xs font-bold text-slate-800">Build New Workflow</div>
                <div className="text-[10px] text-slate-500">Drag & Drop Editor</div>
             </div>
          </div>
       </div>
    )
  }
];

const FeaturesWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('what');
  
  // Refs for scroll spying
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger point is 1/3 down the viewport
      const triggerPoint = window.innerHeight / 3;
      let currentActiveId = STEPS[0].id;

      // Find the last section that has its top above the trigger point
      STEPS.forEach((step, index) => {
        const el = sectionRefs.current[index];
        if (!el) return;

        const rect = el.getBoundingClientRect();
        // If the element's top is less than the trigger point (meaning it has scrolled up into view or past it)
        if (rect.top < triggerPoint) {
            currentActiveId = step.id;
        }
      });
      
      setActiveStep(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (id: string, index: number) => {
    const el = sectionRefs.current[index];
    if (el) {
      // Use getBoundingClientRect + window.scrollY to get absolute document position.
      // Offset logic: Navbar (80px) + Sticky Nav (approx 80px) + Breathing room (20px) = 180px
      const navOffset = 180; 
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
            The Intelligence Loop
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 mb-6">
            From "What Happened" to <br/>
            <span className="text-clevrr-primary">"Problem Solved"</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Most tools stop at showing you the data. Clevrr tells you why it matters and executes the fix.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 relative">
          
          {/* Sticky Sidebar Navigation */}
          {/* Mobile: Sticky top bar with horizontal scroll. Desktop: Sticky sidebar vertical list. */}
          {/* Note: sticky moved to the parent wrapper to ensure it sticks relative to the content column height in flex container */}
          <div className="lg:w-1/3 z-30 sticky top-20 lg:top-32 lg:self-start">
             <div className="bg-slate-50/95 backdrop-blur-sm lg:bg-transparent lg:backdrop-filter-none py-4 lg:py-0 -mx-4 px-4 lg:mx-0 lg:px-0 lg:space-y-4 transition-all duration-300">
               <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 no-scrollbar snap-x">
                 {STEPS.map((step, index) => {
                   const isActive = activeStep === step.id;
                   return (
                     <button
                       key={step.id}
                       onClick={() => scrollToStep(step.id, index)}
                       className={`shrink-0 lg:w-full flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl text-left transition-all duration-300 border-2 snap-center ${
                         isActive 
                           ? 'bg-white border-clevrr-primary shadow-lg scale-105 z-10' 
                           : 'bg-white/60 lg:bg-transparent border-transparent hover:bg-slate-100 text-slate-500 opacity-70 hover:opacity-100'
                       }`}
                     >
                       <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                         isActive ? 'bg-clevrr-primary text-white' : 'bg-slate-200 text-slate-500'
                       }`}>
                         <step.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                       </div>
                       <span className={`font-bold text-sm lg:text-lg whitespace-nowrap lg:whitespace-normal ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                         {step.label}
                       </span>
                     </button>
                   );
                 })}
               </div>
             </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="lg:w-2/3 space-y-24 md:space-y-32 pb-24">
             {STEPS.map((step, index) => (
               <div 
                 key={step.id} 
                 ref={el => { sectionRefs.current[index] = el; }}
               >
                 <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col">
                    {/* Visual Area */}
                    <div className="w-full bg-slate-50 h-[300px] md:h-[400px] relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#2A51F4 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        <div className="transform hover:scale-105 transition-transform duration-500">
                          {step.visual}
                        </div>
                    </div>
                    
                    {/* Text Area */}
                    <div className="p-8 md:p-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{step.title}</h3>
                        <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {step.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <span className="text-slate-700 font-medium text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                    </div>
                 </div>
               </div>
             ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesWorkflow;