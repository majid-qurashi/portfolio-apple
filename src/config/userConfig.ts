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

  // Spotify Configuration
  spotify: {
    playlistId: "5WsS94KKm5wDhgEpg8VcgM", // Your Spotify playlist ID
    playlistName: "Coding-Time",
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
          url: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqAarC7nJd3gDxjumhF24WwGtuxQzuOE1oBkqeZ7tjl6_nkLSRJZNNxNPN44c246HvJGuBlhSwXb_N74kNyYyhGMAM8SRlx-ja6O5udJt5D9LfQF7u2qsd0YDo5u48KB3oGWc9onQ=s1360-w1360-h1020",
          alt: "GCET Kashmir ",
          description: "GCET Kashmir Campus",
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
          url: "https://kgpsrinagar.edu.in/uploads/gallery/media/S2.jpg",
          alt: "KGP Srinagar ",
          description: "KGP Srinagar Campus",
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
          url: "https://yt3.googleusercontent.com/vPO-KrUjA2FAdHKrXaW-tz5RAzkMRg697pVh55j2oPjN2EEyvJkhrMUxNEKq_IAwgGJzX405=s900-c-k-c0x00ffffff-no-rj",
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
    "MongoDB",
    "SQL Server",
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
      title: "Organizer of iceless curling Championship",
      description: "Iceless Curling",
      institution: "KGP Srinagar",
      location: "Srinagar j&K",
      year: "2023",
      images: [
        {
          url: "https://static.vecteezy.com/system/resources/thumbnails/065/838/158/small/a-doodle-style-illustration-showing-curling-sport-vector.jpg",
          alt: "KGP Srinagar",
          description: "Iceless curling demo",
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
      title: "Web developer intern",
      company: "Cognifyz Technologies",
      location: "Remote",
      period: "July 2024 - October 2024",
      description: "Working on a full stack web application for a client",
      technologies: ["HTML", "CSS", "JS"],
      images: [
        {
          url: "https://static.vecteezy.com/system/resources/thumbnails/059/529/789/small/graduation-cap-in-wreath-with-star-colorful-design-on-white-background-free-vector.jpg",
          alt: "cognifyz",
          // description: "Luftborn Logo"
        },
      ],
    },
  ],

  // SEO Configuration
  seo: {
    title: "Majid Qurashi - Web Developer",
    description:
      "Software Developer based in Kashmir specializing in React, Next.js, and modern web technologies",
    keywords: [
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
    primaryColor: "#1ED760", // Spotify green
    secondaryColor: "#1d1d1f",
    accentColor: "#007AFF",
  },

  // Projects Configuration
  projects: [
    kgpwriter,
    portfolio,
    cvbuilder,

    // Add more projects here
  ],
} as const;
