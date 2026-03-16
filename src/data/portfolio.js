export const personalInfo = {
  name: "Ahmad Fadhlan",
  title: "Full Stack Developer",
  subtitle: "& UI/UX Enthusiast",
  bio: "I craft digital experiences that live at the intersection of beautiful design and clean, performant code. Turning complex problems into elegant solutions.",
  location: "Jakarta, Indonesia",
  email: "ahmadfadhlan2307@gmail.com",
  available: true,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" },
];

export const projects = [
  {
    id: 1,
    title: "Tifara Class",
    category: "Web · Profile",
    link: "https://tifara-classs.vercel.app",
    image: "/images/tifara.png",
    description: "A class profile website for TIFARA featuring 32 members with structured roles, activity gallery, social media integration, background music, and achievement showcase. Built with vanilla HTML, CSS & JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    featured: false,
    gradient: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
    mockColor: "#0a0a1a",
  },
  {
    id: 2,
    title: "Tifara Class V2",
    category: "Web · Profile",
    link: "https://tifara-class.vercel.app",
    image: "/images/tifarav2.png",
    description: "A Netflix-inspired class profile website built with vanilla HTML, CSS & JavaScript. Features dynamic member cards with hover effects, photo modal viewer, Instagram integration, horizontal scroll carousels, and expand-to-grid toggle.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    featured: true,
    gradient: "linear-gradient(135deg, #e50914, #8b0000)",
    mockColor: "#0d0000",
  },
  // {
  //   id: 3,
  //   title: "Fauna Shop",
  //   category: "E-Commerce · Mobile",
  //   description: "Premium e-commerce experience with AR try-on, personalized recommendations, and seamless checkout flow.",
  //   tech: ["React Native", "GraphQL", "AWS", "Stripe"],
  //   year: "2023",
  //   featured: true,
  //   gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
  //   mockColor: "#0d1e2e",
  // },
  // {
  //   id: 4,
  //   title: "PulseBoard",
  //   category: "Analytics · Dashboard",
  //   description: "Real-time analytics dashboard for monitoring user behavior, conversion funnels, and business KPIs.",
  //   tech: ["Vue.js", "D3.js", "FastAPI", "ClickHouse"],
  //   year: "2023",
  //   featured: false,
  //   gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
  //   mockColor: "#0d1e18",
  // },
  // {
  //   id: 5,
  //   title: "Spectra AI",
  //   category: "AI · Web App",
  //   description: "AI-powered image generation and editing tool with custom model fine-tuning and team collaboration features.",
  //   tech: ["Python", "React", "Stable Diffusion", "FastAPI"],
  //   year: "2023",
  //   featured: false,
  //   gradient: "linear-gradient(135deg, #fa709a, #fee140)",
  //   mockColor: "#1e1218",
  // },
  // {
  //   id: 6,
  //   title: "CodeMentor",
  //   category: "EdTech · Platform",
  //   description: "Interactive coding education platform with live coding environments, mentor matching, and project-based learning.",
  //   tech: ["Next.js", "WebSockets", "Docker", "MongoDB"],
  //   year: "2022",
  //   featured: false,
  //   gradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  //   mockColor: "#1a1228",
  // },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      // { name: "TypeScript", level: 88 },
      // { name: "Vue.js", level: 80 },
      { name: "Tailwind CSS", level: 92 },
      // { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / FastAPI", level: 82 },
      // { name: "PostgreSQL", level: 85 },
      // { name: "MongoDB", level: 78 },
      // { name: "Redis", level: 75 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      // { name: "Docker / K8s", level: 72 },
      // { name: "AWS / GCP", level: 78 },
      { name: "Figma", level: 85 },
      // { name: "Git / CI-CD", level: 90 },
      // { name: "GraphQL", level: 82 },
    ],
  },
];

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Projects Done" },
  { value: "10+", label: "Happy Clients" },
  { value: "95%", label: "Satisfaction Rate" },
];
