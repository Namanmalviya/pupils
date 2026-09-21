/*
  Pupils Database Architecture (MongoDB Mongoose / PostgreSQL Ready Schemas)
*/

export const StudentSchema = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: String,
  verified: { type: Boolean, default: false },
  verifiedTitle: String,
  school: String,
  city: String,
  grade: String,
  targetExam: String,
  subjects: [String],
  bio: String,
  stats: {
    questionsSolved: { type: Number, default: 0 },
    contestsCount: { type: Number, default: 0 },
    accuracy: { type: Number, default: 0 },
    streakDays: { type: Number, default: 0 }
  },
  createdAt: { type: Date, default: Date.now }
};

export const PostSchema = {
  authorId: { type: String, required: true },
  type: { type: String, enum: ['achievement', 'project', 'question', 'competition', 'note', 'opportunity'], required: true },
  badge: String,
  content: { type: String, required: true },
  images: [String],
  verified: Boolean,
  verifiedBy: String,
  likesCount: { type: Number, default: 0 },
  commentsCount: { type: Number, default: 0 },
  tags: [String],
  createdAt: { type: Date, default: Date.now }
};

export const QuestionSchema = {
  exam: { type: String, required: true },
  subject: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
  text: { type: String, required: true },
  options: [{ id: String, text: String }],
  correctOption: { type: String, required: true },
  explanation: String
};

export const ContestSchema = {
  title: { type: String, required: true },
  status: { type: String, enum: ['LIVE', 'UPCOMING', 'PAST'], default: 'UPCOMING' },
  exam: String,
  startTime: String,
  questionsCount: Number,
  durationMinutes: Number,
  subjects: [String],
  participantsCount: { type: Number, default: 0 }
};

export const OpportunitySchema = {
  title: { type: String, required: true },
  organizer: { type: String, required: true },
  featured: { type: Boolean, default: false },
  eligibility: String,
  mode: String,
  deadline: String,
  image: String,
  description: String,
  category: String,
  stipend: String
};
