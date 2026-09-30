import React from 'react';
import { ChevronRight, ArrowLeft, BookOpen, Video, Users, FileCheck } from 'lucide-react';
import { useAcademic } from '../../context/AcademicContext';
import { Breadcrumbs } from '../Breadcrumbs';

export const CollegeView: React.FC = () => {
  const {
    currentCollege,
    colleges,
    programmes,
    navigateToCollege,
    navigateToProgramme,
    navigateToHome,
  } = useAcademic();

  const collegeProgrammes = programmes.filter(
    (p) => p.collegeId === currentCollege?.id
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs collegeName={currentCollege?.name} />
        </div>
      </div>

      {/* College Banner (Hero matching screenshot step 2) */}
      <div className="relative bg-[#0B1528] text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <img
            src={currentCollege?.image}
            alt={currentCollege?.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/90 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <span>KNUST Faculty</span>
            <span>·</span>
            <span>Academic Division</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {currentCollege?.name}
          </h1>

          <p className="max-w-2xl text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {currentCollege?.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            {colleges.map((c) => (
              <button
                key={c.id}
                onClick={() => navigateToCollege(c.id)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  c.id === currentCollege?.id
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300'
                }`}
              >
                {c.name.replace('College of ', '')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Programmes List (Matching screenshot step 2) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Programmes in {currentCollege?.name.replace('College of ', '')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Select your specific degree programme to view levels and semester courses
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-400">
            {collegeProgrammes.length} Programmes Available
          </span>
        </div>

        <div className="space-y-3">
          {collegeProgrammes.map((prog) => (
            <button
              key={prog.id}
              onClick={() => navigateToProgramme(prog.collegeId, prog.id)}
              className="w-full text-left p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                      {prog.degreeType}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-400">4-Year Curriculum</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                    {prog.name}
                  </h3>
                  
                  {/* Unboxed Metadata list from brief */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 flex-wrap">
                    <span>Notes</span>
                    <span className="text-slate-300">·</span>
                    <span>Videos</span>
                    <span className="text-slate-300">·</span>
                    <span>Tutors</span>
                    <span className="text-slate-300">·</span>
                    <span>Past Questions</span>
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-full text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4">
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};
