import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BrainCircuit, 
  TrendingUp, 
  Megaphone, 
  Package, 
  Tag, 
  Wallet, 
  Truck,
  Bot,
  Activity,
  MessageSquare,
  Zap,
  Target,
  Pause,
  Play
} from 'lucide-react';

// --- Data Definitions ---

const AGENTS = [
  {
    id: 'klev',
    name: 'Klev',
    role: 'The Orchestrator',
    relatedProblem: "Fragmented Operations",
    icon: BrainCircuit,
    color: '#FFFFFF',
    description: "The master brain that connects all departments. Klev monitors the entire ecosystem and dispatches specific agents to solve complex problems.",
    collaborators: ['marketing', 'fulfillment', 'finance', 'inventory', 'sales', 'product'], // Klev talks to everyone
    integrations: [],
    workflow: {
      think: "Ingesting real-time data from Marketing, Logistics, and Finance...",
      talk: "Broadcasting strategy updates to all autonomous agents...",
      act: "Generating daily executive briefing & prioritizing tasks."
    }
  },
  {
    id: 'marketing',
    name: 'Growth',
    role: 'Marketing Agent',
    relatedProblem: "Burning Ad Spend",
    icon: Megaphone,
    color: '#FF3B30', // Red/Orange for urgency/ads
    description: "Manages your ad spend with profit-first logic. Kills waste on out-of-stock items and scales winners automatically.",
    collaborators: ['sales', 'inventory', 'fulfillment'], // Added fulfillment for RTO checks on ad scale
    integrations: [
      { name: "Meta Ads", logo: "https://getclevrr.com/integrations/meta.png" },
      { name: "Google Ads", logo: "https://getclevrr.com/integrations/google.png" }
    ],
    workflow: {
      think: "Klev Alert: 'Blue Shirt' stock is critical. ROAS is stable but volume is risky.",
      talk: "Syncing with Sales for velocity & querying Inventory for stock levels...",
      act: "Paused 'Blue Shirt' ad sets to prevent wasted spend."
    }
  },
  {
    id: 'fulfillment',
    name: 'Logistics',
    role: 'Fulfillment Agent',
    relatedProblem: "High RTO Rates",
    icon: Truck,
    color: '#5856D6', // Indigo for logistics
    description: "Optimizes delivery rates and blocks RTO-heavy customers instantly before they can damage your bottom line.",
    collaborators: ['sales', 'finance'], // Logistics needs Sales history & Finance impact
    integrations: [
      { name: "Delhivery", logo: "https://companieslogo.com/img/orig/DELHIVERY.NS-24f77207.png?t=1720244491" },
      { name: "Shiprocket", logo: "https://getclevrr.com/integrations/shiprocket.png" }
    ],
    workflow: {
      think: "Analyzing incoming order #8821 from high-risk pincode 110001.",
      talk: "Verifying customer score with Sales & checking COD limits with Finance...",
      act: "Flagged order as 'High Risk' and disabled COD option."
    }
  },
  {
    id: 'finance',
    name: 'Finance',
    role: 'Finance Agent',
    relatedProblem: "Unreconciled COD",
    icon: Wallet,
    color: '#007AFF', // Blue for trust/finance
    description: "The watchdog for your cashflow. Reconciles every penny automatically and flags discrepancies immediately.",
    collaborators: ['fulfillment', 'sales'], // Finance needs Delivery status & Order value
    integrations: [
      { name: "Razorpay", logo: "https://static-asset.inc42.com/logo/razorpay.png" }
    ],
    workflow: {
      think: "Detected a mismatch in Courier Settlement Report vs Bank Statement.",
      talk: "Pinged Logistics for delivery proof & Sales for order value confirmation...",
      act: "Identified ₹12,500 pending. Auto-raised ticket with Gateway."
    }
  },
  {
    id: 'inventory',
    name: 'Stock',
    role: 'Inventory Agent',
    relatedProblem: "Blind Forecasting",
    icon: Package,
    color: '#FF9500', // Orange for warning/caution
    description: "Predicts stockouts before they happen. Ensures you never overstock dead inventory or run out of bestsellers.",
    collaborators: ['marketing', 'sales'], // Inventory needs Ad plans & Sales trends
    integrations: [
      { name: "Unicommerce", logo: "https://mma.prnewswire.com/media/1701992/Unicommerce_logo.jpg" },
      { name: "Zoho", logo: "https://img.icons8.com/fluent/1200/zoho-books.jpg" }
    ],
    workflow: {
      think: "Demand spike detected. SKU-102 will stock out in 8 days at current velocity.",
      talk: "Alerting Marketing to throttle ads & checking Sales forecast...",
      act: "Drafted Emergency PO for 500 units to bridge the gap."
    }
  },
  {
    id: 'sales',
    name: 'Sales',
    role: 'Sales Agent',
    relatedProblem: "Conversion Leaks",
    icon: TrendingUp,
    color: '#34C759', // Green for growth
    description: "Monitors velocity, revenue leaks, and channel performance 24/7. Fixes listings that aren't converting.",
    collaborators: ['product', 'marketing', 'inventory'], // ADDED Inventory to solve user request
    integrations: [
      { name: "Shopify", logo: "https://getclevrr.com/integrations/shopify.png" },
      { name: "Amazon", logo: "https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1740113564" }
    ],
    workflow: {
      think: "Conversion rate for 'Summer Collection' dropped 15% overnight.",
      talk: "Flagging PDP issues to Product & reviewing traffic source with Marketing...",
      act: "Flagged broken 'Add to Cart' button on mobile view."
    }
  },
  {
    id: 'product',
    name: 'Product',
    role: 'Product Agent',
    relatedProblem: "High Return Rates",
    icon: Tag,
    color: '#AF52DE', // Purple for creative/product
    description: "Analyzes SKU performance, margins, and contribution to the bottom line. Fixes product issues based on feedback.",
    collaborators: ['sales', 'inventory'], // Product needs Return feedback & Batch isolation
    integrations: [
      { name: "Shopify", logo: "https://getclevrr.com/integrations/shopify.png" }
    ],
    workflow: {
      think: "Return rate for Variant B spiked due to 'Size Too Small' feedback.",
      talk: "Pulling return comments from Sales & checking batch ID with Inventory...",
      act: "Updated PDP size guide & flagged production batch."
    }
  }
];

