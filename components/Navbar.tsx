import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm bg-white/50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img 
            src="https://getclevrr.com/logos/logo-dark.png" 
            alt="Clevrr AI" 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                item.isPrimary
                  ? "bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 shadow-lg shadow-slate-900/20"
                  : "text-slate-600 hover:text-clevrr-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="p-2 text-slate-700">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;