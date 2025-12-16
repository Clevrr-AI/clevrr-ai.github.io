import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "What is Clevrr and how does it actually work?",
    answer: "Clevrr is an autonomous AI co-founder for your D2C brand. Unlike standard analytics tools that just show you charts, Clevrr connects to your entire stack (Shopify, Ads, Logistics, Payment Gateways) and actively executes tasks—like pausing ad spend on out-of-stock items, flagging high-risk COD orders, or reconciling payments."
  },
  {
    question: "How do I get started with Clevrr?",
    answer: "Getting started takes less than 5 minutes. Simply create an account, connect your existing platforms (Shopify, Meta, Razorpay, etc.) using our secure 1-click OAuth integrations, and Clevrr will immediately start analyzing your data to find revenue leaks and optimization opportunities."
  },
  {
    question: "What can I use Clevrr for?",
    answer: "You can use Clevrr to automate cross-functional decisions. Common use cases include: Inventory-aware Ad Scaling, RTO Reduction via predictive customer scoring, Automated Payment Reconciliation, Competitor Price Tracking, and Daily Executive Briefings."
  },
  {
    question: "How secure is my data with Clevrr?",
    answer: "Security is our top priority. We use bank-grade encryption (AES-256) for all data in transit and at rest. We are SOC2 compliant and never sell your data to third parties. Our AI models are fine-tuned on your data in a private, isolated environment."
  },
  {
    question: "Do I need technical skills to set up Clevrr?",
    answer: "Zero technical skills required. Clevrr is built for founders and operators, not developers. If you can log into your Shopify store, you can set up Clevrr. Our pre-built 'Agents' come with ready-made workflows that you can enable with a single click."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-clevrr-secondary mb-4 tracking-tight">
            Got <span className="font-cursive font-bold text-gradient-pulse">something</span> on your mind?
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-slate-300 transition-colors duration-200"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg font-medium text-slate-800 pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;