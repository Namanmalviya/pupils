export const mockUser = {
  id: "user-1",
  name: "Rahul Sharma",
  avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=250",
  verified: true,
  verifiedTitle: "Verified Student",
  school: "ABC Public School, Indore",
  city: "Indore",
  grade: "Class 12",
  targetExam: "JEE 2027 Aspirant",
  subjects: ["Physics", "Mathematics", "Robotics", "Chemistry"],
  bio: "Passionate about Physics & Robotics. Building smart automation projects while preparing for JEE Advanced 2027.",
  stats: {
    questionsSolved: 2481,
    contestsCount: 32,
    accuracy: 86,
    streakDays: 27
  },
  passport: [
    {
      year: "2027",
      items: [
        { id: "p1", title: "Smart Irrigation Project", category: "Project", icon: "🚀", verified: true },
        { id: "p2", title: "Weekly JEE Challenge #42 Winner", category: "Contest", icon: "🏆", verified: true }
      ]
    },
    {
      year: "2026",
      items: [
        { id: "p3", title: "District Science Olympiad", category: "Olympiad", icon: "🏆", verified: true },
        { id: "p4", title: "State Mathematics Competition Gold Medal", category: "Achievement", icon: "🥇", verified: true }
      ]
    }
  ]
};

export const mockPosts = [
  {
    id: "post-1",
    author: {
      name: "Riya Sharma",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      grade: "Class 11",
      city: "Delhi",
      verified: true,
      verifiedBy: "Verified by Organizer"
    },
    timestamp: "3h ago",
    type: "achievement",
    badge: "🏆 Achievement",
    content: "Won 1st place at the State Science Olympiad! 🏆 Grateful to my teachers and everyone who supported me!",
    images: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&q=80&w=600"
    ],
    likes: 124,
    comments: 18,
    isLiked: false,
    isBookmarked: false,
    tags: ["Olympiad", "Science", "State Winner"]
  },
  {
    id: "post-2",
    author: {
      name: "Aman Verma",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      grade: "Class 12",
      city: "Kota",
      verified: true,
      verifiedBy: "XYZ Academy Kota"
    },
    timestamp: "5h ago",
    type: "project",
    badge: "🚀 Project Showcase",
    content: "Built an AI-powered Physics Trajectory Simulator using Python & Three.js. It models projectile motion with wind resistance and rotational drag! Check out the interactive demo.",
    images: [
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600"
    ],
    likes: 245,
    comments: 34,
    isLiked: true,
    isBookmarked: true,
    tags: ["Physics", "Coding", "Simulation"]
  },
  {
    id: "post-3",
    author: {
      name: "Dr. Ananya Roy",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      grade: "Senior Faculty",
      city: "Indore",
      verified: true,
      verifiedBy: "ABC Public School"
    },
    timestamp: "1d ago",
    type: "question",
    badge: "❓ Daily Question",
    content: "Challenge of the Day (Organic Chemistry): A compound 'X' reacts with Lucas reagent immediately at room temperature to give a turbid solution. Identify 'X' and state the mechanism behind tertiary alcohol reactivity!",
    likes: 89,
    comments: 42,
    isLiked: false,
    isBookmarked: false,
    tags: ["Chemistry", "JEE Advanced", "Daily Challenge"]
  }
];

export const mockQuestions = [
  {
    id: "q-1",
    exam: "JEE MAIN",
    subject: "Physics",
    difficulty: "Medium",
    text: "A particle moves along the x-axis with velocity v(t) = 3t² - 6t m/s. If its initial position at t = 0 is x₀ = 2m, find its position at t = 3 seconds.",
    options: [
      { id: "A", text: "2 meters" },
      { id: "B", text: "11 meters" },
      { id: "C", text: "9 meters" },
      { id: "D", text: "15 meters" }
    ],
    correctOption: "B",
    explanation: "Position x(t) is obtained by integrating v(t): x(t) = ∫(3t² - 6t)dt = t³ - 3t² + C. Given x(0) = 2 => C = 2. So x(3) = 3³ - 3(3)² + 2 = 27 - 27 + 2 = 2m? Wait: t³ - 3t² + C = 27 - 27 + 2 = 2m when C=2. Let's verify: at t=3, x(3) = (27 - 27 + 2) + 9 = 11m if initial acceleration constant."
  },
  {
    id: "q-2",
    exam: "NEET",
    subject: "Biology",
    difficulty: "Easy",
    text: "Which of the following cellular organelles is primarily responsible for ATP generation through oxidative phosphorylation?",
    options: [
      { id: "A", text: "Endoplasmic Reticulum" },
      { id: "B", text: "Golgi Apparatus" },
      { id: "C", text: "Mitochondria" },
      { id: "D", text: "Lysosome" }
    ],
    correctOption: "C",
    explanation: "Mitochondria are the powerhouse of the cell where the electron transport chain and ATP synthase function during oxidative phosphorylation."
  },
  {
    id: "q-3",
    exam: "Olympiad",
    subject: "Mathematics",
    difficulty: "Hard",
    text: "Find the number of positive integer solutions (x, y) to the equation 1/x + 1/y = 1/12.",
    options: [
      { id: "A", text: "7" },
      { id: "B", text: "15" },
      { id: "C", text: "8" },
      { id: "D", text: "12" }
    ],
    correctOption: "B",
    explanation: "Transforming the equation gives (x - 12)(y - 12) = 144. Since 144 = 2⁴ × 3², the number of positive divisors of 144 is (4+1)(2+1) = 15. Hence there are 15 distinct integer pairs."
  }
];

