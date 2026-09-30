import React from 'react';
import {
  GraduationCap,
  Play,
  FileCheck,
  Bookmark,
  Clock,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Award,
  Video,
  FileText,
  User,
} from 'lucide-react';
import { useAcademic } from '../../context/AcademicContext';

export const DashboardView: React.FC = () => {
  const {
    courses,
    studentProgress,
    currentUser,
    navigateToCourse,
    setActiveVideo,
    setActiveDocument,
  } = useAcademic();

  // Find enrolled courses
  const enrolledCoursesWithProgress = studentProgress
    .map((prog) => {
      const course = courses.find((c) => c.id === prog.courseId);
      return { course, progress: prog };
    })
    .filter((item): item is { course: any; progress: any } => !!item.course);

  // Collect upcoming assignments across enrolled courses
  const upcomingAssignments = enrolledCoursesWithProgress.flatMap(({ course }) =>
    course.assignments.map((asg: any) => ({
      ...asg,
      courseCode: course.code,
      courseName: course.name,
      courseId: course.id,
    }))
  );

  // Collect saved materials
  const savedMaterialsList = enrolledCoursesWithProgress.flatMap(({ course, progress }) =>
    course.materials
      .filter((m: any) => progress.savedMaterialIds.includes(m.id))
      .map((m: any) => ({
        ...m,
        courseCode: course.code,
        courseId: course.id,
      }))
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Welcome Header */}
        <div className="bg-[#0B1528] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold border border-blue-400 shadow-md">
              {currentUser.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Student Portal · {currentUser.universityName}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-xs text-slate-400">Level {currentUser.level}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                Welcome back, {currentUser.name.split(' ')[0]}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300">
                {currentUser.programmeName} · Index #{currentUser.indexNumber}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-8 text-center sm:text-left">
            <div>
              <p className="text-2xl font-extrabold text-white font-mono">{enrolledCoursesWithProgress.length}</p>
              <p className="text-xs text-slate-400">Active Courses</p>
            </div>
            <div className="border-l border-slate-800 pl-4">
              <p className="text-2xl font-extrabold text-emerald-400 font-mono">
                {Math.round(
                  enrolledCoursesWithProgress.reduce((acc, c) => acc + c.progress.progressPercent, 0) /
                    (enrolledCoursesWithProgress.length || 1)
                )}%
              </p>
              <p className="text-xs text-slate-400">Avg Completion</p>
            </div>
          </div>
        </div>

        {/* 1. MY COURSES (from brief step 13) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">My Registered Courses</h2>
            <span className="text-xs font-semibold text-slate-400">
              Semester 1 · Academic Year 2026/2027
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {enrolledCoursesWithProgress.map(({ course, progress }) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-extrabold text-blue-600 font-mono">{course.code}</span>
                    <span className="text-slate-400 text-[11px]">{course.creditHours} Credits</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    {course.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                {/* Progress Bar from brief */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-600">Course Progress</span>
                    <span className="text-blue-600 font-mono">{progress.progressPercent}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${progress.progressPercent}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400">
                    Last active: {progress.lastAccessed}
                  </span>
                  <button
                    onClick={() => navigateToCourse(course.id, 'overview')}
                    className="px-3.5 py-1.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. RECENT ASSIGNMENTS & UPCOMING DEADLINES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-600" />
              <span>Assignments & Upcoming Deadlines</span>
            </h3>

            <div className="space-y-3">
              {upcomingAssignments.map((asg: any) => (
                <div
                  key={asg.id}
                  onClick={() => navigateToCourse(asg.courseId, 'assignments')}
                  className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-blue-600">
                        {asg.courseCode}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs text-slate-400">{asg.points} pts</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 truncate mt-0.5">
                      {asg.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <span className="text-xs font-semibold text-amber-700 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Due {asg.dueDate}
                      </span>
                      <span className="text-[11px] text-slate-400 block">{asg.status}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. SAVED MATERIALS & BOOKMARKS */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-amber-600" />
              <span>Saved Course Materials ({savedMaterialsList.length})</span>
            </h3>

            <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-2.5">
              {savedMaterialsList.length === 0 ? (
                <p className="text-xs text-slate-400 py-6 text-center">
                  No bookmarked notes yet. Click the bookmark icon on any course material to save here.
                </p>
              ) : (
                savedMaterialsList.map((mat: any) => (
                  <div
                    key={mat.id}
                    onClick={() => {
                      navigateToCourse(mat.courseId, 'materials');
                      setActiveDocument(mat);
                    }}
                    className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer border border-transparent hover:border-slate-200"
                  >
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-blue-600 font-mono">
                        {mat.courseCode}
                      </span>
                      <h5 className="text-xs font-bold text-slate-800 truncate">
                        {mat.title}
                      </h5>
                      <span className="text-[10px] text-slate-400">
                        {mat.fileFormat} · {mat.fileSize}
                      </span>
                    </div>
                    <FileText className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
