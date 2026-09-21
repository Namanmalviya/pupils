import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Clock, Users, Laptop, Bookmark, ArrowRight, Building } from 'lucide-react';

export const OpportunitiesPage = () => {
  const { opportunities } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Competitions', 'Scholarships', 'Hackathons'];

  const filteredOps = opportunities.filter(op => {
    if (activeCategory === 'All') return true;
    return op.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-pupils-blue to-blue-900 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-extrabold uppercase tracking-wide">
            Academic Discovery Marketplace
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight mt-1">Academic Opportunities</h1>
          <p className="text-xs text-blue-100 mt-1 font-medium">
            Explore national science competitions, IISc/KVPY grants, Olympiads, and STEM hackathons.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-2xl border border-white/20">
          <Sparkles className="w-5 h-5 text-pupils-orange" />
          <span className="text-xs font-bold">14 Active Programs</span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-pupils-blue text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-blue-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards List */}
      <div className="space-y-4">
        {filteredOps.map(op => (
          <div
            key={op.id}
            className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-pupils-card space-y-4 hover:shadow-pupils-hover transition-all"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <img
                src={op.image}
                alt={op.organizer}
                className="w-full sm:w-28 h-28 rounded-2xl object-cover ring-2 ring-blue-100 flex-shrink-0"
              />

              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-pupils-blue text-[11px] font-extrabold">
                    {op.category}
                  </span>
                  <Bookmark className="w-4 h-4 text-slate-400 hover:text-pupils-blue cursor-pointer" />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-pupils-navy">{op.title}</h3>
                  <p className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-pupils-blue" />
                    {op.organizer}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {op.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-semibold pt-1">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-pupils-blue" />
                    {op.eligibility}
                  </span>
                  <span className="flex items-center gap-1">
                    <Laptop className="w-3.5 h-3.5 text-pupils-blue" />
                    {op.mode}
                  </span>
                  <span className="inline-flex items-center gap-1 text-pupils-orange font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    {op.deadline}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                🎁 {op.stipend}
              </span>

              <button className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-pupils-blue hover:bg-blue-600 text-white text-xs font-extrabold shadow-pupils-blue transition-all flex items-center justify-center gap-2">
                <span>Explore Opportunity</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
