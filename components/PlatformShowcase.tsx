import React from 'react';
import { motion } from 'framer-motion';
import { Layout, GitBranch, Zap, Layers } from 'lucide-react';

const PlatformShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-clevrr-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-clevrr-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            One Brain. <span className="text-clevrr-primary">Infinite Capabilities.</span>
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From high-level executive dashboards to granular workflow automation, Clevrr AI unifies your entire D2C stack.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
          
          {/* Main Dashboard - Spans 8 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-8 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden group hover:border-slate-700 transition-colors"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Layout className="w-6 h-6" /></div>
                <h3 className="text-xl font-bold">Executive Command Center</h3>
              </div>
              <div className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20">LIVE</div>
            </div>
            
            {/* Mockup Content */}
            <div className="flex-1 bg-slate-950 rounded-xl border border-slate-800 p-4 relative overflow-hidden">
               {/* Header Fake */}
               <div className="h-8 mb-4 flex gap-4">
                 <div className="w-32 h-full bg-slate-800/50 rounded-lg"></div>
                 <div className="w-32 h-full bg-slate-800/50 rounded-lg"></div>
                 <div className="w-32 h-full bg-slate-800/50 rounded-lg"></div>
               </div>
               {/* Charts Fake */}
               <div className="grid grid-cols-3 gap-4 h-32 mb-4">
                 <div className="bg-slate-800/30 rounded-lg h-full"></div>
                 <div className="bg-slate-800/30 rounded-lg h-full"></div>
                 <div className="bg-slate-800/30 rounded-lg h-full"></div>
               </div>
               <div className="w-full h-64 bg-slate-800/20 rounded-lg relative">
                 <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-sm">
                   [Unified Analytics Dashboard Placeholder]
                 </div>
                 {/* Decorative Line Graph */}
                 <svg className="absolute bottom-0 left-0 w-full h-full opacity-30" preserveAspectRatio="none">
                    <path d="M0,100 C150,80 300,120 450,60 C600,0 750,40 900,20 L900,200 L0,200 Z" fill="url(#gradient-blue)" />
                    <defs>
                      <linearGradient id="gradient-blue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2A51F4" stopOpacity="0.5"/>
                        <stop offset="100%" stopColor="#2A51F4" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                 </svg>
               </div>
            </div>
          </motion.div>

          {/* AI Automations - Spans 4 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden group hover:border-slate-700 transition-colors"
          >
             <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><GitBranch className="w-6 h-6" /></div>
                <h3 className="text-xl font-bold">Automation Workflows</h3>
             </div>
             <div className="flex-1 bg-slate-950 rounded-xl border border-slate-800 p-4 relative">
                {/* Visual Node Graph */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 opacity-80">
                   <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-xs">Trigger: Low Stock</div>
                   <div className="h-4 w-px bg-slate-600"></div>
                   <div className="px-4 py-2 bg-blue-900/40 rounded-lg border border-blue-500/50 text-blue-200 text-xs">Action: Pause Ads</div>
                   <div className="h-4 w-px bg-slate-600"></div>
                   <div className="px-4 py-2 bg-green-900/40 rounded-lg border border-green-500/50 text-green-200 text-xs">Action: Reorder PO</div>
                </div>
             </div>
          </motion.div>

          {/* Integration Hub - Spans 4 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col group hover:border-slate-700 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400"><Layers className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold">100+ Integrations</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">Connect your entire stack in one click.</p>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-square bg-slate-800 rounded-lg animate-pulse opacity-50"></div>
              ))}
            </div>
          </motion.div>

          {/* Real-time Alerts - Spans 8 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-8 bg-gradient-to-br from-clevrr-primary/20 to-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 flex items-center justify-between group hover:border-clevrr-primary/50 transition-colors relative overflow-hidden"
          >
             <div className="relative z-10 max-w-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-lg text-white"><Zap className="w-6 h-6" /></div>
                  <h3 className="text-2xl font-bold">Self-Healing Business</h3>
                </div>
                <p className="text-slate-300">
                  Clevrr doesn't just report problems. It fixes them. From pausing ads on OOS products to blocking high-RTO users.
                </p>
             </div>
             {/* Decorative Elements */}
             <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-clevrr-primary/10 to-transparent"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;