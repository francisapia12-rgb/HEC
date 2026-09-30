import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  Video,
  Users,
  FileCheck,
  ChevronRight,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Cpu,
  FlaskConical,
  TrendingUp,
  HeartPulse,
  Palette,
  Layers,
  Star,
  CheckCircle2,
} from 'lucide-react';
import { useAcademic } from '../../context/AcademicContext';
import { IMAGES } from '../../data/mockData';

export const HomeView: React.FC = () => {
  const {
    currentUniversity,
    colleges,
    programmes,
    courses,
    tutors,
    navigateToUniversity,
    navigateToColleges,
    navigateToCollege,
    navigateToProgramme,
    navigateToCourses,
    navigateToCourse,
    navigateToTutors,
    navigateToDashboard,
    setIsSearchOpen,
    setSearchQuery,
    searchAcademic,
  } = useAcademic();

  const [heroSearchInput, setHeroSearchInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const heroResults = heroSearchInput.trim() ? searchAcademic(heroSearchInput).slice(0, 5) : [];

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearchInput.trim()) {
      setSearchQuery(heroSearchInput.trim());
      setIsSearchOpen(true);
    } else {
      setSearchQuery('Kwame Nkruma University of Science and Technology');
      setIsSearchOpen(true);
    }
  };

  const getCollegeIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5 text-emerald-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-indigo-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-amber-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-blue-600" />;
    }
  };

  const popularCourse = courses.find((c) => c.code === 'ME 351') || courses[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0A1120] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle background glow & engineering mesh texture */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src={IMAGES.heroBanner}
            alt="Harcourt Consult Hero Backdrop"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1120]/80 via-[#0A1120]/95 to-[#0A1120] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Academic Architecture for Ghanaian & African Universities</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Your Partner in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Academic Success
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Access course materials, tutorial videos, expert tutors, assignments,
            past questions and solutions — all organized strictly around your university programme.
          </p>

          {/* Active University Badge with Click Action */}
          <button
            onClick={() => navigateToUniversity('knust')}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-blue-500/40 text-xs text-slate-300 shadow-sm transition-all cursor-pointer group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-400">Current University:</span>
            <span className="font-bold text-white group-hover:text-blue-300 transition-colors">
              Kwame Nkrumah University of Science and Technology (KNUST)
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Search Bar Input with Live Dropdown */}
          <div className="relative max-w-2xl mx-auto">
            <form
              onSubmit={handleHeroSearch}
              className="flex items-center bg-white rounded-xl shadow-xl overflow-hidden p-1.5 border border-slate-200"
            >
              <div className="pl-3.5 pr-2 text-slate-400">
                <Search className="w-5 h-5 text-blue-600" />
              </div>
              <input
                type="text"
                value={heroSearchInput}
                onChange={(e) => {
                  setHeroSearchInput(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                placeholder="Search Kwame Nkruma University (KNUST), programme, course, videos, past questions..."
                className="w-full py-2.5 px-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent font-medium"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                <span>Search</span>
              </button>
            </form>

            {/* Instant Search Suggestions Dropdown */}
            {showDropdown && heroSearchInput.trim().length > 0 && heroResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 text-left animate-in fade-in">
                <div className="p-2 border-b border-slate-100 flex items-center justify-between text-xs text-slate-400 px-3">
                  <span className="font-semibold uppercase text-[10px] tracking-wider text-slate-500">Matching University & Course Resources</span>
                  <button
                    onClick={() => setShowDropdown(false)}
                    className="hover:text-slate-700 cursor-pointer text-xs"
                  >
                    Close
                  </button>
                </div>
                <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                  {heroResults.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setShowDropdown(false);
                        if (item.type === 'university') {
                          navigateToUniversity(item.universityId || 'knust');
                        } else if (item.type === 'college' && item.collegeId) {
                          navigateToCollege(item.collegeId);
                        } else if (item.type === 'programme' && item.collegeId && item.programmeId) {
                          navigateToProgramme(item.collegeId, item.programmeId);
                        } else if (item.courseId) {
                          navigateToCourse(item.courseId, item.actionTab || 'overview');
                        } else if (item.tutorId) {
                          navigateToTutors();
                        }
                      }}
                      className="w-full text-left p-3 hover:bg-blue-50/60 transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <div className="min-w-0 pr-3">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-blue-100 text-blue-700">
                            {item.type}
                          </span>
                          <span className="text-slate-300">·</span>
                          <span className="text-[11px] text-slate-400 truncate">
                            {item.hierarchyPath}
                          </span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate mt-0.5">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-500 truncate">
                          {item.subtitle}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick search shortcuts */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="text-slate-500">Try searching:</span>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('Kwame Nkrumah University of Science and Technology');
                setIsSearchOpen(true);
              }}
              className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-blue-600 hover:text-white text-slate-300 transition-colors cursor-pointer"
            >
              Kwame Nkruma University of Science and Technology
            </button>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('College of Engineering');
                setIsSearchOpen(true);
              }}
              className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-blue-600 hover:text-white text-slate-300 transition-colors cursor-pointer"
            >
              College of Engineering
            </button>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('ME 351');
                setIsSearchOpen(true);
              }}
              className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-blue-600 hover:text-white text-slate-300 transition-colors cursor-pointer"
            >
              ME 351
            </button>
          </div>

          {/* 4 Feature Quick Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 w-fit mb-2">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-white">Course Materials</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Notes, outlines & textbooks</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit mb-2">
                <Video className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-white">Tutorial Videos</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Topic-by-topic breakdowns</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 w-fit mb-2">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-white">Expert Tutors</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Course-specific mentors</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 w-fit mb-2">
                <FileCheck className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-white">Past Questions</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">With step-by-step solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BROWSE BY COLLEGE */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Browse by College</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Select your academic faculty to discover programmes and courses
            </p>
          </div>
          <button
            onClick={() => navigateToCollege('engineering')}
            className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
          >
            <span>View all</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {colleges.map((college) => (
            <button
              key={college.id}
              onClick={() => navigateToCollege(college.id)}
              className="text-left p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between h-40 cursor-pointer"
            >
              <div className="p-2.5 rounded-lg bg-slate-100 group-hover:bg-blue-50 transition-colors w-fit">
                {getCollegeIcon(college.iconName)}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {college.name.replace('College of ', '')}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                  {college.highlightDepartments.slice(0, 3).join(', ')}...
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. FEATURED HIERARCHY SPOTLIGHT: KNUST -> COLLEGE OF ENGINEERING */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Hierarchical Academic Pathway
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Engineering Programmes & Level Breakdown
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Every resource belongs to a specific course inside its programme level
              </p>
            </div>
            <button
              onClick={() => navigateToCollege('engineering')}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>Explore College of Engineering</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programmes.slice(0, 3).map((prog) => (
              <div
                key={prog.id}
                onClick={() => navigateToProgramme(prog.collegeId, prog.id)}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-md transition-all cursor-pointer flex flex-col group"
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-bold text-white bg-blue-600/80 backdrop-blur-xs px-2.5 py-0.5 rounded">
                      {prog.degreeType} · 4 Years
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {prog.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-medium text-slate-600">
                    <span className="text-slate-400">Levels 100 to 400</span>
                    <span className="text-blue-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      View Courses <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POPULAR STAR COURSE: ME 351 DYNAMICS OF MACHINERY */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#0B1528] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden md:block">
            <img
              src={IMAGES.courseDynamics}
              alt="Dynamics Machinery"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full border border-blue-800">
              <span>Featured Core Course</span>
              <span>·</span>
              <span>Level 300 · Semester 1</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              ME 351 — Dynamics of Machinery
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Study materials, tutorial videos, assignments, past questions, verified worked solutions and expert tutors — all in one place.
            </p>

            {/* Quick Metrics Bar from brief */}
            <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-300 pt-1">
              <span className="flex items-center gap-1.5">
                <Video className="w-4 h-4 text-red-400" />
                12 Tutorial Videos
              </span>
              <span className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                8 Assignments
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-400" />
                5 Past Papers & Solutions
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-purple-400" />
                4 Expert Tutors
              </span>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateToCourse(popularCourse.id, 'overview')}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Start Learning ME 351
              </button>
              <button
                onClick={() => navigateToCourse(popularCourse.id, 'materials')}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
              >
                Browse Materials
              </button>
            </div>

            {/* Direct Tab Jumps for ME 351 */}
            <div className="pt-3 border-t border-slate-800/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Direct Course Tab Access:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'overview' as const, label: 'Overview' },
                  { id: 'materials' as const, label: 'Materials', count: 5 },
                  { id: 'videos' as const, label: 'Videos', count: 12 },
                  { id: 'assignments' as const, label: 'Assignments', count: 8 },
                  { id: 'pastQuestions' as const, label: 'Past Questions', count: 5 },
                  { id: 'solutions' as const, label: 'Solutions', count: 15 },
                  { id: 'tutors' as const, label: 'Tutors', count: 4 },
                  { id: 'announcements' as const, label: 'Announcements', count: 2 },
                  { id: 'discussions' as const, label: 'Discussions', count: 3 },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => navigateToCourse(popularCourse.id, t.id)}
                    className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-900/90 hover:bg-blue-600 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>{t.label}</span>
                    {t.count && (
                      <span className="text-[10px] text-blue-300 font-mono">({t.count})</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POPULAR COURSE-SPECIFIC TUTORS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Expert Engineering Tutors</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Verified Ghanaian university scholars and first-class engineering graduates
            </p>
          </div>
          <button
            onClick={navigateToTutors}
            className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
          >
            <span>View all tutors</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="flex items-start gap-3">
                <img
                  src={tutor.avatar}
                  alt={tutor.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{tutor.name}</h4>
                  <p className="text-xs text-slate-500">{tutor.title}</p>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold mt-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{tutor.rating}</span>
                    <span className="text-slate-400 font-normal">({tutor.reviewsCount})</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {tutor.bio}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Rate</span>
                  <span className="text-xs font-bold text-blue-600">GHS {tutor.hourlyRateGHS} / hr</span>
                </div>
                <button
                  onClick={() => navigateToCourse('course-me351', 'tutors')}
                  className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION & FOOTER BANNER */}
      <footer className="mt-auto bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-base font-bold text-white">Harcourt Educational Consult</span>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              Connecting university students with structured course resources, tutorial series, past exams with worked solutions, and expert mentors.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <button onClick={navigateToDashboard} className="hover:text-white transition-colors cursor-pointer">
              Student Dashboard
            </button>
            <button onClick={() => navigateToCollege('engineering')} className="hover:text-white transition-colors cursor-pointer">
              Colleges
            </button>
            <button onClick={navigateToTutors} className="hover:text-white transition-colors cursor-pointer">
              Tutors
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-800 text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2026 Harcourt Educational Consult. Built strictly around hierarchical university course architecture.</p>
          <p>KNUST · University of Ghana · UCC</p>
        </div>
      </footer>
    </div>
  );
};
