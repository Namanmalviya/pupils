import React from 'react';
import { useApp } from '../context/AppContext';
import {
  PenSquare,
  Trophy,
  Compass,
  ArrowRight,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  CheckCircle2,
  Clock,
  FileText,
  Users,
  Laptop
} from 'lucide-react';
import {
  CrownAccent,
  SparkleRays,
  SunAccent,
  VerifiedCheckBadge
} from '../components/HandDrawnAnnotations';

export const LandingPage = () => {
  const { setViewMode, setActiveTab } = useApp();

  const handleStart = (tab = 'feed') => {
    setViewMode('app');
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-pupils-creamBg text-pupils-textDark pb-20 overflow-x-hidden selection:bg-pupils-orange selection:text-white">
      
      {/* 1. Hero Section */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-8 md:pt-14 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top Handwritten Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/60 border border-orange-200/60 text-pupils-navy text-xs font-bold">
              <span>Academic Social Network</span>
              <span className="w-1.5 h-1.5 rounded-full bg-pupils-orange" />
              <span className="font-handwritten text-pupils-orange text-sm font-semibold">For Students</span>
            </div>

            {/* Main Title matching reference image typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-pupils-navy tracking-tight leading-[1.1]">
              A bigger <br />
              future starts <br />
              <span className="wavy-underline text-pupils-navy">here.</span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-md font-medium leading-relaxed">
              A professional network for school students to showcase, compete, and discover what's next.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleStart('feed')}
                className="px-7 py-3.5 rounded-full bg-pupils-orange hover:bg-pupils-orangeHover text-white text-sm font-extrabold shadow-pupils-orange transition-all hover:scale-105 flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => handleStart('opportunities')}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-orange-50/50 text-pupils-navy border border-slate-200/80 text-sm font-bold transition-all shadow-sm"
              >
                Explore Pupils
              </button>
            </div>

            {/* Sketched Annotation pointing to hero */}
            <div className="pt-2 flex items-center gap-3 text-slate-500 font-handwritten text-lg font-bold">
              <span className="text-pupils-deepBlue">Students doing amazing things</span>
              <svg className="w-10 h-8 text-pupils-deepBlue rotate-12" viewBox="0 0 60 40" fill="none">
                <path d="M10 10 C 30 5, 50 15, 52 32 M52 32 L40 25 M52 32 L44 38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>

          </div>

          {/* Hero Right Image & Handwritten Floating Elements */}
          <div className="lg:col-span-6 relative">
            
            {/* Hand-drawn Crown above hero student */}
            <div className="absolute -top-6 right-20 z-20 hidden sm:block animate-bounce">
              <CrownAccent className="w-10 h-10 text-pupils-orange" />
            </div>

            {/* Handwritten Top Right Text */}
            <div className="absolute -top-4 right-2 z-20 font-handwritten text-pupils-deepBlue font-bold text-lg leading-tight hidden sm:block rotate-6">
              Same Students <br />
              <span className="text-pupils-orange">Bigger Possibilities</span>
            </div>

            {/* Main Student Visual Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                alt="Pupils Students"
                className="w-full h-80 sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pupils-navy/60 via-transparent to-transparent" />

              {/* Floating Notebook Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg flex items-center justify-between">
                <div>
                  <span className="font-handwritten text-xl font-bold text-pupils-navy block">
                    Same Students Brighter Tomorrows
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <VerifiedCheckBadge text="Verified Academic Network" size="small" />
                  </div>
                </div>
                
                <div className="px-3 py-1.5 rounded-full bg-pupils-blueLight text-pupils-blue text-xs font-bold font-handwritten">
                  Learn · Compete · Discover · Grow ♥
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Feature Section - 3 Major Pillars from Reference Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-16 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-pupils-navy">
            Everything students need to grow academically
          </h2>
          <p className="text-sm text-slate-500 font-medium max-w-md mx-auto">
            Showcase your journey, compete in national contests, and discover life-changing opportunities.
          </p>
        </div>

        {/* --- PILLAR 1: POST (Warm Orange Tint Container) --- */}
        <div className="relative rounded-3xl bg-pupils-cardPost p-6 sm:p-8 border border-orange-200/70 shadow-pupils-card transition-all hover:shadow-pupils-hover">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Header Info */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-pupils-orange text-white flex items-center justify-center shadow-pupils-orange">
                  <PenSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-pupils-orange tracking-wide uppercase">POST</h3>
                  <p className="text-xs font-bold text-slate-600">Showcase what you've achieved</p>
                </div>
              </div>

              {/* Handwritten note on left */}
              <div className="pt-2 text-left space-y-1">
                <p className="font-handwritten text-xl font-bold text-pupils-orange/90 leading-tight">
                  Projects <br />
                  Achievements <br />
                  Certificates <br />
                  And more...
                </p>
                {/* Curved Arrow */}
                <svg className="w-12 h-10 text-pupils-orange rotate-45" viewBox="0 0 60 40" fill="none">
                  <path d="M10 10 C 30 5, 50 15, 52 32 M52 32 L40 25 M52 32 L44 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              <button
                onClick={() => handleStart('feed')}
                className="inline-flex items-center gap-2 text-xs font-bold text-pupils-orange hover:text-pupils-orangeHover transition-colors pt-1"
              >
                <span>Create your first post</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right Inner White Card (Exact replica of Riya Sharma Post Card) */}
            <div className="md:col-span-8 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-4">
              
              {/* Post Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                    alt="Riya Sharma"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-400/40"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-pupils-navy">Riya Sharma</span>
                      <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white" />
                    </div>
                    <span className="text-xs text-slate-400">Class 11 · Delhi · 3h ago</span>
                  </div>
                </div>

                <VerifiedCheckBadge text="Verified by Organizer" size="small" />
              </div>

              {/* Post Content */}
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Won 1st place at the State Science Olympiad! 🏆 Grateful to my teachers and everyone who supported me!
              </p>

              {/* Post Photos */}
              <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&q=80&w=400"
                  alt="Trophy"
                  className="w-full h-32 object-cover hover:scale-105 transition-transform"
                />
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400"
                  alt="Certificate"
                  className="w-full h-32 object-cover hover:scale-105 transition-transform"
                />
              </div>

              {/* Post Reactions */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-slate-500 text-xs font-semibold">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                    <span>124</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pupils-blue transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>18</span>
                  </button>
                  <button className="hover:text-pupils-navy transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                <button className="hover:text-pupils-orange transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>


        {/* --- PILLAR 2: CONTEST (Soft Purple Tint Container) --- */}
        <div className="relative rounded-3xl bg-pupils-cardContest p-6 sm:p-8 border border-purple-200/70 shadow-pupils-card transition-all hover:shadow-pupils-hover">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Header Info */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-pupils-purple text-white flex items-center justify-center shadow-pupils-purple">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-pupils-purple tracking-wide uppercase">CONTEST</h3>
                  <p className="text-xs font-bold text-slate-600">Compete with your peers</p>
                </div>
              </div>

              {/* Handwritten note on left */}
              <div className="pt-2 text-left space-y-1">
                <p className="font-handwritten text-xl font-bold text-pupils-purple/90 leading-tight">
                  JEE · NEET <br />
                  Olympiads <br />
                  Math · Science <br />
                  And more...
                </p>
                {/* Curved Arrow */}
                <svg className="w-12 h-10 text-pupils-purple rotate-45" viewBox="0 0 60 40" fill="none">
                  <path d="M10 10 C 30 5, 50 15, 52 32 M52 32 L40 25 M52 32 L44 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Right Inner White Card (Exact replica of JEE DAILY 04 Contest Card) */}
            <div className="md:col-span-8 bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4 relative overflow-hidden">
              
              {/* Handwritten annotation right corner */}
              <div className="absolute top-3 right-4 font-handwritten text-pupils-purple font-bold text-sm rotate-6 hidden sm:flex items-center gap-1">
                <span>Challenge Yourself Grow Daily</span>
                <SparkleRays className="w-4 h-4 text-pupils-purple" />
              </div>

              {/* Card Badges */}
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-purple-100 text-pupils-purple font-extrabold text-xs">
                  JEE
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-pupils-purple" />
                  Starts in 2h 30m
                </span>
              </div>

              {/* Title & Info */}
              <div>
                <h4 className="text-xl font-extrabold text-pupils-navy">JEE DAILY 04</h4>
                <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold mt-1">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-pupils-purple" />
                    4 Questions
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-pupils-purple" />
                    30 Minutes
                  </span>
                </div>
              </div>

              {/* Subject Tags */}
              <div className="flex flex-wrap gap-2">
                {['Mathematics', 'Physics', 'Chemistry'].map((sub) => (
                  <span key={sub} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    {sub}
                  </span>
                ))}
              </div>

              {/* Start Button */}
              <button
                onClick={() => handleStart('contests')}
                className="w-full py-3 rounded-xl bg-pupils-purple hover:bg-purple-700 text-white font-extrabold text-sm shadow-pupils-purple transition-all flex items-center justify-center gap-2"
              >
                <span>Start Solving</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>


        {/* --- PILLAR 3: DISCOVER (Soft Blue Tint Container) --- */}
        <div className="relative rounded-3xl bg-pupils-cardDiscover p-6 sm:p-8 border border-blue-200/70 shadow-pupils-card transition-all hover:shadow-pupils-hover">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Header Info */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-pupils-blue text-white flex items-center justify-center shadow-pupils-blue">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-pupils-blue tracking-wide uppercase">DISCOVER</h3>
                  <p className="text-xs font-bold text-slate-600">Find opportunities you can be a part of</p>
                </div>
              </div>

              {/* Handwritten note on left */}
              <div className="pt-2 text-left space-y-1">
                <p className="font-handwritten text-xl font-bold text-pupils-blue/90 leading-tight">
                  Competitions <br />
                  Scholarships <br />
                  Programs <br />
                  Hackathons <br />
                  And more...
                </p>
                {/* Curved Arrow */}
                <svg className="w-12 h-10 text-pupils-blue rotate-45" viewBox="0 0 60 40" fill="none">
                  <path d="M10 10 C 30 5, 50 15, 52 32 M52 32 L40 25 M52 32 L44 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Right Inner White Card (Exact replica of INSPIRE Science Competition Card) */}
            <div className="md:col-span-8 bg-white rounded-2xl p-5 border border-blue-100 shadow-sm space-y-4 relative overflow-hidden">
              
              {/* Featured Badge */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-pupils-blue font-extrabold text-xs">
                  Featured
                </span>
                <Bookmark className="w-4 h-4 text-slate-400 hover:text-pupils-blue cursor-pointer" />
              </div>

              {/* Main Content Info */}
              <div className="flex gap-4 items-start">
                <div className="flex-1 space-y-1">
                  <h4 className="text-lg font-extrabold text-pupils-navy">INSPIRE Science Competition</h4>
                  <p className="text-xs font-semibold text-slate-500">Indian Institute of Science (IISc)</p>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-semibold pt-2">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-pupils-blue" />
                      Classes 6 – 12
                    </span>
                    <span className="flex items-center gap-1">
                      <Laptop className="w-3.5 h-3.5 text-pupils-blue" />
                      Online
                    </span>
                  </div>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-100 text-pupils-orange text-xs font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      Closes in 18 days
                    </span>
                  </div>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=250"
                  alt="IISc Campus"
                  className="w-24 h-24 rounded-xl object-cover ring-2 ring-blue-100 flex-shrink-0"
                />
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleStart('opportunities')}
                className="w-full py-3 rounded-xl bg-pupils-blue hover:bg-blue-600 text-white font-extrabold text-sm shadow-pupils-blue transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Opportunity</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </section>


      {/* 3. Bottom CTA Section matching reference image */}
      <section className="max-w-md mx-auto px-4 text-center space-y-6 relative pt-4">
        
        {/* Main Big Orange CTA Button */}
        <button
          onClick={() => handleStart('feed')}
          className="w-full py-4 rounded-full bg-pupils-orange hover:bg-pupils-orangeHover text-white text-lg font-extrabold shadow-pupils-orange transition-all hover:scale-105 flex items-center justify-center gap-2"
        >
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Subtext */}
        <p className="text-xs font-bold text-slate-600">
          Already have an account?{' '}
          <button onClick={() => handleStart('feed')} className="text-pupils-blue hover:underline">
            Log in
          </button>
        </p>

        {/* Handwritten Bottom Corner Notes */}
        <div className="absolute -left-12 bottom-0 font-handwritten text-pupils-orange font-bold text-base hidden sm:block -rotate-6">
          More Doers <br />
          Brighter Tomorrows
        </div>

        <div className="absolute -right-12 bottom-0 font-handwritten text-pupils-orange font-bold text-base hidden sm:flex items-center gap-1 rotate-6">
          <span>For a Brighter You</span>
          <SunAccent className="w-5 h-5 text-pupils-orange" />
        </div>

      </section>

    </div>
  );
};
