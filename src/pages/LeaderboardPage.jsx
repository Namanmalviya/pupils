import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Trophy, ShieldCheck, MapPin, CheckCircle2, Info, TrendingUp } from 'lucide-react';
import { VerifiedCheckBadge } from '../components/HandDrawnAnnotations';

export const LeaderboardPage = () => {
  const { leaderboard, setIsRankingModalOpen } = useApp();
  const [selectedCity, setSelectedCity] = useState('Indore');
  const [activeCategory, setActiveCategory] = useState('schools');

  const cities = ['Indore', 'Kota', 'Delhi', 'Mumbai', 'Bangalore'];

  const ranksList = activeCategory === 'schools' ? leaderboard.schools : leaderboard.coaching;

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-pupils-navy via-pupils-deepBlue to-purple-950 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-pupils-orange text-[10px] font-extrabold uppercase tracking-wide">
              City Rankings
            </span>
            <button
              onClick={() => setIsRankingModalOpen(true)}
              className="flex items-center gap-1 text-[11px] font-extrabold text-pupils-orange underline hover:text-white"
            >
              <Info className="w-3.5 h-3.5" />
              <span>How rankings work</span>
            </button>
          </div>
          
          <h1 className="text-2xl font-extrabold tracking-tight mt-1">Academic Leaderboard</h1>
          <p className="text-xs text-slate-200 mt-1 font-medium">
            Objective rankings calculated weekly from student contest performance, accuracy rates, & verified achievements.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-2xl border border-white/20">
          <Trophy className="w-6 h-6 text-pupils-orange" />
          <span className="text-xs font-bold">{selectedCity} Region</span>
        </div>
      </div>

      {/* City Switcher & Category Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
        
        {/* City Filter */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          <MapPin className="w-4 h-4 text-pupils-orange flex-shrink-0" />
          {cities.map(c => (
            <button
              key={c}
              onClick={() => setSelectedCity(c)}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                selectedCity === c
                  ? 'bg-pupils-navy text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-orange-50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Institution Type Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
          <button
            onClick={() => setActiveCategory('schools')}
            className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
              activeCategory === 'schools'
                ? 'bg-white text-pupils-navy shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Schools
          </button>
          <button
            onClick={() => setActiveCategory('coaching')}
            className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
              activeCategory === 'coaching'
                ? 'bg-white text-pupils-purple shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Coaching Institutes
          </button>
        </div>

      </div>

      {/* Rankings List */}
      <div className="space-y-3">
        {ranksList.map((item) => (
          <div
            key={item.rank}
            className={`p-4 rounded-2xl bg-white border shadow-sm flex items-center justify-between gap-4 transition-all hover:scale-[1.01] ${
              item.rank === 1
                ? 'border-orange-300 ring-2 ring-orange-100'
                : 'border-slate-200/80'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-9 h-9 rounded-2xl flex items-center justify-center font-extrabold text-sm ${
                item.rank === 1 ? 'bg-pupils-orange text-white shadow-pupils-orange' :
                item.rank === 2 ? 'bg-slate-200 text-slate-700' :
                item.rank === 3 ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-500'
              }`}>
                #{item.rank}
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm text-pupils-navy">{item.name}</span>
                  {item.verified && (
                    <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white" />
                  )}
                </div>
                <span className="text-xs text-slate-400 font-semibold">{item.students} Active Pupils</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs font-bold text-slate-400 uppercase block">Academic Score</span>
                <span className="text-base font-extrabold text-pupils-navy">{item.score} / 100</span>
              </div>

              <span className={`px-2 py-1 rounded-md text-[10px] font-extrabold ${
                item.change.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
              }`}>
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
