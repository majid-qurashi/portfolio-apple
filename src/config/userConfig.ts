import kgpwriter from "./projects/kgpwriter.json";
import cvbuilder from "./projects/cvbuilder.json";
import portfolio from "./projects/portfolio.json";

export const userConfig = {
  // Personal Information
  name: "Majid Qurashi",
  role: "Computer Science Engineer",
  location: "J&K India",
  email: "majidqurashi958@gmail.com",
  website: "qurashi.vercel.app",
  roleFocus: "Web developer",
  age: 20,

  // Social Links
  social: {
    github: "https://github.com/majid-qurashi",
    linkedin: "https://www.linkedin.com/in/majidqurashi/", // Add your LinkedIn URL
  },

  // Contact Information
  contact: {
    email: "majidqurashi958@gmail.com",
    phone: "+919541****94", // Add your phone number
    calendly: "https://calendly.com/majidqurashi", // Add your Calendly URL
  },

  // Resume Configuration
  resume: {
    url: "https://cv-majid.netlify.app/",
    localPath: "/resume.pdf",
  },

  // Education Background
  education: [
    {
      degree: "Bachelor of Technology Computer Science & Engineering",
      major: "Computer Science & Engineering",
      institution:
        "Government College of Engineering & Technology Safapora Kashmir",
      location: "Ganderbal J&K, India",
      year: "2023-Ongoing",
      description:
        "Relevant coursework: Data Structures, Algorithms, Database Management, Software Engineering, Artificial Intelligence, Computer Networks, Operating Systems, Computer Architecture, Computer Organization, Computer Security, Computer Graphics, Computer Systems, Computer Networks, Operating Systems, Computer Architecture, Computer Organization, Computer Security, Computer Graphics, Computer Systems",
      images: [
        {
          url: "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/25916/2024/8/30/Campus%20Side%20View%20of%C2%A0Government%20College%20of%20Engineering%20and%20Technology%20Safapora_Campus-View.jpg",
          alt: "GCET Safapora Kashmir ",
          description: "GCET Safapora Kashmir Campus",
        },
      ],
    },
    {
      degree: "Diploma in Computer Engineering",
      major: "Computer Science",
      institution: "Kashmir Government Polytechnic College Srinagar",
      location: "Srinagar J&K, India",
      year: "2020-2023",
      description:
        "Relevant coursework: Data Structures, Algorithms, Database Management, Software Engineering, Artificial Intelligence, Computer Networks, Operating Systems, Computer Architecture, Computer Organization, Computer Security, Computer Graphics, Computer Systems, Computer Networks, Operating Systems, Computer Architecture, Computer Organization, Computer Security, Computer Graphics, Computer Systems",
      images: [
        {
          url: "https://pbs.twimg.com/profile_images/1639522433643302912/h2NllVtr_400x400.jpg",
          alt: "KGP Srinagar Logo",
          description: "Kashmir Government Polytechnic Srinagar",
        },
      ],
    },
  ],

  courses: [
    {
      title: "Full Stack Development",
      description: "Web Development course",
      institution: "Physics Wallah",
      location: "Remote",
      year: "2022-2023",
      images: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbPsqWjwEnrezAerXg5Okq-dYCtFgvW5K0xA&s",
          alt: "PW Skills",
          // description: "ITI Campus"
        },
      ],
    },
    {
      title: "Python For Beginners",
      description: "Python for beginners course",
      institution: "NIELIT",
      location: "Remote",
      year: "2024",
      images: [
        {
          url: "https://images.shiksha.com/mediadata/images/articles/1580365123phpHzRVGu.jpeg",
          alt: "NIELIT",
          // description: "DEPI Logo"
        },
      ],
    },
    {
      title: "Python for AI",
      description: "Comprehensive course on Python applications in Artificial Intelligence",
      institution: "NIT Srinagar",
      location: "Srinagar, J&K",
      year: "2024",
      images: [
        {
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/National_Institute_of_Technology%2C_Srinagar_Logo.png/250px-National_Institute_of_Technology%2C_Srinagar_Logo.png",
          alt: "NIT Srinagar Logo",
        },
      ],
    },
    {
      title: "Cyber Security",
      description: "Professional certification in Cyber Security fundamentals",
      institution: "NDSC & Skill India",
      location: "Remote",
      year: "2024",
      images: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XtUVJDx5XwJ4YodVWJU9qkSeNXAN96PbCg&s",
          alt: "NDSC & Skill India Logo",
        },
      ],
    },
  ],

  skills: [
    "C",
    "SQL Server",
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Next.js",
    "Tailwind CSS",
  ],

  extraCurricularRoles: [
    {
      role: "Campus Ambessder",
      institution: "Academor",
      location: "Remote",
      year: "2023-2024",
      images: [
        {
          url: "https://static.vecteezy.com/system/resources/thumbnails/059/529/789/small/graduation-cap-in-wreath-with-star-colorful-design-on-white-background-free-vector.jpg",
          alt: "Academor",
          // description: "NUICPC Campus"
        },
      ],
    },
  ],

  extraCurricularActivities: [
    {
      title: "Participated in iceless curling Championship",
      description: "Represented the college in the regional iceless curling tournament.",
      institution: "KGP Srinagar",
      location: "Srinagar, J&K",
      year: "2022",
      images: [
        {
          url: "https://static.vecteezy.com/system/resources/thumbnails/065/838/158/small/a-doodle-style-illustration-showing-curling-sport-vector.jpg",
          alt: "Iceless Curling",
          description: "KGP Srinagar Iceless Curling Participation",
        },
      ],
    },
  ],
  competitions: [
    {
      title: "FootBall Championship by DPL Handwara J&K",
      description: "U14 League",
      achievement: "Certificate of participation",
      year: "2017",
      images: [
        {
          url: "https://static.vecteezy.com/system/resources/thumbnails/036/493/490/small/football-logo-design-illustration-vector.jpg",
          alt: "DPL",
          description: "DPL Handwara",
        },
      ],
    },
  ],

  // Professional Experience
  experience: [
    {
      title: "Employability Skills and Digital literacy using AI",
      company: "Edunet foundation",
      location: "Remote",
      period: "11/2025 – 12/2025",
      description: "Developed employability and digital literacy skills with practical use of AI tools, Excel, and data handling techniques.",
      technologies: ["AI Tools", "Excel", "Data Handling"],
      images: [
        {
          url: "https://edunetfoundation.org/wp-content/uploads/2021/02/edunet-logo.svg",
          alt: "Edunet Foundation",
        },
      ],
    },
    {
      title: "Artificial Intelligence & Data Analytics",
      company: "Edunet foundation",
      location: "Remote",
      period: "10/2025 – 11/2025",
      description: "Analyzed sustainability datasets using Excel, Pandas, and DataFrames. Applied statistical methods to identify green skill patterns.",
      technologies: ["Excel", "Pandas", "DataFrames", "Statistics"],
      images: [
        {
          url: "https://edunetfoundation.org/wp-content/uploads/2021/02/edunet-logo.svg",
          alt: "Edunet Foundation",
        },
      ],
    },
    {
      title: "Conversational Data Analysis with LLM's",
      company: "Edunet foundation",
      location: "Remote",
      period: "09/2025 – 10/2025",
      description: "Analyzed datasets using Excel, Pandas & DataFrames. Designed dashboards & reports for decision-making.",
      technologies: ["LLMs", "Pandas", "Excel", "Dashboards"],
      images: [
        {
          url: "https://edunetfoundation.org/wp-content/uploads/2021/02/edunet-logo.svg",
          alt: "Edunet Foundation",
        },
      ],
    },
    {
      title: "Web developer intern",
      company: "Cognifyz Technologies",
      location: "Remote",
      period: "July 2024 - October 2024",
      description: "Worked as a UI/UX developer and developed user-friendly interactive frontend web applications.",
      technologies: ["HTML", "CSS", "JS"],
      images: [
        {
          url: "https://static.vecteezy.com/system/resources/thumbnails/059/529/789/small/graduation-cap-in-wreath-with-star-colorful-design-on-white-background-free-vector.jpg",
          alt: "cognifyz",
        },
      ],
    },
  ],

  // SEO Configuration
  seo: {
    title: "Majid Qurashi - Web Developer",
    description:
      "Majid Yaseen Qurashi (ermajid) - Software Developer based in Kashmir specializing in React, Next.js, and modern web technologies",
    keywords: [
      "Majid Qurashi",
      "Majid Yaseen Qurashi",
      "ermajid",
      "Software Developer",
      "React",
      "Node.js",
      "Next.js",
      "Astro.js",
      "Web Development",
      "India",
    ],
  },

  // Theme Configuration
  theme: {
    primaryColor: "#007AFF", // iOS Blue
    secondaryColor: "#1d1d1f",
    accentColor: "#007AFF",
  },

  // Projects Configuration
  projects: [
    kgpwriter,
    portfolio,
    cvbuilder,
    {
      id: "more-projects",
      title: "More projects to be added soon",
      description: "Stay tuned! I'm currently developing several exciting new projects to showcase here.",
      repoUrl: "https://github.com/majid-qurashi",
      liveUrl: "",
      techStack: ["Future Projects"],
      structure: { root: "coming-soon", children: [] },
      images: []
    }
  ],
} as const;
