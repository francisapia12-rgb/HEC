import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ViewMode,
  University,
  College,
  Programme,
  Course,
  Tutor,
  CourseMaterial,
  TutorialVideo,
  Assignment,
  PastQuestion,
  StudentCourseProgress,
  SearchResultItem,
} from '../types';
import {
  INITIAL_UNIVERSITIES,
  INITIAL_COLLEGES,
  INITIAL_PROGRAMMES,
  INITIAL_COURSES,
  INITIAL_TUTORS,
  INITIAL_STUDENT_PROGRESS,
  INITIAL_USER,
} from '../data/mockData';

export type CourseTab = 
  | 'overview' 
  | 'materials' 
  | 'videos' 
  | 'assignments' 
  | 'pastQuestions' 
  | 'solutions' 
  | 'tutors' 
  | 'announcements'
  | 'discussions';

interface AcademicContextType {
  // Navigation
  viewMode: ViewMode;
  selectedUniversityId: string;
  selectedCollegeId: string | null;
  selectedProgrammeId: string | null;
  selectedLevel: number;
  selectedSemester: 1 | 2;
  selectedCourseId: string | null;
  activeCourseTab: CourseTab;
  
  // Navigation actions
  navigateToHome: () => void;
  navigateToUniversity: (uniId?: string) => void;
  navigateToColleges: () => void;
  navigateToCollege: (collegeId: string) => void;
  navigateToProgramme: (collegeId: string, programmeId: string) => void;
  navigateToLevel: (collegeId: string, programmeId: string, level: number, semester?: 1 | 2) => void;
  navigateToCourses: () => void;
  navigateToCourse: (courseId: string, tab?: CourseTab) => void;
  navigateToDashboard: () => void;
  navigateToTutors: () => void;
  navigateToPricing: () => void;
  navigateToAdmin: () => void;
  setSelectedUniversityId: (uniId: string) => void;
  setSelectedSemester: (semester: 1 | 2) => void;
  setActiveCourseTab: (tab: CourseTab) => void;

  // Data
  universities: University[];
  colleges: College[];
  programmes: Programme[];
  courses: Course[];
  tutors: Tutor[];
  studentProgress: StudentCourseProgress[];
  
  // Computed helpers
  currentUniversity: University;
  currentCollege: College | null;
  currentProgramme: Programme | null;
  currentCourse: Course | null;
  getCoursesForLevelAndSemester: (programmeId: string, level: number, semester: 1 | 2) => Course[];
  getTutorsForCourse: (courseId: string) => Tutor[];
  isCourseEnrolled: (courseId: string) => boolean;
  getCourseProgress: (courseId: string) => StudentCourseProgress | undefined;

  // Student actions
  enrollInCourse: (courseId: string) => void;
  toggleSaveMaterial: (courseId: string, materialId: string) => void;
  markVideoCompleted: (courseId: string, videoId: string) => void;
  submitAssignmentWork: (courseId: string, assignmentId: string, fileName: string) => void;
  addDiscussionPost: (courseId: string, title: string, content: string, tags: string[]) => void;
  upvoteDiscussion: (courseId: string, discussionId: string) => void;

  // Admin CMS actions
  createCourse: (newCourseData: Partial<Course>) => void;
  addCourseMaterial: (courseId: string, material: Omit<CourseMaterial, 'id' | 'courseId' | 'uploadDate' | 'downloadsCount'>) => void;
  addTutorialVideo: (courseId: string, video: Omit<TutorialVideo, 'id' | 'courseId' | 'order' | 'viewsCount'>) => void;
  addCourseAssignment: (courseId: string, assignment: Omit<Assignment, 'id' | 'courseId' | 'status' | 'assignedDate'>) => void;
  addPastQuestion: (courseId: string, pastQuestion: Omit<PastQuestion, 'id' | 'courseId' | 'downloadCount'>) => void;
  assignTutorToCourse: (courseId: string, tutorId: string) => void;

