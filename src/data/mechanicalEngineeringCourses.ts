import { Course } from '../types';

export const MECHANICAL_ENGINEERING_COURSES: Course[] = [
  {
    "id": "course-math151",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 100,
    "semester": 1,
    "code": "MATH 151",
    "name": "Mathematics I (Algebra & Calculus)",
    "creditHours": 3,
    "description": "Foundational algebra, trigonometry, differential calculus, functions, limits, and applications of derivatives for engineering disciplines.",
    "longOverview": "MATH 151 provides the core mathematical foundation for engineering analysis at KNUST. Topics include sets, complex numbers, coordinate geometry, limits and continuity, differentiation techniques, curve sketching, and applications in kinematic rates of change.",
    "coverImage": "/src/assets/images/harcourt_hero_banner_1790747187384.jpg",
    "iconName": "Activity",
    "lecturerName": "Dr. Joseph Ackora-Prah",
    "lecturerOffice": "Mathematics Block, Room 102",
    "prerequisites": [
      "WASSCE Elective Mathematics"
    ],
    "syllabusPoints": [
      "Complex numbers in Cartesian and polar form, De Moivre’s Theorem",
      "Polynomial functions, roots, and partial fractions",
      "Limits, continuity, and differentiability of single-variable functions",
      "Rules of differentiation: product, quotient, and chain rule",
      "Applications of derivatives: maxima/minima, tangents, normals, and rates of change"
    ],
    "tutorIds": [
      "tutor-sherlina-amankwah",
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-math151-outline",
        "courseId": "course-math151",
        "title": "MATH 151 Course Syllabus & Marking Scheme",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "310 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 520,
        "author": "Department of Mathematics"
      },
      {
        "id": "mat-math151-diff",
        "courseId": "course-math151",
        "title": "Differential Calculus & Derivatives Comprehensive Manual",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.8 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 680,
        "author": "Dr. Joseph Ackora-Prah"
      },
      {
        "id": "mat-math151-formula",
        "courseId": "course-math151",
        "title": "Trigonometry & Calculus Formula Quick Reference",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 22, 2026",
        "downloadsCount": 890,
        "author": "KNUST Mathematics Faculty"
      }
    ],
    "videos": [
      {
        "id": "vid-math151-01",
        "courseId": "course-math151",
        "title": "01 — Complex Numbers & Argand Diagrams Explained",
        "topic": "Complex Numbers",
        "order": 1,
        "duration": "22:15",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 940,
        "description": "Mastering polar forms, Euler representation, and roots of unity for electrical and mechanical applications.",
        "keyTakeaways": [
          "Modulus and argument",
          "De Moivre multiplication and division"
        ]
      },
      {
        "id": "vid-math151-02",
        "courseId": "course-math151",
        "title": "02 — Limits, L’Hôpital’s Rule & Rate of Change",
        "topic": "Calculus",
        "order": 2,
        "duration": "26:40",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 820,
        "description": "Evaluating indeterminate forms 0/0 and inf/inf in engineering problems.",
        "keyTakeaways": [
          "L’Hôpital’s rule applications",
          "Continuity proofs"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-math151-01",
        "courseId": "course-math151",
        "title": "Problem Set 1: Complex Algebra & Curve Optimization",
        "description": "Solve problem 1 through 10 on optimization of cylindrical pressure vessels and complex impedance.",
        "dueDate": "October 15, 2026",
        "status": "Open",
        "assignedDate": "Sep 25, 2026",
        "points": 100,
        "submissionRequirements": "Submit handwritten or typed calculations as a single PDF with index number."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-math151-2024",
        "courseId": "course-math151",
        "title": "2024 End of Semester Examination — MATH 151",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "downloadCount": 780,
        "topics": [
          "Complex Numbers",
          "Differential Calculus",
          "Partial Fractions"
        ],
        "questionsCount": 4,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Given the complex number z = 1 + i*sqrt(3), determine z^6 using De Moivre’s Theorem and express your answer in rectangular form.",
            "solutionText": "Convert z to polar form: r = sqrt(1^2 + (sqrt(3))^2) = 2. Argument theta = arctan(sqrt(3)/1) = pi/3 rad (60 deg). Hence z = 2*(cos(pi/3) + i*sin(pi/3)). Raising to power 6 gives z^6 = 2^6*(cos(6*pi/3) + i*sin(6*pi/3)) = 64*(cos(2*pi) + i*sin(2*pi)) = 64*(1 + 0) = 64.",
            "solutionSteps": [
              "Step 1: Calculate modulus r = 2",
              "Step 2: Calculate principal argument theta = pi/3",
              "Step 3: Apply z^n = r^n(cos(n*theta) + i*sin(n*theta))",
              "Step 4: z^6 = 64*(cos 2pi + i sin 2pi) = 64"
            ]
          }
        ],
        "totalMarks": 100
      }
    ],
    "announcements": [
      {
        "id": "ann-math151-01",
        "courseId": "course-math151",
        "title": "Mid-Semester Examination Schedule",
        "author": "Dr. Joseph Ackora-Prah",
        "authorRole": "Course Lecturer",
        "date": "Sep 28, 2026",
        "content": "Mid-semester exams will take place at the Great Hall on Saturday Oct 24 at 8:00 AM.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-math151-1",
        "courseId": "course-math151",
        "title": "Key takeaways and tips for MATH 151 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for MATH 151? Any advice from seniors?",
        "upvotes": 8,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "MATH 151",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me159",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 100,
    "semester": 1,
    "code": "ME 159",
    "name": "Applied Electricity & Circuit Analysis",
    "creditHours": 3,
    "description": "Electric circuit theorems, DC/AC circuits, electromagnetism, transformers, three-phase power, and electrical machinery fundamentals for mechanical engineers.",
    "longOverview": "ME 159 introduces mechanical engineering students to electro-mechanical energy conversion, DC circuit network analysis (Thevenin, Norton, Superposition), single and three-phase AC circuits, power factor correction, and basic electric motor characteristics.",
    "coverImage": "/src/assets/images/college_engineering_banner_1790747200775.jpg",
    "iconName": "Activity",
    "lecturerName": "Ing. Dr. Kwabena Adjei",
    "lecturerOffice": "Electrical Engineering Block, Room 210",
    "prerequisites": [
      "High School Physics"
    ],
    "syllabusPoints": [
      "Ohm’s law, Kirchhoff’s Current & Voltage Laws (KCL & KVL)",
      "Network theorems: Thevenin, Norton, Maximum Power Transfer",
      "Sinusoidal steady-state AC analysis, phasors, and complex impedance",
      "Real, reactive, and apparent power in AC circuits; power factor correction",
      "Principles of single-phase and three-phase induction motors"
    ],
    "tutorIds": [
      "tutor-raymond-kwame",
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me159-theorems",
        "courseId": "course-me159",
        "title": "DC Network Analysis & Theorems (Thevenin & Norton)",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "2.5 MB",
        "uploadDate": "Sep 15, 2026",
        "downloadsCount": 420,
        "author": "Ing. Dr. Kwabena Adjei"
      },
      {
        "id": "mat-me159-ac",
        "courseId": "course-me159",
        "title": "Three-Phase AC Systems & Power Factor Correction Guide",
        "category": "Study Guide",
        "fileFormat": "PDF",
        "fileSize": "1.9 MB",
        "uploadDate": "Sep 20, 2026",
        "downloadsCount": 380,
        "author": "KNUST Electrical Faculty"
      }
    ],
    "videos": [
      {
        "id": "vid-me159-01",
        "courseId": "course-me159",
        "title": "01 — Thevenin’s & Norton’s Theorems with Worked Examples",
        "topic": "Network Theorems",
        "order": 1,
        "duration": "24:10",
        "instructor": "Raymond Kwame",
        "viewsCount": 710,
        "description": "Simplifying complex bridge circuits into single Thevenin voltage and resistance.",
        "keyTakeaways": [
          "Open-circuit voltage Vth calculation",
          "Short-circuit current and Rth"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me159-01",
        "courseId": "course-me159",
        "title": "Assignment 1: DC Mesh & Nodal Circuit Analysis",
        "description": "Determine branch currents in the bridge circuit using both Mesh analysis and Thevenin equivalent.",
        "dueDate": "October 20, 2026",
        "status": "Open",
        "assignedDate": "Sep 26, 2026",
        "points": 50,
        "submissionRequirements": "Submit handwritten or typed calculations as a single PDF with index number."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me159-2024",
        "courseId": "course-me159",
        "title": "2024 End of Semester Exam — ME 159 Applied Electricity",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "downloadCount": 650,
        "topics": [
          "Thevenin Theorem",
          "AC Power",
          "3-Phase Systems"
        ],
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 20,
            "questionText": "A balanced 415 V, 50 Hz, 3-phase delta-connected load draws a line current of 25 A at 0.8 lagging power factor. Calculate the phase current, total active power (P), and total reactive power (Q).",
            "solutionText": "For delta connection, Vphase = Vline = 415 V. Phase current Iphase = Iline / sqrt(3) = 25 / 1.732 = 14.43 A. Active power P = sqrt(3) * Vline * Iline * cos(phi) = sqrt(3) * 415 * 25 * 0.8 = 14,376 W = 14.38 kW. Reactive power Q = sqrt(3) * Vline * Iline * sin(phi) = sqrt(3) * 415 * 25 * 0.6 = 10.78 kVAR.",
            "solutionSteps": [
              "Step 1: Calculate phase current Iphase = 14.43 A",
              "Step 2: Active power P = 14.38 kW",
              "Step 3: Reactive power Q = 10.78 kVAR"
            ]
          }
        ],
        "totalMarks": 100
      }
    ],
    "announcements": [
      {
        "id": "ann-me159-1",
        "courseId": "course-me159",
        "title": "Welcome to ME 159 (Applied Electricity & Circuit Analysis)",
        "author": "Ing. Dr. Kwabena Adjei",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me159-2",
        "courseId": "course-me159",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raymond Kwame",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me159-1",
        "courseId": "course-me159",
        "title": "Key takeaways and tips for ME 159 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 159? Any advice from seniors?",
        "upvotes": 9,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 159",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me161",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 100,
    "semester": 1,
    "code": "ME 161",
    "name": "Engineering Drawing I",
    "creditHours": 2,
    "description": "Technical lettering, orthographic projections, isometric and oblique drawings, auxiliary views, and sectioning principles.",
    "longOverview": "ME 161 is the fundamental graphical language for mechanical engineers. Covers ISO standards for engineering drawing, dimensioning, 1st and 3rd angle orthographic projections, sectioning conventions, and isometric projections from given multi-views.",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Wrench",
    "lecturerName": "Dr. Frank Okyere",
    "lecturerOffice": "Drawing Studio, Engineering Faculty",
    "prerequisites": [
      "None"
    ],
    "syllabusPoints": [
      "Instruments, sheet layout, line types, lettering, and geometric constructions",
      "Principles of first-angle and third-angle orthographic projections",
      "Sectioning: full sections, half sections, and offset sections",
      "Isometric and oblique pictorial drawing techniques",
      "Standard dimensioning rules, limits, fits, and surface finish symbols"
    ],
    "tutorIds": [
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me161-guide",
        "courseId": "course-me161",
        "title": "Manual of Engineering Drawing Standards & Symbols (ISO)",
        "category": "Study Guide",
        "fileFormat": "PDF",
        "fileSize": "4.2 MB",
        "uploadDate": "Sep 14, 2026",
        "downloadsCount": 560,
        "author": "KNUST Mechanical Engineering Dept"
      }
    ],
    "videos": [
      {
        "id": "vid-me161-01",
        "courseId": "course-me161",
        "title": "01 — 1st Angle vs 3rd Angle Orthographic Projection",
        "topic": "Orthographic Projections",
        "order": 1,
        "duration": "19:45",
        "instructor": "Francis Appiah",
        "viewsCount": 880,
        "description": "Clear step-by-step visual demonstration of creating front, plan, and end views.",
        "keyTakeaways": [
          "Projection plane rules",
          "Hidden line conventions"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me161-01",
        "courseId": "course-me161",
        "title": "Assignment 1: Instruments, sheet layout, line types, lettering, and geometric constructions Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Engineering Drawing I.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me161-2024",
        "courseId": "course-me161",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 161",
        "topics": [
          "Instruments, sheet layout, line types, lettering, and geometric constructions",
          "Principles of first-angle and third-angle orthographic projections"
        ],
        "totalMarks": 100,
        "downloadCount": 574,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Instruments, sheet layout, line types, lettering, and geometric constructions in Engineering Drawing I.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me161-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 161:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Instruments, sheet layout, line types, lettering, and geometric constructions",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me161-2023",
        "courseId": "course-me161",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 161",
        "topics": [
          "Principles of first-angle and third-angle orthographic projections",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 498,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Engineering Drawing I in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me161-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me161-1",
        "courseId": "course-me161",
        "title": "Welcome to ME 161 (Engineering Drawing I)",
        "author": "Dr. Frank Okyere",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me161-2",
        "courseId": "course-me161",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me161-1",
        "courseId": "course-me161",
        "title": "Key takeaways and tips for ME 161 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 161? Any advice from seniors?",
        "upvotes": 10,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 161",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me163",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 100,
    "semester": 1,
    "code": "ME 163",
    "name": "Workshop Technology & Mechanical Practice I",
    "creditHours": 2,
    "description": "Hands-on training in machine shop practices, bench work, fitting, drilling, lathe turning, metal cutting tools, and industrial safety.",
    "longOverview": "Practical workshop instruction conducted in the KNUST Central Engineering Workshop. Students gain hands-on competency in hand tools, precision measurement (vernier calipers, micrometers), shaping, centre lathe operation, and safety standards.",
    "coverImage": "/src/assets/images/college_engineering_banner_1790747200775.jpg",
    "iconName": "Wrench",
    "lecturerName": "Ing. Samuel K. Asante",
    "lecturerOffice": "Central Workshop Complex",
    "prerequisites": [
      "None"
    ],
    "syllabusPoints": [
      "General workshop safety rules, PPE, and fire hazard precautions",
      "Bench work and fitting: sawing, filing, tapping, and reaming",
      "Linear and angular measurement using vernier instruments and dial gauges",
      "Centre lathe components, work holding, facing, cylindrical turning, and parting"
    ],
    "tutorIds": [
      "tutor-sherlina-amankwah"
    ],
    "materials": [
      {
        "id": "mat-me163-safety",
        "courseId": "course-me163",
        "title": "Workshop Safety Protocols & Hand Tools Manual",
        "category": "Lab Manual",
        "fileFormat": "PDF",
        "fileSize": "1.8 MB",
        "uploadDate": "Sep 10, 2026",
        "downloadsCount": 310,
        "author": "KNUST Central Workshop"
      }
    ],
    "videos": [
      {
        "id": "vid-me163-01",
        "courseId": "course-me163",
        "title": "01 — ME 163 Foundations: General workshop safety rules, PPE, and fire hazard precautions",
        "topic": "General workshop safety rules, PPE, and fire hazard precautions",
        "order": 1,
        "duration": "23:18",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 779,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in General workshop safety rules, PPE, and fire hazard precautions",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me163-02",
        "courseId": "course-me163",
        "title": "02 — Problem Solving & Exam Walkthrough: Bench work and fitting: sawing, filing, tapping, and reaming",
        "topic": "Bench work and fitting: sawing, filing, tapping, and reaming",
        "order": 2,
        "duration": "27:23",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 613,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me163-01",
        "courseId": "course-me163",
        "title": "Assignment 1: General workshop safety rules, PPE, and fire hazard precautions Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Workshop Technology & Mechanical Practice I.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me163-2024",
        "courseId": "course-me163",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 163",
        "topics": [
          "General workshop safety rules, PPE, and fire hazard precautions",
          "Bench work and fitting: sawing, filing, tapping, and reaming"
        ],
        "totalMarks": 100,
        "downloadCount": 601,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for General workshop safety rules, PPE, and fire hazard precautions in Workshop Technology & Mechanical Practice I.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me163-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 163:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for General workshop safety rules, PPE, and fire hazard precautions",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me163-2023",
        "courseId": "course-me163",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 163",
        "topics": [
          "Bench work and fitting: sawing, filing, tapping, and reaming",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 517,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Workshop Technology & Mechanical Practice I in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me163-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me163-1",
        "courseId": "course-me163",
        "title": "Welcome to ME 163 (Workshop Technology & Mechanical Practice I)",
        "author": "Ing. Samuel K. Asante",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me163-2",
        "courseId": "course-me163",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Sherlina Amankwah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me163-1",
        "courseId": "course-me163",
        "title": "Key takeaways and tips for ME 163 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 163? Any advice from seniors?",
        "upvotes": 11,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 163",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me165",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 100,
    "semester": 1,
    "code": "ME 165",
    "name": "Introduction to Mechanical Engineering",
    "creditHours": 2,
    "description": "Overview of mechanical engineering professions, thermo-fluids, mechanics, automotive, energy conversion, ethics, and career orientation.",
    "longOverview": "A comprehensive orientation introducing historical developments in mechanical engineering, Ghana’s industrial landscape (mining, oil & gas, energy), professional ethics (GhIE), and problem-solving methodologies.",
    "coverImage": "/src/assets/images/harcourt_hero_banner_1790747187384.jpg",
    "iconName": "BookOpen",
    "lecturerName": "Prof. Kwaku Boateng",
    "lecturerOffice": "Engineering Block B, Room 204",
    "prerequisites": [
      "None"
    ],
    "syllabusPoints": [
      "Scope and multidisciplinary branches of mechanical engineering",
      "Engineering design process: identification, modeling, prototyping, testing",
      "Units and dimensions: SI units and dimensional consistency in equations",
      "Professional engineering bodies in Ghana (GhIE) and global ethics"
    ],
    "tutorIds": [
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me165-syllabus",
        "courseId": "course-me165",
        "title": "ME 165: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 408,
        "author": "Prof. Kwaku Boateng",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Introduction to Mechanical Engineering."
      },
      {
        "id": "mat-me165-notes",
        "courseId": "course-me165",
        "title": "Introduction to Mechanical Engineering Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.4 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 572,
        "author": "Prof. Kwaku Boateng",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Scope and multidisciplinary branches of mechanical engineering."
      },
      {
        "id": "mat-me165-formula",
        "courseId": "course-me165",
        "title": "ME 165 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 686,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me165-01",
        "courseId": "course-me165",
        "title": "01 — ME 165 Foundations: Scope and multidisciplinary branches of mechanical engineering",
        "topic": "Scope and multidisciplinary branches of mechanical engineering",
        "order": 1,
        "duration": "24:19",
        "instructor": "Francis Appiah",
        "viewsCount": 822,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Scope and multidisciplinary branches of mechanical engineering",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me165-02",
        "courseId": "course-me165",
        "title": "02 — Problem Solving & Exam Walkthrough: Engineering design process: identification, modeling, prototyping, testing",
        "topic": "Engineering design process: identification, modeling, prototyping, testing",
        "order": 2,
        "duration": "28:24",
        "instructor": "Francis Appiah",
        "viewsCount": 644,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me165-01",
        "courseId": "course-me165",
        "title": "Assignment 1: Scope and multidisciplinary branches of mechanical engineering Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Introduction to Mechanical Engineering.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me165-2024",
        "courseId": "course-me165",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 165",
        "topics": [
          "Scope and multidisciplinary branches of mechanical engineering",
          "Engineering design process: identification, modeling, prototyping, testing"
        ],
        "totalMarks": 100,
        "downloadCount": 628,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Scope and multidisciplinary branches of mechanical engineering in Introduction to Mechanical Engineering.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me165-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 165:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Scope and multidisciplinary branches of mechanical engineering",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me165-2023",
        "courseId": "course-me165",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 165",
        "topics": [
          "Engineering design process: identification, modeling, prototyping, testing",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 536,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Introduction to Mechanical Engineering in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me165-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me165-1",
        "courseId": "course-me165",
        "title": "Welcome to ME 165 (Introduction to Mechanical Engineering)",
        "author": "Prof. Kwaku Boateng",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me165-2",
        "courseId": "course-me165",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me165-1",
        "courseId": "course-me165",
        "title": "Key takeaways and tips for ME 165 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 165? Any advice from seniors?",
        "upvotes": 12,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 165",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-math152",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 100,
    "semester": 2,
    "code": "MATH 152",
    "name": "Mathematics II (Integral Calculus & Vectors)",
    "creditHours": 3,
    "description": "Definite and indefinite integrals, integration techniques, applications to areas and volumes of revolution, vector algebra, dot and cross products.",
    "longOverview": "MATH 152 focuses on integral calculus techniques: substitution, parts, trigonometric integrals, partial fractions, and improper integrals. Vector algebra in 3D space, lines, planes, dot/cross products, and moments of forces.",
    "coverImage": "/src/assets/images/harcourt_hero_banner_1790747187384.jpg",
    "iconName": "Activity",
    "lecturerName": "Dr. Joseph Ackora-Prah",
    "lecturerOffice": "Mathematics Block, Room 102",
    "prerequisites": [
      "MATH 151"
    ],
    "syllabusPoints": [
      "Integration techniques: integration by parts, partial fractions, trigonometric substitution",
      "Applications of definite integrals: arc length, planar area, volume and surface of revolution",
      "Centroids and center of gravity of engineering sections using integration",
      "Vector algebra: scalar product, vector cross product, scalar triple product",
      "Equations of lines and planes in 3-dimensional Cartesian coordinates"
    ],
    "tutorIds": [
      "tutor-sherlina-amankwah",
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-math152-notes",
        "courseId": "course-math152",
        "title": "Integral Calculus & Vector Geometry Lecture Modules",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.6 MB",
        "uploadDate": "Feb 15, 2026",
        "downloadsCount": 540,
        "author": "Dr. Joseph Ackora-Prah"
      }
    ],
    "videos": [
      {
        "id": "vid-math152-01",
        "courseId": "course-math152",
        "title": "01 — Integration by Parts & Tabular Method",
        "topic": "Integration",
        "order": 1,
        "duration": "21:30",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 760,
        "description": "Simplifying repeated integration by parts using the DI differentiation-integration table.",
        "keyTakeaways": [
          "LIATE rule prioritization",
          "Tabular shortcut method"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-math152-01",
        "courseId": "course-math152",
        "title": "Assignment 1: Integration techniques: integration by parts, partial fractions, trigonometric substitution Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Mathematics II (Integral Calculus & Vectors).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-math152-2024",
        "courseId": "course-math152",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — MATH 152",
        "topics": [
          "Integration techniques: integration by parts, partial fractions, trigonometric substitution",
          "Applications of definite integrals: arc length, planar area, volume and surface of revolution"
        ],
        "totalMarks": 100,
        "downloadCount": 655,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Integration techniques: integration by parts, partial fractions, trigonometric substitution in Mathematics II (Integral Calculus & Vectors).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-math152-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for MATH 152:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Integration techniques: integration by parts, partial fractions, trigonometric substitution",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-math152-2023",
        "courseId": "course-math152",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — MATH 152",
        "topics": [
          "Applications of definite integrals: arc length, planar area, volume and surface of revolution",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 555,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Mathematics II (Integral Calculus & Vectors) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-math152-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-math152-1",
        "courseId": "course-math152",
        "title": "Welcome to MATH 152 (Mathematics II (Integral Calculus & Vectors))",
        "author": "Dr. Joseph Ackora-Prah",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-math152-2",
        "courseId": "course-math152",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Sherlina Amankwah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-math152-1",
        "courseId": "course-math152",
        "title": "Key takeaways and tips for MATH 152 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for MATH 152? Any advice from seniors?",
        "upvotes": 13,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "MATH 152",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me160",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 100,
    "semester": 2,
    "code": "ME 160",
    "name": "Basic Electronics & Semiconductor Principles",
    "creditHours": 3,
    "description": "Semiconductor physics, p-n junction diodes, BJT transistors, operational amplifiers (op-amps), logic gates, and sensor interfaces for mechanical automation.",
    "longOverview": "ME 160 covers electronic devices relevant to mechanical instrumentation. Focuses on diode rectifiers, transistor switching, operational amplifier configurations (inverting, non-inverting, summing, comparator), and digital logic gates.",
    "coverImage": "/src/assets/images/college_engineering_banner_1790747200775.jpg",
    "iconName": "Cpu",
    "lecturerName": "Dr. James Dzisi",
    "lecturerOffice": "Electrical Faculty, Room 314",
    "prerequisites": [
      "ME 159"
    ],
    "syllabusPoints": [
      "Semiconductor diodes, Zener voltage regulators, bridge rectifiers, and filtering",
      "Bipolar Junction Transistors (BJT): operating regions and transistor switching circuits",
      "Operational Amplifiers: ideal op-amp characteristics and closed-loop gain",
      "Op-amp signal conditioning for temperature (thermocouple) and pressure sensors",
      "Digital logic gates, Boolean algebra, and truth tables"
    ],
    "tutorIds": [
      "tutor-raymond-kwame"
    ],
    "materials": [
      {
        "id": "mat-me160-syllabus",
        "courseId": "course-me160",
        "title": "ME 160: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 442,
        "author": "Dr. James Dzisi",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Basic Electronics & Semiconductor Principles."
      },
      {
        "id": "mat-me160-notes",
        "courseId": "course-me160",
        "title": "Basic Electronics & Semiconductor Principles Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "4.0 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 618,
        "author": "Dr. James Dzisi",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Semiconductor diodes, Zener voltage regulators, bridge rectifiers, and filtering."
      },
      {
        "id": "mat-me160-formula",
        "courseId": "course-me160",
        "title": "ME 160 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 724,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me160-01",
        "courseId": "course-me160",
        "title": "01 — ME 160 Foundations: Semiconductor diodes, Zener voltage regulators, bridge rectifiers, and filtering",
        "topic": "Semiconductor diodes, Zener voltage regulators, bridge rectifiers, and filtering",
        "order": 1,
        "duration": "26:21",
        "instructor": "Raymond Kwame",
        "viewsCount": 908,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Semiconductor diodes, Zener voltage regulators, bridge rectifiers, and filtering",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me160-02",
        "courseId": "course-me160",
        "title": "02 — Problem Solving & Exam Walkthrough: Bipolar Junction Transistors (BJT): operating regions and transistor switching circuits",
        "topic": "Bipolar Junction Transistors (BJT): operating regions and transistor switching circuits",
        "order": 2,
        "duration": "30:26",
        "instructor": "Raymond Kwame",
        "viewsCount": 706,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me160-01",
        "courseId": "course-me160",
        "title": "Assignment 1: Semiconductor diodes, Zener voltage regulators, bridge rectifiers, and filtering Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Basic Electronics & Semiconductor Principles.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me160-2024",
        "courseId": "course-me160",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 160",
        "topics": [
          "Semiconductor diodes, Zener voltage regulators, bridge rectifiers, and filtering",
          "Bipolar Junction Transistors (BJT): operating regions and transistor switching circuits"
        ],
        "totalMarks": 100,
        "downloadCount": 682,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Semiconductor diodes, Zener voltage regulators, bridge rectifiers, and filtering in Basic Electronics & Semiconductor Principles.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me160-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 160:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Semiconductor diodes, Zener voltage regulators, bridge rectifiers, and filtering",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me160-2023",
        "courseId": "course-me160",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 160",
        "topics": [
          "Bipolar Junction Transistors (BJT): operating regions and transistor switching circuits",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 574,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Basic Electronics & Semiconductor Principles in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me160-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me160-1",
        "courseId": "course-me160",
        "title": "Welcome to ME 160 (Basic Electronics & Semiconductor Principles)",
        "author": "Dr. James Dzisi",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me160-2",
        "courseId": "course-me160",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raymond Kwame",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me160-1",
        "courseId": "course-me160",
        "title": "Key takeaways and tips for ME 160 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 160? Any advice from seniors?",
        "upvotes": 14,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 160",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me162",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 100,
    "semester": 2,
    "code": "ME 162",
    "name": "Engineering Drawing II & 2D CAD",
    "creditHours": 2,
    "description": "Assembly drawing, limits, fits, tolerances, surface texture symbols, and computer-aided drafting (CAD) using AutoCAD.",
    "longOverview": "Advancing from manual drafting to assembly drawings and computer-aided drafting. Covers disassembled parts of valves, couplings, plummer blocks, and machine vices, and generating full 2D AutoCAD drawings with title blocks.",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Wrench",
    "lecturerName": "Dr. Frank Okyere",
    "lecturerOffice": "CAD Lab, Engineering Faculty",
    "prerequisites": [
      "ME 161"
    ],
    "syllabusPoints": [
      "Assembly drawings of mechanical components: valves, vices, and screw jacks",
      "Limits, tolerances, hole-basis and shaft-basis fits (clearance, transition, interference)",
      "Surface finish symbols and geometric dimensioning and tolerancing (GD&T)",
      "Introduction to AutoCAD: layers, draw commands, modify tools, dimension styles"
    ],
    "tutorIds": [
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me162-syllabus",
        "courseId": "course-me162",
        "title": "ME 162: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 459,
        "author": "Dr. Frank Okyere",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Engineering Drawing II & 2D CAD."
      },
      {
        "id": "mat-me162-notes",
        "courseId": "course-me162",
        "title": "Engineering Drawing II & 2D CAD Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "4.3 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 641,
        "author": "Dr. Frank Okyere",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Assembly drawings of mechanical components: valves, vices, and screw jacks."
      },
      {
        "id": "mat-me162-formula",
        "courseId": "course-me162",
        "title": "ME 162 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 743,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me162-01",
        "courseId": "course-me162",
        "title": "01 — ME 162 Foundations: Assembly drawings of mechanical components: valves, vices, and screw jacks",
        "topic": "Assembly drawings of mechanical components: valves, vices, and screw jacks",
        "order": 1,
        "duration": "27:22",
        "instructor": "Francis Appiah",
        "viewsCount": 951,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Assembly drawings of mechanical components: valves, vices, and screw jacks",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me162-02",
        "courseId": "course-me162",
        "title": "02 — Problem Solving & Exam Walkthrough: Limits, tolerances, hole-basis and shaft-basis fits (clearance, transition, interference)",
        "topic": "Limits, tolerances, hole-basis and shaft-basis fits (clearance, transition, interference)",
        "order": 2,
        "duration": "31:27",
        "instructor": "Francis Appiah",
        "viewsCount": 737,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me162-01",
        "courseId": "course-me162",
        "title": "Assignment 1: Assembly drawings of mechanical components: valves, vices, and screw jacks Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Engineering Drawing II & 2D CAD.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me162-2024",
        "courseId": "course-me162",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 162",
        "topics": [
          "Assembly drawings of mechanical components: valves, vices, and screw jacks",
          "Limits, tolerances, hole-basis and shaft-basis fits (clearance, transition, interference)"
        ],
        "totalMarks": 100,
        "downloadCount": 709,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Assembly drawings of mechanical components: valves, vices, and screw jacks in Engineering Drawing II & 2D CAD.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me162-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 162:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Assembly drawings of mechanical components: valves, vices, and screw jacks",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me162-2023",
        "courseId": "course-me162",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 162",
        "topics": [
          "Limits, tolerances, hole-basis and shaft-basis fits (clearance, transition, interference)",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 593,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Engineering Drawing II & 2D CAD in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me162-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me162-1",
        "courseId": "course-me162",
        "title": "Welcome to ME 162 (Engineering Drawing II & 2D CAD)",
        "author": "Dr. Frank Okyere",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me162-2",
        "courseId": "course-me162",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me162-1",
        "courseId": "course-me162",
        "title": "Key takeaways and tips for ME 162 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 162? Any advice from seniors?",
        "upvotes": 15,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 162",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me164",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 100,
    "semester": 2,
    "code": "ME 164",
    "name": "Workshop Technology & Mechanical Practice II",
    "creditHours": 2,
    "description": "Welding processes (shielded metal arc, oxy-acetylene gas), sheet metal work, forging, foundry practice, pattern making, and casting techniques.",
    "longOverview": "Practical workshop course where students execute metal fabrication projects. Covers MMAW arc welding, gas welding, sheet metal bending, sand casting molds, pattern making, and inspecting cast components.",
    "coverImage": "/src/assets/images/college_engineering_banner_1790747200775.jpg",
    "iconName": "Flame",
    "lecturerName": "Ing. Samuel K. Asante",
    "lecturerOffice": "Central Workshop Complex",
    "prerequisites": [
      "ME 163"
    ],
    "syllabusPoints": [
      "Oxy-acetylene gas welding: flame types, equipment, filler rods, and gas cutting",
      "Shielded Metal Arc Welding (SMAW): electrode classification, striking arc, joint types",
      "Foundry practice: molding sand properties, pattern making, core making, and gating",
      "Sheet metal operations: shearing, blanking, bending allowances, and seams"
    ],
    "tutorIds": [
      "tutor-sherlina-amankwah"
    ],
    "materials": [
      {
        "id": "mat-me164-syllabus",
        "courseId": "course-me164",
        "title": "ME 164: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 476,
        "author": "Ing. Samuel K. Asante",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Workshop Technology & Mechanical Practice II."
      },
      {
        "id": "mat-me164-notes",
        "courseId": "course-me164",
        "title": "Workshop Technology & Mechanical Practice II Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "4.6 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 664,
        "author": "Ing. Samuel K. Asante",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Oxy-acetylene gas welding: flame types, equipment, filler rods, and gas cutting."
      },
      {
        "id": "mat-me164-formula",
        "courseId": "course-me164",
        "title": "ME 164 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 762,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me164-01",
        "courseId": "course-me164",
        "title": "01 — ME 164 Foundations: Oxy-acetylene gas welding: flame types, equipment, filler rods, and gas cutting",
        "topic": "Oxy-acetylene gas welding: flame types, equipment, filler rods, and gas cutting",
        "order": 1,
        "duration": "28:23",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 994,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Oxy-acetylene gas welding: flame types, equipment, filler rods, and gas cutting",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me164-02",
        "courseId": "course-me164",
        "title": "02 — Problem Solving & Exam Walkthrough: Shielded Metal Arc Welding (SMAW): electrode classification, striking arc, joint types",
        "topic": "Shielded Metal Arc Welding (SMAW): electrode classification, striking arc, joint types",
        "order": 2,
        "duration": "32:28",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 768,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me164-01",
        "courseId": "course-me164",
        "title": "Assignment 1: Oxy-acetylene gas welding: flame types, equipment, filler rods, and gas cutting Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Workshop Technology & Mechanical Practice II.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me164-2024",
        "courseId": "course-me164",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 164",
        "topics": [
          "Oxy-acetylene gas welding: flame types, equipment, filler rods, and gas cutting",
          "Shielded Metal Arc Welding (SMAW): electrode classification, striking arc, joint types"
        ],
        "totalMarks": 100,
        "downloadCount": 736,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Oxy-acetylene gas welding: flame types, equipment, filler rods, and gas cutting in Workshop Technology & Mechanical Practice II.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me164-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 164:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Oxy-acetylene gas welding: flame types, equipment, filler rods, and gas cutting",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me164-2023",
        "courseId": "course-me164",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 164",
        "topics": [
          "Shielded Metal Arc Welding (SMAW): electrode classification, striking arc, joint types",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 612,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Workshop Technology & Mechanical Practice II in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me164-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me164-1",
        "courseId": "course-me164",
        "title": "Welcome to ME 164 (Workshop Technology & Mechanical Practice II)",
        "author": "Ing. Samuel K. Asante",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me164-2",
        "courseId": "course-me164",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Sherlina Amankwah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me164-1",
        "courseId": "course-me164",
        "title": "Key takeaways and tips for ME 164 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 164? Any advice from seniors?",
        "upvotes": 16,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 164",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-coe158",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 100,
    "semester": 2,
    "code": "COE 158",
    "name": "Computer Programming for Engineers (C++ & Python)",
    "creditHours": 2,
    "description": "Algorithms, pseudocode, flowcharts, variables, loops, arrays, functions, and numerical computation for engineering equations using C++ and Python.",
    "longOverview": "Focuses on writing clean computational programs to solve engineering equations: projectile motion, matrix inversion, root finding, and thermodynamic cycle data processing.",
    "coverImage": "/src/assets/images/harcourt_hero_banner_1790747187384.jpg",
    "iconName": "Cpu",
    "lecturerName": "Dr. Emmanuel Danquah",
    "lecturerOffice": "Computer Engineering Department",
    "prerequisites": [
      "None"
    ],
    "syllabusPoints": [
      "Problem-solving with algorithms and structured pseudocode",
      "C++ and Python syntax: data types, operators, conditionals (if/switch)",
      "Iteration structures: for, while, and do-while loops",
      "Functions, parameter passing, and arrays for 1D and 2D vector data",
      "Writing scripts to evaluate mechanical formulas and plot curves"
    ],
    "tutorIds": [
      "tutor-raphael-mensah"
    ],
    "materials": [
      {
        "id": "mat-coe158-syllabus",
        "courseId": "course-coe158",
        "title": "COE 158: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 493,
        "author": "Dr. Emmanuel Danquah",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Computer Programming for Engineers (C++ & Python)."
      },
      {
        "id": "mat-coe158-notes",
        "courseId": "course-coe158",
        "title": "Computer Programming for Engineers (C++ & Python) Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "2.4 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 687,
        "author": "Dr. Emmanuel Danquah",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Problem-solving with algorithms and structured pseudocode."
      },
      {
        "id": "mat-coe158-formula",
        "courseId": "course-coe158",
        "title": "COE 158 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 781,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-coe158-01",
        "courseId": "course-coe158",
        "title": "01 — COE 158 Foundations: Problem-solving with algorithms and structured pseudocode",
        "topic": "Problem-solving with algorithms and structured pseudocode",
        "order": 1,
        "duration": "29:24",
        "instructor": "Raphael Mensah",
        "viewsCount": 1037,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Problem-solving with algorithms and structured pseudocode",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-coe158-02",
        "courseId": "course-coe158",
        "title": "02 — Problem Solving & Exam Walkthrough: C++ and Python syntax: data types, operators, conditionals (if/switch)",
        "topic": "C++ and Python syntax: data types, operators, conditionals (if/switch)",
        "order": 2,
        "duration": "33:29",
        "instructor": "Raphael Mensah",
        "viewsCount": 799,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-coe158-01",
        "courseId": "course-coe158",
        "title": "Assignment 1: Problem-solving with algorithms and structured pseudocode Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Computer Programming for Engineers (C++ & Python).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-coe158-2024",
        "courseId": "course-coe158",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — COE 158",
        "topics": [
          "Problem-solving with algorithms and structured pseudocode",
          "C++ and Python syntax: data types, operators, conditionals (if/switch)"
        ],
        "totalMarks": 100,
        "downloadCount": 763,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Problem-solving with algorithms and structured pseudocode in Computer Programming for Engineers (C++ & Python).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-coe158-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for COE 158:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Problem-solving with algorithms and structured pseudocode",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-coe158-2023",
        "courseId": "course-coe158",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — COE 158",
        "topics": [
          "C++ and Python syntax: data types, operators, conditionals (if/switch)",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 631,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Computer Programming for Engineers (C++ & Python) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-coe158-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-coe158-1",
        "courseId": "course-coe158",
        "title": "Welcome to COE 158 (Computer Programming for Engineers (C++ & Python))",
        "author": "Dr. Emmanuel Danquah",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-coe158-2",
        "courseId": "course-coe158",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raphael Mensah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-coe158-1",
        "courseId": "course-coe158",
        "title": "Key takeaways and tips for COE 158 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for COE 158? Any advice from seniors?",
        "upvotes": 17,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "COE 158",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-math251",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 200,
    "semester": 1,
    "code": "MATH 251",
    "name": "Mathematics III (Advanced Calculus & ODEs)",
    "creditHours": 3,
    "description": "Ordinary differential equations (1st and 2nd order), Laplace transforms, partial differentiation, and multiple integrals for engineering mechanics.",
    "longOverview": "MATH 251 introduces differential equations essential for vibrations and thermal analysis. Covers linear 2nd order ODEs with constant coefficients, mechanical resonance, Laplace transforms for initial value problems, and double/triple integrals.",
    "coverImage": "/src/assets/images/harcourt_hero_banner_1790747187384.jpg",
    "iconName": "Activity",
    "lecturerName": "Prof. Peter Amoako-Yirenkyi",
    "lecturerOffice": "Mathematics Faculty, Room 205",
    "prerequisites": [
      "MATH 152"
    ],
    "syllabusPoints": [
      "First-order ODEs: separable, homogeneous, exact, and integrating factor methods",
      "Second-order linear ODEs with constant coefficients: complementary and particular solutions",
      "Applications to mass-spring-damper systems and electrical RLC circuits",
      "Laplace transforms and inverse Laplace transforms using partial fractions",
      "Partial differentiation, directional derivatives, gradient, divergence, and curl"
    ],
    "tutorIds": [
      "tutor-sherlina-amankwah",
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-math251-odes",
        "courseId": "course-math251",
        "title": "Ordinary Differential Equations & Laplace Transforms Manual",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.2 MB",
        "uploadDate": "Sep 15, 2026",
        "downloadsCount": 490,
        "author": "Prof. Peter Amoako-Yirenkyi"
      }
    ],
    "videos": [
      {
        "id": "vid-math251-01",
        "courseId": "course-math251",
        "title": "01 — MATH 251 Foundations: First-order ODEs: separable, homogeneous, exact, and integrating factor methods",
        "topic": "First-order ODEs: separable, homogeneous, exact, and integrating factor methods",
        "order": 1,
        "duration": "30:25",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 680,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in First-order ODEs: separable, homogeneous, exact, and integrating factor methods",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-math251-02",
        "courseId": "course-math251",
        "title": "02 — Problem Solving & Exam Walkthrough: Second-order linear ODEs with constant coefficients: complementary and particular solutions",
        "topic": "Second-order linear ODEs with constant coefficients: complementary and particular solutions",
        "order": 2,
        "duration": "24:30",
        "instructor": "Francis Appiah",
        "viewsCount": 830,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-math251-01",
        "courseId": "course-math251",
        "title": "Assignment 1: First-order ODEs: separable, homogeneous, exact, and integrating factor methods Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Mathematics III (Advanced Calculus & ODEs).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-math251-2024",
        "courseId": "course-math251",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — MATH 251",
        "topics": [
          "First-order ODEs: separable, homogeneous, exact, and integrating factor methods",
          "Second-order linear ODEs with constant coefficients: complementary and particular solutions"
        ],
        "totalMarks": 100,
        "downloadCount": 790,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for First-order ODEs: separable, homogeneous, exact, and integrating factor methods in Mathematics III (Advanced Calculus & ODEs).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-math251-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for MATH 251:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for First-order ODEs: separable, homogeneous, exact, and integrating factor methods",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-math251-2023",
        "courseId": "course-math251",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — MATH 251",
        "topics": [
          "Second-order linear ODEs with constant coefficients: complementary and particular solutions",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 650,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Mathematics III (Advanced Calculus & ODEs) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-math251-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-math251-1",
        "courseId": "course-math251",
        "title": "Welcome to MATH 251 (Mathematics III (Advanced Calculus & ODEs))",
        "author": "Prof. Peter Amoako-Yirenkyi",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-math251-2",
        "courseId": "course-math251",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Sherlina Amankwah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-math251-1",
        "courseId": "course-math251",
        "title": "Key takeaways and tips for MATH 251 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for MATH 251? Any advice from seniors?",
        "upvotes": 8,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "MATH 251",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me251",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 200,
    "semester": 1,
    "code": "ME 251",
    "name": "Strength of Materials I",
    "creditHours": 3,
    "description": "Mechanics of deformable bodies, simple stress and strain, thermal stresses, shear force and bending moment diagrams, flexural formula, and shear stresses in beams.",
    "longOverview": "A foundational engineering science course analyzing structural integrity of mechanical components under tension, compression, and transverse loading. Covers Hooke’s law, elastic constants, thermal strain, SFD/BMD for beams, and bending stress distribution.",
    "coverImage": "/src/assets/images/programme_civil_engineering_1790747227133.jpg",
    "iconName": "Wrench",
    "lecturerName": "Dr. Anthony Mensah",
    "lecturerOffice": "Engineering Block A, Room 112",
    "prerequisites": [
      "PHYS 158"
    ],
    "syllabusPoints": [
      "Concept of stress and strain, normal and shear stress, Poisson’s ratio, Hooke’s law",
      "Compound bars, composite materials, and thermal stress in constrained members",
      "Shear force (SF) and bending moment (BM) diagrams for simply supported, cantilever, and overhanging beams",
      "Pure bending theory: Euler-Bernoulli beam formula (M/I = sigma/y = E/R)",
      "Shear stress distribution in rectangular, circular, and I-section beams"
    ],
    "tutorIds": [
      "tutor-francis-appiah",
      "tutor-raymond-kwame"
    ],
    "materials": [
      {
        "id": "mat-me251-sfd",
        "courseId": "course-me251",
        "title": "SFD and BMD Complete Engineering Guide & Worked Examples",
        "category": "Study Guide",
        "fileFormat": "PDF",
        "fileSize": "2.9 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 620,
        "author": "Dr. Anthony Mensah"
      }
    ],
    "videos": [
      {
        "id": "vid-me251-01",
        "courseId": "course-me251",
        "title": "01 — Constructing Shear Force & Bending Moment Diagrams",
        "topic": "Beams & Bending",
        "order": 1,
        "duration": "28:10",
        "instructor": "Francis Appiah",
        "viewsCount": 910,
        "description": "Systematic approach to finding reactions, drawing SFD, and finding maximum bending moment.",
        "keyTakeaways": [
          "Point loads vs UDL curves",
          "Points of contraflexure"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me251-01",
        "courseId": "course-me251",
        "title": "Assignment 1: Concept of stress and strain, normal and shear stress, Poisson’s ratio, Hooke’s law Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Strength of Materials I.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me251-2024",
        "courseId": "course-me251",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 251",
        "topics": [
          "Concept of stress and strain, normal and shear stress, Poisson’s ratio, Hooke’s law",
          "Compound bars, composite materials, and thermal stress in constrained members"
        ],
        "totalMarks": 100,
        "downloadCount": 817,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Concept of stress and strain, normal and shear stress, Poisson’s ratio, Hooke’s law in Strength of Materials I.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me251-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 251:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Concept of stress and strain, normal and shear stress, Poisson’s ratio, Hooke’s law",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me251-2023",
        "courseId": "course-me251",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 251",
        "topics": [
          "Compound bars, composite materials, and thermal stress in constrained members",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 669,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Strength of Materials I in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me251-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me251-1",
        "courseId": "course-me251",
        "title": "Welcome to ME 251 (Strength of Materials I)",
        "author": "Dr. Anthony Mensah",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me251-2",
        "courseId": "course-me251",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me251-1",
        "courseId": "course-me251",
        "title": "Key takeaways and tips for ME 251 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 251? Any advice from seniors?",
        "upvotes": 9,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 251",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me253",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 200,
    "semester": 1,
    "code": "ME 253",
    "name": "Engineering Thermodynamics I",
    "creditHours": 3,
    "description": "Thermodynamic systems, properties of pure substances, work and heat transfer, First Law for closed and open control volumes, and Second Law principles.",
    "longOverview": "ME 253 covers the fundamental laws of energy conversion. Introduces temperature scales, steam tables and p-v-T surfaces, First Law of Thermodynamics for closed systems and steady-flow energy equation (SFEE), and Carnot cycle efficiency.",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Flame",
    "lecturerName": "Dr. Akwasi Frimpong",
    "lecturerOffice": "Thermo-fluids Division, Room 208",
    "prerequisites": [
      "CHEM 157",
      "MATH 152"
    ],
    "syllabusPoints": [
      "Basic concepts: system boundary, state, equilibrium, quasi-static processes",
      "Properties of pure substances: phase change diagrams, steam tables, dryness fraction",
      "First Law of Thermodynamics for closed systems: internal energy and enthalpy",
      "First Law for control volumes: Steady Flow Energy Equation (SFEE) applied to nozzles, turbines, compressors, and throttles",
      "Second Law of Thermodynamics: Kelvin-Planck and Clausius statements, Carnot theorem"
    ],
    "tutorIds": [
      "tutor-raymond-kwame",
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me253-steam",
        "courseId": "course-me253",
        "title": "Thermodynamic Steam Tables & Property Charts",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "1.4 MB",
        "uploadDate": "Sep 14, 2026",
        "downloadsCount": 710,
        "author": "KNUST Thermo-Fluids Faculty"
      }
    ],
    "videos": [
      {
        "id": "vid-me253-01",
        "courseId": "course-me253",
        "title": "01 — ME 253 Foundations: Basic concepts: system boundary, state, equilibrium, quasi-static processes",
        "topic": "Basic concepts: system boundary, state, equilibrium, quasi-static processes",
        "order": 1,
        "duration": "20:27",
        "instructor": "Raymond Kwame",
        "viewsCount": 766,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Basic concepts: system boundary, state, equilibrium, quasi-static processes",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me253-02",
        "courseId": "course-me253",
        "title": "02 — Problem Solving & Exam Walkthrough: Properties of pure substances: phase change diagrams, steam tables, dryness fraction",
        "topic": "Properties of pure substances: phase change diagrams, steam tables, dryness fraction",
        "order": 2,
        "duration": "26:32",
        "instructor": "Francis Appiah",
        "viewsCount": 542,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me253-01",
        "courseId": "course-me253",
        "title": "Assignment 1: Basic concepts: system boundary, state, equilibrium, quasi-static processes Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Engineering Thermodynamics I.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me253-2024",
        "courseId": "course-me253",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 253",
        "topics": [
          "Basic concepts: system boundary, state, equilibrium, quasi-static processes",
          "Properties of pure substances: phase change diagrams, steam tables, dryness fraction"
        ],
        "totalMarks": 100,
        "downloadCount": 544,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Basic concepts: system boundary, state, equilibrium, quasi-static processes in Engineering Thermodynamics I.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me253-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 253:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Basic concepts: system boundary, state, equilibrium, quasi-static processes",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me253-2023",
        "courseId": "course-me253",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 253",
        "topics": [
          "Properties of pure substances: phase change diagrams, steam tables, dryness fraction",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 688,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Engineering Thermodynamics I in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me253-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me253-1",
        "courseId": "course-me253",
        "title": "Welcome to ME 253 (Engineering Thermodynamics I)",
        "author": "Dr. Akwasi Frimpong",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me253-2",
        "courseId": "course-me253",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raymond Kwame",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me253-1",
        "courseId": "course-me253",
        "title": "Key takeaways and tips for ME 253 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 253? Any advice from seniors?",
        "upvotes": 10,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 253",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me255",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 200,
    "semester": 1,
    "code": "ME 255",
    "name": "Fluid Mechanics I",
    "creditHours": 3,
    "description": "Fluid statics, pressure measurement, hydrostatic forces on submerged surfaces, buoyancy, fluid kinematics, continuity, and Bernoulli equation.",
    "longOverview": "Covers fluid properties, viscosity, manometry, hydrostatic pressure distributions on flat and curved gates, Archimedes principle and metacentric height, and Bernoulli theorem applications in venturi meters and pitot tubes.",
    "coverImage": "/src/assets/images/programme_civil_engineering_1790747227133.jpg",
    "iconName": "Activity",
    "lecturerName": "Dr. George Osei-Poku",
    "lecturerOffice": "Hydraulics Laboratory Building",
    "prerequisites": [
      "PHYS 158"
    ],
    "syllabusPoints": [
      "Fluid properties: density, specific gravity, dynamic and kinematic viscosity, surface tension",
      "Fluid statics: Pascal’s law, hydrostatic equation, U-tube and differential manometers",
      "Hydrostatic forces on submerged planar and curved surfaces; center of pressure",
      "Buoyancy, floatation, and metacentric height for stability of floating bodies",
      "Euler equation along a streamline and Bernoulli’s equation with flow measurement devices"
    ],
    "tutorIds": [
      "tutor-raymond-kwame"
    ],
    "materials": [
      {
        "id": "mat-me255-syllabus",
        "courseId": "course-me255",
        "title": "ME 255: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 561,
        "author": "Dr. George Osei-Poku",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Fluid Mechanics I."
      },
      {
        "id": "mat-me255-notes",
        "courseId": "course-me255",
        "title": "Fluid Mechanics I Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.6 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 779,
        "author": "Dr. George Osei-Poku",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Fluid properties: density, specific gravity, dynamic and kinematic viscosity, surface tension."
      },
      {
        "id": "mat-me255-formula",
        "courseId": "course-me255",
        "title": "ME 255 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 657,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me255-01",
        "courseId": "course-me255",
        "title": "01 — ME 255 Foundations: Fluid properties: density, specific gravity, dynamic and kinematic viscosity, surface tension",
        "topic": "Fluid properties: density, specific gravity, dynamic and kinematic viscosity, surface tension",
        "order": 1,
        "duration": "21:28",
        "instructor": "Raymond Kwame",
        "viewsCount": 809,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Fluid properties: density, specific gravity, dynamic and kinematic viscosity, surface tension",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me255-02",
        "courseId": "course-me255",
        "title": "02 — Problem Solving & Exam Walkthrough: Fluid statics: Pascal’s law, hydrostatic equation, U-tube and differential manometers",
        "topic": "Fluid statics: Pascal’s law, hydrostatic equation, U-tube and differential manometers",
        "order": 2,
        "duration": "27:33",
        "instructor": "Raymond Kwame",
        "viewsCount": 573,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me255-01",
        "courseId": "course-me255",
        "title": "Assignment 1: Fluid properties: density, specific gravity, dynamic and kinematic viscosity, surface tension Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Fluid Mechanics I.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me255-2024",
        "courseId": "course-me255",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 255",
        "topics": [
          "Fluid properties: density, specific gravity, dynamic and kinematic viscosity, surface tension",
          "Fluid statics: Pascal’s law, hydrostatic equation, U-tube and differential manometers"
        ],
        "totalMarks": 100,
        "downloadCount": 571,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Fluid properties: density, specific gravity, dynamic and kinematic viscosity, surface tension in Fluid Mechanics I.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me255-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 255:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Fluid properties: density, specific gravity, dynamic and kinematic viscosity, surface tension",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me255-2023",
        "courseId": "course-me255",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 255",
        "topics": [
          "Fluid statics: Pascal’s law, hydrostatic equation, U-tube and differential manometers",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 707,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Fluid Mechanics I in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me255-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me255-1",
        "courseId": "course-me255",
        "title": "Welcome to ME 255 (Fluid Mechanics I)",
        "author": "Dr. George Osei-Poku",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me255-2",
        "courseId": "course-me255",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raymond Kwame",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me255-1",
        "courseId": "course-me255",
        "title": "Key takeaways and tips for ME 255 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 255? Any advice from seniors?",
        "upvotes": 11,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 255",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me257",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 200,
    "semester": 1,
    "code": "ME 257",
    "name": "Material Science I (Engineering Materials)",
    "creditHours": 3,
    "description": "Atomic bonding, crystalline structures (BCC, FCC, HCP), crystal defects, diffusion, mechanical testing of metals, and iron-iron carbide phase diagram.",
    "longOverview": "Understanding structure-property relationships in engineering materials. Covers unit cells, Miller indices, dislocations, tensile stress-strain curves, hardness tests (Brinell, Rockwell), impact toughness, and Fe-C equilibrium phase diagram.",
    "coverImage": "/src/assets/images/college_engineering_banner_1790747200775.jpg",
    "iconName": "Layers",
    "lecturerName": "Prof. Mark Adom-Asamoah",
    "lecturerOffice": "Materials Science Lab, Block C",
    "prerequisites": [
      "CHEM 157"
    ],
    "syllabusPoints": [
      "Crystal lattice structures: BCC, FCC, HCP, atomic packing factor, and density",
      "Imperfections in solids: point defects, line dislocations, grain boundaries",
      "Mechanical testing: tensile test, engineering vs true stress-strain, toughness, and hardness",
      "Binary phase diagrams: isomorphous systems, Lever rule, and eutectic reactions",
      "The Iron-Iron Carbide (Fe-Fe3C) phase diagram: pearlite, austenite, and cementite"
    ],
    "tutorIds": [
      "tutor-sherlina-amankwah"
    ],
    "materials": [
      {
        "id": "mat-me257-syllabus",
        "courseId": "course-me257",
        "title": "ME 257: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 578,
        "author": "Prof. Mark Adom-Asamoah",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Material Science I (Engineering Materials)."
      },
      {
        "id": "mat-me257-notes",
        "courseId": "course-me257",
        "title": "Material Science I (Engineering Materials) Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.9 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 802,
        "author": "Prof. Mark Adom-Asamoah",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Crystal lattice structures: BCC, FCC, HCP, atomic packing factor, and density."
      },
      {
        "id": "mat-me257-formula",
        "courseId": "course-me257",
        "title": "ME 257 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 676,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me257-01",
        "courseId": "course-me257",
        "title": "01 — ME 257 Foundations: Crystal lattice structures: BCC, FCC, HCP, atomic packing factor, and density",
        "topic": "Crystal lattice structures: BCC, FCC, HCP, atomic packing factor, and density",
        "order": 1,
        "duration": "22:29",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 852,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Crystal lattice structures: BCC, FCC, HCP, atomic packing factor, and density",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me257-02",
        "courseId": "course-me257",
        "title": "02 — Problem Solving & Exam Walkthrough: Imperfections in solids: point defects, line dislocations, grain boundaries",
        "topic": "Imperfections in solids: point defects, line dislocations, grain boundaries",
        "order": 2,
        "duration": "28:34",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 604,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me257-01",
        "courseId": "course-me257",
        "title": "Assignment 1: Crystal lattice structures: BCC, FCC, HCP, atomic packing factor, and density Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Material Science I (Engineering Materials).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me257-2024",
        "courseId": "course-me257",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 257",
        "topics": [
          "Crystal lattice structures: BCC, FCC, HCP, atomic packing factor, and density",
          "Imperfections in solids: point defects, line dislocations, grain boundaries"
        ],
        "totalMarks": 100,
        "downloadCount": 598,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Crystal lattice structures: BCC, FCC, HCP, atomic packing factor, and density in Material Science I (Engineering Materials).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me257-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 257:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Crystal lattice structures: BCC, FCC, HCP, atomic packing factor, and density",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me257-2023",
        "courseId": "course-me257",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 257",
        "topics": [
          "Imperfections in solids: point defects, line dislocations, grain boundaries",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 476,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Material Science I (Engineering Materials) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me257-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me257-1",
        "courseId": "course-me257",
        "title": "Welcome to ME 257 (Material Science I (Engineering Materials))",
        "author": "Prof. Mark Adom-Asamoah",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me257-2",
        "courseId": "course-me257",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Sherlina Amankwah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me257-1",
        "courseId": "course-me257",
        "title": "Key takeaways and tips for ME 257 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 257? Any advice from seniors?",
        "upvotes": 12,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 257",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-math252",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 200,
    "semester": 2,
    "code": "MATH 252",
    "name": "Mathematics IV (Linear Algebra & Numerical Methods)",
    "creditHours": 3,
    "description": "Matrices, determinants, eigenvalues and eigenvectors, systems of linear equations, Gauss elimination, Newton-Raphson, and numerical integration.",
    "longOverview": "Mathematical tools for computational simulation in engineering. Focuses on matrix diagonalization, modal eigenvalues in dynamic systems, Taylor series approximations, Runge-Kutta ODE solvers, and Simpson’s integration.",
    "coverImage": "/src/assets/images/harcourt_hero_banner_1790747187384.jpg",
    "iconName": "Activity",
    "lecturerName": "Dr. Joseph Ackora-Prah",
    "lecturerOffice": "Mathematics Block, Room 102",
    "prerequisites": [
      "MATH 251"
    ],
    "syllabusPoints": [
      "Matrices, rank, determinants, and solving AX = B via Gaussian elimination and LU decomposition",
      "Eigenvalues and eigenvectors, characteristic equations, and modal diagonalization",
      "Numerical root finding: Bisection method, Secant method, and Newton-Raphson method",
      "Numerical integration: Trapezoidal rule, Simpson’s 1/3 and 3/8 rules with error bounds",
      "Numerical solutions of initial-value ODEs: Euler and 4th-order Runge-Kutta (RK4)"
    ],
    "tutorIds": [
      "tutor-sherlina-amankwah"
    ],
    "materials": [
      {
        "id": "mat-math252-syllabus",
        "courseId": "course-math252",
        "title": "MATH 252: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 345,
        "author": "Dr. Joseph Ackora-Prah",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Mathematics IV (Linear Algebra & Numerical Methods)."
      },
      {
        "id": "mat-math252-notes",
        "courseId": "course-math252",
        "title": "Mathematics IV (Linear Algebra & Numerical Methods) Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "4.2 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 825,
        "author": "Dr. Joseph Ackora-Prah",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Matrices, rank, determinants, and solving AX = B via Gaussian elimination and LU decomposition."
      },
      {
        "id": "mat-math252-formula",
        "courseId": "course-math252",
        "title": "MATH 252 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 695,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-math252-01",
        "courseId": "course-math252",
        "title": "01 — MATH 252 Foundations: Matrices, rank, determinants, and solving AX = B via Gaussian elimination and LU decomposition",
        "topic": "Matrices, rank, determinants, and solving AX = B via Gaussian elimination and LU decomposition",
        "order": 1,
        "duration": "23:30",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 895,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Matrices, rank, determinants, and solving AX = B via Gaussian elimination and LU decomposition",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-math252-02",
        "courseId": "course-math252",
        "title": "02 — Problem Solving & Exam Walkthrough: Eigenvalues and eigenvectors, characteristic equations, and modal diagonalization",
        "topic": "Eigenvalues and eigenvectors, characteristic equations, and modal diagonalization",
        "order": 2,
        "duration": "29:35",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 635,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-math252-01",
        "courseId": "course-math252",
        "title": "Assignment 1: Matrices, rank, determinants, and solving AX = B via Gaussian elimination and LU decomposition Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Mathematics IV (Linear Algebra & Numerical Methods).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-math252-2024",
        "courseId": "course-math252",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — MATH 252",
        "topics": [
          "Matrices, rank, determinants, and solving AX = B via Gaussian elimination and LU decomposition",
          "Eigenvalues and eigenvectors, characteristic equations, and modal diagonalization"
        ],
        "totalMarks": 100,
        "downloadCount": 625,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Matrices, rank, determinants, and solving AX = B via Gaussian elimination and LU decomposition in Mathematics IV (Linear Algebra & Numerical Methods).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-math252-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for MATH 252:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Matrices, rank, determinants, and solving AX = B via Gaussian elimination and LU decomposition",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-math252-2023",
        "courseId": "course-math252",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — MATH 252",
        "topics": [
          "Eigenvalues and eigenvectors, characteristic equations, and modal diagonalization",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 495,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Mathematics IV (Linear Algebra & Numerical Methods) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-math252-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-math252-1",
        "courseId": "course-math252",
        "title": "Welcome to MATH 252 (Mathematics IV (Linear Algebra & Numerical Methods))",
        "author": "Dr. Joseph Ackora-Prah",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-math252-2",
        "courseId": "course-math252",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Sherlina Amankwah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-math252-1",
        "courseId": "course-math252",
        "title": "Key takeaways and tips for MATH 252 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for MATH 252? Any advice from seniors?",
        "upvotes": 13,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "MATH 252",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me252",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 200,
    "semester": 2,
    "code": "ME 252",
    "name": "Strength of Materials II",
    "creditHours": 3,
    "description": "Torsion of circular shafts, complex state of stress, Mohr’s circle, thin and thick-walled pressure vessels, column buckling (Euler formula), and deflection of beams.",
    "longOverview": "Covers advanced stress states: torsion of solid and hollow shafts, principal stresses in 2D and 3D via Mohr’s Circle, cylindrical and spherical pressure vessels, and elastic instability in long slender columns.",
    "coverImage": "/src/assets/images/programme_civil_engineering_1790747227133.jpg",
    "iconName": "Wrench",
    "lecturerName": "Dr. Anthony Mensah",
    "lecturerOffice": "Engineering Block A, Room 112",
    "prerequisites": [
      "ME 251"
    ],
    "syllabusPoints": [
      "Torsion of solid and hollow circular shafts: shear stress and angle of twist",
      "Combined bending and torsion in power transmission shafts",
      "Principal stresses, maximum shear stress, and graphical analysis via Mohr’s Stress Circle",
      "Thin-walled and thick-walled (Lamé equation) cylindrical pressure vessels",
      "Euler buckling theory for slender columns with various end boundary conditions"
    ],
    "tutorIds": [
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me252-syllabus",
        "courseId": "course-me252",
        "title": "ME 252: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 362,
        "author": "Dr. Anthony Mensah",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Strength of Materials II."
      },
      {
        "id": "mat-me252-notes",
        "courseId": "course-me252",
        "title": "Strength of Materials II Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "4.5 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 498,
        "author": "Dr. Anthony Mensah",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Torsion of solid and hollow circular shafts: shear stress and angle of twist."
      },
      {
        "id": "mat-me252-formula",
        "courseId": "course-me252",
        "title": "ME 252 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 714,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me252-01",
        "courseId": "course-me252",
        "title": "01 — ME 252 Foundations: Torsion of solid and hollow circular shafts: shear stress and angle of twist",
        "topic": "Torsion of solid and hollow circular shafts: shear stress and angle of twist",
        "order": 1,
        "duration": "24:31",
        "instructor": "Francis Appiah",
        "viewsCount": 938,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Torsion of solid and hollow circular shafts: shear stress and angle of twist",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me252-02",
        "courseId": "course-me252",
        "title": "02 — Problem Solving & Exam Walkthrough: Combined bending and torsion in power transmission shafts",
        "topic": "Combined bending and torsion in power transmission shafts",
        "order": 2,
        "duration": "30:36",
        "instructor": "Francis Appiah",
        "viewsCount": 666,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me252-01",
        "courseId": "course-me252",
        "title": "Assignment 1: Torsion of solid and hollow circular shafts: shear stress and angle of twist Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Strength of Materials II.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me252-2024",
        "courseId": "course-me252",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 252",
        "topics": [
          "Torsion of solid and hollow circular shafts: shear stress and angle of twist",
          "Combined bending and torsion in power transmission shafts"
        ],
        "totalMarks": 100,
        "downloadCount": 652,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Torsion of solid and hollow circular shafts: shear stress and angle of twist in Strength of Materials II.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me252-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 252:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Torsion of solid and hollow circular shafts: shear stress and angle of twist",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me252-2023",
        "courseId": "course-me252",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 252",
        "topics": [
          "Combined bending and torsion in power transmission shafts",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 514,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Strength of Materials II in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me252-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me252-1",
        "courseId": "course-me252",
        "title": "Welcome to ME 252 (Strength of Materials II)",
        "author": "Dr. Anthony Mensah",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me252-2",
        "courseId": "course-me252",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me252-1",
        "courseId": "course-me252",
        "title": "Key takeaways and tips for ME 252 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 252? Any advice from seniors?",
        "upvotes": 14,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 252",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me254",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 200,
    "semester": 2,
    "code": "ME 254",
    "name": "Engineering Thermodynamics II (Power Cycles)",
    "creditHours": 3,
    "description": "Gas power cycles (Otto, Diesel, Dual, Brayton), vapor power cycles (Rankine cycle with reheat and regeneration), and refrigeration vapor compression cycles.",
    "longOverview": "Applied thermodynamic cycles that drive internal combustion engines, jet propulsion, thermal steam power plants, and vapor compression refrigeration units.",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Flame",
    "lecturerName": "Dr. Akwasi Frimpong",
    "lecturerOffice": "Thermo-fluids Division, Room 208",
    "prerequisites": [
      "ME 253"
    ],
    "syllabusPoints": [
      "Air standard gas power cycles: Otto cycle (spark ignition) and Diesel cycle (compression ignition)",
      "Dual combustion cycle and gas turbine Brayton cycle with regenerators and intercoolers",
      "Vapor power Rankine cycle: superheat, reheat, and regenerative feedwater heaters",
      "Vapor compression refrigeration cycles and heat pumps: Coefficient of Performance (COP)",
      "Combustion stoichiometry and air-fuel ratio calculations"
    ],
    "tutorIds": [
      "tutor-raymond-kwame"
    ],
    "materials": [
      {
        "id": "mat-me254-syllabus",
        "courseId": "course-me254",
        "title": "ME 254: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 379,
        "author": "Dr. Akwasi Frimpong",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Engineering Thermodynamics II (Power Cycles)."
      },
      {
        "id": "mat-me254-notes",
        "courseId": "course-me254",
        "title": "Engineering Thermodynamics II (Power Cycles) Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "2.3 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 521,
        "author": "Dr. Akwasi Frimpong",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Air standard gas power cycles: Otto cycle (spark ignition) and Diesel cycle (compression ignition)."
      },
      {
        "id": "mat-me254-formula",
        "courseId": "course-me254",
        "title": "ME 254 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 733,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me254-01",
        "courseId": "course-me254",
        "title": "01 — ME 254 Foundations: Air standard gas power cycles: Otto cycle (spark ignition) and Diesel cycle (compression ignition)",
        "topic": "Air standard gas power cycles: Otto cycle (spark ignition) and Diesel cycle (compression ignition)",
        "order": 1,
        "duration": "25:32",
        "instructor": "Raymond Kwame",
        "viewsCount": 981,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Air standard gas power cycles: Otto cycle (spark ignition) and Diesel cycle (compression ignition)",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me254-02",
        "courseId": "course-me254",
        "title": "02 — Problem Solving & Exam Walkthrough: Dual combustion cycle and gas turbine Brayton cycle with regenerators and intercoolers",
        "topic": "Dual combustion cycle and gas turbine Brayton cycle with regenerators and intercoolers",
        "order": 2,
        "duration": "31:37",
        "instructor": "Raymond Kwame",
        "viewsCount": 697,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me254-01",
        "courseId": "course-me254",
        "title": "Assignment 1: Air standard gas power cycles: Otto cycle (spark ignition) and Diesel cycle (compression ignition) Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Engineering Thermodynamics II (Power Cycles).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me254-2024",
        "courseId": "course-me254",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 254",
        "topics": [
          "Air standard gas power cycles: Otto cycle (spark ignition) and Diesel cycle (compression ignition)",
          "Dual combustion cycle and gas turbine Brayton cycle with regenerators and intercoolers"
        ],
        "totalMarks": 100,
        "downloadCount": 679,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Air standard gas power cycles: Otto cycle (spark ignition) and Diesel cycle (compression ignition) in Engineering Thermodynamics II (Power Cycles).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me254-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 254:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Air standard gas power cycles: Otto cycle (spark ignition) and Diesel cycle (compression ignition)",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me254-2023",
        "courseId": "course-me254",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 254",
        "topics": [
          "Dual combustion cycle and gas turbine Brayton cycle with regenerators and intercoolers",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 533,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Engineering Thermodynamics II (Power Cycles) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me254-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me254-1",
        "courseId": "course-me254",
        "title": "Welcome to ME 254 (Engineering Thermodynamics II (Power Cycles))",
        "author": "Dr. Akwasi Frimpong",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me254-2",
        "courseId": "course-me254",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raymond Kwame",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me254-1",
        "courseId": "course-me254",
        "title": "Key takeaways and tips for ME 254 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 254? Any advice from seniors?",
        "upvotes": 15,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 254",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me256",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 200,
    "semester": 2,
    "code": "ME 256",
    "name": "Fluid Mechanics II (Viscous Flow & Pipes)",
    "creditHours": 3,
    "description": "Laminar and turbulent flows in pipes, Reynolds number, Darcy-Weisbach equation, Moody diagram, minor losses, pipe networks, and boundary layer theory.",
    "longOverview": "Focuses on real fluid flow with friction: Hagen-Poiseuille laminar flow, turbulent shear stresses, friction factors, head losses in pipe systems, pumps in series/parallel, and momentum equation for pipe bends.",
    "coverImage": "/src/assets/images/programme_civil_engineering_1790747227133.jpg",
    "iconName": "Activity",
    "lecturerName": "Dr. George Osei-Poku",
    "lecturerOffice": "Hydraulics Laboratory Building",
    "prerequisites": [
      "ME 255"
    ],
    "syllabusPoints": [
      "Navier-Stokes equations derivation and exact solutions for laminar flow",
      "Hagen-Poiseuille equation for viscous laminar flow in circular pipes",
      "Turbulent pipe flow, Darcy-Weisbach friction factor, and Moody chart interpretation",
      "Minor head losses in fittings, valves, bends, expansions, and contractions",
      "Pipe networks analysis using Hardy-Cross method and pump-system matching"
    ],
    "tutorIds": [
      "tutor-raymond-kwame"
    ],
    "materials": [
      {
        "id": "mat-me256-syllabus",
        "courseId": "course-me256",
        "title": "ME 256: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 396,
        "author": "Dr. George Osei-Poku",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Fluid Mechanics II (Viscous Flow & Pipes)."
      },
      {
        "id": "mat-me256-notes",
        "courseId": "course-me256",
        "title": "Fluid Mechanics II (Viscous Flow & Pipes) Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "2.6 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 544,
        "author": "Dr. George Osei-Poku",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Navier-Stokes equations derivation and exact solutions for laminar flow."
      },
      {
        "id": "mat-me256-formula",
        "courseId": "course-me256",
        "title": "ME 256 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 752,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me256-01",
        "courseId": "course-me256",
        "title": "01 — ME 256 Foundations: Navier-Stokes equations derivation and exact solutions for laminar flow",
        "topic": "Navier-Stokes equations derivation and exact solutions for laminar flow",
        "order": 1,
        "duration": "26:33",
        "instructor": "Raymond Kwame",
        "viewsCount": 1024,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Navier-Stokes equations derivation and exact solutions for laminar flow",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me256-02",
        "courseId": "course-me256",
        "title": "02 — Problem Solving & Exam Walkthrough: Hagen-Poiseuille equation for viscous laminar flow in circular pipes",
        "topic": "Hagen-Poiseuille equation for viscous laminar flow in circular pipes",
        "order": 2,
        "duration": "32:38",
        "instructor": "Raymond Kwame",
        "viewsCount": 728,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me256-01",
        "courseId": "course-me256",
        "title": "Assignment 1: Navier-Stokes equations derivation and exact solutions for laminar flow Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Fluid Mechanics II (Viscous Flow & Pipes).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me256-2024",
        "courseId": "course-me256",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 256",
        "topics": [
          "Navier-Stokes equations derivation and exact solutions for laminar flow",
          "Hagen-Poiseuille equation for viscous laminar flow in circular pipes"
        ],
        "totalMarks": 100,
        "downloadCount": 706,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Navier-Stokes equations derivation and exact solutions for laminar flow in Fluid Mechanics II (Viscous Flow & Pipes).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me256-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 256:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Navier-Stokes equations derivation and exact solutions for laminar flow",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me256-2023",
        "courseId": "course-me256",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 256",
        "topics": [
          "Hagen-Poiseuille equation for viscous laminar flow in circular pipes",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 552,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Fluid Mechanics II (Viscous Flow & Pipes) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me256-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me256-1",
        "courseId": "course-me256",
        "title": "Welcome to ME 256 (Fluid Mechanics II (Viscous Flow & Pipes))",
        "author": "Dr. George Osei-Poku",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me256-2",
        "courseId": "course-me256",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raymond Kwame",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me256-1",
        "courseId": "course-me256",
        "title": "Key takeaways and tips for ME 256 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 256? Any advice from seniors?",
        "upvotes": 16,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 256",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me260",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 200,
    "semester": 2,
    "code": "ME 260",
    "name": "Machine Drawing & 3D CAD Modeling",
    "creditHours": 2,
    "description": "Parametric 3D solid modeling using SolidWorks/Inventor, assembly modeling, exploded views, bill of materials (BOM), and mechanical fasteners.",
    "longOverview": "Modern engineering design using parametric CAD software. Students build 3D parts, mate assemblies of gearboxes and engine parts, conduct interference checks, and generate production drawings.",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Wrench",
    "lecturerName": "Dr. Frank Okyere",
    "lecturerOffice": "CAD Lab, Engineering Faculty",
    "prerequisites": [
      "ME 162"
    ],
    "syllabusPoints": [
      "Parametric feature-based 3D modeling: extrusions, revolves, sweeps, and lofts",
      "Assembly constraints: coincident, concentric, distance, and gear mates",
      "Generating exploded views, assembly drawings, and automated Bill of Materials (BOM)",
      "Standard mechanical components: threads, bolts, nuts, keys, splines, and retaining rings"
    ],
    "tutorIds": [
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me260-syllabus",
        "courseId": "course-me260",
        "title": "ME 260: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 413,
        "author": "Dr. Frank Okyere",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Machine Drawing & 3D CAD Modeling."
      },
      {
        "id": "mat-me260-notes",
        "courseId": "course-me260",
        "title": "Machine Drawing & 3D CAD Modeling Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "2.9 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 567,
        "author": "Dr. Frank Okyere",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Parametric feature-based 3D modeling: extrusions, revolves, sweeps, and lofts."
      },
      {
        "id": "mat-me260-formula",
        "courseId": "course-me260",
        "title": "ME 260 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 771,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me260-01",
        "courseId": "course-me260",
        "title": "01 — ME 260 Foundations: Parametric feature-based 3D modeling: extrusions, revolves, sweeps, and lofts",
        "topic": "Parametric feature-based 3D modeling: extrusions, revolves, sweeps, and lofts",
        "order": 1,
        "duration": "27:34",
        "instructor": "Francis Appiah",
        "viewsCount": 667,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Parametric feature-based 3D modeling: extrusions, revolves, sweeps, and lofts",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me260-02",
        "courseId": "course-me260",
        "title": "02 — Problem Solving & Exam Walkthrough: Assembly constraints: coincident, concentric, distance, and gear mates",
        "topic": "Assembly constraints: coincident, concentric, distance, and gear mates",
        "order": 2,
        "duration": "33:39",
        "instructor": "Francis Appiah",
        "viewsCount": 759,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me260-01",
        "courseId": "course-me260",
        "title": "Assignment 1: Parametric feature-based 3D modeling: extrusions, revolves, sweeps, and lofts Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Machine Drawing & 3D CAD Modeling.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me260-2024",
        "courseId": "course-me260",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 260",
        "topics": [
          "Parametric feature-based 3D modeling: extrusions, revolves, sweeps, and lofts",
          "Assembly constraints: coincident, concentric, distance, and gear mates"
        ],
        "totalMarks": 100,
        "downloadCount": 733,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Parametric feature-based 3D modeling: extrusions, revolves, sweeps, and lofts in Machine Drawing & 3D CAD Modeling.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me260-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 260:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Parametric feature-based 3D modeling: extrusions, revolves, sweeps, and lofts",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me260-2023",
        "courseId": "course-me260",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 260",
        "topics": [
          "Assembly constraints: coincident, concentric, distance, and gear mates",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 571,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Machine Drawing & 3D CAD Modeling in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me260-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me260-1",
        "courseId": "course-me260",
        "title": "Welcome to ME 260 (Machine Drawing & 3D CAD Modeling)",
        "author": "Dr. Frank Okyere",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me260-2",
        "courseId": "course-me260",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me260-1",
        "courseId": "course-me260",
        "title": "Key takeaways and tips for ME 260 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 260? Any advice from seniors?",
        "upvotes": 17,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 260",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me357",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 300,
    "semester": 1,
    "code": "ME 357",
    "name": "Machine Design I",
    "creditHours": 3,
    "description": "Design methodology, static and fatigue failure theories (Soderberg, Goodman), design of transmission shafts, keys, couplings, and bolted joints.",
    "longOverview": "ME 357 applies stress analysis and material properties to design safe machine components. Focuses on stress concentrations, endurance limits under fluctuating loads, shaft sizing for combined bending and torsion according to ASME standards, and rigid/flexible couplings.",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Wrench",
    "lecturerName": "Prof. Kwaku Boateng",
    "lecturerOffice": "Engineering Block B, Room 204",
    "prerequisites": [
      "ME 252"
    ],
    "syllabusPoints": [
      "Design factors of safety, static failure criteria: Tresca and von Mises yield theories",
      "Fatigue failure under fluctuating stresses: S-N curves, Goodman and Gerber diagrams",
      "Design of power transmission shafts subjected to fluctuating bending and torsional moments",
      "Design and selection of keys (sunk keys, woodruff) and splines",
      "Design of rigid and flexible shaft couplings (flange, Oldham, universal)"
    ],
    "tutorIds": [
      "tutor-francis-appiah",
      "tutor-sherlina-amankwah"
    ],
    "materials": [
      {
        "id": "mat-me357-goodman",
        "courseId": "course-me357",
        "title": "Fatigue Failure Theories & Goodman Diagram Design Guide",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.1 MB",
        "uploadDate": "Sep 19, 2026",
        "downloadsCount": 450,
        "author": "Prof. Kwaku Boateng"
      }
    ],
    "videos": [
      {
        "id": "vid-me357-01",
        "courseId": "course-me357",
        "title": "01 — ME 357 Foundations: Design factors of safety, static failure criteria: Tresca and von Mises yield theories",
        "topic": "Design factors of safety, static failure criteria: Tresca and von Mises yield theories",
        "order": 1,
        "duration": "28:35",
        "instructor": "Francis Appiah",
        "viewsCount": 710,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Design factors of safety, static failure criteria: Tresca and von Mises yield theories",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me357-02",
        "courseId": "course-me357",
        "title": "02 — Problem Solving & Exam Walkthrough: Fatigue failure under fluctuating stresses: S-N curves, Goodman and Gerber diagrams",
        "topic": "Fatigue failure under fluctuating stresses: S-N curves, Goodman and Gerber diagrams",
        "order": 2,
        "duration": "24:40",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 790,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me357-01",
        "courseId": "course-me357",
        "title": "Assignment 1: Design factors of safety, static failure criteria: Tresca and von Mises yield theories Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Machine Design I.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me357-2024",
        "courseId": "course-me357",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 357",
        "topics": [
          "Design factors of safety, static failure criteria: Tresca and von Mises yield theories",
          "Fatigue failure under fluctuating stresses: S-N curves, Goodman and Gerber diagrams"
        ],
        "totalMarks": 100,
        "downloadCount": 760,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Design factors of safety, static failure criteria: Tresca and von Mises yield theories in Machine Design I.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me357-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 357:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Design factors of safety, static failure criteria: Tresca and von Mises yield theories",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me357-2023",
        "courseId": "course-me357",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 357",
        "topics": [
          "Fatigue failure under fluctuating stresses: S-N curves, Goodman and Gerber diagrams",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 590,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Machine Design I in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me357-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me357-1",
        "courseId": "course-me357",
        "title": "Welcome to ME 357 (Machine Design I)",
        "author": "Prof. Kwaku Boateng",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me357-2",
        "courseId": "course-me357",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me357-1",
        "courseId": "course-me357",
        "title": "Key takeaways and tips for ME 357 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 357? Any advice from seniors?",
        "upvotes": 8,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 357",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me359",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 300,
    "semester": 1,
    "code": "ME 359",
    "name": "Manufacturing Technology I (Processes)",
    "creditHours": 3,
    "description": "Metal forming processes (rolling, forging, extrusion, drawing), sheet metal stamping, powder metallurgy, plastic molding, and manufacturing economics.",
    "longOverview": "Covers industrial scale production processes: mechanics of plastic deformation in rolling mills, open and closed die forging, deep drawing, injection molding of polymers, and additive manufacturing.",
    "coverImage": "/src/assets/images/college_engineering_banner_1790747200775.jpg",
    "iconName": "Wrench",
    "lecturerName": "Dr. Kofi Asare",
    "lecturerOffice": "Manufacturing Laboratory, Room 104",
    "prerequisites": [
      "ME 257"
    ],
    "syllabusPoints": [
      "Bulk deformation processes: flat and shape rolling, roll forces, and torque calculations",
      "Forging processes: open-die, closed-die impression, and flash calculations",
      "Extrusion and wire drawing: extrusion ratio, die angles, and drawing stress limits",
      "Sheet metal forming: bending allowances, blanking, piercing, and deep drawing limits",
      "Powder metallurgy: metal powder production, compaction, and sintering stages"
    ],
    "tutorIds": [
      "tutor-sherlina-amankwah"
    ],
    "materials": [
      {
        "id": "mat-me359-syllabus",
        "courseId": "course-me359",
        "title": "ME 359: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 447,
        "author": "Dr. Kofi Asare",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Manufacturing Technology I (Processes)."
      },
      {
        "id": "mat-me359-notes",
        "courseId": "course-me359",
        "title": "Manufacturing Technology I (Processes) Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.5 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 613,
        "author": "Dr. Kofi Asare",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Bulk deformation processes: flat and shape rolling, roll forces, and torque calculations."
      },
      {
        "id": "mat-me359-formula",
        "courseId": "course-me359",
        "title": "ME 359 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 809,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me359-01",
        "courseId": "course-me359",
        "title": "01 — ME 359 Foundations: Bulk deformation processes: flat and shape rolling, roll forces, and torque calculations",
        "topic": "Bulk deformation processes: flat and shape rolling, roll forces, and torque calculations",
        "order": 1,
        "duration": "29:36",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 753,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Bulk deformation processes: flat and shape rolling, roll forces, and torque calculations",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me359-02",
        "courseId": "course-me359",
        "title": "02 — Problem Solving & Exam Walkthrough: Forging processes: open-die, closed-die impression, and flash calculations",
        "topic": "Forging processes: open-die, closed-die impression, and flash calculations",
        "order": 2,
        "duration": "25:41",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 821,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me359-01",
        "courseId": "course-me359",
        "title": "Assignment 1: Bulk deformation processes: flat and shape rolling, roll forces, and torque calculations Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Manufacturing Technology I (Processes).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me359-2024",
        "courseId": "course-me359",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 359",
        "topics": [
          "Bulk deformation processes: flat and shape rolling, roll forces, and torque calculations",
          "Forging processes: open-die, closed-die impression, and flash calculations"
        ],
        "totalMarks": 100,
        "downloadCount": 787,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Bulk deformation processes: flat and shape rolling, roll forces, and torque calculations in Manufacturing Technology I (Processes).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me359-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 359:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Bulk deformation processes: flat and shape rolling, roll forces, and torque calculations",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me359-2023",
        "courseId": "course-me359",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 359",
        "topics": [
          "Forging processes: open-die, closed-die impression, and flash calculations",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 609,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Manufacturing Technology I (Processes) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me359-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me359-1",
        "courseId": "course-me359",
        "title": "Welcome to ME 359 (Manufacturing Technology I (Processes))",
        "author": "Dr. Kofi Asare",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me359-2",
        "courseId": "course-me359",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Sherlina Amankwah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me359-1",
        "courseId": "course-me359",
        "title": "Key takeaways and tips for ME 359 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 359? Any advice from seniors?",
        "upvotes": 9,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 359",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me361",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 300,
    "semester": 1,
    "code": "ME 361",
    "name": "Engineering Mechanics III (Advanced Dynamics)",
    "creditHours": 3,
    "description": "Analytical mechanics, generalized coordinates, Lagrange’s equations, multi-degree-of-freedom vibration systems, and mode shapes.",
    "longOverview": "Advanced classical dynamics for complex multi-body systems. Covers d’Alembert principle in generalized coordinates, kinetic and potential energy formulations, Lagrange equations of motion, and modal orthogonality in 2-DOF and 3-DOF vibration systems.",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Cog",
    "lecturerName": "Prof. Kwaku Boateng",
    "lecturerOffice": "Engineering Block B, Room 204",
    "prerequisites": [
      "ME 251",
      "MATH 251"
    ],
    "syllabusPoints": [
      "Generalized coordinates, constraints, and degrees of freedom in mechanical linkages",
      "Virtual work and D’Alembert’s principle for dynamic systems",
      "Lagrangian formulation: kinetic and potential energy expressions and equations of motion",
      "Two-degree-of-freedom undamped and damped vibration systems",
      "Modal matrix, natural frequencies, and mode shape normalization"
    ],
    "tutorIds": [
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me361-syllabus",
        "courseId": "course-me361",
        "title": "ME 361: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 464,
        "author": "Prof. Kwaku Boateng",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Engineering Mechanics III (Advanced Dynamics)."
      },
      {
        "id": "mat-me361-notes",
        "courseId": "course-me361",
        "title": "Engineering Mechanics III (Advanced Dynamics) Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.8 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 636,
        "author": "Prof. Kwaku Boateng",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Generalized coordinates, constraints, and degrees of freedom in mechanical linkages."
      },
      {
        "id": "mat-me361-formula",
        "courseId": "course-me361",
        "title": "ME 361 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 628,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me361-01",
        "courseId": "course-me361",
        "title": "01 — ME 361 Foundations: Generalized coordinates, constraints, and degrees of freedom in mechanical linkages",
        "topic": "Generalized coordinates, constraints, and degrees of freedom in mechanical linkages",
        "order": 1,
        "duration": "30:37",
        "instructor": "Francis Appiah",
        "viewsCount": 796,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Generalized coordinates, constraints, and degrees of freedom in mechanical linkages",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me361-02",
        "courseId": "course-me361",
        "title": "02 — Problem Solving & Exam Walkthrough: Virtual work and D’Alembert’s principle for dynamic systems",
        "topic": "Virtual work and D’Alembert’s principle for dynamic systems",
        "order": 2,
        "duration": "26:42",
        "instructor": "Francis Appiah",
        "viewsCount": 852,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me361-01",
        "courseId": "course-me361",
        "title": "Assignment 1: Generalized coordinates, constraints, and degrees of freedom in mechanical linkages Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Engineering Mechanics III (Advanced Dynamics).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me361-2024",
        "courseId": "course-me361",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 361",
        "topics": [
          "Generalized coordinates, constraints, and degrees of freedom in mechanical linkages",
          "Virtual work and D’Alembert’s principle for dynamic systems"
        ],
        "totalMarks": 100,
        "downloadCount": 814,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Generalized coordinates, constraints, and degrees of freedom in mechanical linkages in Engineering Mechanics III (Advanced Dynamics).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me361-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 361:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Generalized coordinates, constraints, and degrees of freedom in mechanical linkages",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me361-2023",
        "courseId": "course-me361",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 361",
        "topics": [
          "Virtual work and D’Alembert’s principle for dynamic systems",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 628,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Engineering Mechanics III (Advanced Dynamics) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me361-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me361-1",
        "courseId": "course-me361",
        "title": "Welcome to ME 361 (Engineering Mechanics III (Advanced Dynamics))",
        "author": "Prof. Kwaku Boateng",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me361-2",
        "courseId": "course-me361",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me361-1",
        "courseId": "course-me361",
        "title": "Key takeaways and tips for ME 361 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 361? Any advice from seniors?",
        "upvotes": 10,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 361",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me352",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 300,
    "semester": 2,
    "code": "ME 352",
    "name": "Machine Design II (Gears, Bearings & Drives)",
    "creditHours": 3,
    "description": "Design of spur, helical, bevel, and worm gears (AGMA standards), hydrodynamic and rolling-element bearings (L10 life rating), brakes, clutches, and belt drives.",
    "longOverview": "ME 352 focuses on critical mechanical transmission components: gear tooth bending stress (Lewis equation) and pitting surface durability, selection of ball and roller bearings from manufacturer catalogs based on dynamic load ratings, and friction clutches/brakes.",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Cog",
    "lecturerName": "Prof. Kwaku Boateng",
    "lecturerOffice": "Engineering Block B, Room 204",
    "prerequisites": [
      "ME 357"
    ],
    "syllabusPoints": [
      "Spur gear design: Lewis bending equation, AGMA dynamic factor, and surface durability",
      "Helical and bevel gears: virtual number of teeth, axial thrust forces, and gear ratios",
      "Rolling-element bearings: deep groove, angular contact, and L10 bearing fatigue life calculation",
      "Hydrodynamic journal bearings: Petroff equation, Sommerfeld number, and oil film thickness",
      "Plate clutches and band/drum brakes: uniform pressure vs uniform wear theories"
    ],
    "tutorIds": [
      "tutor-francis-appiah",
      "tutor-sherlina-amankwah"
    ],
    "materials": [
      {
        "id": "mat-me352-gears",
        "courseId": "course-me352",
        "title": "AGMA Gear Design & Bearing Catalog Selection Standards",
        "category": "Study Guide",
        "fileFormat": "PDF",
        "fileSize": "3.5 MB",
        "uploadDate": "Feb 18, 2026",
        "downloadsCount": 510,
        "author": "Prof. Kwaku Boateng"
      }
    ],
    "videos": [
      {
        "id": "vid-me352-01",
        "courseId": "course-me352",
        "title": "01 — Spur Gear Tooth Design: Bending & Contact Stress",
        "topic": "Gear Design",
        "order": 1,
        "duration": "25:40",
        "instructor": "Francis Appiah",
        "viewsCount": 840,
        "description": "Applying Lewis bending stress and AGMA contact stress formulas for industrial gearboxes.",
        "keyTakeaways": [
          "Module selection",
          "Dynamic and load distribution factors"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me352-01",
        "courseId": "course-me352",
        "title": "Design Project: Two-Stage Industrial Reduction Gearbox",
        "description": "Size the spur gears, intermediate shaft, and select SKF rolling-element bearings for 15 kW electric motor drive.",
        "dueDate": "March 25, 2026",
        "status": "Open",
        "assignedDate": "Feb 24, 2026",
        "points": 100,
        "submissionRequirements": "Submit handwritten or typed calculations as a single PDF with index number."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me352-2024",
        "courseId": "course-me352",
        "title": "2024 End of Semester Examination — ME 352 Machine Design II",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "downloadCount": 720,
        "topics": [
          "Spur Gears",
          "Bearing Selection",
          "Disk Clutch"
        ],
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 30,
            "questionText": "A 20 deg full-depth spur pinion with 18 teeth rotates at 1200 rpm and transmits 10 kW to a 54-tooth gear. If allowable bending stress is 140 MPa and module is 4 mm, evaluate the tooth bending stress using the Lewis formula.",
            "solutionText": "Pitch diameter of pinion d1 = m * z1 = 4 * 18 = 72 mm = 0.072 m. Pitch line velocity v = pi * d1 * N / 60 = pi * 0.072 * 1200 / 60 = 4.524 m/s. Tangential force Ft = Power / v = 10,000 / 4.524 = 2210.4 N. Lewis form factor y for 18 teeth = 0.154 - 0.912/18 = 0.103. Bending stress sigma = Ft / (b * m * y * pi). For face width b = 10 * m = 40 mm: sigma = 2210.4 / (0.040 * 0.004 * 0.103 * 3.1416) = 42.7 MPa. Since 42.7 MPa < 140 MPa, the design is safe.",
            "solutionSteps": [
              "Step 1: Calculate pitch line velocity v = 4.52 m/s",
              "Step 2: Calculate transmitted tangential load Ft = 2210 N",
              "Step 3: Calculate Lewis bending stress sigma = 42.7 MPa",
              "Step 4: Verify safety: 42.7 MPa < 140 MPa (Safe)"
            ]
          }
        ],
        "totalMarks": 100
      }
    ],
    "announcements": [
      {
        "id": "ann-me352-1",
        "courseId": "course-me352",
        "title": "Welcome to ME 352 (Machine Design II (Gears, Bearings & Drives))",
        "author": "Prof. Kwaku Boateng",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me352-2",
        "courseId": "course-me352",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me352-1",
        "courseId": "course-me352",
        "title": "Key takeaways and tips for ME 352 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 352? Any advice from seniors?",
        "upvotes": 11,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 352",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me354",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 300,
    "semester": 2,
    "code": "ME 354",
    "name": "Heat Transfer & Thermal Equipment Design",
    "creditHours": 3,
    "description": "Steady and unsteady conduction, forced and natural convection correlations, radiation heat exchange, and design of shell-and-tube heat exchangers (LMTD and NTU methods).",
    "longOverview": "Advanced heat transfer analysis across conduction (Fourier Law, critical insulation thickness), convection (Nusselt number correlations for flat plates and pipe flow), thermal radiation (view factors and blackbody radiation), and sizing shell-and-tube and plate heat exchangers.",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Flame",
    "lecturerName": "Dr. Akwasi Frimpong",
    "lecturerOffice": "Thermo-fluids Division, Room 208",
    "prerequisites": [
      "ME 253",
      "ME 255"
    ],
    "syllabusPoints": [
      "1D and 2D steady-state conduction, thermal resistance networks, and extended fin surfaces",
      "Transient conduction: lumped capacitance method and Biot number criterion",
      "Forced convection: boundary layer equations, Reynolds and Nusselt number correlations",
      "Natural/free convection over vertical plates and horizontal cylinders (Grashof number)",
      "Radiation heat transfer: Stefan-Boltzmann law, shape factors, and radiation shields",
      "Heat exchanger design: Log Mean Temperature Difference (LMTD) and Effectiveness-NTU methods"
    ],
    "tutorIds": [
      "tutor-raymond-kwame"
    ],
    "materials": [
      {
        "id": "mat-me354-lmtd",
        "courseId": "course-me354",
        "title": "Heat Exchanger Design: LMTD & NTU Effectiveness Manual",
        "category": "Study Guide",
        "fileFormat": "PDF",
        "fileSize": "3.4 MB",
        "uploadDate": "Feb 20, 2026",
        "downloadsCount": 480,
        "author": "Dr. Akwasi Frimpong"
      }
    ],
    "videos": [
      {
        "id": "vid-me354-01",
        "courseId": "course-me354",
        "title": "01 — ME 354 Foundations: 1D and 2D steady-state conduction, thermal resistance networks, and extended fin surfaces",
        "topic": "1D and 2D steady-state conduction, thermal resistance networks, and extended fin surfaces",
        "order": 1,
        "duration": "20:39",
        "instructor": "Raymond Kwame",
        "viewsCount": 882,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in 1D and 2D steady-state conduction, thermal resistance networks, and extended fin surfaces",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me354-02",
        "courseId": "course-me354",
        "title": "02 — Problem Solving & Exam Walkthrough: Transient conduction: lumped capacitance method and Biot number criterion",
        "topic": "Transient conduction: lumped capacitance method and Biot number criterion",
        "order": 2,
        "duration": "28:44",
        "instructor": "Raymond Kwame",
        "viewsCount": 564,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me354-01",
        "courseId": "course-me354",
        "title": "Assignment 1: 1D and 2D steady-state conduction, thermal resistance networks, and extended fin surfaces Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Heat Transfer & Thermal Equipment Design.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me354-2024",
        "courseId": "course-me354",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 354",
        "topics": [
          "1D and 2D steady-state conduction, thermal resistance networks, and extended fin surfaces",
          "Transient conduction: lumped capacitance method and Biot number criterion"
        ],
        "totalMarks": 100,
        "downloadCount": 568,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for 1D and 2D steady-state conduction, thermal resistance networks, and extended fin surfaces in Heat Transfer & Thermal Equipment Design.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me354-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 354:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for 1D and 2D steady-state conduction, thermal resistance networks, and extended fin surfaces",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me354-2023",
        "courseId": "course-me354",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 354",
        "topics": [
          "Transient conduction: lumped capacitance method and Biot number criterion",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 666,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Heat Transfer & Thermal Equipment Design in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me354-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me354-1",
        "courseId": "course-me354",
        "title": "Welcome to ME 354 (Heat Transfer & Thermal Equipment Design)",
        "author": "Dr. Akwasi Frimpong",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me354-2",
        "courseId": "course-me354",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raymond Kwame",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me354-1",
        "courseId": "course-me354",
        "title": "Key takeaways and tips for ME 354 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 354? Any advice from seniors?",
        "upvotes": 12,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 354",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me356",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 300,
    "semester": 2,
    "code": "ME 356",
    "name": "Mechanics of Machines & Balancing",
    "creditHours": 3,
    "description": "Static and dynamic balancing of rotating shafts, balancing of single and multi-cylinder in-line and V-engines, firing orders, and flywheel sizing.",
    "longOverview": "Addresses dynamic imbalance in industrial rotating equipment and reciprocating internal combustion engines. Covers primary and secondary reciprocating force balancing, analytical and graphical balance polygons, and balancing weights placement.",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Cog",
    "lecturerName": "Prof. Kwaku Boateng",
    "lecturerOffice": "Engineering Block B, Room 204",
    "prerequisites": [
      "ME 351"
    ],
    "syllabusPoints": [
      "Balancing of several masses rotating in a single plane and multiple planes",
      "Primary and secondary unbalanced forces in reciprocating slider-crank mechanisms",
      "Partial balancing of locomotives and swaying couple calculation",
      "Multi-cylinder in-line engines: direct and reverse crank analysis for 4-cylinder and 6-cylinder engines",
      "Turning moment diagrams and flywheel coefficient of fluctuation of speed"
    ],
    "tutorIds": [
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me356-syllabus",
        "courseId": "course-me356",
        "title": "ME 356: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 515,
        "author": "Prof. Kwaku Boateng",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Mechanics of Machines & Balancing."
      },
      {
        "id": "mat-me356-notes",
        "courseId": "course-me356",
        "title": "Mechanics of Machines & Balancing Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "2.2 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 705,
        "author": "Prof. Kwaku Boateng",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Balancing of several masses rotating in a single plane and multiple planes."
      },
      {
        "id": "mat-me356-formula",
        "courseId": "course-me356",
        "title": "ME 356 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 685,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me356-01",
        "courseId": "course-me356",
        "title": "01 — ME 356 Foundations: Balancing of several masses rotating in a single plane and multiple planes",
        "topic": "Balancing of several masses rotating in a single plane and multiple planes",
        "order": 1,
        "duration": "21:40",
        "instructor": "Francis Appiah",
        "viewsCount": 925,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Balancing of several masses rotating in a single plane and multiple planes",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me356-02",
        "courseId": "course-me356",
        "title": "02 — Problem Solving & Exam Walkthrough: Primary and secondary unbalanced forces in reciprocating slider-crank mechanisms",
        "topic": "Primary and secondary unbalanced forces in reciprocating slider-crank mechanisms",
        "order": 2,
        "duration": "29:45",
        "instructor": "Francis Appiah",
        "viewsCount": 595,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me356-01",
        "courseId": "course-me356",
        "title": "Assignment 1: Balancing of several masses rotating in a single plane and multiple planes Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Mechanics of Machines & Balancing.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me356-2024",
        "courseId": "course-me356",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 356",
        "topics": [
          "Balancing of several masses rotating in a single plane and multiple planes",
          "Primary and secondary unbalanced forces in reciprocating slider-crank mechanisms"
        ],
        "totalMarks": 100,
        "downloadCount": 595,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Balancing of several masses rotating in a single plane and multiple planes in Mechanics of Machines & Balancing.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me356-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 356:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Balancing of several masses rotating in a single plane and multiple planes",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me356-2023",
        "courseId": "course-me356",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 356",
        "topics": [
          "Primary and secondary unbalanced forces in reciprocating slider-crank mechanisms",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 685,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Mechanics of Machines & Balancing in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me356-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me356-1",
        "courseId": "course-me356",
        "title": "Welcome to ME 356 (Mechanics of Machines & Balancing)",
        "author": "Prof. Kwaku Boateng",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me356-2",
        "courseId": "course-me356",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me356-1",
        "courseId": "course-me356",
        "title": "Key takeaways and tips for ME 356 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 356? Any advice from seniors?",
        "upvotes": 13,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 356",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me358",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 300,
    "semester": 2,
    "code": "ME 358",
    "name": "Manufacturing Technology II (CNC & Metrology)",
    "creditHours": 3,
    "description": "Theory of metal cutting (Merchant circle), tool wear and Taylor tool life equation, CNC G-code programming, and precision dimensional metrology.",
    "longOverview": "Covers orthogonal cutting mechanics, shear plane angle, cutting forces, tool life optimization, CNC milling and turning programming using ISO G & M codes, and optical comparators / CMM metrology.",
    "coverImage": "/src/assets/images/college_engineering_banner_1790747200775.jpg",
    "iconName": "Wrench",
    "lecturerName": "Dr. Kofi Asare",
    "lecturerOffice": "Manufacturing Laboratory, Room 104",
    "prerequisites": [
      "ME 359"
    ],
    "syllabusPoints": [
      "Orthogonal metal cutting: Merchant force circle, shear plane angle, and cutting ratio",
      "Cutting tool geometry, wear mechanisms (crater and flank wear), and Taylor’s tool life law",
      "Machinability, cutting fluids, and surface roughness evaluation (Ra and Rz)",
      "CNC machine tool architecture, coordinate axes, and G-code / M-code part programming",
      "Coordinate Measuring Machines (CMM) and interferometry metrology standards"
    ],
    "tutorIds": [
      "tutor-sherlina-amankwah"
    ],
    "materials": [
      {
        "id": "mat-me358-syllabus",
        "courseId": "course-me358",
        "title": "ME 358: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 532,
        "author": "Dr. Kofi Asare",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Manufacturing Technology II (CNC & Metrology)."
      },
      {
        "id": "mat-me358-notes",
        "courseId": "course-me358",
        "title": "Manufacturing Technology II (CNC & Metrology) Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "2.5 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 728,
        "author": "Dr. Kofi Asare",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Orthogonal metal cutting: Merchant force circle, shear plane angle, and cutting ratio."
      },
      {
        "id": "mat-me358-formula",
        "courseId": "course-me358",
        "title": "ME 358 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 704,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me358-01",
        "courseId": "course-me358",
        "title": "01 — ME 358 Foundations: Orthogonal metal cutting: Merchant force circle, shear plane angle, and cutting ratio",
        "topic": "Orthogonal metal cutting: Merchant force circle, shear plane angle, and cutting ratio",
        "order": 1,
        "duration": "22:41",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 968,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Orthogonal metal cutting: Merchant force circle, shear plane angle, and cutting ratio",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me358-02",
        "courseId": "course-me358",
        "title": "02 — Problem Solving & Exam Walkthrough: Cutting tool geometry, wear mechanisms (crater and flank wear), and Taylor’s tool life law",
        "topic": "Cutting tool geometry, wear mechanisms (crater and flank wear), and Taylor’s tool life law",
        "order": 2,
        "duration": "30:46",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 626,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me358-01",
        "courseId": "course-me358",
        "title": "Assignment 1: Orthogonal metal cutting: Merchant force circle, shear plane angle, and cutting ratio Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Manufacturing Technology II (CNC & Metrology).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me358-2024",
        "courseId": "course-me358",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 358",
        "topics": [
          "Orthogonal metal cutting: Merchant force circle, shear plane angle, and cutting ratio",
          "Cutting tool geometry, wear mechanisms (crater and flank wear), and Taylor’s tool life law"
        ],
        "totalMarks": 100,
        "downloadCount": 622,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Orthogonal metal cutting: Merchant force circle, shear plane angle, and cutting ratio in Manufacturing Technology II (CNC & Metrology).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me358-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 358:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Orthogonal metal cutting: Merchant force circle, shear plane angle, and cutting ratio",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me358-2023",
        "courseId": "course-me358",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 358",
        "topics": [
          "Cutting tool geometry, wear mechanisms (crater and flank wear), and Taylor’s tool life law",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 704,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Manufacturing Technology II (CNC & Metrology) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me358-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me358-1",
        "courseId": "course-me358",
        "title": "Welcome to ME 358 (Manufacturing Technology II (CNC & Metrology))",
        "author": "Dr. Kofi Asare",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me358-2",
        "courseId": "course-me358",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Sherlina Amankwah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me358-1",
        "courseId": "course-me358",
        "title": "Key takeaways and tips for ME 358 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 358? Any advice from seniors?",
        "upvotes": 14,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 358",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me360",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 300,
    "semester": 2,
    "code": "ME 360",
    "name": "Computational Methods & Finite Element Analysis (FEA)",
    "creditHours": 3,
    "description": "Introduction to finite element method (FEM), 1D bar and truss elements, 2D beam elements, plane stress/strain, stiffness matrices, and ANSYS simulation.",
    "longOverview": "Numerical structural simulation methodology. Covers direct stiffness method for trusses and beams, shape functions, element stiffness matrix derivation, global assembly, boundary conditions enforcement, and verification of ANSYS results.",
    "coverImage": "/src/assets/images/harcourt_hero_banner_1790747187384.jpg",
    "iconName": "Cpu",
    "lecturerName": "Dr. Anthony Mensah",
    "lecturerOffice": "Engineering Block A, Room 112",
    "prerequisites": [
      "ME 252",
      "MATH 252"
    ],
    "syllabusPoints": [
      "Basic steps in FEM: discretization, interpolation functions, and element equations",
      "1D spring and bar elements: local and global stiffness matrices [K]{u} = {F}",
      "Plane truss structures: coordinate transformation matrices and member forces",
      "Beam elements: Hermite shape functions and nodal degrees of freedom",
      "2D constant strain triangle (CST) and isoparametric quadrilateral elements",
      "Hands-on FEA modeling in ANSYS Workbench: meshing convergence and stress singularities"
    ],
    "tutorIds": [
      "tutor-raphael-mensah"
    ],
    "materials": [
      {
        "id": "mat-me360-syllabus",
        "courseId": "course-me360",
        "title": "ME 360: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 549,
        "author": "Dr. Anthony Mensah",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Computational Methods & Finite Element Analysis (FEA)."
      },
      {
        "id": "mat-me360-notes",
        "courseId": "course-me360",
        "title": "Computational Methods & Finite Element Analysis (FEA) Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "2.8 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 751,
        "author": "Dr. Anthony Mensah",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Basic steps in FEM: discretization, interpolation functions, and element equations."
      },
      {
        "id": "mat-me360-formula",
        "courseId": "course-me360",
        "title": "ME 360 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 723,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me360-01",
        "courseId": "course-me360",
        "title": "01 — ME 360 Foundations: Basic steps in FEM: discretization, interpolation functions, and element equations",
        "topic": "Basic steps in FEM: discretization, interpolation functions, and element equations",
        "order": 1,
        "duration": "23:42",
        "instructor": "Raphael Mensah",
        "viewsCount": 1011,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Basic steps in FEM: discretization, interpolation functions, and element equations",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me360-02",
        "courseId": "course-me360",
        "title": "02 — Problem Solving & Exam Walkthrough: 1D spring and bar elements: local and global stiffness matrices [K]{u} = {F}",
        "topic": "1D spring and bar elements: local and global stiffness matrices [K]{u} = {F}",
        "order": 2,
        "duration": "31:47",
        "instructor": "Raphael Mensah",
        "viewsCount": 657,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me360-01",
        "courseId": "course-me360",
        "title": "Assignment 1: Basic steps in FEM: discretization, interpolation functions, and element equations Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Computational Methods & Finite Element Analysis (FEA).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me360-2024",
        "courseId": "course-me360",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 360",
        "topics": [
          "Basic steps in FEM: discretization, interpolation functions, and element equations",
          "1D spring and bar elements: local and global stiffness matrices [K]{u} = {F}"
        ],
        "totalMarks": 100,
        "downloadCount": 649,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Basic steps in FEM: discretization, interpolation functions, and element equations in Computational Methods & Finite Element Analysis (FEA).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me360-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 360:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Basic steps in FEM: discretization, interpolation functions, and element equations",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me360-2023",
        "courseId": "course-me360",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 360",
        "topics": [
          "1D spring and bar elements: local and global stiffness matrices [K]{u} = {F}",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 473,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Computational Methods & Finite Element Analysis (FEA) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me360-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me360-1",
        "courseId": "course-me360",
        "title": "Welcome to ME 360 (Computational Methods & Finite Element Analysis (FEA))",
        "author": "Dr. Anthony Mensah",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me360-2",
        "courseId": "course-me360",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raphael Mensah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me360-1",
        "courseId": "course-me360",
        "title": "Key takeaways and tips for ME 360 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 360? Any advice from seniors?",
        "upvotes": 15,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 360",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me362",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 300,
    "semester": 2,
    "code": "ME 362",
    "name": "Operations Research & Production Management",
    "creditHours": 3,
    "description": "Linear programming (simplex method), transportation and assignment models, critical path method (CPM/PERT), inventory control (EOQ), and queueing theory.",
    "longOverview": "Quantitative decision-making for manufacturing and industrial plants in West Africa. Covers resource allocation optimization, plant logistics, project scheduling (PERT/CPM), and economic order quantity (EOQ) inventory policies.",
    "coverImage": "/src/assets/images/harcourt_hero_banner_1790747187384.jpg",
    "iconName": "Activity",
    "lecturerName": "Dr. Kwasi Poku",
    "lecturerOffice": "Industrial Engineering Division",
    "prerequisites": [
      "MATH 252"
    ],
    "syllabusPoints": [
      "Formulation of Linear Programming problems and graphical solution",
      "Simplex algorithm for maximization and minimization with artificial variables (Big-M)",
      "Transportation problem: North-West Corner, Vogel’s Approximation, and MODI method",
      "Project management: Network diagrams, Critical Path Method (CPM), and PERT probability of completion",
      "Deterministic inventory models: Economic Order Quantity (EOQ) with and without shortages"
    ],
    "tutorIds": [
      "tutor-sherlina-amankwah"
    ],
    "materials": [
      {
        "id": "mat-me362-syllabus",
        "courseId": "course-me362",
        "title": "ME 362: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 566,
        "author": "Dr. Kwasi Poku",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Operations Research & Production Management."
      },
      {
        "id": "mat-me362-notes",
        "courseId": "course-me362",
        "title": "Operations Research & Production Management Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.1 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 774,
        "author": "Dr. Kwasi Poku",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Formulation of Linear Programming problems and graphical solution."
      },
      {
        "id": "mat-me362-formula",
        "courseId": "course-me362",
        "title": "ME 362 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 742,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me362-01",
        "courseId": "course-me362",
        "title": "01 — ME 362 Foundations: Formulation of Linear Programming problems and graphical solution",
        "topic": "Formulation of Linear Programming problems and graphical solution",
        "order": 1,
        "duration": "24:43",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 654,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Formulation of Linear Programming problems and graphical solution",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me362-02",
        "courseId": "course-me362",
        "title": "02 — Problem Solving & Exam Walkthrough: Simplex algorithm for maximization and minimization with artificial variables (Big-M)",
        "topic": "Simplex algorithm for maximization and minimization with artificial variables (Big-M)",
        "order": 2,
        "duration": "32:48",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 688,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me362-01",
        "courseId": "course-me362",
        "title": "Assignment 1: Formulation of Linear Programming problems and graphical solution Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Operations Research & Production Management.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me362-2024",
        "courseId": "course-me362",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 362",
        "topics": [
          "Formulation of Linear Programming problems and graphical solution",
          "Simplex algorithm for maximization and minimization with artificial variables (Big-M)"
        ],
        "totalMarks": 100,
        "downloadCount": 676,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Formulation of Linear Programming problems and graphical solution in Operations Research & Production Management.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me362-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 362:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Formulation of Linear Programming problems and graphical solution",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me362-2023",
        "courseId": "course-me362",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 362",
        "topics": [
          "Simplex algorithm for maximization and minimization with artificial variables (Big-M)",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 492,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Operations Research & Production Management in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me362-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me362-1",
        "courseId": "course-me362",
        "title": "Welcome to ME 362 (Operations Research & Production Management)",
        "author": "Dr. Kwasi Poku",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me362-2",
        "courseId": "course-me362",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Sherlina Amankwah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me362-1",
        "courseId": "course-me362",
        "title": "Key takeaways and tips for ME 362 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 362? Any advice from seniors?",
        "upvotes": 16,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 362",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me451",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 400,
    "semester": 1,
    "code": "ME 451",
    "name": "Power Plant Engineering",
    "creditHours": 3,
    "description": "Thermal steam power cycles, super-critical boilers, steam turbines, gas turbine combined cycle (CCGT), hydro-electric power plants (Akosombo, Bui), and plant economics.",
    "longOverview": "ME 451 prepares mechanical engineers for Ghana’s power generation sector (VRA, Bui Power, Karpowership, Sunon Asogli). Covers high-pressure boilers, steam turbine staging, combined cycle gas turbine thermodynamics, hydro plant penstocks and governing, and cost per kWh generation economics.",
    "coverImage": "/src/assets/images/college_engineering_banner_1790747200775.jpg",
    "iconName": "Flame",
    "lecturerName": "Prof. Moses Mensah",
    "lecturerOffice": "Energy Centre, Block E",
    "prerequisites": [
      "ME 254",
      "ME 354"
    ],
    "syllabusPoints": [
      "Load duration curves, diversity factor, capacity factor, and power plant economics",
      "Modern steam generators: pulverized coal, circulating fluidized bed, and heat recovery steam generators (HRSG)",
      "Steam turbine compound staging: impulse and reaction turbines, governing mechanisms",
      "Combined Cycle Gas Turbine (CCGT) power plants and cogenerative district heating",
      "Hydroelectric power generation: Pelton, Francis, and Kaplan turbines, surge tanks, and penstocks",
      "Environmental impacts: flue gas desulfurization (FGD), carbon emissions, and cooling towers"
    ],
    "tutorIds": [
      "tutor-raymond-kwame",
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me451-ccgt",
        "courseId": "course-me451",
        "title": "Combined Cycle Gas Turbine (CCGT) Systems & Thermodynamics",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.7 MB",
        "uploadDate": "Sep 16, 2026",
        "downloadsCount": 490,
        "author": "Prof. Moses Mensah"
      }
    ],
    "videos": [
      {
        "id": "vid-me451-01",
        "courseId": "course-me451",
        "title": "01 — Combined Cycle (Brayton-Rankine) Plant Thermal Efficiency",
        "topic": "Combined Cycle",
        "order": 1,
        "duration": "29:15",
        "instructor": "Raymond Kwame",
        "viewsCount": 680,
        "description": "Analyzing thermodynamic efficiency gains of dual-pressure HRSG bottoming cycles.",
        "keyTakeaways": [
          "Pinch point temperature differences",
          "Overall plant heat rate"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me451-01",
        "courseId": "course-me451",
        "title": "Thermal Plant Optimization & Heat Balance Diagram",
        "description": "Construct the comprehensive heat-balance diagram for a 350 MW regenerative steam cycle with reheat.",
        "dueDate": "October 28, 2026",
        "status": "Open",
        "assignedDate": "Sep 27, 2026",
        "points": 100,
        "submissionRequirements": "Submit handwritten or typed calculations as a single PDF with index number."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me451-2024",
        "courseId": "course-me451",
        "title": "2024 End of Semester Exam — ME 451 Power Plant Engineering",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "downloadCount": 610,
        "topics": [
          "HRSG Combined Cycle",
          "Steam Turbine Governing",
          "Hydro Surge Tank"
        ],
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 30,
            "questionText": "A gas turbine exhaust entering a Heat Recovery Steam Generator (HRSG) at 550 deg C produces superheated steam at 50 bar and 450 deg C. Calculate the steam generation rate per kg of gas flow if exhaust gas exits at 160 deg C.",
            "solutionText": "Heat lost by exhaust gas Q = m_gas * Cp_gas * (T_in - T_out). With Cp_gas = 1.08 kJ/kg.K, Q = 1 * 1.08 * (550 - 160) = 421.2 kJ/kg gas. From steam tables at 50 bar and 450 deg C: h_steam = 3316 kJ/kg. Feedwater enters at 120 deg C: h_fw = 503.7 kJ/kg. Delta_h_steam = 3316 - 503.7 = 2812.3 kJ/kg. Mass of steam generated per kg gas = Q / Delta_h = 421.2 / 2812.3 = 0.150 kg steam / kg exhaust gas.",
            "solutionSteps": [
              "Step 1: Calculate heat released by exhaust gas Q = 421.2 kJ",
              "Step 2: Read enthalpies from steam tables: h_steam = 3316, h_fw = 503.7 kJ/kg",
              "Step 3: Steam generation rate = 0.150 kg steam per kg of flue gas"
            ]
          }
        ],
        "totalMarks": 100
      }
    ],
    "announcements": [
      {
        "id": "ann-me451-1",
        "courseId": "course-me451",
        "title": "Welcome to ME 451 (Power Plant Engineering)",
        "author": "Prof. Moses Mensah",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me451-2",
        "courseId": "course-me451",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raymond Kwame",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me451-1",
        "courseId": "course-me451",
        "title": "Key takeaways and tips for ME 451 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 451? Any advice from seniors?",
        "upvotes": 17,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 451",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me453",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 400,
    "semester": 1,
    "code": "ME 453",
    "name": "Refrigeration and Air Conditioning (HVAC)",
    "creditHours": 3,
    "description": "Psychrometric processes, cooling load estimation, vapor compression and absorption systems, refrigerants (R134a, R410A, low-GWP), duct design, and air distribution.",
    "longOverview": "HVAC system design for tropical climates. Covers psychrometric charts, cooling coils, sensible and latent heat loads, cooling tower water loops, and ASHRAE comfort standards.",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Flame",
    "lecturerName": "Dr. Akwasi Frimpong",
    "lecturerOffice": "Thermo-fluids Division, Room 208",
    "prerequisites": [
      "ME 254",
      "ME 354"
    ],
    "syllabusPoints": [
      "Psychrometric properties: dry-bulb, wet-bulb, relative humidity, humidity ratio, and enthalpy",
      "Psychrometric processes: sensible heating/cooling, humidification, dehumidification, and adiabatic mixing",
      "Building cooling load calculation: solar radiation through glass, wall conduction, internal loads, and ventilation",
      "Multi-stage vapor compression with flash gas removal and intercooling",
      "Duct design methods: equal friction and static regain methods, diffuser selection"
    ],
    "tutorIds": [
      "tutor-raymond-kwame"
    ],
    "materials": [
      {
        "id": "mat-me453-syllabus",
        "courseId": "course-me453",
        "title": "ME 453: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 350,
        "author": "Dr. Akwasi Frimpong",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Refrigeration and Air Conditioning (HVAC)."
      },
      {
        "id": "mat-me453-notes",
        "courseId": "course-me453",
        "title": "Refrigeration and Air Conditioning (HVAC) Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.7 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 820,
        "author": "Dr. Akwasi Frimpong",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Psychrometric properties: dry-bulb, wet-bulb, relative humidity, humidity ratio, and enthalpy."
      },
      {
        "id": "mat-me453-formula",
        "courseId": "course-me453",
        "title": "ME 453 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 780,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me453-01",
        "courseId": "course-me453",
        "title": "01 — ME 453 Foundations: Psychrometric properties: dry-bulb, wet-bulb, relative humidity, humidity ratio, and enthalpy",
        "topic": "Psychrometric properties: dry-bulb, wet-bulb, relative humidity, humidity ratio, and enthalpy",
        "order": 1,
        "duration": "26:45",
        "instructor": "Raymond Kwame",
        "viewsCount": 740,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Psychrometric properties: dry-bulb, wet-bulb, relative humidity, humidity ratio, and enthalpy",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me453-02",
        "courseId": "course-me453",
        "title": "02 — Problem Solving & Exam Walkthrough: Psychrometric processes: sensible heating/cooling, humidification, dehumidification, and adiabatic mixing",
        "topic": "Psychrometric processes: sensible heating/cooling, humidification, dehumidification, and adiabatic mixing",
        "order": 2,
        "duration": "24:50",
        "instructor": "Raymond Kwame",
        "viewsCount": 750,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me453-01",
        "courseId": "course-me453",
        "title": "Assignment 1: Psychrometric properties: dry-bulb, wet-bulb, relative humidity, humidity ratio, and enthalpy Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Refrigeration and Air Conditioning (HVAC).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me453-2024",
        "courseId": "course-me453",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 453",
        "topics": [
          "Psychrometric properties: dry-bulb, wet-bulb, relative humidity, humidity ratio, and enthalpy",
          "Psychrometric processes: sensible heating/cooling, humidification, dehumidification, and adiabatic mixing"
        ],
        "totalMarks": 100,
        "downloadCount": 730,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Psychrometric properties: dry-bulb, wet-bulb, relative humidity, humidity ratio, and enthalpy in Refrigeration and Air Conditioning (HVAC).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me453-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 453:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Psychrometric properties: dry-bulb, wet-bulb, relative humidity, humidity ratio, and enthalpy",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me453-2023",
        "courseId": "course-me453",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 453",
        "topics": [
          "Psychrometric processes: sensible heating/cooling, humidification, dehumidification, and adiabatic mixing",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 530,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Refrigeration and Air Conditioning (HVAC) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me453-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me453-1",
        "courseId": "course-me453",
        "title": "Welcome to ME 453 (Refrigeration and Air Conditioning (HVAC))",
        "author": "Dr. Akwasi Frimpong",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me453-2",
        "courseId": "course-me453",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raymond Kwame",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me453-1",
        "courseId": "course-me453",
        "title": "Key takeaways and tips for ME 453 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 453? Any advice from seniors?",
        "upvotes": 8,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 453",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me455",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 400,
    "semester": 1,
    "code": "ME 455",
    "name": "Turbo-Machinery",
    "creditHours": 3,
    "description": "Euler turbomachine equation, velocity triangles, centrifugal and axial flow pumps, compressors, impulse and reaction turbines, cavitation, and NPSH.",
    "longOverview": "Theoretical analysis and design of fluid machines: centrifugal pumps, axial compressors, Pelton and Francis turbines, blade cascade aerodynamics, and preventing cavitation damage.",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Cog",
    "lecturerName": "Dr. George Osei-Poku",
    "lecturerOffice": "Hydraulics Laboratory Building",
    "prerequisites": [
      "ME 256"
    ],
    "syllabusPoints": [
      "Euler turbomachinery equation: angular momentum principles and theoretical head",
      "Velocity triangles at blade inlet and exit: relative velocity, blade angles, and slip factor",
      "Centrifugal pumps: head-capacity curves, system characteristic curves, and Net Positive Suction Head (NPSH)",
      "Centrifugal and axial flow compressors: stage pressure ratios, surging, and stalling phenomena",
      "Hydraulic turbines: Pelton wheel bucket geometry, Francis turbine runner blades, and draft tube efficiency"
    ],
    "tutorIds": [
      "tutor-raymond-kwame"
    ],
    "materials": [
      {
        "id": "mat-me455-syllabus",
        "courseId": "course-me455",
        "title": "ME 455: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 367,
        "author": "Dr. George Osei-Poku",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Turbo-Machinery."
      },
      {
        "id": "mat-me455-notes",
        "courseId": "course-me455",
        "title": "Turbo-Machinery Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "4.0 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 493,
        "author": "Dr. George Osei-Poku",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Euler turbomachinery equation: angular momentum principles and theoretical head."
      },
      {
        "id": "mat-me455-formula",
        "courseId": "course-me455",
        "title": "ME 455 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 799,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me455-01",
        "courseId": "course-me455",
        "title": "01 — ME 455 Foundations: Euler turbomachinery equation: angular momentum principles and theoretical head",
        "topic": "Euler turbomachinery equation: angular momentum principles and theoretical head",
        "order": 1,
        "duration": "27:46",
        "instructor": "Raymond Kwame",
        "viewsCount": 783,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Euler turbomachinery equation: angular momentum principles and theoretical head",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me455-02",
        "courseId": "course-me455",
        "title": "02 — Problem Solving & Exam Walkthrough: Velocity triangles at blade inlet and exit: relative velocity, blade angles, and slip factor",
        "topic": "Velocity triangles at blade inlet and exit: relative velocity, blade angles, and slip factor",
        "order": 2,
        "duration": "25:51",
        "instructor": "Raymond Kwame",
        "viewsCount": 781,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me455-01",
        "courseId": "course-me455",
        "title": "Assignment 1: Euler turbomachinery equation: angular momentum principles and theoretical head Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Turbo-Machinery.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me455-2024",
        "courseId": "course-me455",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 455",
        "topics": [
          "Euler turbomachinery equation: angular momentum principles and theoretical head",
          "Velocity triangles at blade inlet and exit: relative velocity, blade angles, and slip factor"
        ],
        "totalMarks": 100,
        "downloadCount": 757,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Euler turbomachinery equation: angular momentum principles and theoretical head in Turbo-Machinery.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me455-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 455:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Euler turbomachinery equation: angular momentum principles and theoretical head",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me455-2023",
        "courseId": "course-me455",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 455",
        "topics": [
          "Velocity triangles at blade inlet and exit: relative velocity, blade angles, and slip factor",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 549,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Turbo-Machinery in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me455-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me455-1",
        "courseId": "course-me455",
        "title": "Welcome to ME 455 (Turbo-Machinery)",
        "author": "Dr. George Osei-Poku",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me455-2",
        "courseId": "course-me455",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raymond Kwame",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me455-1",
        "courseId": "course-me455",
        "title": "Key takeaways and tips for ME 455 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 455? Any advice from seniors?",
        "upvotes": 9,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 455",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me457",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 400,
    "semester": 1,
    "code": "ME 457",
    "name": "Computer-Aided Design & Manufacturing (CAD/CAM)",
    "creditHours": 3,
    "description": "CAD geometric representations (B-rep, CSG, NURBS), toolpath generation, multi-axis CNC machining, post-processing, and additive manufacturing integration.",
    "longOverview": "Advanced digital manufacturing integration: automated 3D toolpath creation, mastercam post-processors, collision simulation, and rapid prototyping (3D printing).",
    "coverImage": "/src/assets/images/college_engineering_banner_1790747200775.jpg",
    "iconName": "Cpu",
    "lecturerName": "Dr. Frank Okyere",
    "lecturerOffice": "CAD/CAM Centre, Engineering Faculty",
    "prerequisites": [
      "ME 260",
      "ME 358"
    ],
    "syllabusPoints": [
      "Computational geometry: Hermite curves, Bezier curves, B-spline curves, and NURBS surfaces",
      "Solid modeling representations: Boundary Representation (B-Rep) and Constructive Solid Geometry (CSG)",
      "Computer-Aided Manufacturing (CAM): 3-axis and 5-axis milling toolpath strategies",
      "G-code post-processing, cutter radius compensation (G41/G42), and canned cycles",
      "Additive manufacturing technologies (FDM, SLA, SLS) and slicing parameter optimization"
    ],
    "tutorIds": [
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me457-syllabus",
        "courseId": "course-me457",
        "title": "ME 457: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 384,
        "author": "Dr. Frank Okyere",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Computer-Aided Design & Manufacturing (CAD/CAM)."
      },
      {
        "id": "mat-me457-notes",
        "courseId": "course-me457",
        "title": "Computer-Aided Design & Manufacturing (CAD/CAM) Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "4.3 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 516,
        "author": "Dr. Frank Okyere",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Computational geometry: Hermite curves, Bezier curves, B-spline curves, and NURBS surfaces."
      },
      {
        "id": "mat-me457-formula",
        "courseId": "course-me457",
        "title": "ME 457 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 618,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me457-01",
        "courseId": "course-me457",
        "title": "01 — ME 457 Foundations: Computational geometry: Hermite curves, Bezier curves, B-spline curves, and NURBS surfaces",
        "topic": "Computational geometry: Hermite curves, Bezier curves, B-spline curves, and NURBS surfaces",
        "order": 1,
        "duration": "28:47",
        "instructor": "Francis Appiah",
        "viewsCount": 826,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Computational geometry: Hermite curves, Bezier curves, B-spline curves, and NURBS surfaces",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me457-02",
        "courseId": "course-me457",
        "title": "02 — Problem Solving & Exam Walkthrough: Solid modeling representations: Boundary Representation (B-Rep) and Constructive Solid Geometry (CSG)",
        "topic": "Solid modeling representations: Boundary Representation (B-Rep) and Constructive Solid Geometry (CSG)",
        "order": 2,
        "duration": "26:52",
        "instructor": "Francis Appiah",
        "viewsCount": 812,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me457-01",
        "courseId": "course-me457",
        "title": "Assignment 1: Computational geometry: Hermite curves, Bezier curves, B-spline curves, and NURBS surfaces Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Computer-Aided Design & Manufacturing (CAD/CAM).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me457-2024",
        "courseId": "course-me457",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 457",
        "topics": [
          "Computational geometry: Hermite curves, Bezier curves, B-spline curves, and NURBS surfaces",
          "Solid modeling representations: Boundary Representation (B-Rep) and Constructive Solid Geometry (CSG)"
        ],
        "totalMarks": 100,
        "downloadCount": 784,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Computational geometry: Hermite curves, Bezier curves, B-spline curves, and NURBS surfaces in Computer-Aided Design & Manufacturing (CAD/CAM).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me457-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 457:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Computational geometry: Hermite curves, Bezier curves, B-spline curves, and NURBS surfaces",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me457-2023",
        "courseId": "course-me457",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 457",
        "topics": [
          "Solid modeling representations: Boundary Representation (B-Rep) and Constructive Solid Geometry (CSG)",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 568,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Computer-Aided Design & Manufacturing (CAD/CAM) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me457-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me457-1",
        "courseId": "course-me457",
        "title": "Welcome to ME 457 (Computer-Aided Design & Manufacturing (CAD/CAM))",
        "author": "Dr. Frank Okyere",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me457-2",
        "courseId": "course-me457",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me457-1",
        "courseId": "course-me457",
        "title": "Key takeaways and tips for ME 457 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 457? Any advice from seniors?",
        "upvotes": 10,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 457",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me459",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 400,
    "semester": 1,
    "code": "ME 459",
    "name": "Maintenance Engineering & Plant Reliability",
    "creditHours": 3,
    "description": "Reliability-Centered Maintenance (RCM), Mean Time Between Failures (MTBF), vibration condition monitoring, oil analysis, thermography, and total productive maintenance (TPM).",
    "longOverview": "Industrial plant asset management: failure modes and effects analysis (FMEA), Weibull reliability distribution, predictive maintenance via FFT vibration analysis, and infrared thermography.",
    "coverImage": "/src/assets/images/college_engineering_banner_1790747200775.jpg",
    "iconName": "Wrench",
    "lecturerName": "Ing. Dr. Eric Amoah",
    "lecturerOffice": "Industrial Plant Operations Unit",
    "prerequisites": [
      "ME 351"
    ],
    "syllabusPoints": [
      "Maintenance philosophies: Corrective, Preventive, Predictive, and Reliability-Centered Maintenance (RCM)",
      "Reliability mathematics: failure rate, MTBF, MTTF, MTTR, and Weibull probability distribution",
      "Vibration analysis: FFT spectrums, unbalance, misalignment, looseness, and bearing fault frequencies",
      "Oil condition monitoring: kinematic viscosity, particle counting, and spectroscopic analysis",
      "Failure Modes and Effects Analysis (FMEA) and Risk Priority Number (RPN) prioritization"
    ],
    "tutorIds": [
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me459-syllabus",
        "courseId": "course-me459",
        "title": "ME 459: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 401,
        "author": "Ing. Dr. Eric Amoah",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Maintenance Engineering & Plant Reliability."
      },
      {
        "id": "mat-me459-notes",
        "courseId": "course-me459",
        "title": "Maintenance Engineering & Plant Reliability Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "4.6 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 539,
        "author": "Ing. Dr. Eric Amoah",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Maintenance philosophies: Corrective, Preventive, Predictive, and Reliability-Centered Maintenance (RCM)."
      },
      {
        "id": "mat-me459-formula",
        "courseId": "course-me459",
        "title": "ME 459 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 637,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me459-01",
        "courseId": "course-me459",
        "title": "01 — ME 459 Foundations: Maintenance philosophies: Corrective, Preventive, Predictive, and Reliability-Centered Maintenance (RCM)",
        "topic": "Maintenance philosophies: Corrective, Preventive, Predictive, and Reliability-Centered Maintenance (RCM)",
        "order": 1,
        "duration": "29:48",
        "instructor": "Francis Appiah",
        "viewsCount": 869,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Maintenance philosophies: Corrective, Preventive, Predictive, and Reliability-Centered Maintenance (RCM)",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me459-02",
        "courseId": "course-me459",
        "title": "02 — Problem Solving & Exam Walkthrough: Reliability mathematics: failure rate, MTBF, MTTF, MTTR, and Weibull probability distribution",
        "topic": "Reliability mathematics: failure rate, MTBF, MTTF, MTTR, and Weibull probability distribution",
        "order": 2,
        "duration": "27:53",
        "instructor": "Francis Appiah",
        "viewsCount": 843,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me459-01",
        "courseId": "course-me459",
        "title": "Assignment 1: Maintenance philosophies: Corrective, Preventive, Predictive, and Reliability-Centered Maintenance (RCM) Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Maintenance Engineering & Plant Reliability.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me459-2024",
        "courseId": "course-me459",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 459",
        "topics": [
          "Maintenance philosophies: Corrective, Preventive, Predictive, and Reliability-Centered Maintenance (RCM)",
          "Reliability mathematics: failure rate, MTBF, MTTF, MTTR, and Weibull probability distribution"
        ],
        "totalMarks": 100,
        "downloadCount": 811,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Maintenance philosophies: Corrective, Preventive, Predictive, and Reliability-Centered Maintenance (RCM) in Maintenance Engineering & Plant Reliability.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me459-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 459:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Maintenance philosophies: Corrective, Preventive, Predictive, and Reliability-Centered Maintenance (RCM)",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me459-2023",
        "courseId": "course-me459",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 459",
        "topics": [
          "Reliability mathematics: failure rate, MTBF, MTTF, MTTR, and Weibull probability distribution",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 587,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Maintenance Engineering & Plant Reliability in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me459-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me459-1",
        "courseId": "course-me459",
        "title": "Welcome to ME 459 (Maintenance Engineering & Plant Reliability)",
        "author": "Ing. Dr. Eric Amoah",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me459-2",
        "courseId": "course-me459",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me459-1",
        "courseId": "course-me459",
        "title": "Key takeaways and tips for ME 459 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 459? Any advice from seniors?",
        "upvotes": 11,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 459",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me497",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 400,
    "semester": 1,
    "code": "ME 497",
    "name": "Final Year Research Project I (Capstone Design)",
    "creditHours": 3,
    "description": "Literature review, problem definition, mathematical and CAD design, engineering feasibility, and proposal defense of the capstone engineering design.",
    "longOverview": "Students work under academic supervision to formulate an engineering project addressing industrial or socio-economic challenges in West Africa: renewable energy systems, agricultural processing machinery, or robotic automation.",
    "coverImage": "/src/assets/images/harcourt_hero_banner_1790747187384.jpg",
    "iconName": "BookOpen",
    "lecturerName": "Prof. Kwaku Boateng & Faculty Board",
    "lecturerOffice": "Departmental Project Coordinator Office",
    "prerequisites": [
      "Level 300 Standing"
    ],
    "syllabusPoints": [
      "Engineering problem formulation, requirements specification, and constraints",
      "Comprehensive literature review and intellectual property search",
      "System conceptual design and engineering feasibility assessment",
      "Preliminary CAD models, mathematical calculations, and design defense proposal"
    ],
    "tutorIds": [
      "tutor-francis-appiah",
      "tutor-raymond-kwame"
    ],
    "materials": [
      {
        "id": "mat-me497-syllabus",
        "courseId": "course-me497",
        "title": "ME 497: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 418,
        "author": "Prof. Kwaku Boateng & Faculty Board",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Final Year Research Project I (Capstone Design)."
      },
      {
        "id": "mat-me497-notes",
        "courseId": "course-me497",
        "title": "Final Year Research Project I (Capstone Design) Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "2.4 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 562,
        "author": "Prof. Kwaku Boateng & Faculty Board",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Engineering problem formulation, requirements specification, and constraints."
      },
      {
        "id": "mat-me497-formula",
        "courseId": "course-me497",
        "title": "ME 497 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 656,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me497-01",
        "courseId": "course-me497",
        "title": "01 — ME 497 Foundations: Engineering problem formulation, requirements specification, and constraints",
        "topic": "Engineering problem formulation, requirements specification, and constraints",
        "order": 1,
        "duration": "30:49",
        "instructor": "Francis Appiah",
        "viewsCount": 912,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Engineering problem formulation, requirements specification, and constraints",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me497-02",
        "courseId": "course-me497",
        "title": "02 — Problem Solving & Exam Walkthrough: Comprehensive literature review and intellectual property search",
        "topic": "Comprehensive literature review and intellectual property search",
        "order": 2,
        "duration": "28:54",
        "instructor": "Raymond Kwame",
        "viewsCount": 524,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me497-01",
        "courseId": "course-me497",
        "title": "Assignment 1: Engineering problem formulation, requirements specification, and constraints Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Final Year Research Project I (Capstone Design).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me497-2024",
        "courseId": "course-me497",
        "year": 2024,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 497",
        "topics": [
          "Engineering problem formulation, requirements specification, and constraints",
          "Comprehensive literature review and intellectual property search"
        ],
        "totalMarks": 100,
        "downloadCount": 538,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Engineering problem formulation, requirements specification, and constraints in Final Year Research Project I (Capstone Design).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me497-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 497:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Engineering problem formulation, requirements specification, and constraints",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me497-2023",
        "courseId": "course-me497",
        "year": 2023,
        "semester": 1,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 497",
        "topics": [
          "Comprehensive literature review and intellectual property search",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 606,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Final Year Research Project I (Capstone Design) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me497-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me497-1",
        "courseId": "course-me497",
        "title": "Welcome to ME 497 (Final Year Research Project I (Capstone Design))",
        "author": "Prof. Kwaku Boateng & Faculty Board",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me497-2",
        "courseId": "course-me497",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me497-1",
        "courseId": "course-me497",
        "title": "Key takeaways and tips for ME 497 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 497? Any advice from seniors?",
        "upvotes": 12,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 497",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me452",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 400,
    "semester": 2,
    "code": "ME 452",
    "name": "Internal Combustion Engines & Alternative Fuels",
    "creditHours": 3,
    "description": "Spark-ignition and compression-ignition combustion physics, knock phenomenon, fuel injection systems, turbocharging, alternative biofuels, and emissions control (Euro/EPA).",
    "longOverview": "Deep dive into IC engine engineering: cylinder pressure-crank angle analysis, flame propagation, diesel fuel injection spray dynamics, common-rail direct injection, catalytic converters, and biodiesel/bio-ethanol blending.",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Flame",
    "lecturerName": "Prof. Kwaku Boateng",
    "lecturerOffice": "Internal Combustion Engine Lab",
    "prerequisites": [
      "ME 254"
    ],
    "syllabusPoints": [
      "Combustion in SI engines: flame development, abnormal combustion, detonation, and octane ratings",
      "Combustion in CI engines: ignition delay, premixed and diffusion combustion, cetane number",
      "Modern fuel injection: Electronic Fuel Injection (EFI) and Common Rail Diesel Injection (CRDI)",
      "Engine breathing: volumetric efficiency, supercharging, turbocharging, and variable valve timing (VVT)",
      "Engine exhaust emissions: NOx, CO, unburned HC, particulates, and catalytic converter reactions",
      "Alternative green fuels: biodiesel, compressed natural gas (CNG), and hydrogen engine feasibility"
    ],
    "tutorIds": [
      "tutor-raymond-kwame",
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me452-combustion",
        "courseId": "course-me452",
        "title": "IC Engine Combustion Chemistry & Emissions Control Handbook",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.6 MB",
        "uploadDate": "Feb 15, 2026",
        "downloadsCount": 520,
        "author": "Prof. Kwaku Boateng"
      }
    ],
    "videos": [
      {
        "id": "vid-me452-01",
        "courseId": "course-me452",
        "title": "01 — Flame Propagation, Detonation & Octane Rating in SI Engines",
        "topic": "Engine Combustion",
        "order": 1,
        "duration": "27:10",
        "instructor": "Francis Appiah",
        "viewsCount": 790,
        "description": "Why engine knocking occurs and how combustion chamber geometry prevents auto-ignition.",
        "keyTakeaways": [
          "P-theta diagrams",
          "Octane rating mechanisms"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me452-01",
        "courseId": "course-me452",
        "title": "Engine Thermodynamic Performance & Indicated Power Analysis",
        "description": "Calculate the indicated mean effective pressure (IMEP), brake thermal efficiency, and specific fuel consumption from dynamometer test data.",
        "dueDate": "April 10, 2026",
        "status": "Open",
        "assignedDate": "March 01, 2026",
        "points": 100,
        "submissionRequirements": "Submit handwritten or typed calculations as a single PDF with index number."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me452-2024",
        "courseId": "course-me452",
        "title": "2024 End of Semester Examination — ME 452 IC Engines",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "downloadCount": 680,
        "topics": [
          "Combustion Chemistry",
          "Dynamometer Calculations",
          "Turbocharger Matching"
        ],
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "A 4-cylinder, 4-stroke petrol engine of bore 80 mm and stroke 90 mm runs at 4000 rpm. A dynamometer test measures a brake torque of 130 N.m and fuel consumption of 8.5 kg/h. If fuel heating value is 44 MJ/kg, calculate the brake power (BP), brake mean effective pressure (BMEP), and brake thermal efficiency.",
            "solutionText": "1. Brake power BP = 2 * pi * N * T / 60 = 2 * 3.1416 * 4000 * 130 / 60 = 54.45 kW. 2. Engine swept volume Vs = 4 * (pi/4 * 0.08^2 * 0.09) = 0.00181 m^3 (1.81 L). Work done per cycle W = BP * 2 / (N/60) = 54,450 * 2 / 66.67 = 1633.5 J. BMEP = W / Vs = 1633.5 / 0.00181 = 902.5 kPa = 9.025 bar. 3. Heat input rate Qin = m_fuel * LCV = (8.5 / 3600) * 44,000 kJ/s = 103.89 kW. Brake thermal efficiency = BP / Qin = 54.45 / 103.89 = 52.4% (or 52.4%).",
            "solutionSteps": [
              "Step 1: Calculate Brake Power BP = 54.45 kW",
              "Step 2: Calculate BMEP = 9.03 bar",
              "Step 3: Calculate Brake Thermal Efficiency = 52.4%"
            ]
          }
        ],
        "totalMarks": 100
      }
    ],
    "announcements": [
      {
        "id": "ann-me452-1",
        "courseId": "course-me452",
        "title": "Welcome to ME 452 (Internal Combustion Engines & Alternative Fuels)",
        "author": "Prof. Kwaku Boateng",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me452-2",
        "courseId": "course-me452",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raymond Kwame",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me452-1",
        "courseId": "course-me452",
        "title": "Key takeaways and tips for ME 452 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 452? Any advice from seniors?",
        "upvotes": 13,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 452",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me454",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 400,
    "semester": 2,
    "code": "ME 454",
    "name": "Renewable Energy Technologies",
    "creditHours": 3,
    "description": "Solar thermal collectors, solar photovoltaics (PV), wind turbine aerodynamics (Betz limit), biomass gasification, and mini-hydro systems in Ghana.",
    "longOverview": "Practical engineering sizing of clean energy systems. Covers solar radiation geometry, flat plate and concentrated solar collectors, Betz law for wind turbine blades, biomass anaerobic digesters, and energy storage systems.",
    "coverImage": "/src/assets/images/college_engineering_banner_1790747200775.jpg",
    "iconName": "Flame",
    "lecturerName": "Prof. Moses Mensah",
    "lecturerOffice": "Energy Centre, Block E",
    "prerequisites": [
      "ME 254",
      "ME 354"
    ],
    "syllabusPoints": [
      "Solar radiation geometry: zenith angle, solar declination, hour angle, and irradiance on tilted surfaces",
      "Solar thermal collectors: flat plate energy balance (Hottel-Whillier-Bliss equation) and evacuated tubes",
      "Solar photovoltaic cell physics, I-V curves, maximum power point tracking (MPPT), and inverter sizing",
      "Wind energy: Betz limit derivation (59.3% max efficiency), wind power density, and blade pitch control",
      "Biomass conversion: pyrolysis, gasification to syngas, and anaerobic digestion biogas production"
    ],
    "tutorIds": [
      "tutor-raymond-kwame"
    ],
    "materials": [
      {
        "id": "mat-me454-syllabus",
        "courseId": "course-me454",
        "title": "ME 454: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 452,
        "author": "Prof. Moses Mensah",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Renewable Energy Technologies."
      },
      {
        "id": "mat-me454-notes",
        "courseId": "course-me454",
        "title": "Renewable Energy Technologies Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.0 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 608,
        "author": "Prof. Moses Mensah",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Solar radiation geometry: zenith angle, solar declination, hour angle, and irradiance on tilted surfaces."
      },
      {
        "id": "mat-me454-formula",
        "courseId": "course-me454",
        "title": "ME 454 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 694,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me454-01",
        "courseId": "course-me454",
        "title": "01 — ME 454 Foundations: Solar radiation geometry: zenith angle, solar declination, hour angle, and irradiance on tilted surfaces",
        "topic": "Solar radiation geometry: zenith angle, solar declination, hour angle, and irradiance on tilted surfaces",
        "order": 1,
        "duration": "20:51",
        "instructor": "Raymond Kwame",
        "viewsCount": 998,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Solar radiation geometry: zenith angle, solar declination, hour angle, and irradiance on tilted surfaces",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me454-02",
        "courseId": "course-me454",
        "title": "02 — Problem Solving & Exam Walkthrough: Solar thermal collectors: flat plate energy balance (Hottel-Whillier-Bliss equation) and evacuated tubes",
        "topic": "Solar thermal collectors: flat plate energy balance (Hottel-Whillier-Bliss equation) and evacuated tubes",
        "order": 2,
        "duration": "30:21",
        "instructor": "Raymond Kwame",
        "viewsCount": 586,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me454-01",
        "courseId": "course-me454",
        "title": "Assignment 1: Solar radiation geometry: zenith angle, solar declination, hour angle, and irradiance on tilted surfaces Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Renewable Energy Technologies.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me454-2024",
        "courseId": "course-me454",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 454",
        "topics": [
          "Solar radiation geometry: zenith angle, solar declination, hour angle, and irradiance on tilted surfaces",
          "Solar thermal collectors: flat plate energy balance (Hottel-Whillier-Bliss equation) and evacuated tubes"
        ],
        "totalMarks": 100,
        "downloadCount": 592,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Solar radiation geometry: zenith angle, solar declination, hour angle, and irradiance on tilted surfaces in Renewable Energy Technologies.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me454-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 454:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Solar radiation geometry: zenith angle, solar declination, hour angle, and irradiance on tilted surfaces",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me454-2023",
        "courseId": "course-me454",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 454",
        "topics": [
          "Solar thermal collectors: flat plate energy balance (Hottel-Whillier-Bliss equation) and evacuated tubes",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 644,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Renewable Energy Technologies in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me454-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me454-1",
        "courseId": "course-me454",
        "title": "Welcome to ME 454 (Renewable Energy Technologies)",
        "author": "Prof. Moses Mensah",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me454-2",
        "courseId": "course-me454",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raymond Kwame",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me454-1",
        "courseId": "course-me454",
        "title": "Key takeaways and tips for ME 454 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 454? Any advice from seniors?",
        "upvotes": 14,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 454",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me456",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 400,
    "semester": 2,
    "code": "ME 456",
    "name": "Industrial Robotics & Mechatronics",
    "creditHours": 3,
    "description": "Kinematics of robotic manipulators, Denavit-Hartenberg (D-H) convention, Jacobians, trajectory planning, stepper/servo actuators, and PLC ladder logic.",
    "longOverview": "Robotic automation in manufacturing: forward and inverse kinematics of 6-DOF industrial robot arms, velocity Jacobians, end-effector trajectory interpolation, and programming industrial Programmable Logic Controllers (PLCs).",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Cpu",
    "lecturerName": "Dr. Emmanuel Danquah",
    "lecturerOffice": "Robotics & Automation Laboratory",
    "prerequisites": [
      "ME 351",
      "ME 353"
    ],
    "syllabusPoints": [
      "Spatial descriptions and coordinate transformations: rotation matrices and homogeneous transformation matrices",
      "Denavit-Hartenberg (D-H) convention for forward kinematics of open-chain robotic arms",
      "Inverse kinematics solutions: algebraic and geometric approaches for spherical wrist manipulators",
      "Differential motion and velocity: manipulator Jacobian matrix, singularities, and dexterity",
      "Sensors and actuators: optical encoders, servo motors, stepper motors, and PLC ladder logic"
    ],
    "tutorIds": [
      "tutor-raphael-mensah",
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me456-syllabus",
        "courseId": "course-me456",
        "title": "ME 456: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 469,
        "author": "Dr. Emmanuel Danquah",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Industrial Robotics & Mechatronics."
      },
      {
        "id": "mat-me456-notes",
        "courseId": "course-me456",
        "title": "Industrial Robotics & Mechatronics Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.3 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 631,
        "author": "Dr. Emmanuel Danquah",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Spatial descriptions and coordinate transformations: rotation matrices and homogeneous transformation matrices."
      },
      {
        "id": "mat-me456-formula",
        "courseId": "course-me456",
        "title": "ME 456 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 713,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me456-01",
        "courseId": "course-me456",
        "title": "01 — ME 456 Foundations: Spatial descriptions and coordinate transformations: rotation matrices and homogeneous transformation matrices",
        "topic": "Spatial descriptions and coordinate transformations: rotation matrices and homogeneous transformation matrices",
        "order": 1,
        "duration": "21:52",
        "instructor": "Raphael Mensah",
        "viewsCount": 1041,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Spatial descriptions and coordinate transformations: rotation matrices and homogeneous transformation matrices",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me456-02",
        "courseId": "course-me456",
        "title": "02 — Problem Solving & Exam Walkthrough: Denavit-Hartenberg (D-H) convention for forward kinematics of open-chain robotic arms",
        "topic": "Denavit-Hartenberg (D-H) convention for forward kinematics of open-chain robotic arms",
        "order": 2,
        "duration": "31:22",
        "instructor": "Francis Appiah",
        "viewsCount": 617,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me456-01",
        "courseId": "course-me456",
        "title": "Assignment 1: Spatial descriptions and coordinate transformations: rotation matrices and homogeneous transformation matrices Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Industrial Robotics & Mechatronics.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me456-2024",
        "courseId": "course-me456",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 456",
        "topics": [
          "Spatial descriptions and coordinate transformations: rotation matrices and homogeneous transformation matrices",
          "Denavit-Hartenberg (D-H) convention for forward kinematics of open-chain robotic arms"
        ],
        "totalMarks": 100,
        "downloadCount": 619,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Spatial descriptions and coordinate transformations: rotation matrices and homogeneous transformation matrices in Industrial Robotics & Mechatronics.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me456-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 456:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Spatial descriptions and coordinate transformations: rotation matrices and homogeneous transformation matrices",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me456-2023",
        "courseId": "course-me456",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 456",
        "topics": [
          "Denavit-Hartenberg (D-H) convention for forward kinematics of open-chain robotic arms",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 663,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Industrial Robotics & Mechatronics in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me456-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me456-1",
        "courseId": "course-me456",
        "title": "Welcome to ME 456 (Industrial Robotics & Mechatronics)",
        "author": "Dr. Emmanuel Danquah",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me456-2",
        "courseId": "course-me456",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Raphael Mensah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me456-1",
        "courseId": "course-me456",
        "title": "Key takeaways and tips for ME 456 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 456? Any advice from seniors?",
        "upvotes": 15,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 456",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me458",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 400,
    "semester": 2,
    "code": "ME 458",
    "name": "Engineering Economics & Project Management",
    "creditHours": 3,
    "description": "Time value of money, Net Present Value (NPV), Internal Rate of Return (IRR), depreciation, lifecycle costing, contract law (FIDIC), and engineering entrepreneurship.",
    "longOverview": "Economic appraisal of engineering investments: cash flow diagrams, discounted payback period, benefit-cost ratio, depreciation methods, tendering, and engineering enterprise management in Ghana.",
    "coverImage": "/src/assets/images/harcourt_hero_banner_1790747187384.jpg",
    "iconName": "TrendingUp",
    "lecturerName": "Ing. Kwasi Poku",
    "lecturerOffice": "Industrial Engineering Division",
    "prerequisites": [
      "Level 400 Standing"
    ],
    "syllabusPoints": [
      "Time value of money: simple vs compound interest, annuities, and gradient cash flow series",
      "Economic evaluation methods: Net Present Value (NPV), Future Worth, and Annual Worth comparisons",
      "Internal Rate of Return (IRR) and Incremental Rate of Return for mutually exclusive alternatives",
      "Asset depreciation: Straight-line, Declining balance, and Modified Accelerated Cost Recovery System (MACRS)",
      "Engineering procurement, FIDIC contract conditions, intellectual property, and venture startup creation"
    ],
    "tutorIds": [
      "tutor-sherlina-amankwah"
    ],
    "materials": [
      {
        "id": "mat-me458-syllabus",
        "courseId": "course-me458",
        "title": "ME 458: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 486,
        "author": "Ing. Kwasi Poku",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Engineering Economics & Project Management."
      },
      {
        "id": "mat-me458-notes",
        "courseId": "course-me458",
        "title": "Engineering Economics & Project Management Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.6 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 654,
        "author": "Ing. Kwasi Poku",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Time value of money: simple vs compound interest, annuities, and gradient cash flow series."
      },
      {
        "id": "mat-me458-formula",
        "courseId": "course-me458",
        "title": "ME 458 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 732,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me458-01",
        "courseId": "course-me458",
        "title": "01 — ME 458 Foundations: Time value of money: simple vs compound interest, annuities, and gradient cash flow series",
        "topic": "Time value of money: simple vs compound interest, annuities, and gradient cash flow series",
        "order": 1,
        "duration": "22:53",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 684,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Time value of money: simple vs compound interest, annuities, and gradient cash flow series",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me458-02",
        "courseId": "course-me458",
        "title": "02 — Problem Solving & Exam Walkthrough: Economic evaluation methods: Net Present Value (NPV), Future Worth, and Annual Worth comparisons",
        "topic": "Economic evaluation methods: Net Present Value (NPV), Future Worth, and Annual Worth comparisons",
        "order": 2,
        "duration": "32:23",
        "instructor": "Sherlina Amankwah",
        "viewsCount": 648,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me458-01",
        "courseId": "course-me458",
        "title": "Assignment 1: Time value of money: simple vs compound interest, annuities, and gradient cash flow series Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Engineering Economics & Project Management.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me458-2024",
        "courseId": "course-me458",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 458",
        "topics": [
          "Time value of money: simple vs compound interest, annuities, and gradient cash flow series",
          "Economic evaluation methods: Net Present Value (NPV), Future Worth, and Annual Worth comparisons"
        ],
        "totalMarks": 100,
        "downloadCount": 646,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Time value of money: simple vs compound interest, annuities, and gradient cash flow series in Engineering Economics & Project Management.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me458-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 458:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Time value of money: simple vs compound interest, annuities, and gradient cash flow series",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me458-2023",
        "courseId": "course-me458",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 458",
        "topics": [
          "Economic evaluation methods: Net Present Value (NPV), Future Worth, and Annual Worth comparisons",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 682,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Engineering Economics & Project Management in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me458-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me458-1",
        "courseId": "course-me458",
        "title": "Welcome to ME 458 (Engineering Economics & Project Management)",
        "author": "Ing. Kwasi Poku",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me458-2",
        "courseId": "course-me458",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Sherlina Amankwah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me458-1",
        "courseId": "course-me458",
        "title": "Key takeaways and tips for ME 458 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 458? Any advice from seniors?",
        "upvotes": 16,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 458",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me460",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 400,
    "semester": 2,
    "code": "ME 460",
    "name": "Automotive Engineering & Vehicle Dynamics",
    "creditHours": 3,
    "description": "Vehicle acceleration, aerodynamic drag, rolling resistance, tire-road friction, braking performance, cornering dynamics (understeer/oversteer), and suspension design.",
    "longOverview": "Rigorous engineering dynamics of passenger cars and heavy commercial vehicles: tractive effort curves, roll center and suspension pitch/bounce, steady-state cornering (bicycle model), and anti-lock braking systems (ABS).",
    "coverImage": "/src/assets/images/course_dynamics_machinery_1790747212000.jpg",
    "iconName": "Wrench",
    "lecturerName": "Prof. Kwaku Boateng",
    "lecturerOffice": "Automotive Engineering Testing Facility",
    "prerequisites": [
      "ME 351"
    ],
    "syllabusPoints": [
      "Vehicle tractive resistance: rolling resistance, aerodynamic drag, and gradient resistance",
      "Power transmission matching: gear ratios, maximum speed, and gradeability curves",
      "Braking dynamics: front-to-rear dynamic load transfer, brake force distribution, and stopping distance",
      "Pneumatic tire mechanics: slip angle, cornering stiffness, and lateral force generation",
      "Steady-state handling: bicycle model, understeer gradient, neutral steer, and critical speed"
    ],
    "tutorIds": [
      "tutor-francis-appiah"
    ],
    "materials": [
      {
        "id": "mat-me460-syllabus",
        "courseId": "course-me460",
        "title": "ME 460: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 503,
        "author": "Prof. Kwaku Boateng",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Automotive Engineering & Vehicle Dynamics."
      },
      {
        "id": "mat-me460-notes",
        "courseId": "course-me460",
        "title": "Automotive Engineering & Vehicle Dynamics Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "3.9 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 677,
        "author": "Prof. Kwaku Boateng",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Vehicle tractive resistance: rolling resistance, aerodynamic drag, and gradient resistance."
      },
      {
        "id": "mat-me460-formula",
        "courseId": "course-me460",
        "title": "ME 460 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 751,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me460-01",
        "courseId": "course-me460",
        "title": "01 — ME 460 Foundations: Vehicle tractive resistance: rolling resistance, aerodynamic drag, and gradient resistance",
        "topic": "Vehicle tractive resistance: rolling resistance, aerodynamic drag, and gradient resistance",
        "order": 1,
        "duration": "23:54",
        "instructor": "Francis Appiah",
        "viewsCount": 727,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Vehicle tractive resistance: rolling resistance, aerodynamic drag, and gradient resistance",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me460-02",
        "courseId": "course-me460",
        "title": "02 — Problem Solving & Exam Walkthrough: Power transmission matching: gear ratios, maximum speed, and gradeability curves",
        "topic": "Power transmission matching: gear ratios, maximum speed, and gradeability curves",
        "order": 2,
        "duration": "33:24",
        "instructor": "Francis Appiah",
        "viewsCount": 679,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me460-01",
        "courseId": "course-me460",
        "title": "Assignment 1: Vehicle tractive resistance: rolling resistance, aerodynamic drag, and gradient resistance Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Automotive Engineering & Vehicle Dynamics.",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me460-2024",
        "courseId": "course-me460",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 460",
        "topics": [
          "Vehicle tractive resistance: rolling resistance, aerodynamic drag, and gradient resistance",
          "Power transmission matching: gear ratios, maximum speed, and gradeability curves"
        ],
        "totalMarks": 100,
        "downloadCount": 673,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Vehicle tractive resistance: rolling resistance, aerodynamic drag, and gradient resistance in Automotive Engineering & Vehicle Dynamics.\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me460-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 460:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Vehicle tractive resistance: rolling resistance, aerodynamic drag, and gradient resistance",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me460-2023",
        "courseId": "course-me460",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 460",
        "topics": [
          "Power transmission matching: gear ratios, maximum speed, and gradeability curves",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 701,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Automotive Engineering & Vehicle Dynamics in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me460-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me460-1",
        "courseId": "course-me460",
        "title": "Welcome to ME 460 (Automotive Engineering & Vehicle Dynamics)",
        "author": "Prof. Kwaku Boateng",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me460-2",
        "courseId": "course-me460",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me460-1",
        "courseId": "course-me460",
        "title": "Key takeaways and tips for ME 460 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 460? Any advice from seniors?",
        "upvotes": 17,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 460",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  },
  {
    "id": "course-me498",
    "universityId": "knust",
    "collegeId": "engineering",
    "programmeId": "bsc-mechanical-eng",
    "level": 400,
    "semester": 2,
    "code": "ME 498",
    "name": "Final Year Research Project II (Capstone Defense & Thesis)",
    "creditHours": 3,
    "description": "Prototype construction, experimentation, testing, data collection, comprehensive engineering thesis writing, and oral defense before the departmental examination panel.",
    "longOverview": "The culmination of the 4-year KNUST BSc Mechanical Engineering curriculum. Students build their working prototype, perform experimental testing and validation, submit a bound thesis, and defend their findings.",
    "coverImage": "/src/assets/images/harcourt_hero_banner_1790747187384.jpg",
    "iconName": "BookOpen",
    "lecturerName": "Prof. Kwaku Boateng & Examination Board",
    "lecturerOffice": "Department of Mechanical Engineering, KNUST",
    "prerequisites": [
      "ME 497"
    ],
    "syllabusPoints": [
      "Prototype fabrication, machining, instrumentation, and assembly",
      "Experimental setup, calibration of sensors, and data acquisition",
      "Analysis of results, error estimation, and comparison with theoretical/CFD models",
      "Comprehensive technical thesis report preparation adhering to KNUST postgraduate style",
      "Final oral defense and demonstration before faculty examiners"
    ],
    "tutorIds": [
      "tutor-francis-appiah",
      "tutor-raymond-kwame"
    ],
    "materials": [
      {
        "id": "mat-me498-syllabus",
        "courseId": "course-me498",
        "title": "ME 498: Course Syllabus & Lecture Outline",
        "category": "Course Outline",
        "fileFormat": "PDF",
        "fileSize": "450 KB",
        "uploadDate": "Sep 12, 2026",
        "downloadsCount": 520,
        "author": "Prof. Kwaku Boateng & Examination Board",
        "description": "Complete syllabus, grading criteria, and recommended textbooks for Final Year Research Project II (Capstone Defense & Thesis)."
      },
      {
        "id": "mat-me498-notes",
        "courseId": "course-me498",
        "title": "Final Year Research Project II (Capstone Defense & Thesis) Comprehensive Lecture Notes & Problem Sets",
        "category": "Lecture Notes",
        "fileFormat": "PDF",
        "fileSize": "4.2 MB",
        "uploadDate": "Sep 18, 2026",
        "downloadsCount": 700,
        "author": "Prof. Kwaku Boateng & Examination Board",
        "description": "In-depth derivations, engineering formulas, and worked examples covering Prototype fabrication, machining, instrumentation, and assembly."
      },
      {
        "id": "mat-me498-formula",
        "courseId": "course-me498",
        "title": "ME 498 Quick Reference Formula & Data Sheet",
        "category": "Formula Sheet",
        "fileFormat": "PDF",
        "fileSize": "620 KB",
        "uploadDate": "Sep 25, 2026",
        "downloadsCount": 770,
        "author": "KNUST Engineering Student Board",
        "description": "Exam-approved equation summaries, unit conversion factors, and material property tables."
      }
    ],
    "videos": [
      {
        "id": "vid-me498-01",
        "courseId": "course-me498",
        "title": "01 — ME 498 Foundations: Prototype fabrication, machining, instrumentation, and assembly",
        "topic": "Prototype fabrication, machining, instrumentation, and assembly",
        "order": 1,
        "duration": "24:15",
        "instructor": "Francis Appiah",
        "viewsCount": 770,
        "description": "Step-by-step masterclass covering theoretical principles, governing equations, and practical engineering examples.",
        "keyTakeaways": [
          "Fundamental concepts and assumptions in Prototype fabrication, machining, instrumentation, and assembly",
          "Derivation of key governing relations",
          "Solving standard examination numerical problems"
        ]
      },
      {
        "id": "vid-me498-02",
        "courseId": "course-me498",
        "title": "02 — Problem Solving & Exam Walkthrough: Experimental setup, calibration of sensors, and data acquisition",
        "topic": "Experimental setup, calibration of sensors, and data acquisition",
        "order": 2,
        "duration": "24:25",
        "instructor": "Raymond Kwame",
        "viewsCount": 710,
        "description": "Detailed solutions to past exam questions and assignment problems with practical tips for high scores.",
        "keyTakeaways": [
          "Recognizing problem patterns in KNUST examinations",
          "Error avoidance in intermediate numerical calculations"
        ]
      }
    ],
    "assignments": [
      {
        "id": "asg-me498-01",
        "courseId": "course-me498",
        "title": "Assignment 1: Prototype fabrication, machining, instrumentation, and assembly Problem Set",
        "assignedDate": "Sep 25, 2026",
        "dueDate": "Oct 20, 2026",
        "points": 100,
        "status": "Open",
        "description": "Complete analytical problem set covering theoretical models, dimensional calculations, and design justifications for Final Year Research Project II (Capstone Defense & Thesis).",
        "submissionRequirements": "Submit handwritten solutions as a clean single-document PDF with your index number and group number clearly written on the title page."
      }
    ],
    "pastQuestions": [
      {
        "id": "pq-me498-2024",
        "courseId": "course-me498",
        "year": 2024,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2024 End of Semester Examination — ME 498",
        "topics": [
          "Prototype fabrication, machining, instrumentation, and assembly",
          "Experimental setup, calibration of sensors, and data acquisition"
        ],
        "totalMarks": 100,
        "downloadCount": 700,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "(a) Clearly state the fundamental governing equations and assumptions for Prototype fabrication, machining, instrumentation, and assembly in Final Year Research Project II (Capstone Defense & Thesis).\n(b) A mechanical system operates under steady state conditions where primary parameter X = 120 units and resistance R = 4.5 units. Calculate the resultant efficiency and factor of safety.",
            "solutionId": "sol-me498-2024-q1",
            "solutionText": "Applying the standard KNUST design formulation for ME 498:\nResultant operating parameter evaluates to 84.6% efficiency with a design factor of safety n = 2.15 against static yield.",
            "solutionSteps": [
              "Step 1: Write governing balance equation for Prototype fabrication, machining, instrumentation, and assembly",
              "Step 2: Substitute given operational values into dimensional equation",
              "Step 3: Compute nominal stress / response parameter = 78.4 MPa",
              "Step 4: Factor of safety n = Permissible / Nominal = 2.15 (safe design)"
            ]
          }
        ]
      },
      {
        "id": "pq-me498-2023",
        "courseId": "course-me498",
        "year": 2023,
        "semester": 2,
        "examType": "End of Semester Examination",
        "title": "2023 End of Semester Examination — ME 498",
        "topics": [
          "Experimental setup, calibration of sensors, and data acquisition",
          "Numerical Problems"
        ],
        "totalMarks": 100,
        "downloadCount": 470,
        "questionsCount": 3,
        "questions": [
          {
            "questionNumber": 1,
            "marks": 25,
            "questionText": "Discuss the practical design trade-offs associated with Final Year Research Project II (Capstone Defense & Thesis) in industrial applications and derive the expression for maximum performance.",
            "solutionId": "sol-me498-2023-q1",
            "solutionText": "Optimal performance occurs when derivative of performance function with respect to geometry equals zero, yielding characteristic ratio of 1.414.",
            "solutionSteps": [
              "Step 1: Formulate objective performance function",
              "Step 2: Differentiate with respect to characteristic dimension",
              "Step 3: Solve for optimal ratio = sqrt(2) = 1.414"
            ]
          }
        ]
      }
    ],
    "announcements": [
      {
        "id": "ann-me498-1",
        "courseId": "course-me498",
        "title": "Welcome to ME 498 (Final Year Research Project II (Capstone Defense & Thesis))",
        "author": "Prof. Kwaku Boateng & Examination Board",
        "authorRole": "Course Lecturer",
        "date": "Sep 15, 2026",
        "content": "Welcome to the first semester module. Please download the course outline and review the prerequisites. Tutorial sessions will be held weekly.",
        "priority": "normal"
      },
      {
        "id": "ann-me498-2",
        "courseId": "course-me498",
        "title": "Midterm Revision & Past Questions Review",
        "author": "Francis Appiah",
        "authorRole": "Lead Teaching Assistant",
        "date": "Oct 02, 2026",
        "content": "A special weekend revision session will cover the 2024 and 2023 examination papers. Bring your printed problem sheets.",
        "priority": "important"
      }
    ],
    "discussions": [
      {
        "id": "disc-me498-1",
        "courseId": "course-me498",
        "title": "Key takeaways and tips for ME 498 exams",
        "author": "Kofi Mensah",
        "authorAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        "date": "Sep 28, 2026",
        "content": "What are the most frequent numerical questions asked in KNUST examinations for ME 498? Any advice from seniors?",
        "upvotes": 8,
        "repliesCount": 3,
        "isAnswered": true,
        "tags": [
          "ME 498",
          "Exam Prep",
          "Study Tips"
        ]
      }
    ]
  }
];