const ORDERED_IDS = ['klev', 'marketing', 'fulfillment', 'finance', 'inventory', 'sales', 'product'];

const TeamSection: React.FC = () => {
  const [activeAgentId, setActiveAgentId] = useState<string>('klev');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeAgent = AGENTS.find(a => a.id === activeAgentId) || AGENTS[0];
  const satelliteAgents = AGENTS.filter(a => a.id !== 'klev');

  // Define which agents should be connected visually
  const connectedAgents = activeAgentId === 'klev' 
    ? satelliteAgents.map(a => a.id)
    : [activeAgentId, ...activeAgent.collaborators];

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveAgentId(prev => {
        const currentIndex = ORDERED_IDS.indexOf(prev);
        const nextIndex = (currentIndex + 1) % ORDERED_IDS.length;
        return ORDERED_IDS[nextIndex];
      });
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Helper to get position on a circle (Radius 160px matches CSS layout)
  const getPosition = (id: string) => {
    const index = satelliteAgents.findIndex(a => a.id === id);
    if (index === -1) return { x: 0, y: 0 }; 
    
    const angle = (index / satelliteAgents.length) * 2 * Math.PI - Math.PI / 2;
    const radius = 160; 
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  const handleManualSelect = (id: string) => {
    setIsAutoPlaying(false);
    setActiveAgentId(id);
  };

  return (
    <section className="relative w-full py-24 bg-slate-900 overflow-hidden text-white">
      
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-clevrr-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-clevrr-accent/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6"
          >
             <Bot className="w-4 h-4 text-clevrr-primary" />
             <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Your New Executive Team</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6"
          >
            Not just a Tool. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-clevrr-primary to-clevrr-accent">
              A Specialized Squad.
            </span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Klev orchestrates six autonomous agents to fix the problems you didn't even know you had.
          </motion.p>
        </div>

        {/* Interactive Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[600px]">
          
          {/* Left: The Neural Orbit (Navigation) */}
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center select-none">
            
            {/* Connection Layer (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
              <defs>
                 <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
              </defs>
              
              {/* Draw lines to ALL connected agents */}
              <AnimatePresence>
                {satelliteAgents.map((agent) => {
                  const isConnected = connectedAgents.includes(agent.id);
                  if (!isConnected) return null;

                  const pos = getPosition(agent.id);
                  return (
                    <motion.g
                      key={`connection-${agent.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* The Path - Using solid stroke instead of gradient to ensure visibility across all angles */}
                      <motion.line
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${pos.x}px)`}
                        y2={`calc(50% + ${pos.y}px)`}
                        stroke="#2A51F4"
                        strokeOpacity="0.6"
                        strokeWidth={activeAgentId === 'klev' ? "1" : "2"}
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* The Data Packet (Moving Dot) */}
                      {activeAgentId !== 'klev' && (
                        <motion.circle
                          r="4"
                          fill="#fff"
                          filter="url(#glow)"
                        >
                          <animateMotion 
                            dur="1.5s" 
                            repeatCount="indefinite"
                            path={`M 250 250 L ${250 + pos.x} ${250 + pos.y}`}
                          />
                        </motion.circle>
                      )}
                    </motion.g>
                  );
                })}
              </AnimatePresence>
            </svg>

            {/* Orbital Rings */}
            <div className="absolute inset-0 border border-slate-800 rounded-full scale-75 opacity-50"></div>
            <div className="absolute inset-0 border border-slate-800/50 rounded-full scale-100 border-dashed animate-spin-slow duration-[60s]"></div>
            
            {/* Center Node (Klev) */}
            <motion.button
              onClick={() => handleManualSelect('klev')}
              className={`relative z-20 w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center transition-all duration-500 group ${activeAgentId === 'klev' ? 'scale-110 shadow-[0_0_60px_rgba(42,81,244,0.6)] bg-slate-800 border-2 border-clevrr-primary' : 'bg-slate-900 border border-slate-700 hover:border-clevrr-primary/50'}`}
            >
              <div className="relative">
                <BrainCircuit className={`w-8 h-8 md:w-12 md:h-12 mb-1 ${activeAgentId === 'klev' ? 'text-clevrr-primary animate-pulse' : 'text-slate-500'}`} />
                
                {/* Ping effect when Klev is "talking" */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clevrr-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-clevrr-primary"></span>
                </span>
              </div>
              <span className={`text-xs md:text-sm font-bold ${activeAgentId === 'klev' ? 'text-white' : 'text-slate-400'}`}>KLEV</span>
              <span className="text-[9px] text-slate-500 uppercase tracking-wider">Master</span>
            </motion.button>

            {/* Satellite Nodes */}
            {satelliteAgents.map((agent, index) => {
              const pos = getPosition(agent.id); 
              const isActive = activeAgentId === agent.id;
              const isConnected = connectedAgents.includes(agent.id);

              return (
                <motion.button
                  key={agent.id}
                  onClick={() => handleManualSelect(agent.id)}
                  className={`absolute w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border transition-all duration-300 z-20 
                    ${isActive 
                      ? 'bg-slate-800 border-white shadow-[0_0_30px_rgba(255,255,255,0.3)] scale-110' 
                      : isConnected 
                        ? 'bg-slate-800 border-clevrr-primary/50 shadow-[0_0_15px_rgba(42,81,244,0.3)] scale-105'
                        : 'bg-slate-900 border-slate-700 hover:border-slate-500 hover:scale-105'
                    }`}
                  style={{ 
                    left: `calc(50% + ${pos.x}px - 2.5rem)`, // Center + x - half width
                    top: `calc(50% + ${pos.y}px - 2.5rem)`
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <agent.icon 
                    className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-300 ${isActive || isConnected ? 'text-white' : 'text-slate-500'}`} 
                    style={{ color: (isActive || isConnected) ? agent.color : undefined }}
                  />
                  {isActive && (
                      <motion.div 
                        layoutId="active-ring"
                        className="absolute inset-0 border-2 border-white rounded-full"
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right: The Detail Card */}
          <div className="w-full lg:w-1/2 min-h-[400px] relative">
            
            {/* Auto-Play Controls */}
            <div className="absolute top-0 right-0 z-30 flex gap-2">
                <button 
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-400 hover:text-white transition-colors"
                  title={isAutoPlaying ? "Pause Animation" : "Play Animation"}
                >
                   {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeAgent.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Glowing border effect for active card */}
                <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-clevrr-primary via-clevrr-accent to-clevrr-primary opacity-50"></div>

                {/* Problem Badge (Shows context) */}
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-slate-900/80 rounded-lg border border-slate-700/50">
                    <Target className="w-3 h-3 text-red-400" />
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Solving: <span className="text-white">{activeAgent.relatedProblem}</span></span>
                </div>

                {/* Agent Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg relative"
                      style={{ backgroundColor: activeAgent.id === 'klev' ? '#2A51F4' : activeAgent.color }}
                    >
                      <activeAgent.icon className="w-8 h-8 text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{activeAgent.name}</h3>
                      <div className="text-clevrr-primary font-medium">{activeAgent.role}</div>
                    </div>
                  </div>
                  
                  {/* Integration Logos */}
                  {activeAgent.integrations.length > 0 && (
                    <div className="flex -space-x-2">
                      {activeAgent.integrations.map((tool, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-slate-800 flex items-center justify-center overflow-hidden" title={tool.name}>
                          <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain p-1" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-slate-300 text-lg mb-8 leading-relaxed border-l-2 border-slate-700 pl-4">
                  {activeAgent.description}
                </p>

                {/* The "Think, Talk, Act" Loop */}
                <div className="space-y-4">
                  
                  {/* Step 1: Think */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                        <Activity className="w-4 h-4 text-slate-400" />
                      </div>
                      <div className="w-0.5 h-full bg-slate-700 my-2"></div>
                    </div>
                    <div className="pb-4 w-full">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Observation</div>
                      <div className="text-slate-200 bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 w-full">
                        "{activeAgent.workflow.think}"
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 2: Talk */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                        <MessageSquare className="w-4 h-4 text-slate-400" />
                      </div>
                      <div className="w-0.5 h-full bg-slate-700 my-2"></div>
                    </div>
                    <div className="pb-4 w-full">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Coordination</div>
                      <div className="text-slate-200 bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 w-full">
                        "{activeAgent.workflow.talk}"
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 3: Act */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-clevrr-primary to-clevrr-accent flex items-center justify-center shrink-0 shadow-lg shadow-clevrr-primary/30">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="text-xs font-bold text-clevrr-primary uppercase tracking-wider mb-1">Action</div>
                      <div className="text-white font-medium bg-gradient-to-r from-clevrr-primary/20 to-transparent p-3 rounded-lg border-l-4 border-clevrr-primary w-full">
                        {activeAgent.workflow.act}
                      </div>
                    </div>
                  </motion.div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;