import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { LandingPage } from './pages/LandingPage';
import { FeedPage } from './pages/FeedPage';
import { ProfilePage } from './pages/ProfilePage';
import { PracticePage } from './pages/PracticePage';
import { ContestPage } from './pages/ContestPage';
import { OpportunitiesPage } from './pages/OpportunitiesPage';
import { DiscoverPage } from './pages/DiscoverPage';
import { InstitutionPage } from './pages/InstitutionPage';
import { LeaderboardPage } from './pages/LeaderboardPage';

import { CreatePostModal } from './components/CreatePostModal';
import { ContestRunnerModal } from './components/ContestRunnerModal';
import { RankingInfoModal } from './components/RankingInfoModal';

export const AppContent = () => {
  const { viewMode, activeTab } = useApp();

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'feed':
        return <FeedPage />;
      case 'profile':
      case 'achievements':
        return <ProfilePage />;
      case 'practice':
        return <PracticePage />;
      case 'contests':
        return <ContestPage />;
      case 'opportunities':
        return <OpportunitiesPage />;
      case 'discover':
        return <DiscoverPage />;
      case 'institution':
        return <InstitutionPage />;
      case 'leaderboard':
        return <LeaderboardPage />;
      default:
        return <FeedPage />;
    }
  };

  return (
    <div className="min-h-screen bg-pupils-creamBg text-pupils-textDark selection:bg-pupils-orange selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Container */}
      {viewMode === 'landing' ? (
        <LandingPage />
      ) : (
        <div className="max-w-7xl mx-auto flex gap-6 px-4 sm:px-6 pt-6">
          {/* Desktop Left Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            {renderActiveTab()}
          </main>
        </div>
      )}

      {/* Global Modals */}
      <CreatePostModal />
      <ContestRunnerModal />
      <RankingInfoModal />
    </div>
  );
};

export default function App() {
  return <AppContent />;
}
