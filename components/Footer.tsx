import React from 'react';
import { Twitter, Github, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-50 pt-24 pb-12 overflow-hidden border-t border-slate-200 font-sans">
      {/* Large Watermark Background Text - Matching the 'nock' concept */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-full flex justify-center">
         <span className="font-sans font-bold text-[20vw] leading-none text-slate-200/50 tracking-tighter opacity-80">
          C L E V R R
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-8 mb-24">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5 flex flex-col items-start">
            <div className="mb-6">
              {/* Using text logo if image fails or just to match the clean aesthetic */}
              <div className="flex items-center gap-2 mb-4">
                 <img 
                    src="https://getclevrr.com/logos/logo-dark.png" 
                    alt="Clevrr AI" 
                    className="h-8 w-auto object-contain"
                 />
              </div>
              <p className="text-slate-500 font-medium text-base max-w-xs leading-relaxed">
                The AI Co-founder for D2C Brands. <br/>
                <span className="text-sm font-normal text-slate-400 mt-2 block">
                  Connect your data and automate 95% of your daily mundane tasks with the power of Agentic Automations with Clevrr AI.
                </span>
              </p>
            </div>
          </div>

          {/* Links Columns - Spaced to match the concept */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="font-semibold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-clevrr-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-clevrr-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-clevrr-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-clevrr-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-clevrr-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="font-semibold text-slate-900 mb-6">Documentation</h4>
             <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-clevrr-primary transition-colors">Get Started</a></li>
              <li><a href="#" className="hover:text-clevrr-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-clevrr-primary transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-clevrr-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-clevrr-primary transition-colors">Support</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="font-semibold text-slate-900 mb-6">Social</h4>
             <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-clevrr-primary transition-colors">X (Twitter)</a></li>
              <li><a href="#" className="hover:text-clevrr-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-clevrr-primary transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-clevrr-primary transition-colors">Discord</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-6">
          
          {/* Status Indicator Pill */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </div>
            <span className="text-xs font-semibold text-slate-700">All systems operational</span>
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-slate-500">
            <span>© 2025 Snaptify Softwares Private Limited. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms of Use</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;