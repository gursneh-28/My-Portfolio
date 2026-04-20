export const personalInfo = {
  name: "Gursneh Kaur",
  title: "Full Stack Developer & AI Enthusiast",
  subtitle: "Building intelligent systems and beautiful interfaces.",
  email: "gursnehkaur1@gmail.com",
  phone: "+91 8058055220",
  linkedin: "https://www.linkedin.com/in/gursneh-kaur-73466527b/",
  github: "https://github.com/gursneh-28",
  location: "Jaipur, Rajasthan",
  university: "JK Lakshmipat University",
  degree: "B.Tech in Computer Science and Engineering",
  cgpa: "8.74 / 10.0",
  batch: "2023 – 2027",
}

export const skills = [
  {
    category: "Languages",
    color: "lavender",
    items: ["Python", "JavaScript", "C", "C++", "Rust"],
    proficiency: [
      { name: "Python",     level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "C/C++",      level: 75 },
      { name: "Rust",       level: 55 },
    ]
  },
  {
    category: "Web Development",
    color: "blush",
    items: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT", "HTML", "CSS"],
    proficiency: [
      { name: "React.js",   level: 88 },
      { name: "Node.js",    level: 82 },
      { name: "Express.js", level: 80 },
      { name: "HTML/CSS",   level: 90 },
    ]
  },
  {
    category: "Mobile Development",
    color: "sky",
    items: ["React Native", "Expo Router"],
    proficiency: [
      { name: "React Native", level: 72 },
      { name: "Expo Router",  level: 68 },
    ]
  },
  {
    category: "Databases",
    color: "mint",
    items: ["MySQL", "MongoDB", "Cloudinary"],
    proficiency: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL",   level: 75 },
    ]
  },
  {
    category: "ML / CV",
    color: "sky",
    items: ["TensorFlow", "OpenCV", "YOLO", "MTCNN"],
    proficiency: [
      { name: "OpenCV",     level: 82 },
      { name: "YOLO",       level: 78 },
      { name: "TensorFlow", level: 70 },
      { name: "MTCNN",      level: 72 },
    ]
  },
  {
    category: "Cloud & DevOps",
    color: "lavender",
    items: ["Docker", "Git", "Linux"],
    proficiency: [
      { name: "Git",    level: 88 },
      { name: "Linux",  level: 72 },
      { name: "Docker", level: 65 },
    ]
  },
  {
    category: "Tools",
    color: "blush",
    items: ["VS Code", "Wireshark"],
    proficiency: [
      { name: "VS Code",   level: 92 },
      { name: "Wireshark", level: 60 },
    ]
  },
]

export const experience = [
  {
    role: "AI Intern",
    company: "AICTE Edunet Foundation",
    duration: "Oct 2025 – Nov 2025",
    type: "Internship",
    color: "lavender",
    points: [
      "Built Green Light Traffic Analyzer using computer vision and deep learning, achieving 17.8% improvement in traffic flow efficiency.",
      "Implemented YOLO object detection for high-accuracy vehicle counting and density analysis, processing 15+ FPS in real time.",
      "Engineered an adaptive algorithm to dynamically calculate optimal green light duration based on vehicle queue length and traffic patterns.",
    ],
  },
  {
    role: "Web Developer",
    company: "AI ShipShape Pvt. Ltd.",
    duration: "May 2025 – Jul 2025",
    type: "Internship",
    color: "blush",
    points: [
      "Built and deployed responsive, full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
    ],
  },
  {
    role: "Salesforce Developer Intern",
    company: "MTX",
    duration: "May 2025 – Jul 2025",
    type: "Internship",
    color: "mint",
    points: [
      "Enhanced Salesforce CRM platforms for client-specific requirements, automating business workflows using Apex and Visualforce.",
      "Created custom dashboards and reports to improve data visualization and support business decision-making.",
    ],
  },
]