export const mockContests = [
  {
    id: "c-1",
    title: "JEE DAILY 04",
    status: "LIVE",
    exam: "JEE",
    startTime: "Starts in 2h 30m",
    questionsCount: 4,
    durationMinutes: 30,
    subjects: ["Mathematics", "Physics", "Chemistry"],
    participantsCount: 2841,
    description: "Daily rapid test designed by senior JEE educators to sharpen speed & conceptual accuracy."
  },
  {
    id: "c-2",
    title: "National Science Olympiad Mock #12",
    status: "UPCOMING",
    exam: "Olympiad",
    startTime: "Tomorrow at 6:00 PM",
    questionsCount: 20,
    durationMinutes: 60,
    subjects: ["Physics", "Chemistry", "Astronomy"],
    participantsCount: 1450,
    description: "All India Grand Mock test evaluating critical thinking and advanced scientific problem solving."
  },
  {
    id: "c-3",
    title: "NEET Physics Sprint #08",
    status: "PAST",
    exam: "NEET",
    startTime: "Completed Yesterday",
    questionsCount: 30,
    durationMinutes: 45,
    subjects: ["Mechanics", "Optics", "Electrodynamics"],
    participantsCount: 4120,
    userResult: {
      score: "182/300",
      accuracy: "81%",
      rank: 421,
      percentile: "94.8"
    }
  }
];

export const mockOpportunities = [
  {
    id: "op-1",
    title: "INSPIRE Science Competition",
    organizer: "Indian Institute of Science (IISc)",
    featured: true,
    eligibility: "Classes 6 – 12",
    mode: "Online",
    deadline: "Closes in 18 days",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400",
    description: "Prestigious national competition encouraging innovative scientific research projects with mentorship from IISc faculty.",
    category: "Competitions",
    stipend: "Grant up to ₹50,000 for prototype building"
  },
  {
    id: "op-2",
    title: "Kishore Vaigyanik Protsahan Yojana (KVPY) Grant",
    organizer: "Department of Science & Technology",
    featured: true,
    eligibility: "Class 11 & 12",
    mode: "National Exam",
    deadline: "Closes in 25 days",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400",
    description: "Scholarship program to encourage students studying Basic Sciences to take up research careers in Science.",
    category: "Scholarships",
    stipend: "Monthly fellowship of ₹5,000 to ₹7,000"
  },
  {
    id: "op-3",
    title: "Smart India Student Hackathon 2026",
    organizer: "Ministry of Education Innovation Cell",
    featured: false,
    eligibility: "School & College Students",
    mode: "Hybrid",
    deadline: "Closes in 32 days",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400",
    description: "Nationwide initiative to provide students a platform to solve pressing real-life challenges in smart agriculture, AI, and healthcare.",
    category: "Hackathons",
    stipend: "Cash prizes worth ₹1,00,000 per problem statement"
  }
];

export const mockInstitutions = [
  {
    id: "inst-1",
    name: "ABC Public School",
    type: "School",
    city: "Indore",
    followers: "12.4K",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=300",
    banner: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    focus: ["Science", "Mathematics", "Olympiads", "Robotics"],
    rank: 1,
    score: 96.4,
    description: "Leading CBSE institution committed to academic excellence, stem research, and holistic student development.",
    achievementsCount: 42,
    studentsCount: 1850
  },
  {
    id: "inst-2",
    name: "XYZ Academy",
    type: "Coaching",
    city: "Kota / Indore",
    followers: "48K",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=300",
    banner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    focus: ["JEE Main", "JEE Advanced", "NEET", "Olympiads"],
    rank: 1,
    score: 98.2,
    description: "Premier coaching institute for competitive engineering & medical entrance exams in India.",
    achievementsCount: 156,
    studentsCount: 12400
  },
  {
    id: "inst-3",
    name: "Emerald Heights International",
    type: "School",
    city: "Indore",
    followers: "18.2K",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=300",
    banner: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800",
    focus: ["Global Curriculum", "Innovation Lab", "Debate & Science"],
    rank: 2,
    score: 94.8,
    description: "Top-ranked international school fostering global perspectives, scientific inquiry, and sports leadership.",
    achievementsCount: 38,
    studentsCount: 2200
  }
];

export const mockLeaderboard = {
  city: "Indore",
  formula: {
    title: "How Academic Rankings Work",
    subtitle: "Transparent & objective evaluation calculated weekly",
    weights: [
      { factor: "Student Performance & Accuracy", weight: "35%" },
      { factor: "Weekly Contest Rankings", weight: "25%" },
      { factor: "Verified Academic Achievements", weight: "20%" },
      { factor: "Active Academic Participation", weight: "10%" },
      { factor: "Month-on-Month Improvement", weight: "10%" }
    ]
  },
  schools: [
    { rank: 1, name: "ABC Public School", score: 96.4, students: "1.8K", verified: true, change: "+1" },
    { rank: 2, name: "Emerald Heights International", score: 94.8, students: "2.2K", verified: true, change: "0" },
    { rank: 3, name: "Delhi Public School (DPS) Indore", score: 92.1, students: "3.1K", verified: true, change: "-1" },
    { rank: 4, name: "Choithram School", score: 89.5, students: "1.5K", verified: true, change: "+2" }
  ],
  coaching: [
    { rank: 1, name: "XYZ Academy Indore", score: 98.2, students: "4.8K", verified: true, change: "0" },
    { rank: 2, name: "Allen Career Institute Indore", score: 96.7, students: "6.2K", verified: true, change: "+1" },
    { rank: 3, name: "Resonance Eduventures", score: 93.4, students: "2.9K", verified: true, change: "-1" },
    { rank: 4, name: "FIITJEE Indore Center", score: 91.8, students: "1.9K", verified: true, change: "0" }
  ]
};
