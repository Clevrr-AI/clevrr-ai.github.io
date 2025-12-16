import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { SWARM_INTEGRATIONS } from '../constants';

const IntegrationsSection: React.FC = () => {
  // Duplicate the list to create a seamless infinite loop
  const carouselIntegrations = [...SWARM_INTEGRATIONS, ...SWARM_INTEGRATIONS];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Soft Gradient Background Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-sans font-medium text-clevrr-secondary mb-16 tracking-tight">
          Works with{" "}
          <span className="font-cursive font-bold text-6xl md:text-7xl text-gradient-pulse relative top-2 px-2">
            anything
          </span>{" "}
          you use
        </h2>

        {/* Infinite Carousel */}
        <div className="w-full overflow-hidden mb-16 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div 
            className="flex gap-8 md:gap-16 w-max py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 30, 
              repeat: Infinity 
            }}
          >
            {carouselIntegrations.map((tool, index) => (
              <div key={`${tool.name}-${index}`} className="flex flex-col items-center gap-3 group shrink-0 w-24 md:w-32">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center p-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:border-clevrr-primary/20">
                  <img 
                    src={tool.logo} 
                    alt={tool.name} 
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                  />
                </div>
                <span className="text-sm font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <button className="bg-clevrr-primary text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-900/10 flex items-center gap-3 mx-auto">
          <a href="https://cal.getclevrr.com/demo" target="_blank">Start Integrating in 2 Mins</a>
          <Calendar className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default IntegrationsSection;