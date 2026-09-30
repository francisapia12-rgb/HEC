import React, { useState } from 'react';
import {
  ShieldCheck,
  Plus,
  BookOpen,
  Video,
  FileCheck,
  Users,
  FolderTree,
  ChevronRight,
  CheckCircle2,
  FileText,
  HelpCircle,
  Award,
  Layers,
} from 'lucide-react';
import { useAcademic } from '../../context/AcademicContext';

export const AdminCMSView: React.FC = () => {
  const {
    universities,
    colleges,
    programmes,
    courses,
    tutors,
    createCourse,
    addCourseMaterial,
    addTutorialVideo,
    addCourseAssignment,
    addPastQuestion,
    assignTutorToCourse,
    navigateToCourse,
  } = useAcademic();

  // Active CMS tab
  const [activeCmsTab, setActiveCmsTab] = useState<'create-course' | 'attach-content' | 'hierarchy-view'>('create-course');

  // Create Course form state
  const [targetCollegeId, setTargetCollegeId] = useState('engineering');
  const [targetProgrammeId, setTargetProgrammeId] = useState('bsc-mechanical-eng');
  const [targetLevel, setTargetLevel] = useState(300);
  const [targetSemester, setTargetSemester] = useState<1 | 2>(1);
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [creditHours, setCreditHours] = useState(3);
  const [courseDescription, setCourseDescription] = useState('');
  const [courseLecturer, setCourseLecturer] = useState('Prof. Academic Lecturer');
  const [courseSuccessMessage, setCourseSuccessMessage] = useState('');

  // Attach content form state
  const [selectedCourseForAttach, setSelectedCourseForAttach] = useState<string>(courses[0]?.id || '');
  const [contentTypeToAttach, setContentTypeToAttach] = useState<'material' | 'video' | 'assignment' | 'past_question'>('material');

  // Material fields
  const [matTitle, setMatTitle] = useState('');
  const [matCategory, setMatCategory] = useState<'Lecture Notes' | 'Course Outline' | 'Formula Sheet' | 'Recommended Textbook'>('Lecture Notes');
  const [matFileSize, setMatFileSize] = useState('2.4 MB');

  // Video fields
  const [vidTitle, setVidTitle] = useState('');
  const [vidTopic, setVidTopic] = useState('Dynamic Modeling');
  const [vidDuration, setVidDuration] = useState('25:00');
  const [vidInstructor, setVidInstructor] = useState('Francis Appiah');

  // Assignment fields
  const [asgTitle, setAsgTitle] = useState('');
  const [asgDueDate, setAsgDueDate] = useState('Nov 15, 2026');
  const [asgPoints, setAsgPoints] = useState(100);

  // Past Question fields
  const [pqYear, setPqYear] = useState(2025);
  const [pqExamType, setPqExamType] = useState<'End of Semester Examination' | 'Mid-Semester Examination'>('End of Semester Examination');
  const [pqQuestionText, setPqQuestionText] = useState('');
  const [pqSolutionText, setPqSolutionText] = useState('');

  const [attachSuccessMessage, setAttachSuccessMessage] = useState('');

  const handleCreateCourseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseCode || !courseName) return;

    createCourse({
      universityId: 'knust',
      collegeId: targetCollegeId,
      programmeId: targetProgrammeId,
      level: targetLevel,
      semester: targetSemester,
      code: courseCode.trim().toUpperCase(),
      name: courseName.trim(),
      creditHours,
      description: courseDescription || `${courseName} university curriculum modules and tutorial series.`,
      lecturerName: courseLecturer,
    });

    setCourseSuccessMessage(`Course "${courseCode} — ${courseName}" created successfully within hierarchy!`);
    setCourseCode('');
    setCourseName('');
    setCourseDescription('');
    setTimeout(() => setCourseSuccessMessage(''), 3500);
  };

  const handleAttachContentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourseForAttach) return;

    if (contentTypeToAttach === 'material' && matTitle) {
      addCourseMaterial(selectedCourseForAttach, {
        title: matTitle,
        category: matCategory,
        fileFormat: 'PDF',
        fileSize: matFileSize,
        author: courseLecturer,
        description: 'Uploaded via Harcourt CMS.',
      });
      setMatTitle('');
    } else if (contentTypeToAttach === 'video' && vidTitle) {
      addTutorialVideo(selectedCourseForAttach, {
        title: vidTitle,
        topic: vidTopic,
        duration: vidDuration,
        instructor: vidInstructor,
        description: 'Comprehensive video breakdown.',
        keyTakeaways: ['Key principle 1', 'Mathematical formulation', 'Sample exam problem'],
      });
      setVidTitle('');
    } else if (contentTypeToAttach === 'assignment' && asgTitle) {
      addCourseAssignment(selectedCourseForAttach, {
        title: asgTitle,
        dueDate: asgDueDate,
        points: asgPoints,
        description: 'Solve all problems and submit formatted PDF.',
        submissionRequirements: 'Single PDF upload with student index number.',
      });
      setAsgTitle('');
    } else if (contentTypeToAttach === 'past_question' && pqQuestionText) {
      addPastQuestion(selectedCourseForAttach, {
        year: pqYear,
        semester: 1,
        examType: pqExamType,
        title: `${pqYear} — ${pqExamType}`,
        topics: ['Mechanics', 'Kinematics'],
        totalMarks: 100,
        questionsCount: 1,
        questions: [
          {
            questionNumber: 1,
            marks: 25,
            questionText: pqQuestionText,
            solutionText: pqSolutionText,
            solutionSteps: [
              'Step 1: Formulate boundary conditions',
              'Step 2: Apply kinematic vector loops',
              'Step 3: Solve for unknown velocity variables',
            ],
          },
        ],
      });
      setPqQuestionText('');
      setPqSolutionText('');
    }

    setAttachSuccessMessage('Resource successfully attached directly to the course!');
    setTimeout(() => setAttachSuccessMessage(''), 3000);
  };

  const selectedCourseObj = courses.find((c) => c.id === selectedCourseForAttach) || courses[0];

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Admin Header */}
        <div className="bg-[#0B1528] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-600/30 border border-purple-500/40 rounded-2xl text-purple-300">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                  Harcourt Academic CMS
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-xs text-slate-400">Strict Hierarchy Enforcer</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                Hierarchical Content Management
              </h1>
              <p className="text-xs sm:text-sm text-slate-300">
                Create University → College → Programme → Level → Semester → Course, and attach resources directly.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {[
              { id: 'create-course', label: 'Create Course' },
              { id: 'attach-content', label: 'Attach Resources' },
              { id: 'hierarchy-view', label: 'Hierarchy Tree' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCmsTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  activeCmsTab === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ================= TAB 1: CREATE COURSE ================= */}
        {activeCmsTab === 'create-course' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Provision New Course Under Academic Hierarchy
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  The course will automatically inherit its college, programme, level, and semester relationships.
                </p>
              </div>

              {courseSuccessMessage && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{courseSuccessMessage}</span>
                </div>
              )}

              <form onSubmit={handleCreateCourseSubmit} className="space-y-5">
                {/* 1. Hierarchy Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      1. College
                    </label>
                    <select
                      value={targetCollegeId}
                      onChange={(e) => setTargetCollegeId(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                    >
                      {colleges.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      2. Programme
                    </label>
                    <select
                      value={targetProgrammeId}
                      onChange={(e) => setTargetProgrammeId(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                    >
                      {programmes.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      3. Academic Level
                    </label>
                    <select
                      value={targetLevel}
                      onChange={(e) => setTargetLevel(Number(e.target.value))}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                    >
                      <option value={100}>Level 100</option>
                      <option value={200}>Level 200</option>
                      <option value={300}>Level 300</option>
                      <option value={400}>Level 400</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      4. Semester
                    </label>
                    <select
                      value={targetSemester}
                      onChange={(e) => setTargetSemester(Number(e.target.value) as 1 | 2)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                    >
                      <option value={1}>Semester 1</option>
                      <option value={2}>Semester 2</option>
                    </select>
                  </div>
                </div>

                {/* 2. Course Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Course Code
                    </label>
                    <input
                      type="text"
                      value={courseCode}
                      onChange={(e) => setCourseCode(e.target.value)}
                      placeholder="e.g. ME 358"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 uppercase font-mono font-bold"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Course Title
                    </label>
                    <input
                      type="text"
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      placeholder="e.g. Engineering Metallurgy & Material Selection"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Credit Hours
                    </label>
                    <input
                      type="number"
                      value={creditHours}
                      onChange={(e) => setCreditHours(Number(e.target.value))}
                      min={1}
                      max={6}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Head Lecturer / Examiner
                    </label>
                    <input
                      type="text"
                      value={courseLecturer}
                      onChange={(e) => setCourseLecturer(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Course Overview & Scope
                  </label>
                  <textarea
                    rows={3}
                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                    placeholder="Provide a summary of kinematics, dynamics, thermo-fluids, or materials studied in this course..."
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish Course to Level {targetLevel}</span>
                </button>
              </form>
            </div>

            {/* Architecture diagram from brief */}
            <div className="lg:col-span-4 bg-slate-900 text-slate-200 rounded-2xl p-6 border border-slate-800 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Harcourt Hierarchical Model
              </h4>

              <div className="font-mono text-xs text-slate-300 space-y-1 bg-slate-950 p-4 rounded-xl border border-slate-800">
                <p className="text-blue-400 font-bold">KNUST</p>
                <p className="pl-3 text-slate-400">└── College of Engineering</p>
                <p className="pl-6 text-slate-400">└── BSc Mechanical Eng</p>
                <p className="pl-9 text-slate-400">└── Level 300</p>
                <p className="pl-12 text-slate-400">└── Semester 1</p>
                <p className="pl-15 text-emerald-400 font-bold">└── Course (ME 351)</p>
                <p className="pl-18 text-amber-300">├── Materials</p>
                <p className="pl-18 text-red-300">├── Videos</p>
                <p className="pl-18 text-blue-300">├── Assignments</p>
                <p className="pl-18 text-emerald-300">├── Past Questions</p>
                <p className="pl-18 text-purple-300">├── Solutions</p>
                <p className="pl-18 text-sky-300">└── Tutors</p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                When a course is published, it becomes immediately accessible inside the hierarchy and instantly searchable via Global Search.
              </p>
            </div>
          </div>
        )}

        {/* ================= TAB 2: ATTACH CONTENT DIRECTLY TO COURSE ================= */}
        {activeCmsTab === 'attach-content' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Attach Content Directly to Course
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Every material, video, assignment, past question, or solution belongs specifically to its course.
              </p>
            </div>

            {attachSuccessMessage && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{attachSuccessMessage}</span>
              </div>
            )}

            {/* Course Picker */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Target Course Container
                </label>
                <select
                  value={selectedCourseForAttach}
                  onChange={(e) => setSelectedCourseForAttach(e.target.value)}
                  className="text-xs p-2 rounded-lg border border-slate-300 bg-white font-semibold"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.code} — {c.name} (L{c.level} S{c.semester})
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => navigateToCourse(selectedCourseForAttach)}
                className="text-xs text-blue-600 font-bold hover:underline self-start sm:self-auto cursor-pointer"
              >
                Preview Course Page →
              </button>
            </div>

            {/* Content Type Selector */}
            <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
              {[
                { id: 'material', label: 'Course Material', icon: FileText },
                { id: 'video', label: 'Tutorial Video', icon: Video },
                { id: 'assignment', label: 'Assignment', icon: FileCheck },
                { id: 'past_question', label: 'Past Question & Solution', icon: HelpCircle },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = contentTypeToAttach === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setContentTypeToAttach(item.id as any)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Form per content type */}
            <form onSubmit={handleAttachContentSubmit} className="space-y-4 max-w-2xl">
              {contentTypeToAttach === 'material' && (
                <>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Material Document Title
                    </label>
                    <input
                      type="text"
                      value={matTitle}
                      onChange={(e) => setMatTitle(e.target.value)}
                      placeholder="e.g. Lecture Notes — Chapter 4: Hydrodynamic Lubrication"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Category</label>
                      <select
                        value={matCategory}
                        onChange={(e) => setMatCategory(e.target.value as any)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                      >
                        <option value="Lecture Notes">Lecture Notes</option>
                        <option value="Course Outline">Course Outline</option>
                        <option value="Formula Sheet">Formula Sheet</option>
                        <option value="Recommended Textbook">Recommended Textbook</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">File Size</label>
                      <input
                        type="text"
                        value={matFileSize}
                        onChange={(e) => setMatFileSize(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      />
                    </div>
                  </div>
                </>
              )}

              {contentTypeToAttach === 'video' && (
                <>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Video Title</label>
                    <input
                      type="text"
                      value={vidTitle}
                      onChange={(e) => setVidTitle(e.target.value)}
                      placeholder="e.g. 08 — Multistage Gear Trains & Epicyclic Torque"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Topic</label>
                      <input
                        type="text"
                        value={vidTopic}
                        onChange={(e) => setVidTopic(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Duration</label>
                      <input
                        type="text"
                        value={vidDuration}
                        onChange={(e) => setVidDuration(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Instructor</label>
                      <input
                        type="text"
                        value={vidInstructor}
                        onChange={(e) => setVidInstructor(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      />
                    </div>
                  </div>
                </>
              )}

              {contentTypeToAttach === 'assignment' && (
                <>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Assignment Title</label>
                    <input
                      type="text"
                      value={asgTitle}
                      onChange={(e) => setAsgTitle(e.target.value)}
                      placeholder="e.g. Assignment 4 — Epicyclic Gear Trains Simulation"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Due Date</label>
                      <input
                        type="text"
                        value={asgDueDate}
                        onChange={(e) => setAsgDueDate(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Points</label>
                      <input
                        type="number"
                        value={asgPoints}
                        onChange={(e) => setAsgPoints(Number(e.target.value))}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      />
                    </div>
                  </div>
                </>
              )}

              {contentTypeToAttach === 'past_question' && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Exam Year</label>
                      <input
                        type="number"
                        value={pqYear}
                        onChange={(e) => setPqYear(Number(e.target.value))}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Exam Type</label>
                      <select
                        value={pqExamType}
                        onChange={(e) => setPqExamType(e.target.value as any)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                      >
                        <option value="End of Semester Examination">End of Semester Examination</option>
                        <option value="Mid-Semester Examination">Mid-Semester Examination</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Question Statement</label>
                    <textarea
                      rows={2}
                      value={pqQuestionText}
                      onChange={(e) => setPqQuestionText(e.target.value)}
                      placeholder="e.g. Derive the angular velocity ratio for a sun-and-planet epicyclic gear..."
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 font-serif"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Worked Solution Summary</label>
                    <textarea
                      rows={2}
                      value={pqSolutionText}
                      onChange={(e) => setPqSolutionText(e.target.value)}
                      placeholder="e.g. Applying relative velocity method: omega_arm = 12 rad/s..."
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 font-mono"
                      required
                    ></textarea>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Attach to {selectedCourseObj.code}
              </button>
            </form>
          </div>
        )}

        {/* ================= TAB 3: COMPLETE HIERARCHY TREE VIEW ================= */}
        {activeCmsTab === 'hierarchy-view' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FolderTree className="w-5 h-5 text-blue-600" />
                <span>Live Academic Tree Structure</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Every node reflects real in-memory and persisted course relations.
              </p>
            </div>

            <div className="space-y-4">
              {universities.map((uni) => (
                <div key={uni.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-blue-900">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>{uni.name} ({uni.shortName})</span>
                  </div>

                  <div className="pl-4 border-l-2 border-blue-200 space-y-3">
                    {colleges.filter((c) => c.universityId === uni.id).map((col) => (
                      <div key={col.id} className="space-y-2">
                        <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-blue-600" />
                          <span>{col.name}</span>
                        </div>

                        <div className="pl-4 border-l-2 border-slate-200 space-y-2">
                          {programmes.filter((p) => p.collegeId === col.id).map((prog) => (
                            <div key={prog.id} className="text-xs space-y-1">
                              <p className="font-semibold text-slate-700">{prog.name}</p>

                              <div className="pl-4 space-y-1 text-slate-600">
                                {[100, 200, 300, 400].map((lvl) => {
                                  const lvlCourses = courses.filter((c) => c.programmeId === prog.id && c.level === lvl);
                                  if (lvlCourses.length === 0) return null;

                                  return (
                                    <div key={lvl} className="flex items-center gap-2 flex-wrap">
                                      <span className="text-[11px] font-bold text-slate-400">Level {lvl}:</span>
                                      {lvlCourses.map((c) => (
                                        <button
                                          key={c.id}
                                          onClick={() => navigateToCourse(c.id)}
                                          className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-mono text-[10px] font-bold transition-colors cursor-pointer"
                                        >
                                          {c.code}
                                        </button>
                                      ))}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
