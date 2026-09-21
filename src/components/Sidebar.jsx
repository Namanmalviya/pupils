import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Home,
  Compass,
  BookOpen,
  Trophy,
  Sparkles,
  Award,
  Bookmark,
  FolderGit2,
  User,
  Settings,
  BarChart3,
  Building2
} from 'lucide-react';

export const Sidebar = () => {
  const { activeTab, setActiveTab } = useApp();

  const mainNav = [
    { id: 'feed', label: 'Home Feed', icon: Home },
    { id: 'discover', label: 'Discover', icon: Compass },
    { id: 'practice', label: 'Practice', icon: BookOpen },
    { id: 'contests', label: 'Contests', icon: Trophy, badge: 'LIVE' },
    { id: 'opportunities', label: 'Opportunities', icon: Sparkles },
    { id: 'leaderboard', label: 'City Leaderboard', icon: BarChart3 }
  ];

  const profileNav = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'institution', label: 'School / Coaching', icon: Building2 }
  ];

  return (
    <aside className="w-64 bg-white border-r border-orange-100/70 p-4 flex flex-col justify-between hidden md:flex min-h-[calc(100vh-4rem)] sticky top-16">
      <div className="space-y-6">
        
        {/* Main Navigation Group */}
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-pupils-muted px-3 mb-2 block">
            Navigation
          </span>
          <nav className="space-y-1">
            {mainNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-pupils-navy text-white shadow-md'
                      : 'text-slate-600 hover:bg-orange-50/80 hover:text-pupils-navy'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-pupils-orange' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 rounded-md text-[9px] font-extrabold bg-pupils-orange text-white animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Academic Passport Group */}
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-pupils-muted px-3 mb-2 block">
            Academic Identity
          </span>
          <nav className="space-y-1">
            {profileNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-pupils-navy text-white shadow-md'
                      : 'text-slate-600 hover:bg-orange-50/80 hover:text-pupils-navy'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-pupils-orange' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

      </div>

      {/* Footer Banner in Sidebar */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-pupils-cardPost to-orange-100/50 border border-orange-200/60">
        <div className="flex items-center gap-2 mb-1.5">
          <Sparkles className="w-4 h-4 text-pupils-orange" />
          <span className="text-xs font-extrabold text-pupils-navy">JEE / NEET Sprint</span>
        </div>
        <p className="text-[11px] text-slate-600 leading-snug mb-2.5">
          Compete in daily challenges & build your verified portfolio!
        </p>
        <button
          onClick={() => setActiveTab('contests')}
          className="w-full py-1.5 rounded-xl bg-pupils-orange hover:bg-pupils-orangeHover text-white text-[11px] font-bold transition-all shadow-sm"
        >
          Explore Contests →
        </button>
      </div>

    </aside>
  );
};
