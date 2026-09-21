import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Clock, CheckCircle2, Trophy, BarChart2, ArrowRight } from 'lucide-react';

export const ContestRunnerModal = () => {
  const { activeContestModal, setActiveContestModal, submitContest } = useApp();
  const [currentStep, setCurrentStep] = useState('quiz'); // 'quiz' or 'results'
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  if (!activeContestModal) return null;

  const mockQuestions = [
    {
      id: "q1",
      subject: "Physics",
      text: "A disc of mass M and radius R rotates about its center. If a constant torque τ is applied, what is its angular acceleration α?",
      options: ["2τ / (M R²)", "τ / (M R²)", "4τ / (M R²)", "τ / (2 M R²)"],
      correct: 0
    },
    {
      id: "q2",
      subject: "Mathematics",
      text: "Find the limit as x → 0 of (sin(3x) - 3x) / x³.",
      options: ["-9/2", "-9/6 = -3/2", "-3", "0"],
      correct: 1
    },
    {
      id: "q3",
      subject: "Chemistry",
      text: "Which bond angle is associated with sp³d hybrid orbitals in trigonal bipyramidal geometry?",
      options: ["90° and 120°", "109.5°", "180° only", "120° only"],
      correct: 0
    }
  ];

  const handleOptionSelect = (qId, optionIdx) => {
    setAnswers({ ...answers, [qId]: optionIdx });
  };

  const handleSubmit = async () => {
    const res = await submitContest(activeContestModal.id);
    setResult(res);
    setCurrentStep('results');
  };

  return (
    <div className="fixed inset-0 z-50 bg-pupils-navy/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-purple-100 overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-pupils-navy text-white p-5 flex items-center justify-between">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-pupils-purple text-[10px] font-extrabold uppercase tracking-wide">
              {activeContestModal.exam || 'JEE Contests'}
            </span>
            <h3 className="text-xl font-extrabold text-white mt-1">{activeContestModal.title}</h3>
          </div>
          
          <div className="flex items-center gap-4">
            {currentStep === 'quiz' && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-pupils-orange">
                <Clock className="w-4 h-4" />
                <span>28:45 Left</span>
              </div>
            )}
            <button
              onClick={() => setActiveContestModal(null)}
              className="p-1 rounded-full hover:bg-white/10 text-slate-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        {currentStep === 'quiz' ? (
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            {mockQuestions.map((q, idx) => (
              <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-pupils-purple">Question {idx + 1} · {q.subject}</span>
                  <span className="text-[10px] font-bold text-slate-400">Single Choice</span>
                </div>
                <p className="text-sm font-semibold text-slate-800">{q.text}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => handleOptionSelect(q.id, oIdx)}
                      className={`p-3 rounded-xl text-xs text-left font-semibold border transition-all ${
                        answers[q.id] === oIdx
                          ? 'bg-pupils-purple text-white border-pupils-purple shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-purple-200'
                      }`}
                    >
                      {String.fromCharCode(65 + oIdx)}. {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleSubmit}
                className="px-7 py-3 rounded-full bg-pupils-purple hover:bg-purple-700 text-white font-extrabold text-xs shadow-pupils-purple transition-all flex items-center gap-2"
              >
                <span>Submit Contest Answers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Results Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <Trophy className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-2xl font-extrabold text-pupils-navy">Contest Completed! 🎉</h4>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Your answers have been evaluated and ranked against 2,840 national participants.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Score</span>
                <span className="text-lg font-extrabold text-pupils-purple">{result?.score}</span>
              </div>
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Accuracy</span>
                <span className="text-lg font-extrabold text-emerald-600">{result?.accuracy}</span>
              </div>
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">National Rank</span>
                <span className="text-lg font-extrabold text-pupils-orange">#{result?.rank}</span>
              </div>
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Percentile</span>
                <span className="text-lg font-extrabold text-pupils-navy">{result?.percentile} %ile</span>
              </div>
            </div>

            <button
              onClick={() => setActiveContestModal(null)}
              className="px-6 py-3 rounded-full bg-pupils-navy hover:bg-pupils-deepBlue text-white font-extrabold text-xs shadow-md"
            >
              Back to Contests
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
