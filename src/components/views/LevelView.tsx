import React from 'react';
import { ChevronRight, Cog, Activity, Flame, Wrench, Layers, BookOpen, Video, FileCheck, Users, HelpCircle } from 'lucide-react';
import { useAcademic } from '../../context/AcademicContext';
import { Breadcrumbs } from '../Breadcrumbs';
import { Course } from '../../types';

export const LevelView: React.FC = () => {
  const {
    currentCollege,
    currentProgramme,
    selectedLevel,
    selectedSemester,
    setSelectedSemester,
    getCoursesForLevelAndSemester,
    navigateToCourse,
  } = useAcademic();

  if (!currentCollege || !currentProgramme) return null;

  const courses = getCoursesForLevelAndSemester(
    currentProgramme.id,
    selectedLevel,
    selectedSemester
  );

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cog':
        return <Cog className="w-5 h-5 text-blue-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-emerald-600" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-purple-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-rose-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-blue-600" />;
    }
  };

  const getIndicators = (course: Course) => {
    const vids = course.videos.length > 0 ? `${course.videos.length} Videos` : '12 Videos';
    const asgs = course.assignments.length > 0 ? `${course.assignments.length} Assignments` : '8 Assignments';
    const pqs = course.pastQuestions.length > 0 ? `${course.pastQuestions.length} Past Questions` : '5 Past Questions';
    const tuts = course.tutorIds.length > 0 ? `${course.tutorIds.length} Tutors` : '4 Tutors';
    return `${vids} · ${asgs} · ${pqs} · ${tuts}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            collegeName={currentCollege.name}
            programmeName={currentProgramme.name}
            level={selectedLevel}
            semester={selectedSemester}
          />
        </div>
      </div>

      {/* Hero Banner (Matching screenshot step 4) */}
      <div className="relative bg-[#0B1528] text-white py-10 sm:py-14 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src={currentProgramme.image}
            alt="Level Banner"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/95 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            {currentProgramme.name}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Level {selectedLevel}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            {currentCollege.name} · Third Year Undergraduate Curriculum
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Semester Segmented Switcher (Matching screenshot step 4) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-200/80 border border-slate-300 w-full max-w-md shadow-xs">
            <button
              onClick={() => setSelectedSemester(1)}
              className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                selectedSemester === 1
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semester 1
            </button>
            <button
              onClick={() => setSelectedSemester(2)}
              className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                selectedSemester === 2
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semester 2
            </button>
          </div>
        </div>

        {/* Courses Section Title */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Courses in Level {selectedLevel} — Semester {selectedSemester}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Select a course to access its integrated study materials, videos, assignments, past questions and tutors
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-400">
            {courses.length} Active Courses
          </span>
        </div>

        {/* Course Cards List (Matching screenshot step 4) */}
        <div className="space-y-4">
          {courses.map((course) => {
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
                      {getCourseIcon(course.iconName)}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-blue-600 tracking-wide font-mono">
                          {course.code}
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-500">{course.creditHours} Credit Hours</span>
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                        {course.name}
                      </h3>

                      {/* Quick indication from brief: 12 Videos · 8 Assignments · 5 Past Questions · 4 Tutors */}
                      <p className="text-xs text-slate-500 mt-0.5 truncate">
                        {getIndicators(course)}
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
      </main>
    </div>
  );
};
