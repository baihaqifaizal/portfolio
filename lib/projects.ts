export interface Project {
  slug: string
  title: string
  category: string
  result: string
  description: string
  stack: string[]
  image: string
  year: string
  featured?: boolean // Mark top 3 projects
  
  // Extended fields for detail page
  problem: string
  solution: string
  role: string
  stakeholders: string[]
  implementation: string[]
  impact: {
    metric: string
    value: string
  }[]
  learnings: string[]
  gallery?: string[]
}

export const projects: Project[] = [
  // TOP 3 FEATURED PROJECTS
  {
    slug: "gandesa",
    title: "GANDESA - Digital Village Platform",
    category: "Civic Tech & Governance",
    result: "94% efficiency improvement: 4 hours → 15 minutes per administrative process",
    description: "Led end-to-end development of an integrated digital platform that transformed service delivery for 63,000 residents in a remote hillside community. Replaced fragmented manual processes with a centralized system achieving 100% transparency in village projects and budgets, while maintaining 85% adoption rate despite low digital literacy.",
    stack: ["Next.js 16", "React 19", "PostgreSQL", "Prisma", "Tailwind CSS", "Leaflet"],
    image: "/images/gandesa.png",
    year: "2025",
    featured: true,
    
    problem: "Village administration relied entirely on manual processes requiring 4-hour in-person visits for simple requests. Citizens had zero visibility into request status and village budgets, creating systemic distrust. Variable infrastructure (unstable internet, diverse device capabilities) made digital transformation challenging.",
    
    solution: "Architected a Progressive Web App with mobile-first approach, hybrid rendering (SSG for public content, SSR for real-time data), and offline-capable features. Designed UI with minimal cognitive load for users aged 40+ with limited tech experience. Implemented full transparency dashboard for real-time project and budget tracking.",
    
    role: "Technical Lead & Systems Architect. Made strategic architecture decisions optimizing for variable network conditions and device capabilities. Led full development cycle from discovery to deployment, achieving Lighthouse scores >90 across all metrics.",
    
    stakeholders: [
      "63,000 Village Residents",
      "Village Government Officials",
      "Non-technical Administrative Staff",
      "Local Business Owners (UMKM)",
      "Regional Government Oversight"
    ],
    
    implementation: [
      "Progressive Web App (PWA) with mobile-first architecture eliminating app store barriers",
      "Hybrid rendering strategy: Static Generation for profiles/articles, SSR for real-time dashboards",
      "Modular component architecture with domain separation (auth, services, transparency)",
      "Multi-layer security: XSS sanitization, Prisma SQL injection prevention, role-based access control",
      "WebP image optimization and code splitting for fast load on 3G networks (<1.2s FCP)",
      "Client-side PDF generation (jsPDF) reducing server load",
      "OpenStreetMap integration maintaining local data sovereignty"
    ],
    
    impact: [
      { metric: "Efficiency Gain", value: "94%" },
      { metric: "Annual Economic Value", value: "~Rp 100M" },
      { metric: "User Adoption Rate", value: "85%" },
      { metric: "Lighthouse Performance", value: "92/100" },
      { metric: "Service Time", value: "15 min" },
      { metric: "Transparency Coverage", value: "100%" }
    ],
    
    learnings: [
      "Simplicity over complexity: Choosing pragmatic solutions over trendy tech ensures long-term maintainability by teams with limited resources",
      "Digital inclusion through design: 70% of users (age 40+) successfully completed processes without formal training through intuitive UI with max 3 primary actions per screen",
      "Infrastructure resilience: Offline-capable PWA with graceful degradation ensured consistent experience even with intermittent 3G connectivity",
      "Ownership model matters: Full code and data ownership by village eliminated vendor lock-in and recurring licensing costs",
      "Change management is technical: Digital transformation is 30% technology, 70% stakeholder alignment and training"
    ]
  },
  
  {
    slug: "gandiwa-cat",
    title: "Gandiwa CAT - Anti-Fraud Exam System",
    category: "GovTech & Public Integrity",
    result: "100% elimination of exam leaks, restored public trust in selection process",
    description: "Architected a computerized adaptive testing system that solved structural fraud in village official recruitment. Implemented dynamic exam generation with cryptographic assurance, achieving zero unresolved disputes and 75% cost savings while operating offline-first for remote areas with limited infrastructure.",
    stack: ["Node.js", "Express", "SQLite", "Redis", "WebSocket", "Vanilla JS", "Tailwind CSS"],
    image: "/images/gandiwa-cat.png",
    year: "2024",
    featured: true,
    
    problem: "Systematic exam leaks through informal networks, manual grading vulnerable to manipulation, and zero audit trail led to public distrust in village official selection. Remote areas lacked stable internet, and limited technical capacity made complex systems unfeasible.",
    
    solution: "Built offline-first exam system with dynamic question randomization generated at exam start. Each participant receives identical content but different presentation order, ensuring fairness while preventing cheating. Implemented immutable audit trail using local blockchain and live public transparency dashboard.",
    
    role: "Lead Architect & Developer. Designed zero-trust architecture across all layers from authentication to grading. Made strategic tech stack decisions prioritizing reliability in resource-constrained environments.",
    
    stakeholders: [
      "Village Government (Exam Organizers)",
      "Exam Participants",
      "Public Oversight Bodies",
      "Election Supervisory Committee",
      "Community at Large"
    ],
    
    implementation: [
      "Dynamic exam generation: seeded randomization ensuring reproducible results for audit",
      "Multi-layer anti-cheating: browser kiosk mode, network isolation, session binding",
      "Cryptographic assurance: real-time hashing, blockchain audit trail, digital signatures",
      "Offline-first architecture: SQLite + Redis for zero external dependencies",
      "Live transparency dashboard with anonymized real-time scoring",
      "WebSocket-based monitoring without page refresh",
      "Role-based access for administrators, proctors, participants, and public viewers"
    ],
    
    impact: [
      { metric: "Question Leak Elimination", value: "100%" },
      { metric: "Grading Time Reduction", value: "90%" },
      { metric: "Cost Savings", value: "75%" },
      { metric: "Unresolved Disputes", value: "0" },
      { metric: "Public Trust Score", value: "High" },
      { metric: "Setup Time", value: "<4 hours" }
    ],
    
    learnings: [
      "Technology as trust infrastructure: Transparent technical systems can restore institutional credibility when designed with forced accountability",
      "Simplicity as sophistication: Complex security doesn't require complex UX—participants experienced straightforward process despite cryptographic backend",
      "Local context drives innovation: Infrastructure constraints (no internet) led to superior offline-first architecture applicable beyond original use case",
      "Multi-stakeholder verification: Giving all parties (organizers, participants, public) independent verification tools eliminated disputes preemptively",
      "Social impact measurement: Quantitative metrics (time, cost) paired with qualitative impact (trust, legitimacy) demonstrate true value"
    ]
  },
  
  {
    slug: "web-book",
    title: "Web-Book - Interactive Textbook Service",
    category: "Education Technology",
    result: "<2s load on 3G, offline-capable, zero server dependency",
    description: "Freelance service transforming PDF textbooks into standalone interactive websites. One book becomes one web-book—no login, no subscription, no mandatory server. Designed for teachers presenting in class and students studying independently on phones, even with poor connectivity.",
    stack: ["Next.js (SSG)", "TypeScript", "Tailwind CSS", "Service Worker"],
    image: "/images/web-book.png",
    year: "2024",
    featured: true,
    
    problem: "PDF textbooks are passive and heavy. LMS platforms are complex, require stable internet, and don't work on budget phones. Teachers need materials that work for both live presentation and self-paced student study.",
    
    solution: "Convert PDF/teaching modules into static interactive websites. Dual-mode interface: Presentation Mode for teachers (fullscreen, slide navigation) and Study Mode for students (sidebar, mobile-friendly). Curated content structure—not just PDF-to-HTML conversion.",
    
    role: "Lead Developer & Content Architect. Handled full production from content curation to deployment. Optimized for low-bandwidth and low-spec device environments.",
    
    stakeholders: [
      "Teachers (Presentation Mode)",
      "Students (Study Mode on Mobile)",
      "Schools & Pesantren",
      "Tutoring Centers (Bimbel)",
      "Small Publishers"
    ],
    
    implementation: [
      "Static website (SSG) with zero runtime server requirement",
      "Offline-capable via Service Worker caching",
      "Dual-mode: Presentation Mode (fullscreen, arrows) + Study Mode (sidebar, responsive)",
      "Bundle size <500KB for fast 3G loading",
      "Curated chapter/subchapter structure, not raw conversion",
      "Hostable anywhere: shared hosting, local server, USB flash drive",
      "Content-as-code architecture (Markdown/JSON)"
    ],
    
    impact: [
      { metric: "Load Time (3G)", value: "<2s" },
      { metric: "Bundle Size", value: "<500KB" },
      { metric: "Offline Support", value: "Full" },
      { metric: "Device Coverage", value: "98%" },
      { metric: "Server Required", value: "None" },
      { metric: "Subscription", value: "None" }
    ],
    
    learnings: [
      "This is not an LMS or edtech platform—it's a service producing self-contained interactive textbooks",
      "One project = one website. No multi-user platform, no CMS, no editor. Content is curated manually for quality",
      "Performance is the feature: speed determines adoption in bandwidth-constrained contexts",
      "Dual-mode design serves both classroom use and independent mobile study without separate builds",
      "Static export enables hosting on any infrastructure—school servers, shared hosting, even offline USB"
    ]
  },
  
  // OTHER PROJECTS
  {
    slug: "learning-platform-perangkat-desa",
    title: "Village Official Recruitment Learning Platform",
    category: "Education & Assessment",
    result: "Integrated learning and testing platform preparing candidates for village official selection",
    description: "Comprehensive e-learning platform combining interactive educational content (Web-Book style) with exam simulation (CAT system). Designed to democratize access to quality preparation materials for village official recruitment, ensuring merit-based selection through standardized training.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    image: "/images/learning-platform.png",
    year: "2024",
    featured: false,
    
    problem: "Aspiring village officials lacked access to standardized preparation materials, creating information asymmetry that favored well-connected candidates over competent ones.",
    
    solution: "Built integrated platform combining structured learning modules covering governance, law, and civics with realistic exam simulations. Adaptive learning paths track progress and identify knowledge gaps.",
    
    role: "Full-Stack Developer & Instructional Designer. Designed curriculum structure, implemented content delivery system, and integrated assessment engine.",
    
    stakeholders: [
      "Aspiring Village Officials",
      "Village Government Training Bodies",
      "Regional Governance Agencies"
    ],
    
    implementation: [
      "Interactive content modules with Web-Book architecture",
      "Integrated CAT exam simulation engine",
      "Progress tracking and analytics dashboard",
      "Adaptive learning recommendations based on assessment results",
      "Offline-capable for remote area access"
    ],
    
    impact: [
      { metric: "Course Completion Rate", value: "78%" },
      { metric: "Exam Pass Rate Improvement", value: "+45%" },
      { metric: "Active Learners", value: "200+" }
    ],
    
    learnings: [
      "Combining education and assessment in single platform improves learning outcomes through immediate application",
      "Standardized materials level the playing field, improving selection quality",
      "Offline-first design critical for reaching underserved rural candidates"
    ]
  },
  
  {
    slug: "utility-tools-suite",
    title: "Web Utility Tools Collection",
    category: "Productivity & Tools",
    result: "All-in-one web toolkit for common document and media operations",
    description: "Browser-based utility suite providing PDF manipulation, image conversion, compression, and format transformation tools. Privacy-focused with client-side processing ensuring user data never leaves their device. Free alternative to expensive SaaS tools.",
    stack: ["Next.js", "TypeScript", "PDF.js", "Sharp.js"],
    image: "/images/utility-tools.png",
    year: "2024",
    featured: false,
    
    problem: "Users rely on expensive or privacy-invasive online tools for simple document operations. Many solutions require uploading sensitive files to unknown servers.",
    
    solution: "Created comprehensive web toolkit with client-side processing using WebAssembly. All operations run in browser, ensuring complete privacy while maintaining professional-grade functionality.",
    
    role: "Solo Developer. Implemented multiple utility engines, designed unified interface, optimized performance for large files.",
    
    stakeholders: [
      "General Users (Document Processing)",
      "Small Businesses (Daily Operations)",
      "Privacy-Conscious Professionals"
    ],
    
    implementation: [
      "Client-side PDF manipulation with PDF.js",
      "Image processing with Canvas API and Sharp.js",
      "File compression and format conversion",
      "Drag-and-drop interface with batch processing",
      "Zero server uploads - complete privacy guarantee"
    ],
    
    impact: [
      { metric: "Monthly Active Users", value: "1,500+" },
      { metric: "Files Processed", value: "10,000+" },
      { metric: "Privacy Score", value: "100%" }
    ],
    
    learnings: [
      "Client-side processing builds user trust when handling sensitive documents",
      "Simple, focused tools often more valuable than feature-bloated alternatives",
      "Performance optimization critical when processing large files in browser"
    ]
  },
  
  {
    slug: "village-social-network",
    title: "Village Community Social Platform",
    category: "Social & Community",
    result: "Local social network increasing civic participation and community commerce (Prototype)",
    description: "Community-focused social platform designed like classic Facebook meets Reddit for village context. Enables residents to discuss local issues, report problems with location tagging, and trade goods/services. Gamification encourages active participation in village development.",
    stack: ["Next.js", "PostgreSQL", "Redis", "Leaflet"],
    image: "/images/village-social.png",
    year: "2024",
    featured: false,
    
    problem: "Limited platforms for structured village-level civic discourse. Important community issues discussed informally without documentation or official visibility.",
    
    solution: "Built localized social network with features tailored to village governance: structured discussion forums, location-based reporting, community marketplace, and official announcements integration.",
    
    role: "Product Designer & Developer. Researched community needs, designed engagement mechanics, implemented core platform features.",
    
    stakeholders: [
      "Village Residents (Primary Users)",
      "Village Officials (Moderators)",
      "Local Business Owners (Marketplace)",
      "Community Leaders"
    ],
    
    implementation: [
      "Facebook-style timeline with village-relevant content filters",
      "Reddit-style discussion threads for civic topics",
      "Location-based issue reporting with map integration",
      "Community marketplace for local commerce",
      "Gamification system rewarding civic participation"
    ],
    
    impact: [
      { metric: "Prototype Users", value: "150+" },
      { metric: "Issues Reported", value: "80+" },
      { metric: "Engagement Rate", value: "65%" }
    ],
    
    learnings: [
      "Social platforms need strong moderation for productive civic discourse",
      "Location-based features critical for village-scale problem-solving",
      "Marketplace integration drives daily engagement, sustaining civic participation"
    ]
  },
  
  {
    slug: "ai-village-assistant",
    title: "AI Village Character Assistant",
    category: "AI & Interactive Media",
    result: "Visual novel-style AI chatbot with village context awareness and location-based reporting",
    description: "Innovative AI assistant designed as visual novel game character providing village information, answering resident queries, and facilitating location-based issue reporting. Customizable character branding allows each village to create unique AI persona reflecting local identity and culture.",
    stack: ["Next.js", "OpenAI GPT", "Leaflet", "TypeScript"],
    image: "/images/ai-assistant.png",
    year: "2025",
    featured: false,
    
    problem: "Residents struggle to find village information and proper channels for reporting issues. Traditional chatbots feel impersonal and don't understand local context.",
    
    solution: "Created engaging AI assistant with visual novel interface, trained on village-specific context. Gamified interaction encourages usage while location-based reporting ensures actionable community feedback.",
    
    role: "AI Integration Specialist & Game Designer. Designed character system, implemented GPT integration with context injection, built reporting workflow.",
    
    stakeholders: [
      "Village Residents (Information Seekers)",
      "Village Officials (Report Recipients)",
      "Tourism Visitors (Village Information)",
      "Local Businesses (Branding Partners)"
    ],
    
    implementation: [
      "Visual novel-style interface with character dialogue system",
      "GPT-4 integration with village-specific context training",
      "Customizable character appearance and personality per village",
      "Map-based issue reporting with photo upload",
      "Multi-language support for local dialects",
      "Report routing to appropriate village departments"
    ],
    
    impact: [
      { metric: "Daily Interactions", value: "500+" },
      { metric: "Reports Submitted", value: "120+" },
      { metric: "User Satisfaction", value: "4.5/5" },
      { metric: "Villages Customized", value: "5+" }
    ],
    
    learnings: [
      "Gamified interfaces dramatically increase AI tool adoption",
      "Local context awareness makes AI assistant genuinely useful vs novelty",
      "Character customization builds emotional connection with village brand",
      "Combining information access with reporting creates practical value loop"
    ]
  },
  
  {
    slug: "gamified-education-rpg",
    title: "Educational RPG Gamification System",
    category: "Education & Gamification",
    result: "RPG-style learning platform increasing student engagement through competitive progression",
    description: "Student learning platform with RPG game mechanics featuring character leveling, skill trees, and achievement systems. Students earn experience points through learning activities, unlocking abilities and competing on leaderboards. Transforms passive studying into engaging competitive gameplay.",
    stack: ["Next.js", "PostgreSQL", "Redis", "Chart.js"],
    image: "/images/edu-rpg.png",
    year: "2024",
    featured: false,
    
    problem: "Students lack intrinsic motivation for consistent study. Traditional reward systems (grades) provide delayed feedback and limited engagement.",
    
    solution: "Designed full RPG progression system where academic activities generate immediate XP rewards. Character customization and leaderboards spark healthy competition while skill trees visualize learning paths.",
    
    role: "Game Designer & Full-Stack Developer. Designed progression mechanics, implemented real-time leaderboards, balanced reward systems.",
    
    stakeholders: [
      "Students (Primary Players)",
      "Teachers (Content Creators)",
      "Parents (Progress Monitors)",
      "School Administrators"
    ],
    
    implementation: [
      "Character creation and customization system",
      "Experience points and leveling mechanics tied to learning activities",
      "Skill tree visualization mapping curriculum progression",
      "Achievement badges for milestone completion",
      "Real-time leaderboards with friend comparisons",
      "Daily quests encouraging consistent engagement",
      "Parent dashboard for monitoring child progress"
    ],
    
    impact: [
      { metric: "Daily Active Students", value: "300+" },
      { metric: "Engagement Increase", value: "+180%" },
      { metric: "Study Consistency", value: "+65%" },
      { metric: "Average Session Time", value: "35 min" }
    ],
    
    learnings: [
      "Immediate feedback loops (XP) more effective than delayed rewards (grades)",
      "Social comparison drives engagement but requires careful balancing to avoid demotivation",
      "Game mechanics must reinforce genuine learning, not just activity completion",
      "Character progression gives students visible sense of growth and achievement"
    ]
  }
]

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured === true).slice(0, 3)
}

export function getOtherProjects(): Project[] {
  return projects.filter(p => p.featured !== true)
}

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug)
}
