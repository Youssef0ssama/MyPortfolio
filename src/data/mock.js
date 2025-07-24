// Mock data for Youssef Kandil's Portfolio
import islamicImg from '../assets/images/islamic.png';
import hotelImg from '../assets/images/Hotel.png';
import schedsmartDarkImg from '../assets/images/schedsmart-dark.png';
import schedsmartLightImg from '../assets/images/schedsmart-light.png';
import airbnbImg from '../assets/images/airbnb.png';

export const personalInfo = {
  name: "Youssef Kandil",
  title: "Frontend Developer",
  email: "youssefossama210@gmail.com",
  phone: "+20 01061836090",
  location: "Alexandria, Egypt",
  objective: "A recent Computer Science graduate specializing in frontend development. Passionate about building user-friendly, scalable web applications and eager to apply strong technical and problem-solving skills in a professional environment.",
  heroImage: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzUyMjc0Njk3fDA&ixlib=rb-4.1.0&q=85"
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Youssef0ssama",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/youssef-0ssama/",
    icon: "linkedin"
  },
  {
    name: "Figma",
    url: "https://www.figma.com/@Youssef0ssama",
    icon: "figma"
  },
  {
    name: "Portfolio",
    url: "https://portfolio-youssef-ossamas-projects-e14fbaa5.vercel.app/",
    icon: "external-link"
  }
];

export const education = {
  degree: "Bachelor of Sciences in Computer Science",
  institution: "Alexandria University",
  duration: "Sep 2021 - Jun 2025",
  CGPA: 3.5984 ,
  courses: [
    "Object-oriented Programming",
    "Algorithm Analysis and Design",
    "Data Structures",
    "Databases",
    "UI/UX Design",
    "Web Development",
    "Mobile Development"
  ]
};

export const projects = [
  {
    id: 1,
    title: "American Islamic Diversity",
    description: "Transformed a static, hard-coded nonprofit website into a dynamic platform by designing and implementing a full backend (Node.js, Express, SQLite) and admin UI for content management.",
    image: islamicImg,
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express", "SQLite"],
    liveUrl: "https://americanislamicdiversity.org/",
    githubUrl: null,
    featured: true
  },
  {
    id: 2,
    title: "Hotel and Tour Booking Platform",
    description: "Web project serves as a modern and user-friendly hotel and tour booking platform, offering an immersive experience inspired by leading travel websites. (Career 180/Learn it Final Project)",
    image: hotelImg,
    technologies: ["React.js", "Redux", "CSS Modules", "JavaScript"],
    liveUrl: "https://hotels-one-jet.vercel.app/",
    githubUrl: "https://github.com/emy185/hotels.git",
    featured: true
  },
  {
    id: 3,
    title: "SCHEDSMART",
    description: "Developed a university scheduling web application for Alexandria University, enabling efficient timetable generation and management for students and staff. (Graduation Final Project)",
    technologies: ["React.js", "Tailwind CSS", "Vite", "NestJS", "TypeScript", "Flask", "OR-Tools", "Docker", "PostgreSQL"],
    liveUrl: null,
    githubUrl: null,
    featured: true
  },
  {
    id: 4,
    title: "Airbnb Mobile App Design",
    description: "Designed and developed a responsive Airbnb UI project on Figma, showcasing meticulous attention to detail and a user-centric approach, ensuring seamless accessibility across various devices.",
    image: airbnbImg,
    technologies: ["Figma"],
    liveUrl: null,
    githubUrl: null,
    figmaUrl: "https://www.figma.com/community/file/1346919958313795499/airbnb",
    featured: false
  }
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Arabic", level: 100, description: "Native" },
      { name: "English", level: 85, description: "Proficient" }
    ]
  },
  {
    category: "Programming",
    items: [
      { name: "JavaScript", level: 90, description: "Advanced" },
      { name: "Python", level: 85, description: "Advanced" },
      { name: "Java", level: 80, description: "Intermediate" },
      { name: "HTML", level: 95, description: "Expert" },
      { name: "CSS", level: 90, description: "Advanced" }
    ]
  },
  {
    category: "Frameworks",
    items: [
      { name: "React", level: 90, description: "Advanced" },
      { name: "Node.js", level: 75, description: "Intermediate" },
      { name: "Express", level: 70, description: "Intermediate" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", level: 80, description: "Intermediate" },
      { name: "SQLite", level: 75, description: "Intermediate" },
      { name: "PostgreSQL", level: 70, description: "Intermediate" }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 85, description: "Advanced" },
      { name: "Figma", level: 80, description: "Intermediate" },
      { name: "Docker", level: 70, description: "Intermediate" }
    ]
  }
];

export const certificates = [
  {
    title: "Web Designing Track",
    issuer: "NTI",
    year: "2025",
    current: true
  },
  {
    title: "Frontend Bootcamp",
    issuer: "Career 180/Learn it",
    year: "2024",
    current: false
  },
  {
    title: "Frontend Reactjs Training",
    issuer: "ITI",
    year: "2024",
    current: false
  }
];

// Export the SCHEDSMART images for use in the component
export { schedsmartDarkImg, schedsmartLightImg };