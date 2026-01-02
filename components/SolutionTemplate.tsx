import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, TrendingUp, Megaphone, 
  Truck, Wallet, Tag, Users, LayoutDashboard, Sparkles 
} from 'lucide-react';

const SOLUTION_CONTENT = {
  "sales": {
    title: "Sales Intelligence",
    tagline: "Qualify, engage, and close leads autonomously.",
    description: "Clevrr Sales Intelligence doesn't just track leads; it acts on them. From identifying high-intent visitors on your Shopify store to automating personalized outreach, our agent handles the heavy lifting of the sales funnel.",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-50",
    features: [
      "AI-driven lead scoring based on 50+ behavior signals",
      "Autonomous WhatsApp & Email outreach sequences",
      "Automated conversion audits for product pages",
      "Real-time alerts for high-value cart abandoners"
    ],
    screenshot: "https://images.unsplash.com/photo-1551288049-bbda48652ad8?auto=format&fit=crop&w=1200&q=80"
  },
  "marketing": {
    title: "Marketing Intelligence",
    tagline: "Profit-first ad automation that protects your margins.",
    description: "Stop burning ad spend on products that are out of stock or low margin. Clevrr Marketing Intelligence connects your inventory health to your ad accounts, ensuring every dollar is spent efficiently.",
    icon: Megaphone,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    features: [
      "Automatic ad pausing for low-stock items",
      "Net Margin-aware ROAS optimization",
      "Creative fatigue detection & alerting",
      "Cross-channel performance attribution (Meta + Google)"
    ],
    screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  "fulfillment": {
    title: "Fulfillment Intelligence",
    tagline: "Eliminate shipping leaks and slash RTO rates.",
    description: "Shipping is where margins go to die. Our Logistics Agent audits every shipment, detects volumetric weight fraud, and blocks customers with high return probabilities before you even ship.",
    icon: Truck,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
    features: [
      "Predictive RTO risk scoring at checkout",
      "Automated weight discrepancy detection",
      "Smart courier selection based on delivery speed",
      "Real-time NDR (Non-Delivery Report) management"
    ],
    screenshot: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
  },
  "finance": {
    title: "Finance Intelligence",
    tagline: "Automated reconciliation for a perfect ledger.",
    description: "Stop wasting hours on spreadsheets. Clevrr Finance Intelligence reconciles every transaction from your payment gateways, marketplace settlements, and courier COD payments automatically.",
    icon: Wallet,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    features: [
      "1-click COD settlement reconciliation",
      "Gateway fee & tax audit (detecting overcharges)",
      "Daily automated profit & loss statements",
      "Marketplace (Amazon/Flipkart) payment tracking"
    ],
    screenshot: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
  },
  "product": {
    title: "Product Intelligence",
    tagline: "Predict demand and prevent the dreaded 'Sold Out'.",
    description: "Inventory management is a balancing act. Our Stock Agent uses historical velocity and marketing plans to forecast exactly when you'll run out, helping you maintain perfect stock levels.",
    icon: Tag,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    features: [
      "AI-powered demand forecasting by SKU variant",
      "Automated PO generation for suppliers",
      "Dead stock identification & clearance suggestions",
      "Seasonal trend analysis and planning"
    ],
    screenshot: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
  },
  "customer": {
    title: "Customer Intelligence",
    tagline: "Turn one-time buyers into lifelong brand fans.",
    description: "Gain a deeper understanding of your customers beyond basic demographics. Clevrr analyzes buying patterns to segment your audience and suggest the best retention strategies.",
    icon: Users,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
    features: [
      "RFM (Recency, Frequency, Monetary) segmentation",
      "Customer Lifetime Value (LTV) prediction",
      "Automated high-value customer loyalty flows",
      "Churn risk detection and win-back automation"
    ],
    screenshot: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
  },
  "magic-dashboard": {
    title: "Magic Dashboard",
    tagline: "The only view a Founder needs to scale.",
    description: "The Magic Dashboard is the crown jewel of Clevrr. It unifies every single data point from your D2C stack into a beautiful, actionable command center that feels like magic.",
    icon: LayoutDashboard,
    color: "text-clevrr-primary",
    bgColor: "bg-blue-50",
    features: [
      "Unified view of Sales, Marketing, and Profit",
      "Custom KPI tracking with zero configuration",
      "Weekly AI-generated performance summaries",
      "Collaborative workspace for your entire team"
    ],
    screenshot: "https://images.unsplash.com/photo-1551288049-bbda48652ad8?auto=format&fit=crop&w=1200&q=80"
  }
};

const SolutionTemplate: React.FC = () => {
  const { solutionId } = useParams();
  const data = SOLUTION_CONTENT[solutionId as keyof typeof SOLUTION_CONTENT];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
          <Link to="/" className="text-clevrr-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${data.bgColor}`}
              >
                <Icon className={`w-5 h-5 ${data.color}`} />
                <span className={`text-sm font-bold uppercase tracking-wider ${data.color}`}>{data.title}</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-sans font-bold text-slate-900 tracking-tight leading-tight"
              >
                {data.tagline}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-500 leading-relaxed font-light"
              >
                {data.description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button className="bg-clevrr-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-clevrr-secondary transition-all shadow-xl shadow-clevrr-primary/20 flex items-center justify-center gap-2">
                  Get Started with {data.title} <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                  Book a Demo
                </button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-video">
                <img src={data.screenshot} alt={data.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-bold text-slate-800">Autonomous Edge</span>
                </div>
                <p className="text-sm text-slate-500">This agent learns from your brand's unique data to improve performance 24/7.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-clevrr-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-clevrr-primary" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2">{feature}</h3>
                <p className="text-slate-500 text-sm">Enterprise-grade capability deployed instantly.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-clevrr-secondary rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-clevrr-primary/10 blur-3xl rounded-full translate-y-1/2"></div>
             <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to scale your {data.title}?</h2>
               <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                 Join 500+ D2C founders who trust Clevrr AI to handle their complex operations autonomously.
               </p>
               <button className="bg-white text-clevrr-secondary px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl">
                 Start Your Free Audit
               </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionTemplate;