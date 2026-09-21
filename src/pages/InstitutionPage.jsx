import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Building2, CheckCircle2, Users, Trophy, Calendar, Sparkles, UserPlus, Heart, MessageCircle } from 'lucide-react';
import { VerifiedCheckBadge } from '../components/HandDrawnAnnotations';

export const InstitutionPage = () => {
  const { selectedInstitution, setActiveTab } = useApp();
  const [activeSubTab, setActiveSubTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);

  const inst = selectedInstitution || {
    name: "ABC Public School",
    type: "School",
    city: "Indore",
    followers: "12.4K",
    avatar: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=300",
    banner: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    description: "Leading CBSE institution committed to academic excellence, stem research, and holistic student development.",
    focus: ["Science", "Mathematics", "Olympiads", "Robotics"]
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      
      {/* Banner */}
      <div className="rounded-3xl bg-white border border-slate-200/80 shadow-pupils-card overflow-hidden">
        <div className="h-44 bg-slate-900 relative">
          <img
            src={inst.banner}
            alt={inst.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className={`px-5 py-2 rounded-full text-xs font-extrabold shadow-md transition-all flex items-center gap-1.5 ${
                isFollowing
                  ? 'bg-white text-pupils-navy border border-slate-200'
                  : 'bg-pupils-orange text-white hover:bg-pupils-orangeHover'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>{isFollowing ? 'Following' : 'Follow Institution'}</span>
            </button>
          </div>
        </div>

        <div className="px-6 pb-6 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between -mt-12 mb-4 gap-4">
            <div className="flex items-end gap-4">
              <img
                src={inst.avatar}
                alt={inst.name}
                className="w-24 h-24 rounded-3xl object-cover ring-4 ring-white shadow-md bg-white"
              />
              <div className="pb-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-extrabold text-pupils-navy">{inst.name}</h1>
                  <CheckCircle2 className="w-5 h-5 fill-emerald-500 text-white" />
                </div>
                <p className="text-xs font-semibold text-slate-500">{inst.type} · {inst.city}</p>
              </div>
            </div>

            <VerifiedCheckBadge text="Verified Institution" />
          </div>

          <p className="text-xs text-slate-700 leading-relaxed font-medium max-w-2xl">
            {inst.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-pupils-navy pt-3 border-t border-slate-100 mt-4">
            <span>👥 {inst.followers} Followers</span>
            <span>🏆 42 National Awards</span>
            <span>🎓 1,850 Active Students</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        {['posts', 'faculty', 'achievements', 'events'].map(t => (
          <button
            key={t}
            onClick={() => setActiveSubTab(t)}
            className={`px-4 py-2 rounded-full text-xs font-extrabold capitalize transition-all ${
              activeSubTab === t
                ? 'bg-pupils-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-orange-50'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Subtab Content */}
      <div className="space-y-4">
        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <img src={inst.avatar} alt="Author" className="w-9 h-9 rounded-full object-cover" />
            <div>
              <span className="font-bold text-xs text-pupils-navy block">{inst.name} Official</span>
              <span className="text-[10px] text-slate-400">Published 1d ago</span>
            </div>
          </div>
          <p className="text-xs text-slate-800 font-medium leading-relaxed">
            📢 Proud to announce that our students secured 14 Gold Medals in the State Mathematics Olympiad! Congratulations to all mentors and students.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> 340</span>
            <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5 text-pupils-blue" /> 42</span>
          </div>
        </div>
      </div>

    </div>
  );
};
