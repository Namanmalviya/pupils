import express from 'express';
import cors from 'cors';
import {
  mockUser,
  mockPosts,
  mockQuestions,
  mockContests,
  mockOpportunities,
  mockInstitutions,
  mockLeaderboard
} from './data/mockData.js';

const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

// In-memory state initialized from mock data
let userState = { ...mockUser };
let postsState = [...mockPosts];
let questionsState = [...mockQuestions];
let contestsState = [...mockContests];
let opportunitiesState = [...mockOpportunities];
let institutionsState = [...mockInstitutions];

// User profile API
app.get('/api/user', (req, res) => {
  res.json({ success: true, data: userState });
});

app.put('/api/user', (req, res) => {
  userState = { ...userState, ...req.body };
  res.json({ success: true, data: userState });
});

// Feed Posts API
app.get('/api/posts', (req, res) => {
  const { type, tag } = req.query;
  let filtered = [...postsState];
  if (type && type !== 'all') {
    filtered = filtered.filter(p => p.type === type);
  }
  if (tag) {
    filtered = filtered.filter(p => p.tags.includes(tag));
  }
  res.json({ success: true, data: filtered });
});

app.post('/api/posts', (req, res) => {
  const { content, type, tags, images } = req.body;
  const newPost = {
    id: `post-${Date.now()}`,
    author: {
      name: userState.name,
      avatar: userState.avatar,
      grade: userState.grade,
      city: userState.city,
      verified: true,
      verifiedBy: userState.school
    },
    timestamp: 'Just now',
    type: type || 'achievement',
    badge: type === 'project' ? '🚀 Project Showcase' : type === 'question' ? '❓ Question' : '🏆 Achievement',
    content: content || 'Shared an academic update!',
    images: images || [],
    likes: 0,
    comments: 0,
    isLiked: false,
    isBookmarked: false,
    tags: tags || ['Academic']
  };
  postsState.unshift(newPost);
  res.status(201).json({ success: true, data: newPost });
});

app.post('/api/posts/:id/like', (req, res) => {
  const { id } = req.params;
  const post = postsState.find(p => p.id === id);
  if (post) {
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
    return res.json({ success: true, data: post });
  }
  res.status(404).json({ success: false, message: 'Post not found' });
});

app.post('/api/posts/:id/bookmark', (req, res) => {
  const { id } = req.params;
  const post = postsState.find(p => p.id === id);
  if (post) {
    post.isBookmarked = !post.isBookmarked;
    return res.json({ success: true, data: post });
  }
  res.status(404).json({ success: false, message: 'Post not found' });
});

// Practice Questions API
app.get('/api/practice/questions', (req, res) => {
  const { exam, subject } = req.query;
  let filtered = [...questionsState];
  if (exam && exam !== 'All') {
    filtered = filtered.filter(q => q.exam.toLowerCase().includes(exam.toLowerCase()));
  }
  if (subject && subject !== 'All') {
    filtered = filtered.filter(q => q.subject.toLowerCase() === subject.toLowerCase());
  }
  res.json({ success: true, data: filtered });
});

app.post('/api/practice/submit', (req, res) => {
  const { questionId, selectedOption } = req.body;
  const question = questionsState.find(q => q.id === questionId);
  if (!question) {
    return res.status(404).json({ success: false, message: 'Question not found' });
  }
  const isCorrect = question.correctOption === selectedOption;
  if (isCorrect) {
    userState.stats.questionsSolved += 1;
  }
  res.json({
    success: true,
    isCorrect,
    correctOption: question.correctOption,
    explanation: question.explanation
  });
});

// Contests API
app.get('/api/contests', (req, res) => {
  res.json({ success: true, data: contestsState });
});

app.post('/api/contests/:id/submit', (req, res) => {
  const { id } = req.params;
  const contest = contestsState.find(c => c.id === id);
  if (contest) {
    userState.stats.contestsCount += 1;
    const mockResult = {
      score: '240/300',
      accuracy: '88%',
      rank: Math.floor(Math.random() * 100) + 12,
      percentile: '97.4'
    };
    contest.userResult = mockResult;
    return res.json({ success: true, result: mockResult });
  }
  res.status(404).json({ success: false, message: 'Contest not found' });
});

// Opportunities API
app.get('/api/opportunities', (req, res) => {
  const { category, search } = req.query;
  let filtered = [...opportunitiesState];
  if (category && category !== 'All') {
    filtered = filtered.filter(o => o.category.toLowerCase() === category.toLowerCase());
  }
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(o => o.title.toLowerCase().includes(q) || o.organizer.toLowerCase().includes(q));
  }
  res.json({ success: true, data: filtered });
});

// Discover Students & Institutions API
app.get('/api/discover', (req, res) => {
  const { search, category, city } = req.query;
  let students = [
    userState,
    {
      id: "u-2",
      name: "Riya Sharma",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      school: "Delhi Public School, Delhi",
      city: "Delhi",
      grade: "Class 11",
      targetExam: "Olympiads 2026",
      subjects: ["Physics", "Astronomy", "Mathematics"],
      verified: true,
      verifiedTitle: "Olympiad Winner",
      stats: { questionsSolved: 3120, accuracy: 91 }
    },
    {
      id: "u-3",
      name: "Aman Verma",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      school: "XYZ Academy Kota",
      city: "Kota",
      grade: "Class 12",
      targetExam: "JEE 2027 Aspirant",
      subjects: ["Chemistry", "Physics", "Computer Science"],
      verified: true,
      verifiedTitle: "Top 100 Ranker",
      stats: { questionsSolved: 4890, accuracy: 89 }
    }
  ];

  let institutions = [...institutionsState];

  if (search) {
    const q = search.toLowerCase();
    students = students.filter(s => s.name.toLowerCase().includes(q) || s.school.toLowerCase().includes(q));
    institutions = institutions.filter(i => i.name.toLowerCase().includes(q) || i.city.toLowerCase().includes(q));
  }

  res.json({
    success: true,
    data: {
      students,
      institutions
    }
  });
});

// City Leaderboard API
app.get('/api/leaderboard', (req, res) => {
  res.json({ success: true, data: mockLeaderboard });
});

app.listen(PORT, () => {
  console.log(`Pupils REST API server running on http://localhost:${PORT}`);
});
