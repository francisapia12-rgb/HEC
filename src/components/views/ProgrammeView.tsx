import React, { useState } from 'react';
import { ChevronRight, Layers, Award, CheckCircle2, BookOpen, GraduationCap, Briefcase } from 'lucide-react';
import { useAcademic } from '../../context/AcademicContext';
import { Breadcrumbs } from '../Breadcrumbs';

export const ProgrammeView: React.FC = () => {
  const {
    currentCollege,
    currentProgramme,
    courses,
    navigateToLevel,
    navigateToCourse,
  } = useAcademic();

  const [activeTab, setActiveTab] = useState<'levels' | 'courses' | 'overview' | 'about'>('levels');

  if (!currentProgramme || !currentCollege) return null;

  const programmeCourses = courses.filter((c) => c.programmeId === currentProgramme.id);

  const getCourseCountForLevel = (lvl: number) => {
    return programmeCourses.filter((c) => c.level === lvl).length;
  };

  const levelIcons = [
    { level: 100, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { level: 200, color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { level: 300, color: 'text-rose-600 bg-rose-50 border-rose-200' },
    { level: 400, color: 'text-purple-600 bg-purple-50 border-purple-200' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            collegeName={currentCollege.name}
            programmeName={currentProgramme.name}
          />
        </div>
      </div>

      {/* Programme Banner (Matching screenshot step 3) */}
      <div className="relative bg-[#0B1528] text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src={currentProgramme.image}
            alt={currentProgramme.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/95 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <span>{currentCollege.name}</span>
            <span>·</span>
            <span>Undergraduate Programme</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {currentProgramme.name}
          </h1>

          <p className="max-w-2xl text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {currentProgramme.description}
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
            <span>Duration: 4 Academic Years</span>
            <span>·</span>
            <span>Accredited: GhIE / Washington Accord</span>
          </div>
        </div>
      </div>

      {/* Segmented Navigation Bar (Overview | Courses | Levels | About the Programme) */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-8 overflow-x-auto no-scrollbar">
          {[
            { id: 'levels', label: 'Levels' },
            { id: 'courses', label: 'Courses' },
            { id: 'overview', label: 'Overview' },
            { id: 'about', label: 'About the Programme' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3.5 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              {tab.label}
              {tab.id === 'courses' && (
                <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-mono font-bold">
                  {programmeCourses.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {activeTab === 'levels' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Select your level</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Choose your academic year to view Semester 1 & Semester 2 courses and study packages
              </p>
            </div>

            <div className="space-y-3.5">
              {currentProgramme.levels.map((lvl) => {
                const iconStyle = levelIcons.find((i) => i.level === lvl) || levelIcons[0];
                const count = getCourseCountForLevel(lvl);

                return (
                  <button
                    key={lvl}
                    onClick={() =>
                      navigateToLevel(currentCollege.id, currentProgramme.id, lvl, 1)
                    }
                    className="w-full text-left p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                      <div className={`p-4 rounded-xl border ${iconStyle.color} shrink-0`}>
                        <Layers className="w-6 h-6" />
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          Level {lvl}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                          Semester 1 & 2
                        </p>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                          <span>{count > 0 ? `${count} Active Courses` : 'Core & Elective Modules'}</span>
                          <span>·</span>
                          <span>Lecture Notes, Videos, Past Questions & Tutors</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 rounded-full text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Courses in {currentProgramme.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                All 4 academic levels with integrated materials, tutorial videos, assignments, past papers and tutors
              </p>
            </div>

            <div className="space-y-4">
              {programmeCourses.map((course) => {
                const courseTabs = [
                  { id: 'overview' as const, label: 'Overview' },
                  { id: 'materials' as const, label: 'Materials', count: course.materials.length },
                  { id: 'videos' as const, label: 'Videos', count: course.videos.length },
                  { id: 'assignments' as const, label: 'Assignments', count: course.assignments.length },
                  { id: 'pastQuestions' as const, label: 'Past Questions', count: course.pastQuestions.length },
                  { id: 'solutions' as const, label: 'Solutions', count: course.pastQuestions.reduce((acc, pq) => acc + pq.questions.length, 0) },
                  { id: 'tutors' as const, label: 'Tutors', count: course.tutorIds.length },
                  { id: 'announcements' as const, label: 'Announcements', count: course.announcements.length },
                  { id: 'discussions' as const, label: 'Discussions', count: course.discussions.length },
                ];

                return (
                  <div
                    key={course.id}
                    className="w-full text-left rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all overflow-hidden"
                  >
                    <div
                      onClick={() => navigateToCourse(course.id, 'overview')}
                      className="p-5 sm:p-6 flex items-center justify-between group cursor-pointer border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                    >
                      <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                          <BookOpen className="w-5 h-5 text-blue-600" />
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-extrabold text-blue-600 tracking-wide font-mono">
                              {course.code}
                            </span>
                            <span className="text-slate-300">·</span>
                            <span className="text-xs text-slate-500">
                              Level {course.level} · Semester {course.semester} · {course.creditHours} Credits
                            </span>
                          </div>
                          
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                            {course.name}
                          </h3>

                          <p className="text-xs text-slate-500 mt-0.5 truncate">
                            {course.videos.length} Videos · {course.assignments.length} Assignments · {course.pastQuestions.length} Past Questions · {course.tutorIds.length} Tutors
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="hidden sm:inline text-xs font-semibold text-blue-600">Open Course Hub</span>
                        <div className="p-2 rounded-full text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0">
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Direct Course Tabs Strip */}
                    <div className="px-5 py-3 bg-slate-50/90 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1">
                        Tabs:
                      </span>
                      {courseTabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => navigateToCourse(course.id, tab.id)}
                          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white hover:bg-blue-600 hover:text-white border border-slate-200 text-slate-700 transition-all shrink-0 cursor-pointer flex items-center gap-1 shadow-2xs"
                        >
                          <span>{tab.label}</span>
                          {typeof tab.count === 'number' && (
                            <span className="text-[10px] opacity-70 font-mono">({tab.count})</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'overview' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Programme Overview</h3>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                {currentProgramme.overviewText}
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span>Key Graduate Career Pathways</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {currentProgramme.careerProspects.map((career, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide">Professional Accreditation</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{currentProgramme.accreditation}</p>
              </div>
              <button
                onClick={() => setActiveTab('levels')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-500 transition-colors cursor-pointer"
              >
                Go to Levels
              </button>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
            <h3 className="text-lg font-bold text-slate-900">About {currentProgramme.name}</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Harcourt Educational Consult partners with leading engineering academics and teaching assistants at KNUST to curate end-to-end learning packages. Every semester course is mapped to verified departmental syllabi, including end-of-semester exam papers dating from 2022 to 2025 with step-by-step marking rubrics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                <GraduationCap className="w-6 h-6 text-blue-600 mb-2" />
                <h4 className="text-sm font-bold text-blue-900">Full 4-Year Hierarchy</h4>
                <p className="text-xs text-blue-700 mt-1">
                  Structured chronologically from Level 100 basics to Level 400 Capstone projects.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <BookOpen className="w-6 h-6 text-emerald-600 mb-2" />
                <h4 className="text-sm font-bold text-emerald-900">Course-Specific Materials</h4>
                <p className="text-xs text-emerald-700 mt-1">
                  Directly attached lecture slides, formula sheets, tutorial sheets, and lab manuals.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                <Award className="w-6 h-6 text-purple-600 mb-2" />
                <h4 className="text-sm font-bold text-purple-900">Worked Solutions</h4>
                <p className="text-xs text-purple-700 mt-1">
                  Authentic Ghanaian university exam problems solved by top first-class graduates.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
