import fs from 'fs';
import path from 'path';
import { MECHANICAL_ENGINEERING_COURSES } from '../src/data/mechanicalEngineeringCourses';
import { Course } from '../src/types';

const TUTOR_POOL = [
  'tutor-francis-appiah',
  'tutor-raymond-kwame',
  'tutor-raphael-mensah',
  'tutor-sherlina-amankwah'
];

const TUTOR_NAMES: Record<string, string> = {
  'tutor-francis-appiah': 'Francis Appiah',
  'tutor-raymond-kwame': 'Raymond Kwame',
  'tutor-raphael-mensah': 'Raphael Mensah',
  'tutor-sherlina-amankwah': 'Sherlina Amankwah',
};

const enrichedCourses: Course[] = MECHANICAL_ENGINEERING_COURSES.map((course, idx) => {
  const c = { ...course };
  const baseTutor = TUTOR_POOL[idx % TUTOR_POOL.length];
  const secondTutor = TUTOR_POOL[(idx + 1) % TUTOR_POOL.length];

  // Ensure tutors
  if (!c.tutorIds || c.tutorIds.length === 0) {
    c.tutorIds = [baseTutor, secondTutor];
  }

  // Ensure materials
  if (!c.materials || c.materials.length === 0) {
    c.materials = [
      {
        id: `mat-${c.code.toLowerCase().replace(/\s+/g, '')}-syllabus`,
        courseId: c.id,
        title: `${c.code}: Course Syllabus & Lecture Outline`,
        category: 'Course Outline',
        fileFormat: 'PDF',
        fileSize: '450 KB',
        uploadDate: 'Sep 12, 2026',
        downloadsCount: 340 + (idx * 17) % 250,
        author: c.lecturerName || 'Department of Mechanical Engineering',
        description: `Complete syllabus, grading criteria, and recommended textbooks for ${c.name}.`,
      },
      {
        id: `mat-${c.code.toLowerCase().replace(/\s+/g, '')}-notes`,
        courseId: c.id,
        title: `${c.name} Comprehensive Lecture Notes & Problem Sets`,
        category: 'Lecture Notes',
        fileFormat: 'PDF',
        fileSize: `${(2.2 + ((idx * 0.3) % 2.5)).toFixed(1)} MB`,
        uploadDate: 'Sep 18, 2026',
        downloadsCount: 480 + (idx * 23) % 350,
        author: c.lecturerName || 'KNUST Mechanical Faculty',
        description: `In-depth derivations, engineering formulas, and worked examples covering ${c.syllabusPoints[0] || 'core topics'}.`,
      },
      {
        id: `mat-${c.code.toLowerCase().replace(/\s+/g, '')}-formula`,
        courseId: c.id,
        title: `${c.code} Quick Reference Formula & Data Sheet`,
        category: 'Formula Sheet',
        fileFormat: 'PDF',
        fileSize: '620 KB',
        uploadDate: 'Sep 25, 2026',
        downloadsCount: 610 + (idx * 19) % 200,
        author: 'KNUST Engineering Student Board',
        description: `Exam-approved equation summaries, unit conversion factors, and material property tables.`,
      },
    ];
  }

  // Ensure videos
  if (!c.videos || c.videos.length === 0) {
    const inst = TUTOR_NAMES[c.tutorIds[0]] || 'Francis Appiah';
    const topic1 = c.syllabusPoints[0] || 'Fundamentals';
    const topic2 = c.syllabusPoints[1] || 'Applied Analysis';

    c.videos = [
      {
        id: `vid-${c.code.toLowerCase().replace(/\s+/g, '')}-01`,
        courseId: c.id,
        title: `01 — ${c.code} Foundations: ${topic1}`,
        topic: topic1,
        order: 1,
        duration: `${20 + (idx % 12)}:${15 + (idx % 40)}`,
        instructor: inst,
        viewsCount: 650 + (idx * 43) % 400,
        description: `Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.`,
        keyTakeaways: [
          `Fundamental concepts and assumptions in ${topic1}`,
          `Derivation of key governing relations`,
          `Solving standard examination numerical problems`,
        ],
      },
      {
        id: `vid-${c.code.toLowerCase().replace(/\s+/g, '')}-02`,
        courseId: c.id,
        title: `02 — Problem Solving & Exam Walkthrough: ${topic2}`,
        topic: topic2,
        order: 2,
        duration: `${24 + (idx % 10)}:${20 + (idx % 35)}`,
        instructor: TUTOR_NAMES[c.tutorIds[1] || c.tutorIds[0]] || 'Raymond Kwame',
        viewsCount: 520 + (idx * 31) % 350,
        description: `Detailed solutions to past exam questions and assignment problems with practical tips for high scores.`,
        keyTakeaways: [
          `Recognizing problem patterns in KNUST examinations`,
          `Error avoidance in intermediate numerical calculations`,
        ],
      },
    ];
  }

  // Ensure assignments & fix property types
  if (!c.assignments || c.assignments.length === 0) {
    c.assignments = [
      {
        id: `asg-${c.code.toLowerCase().replace(/\s+/g, '')}-01`,
        courseId: c.id,
        title: `Assignment 1: ${c.syllabusPoints[0] || c.name} Problem Set`,
        assignedDate: 'Sep 25, 2026',
        dueDate: 'Oct 20, 2026',
        points: 100,
        status: 'Open',
        description: `Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for ${c.name}.`,
        submissionRequirements: 'Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page.',
      },
    ];
  } else {
    // Sanitize any existing assignment
    c.assignments = c.assignments.map((asg: any) => {
      const copy = { ...asg };
      if ('totalPoints' in copy) {
        copy.points = copy.points || copy.totalPoints || 100;
        delete copy.totalPoints;
      }
      if (!copy.status) copy.status = 'Open';
      if (!copy.assignedDate) copy.assignedDate = 'Sep 25, 2026';
      if (!copy.submissionRequirements) {
        copy.submissionRequirements = 'Submit handwritten or typed calculations as a single PDF with index number.';
      }
      return copy;
    });
  }

  // Ensure past questions with worked solutions & fix property types
  if (!c.pastQuestions || c.pastQuestions.length === 0) {
    const qTopic = c.syllabusPoints[0] || 'Core Theory';
    c.pastQuestions = [
      {
        id: `pq-${c.code.toLowerCase().replace(/\s+/g, '')}-2024`,
        courseId: c.id,
        year: 2024,
        semester: c.semester,
        examType: 'End of Semester Examination',
        title: `2024 End of Semester Examination — ${c.code}`,
        topics: [qTopic, c.syllabusPoints[1] || 'Design Calculations'],
        totalMarks: 100,
        downloadCount: 520 + (idx * 27) % 300,
        questionsCount: 3,
        questions: [
          {
            questionNumber: 1,
            marks: 25,
            questionText: `(a) Clearly state the fundamental governing equations and assumptions for ${qTopic} in ${c.name}.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.`,
            solutionId: `sol-${c.code.toLowerCase().replace(/\s+/g, '')}-2024-q1`,
            solutionText: `Applying the standard KNUST design formulation for ${c.code}:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.`,
            solutionSteps: [
              `Step 1: Write governing balance equation for ${qTopic}`,
              `Step 2: Substitute given operational values into dimensional equation`,
              `Step 3: Compute nominal stress / response parameter = 78.4 MPa`,
              `Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)`,
            ],
          },
        ],
      },
    ];
  } else {
    // Sanitize past questions
    c.pastQuestions = c.pastQuestions.map((pq: any) => {
      const copy = { ...pq };
      if (!copy.totalMarks) copy.totalMarks = 100;
      if (!copy.questionsCount && copy.questions) copy.questionsCount = copy.questions.length;
      return copy;
    });
  }

  // Ensure announcements & fix priorities
  if (!c.announcements || c.announcements.length === 0) {
    c.announcements = [
      {
        id: `ann-${c.code.toLowerCase().replace(/\s+/g, '')}-1`,
        courseId: c.id,
        title: `Welcome to ${c.code} (${c.name})`,
        author: c.lecturerName || 'Course Coordinator',
        authorRole: 'Course Lecturer',
        date: 'Sep 15, 2026',
        content: `Welcome to the semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.`,
        priority: 'normal',
      },
    ];
  } else {
    c.announcements = c.announcements.map((ann: any) => {
      const copy = { ...ann };
      if (copy.priority === 'high') copy.priority = 'important';
      if (!['normal', 'important', 'urgent'].includes(copy.priority)) {
        copy.priority = 'normal';
      }
      return copy;
    });
  }

  // Ensure discussions
  if (!c.discussions || c.discussions.length === 0) {
    c.discussions = [
      {
        id: `disc-${c.code.toLowerCase().replace(/\s+/g, '')}-1`,
        courseId: c.id,
        title: `Key takeaways and tips for ${c.code} exams`,
        author: 'Kofi Mensah',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
        date: 'Sep 28, 2026',
        content: `What are the most frequent numerical questions asked in KNUST examinations for ${c.code}? Any advice from seniors?`,
        upvotes: 8 + (idx % 10),
        repliesCount: 3,
        isAnswered: true,
        tags: [c.code, 'Exam Prep', 'Study Tips'],
      },
    ];
  }

  return c;
});

// Output TypeScript file
const fileContent = `import { Course } from '../types';

export const MECHANICAL_ENGINEERING_COURSES: Course[] = ${JSON.stringify(enrichedCourses, null, 2)};
`;

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/mechanicalEngineeringCourses.ts'),
  fileContent,
  'utf8'
);

console.log(`Successfully enriched and sanitized all ${enrichedCourses.length} courses!`);
