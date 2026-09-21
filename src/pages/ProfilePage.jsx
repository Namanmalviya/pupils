import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Award,
  CheckCircle2,
  Share2,
  Edit3,
  Calendar,
  Zap,
  Target,
  Trophy,
  Rocket,
  FileCheck,
  Building,
  GraduationCap
} from 'lucide-react';
import { VerifiedCheckBadge } from '../components/HandDrawnAnnotations';

export const ProfilePage = () => {
  const { user } = useApp();
  const [activeTab, setActiveTab] = useState('passport'); // 'passport', 'achievements', 'projects', 'certificates'

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      
      {/* 1. Profile Banner & Header */}
      <div className="rounded-3xl bg-white border border-slate-200/80 shadow-pupils-card overflow-hidden">
        
        {/* Cover Banner */}
        <div className="h-36 sm:h-44 bg-gradient-to-r from-pupils-navy via-pupils-deepBlue to-purple-900 relative">
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pupils-orange hover:bg-pupils-orangeHover text-white text-xs font-bold shadow-sm transition-all">
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>

        {/* Header Details */}
        <div className="px-6 pb-6 pt-0 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between -mt-16 sm:-mt-14 mb-4 gap-4">
            <div className="flex items-end gap-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover ring-4 ring-white shadow-md bg-white"
              />
              <div className="pb-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-extrabold text-pupils-navy">{user.name}</h1>
                  <CheckCircle2 className="w-5 h-5 fill-emerald-500 text-white" />
                </div>
                <p className="text-xs font-semibold text-pupils-orange">{user.targetExam}</p>
              </div>
            </div>

            <VerifiedCheckBadge text={user.verifiedTitle} />
          </div>

          {/* School & Subjects */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-600">
              <span className="flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-pupils-navy" />
                {user.school}
              </span>
              <span>•</span>
              <span>{user.grade}</span>
              <span>•</span>
              <span>Indore, MP</span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed max-w-2xl pt-1 font-medium">
              {user.bio}
            </p>

            {/* Subject Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {user.subjects.map(sub => (
                <span key={sub} className="px-3 py-1 rounded-full bg-orange-50 text-pupils-orange text-xs font-bold border border-orange-100">
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>


      {/* 2. Key Academic Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center space-y-1">
          <div className="w-8 h-8 rounded-xl bg-orange-100 text-pupils-orange mx-auto flex items-center justify-center">
            <Target className="w-4 h-4" />
          </div>
          <span className="text-xl font-extrabold text-pupils-navy block">{user.stats.questionsSolved.toLocaleString()}</span>
          <span className="text-[11px] font-bold text-slate-500 uppercase">Questions Solved</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center space-y-1">
          <div className="w-8 h-8 rounded-xl bg-purple-100 text-pupils-purple mx-auto flex items-center justify-center">
            <Trophy className="w-4 h-4" />
          </div>
          <span className="text-xl font-extrabold text-pupils-purple block">{user.stats.contestsCount}</span>
          <span className="text-[11px] font-bold text-slate-500 uppercase">Contests Played</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center space-y-1">
          <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span className="text-xl font-extrabold text-emerald-600 block">{user.stats.accuracy}%</span>
          <span className="text-[11px] font-bold text-slate-500 uppercase">Accuracy Rate</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center space-y-1">
          <div className="w-8 h-8 rounded-xl bg-blue-100 text-pupils-blue mx-auto flex items-center justify-center">
            <Zap className="w-4 h-4" />
          </div>
          <span className="text-xl font-extrabold text-pupils-blue block">{user.stats.streakDays} Days</span>
          <span className="text-[11px] font-bold text-slate-500 uppercase">Daily Streak</span>
        </div>

      </div>


      {/* 3. Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        {[
          { id: 'passport', label: 'Academic Passport 📜' },
          { id: 'achievements', label: 'Achievements 🏆' },
          { id: 'projects', label: 'Projects 🚀' },
          { id: 'certificates', label: 'Certificates 🎓' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-pupils-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-orange-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>


      {/* 4. Tab Content */}
      {activeTab === 'passport' && (
        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-pupils-card space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-extrabold text-pupils-navy">Academic Passport Timeline</h3>
            <span className="text-xs font-semibold text-pupils-orange">Verified Record</span>
          </div>

          <div className="space-y-6 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-orange-200">
            {user.passport.map((pGroup, idx) => (
              <div key={idx} className="space-y-3 relative pl-8">
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-pupils-orange text-white text-xs font-extrabold flex items-center justify-center ring-4 ring-white">
                  {pGroup.year.slice(2)}
                </div>
                
                <h4 className="text-sm font-extrabold text-pupils-navy">{pGroup.year}</h4>

                <div className="space-y-2">
                  {pGroup.items.map(item => (
                    <div key={item.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <span className="text-xs font-bold text-slate-800 block">{item.title}</span>
                          <span className="text-[10px] text-slate-400 font-semibold">{item.category}</span>
                        </div>
                      </div>
                      {item.verified && (
                        <VerifiedCheckBadge text="Verified" size="small" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'projects' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-100 text-pupils-orange flex items-center justify-center">
              <Rocket className="w-5 h-5" />
            </div>
            <h4 className="text-base font-extrabold text-pupils-navy">Smart Crop Irrigation Automation</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              IoT-based soil moisture and evapotranspiration predictor built with Arduino and Python backend.
            </p>
            <VerifiedCheckBadge text="State Science Fair Winner" size="small" />
          </div>

          <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-pupils-purple flex items-center justify-center">
              <Rocket className="w-5 h-5" />
            </div>
            <h4 className="text-base font-extrabold text-pupils-navy">Physics Motion Simulator</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Interactive 2D physics engine simulating air resistance, terminal velocity, and collisions.
            </p>
            <VerifiedCheckBadge text="School Robotics Lab" size="small" />
          </div>
        </div>
      )}

      {(activeTab === 'achievements' || activeTab === 'certificates') && (
        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm text-center space-y-3">
          <Award className="w-12 h-12 text-pupils-orange mx-auto" />
          <h4 className="text-base font-extrabold text-pupils-navy">Verified Credentials</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium">
            All achievements and certificates are cryptographically verified by schools, coaching centers, and competition organizers.
          </p>
        </div>
      )}

    </div>
  );
};