export const projects = [
  {
    title: "LenDen – Community Marketplace App",
    year: "2026",
    status: "ongoing",
    tags: ["React Native", "Expo Router", "Node.js", "MongoDB"],
    color: "lavender",
    description:
      "Cross-platform mobile marketplace for students to buy, sell, rent items, and post service requests. Features JWT + bcrypt auth, Cloudinary image hosting, and ownership-based access control with full CRUD REST API.",
    github: "https://github.com/gursneh-28/LenDen-An-e-commerce-app.git",
    live: "",
  },
  {
    title: "Visual Scene Explainer for Blind Persons",
    year: "2026",
    status: "ongoing",
    tags: ["Computer Vision", "NLP", "Python", "AI"],
    color: "sky",
    description:
      "Accessibility-focused AI tool that captures real-time camera frames and generates descriptive audio narrations to assist visually impaired users. Integrates CV and NLP pipelines for contextual scene descriptions.",
    github: "https://github.com/gursneh-28/Visual-Scene-Explainer-for-the-Blind-An-AI-Assistive-Chatbot-for-Real-Time-Scene-Understanding.git",
    live: "",
  },
  {
    title: "Green Light Traffic Analyzer",
    year: "2025",
    status: "done",
    tags: ["YOLO", "OpenCV", "Deep Learning", "Python"],
    color: "mint",
    description:
      "Real-time computer vision system to detect vehicles and analyze traffic density from live footage. Achieved 17.8% efficiency improvement with adaptive green light duration (15–27s) based on queue length.",
    github: "https://github.com/gursneh-28/Green-Traffic-Analyzer---Final.git",
    live: "",
  },
  {
    title: "Biometric Face Recognition System",
    year: "2024",
    status: "done",
    tags: ["MTCNN", "TensorFlow", "Deep Learning", "Python"],
    color: "lavender",
    description:
      "Real-time face recognition using MTCNN for detection and a deep learning model generating 128-dimensional face embeddings. Identity verification via Euclidean distance on live webcam feed.",
    github: "https://github.com/gursneh-28/Biometric-Face-Recognition-and-Access-Control.git",
    live: "",
  },
  {
    title: "Phishing Detection Chrome Extension",
    year: "2024",
    status: "done",
    tags: ["ML", "JavaScript", "Chrome API", "Python"],
    color: "blush",
    description:
      "Chrome extension that analyzes URLs in real time and classifies them as safe or phishing. Extended with a website-category classifier covering Education, Shopping, News, Social Media, and Adult.",
    github: "https://github.com/harshita2202/CyberProject.git",
    live: "",
  },
  {
    title: "Event Vibes",
    year: "2024",
    status: "done",
    tags: ["React.js", "Node.js", "MongoDB", "Cloudinary"],
    color: "sky",
    description:
      "Full-stack media management platform enabling 200+ students to upload, like, comment, and download event media. Admin dashboard with role-based access across 50+ annual college events.",
    github: "https://github.com/harshita2202/Event-Vibes.git",
    live: "",
  },
  {
    title: "MERN Todo App",
    year: "2024",
    status: "done",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    color: "mint",
    description:
      "Full-stack todo application with complete CRUD operations. Frontend deployed on Vercel, backend on Render.",
    github: "https://github.com/gursneh-28/MERN-Todo-App.git",
    live: "https://mern-todo-app-topaz.vercel.app",
  },
]

export const achievements = [
  {
    title: "Visiting Student — IIT Gandhinagar",
    desc: "Selected for Semester IV exchange program (2025).",
    color: "lavender",
  },
  {
    title: "AI Vicharana Shala — IIT Ropar",
    desc: "Selected with full institute scholarship for AI research program (2024).",
    color: "mint",
  },
  {
    title: "Google Build With India Challenge",
    desc: "Ranked in top 5,000 out of 25,000+ repositories for SolutionsChallenge 2025.",
    color: "sky",
  },
  {
    title: "Accenture Data Analytics Virtual Experience",
    desc: "Completed Forage program covering data analytics, visualization, and storytelling (2024).",
    color: "blush",
  },
  {
    title: "Merit Scholarship — JKLU",
    desc: "Awarded 50% scholarship, increased to 75% through consistent academic performance (2023–2027).",
    color: "lavender",
  },
  {
    title: "Teaching Assistant",
    desc: "Python and DAA course, JKLU (Jul–Dec 2024).",
    color: "mint",
  },
]