  // Modals & Overlays
  activeVideo: TutorialVideo | null;
  setActiveVideo: (video: TutorialVideo | null) => void;
  activeDocument: CourseMaterial | null;
  setActiveDocument: (mat: CourseMaterial | null) => void;
  activeSolution: {
    questionNumber: number;
    marks: number;
    questionText: string;
    solutionText?: string;
    solutionSteps?: string[];
    courseCode: string;
    year: number;
  } | null;
  setActiveSolution: (sol: any) => void;
  bookingTutor: Tutor | null;
  setBookingTutor: (tutor: Tutor | null) => void;
  submittingAssignment: Assignment | null;
  setSubmittingAssignment: (assignment: Assignment | null) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchAcademic: (query: string) => SearchResultItem[];

  // User auth state simulation
  currentUser: typeof INITIAL_USER;
  toggleUserRole: () => void;
}

const AcademicContext = createContext<AcademicContextType | undefined>(undefined);

export const AcademicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation state
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [selectedUniversityId, setSelectedUniversityId] = useState<string>('knust');
  const [selectedCollegeId, setSelectedCollegeId] = useState<string | null>('engineering');
  const [selectedProgrammeId, setSelectedProgrammeId] = useState<string | null>('bsc-mechanical-eng');
  const [selectedLevel, setSelectedLevel] = useState<number>(300);
  const [selectedSemester, setSelectedSemester] = useState<1 | 2>(1);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>('course-me351');
  const [activeCourseTab, setActiveCourseTab] = useState<CourseTab>('overview');

  // Core hierarchical data (synced with localStorage)
  const [universities] = useState<University[]>(INITIAL_UNIVERSITIES);
  const [colleges] = useState<College[]>(INITIAL_COLLEGES);
  const [programmes] = useState<Programme[]>(INITIAL_PROGRAMMES);
  
  const [courses, setCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('harcourt_courses_v5');
    if (saved) {
      try {
        const parsed: Course[] = JSON.parse(saved);
        const initMap = new Map(INITIAL_COURSES.map((c) => [c.id, c]));
        // If parsed course has empty materials while initial has rich content, prefer initial
        const updated = parsed.map((p) => {
          const init = initMap.get(p.id);
          if (init && (p.materials?.length || 0) < init.materials.length) {
            return init;
          }
          return p;
        });
        const existingIds = new Set(updated.map((c) => c.id));
        INITIAL_COURSES.forEach((initC) => {
          if (!existingIds.has(initC.id)) {
            updated.push(initC);
          }
        });
        return updated;
      } catch (e) {
        console.error('Failed to parse courses from local storage', e);
      }
    }
    return INITIAL_COURSES;
  });

  const [tutors] = useState<Tutor[]>(INITIAL_TUTORS);

  const [studentProgress, setStudentProgress] = useState<StudentCourseProgress[]>(() => {
    const saved = localStorage.getItem('harcourt_student_progress_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse student progress', e);
      }
    }
    return INITIAL_STUDENT_PROGRESS;
  });

  const [currentUser, setCurrentUser] = useState(INITIAL_USER);

  // Modals state
  const [activeVideo, setActiveVideo] = useState<TutorialVideo | null>(null);
  const [activeDocument, setActiveDocument] = useState<CourseMaterial | null>(null);
  const [activeSolution, setActiveSolution] = useState<any | null>(null);
  const [bookingTutor, setBookingTutor] = useState<Tutor | null>(null);
  const [submittingAssignment, setSubmittingAssignment] = useState<Assignment | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Persist courses and student progress
  useEffect(() => {
    localStorage.setItem('harcourt_courses_v5', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('harcourt_student_progress_v1', JSON.stringify(studentProgress));
  }, [studentProgress]);

  // Current entity getters
  const currentUniversity = universities.find((u) => u.id === selectedUniversityId) || universities[0];
  const currentCollege = colleges.find((c) => c.id === selectedCollegeId) || colleges[0];
  const currentProgramme = programmes.find((p) => p.id === selectedProgrammeId) || programmes[0];
  const currentCourse = courses.find((c) => c.id === selectedCourseId) || courses[0];

  const getCoursesForLevelAndSemester = (programmeId: string, level: number, semester: 1 | 2) => {
    return courses.filter(
      (c) => c.programmeId === programmeId && c.level === level && c.semester === semester
    );
  };

  const getTutorsForCourse = (courseId: string) => {
    return tutors.filter((t) => t.coursesTaught.includes(courseId));
  };

  const isCourseEnrolled = (courseId: string) => {
    return studentProgress.some((p) => p.courseId === courseId);
  };

  const getCourseProgress = (courseId: string) => {
    return studentProgress.find((p) => p.courseId === courseId);
  };

  // Navigation handlers
  const navigateToHome = () => {
    setViewMode('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToUniversity = (uniId: string = 'knust') => {
    setSelectedUniversityId(uniId);
    setViewMode('university');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToColleges = () => {
    setViewMode('university');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCourses = () => {
    setViewMode('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCollege = (collegeId: string) => {
    setSelectedCollegeId(collegeId);
    setViewMode('college');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProgramme = (collegeId: string, programmeId: string) => {
    setSelectedCollegeId(collegeId);
    setSelectedProgrammeId(programmeId);
    setViewMode('programme');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLevel = (collegeId: string, programmeId: string, level: number, semester: 1 | 2 = 1) => {
    setSelectedCollegeId(collegeId);
    setSelectedProgrammeId(programmeId);
    setSelectedLevel(level);
    setSelectedSemester(semester);
    setViewMode('level');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCourse = (courseId: string, tab: CourseTab = 'overview') => {
    const course = courses.find((c) => c.id === courseId);
    if (course) {
      setSelectedCollegeId(course.collegeId);
      setSelectedProgrammeId(course.programmeId);
      setSelectedLevel(course.level);
      setSelectedSemester(course.semester);
      setSelectedCourseId(course.id);
      setActiveCourseTab(tab);
      setViewMode('course');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToDashboard = () => {
    setViewMode('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTutors = () => {
    setViewMode('tutors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPricing = () => {
    setViewMode('pricing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAdmin = () => {
    setViewMode('admin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Student actions
  const enrollInCourse = (courseId: string) => {
    if (isCourseEnrolled(courseId)) return;
    const newProgress: StudentCourseProgress = {
      courseId,
      enrolledAt: 'Just now',
      progressPercent: 5,
      lastAccessed: 'Just now',
      completedVideoIds: [],
      submittedAssignmentIds: [],
      savedMaterialIds: [],
    };
    setStudentProgress((prev) => [newProgress, ...prev]);
  };

  const toggleSaveMaterial = (courseId: string, materialId: string) => {
    setStudentProgress((prev) =>
      prev.map((prog) => {
        if (prog.courseId !== courseId) return prog;
        const exists = prog.savedMaterialIds.includes(materialId);
        const updated = exists
          ? prog.savedMaterialIds.filter((id) => id !== materialId)
          : [...prog.savedMaterialIds, materialId];
        return { ...prog, savedMaterialIds: updated };
      })
    );
  };

  const markVideoCompleted = (courseId: string, videoId: string) => {
    setStudentProgress((prev) =>
      prev.map((prog) => {
        if (prog.courseId !== courseId) return prog;
        if (prog.completedVideoIds.includes(videoId)) return prog;
        const course = courses.find((c) => c.id === courseId);
        const totalVids = course?.videos.length || 1;
        const newCompleted = [...prog.completedVideoIds, videoId];
        const newPercent = Math.min(100, Math.round((newCompleted.length / totalVids) * 80) + 20);
        return {
          ...prog,
          completedVideoIds: newCompleted,
          progressPercent: newPercent,
          lastAccessed: 'Just now',
        };
      })
    );
  };

  const submitAssignmentWork = (courseId: string, assignmentId: string, fileName: string) => {
    setCourses((prev) =>
      prev.map((course) => {
        if (course.id !== courseId) return course;
        return {
          ...course,
          assignments: course.assignments.map((asg) => {
            if (asg.id !== assignmentId) return asg;
            return {
              ...asg,
              status: 'Submitted' as const,
              userSubmission: {
                submittedAt: 'Today at ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                fileName,
              },
            };
          }),
        };
      })
    );

    setStudentProgress((prev) =>
      prev.map((prog) => {
        if (prog.courseId !== courseId) return prog;
        const exists = prog.submittedAssignmentIds.includes(assignmentId);
        if (exists) return prog;
        return {
          ...prog,
          submittedAssignmentIds: [...prog.submittedAssignmentIds, assignmentId],
          progressPercent: Math.min(100, prog.progressPercent + 10),
          lastAccessed: 'Just now',
        };
      })
    );
  };

  const addDiscussionPost = (courseId: string, title: string, content: string, tags: string[]) => {
    const newDiscussion = {
      id: `disc-${Date.now()}`,
      courseId,
      title,
      author: currentUser.name,
      authorAvatar: currentUser.avatar,
      date: 'Just now',
      content,
      upvotes: 1,
      repliesCount: 0,
      isAnswered: false,
      tags: tags.length ? tags : ['General Q&A'],
    };

    setCourses((prev) =>
      prev.map((c) => {
        if (c.id !== courseId) return c;
        return {
          ...c,
          discussions: [newDiscussion, ...c.discussions],
        };
      })
    );
  };

  const upvoteDiscussion = (courseId: string, discussionId: string) => {
    setCourses((prev) =>
      prev.map((c) => {
        if (c.id !== courseId) return c;
        return {
          ...c,
          discussions: c.discussions.map((d) =>
            d.id === discussionId ? { ...d, upvotes: d.upvotes + 1 } : d
          ),
        };
      })
    );
  };

  // Admin CMS handlers
  const createCourse = (newCourseData: Partial<Course>) => {
    const newCourse: Course = {
      id: `course-${Date.now()}`,
      universityId: newCourseData.universityId || 'knust',
      collegeId: newCourseData.collegeId || selectedCollegeId || 'engineering',
      programmeId: newCourseData.programmeId || selectedProgrammeId || 'bsc-mechanical-eng',
      level: newCourseData.level || 300,
      semester: newCourseData.semester || 1,
      code: newCourseData.code || 'ENG 301',
      name: newCourseData.name || 'New Engineering Subject',
      creditHours: newCourseData.creditHours || 3,
      description: newCourseData.description || 'Comprehensive university course modules and exam preparation.',
      longOverview: newCourseData.longOverview || 'Course overview and breakdown of academic topics and practical exercises.',
      coverImage: newCourseData.coverImage || INITIAL_COURSES[0].coverImage,
      iconName: 'BookOpen',
      lecturerName: newCourseData.lecturerName || 'Faculty Lecturer',
      lecturerOffice: newCourseData.lecturerOffice || 'Engineering Faculty Building',
      syllabusPoints: newCourseData.syllabusPoints || ['Unit 1: Fundamentals', 'Unit 2: Applied Analysis', 'Unit 3: Design & Evaluation'],
      materials: [],
      videos: [],
      assignments: [],
      pastQuestions: [],
      tutorIds: ['tutor-francis-appiah'],
      announcements: [
        {
          id: `ann-${Date.now()}`,
          courseId: `course-${Date.now()}`,
          title: 'Welcome to this Course on Harcourt Consult',
          author: 'Head Tutor',
          authorRole: 'Academic Lead',
          date: 'Today',
          content: 'Course content, past questions, and video modules will be updated weekly.',
          priority: 'normal',
        },
      ],
      discussions: [],
    };

    setCourses((prev) => [newCourse, ...prev]);
    navigateToCourse(newCourse.id);
  };

  const addCourseMaterial = (
    courseId: string,
    material: Omit<CourseMaterial, 'id' | 'courseId' | 'uploadDate' | 'downloadsCount'>
  ) => {
    const newMat: CourseMaterial = {
      ...material,
      id: `mat-${Date.now()}`,
      courseId,
      uploadDate: 'Today',
      downloadsCount: 1,
    };

    setCourses((prev) =>
      prev.map((c) => {
        if (c.id !== courseId) return c;
        return {
          ...c,
          materials: [newMat, ...c.materials],
        };
      })
    );
  };

  const addTutorialVideo = (
    courseId: string,
    video: Omit<TutorialVideo, 'id' | 'courseId' | 'order' | 'viewsCount'>
  ) => {
    setCourses((prev) =>
      prev.map((c) => {
        if (c.id !== courseId) return c;
        const newOrder = c.videos.length + 1;
        const newVid: TutorialVideo = {
          ...video,
          id: `vid-${Date.now()}`,
          courseId,
          order: newOrder,
          viewsCount: 1,
        };
        return {
          ...c,
          videos: [...c.videos, newVid],
        };
      })
    );
  };

  const addCourseAssignment = (
    courseId: string,
    assignment: Omit<Assignment, 'id' | 'courseId' | 'status' | 'assignedDate'>
  ) => {
    const newAsg: Assignment = {
      ...assignment,
      id: `asg-${Date.now()}`,
      courseId,
      assignedDate: 'Today',
      status: 'Open',
    };

    setCourses((prev) =>
      prev.map((c) => {
        if (c.id !== courseId) return c;
        return {
          ...c,
          assignments: [newAsg, ...c.assignments],
        };
      })
    );
  };

  const addPastQuestion = (
    courseId: string,
    pastQuestion: Omit<PastQuestion, 'id' | 'courseId' | 'downloadCount'>
  ) => {
    const newPQ: PastQuestion = {
      ...pastQuestion,
      id: `pq-${Date.now()}`,
      courseId,
      downloadCount: 1,
    };

    setCourses((prev) =>
      prev.map((c) => {
        if (c.id !== courseId) return c;
        return {
          ...c,
          pastQuestions: [newPQ, ...c.pastQuestions],
        };
      })
    );
  };

  const assignTutorToCourse = (courseId: string, tutorId: string) => {
    setCourses((prev) =>
      prev.map((c) => {
        if (c.id !== courseId) return c;
        if (c.tutorIds.includes(tutorId)) return c;
        return {
          ...c,
          tutorIds: [...c.tutorIds, tutorId],
        };
      })
    );
  };

  // Hierarchical Search implementation
  const searchAcademic = (query: string): SearchResultItem[] => {
    const rawQ = (query || '').toLowerCase().trim();
    // Normalize nkruma -> nkrumah so both spelling variations work seamlessly
    const q = rawQ.replace(/nkruma(?![h])/g, 'nkrumah');
    const isKnustQuery =
      rawQ.includes('kwame') ||
      rawQ.includes('nkruma') ||
      rawQ.includes('nkrumah') ||
      rawQ.includes('knust') ||
      rawQ.includes('tech') ||
      rawQ.includes('university') ||
      rawQ.includes('science') ||
      rawQ.includes('kumasi');

    const results: SearchResultItem[] = [];

    // If query is empty, provide top foundational recommendations
    if (!rawQ || rawQ.length === 0) {
      const knust = universities.find((u) => u.id === 'knust') || universities[0];
      results.push({
        id: `search-uni-${knust.id}`,
        type: 'university',
        title: `${knust.name} (${knust.shortName})`,
        subtitle: `Also known as Kwame Nkruma University of Science and Technology · ${knust.location} · 6 Colleges · 78 Degree Programmes · 420+ Courses`,
        hierarchyPath: `Higher Education Institution · Ghana`,
        universityId: knust.id,
      });

      colleges.slice(0, 3).forEach((col) => {
        results.push({
          id: `search-col-${col.id}`,
          type: 'college',
          title: `${col.name} — KNUST`,
          subtitle: `${col.programmesCount} Degree Programmes · ${col.highlightDepartments.slice(0, 3).join(', ')}`,
          hierarchyPath: `Kwame Nkrumah University of Science and Technology > Colleges`,
          collegeId: col.id,
        });
      });

      const me351 = courses.find((c) => c.code === 'ME 351');
      if (me351) {
        results.push({
          id: `search-course-${me351.id}`,
          type: 'course',
          title: `${me351.code} — ${me351.name}`,
          subtitle: `KNUST · Level ${me351.level} · Sem ${me351.semester} · 12 Videos · 8 Assignments · 5 Past Papers · 4 Tutors`,
          hierarchyPath: `KNUST > College of Engineering > BSc Mechanical Engineering`,
          courseId: me351.id,
          courseCode: me351.code,
          actionTab: 'overview',
        });
      }

      return results;
    }

    // 0. Search Universities (KNUST, Legon, UCC)
    universities.forEach((u) => {
      const match =
        u.name.toLowerCase().includes(rawQ) ||
        u.name.toLowerCase().includes(q) ||
        u.shortName.toLowerCase().includes(rawQ) ||
        u.location.toLowerCase().includes(rawQ) ||
        (u.aliases && u.aliases.some((a) => a.toLowerCase().includes(rawQ) || a.toLowerCase().includes(q))) ||
        (rawQ.includes('university') && u.shortName === 'KNUST') ||
        (isKnustQuery && u.shortName === 'KNUST');

      if (match) {
        results.push({
          id: `search-uni-${u.id}`,
          type: 'university',
          title: `${u.name} (${u.shortName})`,
          subtitle: `Also known as Kwame Nkruma University of Science and Technology · ${u.location} · ${u.collegesCount} Colleges · ${u.programmesCount} Undergraduate Programmes`,
          hierarchyPath: `Higher Education Institution · Ghana`,
          universityId: u.id,
        });
      }
    });

    // 0.5. Search Colleges (College of Engineering, Science, etc.)
    colleges.forEach((col) => {
      const match =
        col.name.toLowerCase().includes(rawQ) ||
        col.slug.toLowerCase().includes(rawQ) ||
        col.description.toLowerCase().includes(rawQ) ||
        col.highlightDepartments.some((d) => d.toLowerCase().includes(rawQ)) ||
        (isKnustQuery && col.universityId === 'knust');

      if (match) {
        results.push({
          id: `search-col-${col.id}`,
          type: 'college',
          title: `${col.name} — KNUST`,
          subtitle: `${col.programmesCount} Degree Programmes · ${col.highlightDepartments.slice(0, 3).join(', ')}`,
          hierarchyPath: `Kwame Nkrumah University of Science and Technology > Colleges`,
          collegeId: col.id,
        });
      }
    });

    // 0.8. Search Programmes (BSc Mechanical Engineering, etc.)
    programmes.forEach((p) => {
      const parentCol = colleges.find((c) => c.id === p.collegeId);
      const match =
        p.name.toLowerCase().includes(rawQ) ||
        p.code.toLowerCase().includes(rawQ) ||
        p.description.toLowerCase().includes(rawQ) ||
        (isKnustQuery && p.universityId === 'knust');

      if (match) {
        results.push({
          id: `search-prog-${p.id}`,
          type: 'programme',
          title: `${p.name} (KNUST)`,
          subtitle: `${p.degreeType} (4 Years) · ${parentCol?.name || 'College of Engineering'}`,
          hierarchyPath: `KNUST > ${parentCol?.name || 'Engineering'} > Programme`,
          collegeId: p.collegeId,
          programmeId: p.id,
        });
      }
    });

    // 1. Search Courses
    courses.forEach((c) => {
      const normalizedCode = c.code.toLowerCase().replace(/\s+/g, '');
      const normalizedQ = rawQ.replace(/\s+/g, '');
      const match =
        c.code.toLowerCase().includes(rawQ) ||
        normalizedCode.includes(normalizedQ) ||
        c.name.toLowerCase().includes(rawQ) ||
        c.description.toLowerCase().includes(rawQ) ||
        (isKnustQuery && c.universityId === 'knust' && ['course-me351', 'course-me451', 'course-me251', 'course-math151'].includes(c.id));

      if (match) {
        results.push({
          id: `search-course-${c.id}`,
          type: 'course',
          title: `${c.code} — ${c.name}`,
          subtitle: `KNUST · ${c.creditHours} Credit Hours · Level ${c.level} · Sem ${c.semester}`,
          hierarchyPath: `KNUST > College of Engineering > Level ${c.level}`,
          courseId: c.id,
          courseCode: c.code,
          actionTab: 'overview',
        });
      }

      // Search attached Videos inside course
      c.videos.forEach((v) => {
        if (
          v.title.toLowerCase().includes(rawQ) ||
          v.topic.toLowerCase().includes(rawQ) ||
          v.description.toLowerCase().includes(rawQ)
        ) {
          results.push({
            id: `search-vid-${v.id}`,
            type: 'video',
            title: v.title,
            subtitle: `${c.code} · Duration ${v.duration} · ${v.instructor}`,
            hierarchyPath: `KNUST > Engineering > ${c.code} > Videos`,
            courseId: c.id,
            courseCode: c.code,
            actionTab: 'videos',
          });
        }
      });

      // Search attached Past Questions inside course
      c.pastQuestions.forEach((pq) => {
        if (
          pq.title.toLowerCase().includes(rawQ) ||
          pq.topics.some((t) => t.toLowerCase().includes(rawQ)) ||
          pq.questions.some((item) => item.questionText.toLowerCase().includes(rawQ))
        ) {
          results.push({
            id: `search-pq-${pq.id}`,
            type: 'past_question',
            title: `${c.code} — ${pq.title}`,
            subtitle: `${pq.examType} · ${pq.questionsCount} Questions with Worked Solutions`,
            hierarchyPath: `KNUST > Engineering > ${c.code} > Past Questions`,
            courseId: c.id,
            courseCode: c.code,
            actionTab: 'pastQuestions',
          });
        }
      });

      // Search attached Materials inside course
      c.materials.forEach((m) => {
        if (m.title.toLowerCase().includes(rawQ) || m.category.toLowerCase().includes(rawQ)) {
          results.push({
            id: `search-mat-${m.id}`,
            type: 'material',
            title: m.title,
            subtitle: `${c.code} · ${m.category} (${m.fileFormat} · ${m.fileSize})`,
            hierarchyPath: `KNUST > Engineering > ${c.code} > Materials`,
            courseId: c.id,
            courseCode: c.code,
            actionTab: 'materials',
          });
        }
      });
    });

    // 2. Search Tutors
    tutors.forEach((t) => {
      if (
        t.name.toLowerCase().includes(rawQ) ||
        t.title.toLowerCase().includes(rawQ) ||
        t.specialization.some((s) => s.toLowerCase().includes(rawQ))
      ) {
        results.push({
          id: `search-tutor-${t.id}`,
          type: 'tutor',
          title: t.name,
          subtitle: `${t.title} · ${t.specialization.slice(0, 2).join(', ')}`,
          hierarchyPath: `KNUST > Engineering > Tutors`,
          tutorId: t.id,
          actionTab: 'tutors',
        });
      }
    });

    return results.slice(0, 20);
  };

  const toggleUserRole = () => {
    setCurrentUser((prev) => ({
      ...prev,
      role: prev.role === 'student' ? 'admin' : 'student',
    }));
  };

  return (
    <AcademicContext.Provider
      value={{
        viewMode,
        selectedUniversityId,
        selectedCollegeId,
        selectedProgrammeId,
        selectedLevel,
        selectedSemester,
        selectedCourseId,
        activeCourseTab,
        navigateToHome,
        navigateToUniversity,
        navigateToColleges,
        navigateToCollege,
        navigateToProgramme,
        navigateToLevel,
        navigateToCourses,
        navigateToCourse,
        navigateToDashboard,
        navigateToTutors,
        navigateToPricing,
        navigateToAdmin,
        setSelectedUniversityId,
        setSelectedSemester,
        setActiveCourseTab,
        universities,
        colleges,
        programmes,
        courses,
        tutors,
        studentProgress,
        currentUniversity,
        currentCollege,
        currentProgramme,
        currentCourse,
        getCoursesForLevelAndSemester,
        getTutorsForCourse,
        isCourseEnrolled,
        getCourseProgress,
        enrollInCourse,
        toggleSaveMaterial,
        markVideoCompleted,
        submitAssignmentWork,
        addDiscussionPost,
        upvoteDiscussion,
        createCourse,
        addCourseMaterial,
        addTutorialVideo,
        addCourseAssignment,
        addPastQuestion,
        assignTutorToCourse,
        activeVideo,
        setActiveVideo,
        activeDocument,
        setActiveDocument,
        activeSolution,
        setActiveSolution,
        bookingTutor,
        setBookingTutor,
        submittingAssignment,
        setSubmittingAssignment,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        searchAcademic,
        currentUser,
        toggleUserRole,
      }}
    >
      {children}
    </AcademicContext.Provider>
  );
};

export const useAcademic = () => {
  const context = useContext(AcademicContext);
  if (!context) {
    throw new Error('useAcademic must be used within an AcademicProvider');
  }
  return context;
};
