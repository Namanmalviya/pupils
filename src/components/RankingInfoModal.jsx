import React from 'react';
import { useApp } from '../context/AppContext';
import { X, ShieldCheck, Check } from 'lucide-react';

export const RankingInfoModal = () => {
  const { isRankingModalOpen, setIsRankingModalOpen, leaderboard } = useApp();

  if (!isRankingModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-pupils-navy/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-100 p-6 space-y-5 relative">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-pupils-orange" />
            <h3 className="text-lg font-extrabold text-pupils-navy">{leaderboard.formula.title}</h3>
          </div>
          <button
            onClick={() => setIsRankingModalOpen(false)}
            className="p-1 rounded-full hover:bg-slate-100 text-slate-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-500 font-medium">
          {leaderboard.formula.subtitle}. Pupils uses objective academic metrics rather than paid ratings or arbitrary votes.
        </p>

        {/* Weights List */}
        <div className="space-y-2.5 pt-2">
          {leaderboard.formula.weights.map((w, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-pupils-orange text-xs font-bold flex items-center justify-center">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-800">{w.factor}</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-pupils-navy text-white text-xs font-extrabold">
                {w.weight}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={() => setIsRankingModalOpen(false)}
            className="px-6 py-2.5 rounded-full bg-pupils-orange text-white text-xs font-extrabold shadow-sm hover:bg-pupils-orangeHover"
          >
            Got it
          </button>
        </div>

      </div>
    </div>
  );
};
