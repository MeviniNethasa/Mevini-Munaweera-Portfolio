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
  { title: 'TalentCore AI', type: 'Enterprise AI Recruitment Platform', year: '2026', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80', repo: 'https://github.com/MeviniNethasa/-interviewer_agent', tags: ['CrewAI', 'Gemini', 'Python', 'React'], text: 'A multi-agent workflow that analyzes CVs, creates adaptive interviews, and produces automated hiring reports.' },
  { title: 'UniGuide AI', type: 'AI Student Assistant', year: '2026', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80', repo: 'https://github.com/MeviniNethasa', tags: ['React Native', 'Node.js', 'RAG', 'MongoDB'], text: 'A retrieval-powered university assistant for accurate student support, semantic search, and helpful conversations.' },
  { title: 'CardioVision', type: 'Disease Prediction System', year: '2026', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80', repo: 'https://github.com/MeviniNethasa/-cardiovascular-disease-prediction', tags: ['LightGBM', 'Flask', 'React', 'Spring Boot'], text: 'A full-stack clinical risk predictor trained on 70,000+ records, with LightGBM selected after rigorous evaluation.' },
  { title: 'Plant Disease Detection', type: 'Computer Vision · Deep Learning', year: '2026', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80', repo: 'https://github.com/MeviniNethasa/Plant-Disease-Detection-System', tags: ['Python', 'TensorFlow', 'Keras', 'Streamlit'], text: 'A custom CNN trained on 87,000+ leaf images for 38-class, real-time crop anomaly detection through an interactive Streamlit experience.' },
  { title: 'Inventory Management', type: 'Enterprise Stock & Asset System', year: '2026', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80', repo: 'https://github.com/MeviniNethasa/Inventory-Management-System', tags: ['Java 17', 'Spring Boot', 'JSP', 'Maven'], text: 'A modular stock-tracking system with expiry monitoring, Merge Sort pipelines, low-stock dashboards, and file-based storage.' },
];

export const skillGroups = [
  { title: 'Programming Languages', skills: ['Python', 'Java', 'JavaScript', 'SQL', 'C'] },
  { title: 'Frontend Development', skills: ['React.js', 'React Native', 'HTML', 'CSS'] },
  { title: 'Backend Development', skills: ['Spring Boot', 'Flask', 'Node.js', 'Express.js'] },
  { title: 'Machine Learning', skills: ['Scikit-learn', 'LightGBM', 'XGBoost', 'Random Forest', 'KNN', 'CNN', 'TensorFlow', 'Keras'] },
  { title: 'Artificial Intelligence', skills: ['CrewAI', 'Google Gemini API', 'Retrieval-Augmented Generation (RAG)', 'FAISS', 'ChromaDB'] },
  { title: 'Databases', skills: ['MongoDB Atlas', 'MySQL', 'Microsoft SQL Server'] },
  { title: 'Tools & Platforms', skills: ['Git', 'GitHub', 'Docker', 'Jupyter Notebook', 'VS Code', 'IntelliJ IDEA', 'Figma', 'Roboflow', 'CVAT'] },
];

export const experience = [
  { date: 'Jul 2026 — Present', title: 'AI Launch Pad Participant', company: 'Ascentic Sri Lanka', text: 'Designing AI-driven solutions in a startup incubation program with industry mentors.' },
  { date: 'Feb — May 2026', title: 'Sales Executive', company: 'Softlogic Life Insurance PLC', text: 'Provided client consultation, maintained customer relationships, and supported accurate policy processes.' },
  { date: '2025', title: 'Banking Operations Intern', company: 'Seylan Bank PLC', text: 'Supported daily banking operations, customer documentation, and branch administration.' },
];

export const volunteering = [
  { name: 'Mozilla Campus Club', role: 'Data Science Subcommittee Member', year: '2026', logo: '/assets/mozilla-logo.png', image: '/assets/mozilla.png', text: 'Contributing to data science initiatives, workshops, and collaborative learning activities for the campus community.' },
  { name: 'Odyssey · IEEE IAS', role: 'Web Development Team Member', year: '2026', logo: '/assets/ieee-ias-logo.png', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', text: 'Building and maintaining web-based components that support the Odyssey event experience and its technical team.' },
  { name: 'AIESEC in SLIIT', role: 'Team Leader, Customer Experience', year: '2026', logo: '/assets/aiesec-logo.png', image: '/assets/aiesec-member.jpeg', text: 'Leading customer-experience activities, coordinating the team, and helping participants feel supported throughout OGTa.' },
  { name: 'Project Kindle · AIESEC', role: 'VP, Partnership Development', year: '2025', logo: '/assets/aiesec-logo.png', image: '/assets/aiesec-kindle.JPG', text: 'Managed partnership development and external coordination to help the project achieve its community goals.' },
  { name: "Delegates Legacy'25", role: 'VP, Organizing Committee', year: '2025', logo: '/assets/aiesec-logo.png', image: '/assets/aiesec-legacy.jpg', text: 'Coordinated delegate communication, registration, and engagement to create a smooth participant experience.' },
];
