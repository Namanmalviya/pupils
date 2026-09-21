import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Search, MapPin, Building2, GraduationCap, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { VerifiedCheckBadge } from '../components/HandDrawnAnnotations';

export const DiscoverPage = () => {
  const { institutions, setSelectedInstitution, setActiveTab } = useApp();
  const [activeCategory, setActiveCategory] = useState('Students');
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('All');

  const studentsList = [
    {
      id: "u-1",
      name: "Rahul Sharma",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
      school: "ABC Public School, Indore",
      city: "Indore",
      grade: "Class 12",
      targetExam: "JEE 2027 Aspirant",
      subjects: ["Physics", "Mathematics", "Robotics"],
      verified: true,
      verifiedTitle: "Verified Student",
      questionsSolved: 2481,
      accuracy: 86
    },
    {
      id: "u-2",
      name: "Riya Sharma",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      school: "Delhi Public School, Delhi",
      city: "Delhi",
      grade: "Class 11",
      targetExam: "Olympiads 2026",
      subjects: ["Physics", "Astronomy"],
      verified: true,
      verifiedTitle: "Olympiad Winner",
      questionsSolved: 3120,
      accuracy: 91
    },
    {
      id: "u-3",
      name: "Aman Verma",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      school: "XYZ Academy Kota",
      city: "Kota",
      grade: "Class 12",
      targetExam: "JEE 2027 Aspirant",
      subjects: ["Chemistry", "Physics"],
      verified: true,
      verifiedTitle: "Top 100 Ranker",
      questionsSolved: 4890,
      accuracy: 89
    }
  ];

  const handleViewInstitution = (inst) => {
    setSelectedInstitution(inst);
    setActiveTab('institution');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-pupils-navy to-pupils-deepBlue text-white shadow-lg space-y-3">
        <h1 className="text-2xl font-extrabold tracking-tight">Academic Network Directory</h1>
        <p className="text-xs text-slate-200 font-medium">
          Discover verified student peers, master teachers, top CBSE schools, and premier coaching centers.
        </p>

        {/* Search */}
        <div className="relative pt-2">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search students, schools, coaching, subjects, or cities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white text-slate-900 text-xs font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-pupils-orange"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        {['Students', 'Teachers', 'Schools', 'Coaching', 'Colleges'].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-pupils-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-orange-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeCategory === 'Students' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {studentsList.map(s => (
            <div
              key={s.id}
              className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-pupils-card space-y-4 hover:shadow-pupils-hover transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={s.avatar}
                      alt={s.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-pupils-orange/30"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-sm text-pupils-navy">{s.name}</span>
                        <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white" />
                      </div>
                      <span className="text-xs text-slate-400 font-medium">{s.grade} · {s.city}</span>
                    </div>
                  </div>

                  <VerifiedCheckBadge text="" size="small" />
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/60 grid grid-cols-2 text-center text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Solved</span>
                    <span className="font-extrabold text-pupils-orange">{s.questionsSolved.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Accuracy</span>
                    <span className="font-extrabold text-emerald-600">{s.accuracy}%</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {s.subjects.map(sub => (
                    <span key={sub} className="px-2.5 py-0.5 rounded-md bg-orange-50 text-pupils-orange text-[11px] font-bold">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveTab('profile')}
                className="w-full py-2.5 rounded-xl bg-pupils-navy hover:bg-pupils-deepBlue text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 mt-2"
              >
                <span>View Academic Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        /* Institution Cards */
        <div className="space-y-4">
          {institutions.map(inst => (
            <div
              key={inst.id}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-pupils-card space-y-4 hover:shadow-pupils-hover transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={inst.avatar}
                    alt={inst.name}
                    className="w-12 h-12 rounded-2xl object-cover ring-2 ring-orange-200"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base font-extrabold text-pupils-navy">{inst.name}</h3>
                      <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white" />
                    </div>
                    <span className="text-xs text-slate-400 font-semibold">{inst.type} · {inst.city}</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-orange-100 text-pupils-orange text-xs font-extrabold">
                  {inst.followers} Followers
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {inst.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {inst.focus.map(f => (
                  <span key={f} className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">
                    {f}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleViewInstitution(inst)}
                  className="w-full py-2.5 rounded-xl bg-pupils-orange hover:bg-pupils-orangeHover text-white text-xs font-extrabold shadow-pupils-orange transition-all flex items-center justify-center gap-2"
                >
                  <span>View Institution Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
