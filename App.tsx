import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundBlobs from './components/BackgroundBlobs';
import ProblemSection from './components/ProblemSection';
import TeamSection from './components/TeamSection';
import SolutionSection from './components/SolutionSection';
import IntegrationsSection from './components/IntegrationsSection';
import FeaturesWorkflow from './components/FeaturesWorkflow';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative font-sans text-slate-900 bg-slate-50 selection:bg-clevrr-secondary selection:text-white">
      {/* Background Layer */}
      <BackgroundBlobs />
      
      {/* Main Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ProblemSection />
        <TeamSection />
        {/* Solution Section is the reveal animation */}
        <SolutionSection /> 
        <IntegrationsSection />
        <FeaturesWorkflow />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default App;