// ─────────────────────────────────────────────────────────────────────────────
// EASY CONTENT UPDATES
// Replace image URLs below with files placed in /public/assets, e.g. '/assets/mevini.jpg'.
// Put your CV at /public/assets/mevini-munaweera-cv.pdf. The download button uses that path.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mevini Munaweera',
  shortName: 'Mevini',
  role: 'Data Science Undergraduate',
  photo: '/assets/mevini-munaweera-profile.jpg', // ← REPLACE WITH YOUR PHOTO
  email: 'mevinimunaweera@gmail.com',
  phone: '+94 76 495 8081',
  linkedin: 'https://linkedin.com/in/mevini-munaweera',
  github: 'https://github.com/MeviniNethasa',
  cv: '/assets/Mevini_Munaweera_CV.pdf', // ← ADD YOUR CV PDF HERE
};

export const projects = [
  { title: 'TalentCore AI', type: 'Enterprise AI Recruitment Platform', year: '2026', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80', tags: ['CrewAI', 'Gemini', 'Python', 'React'], text: 'A multi-agent workflow that analyzes CVs, creates adaptive interviews, and produces automated hiring reports.' },
  { title: 'UniGuide AI', type: 'AI Student Assistant', year: '2026', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80', tags: ['React Native', 'Node.js', 'RAG', 'MongoDB'], text: 'A retrieval-powered university assistant for accurate student support, semantic search, and helpful conversations.' },
  { title: 'CardioVision', type: 'Disease Prediction System', year: '2026', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80', tags: ['LightGBM', 'Flask', 'React', 'Spring Boot'], text: 'A full-stack clinical risk predictor trained on 70,000+ records, with LightGBM selected after rigorous evaluation.' },
];

export const skills = [
  ['Python', '🐍'], ['Java', '☕'], ['JavaScript', 'JS'], ['React', '⚛'], ['Spring Boot', 'SB'], ['Flask', '♨'],
  ['TensorFlow', 'TF'], ['MongoDB', 'M'], ['Docker', '▣'], ['GitHub', '⌘'], ['Gemini', '✦'], ['Figma', '◈'],
];

export const experience = [
  { date: 'Jul 2026 — Present', title: 'AI Launch Pad Participant', company: 'Ascentic Sri Lanka', text: 'Designing AI-driven solutions in a startup incubation program with industry mentors.' },
  { date: 'Feb — May 2026', title: 'Sales Executive', company: 'Softlogic Life Insurance PLC', text: 'Provided client consultation, maintained customer relationships, and supported accurate policy processes.' },
  { date: '2025', title: 'Banking Operations Intern', company: 'Seylan Bank PLC', text: 'Supported daily banking operations, customer documentation, and branch administration.' },
];

export const volunteering = [
  { name: 'Mozilla Campus Club', role: 'Data Science Subcommittee Member', year: '2026', logo: 'https://placehold.co/160x160/ff5b32/ffffff?text=M', },
  { name: 'Odyssey · IEEE IAS', role: 'Web Development Team Member', year: '2026', logo: 'https://placehold.co/160x160/4f46e5/ffffff?text=O', },
  { name: 'AIESEC in SLIIT', role: 'Team Leader, Customer Experience', year: '2026', logo: 'https://placehold.co/160x160/037ef3/ffffff?text=A', },
  { name: 'Project Kindle · AIESEC', role: 'VP, Partnership Development', year: '2025', logo: 'https://placehold.co/160x160/f85a40/ffffff?text=K', },
  { name: "Delegates Legacy'25", role: 'VP, Organizing Committee', year: '2025', logo: 'https://placehold.co/160x160/27272a/ffffff?text=D', },
];
