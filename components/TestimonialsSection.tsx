import React from 'react';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Ankita Chinnawawr",
    role: "Head of Growth, Ember Cookware",
    image: "https://getclevrr.com/testimonials/ankita.jpeg",
    quote: "Clevrr AI is basically a COO in a box. It caught a ₹4L inventory leak that my manual audits missed for months. Absolute game changer."
  },
  {
    name: "Hriday Purohi",
    role: "Director, Mainstreet Marketplace",
    image: "https://getclevrr.com/testimonials/hriday.jpeg",
    quote: "The ability to auto-pause ads when stock runs low has saved us roughly 15% on our monthly ad spend. It pays for itself in a day."
  },
  {
    name: "Anas Zubain",
    role: "Co-founder, My Pahadi Dukan",
    image: "https://getclevrr.com/testimonials/anas.webp",
    quote: "Finally, a tool that connects Marketing to Logistics. We reduced our RTO by 8% just by using the predictive customer scoring."
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 mb-6">
            Trusted by modern <br/><span className="text-clevrr-primary">D2C Founders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <Quote className="w-10 h-10 text-clevrr-primary/20 fill-clevrr-primary/20" />
              </div>
              <p className="text-slate-700 text-lg leading-relaxed mb-8 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;