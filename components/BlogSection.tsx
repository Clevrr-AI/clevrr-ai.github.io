import React from 'react';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

const BLOGS = [
  {
    title: "How to reduce RTO by 25% using AI Prediction",
    excerpt: "Stop shipping to high-risk customers before they even order. Here is the framework we used.",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Logistics"
  },
  {
    title: "The Silent Profit Killer: Unreconciled COD Payments",
    excerpt: "Millions are lost in transit. Learn how to automate your payment reconciliation process.",
    date: "Sep 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Finance"
  },
  {
    title: "Scaling Ads? Don't forget your Inventory Health.",
    excerpt: "Why ROAS doesn't matter if you have no stock. The correlation between marketing and inventory.",
    date: "Sep 15, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Growth"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Latest Insights</h2>
            <p className="text-slate-500">Strategies for the modern D2C operator.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-clevrr-primary font-medium hover:underline">
            View all articles <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((blog, i) => (
            <a key={i} href="https://blog.getclevrr.com?utm-source=landing" target="_blank" className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 z-10">
                  {blog.category}
                </div>
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                   <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</div>
                   <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-clevrr-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="mt-auto pt-4 flex items-center text-clevrr-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowUpRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-1 text-clevrr-primary font-medium hover:underline">
                View all articles <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;