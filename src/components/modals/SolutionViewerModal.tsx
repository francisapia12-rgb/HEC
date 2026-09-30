import React from 'react';
import { X, CheckCircle, Award, BookOpen, Printer, Download } from 'lucide-react';
import { useAcademic } from '../../context/AcademicContext';

export const SolutionViewerModal: React.FC = () => {
  const { activeSolution, setActiveSolution, currentCourse } = useAcademic();

  if (!activeSolution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B1528] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Verified Solution
            </span>
            <div>
              <h3 className="text-base font-bold text-slate-100">
                {activeSolution.courseCode} — {activeSolution.year} Question {activeSolution.questionNumber}
              </h3>
              <p className="text-xs text-slate-400">
                Marking Scheme Allocation: {activeSolution.marks} Marks
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveSolution(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Question Box */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
              <span className="uppercase tracking-wider">Exam Question Statement</span>
              <span className="text-blue-600 font-bold">{activeSolution.marks} MARKS</span>
            </div>
            <p className="text-sm font-medium text-slate-800 leading-relaxed">
              {activeSolution.questionText}
            </p>
          </div>

          {/* Solution Summary */}
          {activeSolution.solutionText && (
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Executive Solution Summary</span>
              </div>
              <p className="text-sm text-emerald-950 font-medium">
                {activeSolution.solutionText}
              </p>
            </div>
          )}

          {/* Detailed Step-by-Step Breakdown */}
          {activeSolution.solutionSteps && activeSolution.solutionSteps.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Step-by-Step Marking Scheme Breakdown</span>
              </h4>

              <div className="space-y-2.5">
                {activeSolution.solutionSteps.map((step: string, index: number) => (
                  <div
                    key={index}
                    className="p-3.5 bg-white border border-slate-200 rounded-lg hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-mono">
                        {step}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tutors Exam Advice */}
          <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
            <span className="font-bold">Harcourt Tutor Note:</span> Always sketch vector diagrams with a clear scale (e.g. 1 cm = 0.5 m/s). In KNUST examinations, marks are specifically allotted for directional sense indicators and scale labels.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Prepared by Harcourt Senior Engineering Faculty
          </span>
          <button
            onClick={() => setActiveSolution(null)}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close Solution
          </button>
        </div>
      </div>
    </div>
  );
};
