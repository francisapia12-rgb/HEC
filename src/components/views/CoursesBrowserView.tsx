import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Video,
  FileCheck,
  Users,
  Bell,
  MessageSquare,
  Award,
  FileText,
  HelpCircle,
  Search,
  Filter,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Download,
  Eye,
  Calendar,
  Clock,
  ThumbsUp,
  ExternalLink,
  ShieldCheck,
  GraduationCap,
  Layers,
  Star,
} from 'lucide-react';
import { useAcademic, CourseTab } from '../../context/AcademicContext';
import { Breadcrumbs } from '../Breadcrumbs';
import { Course, CourseMaterial, TutorialVideo, Assignment, PastQuestion, Tutor, CourseAnnouncement, CourseDiscussion } from '../../types';

export type MainCoursesTab =
  | 'courses'
  | 'materials'
  | 'videos'
  | 'assignments'
  | 'pastQuestions'
  | 'solutions'
  | 'tutors'
  | 'announcements'
  | 'discussions';

export const CoursesBrowserView: React.FC = () => {
  const {
    currentUniversity,
    courses,
    colleges,
    programmes,
    tutors,
    navigateToCourse,
    setActiveVideo,
    setActiveDocument,
    setActiveSolution,
    setBookingTutor,
    setSubmittingAssignment,
    upvoteDiscussion,
  } = useAcademic();

  const [activeMainTab, setActiveMainTab] = useState<MainCoursesTab>('courses');
  const [selectedCollegeFilter, setSelectedCollegeFilter] = useState<string>('all');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<string>('all');
  const [selectedSemesterFilter, setSelectedSemesterFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Aggregated data across all courses
  const allMaterials = useMemo(() => {
    return courses.flatMap((course) =>
      course.materials.map((mat) => ({
        ...mat,
        courseCode: course.code,
        courseName: course.name,
        courseId: course.id,
        level: course.level,
        semester: course.semester,
        collegeId: course.collegeId,
      }))
    );
  }, [courses]);

  const allVideos = useMemo(() => {
    return courses.flatMap((course) =>
      course.videos.map((vid) => ({
        ...vid,
        courseCode: course.code,
        courseName: course.name,
        courseId: course.id,
        level: course.level,
        semester: course.semester,
        collegeId: course.collegeId,
      }))
    );
  }, [courses]);

  const allAssignments = useMemo(() => {
    return courses.flatMap((course) =>
      course.assignments.map((asg) => ({
        ...asg,
        courseCode: course.code,
        courseName: course.name,
        courseId: course.id,
        level: course.level,
        semester: course.semester,
        collegeId: course.collegeId,
      }))
    );
  }, [courses]);

  const allPastQuestions = useMemo(() => {
    return courses.flatMap((course) =>
      course.pastQuestions.map((pq) => ({
        ...pq,
        courseCode: course.code,
        courseName: course.name,
        courseId: course.id,
        level: course.level,
        semester: course.semester,
        collegeId: course.collegeId,
      }))
    );
  }, [courses]);

  const allSolutions = useMemo(() => {
    return courses.flatMap((course) =>
      course.pastQuestions.flatMap((pq) =>
        pq.questions.map((q) => ({
          ...q,
          year: pq.year,
          semester: pq.semester,
          examType: pq.examType,
          courseCode: course.code,
          courseName: course.name,
          courseId: course.id,
          level: course.level,
          collegeId: course.collegeId,
        }))
      )
    );
  }, [courses]);

  const allAnnouncements = useMemo(() => {
    return courses.flatMap((course) =>
      course.announcements.map((ann) => ({
        ...ann,
        courseCode: course.code,
        courseName: course.name,
        courseId: course.id,
        level: course.level,
        semester: course.semester,
        collegeId: course.collegeId,
      }))
    );
  }, [courses]);

  const allDiscussions = useMemo(() => {
    return courses.flatMap((course) =>
      course.discussions.map((disc) => ({
        ...disc,
        courseCode: course.code,
        courseName: course.name,
        courseId: course.id,
        level: course.level,
        semester: course.semester,
        collegeId: course.collegeId,
      }))
    );
  }, [courses]);

  // Tab configurations with counts
  const mainTabs: { id: MainCoursesTab; label: string; icon: React.FC<{ className?: string }>; count: number }[] = [
    { id: 'courses', label: 'All Courses', icon: BookOpen, count: courses.length },
    { id: 'materials', label: 'Materials', icon: FileText, count: allMaterials.length },
    { id: 'videos', label: 'Videos', icon: Video, count: allVideos.length },
    { id: 'assignments', label: 'Assignments', icon: FileCheck, count: allAssignments.length },
    { id: 'pastQuestions', label: 'Past Questions', icon: HelpCircle, count: allPastQuestions.length },
    { id: 'solutions', label: 'Solutions', icon: Award, count: allSolutions.length },
    { id: 'tutors', label: 'Tutors', icon: Users, count: tutors.length },
    { id: 'announcements', label: 'Announcements', icon: Bell, count: allAnnouncements.length },
    { id: 'discussions', label: 'Discussions', icon: MessageSquare, count: allDiscussions.length },
  ];

  // Common filter helper
  const matchesFilter = (item: { level?: number; semester?: number; collegeId?: string }, textToMatch: string) => {
    if (selectedCollegeFilter !== 'all' && item.collegeId && item.collegeId !== selectedCollegeFilter) {
      return false;
    }
    if (selectedLevelFilter !== 'all' && item.level && item.level.toString() !== selectedLevelFilter) {
      return false;
    }
    if (selectedSemesterFilter !== 'all' && item.semester && item.semester.toString() !== selectedSemesterFilter) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      if (!textToMatch.toLowerCase().includes(q)) {
        return false;
      }
    }
    return true;
  };

  // Filtered views
  const filteredCourses = courses.filter((c) =>
    matchesFilter(c, `${c.code} ${c.name} ${c.description}`)
  );

  const filteredMaterials = allMaterials.filter((m) =>
    matchesFilter(m, `${m.title} ${m.category} ${m.courseCode} ${m.courseName} ${m.author}`)
  );

  const filteredVideos = allVideos.filter((v) =>
    matchesFilter(v, `${v.title} ${v.topic} ${v.courseCode} ${v.courseName} ${v.instructor}`)
  );

  const filteredAssignments = allAssignments.filter((a) =>
    matchesFilter(a, `${a.title} ${a.courseCode} ${a.courseName} ${a.description}`)
  );

  const filteredPastQuestions = allPastQuestions.filter((pq) =>
    matchesFilter(pq, `${pq.title} ${pq.courseCode} ${pq.courseName} ${pq.year}`)
  );

  const filteredSolutions = allSolutions.filter((s) =>
    matchesFilter(s, `${s.questionText} ${s.solutionText || ''} ${s.courseCode} ${s.courseName}`)
  );

  const filteredAnnouncements = allAnnouncements.filter((ann) =>
    matchesFilter(ann, `${ann.title} ${ann.content} ${ann.courseCode} ${ann.author}`)
  );

  const filteredDiscussions = allDiscussions.filter((d) =>
    matchesFilter(d, `${d.title} ${d.content} ${d.courseCode} ${d.author}`)
  );

  const filteredTutors = tutors.filter((t) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        t.name.toLowerCase().includes(q) ||
        t.title.toLowerCase().includes(q) ||
        t.specialization.some((s) => s.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs universityName={currentUniversity.name} customPageName="Courses & Academic Modules" />
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative bg-[#0B1528] text-white py-10 sm:py-14 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
              KNUST Academic Database
            </span>
            <span className="text-xs text-slate-300">
              {currentUniversity.name}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Courses & Academic Learning Hub
          </h1>

          <p className="max-w-3xl text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Access course materials, tutorial video masterclasses, problem set assignments, past examination papers,
            verified step-by-step solutions, verified engineering tutors, notices, and peer discussions.
          </p>

          {/* Quick Filter Bar */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, code, or title..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* College Select */}
            <select
              value={selectedCollegeFilter}
              onChange={(e) => setSelectedCollegeFilter(e.target.value)}
              className="py-2 px-3 text-xs rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="all">All Colleges</option>
              {colleges.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* Level Select */}
            <select
              value={selectedLevelFilter}
              onChange={(e) => setSelectedLevelFilter(e.target.value)}
              className="py-2 px-3 text-xs rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="all">All Academic Levels</option>
              <option value="100">Level 100 (Year 1)</option>
              <option value="200">Level 200 (Year 2)</option>
              <option value="300">Level 300 (Year 3)</option>
              <option value="400">Level 400 (Final Year)</option>
            </select>

            {/* Semester Select */}
            <select
              value={selectedSemesterFilter}
              onChange={(e) => setSelectedSemesterFilter(e.target.value)}
              className="py-2 px-3 text-xs rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="all">Both Semesters</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
            </select>
          </div>
        </div>
      </div>

      {/* Primary 9-Tab Navigation Bar */}
      <div className="bg-white border-b-2 border-slate-200 sticky top-16 z-30 shadow-xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2">
          {mainTabs.map((tab) => {
            const isActive = activeMainTab === tab.id;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveMainTab(tab.id)}
                className={`py-2 px-3 sm:px-3.5 text-xs sm:text-sm font-semibold rounded-xl border whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-xs'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        {/* ================= TAB 1: ALL COURSES ================= */}
        {activeMainTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Showing {filteredCourses.length} Courses
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Click any course card to enter the full course or select a tab to jump directly:
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                KNUST Curriculum
              </span>
            </div>

            <div className="space-y-4">
              {filteredCourses.map((course) => {
                const courseTabs = [
                  { id: 'overview' as const, label: 'Overview', icon: BookOpen },
                  { id: 'materials' as const, label: 'Materials', icon: FileText, count: course.materials.length },
                  { id: 'videos' as const, label: 'Videos', icon: Video, count: course.videos.length },
                  { id: 'assignments' as const, label: 'Assignments', icon: FileCheck, count: course.assignments.length },
                  { id: 'pastQuestions' as const, label: 'Past Questions', icon: HelpCircle, count: course.pastQuestions.length },
                  { id: 'solutions' as const, label: 'Solutions', icon: Award, count: course.pastQuestions.reduce((acc, pq) => acc + pq.questions.length, 0) },
                  { id: 'tutors' as const, label: 'Tutors', icon: Users, count: course.tutorIds.length },
                  { id: 'announcements' as const, label: 'Announcements', icon: Bell, count: course.announcements.length },
                  { id: 'discussions' as const, label: 'Discussions', icon: MessageSquare, count: course.discussions.length },
                ];

                return (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all overflow-hidden"
                  >
                    <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-200">
                          <img
                            src={course.coverImage}
                            alt={course.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                              {course.code}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              Level {course.level} · Semester {course.semester} · {course.creditHours} Credits
                            </span>
                            <span className="text-xs text-slate-400">·</span>
                            <span className="text-xs text-slate-500">{course.lecturerName}</span>
                          </div>

                          <h3
                            onClick={() => navigateToCourse(course.id, 'overview')}
                            className="text-lg sm:text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                          >
                            {course.name}
                          </h3>

                          <p className="text-xs text-slate-600 line-clamp-1 max-w-2xl">
                            {course.description}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => navigateToCourse(course.id, 'overview')}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 self-start md:self-auto shadow-xs"
                      >
                        <span>Open Course Hub</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Direct Course Tabs strip */}
                    <div className="p-3.5 bg-slate-50/80">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-1.5">
                        {courseTabs.map((tab) => {
                          const TabIcon = tab.icon;
                          return (
                            <button
                              key={tab.id}
                              onClick={() => navigateToCourse(course.id, tab.id)}
                              className="p-2 rounded-xl bg-white hover:bg-blue-50 hover:border-blue-300 border border-slate-200 transition-all text-left cursor-pointer flex flex-col justify-between h-14 shadow-2xs"
                            >
                              <div className="flex items-center justify-between w-full">
                                <TabIcon className="w-3 h-3 text-slate-500" />
                                {typeof tab.count === 'number' && (
                                  <span className="text-[10px] px-1 py-0.1 rounded-full font-mono bg-slate-100 text-slate-600 font-bold">
                                    {tab.count}
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] font-semibold text-slate-700 truncate">
                                {tab.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= TAB 2: MATERIALS ================= */}
        {activeMainTab === 'materials' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Course Materials & Lecture Notes ({filteredMaterials.length})
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Download syllabus outlines, lecture notes, lab manuals, and formula sheets:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMaterials.map((mat) => (
                <div
                  key={mat.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {mat.courseCode}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {mat.category}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 line-clamp-2">
                      {mat.title}
                    </h3>

                    <p className="text-xs text-slate-500">
                      Level {mat.level} · Semester {mat.semester} · By {mat.author}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">
                      {mat.fileFormat} · {mat.fileSize} · {mat.downloadsCount} DLs
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setActiveDocument(mat)}
                        className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview</span>
                      </button>
                      <button
                        onClick={() => setActiveDocument(mat)}
                        className="p-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                        title="Download document"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 3: VIDEOS ================= */}
        {activeMainTab === 'videos' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Tutorial Videos & Masterclasses ({filteredVideos.length})
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Stream high-definition lecture walkthroughs, derivations, and exam problem solutions:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredVideos.map((vid) => (
                <div
                  key={vid.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div
                    onClick={() => setActiveVideo(vid)}
                    className="relative aspect-video bg-slate-900 cursor-pointer group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-blue-900/30 group-hover:bg-blue-900/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Video className="w-5 h-5 ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-black/80 text-white">
                      {vid.duration}
                    </span>
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-blue-600 text-white">
                      {vid.courseCode}
                    </span>
                  </div>

                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        onClick={() => setActiveVideo(vid)}
                        className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2"
                      >
                        {vid.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {vid.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>By {vid.instructor}</span>
                      <span>{vid.viewsCount} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 4: ASSIGNMENTS ================= */}
        {activeMainTab === 'assignments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Course Assignments & Projects ({filteredAssignments.length})
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Submit problem sets, laboratory logbooks, and design projects for grading:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredAssignments.map((asg) => (
                <div
                  key={asg.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all space-y-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                          {asg.courseCode}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{asg.courseName}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{asg.title}</h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {asg.points} Pts
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{asg.description}</p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1">
                    <span className="font-semibold text-slate-800">Requirements:</span>
                    <p>{asg.submissionRequirements}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-amber-700 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Due: {asg.dueDate}</span>
                    </div>

                    <button
                      onClick={() => setSubmittingAssignment(asg)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
                    >
                      <FileCheck className="w-3.5 h-3.5" />
                      <span>Submit Solution</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 5: PAST QUESTIONS ================= */}
        {activeMainTab === 'pastQuestions' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  KNUST Past Examination Papers ({filteredPastQuestions.length})
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Official end of semester & mid-semester exam papers with complete marking schemes:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPastQuestions.map((pq) => (
                <div
                  key={pq.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {pq.courseCode}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">
                        Year {pq.year}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900">{pq.title}</h3>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {pq.topics.map((t, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">
                      {pq.questionsCount} Questions · {pq.totalMarks} Marks
                    </span>

                    <button
                      onClick={() => navigateToCourse(pq.courseId, 'pastQuestions')}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer shadow-xs"
                    >
                      <span>Open Exam</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 6: SOLUTIONS ================= */}
        {activeMainTab === 'solutions' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Step-by-Step Worked Solutions ({filteredSolutions.length})
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Verified mathematical and mechanical design solutions prepared by senior tutors:
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {filteredSolutions.map((sol, index) => (
                <div
                  key={index}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {sol.courseCode}
                      </span>
                      <span className="text-xs text-slate-500">
                        {sol.examType} ({sol.year}) — Question {sol.questionNumber}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {sol.marks} Marks
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800 font-medium">
                    {sol.questionText}
                  </div>

                  {sol.solutionText && (
                    <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-blue-950">
                      <span className="font-bold text-blue-900 block mb-1">Worked Solution Summary:</span>
                      <p className="line-clamp-2">{sol.solutionText}</p>
                    </div>
                  )}

                  <div className="flex justify-end pt-1">
                    <button
                      onClick={() =>
                        setActiveSolution({
                          questionNumber: sol.questionNumber,
                          marks: sol.marks,
                          questionText: sol.questionText,
                          solutionText: sol.solutionText,
                          solutionSteps: sol.solutionSteps,
                          courseCode: sol.courseCode,
                          year: sol.year,
                        })
                      }
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>View Full Step-by-Step Solution</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 7: TUTORS ================= */}
        {activeMainTab === 'tutors' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Verified KNUST Engineering Tutors ({filteredTutors.length})
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Book 1-on-1 private tutorial sessions with top-ranked graduates and postgraduates:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredTutors.map((tutor) => (
                <div
                  key={tutor.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={tutor.avatar}
                        alt={tutor.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                      />
                      <div>
                        <h3 className="text-base font-bold text-slate-900">{tutor.name}</h3>
                        <p className="text-xs text-blue-600 font-medium">{tutor.title}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{tutor.rating}</span>
                      <span className="text-slate-400 font-normal">({tutor.reviewsCount} reviews)</span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {tutor.bio}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {tutor.specialization.map((spec, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-base font-extrabold text-slate-900">GH₵{tutor.hourlyRateGHS}</span>
                      <span className="text-[10px] text-slate-500">/hr</span>
                    </div>

                    <button
                      onClick={() => setBookingTutor(tutor)}
                      className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-xs"
                    >
                      Book Session
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 8: ANNOUNCEMENTS ================= */}
        {activeMainTab === 'announcements' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Course Announcements & Notices ({filteredAnnouncements.length})
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Official notices regarding midterm schedules, workshop lab access, and project deadlines:
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {filteredAnnouncements.map((ann) => (
                <div
                  key={ann.id}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {ann.courseCode}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                          ann.priority === 'urgent'
                            ? 'bg-rose-50 text-rose-700 border border-rose-200'
                            : ann.priority === 'important'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {ann.priority}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">{ann.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">{ann.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{ann.content}</p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>
                      Posted by <span className="font-semibold text-slate-800">{ann.author}</span> ({ann.authorRole})
                    </span>
                    <button
                      onClick={() => navigateToCourse(ann.courseId, 'announcements')}
                      className="text-blue-600 hover:underline font-semibold cursor-pointer"
                    >
                      Go to {ann.courseCode} &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 9: DISCUSSIONS ================= */}
        {activeMainTab === 'discussions' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Student Study Groups & Discussions ({filteredDiscussions.length})
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Ask questions, exchange solution techniques, and collaborate with coursemates:
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {filteredDiscussions.map((disc) => (
                <div
                  key={disc.id}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {disc.courseCode}
                      </span>
                      {disc.isAnswered && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Answered
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-400">{disc.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">{disc.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{disc.content}</p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {disc.tags.map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={disc.authorAvatar} alt={disc.author} className="w-6 h-6 rounded-full object-cover" />
                      <span className="text-xs text-slate-600 font-medium">{disc.author}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => upvoteDiscussion(disc.courseId, disc.id)}
                        className="flex items-center gap-1 text-xs text-slate-600 hover:text-blue-600 font-semibold cursor-pointer"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{disc.upvotes}</span>
                      </button>
                      <button
                        onClick={() => navigateToCourse(disc.courseId, 'discussions')}
                        className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                      >
                        {disc.repliesCount} Replies · Join
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
