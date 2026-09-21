import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  mockUser,
  mockPosts,
  mockQuestions,
  mockContests,
  mockOpportunities,
  mockInstitutions,
  mockLeaderboard
} from '../../server/data/mockData.js';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Navigation mode: 'landing' or 'app'
  const [viewMode, setViewMode] = useState('landing');
  const [activeTab, setActiveTab] = useState('feed'); // 'feed', 'profile', 'discover', 'practice', 'contests', 'opportunities', 'institution', 'leaderboard'
  
  // App Data States
  const [user, setUser] = useState(mockUser);
  const [posts, setPosts] = useState(mockPosts);
  const [questions, setQuestions] = useState(mockQuestions);
  const [contests, setContests] = useState(mockContests);
  const [opportunities, setOpportunities] = useState(mockOpportunities);
  const [institutions, setInstitutions] = useState(mockInstitutions);
  const [leaderboard, setLeaderboard] = useState(mockLeaderboard);

  // Selected entities & Modals
  const [selectedInstitution, setSelectedInstitution] = useState(mockInstitutions[0]);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [activeContestModal, setActiveContestModal] = useState(null);
  const [isRankingModalOpen, setIsRankingModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([
    { id: 'n1', text: 'Riya Sharma liked your Smart Irrigation Project post.', time: '10m ago', unread: true },
    { id: 'n2', text: 'JEE DAILY 04 contest starts in 2 hours!', time: '1h ago', unread: true },
    { id: 'n3', text: 'Your certificate for District Science Olympiad was verified.', time: '1d ago', unread: false }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  // Fetch initial data from Express API if available, fallback to mock data
  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const resUser = await fetch(' https://pupils.onrender.com/api/user');
        if (resUser.ok) {
          const jsonUser = await resUser.json();
          if (jsonUser.data) setUser(jsonUser.data);
        }
        const resPosts = await fetch(' https://pupils.onrender.com/api/posts');
        if (resPosts.ok) {
          const jsonPosts = await resPosts.json();
          if (jsonPosts.data) setPosts(jsonPosts.data);
        }
      } catch (e) {
        console.log('Using local client state');
      }
    };
    fetchApiData();
  }, []);

  // Post Actions
  const toggleLikePost = async (postId) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const isLiked = !p.isLiked;
        return {
          ...p,
          isLiked,
          likes: isLiked ? p.likes + 1 : p.likes - 1
        };
      }
      return p;
    }));

    try {
      await fetch(` https://pupils.onrender.com/api/posts/${postId}/like`, { method: 'POST' });
    } catch (e) {}
  };

  const toggleBookmarkPost = async (postId) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return { ...p, isBookmarked: !p.isBookmarked };
      }
      return p;
    }));

    try {
      await fetch(` https://pupils.onrender.com/api/posts/${postId}/bookmark`, { method: 'POST' });
    } catch (e) {}
  };

  const createPost = async (postData) => {
    const newPost = {
      id: `post-${Date.now()}`,
      author: {
        name: user.name,
        avatar: user.avatar,
        grade: user.grade,
        city: user.city,
        verified: true,
        verifiedBy: user.school
      },
      timestamp: 'Just now',
      type: postData.type || 'achievement',
      badge: postData.type === 'project' ? '🚀 Project Showcase' : postData.type === 'question' ? '❓ Question' : '🏆 Achievement',
      content: postData.content,
      images: postData.images || [],
      likes: 0,
      comments: 0,
      isLiked: false,
      isBookmarked: false,
      tags: postData.tags || ['Academic']
    };

    setPosts(prev => [newPost, ...prev]);
    setIsCreatePostOpen(false);

    try {
      await fetch(' https://pupils.onrender.com/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      });
    } catch (e) {}
  };

  // Practice submit action
  const submitAnswer = async (questionId, optionId) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return { isCorrect: false };
    const isCorrect = question.correctOption === optionId;

    if (isCorrect) {
      setUser(prev => ({
        ...prev,
        stats: {
          ...prev.stats,
          questionsSolved: prev.stats.questionsSolved + 1
        }
      }));
    }

    return {
      isCorrect,
      correctOption: question.correctOption,
      explanation: question.explanation
    };
  };

  // Submit contest action
  const submitContest = async (contestId) => {
    const mockResult = {
      score: '240/300',
      accuracy: '88%',
      rank: Math.floor(Math.random() * 80) + 10,
      percentile: '98.2'
    };

    setContests(prev => prev.map(c => {
      if (c.id === contestId) {
        return { ...c, userResult: mockResult };
      }
      return c;
    }));

    setUser(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        contestsCount: prev.stats.contestsCount + 1
      }
    }));

    return mockResult;
  };

  return (
    <AppContext.Provider value={{
      viewMode,
      setViewMode,
      activeTab,
      setActiveTab,
      user,
      setUser,
      posts,
      toggleLikePost,
      toggleBookmarkPost,
      createPost,
      questions,
      submitAnswer,
      contests,
      submitContest,
      opportunities,
      institutions,
      selectedInstitution,
      setSelectedInstitution,
      leaderboard,
      isCreatePostOpen,
      setIsCreatePostOpen,
      activeContestModal,
      setActiveContestModal,
      isRankingModalOpen,
      setIsRankingModalOpen,
      searchQuery,
      setSearchQuery,
      notifications,
      showNotifications,
      setShowNotifications
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