export const certificates = [
  {
    title: "AI Internship Certificate",
    issuer: "AICTE Edunet Foundation",
    date: "Nov 2025",
    color: "lavender",
    icon: "🤖",
    category: "Internship",
    file: "https://drive.google.com/file/d/1yJidrJr1iqGCC2Pp3scId7zibeEsvdjJ/view?usp=drive_link",
  },
  {
    title: "Web Developer Internship Certificate",
    issuer: "AI ShipShape Pvt. Ltd.",
    date: "Jul 2025",
    color: "blush",
    icon: "💻",
    category: "Internship",
    file: "https://drive.google.com/file/d/1814MmkqReDILZ27wvoinhUa9RlBfQNkd/view?usp=drive_link",
  },
  {
    title: "Salesforce Developer Internship",
    issuer: "MTX Group",
    date: "Jul 2025",
    color: "mint",
    icon: "☁",
    category: "Internship",
    file: "https://drive.google.com/file/d/18FAN4CYPr8q4bqGYnasEJPPwHEsd62z8/view?usp=drive_link",
  },
  {
    title: "Data Analytics & Visualization",
    issuer: "Accenture (Forage)",
    date: "2024",
    color: "sky",
    icon: "📊",
    category: "Course",
    file: "https://drive.google.com/file/d/1NDDrqPymfiHm3D4AEtTC2VIMzvOO7ujF/view?usp=drive_link",
  },
  {
    title: "AI Vicharana Shala",
    issuer: "IIT Ropar",
    date: "2024",
    color: "lavender",
    icon: "🧠",
    category: "Program",
    file: "https://drive.google.com/file/d/1NNPWEMhhg23NiEW7H6hxsDPXtQgS5zH0/view?usp=drive_link",
  },
  {
    title: "Google Build With India Challenge",
    issuer: "Google",
    date: "2025",
    color: "mint",
    icon: "🏆",
    category: "Hackathon",
    file: "https://drive.google.com/file/d/1iF2WOVg8LPa_loN3nyxqc0QGmk2Yozzs/view?usp=drive_link",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Coursera - Meta",
    date: "2024",
    color: "blush",
    icon: "🎓",
    category: "Course",
    file: "https://drive.google.com/file/d/1yprYGzkfiA7q94BBAf0UP21U2o3wHwHL/view?usp=drive_link",
  },
  {
    title: "Programming for Everybody (Python)",
    issuer: "Coursera — University of Michigan",
    date: "2024",
    color: "sky",
    icon: "🐍",
    category: "Course",
    file: "https://drive.google.com/file/d/1w61l7uQE__oVPjUjghjMLcjHO64HW3Pw/view?usp=drive_link",
  },
  {
    title: "Python Data Structures",
    issuer: "Coursera — University of Michigan",
    date: "2024",
    color: "mint",
    icon: "🗂",
    category: "Course",
    file: "https://drive.google.com/file/d/1Jya0_jwOL-H9VcHf6LUEuXHpDOluPdqe/view?usp=drive_link",
  },
  {
    title: "Hack JKLU 2.0",
    issuer: "JK Lakshmipat University",
    date: "2024",
    color: "lavender",
    icon: "⚡",
    category: "Hackathon",
    file: "https://drive.google.com/file/d/1_QeFyQVOmrDC4etvmD9XH-FpU929GR84/view?usp=drive_link",
  },
  {
    title: "Hack2Skill",
    issuer: "Hack2Skill",
    date: "2024",
    color: "blush",
    icon: "🛠",
    category: "Hackathon",
    file: "https://drive.google.com/file/d/11JoTKSch8xqMUYC6qX9gLaR09OS_6gdv/view?usp=drive_link",
  },
  {
    title: "HackCrux",
    issuer: "HackCrux",
    date: "2026",
    color: "sky",
    icon: "🚀",
    category: "Hackathon",
    file: "https://drive.google.com/file/d/15Zj6KdYktM7LkfvgRmRl3jSjOVP-ch4m/view?usp=drive_link",
  },
]