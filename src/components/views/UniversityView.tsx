import React, { useState } from 'react';
import {
  GraduationCap,
  Layers,
  BookOpen,
  Video,
  Users,
  FileCheck,
  ChevronRight,
  Search,
  Building2,
  MapPin,
  Award,
  ArrowRight,
  Cpu,
  FlaskConical,
  TrendingUp,
  HeartPulse,
  Palette,
  ExternalLink,
} from 'lucide-react';
import { useAcademic } from '../../context/AcademicContext';
import { Breadcrumbs } from '../Breadcrumbs';
import { CourseTab } from '../../context/AcademicContext';

export const UniversityView: React.FC = () => {
  const {
    currentUniversity,
    colleges,
    programmes,
    courses,
    tutors,
    navigateToCollege,
    navigateToProgramme,
    navigateToCourse,
    navigateToTutors,
    setIsSearchOpen,
    setSearchQuery,
  } = useAcademic();

  const [filterCollege, setFilterCollege] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState('');

  const universityColleges = colleges.filter(
    (c) => c.universityId === currentUniversity.id || c.universityId === 'knust'
  );

  const filteredColleges = universityColleges.filter((c) => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.highlightDepartments.some((d) => d.toLowerCase().includes(q))
    );
  });

  const getCollegeIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6 text-emerald-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-indigo-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-rose-600" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-amber-600" />;
      default:
        return <BookOpen className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs universityName={currentUniversity.name} />
        </div>
      </div>

      {/* University Banner */}
      <div className="relative bg-[#0B1528] text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/src/assets/images/college_engineering_banner_1790747200775.jpg"
            alt="University Campus"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/95 to-[#0B1528]/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Premier University Institution
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              {currentUniversity.location}
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {currentUniversity.name}
            </h1>
            <p className="text-sm sm:text-base text-blue-300 font-medium">
              Also known as Kwame Nkruma University of Science and Technology ({currentUniversity.shortName})
            </p>
          </div>

          <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Harcourt Educational Consult organizes all academic materials, lecture notes, video tutorials, 
            assignments, past examination papers with worked solutions, and verified tutors strictly around 
            the KNUST academic hierarchy: University → College → Programme → Level → Semester → Course.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span className="font-bold text-white">{universityColleges.length} Colleges</span>
            </div>
            <span className="text-slate-600">·</span>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white">{programmes.length}+ Degree Programmes</span>
            </div>
            <span className="text-slate-600">·</span>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white">{courses.length}+ Integrated Courses</span>
            </div>
            <span className="text-slate-600">·</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="font-bold text-white">{tutors.length}+ Verified Tutors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body: Colleges List */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        {/* Step 2 Heading from user specification */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Academic Structure
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Colleges & Faculties at KNUST
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Select your college to access degree programmes, level curriculums, and course resources.
              </p>
            </div>

            {/* Quick College Search */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Filter colleges (e.g. Engineering)..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800"
              />
            </div>
          </div>

          {/* Colleges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredColleges.map((college) => {
              const collegeProgs = programmes.filter((p) => p.collegeId === college.id);

              return (
                <div
                  key={college.id}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col justify-between group"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                        {getCollegeIcon(college.iconName)}
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-mono">
                        {college.programmesCount} Programmes
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {college.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                        {college.description}
                      </p>
                    </div>

                    {/* Departments preview */}
                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Key Departments
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {college.highlightDepartments.map((dept) => (
                          <span
                            key={dept}
                            className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
                          >
                            {dept}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      {collegeProgs.length > 0 ? `${collegeProgs.length} Programmes` : 'Undergraduate & Postgrad'}
                    </span>
                    <button
                      onClick={() => navigateToCollege(college.id)}
                      className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Explore College</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Course Spotlight: ME 351 with all 9 Tabs */}
        <div className="bg-[#0B1528] rounded-3xl p-6 sm:p-8 text-white space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-900/60 px-2.5 py-1 rounded-full mb-2">
                <span>KNUST Featured Course</span>
                <span>·</span>
                <span>College of Engineering</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                ME 351 — Dynamics of Machinery
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                The central unit of the academic platform: study materials, tutorial videos, assignments, past papers, worked solutions, expert tutors, announcements and discussions.
              </p>
            </div>

            <button
              onClick={() => navigateToCourse('course-me351', 'overview')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-2 self-start md:self-auto"
            >
              <span>Open Course Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Direct Tab Jumps for ME 351 */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Direct access to ME 351 course tabs:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {[
                { id: 'overview' as CourseTab, label: 'Overview', icon: BookOpen, count: null },
                { id: 'materials' as CourseTab, label: 'Materials', icon: FileCheck, count: 5 },
                { id: 'videos' as CourseTab, label: 'Videos', icon: Video, count: 12 },
                { id: 'assignments' as CourseTab, label: 'Assignments', icon: FileCheck, count: 8 },
                { id: 'pastQuestions' as CourseTab, label: 'Past Questions', icon: BookOpen, count: 5 },
                { id: 'solutions' as CourseTab, label: 'Solutions', icon: Award, count: 15 },
                { id: 'tutors' as CourseTab, label: 'Tutors', icon: Users, count: 4 },
                { id: 'announcements' as CourseTab, label: 'Announcements', icon: Award, count: 2 },
                { id: 'discussions' as CourseTab, label: 'Discussions', icon: Users, count: 3 },
              ].map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => navigateToCourse('course-me351', tab.id)}
                    className="p-3 rounded-xl bg-slate-900/80 hover:bg-blue-600/30 border border-slate-700/80 hover:border-blue-500/50 text-left transition-all cursor-pointer group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <TabIcon className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                      <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                        {tab.label}
                      </span>
                    </div>
                    {tab.count !== null && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-blue-300 font-mono">
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Global Search Promotion */}
        <div className="p-6 sm:p-8 bg-blue-50 rounded-2xl border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Looking for a specific KNUST course, past question, or tutor?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Use our hierarchical search to instantly find any course material or video across KNUST.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchQuery('Kwame Nkruma University of Science and Technology');
              setIsSearchOpen(true);
            }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shrink-0 flex items-center gap-2 shadow-xs"
          >
            <Search className="w-4 h-4" />
            <span>Search KNUST Database</span>
          </button>
        </div>
      </main>
    </div>
  );
};
