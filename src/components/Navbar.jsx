import React from 'react';
import { useApp } from '../context/AppContext';
import { Search, Bell, GraduationCap, LayoutDashboard, Sparkles, User, LogOut } from 'lucide-react';
import { VerifiedCheckBadge } from './HandDrawnAnnotations';

export const Navbar = () => {
  const {
    viewMode,
    setViewMode,
    activeTab,
    setActiveTab,
    user,
    searchQuery,
    setSearchQuery,
    notifications,
    showNotifications,
    setShowNotifications
  } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-pupils-creamBg/90 backdrop-blur-md border-b border-orange-100/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo matching Reference Image */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => { setViewMode('landing'); }}
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-pupils-navy text-white shadow-sm group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6 text-pupils-orange" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pupils-orange rounded-full animate-ping opacity-75" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-2xl tracking-tight text-pupils-navy">PUPILS</span>
            </div>
          </div>
        </div>

        {/* Global Search Bar (for App Mode) */}
        {viewMode === 'app' && (
          <div className="flex-1 max-w-md hidden md:block relative">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-pupils-muted" />
              <input
                type="text"
                placeholder="Search students, schools, coaching, opportunities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-200/80 rounded-full focus:outline-none focus:ring-2 focus:ring-pupils-orange/30 focus:border-pupils-orange transition-all placeholder:text-slate-400"
              />
            </div>
          </div>
        )}

        {/* Right Navigation Controls */}
        <div className="flex items-center gap-3">
          
          {/* Mode Switcher Button */}
          <button
            onClick={() => setViewMode(viewMode === 'landing' ? 'app' : 'landing')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm ${
              viewMode === 'landing'
                ? 'bg-pupils-navy text-white hover:bg-pupils-deepBlue'
                : 'bg-white border border-orange-200 text-pupils-navy hover:border-pupils-orange'
            }`}
          >
            {viewMode === 'landing' ? (
              <>
                <LayoutDashboard className="w-3.5 h-3.5 text-pupils-orange" />
                <span>Open App Workspace</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-pupils-orange" />
                <span>Landing Page</span>
              </>
            )}
          </button>

          {/* App Mode User Controls */}
          {viewMode === 'app' ? (
            <div className="flex items-center gap-2">
              
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 rounded-full hover:bg-orange-100/50 text-pupils-navy transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  {notifications.some(n => n.unread) && (
                    <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-pupils-orange rounded-full ring-2 ring-pupils-creamBg" />
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-slate-100">
                      <span className="font-bold text-sm text-pupils-navy">Notifications</span>
                      <span className="text-xs text-pupils-orange font-semibold cursor-pointer">Mark all read</span>
                    </div>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {notifications.map(n => (
                        <div key={n.id} className={`p-2.5 rounded-xl text-xs flex gap-2.5 ${n.unread ? 'bg-orange-50/70 border border-orange-100' : 'hover:bg-slate-50'}`}>
                          <div className="w-2 h-2 rounded-full bg-pupils-orange mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-slate-800 font-medium">{n.text}</p>
                            <span className="text-[10px] text-slate-400 mt-1 block">{n.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* User Avatar & Profile Trigger */}
              <div 
                className="flex items-center gap-2 pl-2 cursor-pointer border-l border-slate-200"
                onClick={() => setActiveTab('profile')}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-pupils-orange/40"
                />
                <div className="hidden sm:block text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-pupils-navy leading-tight">{user.name}</span>
                    <VerifiedCheckBadge text="" size="small" />
                  </div>
                  <span className="text-[10px] text-pupils-muted leading-tight block">{user.grade}</span>
                </div>
              </div>

            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button 
                onClick={() => { setViewMode('app'); setActiveTab('feed'); }}
                className="text-xs font-bold text-pupils-navy hover:text-pupils-orange transition-colors"
              >
                Log in
              </button>
              <button 
                onClick={() => { setViewMode('app'); setActiveTab('feed'); }}
                className="px-4 py-2 rounded-full bg-pupils-orange hover:bg-pupils-orangeHover text-white text-xs font-bold shadow-pupils-orange transition-all hover:scale-105"
              >
                Get Started →
              </button>
            </div>
          )}

        </div>

      </div>
    </header>
  );
};
