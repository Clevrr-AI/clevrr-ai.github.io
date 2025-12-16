import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="bg-clevrr-secondary rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center md:text-left">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-clevrr-primary/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Main CTA */}
            <div className="max-w-xl">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                 Ready to hire your AI Co-founder?
               </h2>
               <p className="text-slate-300 text-lg mb-8">
                 Join 500+ D2C brands that have automated their operations. Stop leaking revenue today.
               </p>
               <button className="bg-white text-clevrr-secondary hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto md:mx-0">
                 Book a Live Demo <ArrowRight className="w-5 h-5" />
               </button>
            </div>

            {/* Newsletter Side */}
            <div className="w-full md:w-auto bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-left">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-clevrr-primary rounded-lg text-white">
                     <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Clevrr Capsule</h3>
               </div>
               <p className="text-slate-300 text-sm mb-6 max-w-xs">
                 Get weekly strategies on scaling, logistics, and profitability. No spam, just value.
               </p>
               <form className="flex flex-col gap-3">
                 <input 
                   type="email" 
                   placeholder="founder@brand.com" 
                   className="w-full bg-slate-900/50 border border-slate-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-clevrr-primary placeholder-slate-500"
                 />
                 <button className="w-full bg-clevrr-primary hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors">
                   Join Newsletter
                 </button>
               </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;