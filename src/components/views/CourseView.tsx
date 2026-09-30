import React, { useState } from 'react';
import {
  BookOpen,
  Video,
  FileCheck,
  Users,
  Bell,
  MessageSquare,
  Download,
  Eye,
  CheckCircle2,
  Clock,
  Star,
  Plus,
  ArrowRight,
  Bookmark,
  Share2,
  Award,
  Upload,
  Calendar,
  AlertCircle,
  ThumbsUp,
  FileText,
  HelpCircle,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { useAcademic, CourseTab } from '../../context/AcademicContext';
import { Breadcrumbs } from '../Breadcrumbs';
import { CourseMaterial, TutorialVideo, Assignment, PastQuestion, Tutor } from '../../types';

export const CourseView: React.FC = () => {
  const {
    currentCollege,
    currentProgramme,
    currentCourse,
    selectedLevel,
    selectedSemester,
    activeCourseTab,
    setActiveCourseTab,
    getTutorsForCourse,
    isCourseEnrolled,
    enrollInCourse,
    getCourseProgress,
    setActiveVideo,
    setActiveDocument,
    setActiveSolution,
    setBookingTutor,
    setSubmittingAssignment,
    addDiscussionPost,
    upvoteDiscussion,
  } = useAcademic();

  // Local state for tabs & filters
  const [selectedYearFilter, setSelectedYearFilter] = useState<number | 'all'>('all');
  const [newDiscussionTitle, setNewDiscussionTitle] = useState('');
  const [newDiscussionContent, setNewDiscussionContent] = useState('');
  const [showNewDiscussionForm, setShowNewDiscussionForm] = useState(false);

  if (!currentCourse || !currentCollege || !currentProgramme) return null;

  const tutors = getTutorsForCourse(currentCourse.id);
  const enrolled = isCourseEnrolled(currentCourse.id);
  const progress = getCourseProgress(currentCourse.id);

  // Tabs configuration with icons and counts
  const tabs: { id: CourseTab; label: string; icon: React.FC<{ className?: string }>; count?: number }[] = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'materials', label: 'Materials', icon: FileText, count: currentCourse.materials.length },
    { id: 'videos', label: 'Videos', icon: Video, count: currentCourse.videos.length },
    { id: 'assignments', label: 'Assignments', icon: FileCheck, count: currentCourse.assignments.length },
    { id: 'pastQuestions', label: 'Past Questions', icon: HelpCircle, count: currentCourse.pastQuestions.length },
    { id: 'solutions', label: 'Solutions', icon: Award, count: currentCourse.pastQuestions.reduce((acc, pq) => acc + pq.questions.length, 0) },
    { id: 'tutors', label: 'Tutors', icon: Users, count: tutors.length },
    { id: 'announcements', label: 'Announcements', icon: Bell, count: currentCourse.announcements.length },
    { id: 'discussions', label: 'Discussions', icon: MessageSquare, count: currentCourse.discussions.length },
  ];

  // Video topic groupings
  const videoTopics = Array.from(new Set(currentCourse.videos.map((v) => v.topic)));

  // Past questions filtering
  const filteredPastQuestions = currentCourse.pastQuestions.filter((pq) => {
    if (selectedYearFilter === 'all') return true;
    return pq.year === selectedYearFilter;
  });

  const handleStartLearning = () => {
    if (!enrolled) {
      enrollInCourse(currentCourse.id);
    }
    if (currentCourse.videos.length > 0) {
      setActiveVideo(currentCourse.videos[0]);
    } else {
      setActiveCourseTab('materials');
    }
  };

  const handleAddDiscussion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDiscussionTitle.trim() || !newDiscussionContent.trim()) return;
    addDiscussionPost(currentCourse.id, newDiscussionTitle, newDiscussionContent, ['Exam Help', currentCourse.code]);
    setNewDiscussionTitle('');
    setNewDiscussionContent('');
    setShowNewDiscussionForm(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            collegeName={currentCollege.name}
            programmeName={currentProgramme.name}
            level={selectedLevel}
            semester={selectedSemester}
            courseCode={currentCourse.code}
          />
        </div>
      </div>

      {/* Course Banner (Matching Step 5 screenshot) */}
      <section className="bg-[#0A1120] text-white py-10 sm:py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Thumbnail and Header */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-900 shrink-0 border border-slate-700/80 shadow-md">
                  <img
                    src={currentCourse.coverImage}
                    alt={currentCourse.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {currentCourse.code}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Level {currentCourse.level} · Semester {currentCourse.semester} · {currentCourse.creditHours} Credits
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {currentCourse.name}
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-normal leading-relaxed">
                    Study materials, tutorial videos, assignments, past questions, solutions and expert tutors — all in one place.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleStartLearning}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  <span>Start Learning</span>
                </button>

                <button
                  onClick={() => enrollInCourse(currentCourse.id)}
                  className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border transition-colors cursor-pointer flex items-center gap-2 ${
                    enrolled
                      ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  {enrolled ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Enrolled ({progress?.progressPercent || 0}%)</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add to My Courses</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick Tab Jump Chips in Banner */}
              <div className="pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Jump Directly to Course Tab:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tabs.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveCourseTab(t.id)}
                      className={`text-xs px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 font-medium ${
                        activeCourseTab === t.id
                          ? 'bg-blue-600 text-white font-bold'
                          : 'bg-slate-800/90 hover:bg-slate-700 text-slate-300'
                      }`}
                    >
                      <span>{t.label}</span>
                      {typeof t.count === 'number' && (
                        <span className="text-[10px] opacity-75 font-mono">({t.count})</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Quick Indicators Column (from screenshot step 5) */}
            <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-3.5 backdrop-blur-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Course Resources Summary
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <button
                  onClick={() => setActiveCourseTab('videos')}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <Video className="w-4 h-4 text-red-400" />
                    <span>{currentCourse.videos.length} Tutorial Videos</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>

                <button
                  onClick={() => setActiveCourseTab('assignments')}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    <span>{currentCourse.assignments.length} Course Assignments</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>

                <button
                  onClick={() => setActiveCourseTab('pastQuestions')}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>{currentCourse.pastQuestions.length} Past Exam Papers</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>

                <button
                  onClick={() => setActiveCourseTab('tutors')}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>{tutors.length} Verified Tutors Available</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>

                <button
                  onClick={() => setActiveCourseTab('materials')}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span>Lecture Notes & Materials</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation Bar (Matching step 5 screenshot tabs) */}
      <div className="bg-white border-b-2 border-slate-200 sticky top-16 z-30 shadow-xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1.5">
          {tabs.map((tab) => {
            const isActive = activeCourseTab === tab.id;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCourseTab(tab.id)}
                className={`py-2.5 px-3.5 text-xs sm:text-sm font-semibold rounded-xl border whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-xs'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {typeof tab.count === 'number' && (
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? 'bg-blue-600 text-white font-bold'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Tab Panels */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* ================= 1. OVERVIEW TAB ================= */}
        {activeCourseTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              {/* About this course */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">About this Course</h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentCourse.longOverview}
                </p>

                <div className="pt-3 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Course Syllabus Topics
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {currentCourse.syllabusPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quick Links Row (from screenshot step 5) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  onClick={() => setActiveCourseTab('materials')}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all text-center flex flex-col items-center justify-center gap-2 cursor-pointer group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Course Outline</span>
                </button>

                <button
                  onClick={() => setActiveCourseTab('materials')}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all text-center flex flex-col items-center justify-center gap-2 cursor-pointer group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Recommended Texts</span>
                </button>

                <button
                  onClick={() => setActiveCourseTab('materials')}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all text-center flex flex-col items-center justify-center gap-2 cursor-pointer group"
                >
                  <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Formula Sheets</span>
                </button>

                <button
                  onClick={() => setActiveCourseTab('discussions')}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all text-center flex flex-col items-center justify-center gap-2 cursor-pointer group"
                >
                  <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Join Discussion</span>
                </button>
              </div>

              {/* Latest Announcement Preview */}
              {currentCourse.announcements.length > 0 && (
                <div className="p-5 bg-blue-50/60 border border-blue-200 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-800 uppercase tracking-wide flex items-center gap-1.5">
                      <Bell className="w-3.5 h-3.5" />
                      <span>Latest Course Announcement</span>
                    </span>
                    <span className="text-xs text-blue-600 font-medium">
                      {currentCourse.announcements[0].date}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {currentCourse.announcements[0].title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentCourse.announcements[0].content}
                  </p>
                </div>
              )}
            </div>

            {/* Right: Lecturer Info & Tutors Spotlight */}
            <div className="lg:col-span-4 space-y-6">
              {/* Lecturer Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Course Instruction Faculty
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{currentCourse.lecturerName}</h4>
                  <p className="text-xs text-slate-500">{currentCourse.lecturerOffice}</p>
                </div>
                {currentCourse.prerequisites && (
                  <div className="pt-2 border-t border-slate-100 text-xs">
                    <span className="text-slate-400 font-medium block mb-1">Prerequisites:</span>
                    <div className="flex flex-wrap gap-1">
                      {currentCourse.prerequisites.map((req, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px]">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Tutors Box */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">Tutors for {currentCourse.code}</h4>
                  <button
                    onClick={() => setActiveCourseTab('tutors')}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    View all ({tutors.length})
                  </button>
                </div>

                <div className="space-y-3">
                  {tutors.slice(0, 2).map((tutor) => (
                    <div key={tutor.id} className="flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={tutor.avatar}
                          alt={tutor.name}
                          referrerPolicy="no-referrer"
                          className="w-9 h-9 rounded-full object-cover shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-bold text-slate-900 truncate">{tutor.name}</p>
                          <div className="flex items-center gap-1 text-amber-500 font-semibold text-[11px]">
                            <Star className="w-3 h-3 fill-current" />
                            <span>{tutor.rating}</span>
                            <span className="text-slate-400 font-normal">({tutor.studentsCount} students)</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setBookingTutor(tutor)}
                        className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 cursor-pointer shrink-0"
                      >
                        Book
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= 2. COURSE MATERIALS TAB (Matching Step 5 screenshot) ================= */}
        {activeCourseTab === 'materials' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Course Materials</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Official lecture notes, handouts, formula sheets, and textbook reference chapters
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {currentCourse.materials.length} Documents Available
              </span>
            </div>

            <div className="space-y-3">
              {currentCourse.materials.map((mat) => (
                <div
                  key={mat.id}
                  className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="p-3 rounded-xl bg-red-50 text-red-600 border border-red-100 shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {mat.category}
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs font-mono text-slate-400">
                          {mat.fileFormat} · {mat.fileSize}
                        </span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5">
                        {mat.title}
                      </h4>

                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        Author: {mat.author} · Uploaded: {mat.uploadDate} · {mat.downloadsCount} Downloads
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <button
                      onClick={() => setActiveDocument(mat)}
                      className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </button>
                    <button
                      onClick={() => setActiveDocument(mat)}
                      className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 3. TUTORIAL VIDEOS TAB (Matching Step 5 screenshot) ================= */}
        {activeCourseTab === 'videos' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Tutorial Videos</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Organized by topics and dynamic mechanism problem-solving classes
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {currentCourse.videos.length} Videos Available
              </span>
            </div>

            <div className="space-y-8">
              {videoTopics.map((topic) => {
                const topicVideos = currentCourse.videos.filter((v) => v.topic === topic);
                return (
                  <div key={topic} className="space-y-3">
                    <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <span>Topic: {topic}</span>
                    </h4>

                    <div className="space-y-2.5">
                      {topicVideos.map((video) => {
                        const isDone = progress?.completedVideoIds.includes(video.id);
                        return (
                          <div
                            key={video.id}
                            onClick={() => setActiveVideo(video)}
                            className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all flex items-center justify-between gap-4 cursor-pointer group"
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              <div className="w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden bg-slate-900 shrink-0 relative flex items-center justify-center">
                                <img
                                  src={currentCourse.coverImage}
                                  alt={video.title}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-7 h-7 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-md">
                                    <Video className="w-3.5 h-3.5 ml-0.5" />
                                  </div>
                                </div>
                                <span className="absolute bottom-1 right-1 px-1 rounded bg-black/80 text-[10px] text-white font-mono">
                                  {video.duration}
                                </span>
                              </div>

                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-[11px] font-semibold text-slate-400">
                                    Lesson #{video.order}
                                  </span>
                                  {isDone && (
                                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded flex items-center gap-1">
                                      <CheckCircle2 className="w-3 h-3" /> Completed
                                    </span>
                                  )}
                                </div>

                                <h5 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                                  {video.title}
                                </h5>

                                <p className="text-xs text-slate-500 truncate mt-0.5">
                                  Instructor: {video.instructor} · {video.viewsCount} views
                                </p>
                              </div>
                            </div>

                            <button className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                              Watch
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= 4. ASSIGNMENTS TAB (Matching brief step 8) ================= */}
        {activeCourseTab === 'assignments' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Assignments & Problem Sets</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Continuous assessment problem sheets, design calculations, and submission requirements
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {currentCourse.assignments.length} Total Assignments
              </span>
            </div>

            <div className="space-y-4">
              {currentCourse.assignments.map((asg) => (
                <div
                  key={asg.id}
                  className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 space-y-4 hover:border-slate-300 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                          Continuous Assessment (CA)
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-500 font-medium">
                          {asg.points} Maximum Points
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mt-0.5">{asg.title}</h4>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Due: {asg.dueDate}</span>
                      </div>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-lg font-bold ${
                          asg.status === 'Submitted'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {asg.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {asg.description}
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                    <span className="font-bold text-slate-800">Submission Requirements: </span>
                    {asg.submissionRequirements}
                  </div>

                  {asg.userSubmission && (
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
                      <div>
                        <span className="font-bold">Submitted File: </span>
                        {asg.userSubmission.fileName} ({asg.userSubmission.submittedAt})
                      </div>
                      <span className="font-semibold text-emerald-700">Awaiting Grade</span>
                    </div>
                  )}

                  <div className="pt-1 flex items-center justify-end gap-2">
                    <button
                      onClick={() => setSubmittingAssignment(asg)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>{asg.status === 'Submitted' ? 'Resubmit Work' : 'Submit Assignment'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 5. PAST QUESTIONS TAB (Matching brief step 9) ================= */}
        {activeCourseTab === 'pastQuestions' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Past Examination Papers</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  KNUST End of Semester and Mid-Semester past exam questions with question-by-question solutions
                </p>
              </div>

              {/* Year Filter Buttons */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-lg">
                <button
                  onClick={() => setSelectedYearFilter('all')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    selectedYearFilter === 'all'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All Years
                </button>
                {[2025, 2024, 2023].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYearFilter(yr)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                      selectedYearFilter === yr
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {filteredPastQuestions.map((pq) => (
                <div
                  key={pq.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-4 p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-blue-600">{pq.year} Examination</span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-500 font-medium">{pq.examType}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                        {currentCourse.code} — {pq.title}
                      </h4>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {pq.topics.map((top, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                          >
                            {top}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-slate-900 block">
                        Total {pq.totalMarks} Marks
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {pq.downloadCount} students practiced
                      </span>
                    </div>
                  </div>

                  {/* Question items with View Question & View Solution (brief step 10) */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Exam Questions & Worked Solutions:
                    </h5>

                    {pq.questions.map((q) => (
                      <div
                        key={q.questionNumber}
                        className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900">
                            Question {q.questionNumber} ({q.marks} Marks)
                          </span>
                          <button
                            onClick={() =>
                              setActiveSolution({
                                questionNumber: q.questionNumber,
                                marks: q.marks,
                                questionText: q.questionText,
                                solutionText: q.solutionText,
                                solutionSteps: q.solutionSteps,
                                courseCode: currentCourse.code,
                                year: pq.year,
                              })
                            }
                            className="px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Worked Solution</span>
                          </button>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
                          {q.questionText}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 6. SOLUTIONS TAB (Matching brief step 10) ================= */}
        {activeCourseTab === 'solutions' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Worked Solutions Repository for {currentCourse.code}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Every solution is tied directly to a specific exam question or assignment with step-by-step mathematical reasoning
              </p>
            </div>

            <div className="space-y-4">
              {currentCourse.pastQuestions.map((pq) =>
                pq.questions.map((q) => (
                  <div
                    key={`${pq.id}-${q.questionNumber}`}
                    className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          {pq.year} Exam · Question {q.questionNumber}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{q.marks} Marks</span>
                      </div>

                      <button
                        onClick={() =>
                          setActiveSolution({
                            questionNumber: q.questionNumber,
                            marks: q.marks,
                            questionText: q.questionText,
                            solutionText: q.solutionText,
                            solutionSteps: q.solutionSteps,
                            courseCode: currentCourse.code,
                            year: pq.year,
                          })
                        }
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
                      >
                        <span>Open Full Step-by-Step Marking Breakdown</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-800 font-medium">
                      {q.questionText}
                    </p>

                    {q.solutionText && (
                      <div className="p-3 bg-emerald-50 rounded-lg text-xs text-emerald-950 font-mono">
                        <span className="font-bold text-emerald-800">Final Result: </span>
                        {q.solutionText}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* ================= 7. TUTORS TAB (Matching brief step 11) ================= */}
        {activeCourseTab === 'tutors' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Course-Specific Tutors for {currentCourse.code}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Connect with tutors who actively teach {currentCourse.name}
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {tutors.length} Tutors Available
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {tutors.map((tutor) => (
                <div
                  key={tutor.id}
                  className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <img
                        src={tutor.avatar}
                        alt={tutor.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-full object-cover border-2 border-slate-100"
                      />
                      {tutor.isOnline && (
                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-slate-900 truncate">{tutor.name}</h4>
                        <span className="text-xs font-bold text-blue-600">
                          GHS {tutor.hourlyRateGHS} / hr
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{tutor.title}</p>

                      <div className="flex items-center gap-1.5 text-xs text-amber-500 font-semibold mt-1">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{tutor.rating}</span>
                        <span className="text-slate-400 font-normal">
                          ({tutor.reviewsCount} reviews · {tutor.studentsCount} students)
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {tutor.bio}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {tutor.specialization.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      {tutor.isOnline ? 'Online for Instant Consult' : 'Available for Booking'}
                    </span>
                    <button
                      onClick={() => setBookingTutor(tutor)}
                      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                    >
                      Book Session
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 8. ANNOUNCEMENTS TAB ================= */}
        {activeCourseTab === 'announcements' && (
          <div className="space-y-6 max-w-3xl">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Course Announcements</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Official notices regarding exams, assignments, tutorials, and lecture hall changes
              </p>
            </div>

            <div className="space-y-4">
              {currentCourse.announcements.map((ann) => (
                <div
                  key={ann.id}
                  className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5"
                >
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-bold text-blue-600">
                      {ann.author} ({ann.authorRole})
                    </span>
                    <span>{ann.date}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{ann.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {ann.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 9. DISCUSSIONS TAB ================= */}
        {activeCourseTab === 'discussions' && (
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Student Q&A & Discussions</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Ask questions on problem sets and get answers from tutors and fellow students
                </p>
              </div>

              <button
                onClick={() => setShowNewDiscussionForm(!showNewDiscussionForm)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Ask Question</span>
              </button>
            </div>

            {/* Form to submit question */}
            {showNewDiscussionForm && (
              <form
                onSubmit={handleAddDiscussion}
                className="p-5 bg-white rounded-2xl border border-blue-300 shadow-sm space-y-3"
              >
                <h4 className="text-sm font-bold text-slate-900">Post a New Question for {currentCourse.code}</h4>
                <input
                  type="text"
                  value={newDiscussionTitle}
                  onChange={(e) => setNewDiscussionTitle(e.target.value)}
                  placeholder="Question title (e.g. Kennedy theorem instant center location in 4-bar linkage)"
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <textarea
                  rows={3}
                  value={newDiscussionContent}
                  onChange={(e) => setNewDiscussionContent(e.target.value)}
                  placeholder="Detail your question or the specific step where you are getting stuck..."
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowNewDiscussionForm(false)}
                    className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow-sm"
                  >
                    Post Question
                  </button>
                </div>
              </form>
            )}

            {/* Discussion Threads List */}
            <div className="space-y-3.5">
              {currentCourse.discussions.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
                  No discussions yet. Be the first to ask a question!
                </div>
              ) : (
                currentCourse.discussions.map((disc) => (
                  <div
                    key={disc.id}
                    className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={disc.authorAvatar}
                          alt={disc.author}
                          referrerPolicy="no-referrer"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-xs font-bold text-slate-900">{disc.author}</p>
                          <p className="text-[11px] text-slate-400">{disc.date}</p>
                        </div>
                      </div>

                      {disc.isAnswered && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          Tutor Answered
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-slate-900">{disc.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {disc.content}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => upvoteDiscussion(currentCourse.id, disc.id)}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>{disc.upvotes}</span>
                        </button>
                        <span className="text-slate-400 flex items-center gap-1">
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>{disc.repliesCount} replies</span>
                        </span>
                      </div>

                      <div className="flex gap-1">
                        {disc.tags.map((t, idx) => (
                          <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
