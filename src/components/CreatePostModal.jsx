import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Image, Tag, Send, Trophy, Rocket, HelpCircle, BookOpen, Sparkles } from 'lucide-react';

export const CreatePostModal = () => {
  const { isCreatePostOpen, setIsCreatePostOpen, createPost } = useApp();
  const [postType, setPostType] = useState('achievement');
  const [content, setContent] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState(['JEE 2027', 'Physics']);

  if (!isCreatePostOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    createPost({
      type: postType,
      content,
      tags,
      images: postType === 'achievement' ? [
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
      ] : []
    });
    setContent('');
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (t) => {
    setTags(tags.filter(item => item !== t));
  };

  const postTypesList = [
    { id: 'achievement', label: 'Achievement 🏆', icon: Trophy },
    { id: 'project', label: 'Project 🚀', icon: Rocket },
    { id: 'question', label: 'Question ❓', icon: HelpCircle },
    { id: 'note', label: 'Notes 📚', icon: BookOpen },
    { id: 'opportunity', label: 'Opportunity ✨', icon: Sparkles }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-pupils-navy/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-orange-100 p-6 space-y-5 relative">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-lg font-extrabold text-pupils-navy">Create Academic Post</h3>
          <button
            onClick={() => setIsCreatePostOpen(false)}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Post Type Selector */}
        <div>
          <label className="text-xs font-bold text-slate-500 mb-2 block">Post Category</label>
          <div className="flex flex-wrap gap-2">
            {postTypesList.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setPostType(item.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  postType === item.id
                    ? 'bg-pupils-orange text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-orange-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <textarea
              rows={4}
              placeholder="What are you learning, building, or achieving today? Share details with peers..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3.5 text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pupils-orange/30 focus:border-pupils-orange"
            />
          </div>

          {/* Tags */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="text"
                placeholder="Add tag (e.g. Organic Chemistry)"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } }}
                className="flex-1 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-pupils-orange"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-3 py-1.5 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300"
              >
                Add
              </button>
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              {tags.map(t => (
                <span key={t} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-100 text-pupils-orange text-xs font-semibold">
                  #{t}
                  <button type="button" onClick={() => removeTag(t)} className="hover:text-red-500">×</button>
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2 text-slate-400">
              <button type="button" className="p-2 hover:bg-orange-50 rounded-full hover:text-pupils-orange">
                <Image className="w-5 h-5" />
              </button>
              <button type="button" className="p-2 hover:bg-orange-50 rounded-full hover:text-pupils-orange">
                <Tag className="w-5 h-5" />
              </button>
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-pupils-orange hover:bg-pupils-orangeHover text-white text-xs font-extrabold shadow-pupils-orange transition-all flex items-center gap-2"
            >
              <span>Publish Post</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
