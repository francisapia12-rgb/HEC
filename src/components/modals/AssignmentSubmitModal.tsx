import React, { useState } from 'react';
import { X, UploadCloud, FileText, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { useAcademic } from '../../context/AcademicContext';

export const AssignmentSubmitModal: React.FC = () => {
  const { submittingAssignment, setSubmittingAssignment, currentCourse, submitAssignmentWork } = useAcademic();
  const [fileName, setFileName] = useState<string>('ME351_Assignment1_4288122.pdf');
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!submittingAssignment || !currentCourse) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      submitAssignmentWork(currentCourse.id, submittingAssignment.id, fileName);
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setSubmittingAssignment(null);
      }, 1800);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B1528] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
              {currentCourse.code}
            </span>
            <h3 className="text-base font-bold text-slate-100">Submit Assignment</h3>
          </div>
          <button
            onClick={() => setSubmittingAssignment(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {isSuccess ? (
            <div className="py-10 text-center space-y-2">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Assignment Submitted!</h4>
              <p className="text-xs text-slate-500">
                Your file <span className="font-semibold text-slate-800">{fileName}</span> has been uploaded. Lecturer and TAs notified.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <h4 className="text-xs font-bold text-slate-800">{submittingAssignment.title}</h4>
                <div className="flex items-center gap-3 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-amber-700 font-medium">
                    <Clock className="w-3 h-3" /> Due: {submittingAssignment.dueDate}
                  </span>
                  <span>·</span>
                  <span>{submittingAssignment.points} Total Points</span>
                </div>
              </div>

              {/* Upload Drop Area */}
              <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-6 text-center bg-slate-50/50 hover:bg-blue-50/20 transition-all cursor-pointer">
                <UploadCloud className="w-10 h-10 text-blue-500 mx-auto mb-2" />
                <p className="text-xs font-semibold text-slate-700">
                  Click or drag files here to upload
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Supported: PDF, ZIP, CAD (Max size 25MB)
                </p>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-xs">
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  <span>{fileName}</span>
                </div>
              </div>

              {/* Note / Comments */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Submission Notes for Teaching Assistant (Optional)
                </label>
                <textarea
                  rows={2}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="e.g. Velocity polygon attached on Page 2 using 1cm:0.5m/s scale..."
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Notice */}
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-[11px] text-blue-800">
                <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  Please ensure your Student Index Number is clearly written on the title page before submitting.
                </span>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSubmittingAssignment(null)}
                  className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                >
                  {isSubmitting ? 'Submitting...' : 'Confirm & Submit'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
