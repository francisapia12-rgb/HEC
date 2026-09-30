import React, { useState } from 'react';
import { X, Download, Bookmark, ZoomIn, ZoomOut, FileText, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAcademic } from '../../context/AcademicContext';

export const DocumentViewerModal: React.FC = () => {
  const { activeDocument, setActiveDocument, currentCourse, toggleSaveMaterial, getCourseProgress } = useAcademic();
  const [zoomLevel, setZoomLevel] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!activeDocument || !currentCourse) return null;

  const progress = getCourseProgress(currentCourse.id);
  const isSaved = progress?.savedMaterialIds.includes(activeDocument.id);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  const handleToggleSave = () => {
    toggleSaveMaterial(currentCourse.id, activeDocument.id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-4xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Document Header Bar */}
        <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-3 truncate">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
              {activeDocument.fileFormat} · {activeDocument.fileSize}
            </span>
            <div className="truncate">
              <h3 className="text-sm sm:text-base font-semibold truncate text-slate-100">
                {activeDocument.title}
              </h3>
              <p className="text-[11px] text-slate-400">
                {currentCourse.code} · Author: {activeDocument.author} · Uploaded: {activeDocument.uploadDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleSave}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                isSaved
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                  : 'border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
              title={isSaved ? 'Saved in My Dashboard' : 'Bookmark to Dashboard'}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </>
              )}
            </button>
            <button
              onClick={() => setActiveDocument(null)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Viewer Toolbar */}
        <div className="px-5 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="p-1 rounded hover:bg-slate-200 disabled:opacity-40 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span>Page {currentPage} of 14</span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(14, p + 1))}
              disabled={currentPage >= 14}
              className="p-1 rounded hover:bg-slate-200 disabled:opacity-40 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((z) => Math.max(75, z - 15))}
              className="p-1 rounded hover:bg-slate-200 cursor-pointer"
              title="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="font-mono text-slate-700">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(150, z + 15))}
              className="p-1 rounded hover:bg-slate-200 cursor-pointer"
              title="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Document Preview Canvas */}
        <div className="flex-1 bg-slate-200/70 p-6 overflow-y-auto flex justify-center">
          <div
            className="w-full max-w-2xl bg-white shadow-xl rounded-lg border border-slate-300 p-8 sm:p-12 transition-all space-y-6 text-slate-800"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          >
            {/* Header of document page */}
            <div className="border-b border-slate-300 pb-4 flex justify-between items-start text-xs text-slate-500">
              <div>
                <p className="font-bold text-slate-900 tracking-wide">
                  KWAME NKRUMAH UNIVERSITY OF SCIENCE AND TECHNOLOGY
                </p>
                <p className="font-medium text-slate-700">COLLEGE OF ENGINEERING · DEPT OF MECHANICAL ENGINEERING</p>
              </div>
              <span className="font-mono font-bold text-slate-600">PAGE {currentPage}</span>
            </div>

            <div className="text-center pt-2 pb-4">
              <h1 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight">
                {currentCourse.code} — {currentCourse.name}
              </h1>
              <p className="text-sm font-semibold text-blue-700 mt-1">{activeDocument.title}</p>
            </div>

            {/* Document Content Simulation based on topic */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
              <h2 className="text-base font-bold font-sans text-slate-900 border-b pb-1">
                Section {currentPage}.0: Mathematical Formulation & Kinematic Loop Closure
              </h2>
              <p>
                Consider a planar four-bar mechanism consisting of links 1, 2, 3, and 4 connected at revolute joints A, B, C, and D. Let link 1 be the fixed frame and link 2 represent the driving crank with constant angular velocity $\omega_2$.
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg font-mono text-xs text-slate-900 space-y-1.5 my-3">
                <p className="font-bold text-blue-800">// Vector Loop Closure Equation:</p>
                <p className="tracking-wide">r₂ · e^(iθ₂) + r₃ · e^(iθ₃) - r₄ · e^(iθ₄) - r₁ = 0</p>
                <p className="text-slate-500">// Resolving along Real and Imaginary orthogonal axes:</p>
                <p>r₂ cos(θ₂) + r₃ cos(θ₃) - r₄ cos(θ₄) - r₁ = 0</p>
                <p>r₂ sin(θ₂) + r₃ sin(θ₃) - r₄ sin(θ₄) = 0</p>
              </div>

              <p>
                Differentiating with respect to time yields the velocity matrix equation. The angular velocity of the follower link 4 and coupler link 3 are extracted via Cramer’s rule or Freudenstein displacement equations.
              </p>

              <div className="p-3 bg-blue-50/60 border-l-4 border-blue-600 rounded text-xs text-blue-900">
                <span className="font-bold font-sans">Lecturer's Exam Guidance:</span> In the upcoming examination, candidates must explicitly state the sign conventions used for Coriolis acceleration components (2 · ω × v_rel) when evaluating slider-crank inversions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
