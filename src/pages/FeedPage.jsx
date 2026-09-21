import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  PenSquare,
  Sparkles,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  CheckCircle2,
  Trophy,
  Filter,
  ArrowRight,
  Send,
  HelpCircle,
  Rocket
} from 'lucide-react';
import { VerifiedCheckBadge } from '../components/HandDrawnAnnotations';

export const FeedPage = () => {
  const {
    user,
    posts,
    toggleLikePost,
    toggleBookmarkPost,
    setIsCreatePostOpen
  } = useApp();

  const [activeFilter, setActiveFilter] = useState('all');
  const [openCommentPostId, setOpenCommentPostId] = useState(null);
  const [commentText, setCommentText] = useState('');
  
  // Interactive Today's Challenge State
  const [dailySelectedOpt, setDailySelectedOpt] = useState(null);
  const [dailyAnswerState, setDailyAnswerState] = useState(null);

  const dailyChallenge = {
    id: "dc-1",
    subject: "Physics",
    grade: "Class 12",
    difficulty: "Medium",
    question: "A particle moves with simple harmonic motion of amplitude A. At what displacement x from the equilibrium position is its kinetic energy equal to its potential energy?",
    options: ["A / 2", "A / √2", "A / 4", "√3 A / 2"],
    correctIdx: 1,
    explanation: "Kinetic Energy = 1/2 m w² (A² - x²) and Potential Energy = 1/2 m w² x². Setting KE = PE gives A² - x² = x² => 2x² = A² => x = A / √2."
  };

  const handleDailySubmit = (idx) => {
    setDailySelectedOpt(idx);
    setDailyAnswerState(idx === dailyChallenge.correctIdx ? 'correct' : 'incorrect');
  };

  const filteredPosts = posts.filter(p => {
    if (activeFilter === 'all') return true;
    return p.type === activeFilter;
  });

  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-16">
      
      {/* 1. Personalized Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-pupils-navy to-pupils-deepBlue text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-4 -bottom-6 opacity-15 pointer-events-none">
          <Sparkles className="w-48 h-48 text-white" />
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Good evening, {user.name.split(' ')[0]} 👋
            </h1>
            <p className="text-xs text-slate-200 mt-1 font-medium">
              What are you learning today? You have a <span className="text-pupils-orange font-bold">{user.stats.streakDays} day streak!</span>
            </p>
          </div>

          <button
            onClick={() => setIsCreatePostOpen(true)}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-pupils-orange hover:bg-pupils-orangeHover text-white text-xs font-bold shadow-pupils-orange transition-all hover:scale-105"
          >
            <PenSquare className="w-4 h-4" />
            <span>Create Post</span>
          </button>
        </div>
      </div>


      {/* 2. Today's Daily Challenge Widget */}
      <div className="p-6 rounded-3xl bg-white border border-orange-200/70 shadow-pupils-card space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-pupils-orange animate-ping" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-pupils-orange">
              TODAY'S CHALLENGE
            </span>
          </div>

          <div className="flex gap-1.5 text-[10px] font-extrabold">
            <span className="px-2 py-0.5 rounded-md bg-purple-100 text-pupils-purple">{dailyChallenge.subject}</span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">{dailyChallenge.grade}</span>
            <span className="px-2 py-0.5 rounded-md bg-orange-100 text-pupils-orange">{dailyChallenge.difficulty}</span>
          </div>
        </div>

        <p className="text-sm font-semibold text-pupils-navy leading-relaxed">
          {dailyChallenge.question}
        </p>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          {dailyChallenge.options.map((opt, idx) => {
            let btnStyle = "bg-slate-50 border-slate-200 hover:border-pupils-orange text-slate-700";
            if (dailySelectedOpt === idx) {
              btnStyle = dailyAnswerState === 'correct'
                ? "bg-emerald-500 text-white border-emerald-500"
                : "bg-red-500 text-white border-red-500";
            }
            return (
              <button
                key={idx}
                onClick={() => handleDailySubmit(idx)}
                className={`p-3 rounded-xl text-xs font-bold text-left border transition-all ${btnStyle}`}
              >
                {String.fromCharCode(65 + idx)}. {opt}
              </button>
            );
          })}
        </div>

        {/* Answer Feedback */}
        {dailyAnswerState && (
          <div className={`p-4 rounded-2xl text-xs space-y-1 animate-in fade-in ${
            dailyAnswerState === 'correct' ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-orange-50 text-orange-900 border border-orange-200'
          }`}>
            <span className="font-extrabold block">
              {dailyAnswerState === 'correct' ? '✓ Correct Answer!' : '× Not quite, check the solution:'}
            </span>
            <p className="text-slate-600 leading-snug">{dailyChallenge.explanation}</p>
          </div>
        )}
      </div>


      {/* 3. Post Type Filter Bar */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1">
        <div className="flex items-center gap-2">
          {[
            { id: 'all', label: 'All Posts' },
            { id: 'achievement', label: 'Achievements 🏆' },
            { id: 'project', label: 'Projects 🚀' },
            { id: 'question', label: 'Questions ❓' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                activeFilter === f.id
                  ? 'bg-pupils-navy text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-orange-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>


      {/* 4. Academic Feed Post Cards */}
      <div className="space-y-5">
        {filteredPosts.map(post => (
          <article
            key={post.id}
            className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-pupils-card space-y-4 hover:shadow-pupils-hover transition-all"
          >
            {/* Author Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-pupils-orange/30"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-pupils-navy">{post.author.name}</span>
                    {post.author.verified && (
                      <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white" />
                    )}
                  </div>
                  <span className="text-xs text-slate-400">
                    {post.author.grade} · {post.author.city} · {post.timestamp}
                  </span>
                </div>
              </div>

              {post.author.verifiedBy && (
                <VerifiedCheckBadge text={post.author.verifiedBy} size="small" />
              )}
            </div>

            {/* Post Category Badge */}
            <div>
              <span className="inline-block px-2.5 py-1 rounded-lg bg-orange-50 text-pupils-orange text-[11px] font-extrabold uppercase tracking-wide">
                {post.badge}
              </span>
            </div>

            {/* Content */}
            <p className="text-sm text-slate-800 font-medium leading-relaxed whitespace-pre-line">
              {post.content}
            </p>

            {/* Attached Media */}
            {post.images && post.images.length > 0 && (
              <div className={`grid gap-2 rounded-2xl overflow-hidden ${
                post.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
              }`}>
                {post.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Post Attachment"
                    className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                ))}
              </div>
            )}

            {/* Tags */}
            {post.tags && (
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[11px] font-semibold text-pupils-deepBlue hover:underline cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Interaction Bar */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-5">
                <button
                  onClick={() => toggleLikePost(post.id)}
                  className={`flex items-center gap-1.5 transition-colors ${
                    post.isLiked ? 'text-red-500' : 'hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-red-500' : ''}`} />
                  <span>{post.likes}</span>
                </button>

                <button
                  onClick={() => setOpenCommentPostId(openCommentPostId === post.id ? null : post.id)}
                  className="flex items-center gap-1.5 hover:text-pupils-blue transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.comments} Comments</span>
                </button>

                <button className="hover:text-pupils-navy transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => toggleBookmarkPost(post.id)}
                className={`transition-colors ${
                  post.isBookmarked ? 'text-pupils-orange' : 'hover:text-pupils-orange'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${post.isBookmarked ? 'fill-pupils-orange' : ''}`} />
              </button>
            </div>

            {/* Comments Drawer */}
            {openCommentPostId === post.id && (
              <div className="pt-3 space-y-3 border-t border-slate-100 animate-in fade-in">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Write an encouraging academic comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="flex-1 px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-1 focus:ring-pupils-orange"
                  />
                  <button className="p-2 rounded-full bg-pupils-orange text-white hover:bg-pupils-orangeHover">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

          </article>
        ))}
      </div>

    </div>
  );
};
