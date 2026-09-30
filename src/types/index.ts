export type ViewMode = 
  | 'home' 
  | 'university'
  | 'colleges' 
  | 'college' 
  | 'programme' 
  | 'level' 
  | 'courses'
  | 'course' 
  | 'dashboard' 
  | 'tutors'
  | 'pricing'
  | 'admin';

export interface University {
  id: string;
  name: string;
  shortName: string;
  location: string;
  country: string;
  badge?: string;
  collegesCount: number;
  programmesCount: number;
  aliases?: string[];
}

export interface College {
  id: string;
  universityId: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  image: string;
  programmesCount: number;
  highlightDepartments: string[];
}

export interface Programme {
  id: string;
  collegeId: string;
  universityId: string;
  name: string;
  code: string;
  degreeType: string;
  durationYears: number;
  description: string;
  overviewText: string;
  careerProspects: string[];
  accreditation: string;
  image: string;
  levels: number[]; // [100, 200, 300, 400]
}

export interface CourseMaterial {
  id: string;
  courseId: string;
  title: string;
  category: 'Course Outline' | 'Lecture Notes' | 'Formula Sheet' | 'Recommended Textbook' | 'Study Guide' | 'Lab Manual';
  fileFormat: 'PDF' | 'DOCX' | 'EPUB';
  fileSize: string;
  uploadDate: string;
  downloadsCount: number;
  downloadUrl?: string;
  author: string;
  description?: string;
}

export interface TutorialVideo {
  id: string;
  courseId: string;
  title: string;
  topic: string;
  order: number;
  duration: string; // e.g. "24:18"
  instructor: string;
  viewsCount: number;
  videoUrl?: string;
  thumbnailUrl?: string;
  description: string;
  keyTakeaways: string[];
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  assignedDate: string;
  dueDate: string;
  points: number;
  status: 'Open' | 'Submitted' | 'Graded' | 'Overdue';
  description: string;
  submissionRequirements: string;
  attachedMaterialId?: string;
  userSubmission?: {
    submittedAt: string;
    fileName: string;
    grade?: string;
    feedback?: string;
  };
}

export interface PastQuestion {
  id: string;
  courseId: string;
  year: number;
  semester: 1 | 2;
  examType: 'End of Semester Examination' | 'Mid-Semester Examination' | 'Special Resit Examination';
  title: string;
  topics: string[];
  totalMarks: number;
  downloadCount: number;
  questionsCount: number;
  questions: {
    questionNumber: number;
    questionText: string;
    marks: number;
    solutionId?: string;
    solutionText?: string;
    solutionSteps?: string[];
  }[];
}

export interface Tutor {
  id: string;
  name: string;
  title: string; // e.g. "Senior Mechanical Engineering Tutor"
  university: string;
  avatar: string;
  rating: number; // e.g. 4.9
  reviewsCount: number;
  studentsCount: number;
  hourlyRateGHS: number;
  isOnline: boolean;
  coursesTaught: string[]; // course IDs
  specialization: string[];
  bio: string;
  education: string;
  availableSlots: string[];
}

export interface CourseAnnouncement {
  id: string;
  courseId: string;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  content: string;
  priority: 'normal' | 'important' | 'urgent';
}

export interface CourseDiscussion {
  id: string;
  courseId: string;
  title: string;
  author: string;
  authorAvatar: string;
  date: string;
  content: string;
  upvotes: number;
  repliesCount: number;
  isAnswered: boolean;
  tags: string[];
}

export interface Course {
  id: string;
  universityId: string;
  collegeId: string;
  programmeId: string;
  level: number; // 100, 200, 300, 400
  semester: 1 | 2;
  code: string; // e.g. "ME 351"
  name: string; // e.g. "Dynamics of Machinery"
  creditHours: number;
  description: string;
  longOverview: string;
  coverImage: string;
  iconName: string;
  lecturerName: string;
  lecturerOffice?: string;
  prerequisites?: string[];
  syllabusPoints: string[];
  // Attached hierarchical academic assets
  materials: CourseMaterial[];
  videos: TutorialVideo[];
  assignments: Assignment[];
  pastQuestions: PastQuestion[];
  tutorIds: string[];
  announcements: CourseAnnouncement[];
  discussions: CourseDiscussion[];
}

export interface StudentCourseProgress {
  courseId: string;
  enrolledAt: string;
  progressPercent: number;
  lastAccessed: string;
  completedVideoIds: string[];
  submittedAssignmentIds: string[];
  savedMaterialIds: string[];
}

export interface SearchResultItem {
  id: string;
  type: 'university' | 'college' | 'programme' | 'course' | 'video' | 'past_question' | 'material' | 'tutor';
  title: string;
  subtitle: string;
  hierarchyPath: string;
  universityId?: string;
  collegeId?: string;
  programmeId?: string;
  courseId?: string;
  courseCode?: string;
  actionTab?: 'overview' | 'materials' | 'videos' | 'assignments' | 'pastQuestions' | 'solutions' | 'tutors';
  tutorId?: string;
}
