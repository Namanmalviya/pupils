import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Trophy, Clock, Users, FileText, CheckCircle2, ArrowRight, Award } from 'lucide-react';

export const ContestPage = () => {
  const { contests, setActiveContestModal } = useApp();
  const [activeTab, setActiveTab] = useState('LIVE');

  const filteredContests = contests.filter(c => {
    if (activeTab === 'LIVE') return c.status === 'LIVE';
    if (activeTab === 'UPCOMING') return c.status === 'UPCOMING';
    return c.status === 'PAST';
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-pupils-purple to-purple-900 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-extrabold uppercase tracking-wide">
            Weekly Competitions
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight mt-1">Pupils Academic Contests</h1>
          <p className="text-xs text-purple-100 mt-1 font-medium">
            Test speed & conceptual precision against top JEE, NEET & Olympiad aspirants nationwide.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-2xl border border-white/20">
          <Trophy className="w-5 h-5 text-pupils-orange" />
          <span className="text-xs font-bold">32 Contests Played</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        {['LIVE', 'UPCOMING', 'PAST'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all ${
              activeTab === tab
                ? 'bg-pupils-purple text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-purple-50'
            }`}
          >
            {tab} Contests
          </button>
        ))}
      </div>

      {/* Contest Cards */}
      <div className="space-y-4">
        {filteredContests.map(c => (
          <div
            key={c.id}
            className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-pupils-card space-y-4 hover:shadow-pupils-hover transition-all relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-pupils-purpleLight text-pupils-purple flex items-center justify-center font-extrabold text-sm">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-pupils-navy">{c.title}</h3>
                  <span className="text-xs font-semibold text-slate-400">{c.description}</span>
                </div>
              </div>

              <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                c.status === 'LIVE' ? 'bg-emerald-100 text-emerald-700 animate-pulse' : 'bg-slate-100 text-slate-600'
              }`}>
                {c.startTime}
              </span>
            </div>

            {/* Details */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-1">
              <span className="flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-pupils-purple" />
                {c.questionsCount} Questions
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-pupils-purple" />
                {c.durationMinutes} Minutes
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-pupils-purple" />
                {c.participantsCount.toLocaleString()} Participants
              </span>
            </div>

            {/* Subjects */}
            <div className="flex flex-wrap gap-1.5">
              {c.subjects.map(s => (
                <span key={s} className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">
                  {s}
                </span>
              ))}
            </div>

            {/* Past Contest Score Report */}
            {c.userResult && (
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Score</span>
                  <span className="text-sm font-extrabold text-pupils-purple">{c.userResult.score}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Accuracy</span>
                  <span className="text-sm font-extrabold text-emerald-600">{c.userResult.accuracy}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Rank</span>
                  <span className="text-sm font-extrabold text-pupils-orange">#{c.userResult.rank}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Percentile</span>
                  <span className="text-sm font-extrabold text-pupils-navy">{c.userResult.percentile}</span>
                </div>
              </div>
            )}

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={() => setActiveContestModal(c)}
                className="w-full py-3 rounded-2xl bg-pupils-purple hover:bg-purple-700 text-white font-extrabold text-xs shadow-pupils-purple transition-all flex items-center justify-center gap-2"
              >
                <span>{c.status === 'LIVE' ? 'Join Contest Now' : 'Take Practice Test'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
