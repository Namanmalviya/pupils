import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, CheckCircle2, XCircle, ArrowRight, RefreshCw, HelpCircle, Sparkles } from 'lucide-react';

export const PracticePage = () => {
  const { questions, submitAnswer } = useApp();
  const [selectedExam, setSelectedExam] = useState('All');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [answersState, setAnswersState] = useState({}); // { questionId: { option, result } }

  const exams = ['All', 'JEE MAIN', 'NEET', 'Olympiad'];
  const subjects = ['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology'];

  const filteredQuestions = questions.filter(q => {
    if (selectedExam !== 'All' && !q.exam.toLowerCase().includes(selectedExam.toLowerCase())) return false;
    if (selectedSubject !== 'All' && q.subject.toLowerCase() !== selectedSubject.toLowerCase()) return false;
    return true;
  });

  const handleSelectOption = async (questionId, optionId) => {
    const res = await submitAnswer(questionId, optionId);
    setAnswersState({
      ...answersState,
      [questionId]: {
        selected: optionId,
        isCorrect: res.isCorrect,
        correctOption: res.correctOption,
        explanation: res.explanation
      }
    });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-pupils-navy to-pupils-deepBlue text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="px-2.5 py-0.5 rounded-full bg-pupils-orange text-[10px] font-extrabold uppercase tracking-wide">
            Problem Solver Engine
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight mt-1">Academic Practice Arena</h1>
          <p className="text-xs text-slate-200 mt-1 font-medium">
            Solve curated JEE, NEET, and Olympiad problems with instant step-by-step solutions.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white/10 p-2 rounded-2xl border border-white/20">
          <Sparkles className="w-5 h-5 text-pupils-orange" />
          <span className="text-xs font-bold">2,481 Solved</span>
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
        <div>
          <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Target Exam</span>
          <div className="flex flex-wrap gap-2">
            {exams.map(e => (
              <button
                key={e}
                onClick={() => setSelectedExam(e)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedExam === e
                    ? 'bg-pupils-orange text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-orange-50'
                }`}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Subject</span>
          <div className="flex flex-wrap gap-2">
            {subjects.map(s => (
              <button
                key={s}
                onClick={() => setSelectedSubject(s)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedSubject === s
                    ? 'bg-pupils-navy text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-orange-50'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q, qIdx) => {
          const state = answersState[q.id];
          return (
            <div
              key={q.id}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-pupils-card space-y-4 hover:shadow-pupils-hover transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-orange-100 text-pupils-orange text-xs font-extrabold">
                    {q.exam}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-purple-100 text-pupils-purple text-xs font-extrabold">
                    {q.subject}
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-400">Difficulty: {q.difficulty}</span>
              </div>

              <p className="text-sm font-semibold text-pupils-navy leading-relaxed">
                <span className="font-extrabold mr-1">Q{qIdx + 1}.</span> {q.text}
              </p>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {q.options.map(opt => {
                  let optStyle = "bg-slate-50 border-slate-200 hover:border-pupils-orange text-slate-700";
                  if (state) {
                    if (opt.id === state.selected) {
                      optStyle = state.isCorrect
                        ? "bg-emerald-500 text-white border-emerald-500 shadow-sm"
                        : "bg-red-500 text-white border-red-500 shadow-sm";
                    } else if (opt.id === state.correctOption) {
                      optStyle = "bg-emerald-100 text-emerald-900 border-emerald-300 font-bold";
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      disabled={!!state}
                      onClick={() => handleSelectOption(q.id, opt.id)}
                      className={`p-3.5 rounded-2xl text-xs font-semibold text-left border transition-all ${optStyle}`}
                    >
                      <span className="font-extrabold mr-1.5">{opt.id}.</span> {opt.text}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Feedback & Detailed Explanation */}
              {state && (
                <div className={`p-4 rounded-2xl text-xs space-y-2 animate-in fade-in ${
                  state.isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-orange-50 text-orange-900 border border-orange-200'
                }`}>
                  <div className="flex items-center gap-2">
                    {state.isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className="font-extrabold text-sm">
                      {state.isCorrect ? 'Correct Solution!' : `Incorrect (Correct Option: ${state.correctOption})`}
                    </span>
                  </div>

                  <div className="pt-1 border-t border-emerald-200/60">
                    <span className="font-bold block mb-1">Step-by-step Explanation:</span>
                    <p className="text-slate-600 leading-relaxed font-medium">{state.explanation}</p>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button className="flex items-center gap-1 text-xs font-bold text-pupils-orange hover:underline">
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Practice Similar Questions</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
