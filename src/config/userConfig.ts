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
      degree: "Diploma of Computer Engineering",
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
    {
      degree: "Bachelor of Technology Computer Science & Engineering",
      major: "Computer Science & Engineering",
      institution:
        "Government College of Engineering & Technology Safapora Kashmir",
      location: "Ganderbal J&K, India",
      year: "2023-2026",
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
      location: "Nile University",
      year: "2023-2024",
      images: [
        {
          url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.academor.com%2F&psig=AOvVaw2ohxNwZStYG3886WAoruQ7&ust=1749703271575000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjXwYbH6I0DFQAAAAAdAAAAABAE",
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
          url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstreetcurling.com%2F&psig=AOvVaw1kpDCBdu9YRG6vuJ77UKL_&ust=1749703696431000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDazK3I6I0DFQAAAAAdAAAAABAE",
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
          url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FEnglish-Football-League%2F0PGBSFG71P59R5JMH3X3EF6BF4&psig=AOvVaw2_gLSAnlkWnizWpjZK2jyr&ust=1749704028649000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjt8svJ6I0DFQAAAAAdAAAAABAE",
          alt: "DPL",
          description: "DPL Handwara",
        },
      ],
    },
    {
      title: "Dean's Honors",
      description: "Dean's Honors",
      achievement: "Made the Dean's List for the Fall 2024 semester",
      year: "2024",
      images: [
        {
          url: "https://i.ibb.co/k2jWyBVz/468465943-17952654941854972-3647153475567609171-n.jpg",
          alt: "Dean's Honors",
          description: "Dean's Honors",
        },
      ],
    },
    {
      title: "Nile University Innovation Competition",
      description: "Nile University Innovation Competition",
      achievement:
        "Secured second place in the Nile University Innovation Competition hosted by Nile University - NilePreneurs and NU E-Club ! 🎉🏆",
      year: "2025",
      images: [
        {
          url: "https://i.ibb.co/HfGLHCQn/1723818852840.jpg",
          alt: "NUIC",
          // description: "NUIC Certificate"
        },
        {
          url: "https://i.ibb.co/VcyKywY4/1723818852069.jpg",
          alt: "NUIC",
          // description: "NUIC Certificate"
        },
      ],
    },
    {
      title: "ECPC",
      description: "Egyptian Collegiate Programming Contest",
      achievement:
        "Rank 3rd in my third year at NU and qualified for the ECPC Finals",
      year: "2024",
      images: [
        {
          url: "https://i.ibb.co/N2RZwmKT/487497338-1081518670677230-8143431170413885977-n.jpg",
          alt: "ECPC",
          description: "ECPC Certificate",
        },
      ],
    },
    {
      title: "UGRF 17th Edition",
      description: "UGRF 17th Edition",
      achievement:
        "2nd place SWE for PregTracker- personalized pregnancy tracker ",
      year: "2024",
      images: [
        {
          url: "https://i.ibb.co/N2qgnb92/1706802292377.jpg",
          alt: "UGRF",
          description: "UGRF Certificate",
        },
      ],
    },
    {
      title: "UGRF 17th Edition",
      description: "UGRF 17th Edition",
      achievement:
        " 2nd place Clinical informatics for Recover360- an advanced physiotherapy clinic management system",
      year: "2024",
      images: [
        {
          url: "https://i.ibb.co/N2qgnb92/1706802292377.jpg",
          alt: "UGRF",
          description: "UGRF Certificate",
        },
        {
          url: "https://i.ibb.co/SkfYGDv/1706802293048.jpg",
          alt: "UGRF",
          description: "UGRF Certificate",
        },
      ],
    },
    {
      title: "ECPC",
      description: "Egyptian Collegiate Programming Contest",
      achievement: "Rank 7th in my first year at NU",
      year: "2022",
      images: [
        {
          url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/482277706_1065267045635726_1956241697864875127_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=1ylVvYBsad4Q7kNvwGOE6DO&_nc_oc=Adltzr1B7OJ92p1jCzivnB0WvixF4DyE-MwQ8qhS7qD8G9fxDmbN3X5qcvrYuUyQ87Q&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=3tU8CVtPMYaAEAoV-DVUcQ&oh=00_AfFICX7UOYGbZ01o2DP1U4nOfR4p6P7RUv0AhILIPAql_g&oe=6806DF27",
          alt: "ECPC",
          // description: "ECPC Certificate"
        },
      ],
    },
    {
      title: "ECPC",
      description: "Egyptian Collegiate Programming Contest",
      achievement: "Rank 5th in my second year at NU",
      year: "2023",
      images: [
        {
          url: "https://i.ibb.co/NnWkjG8g/486719077-1079195597576204-1921460299948979682-n.jpg",
          alt: "ECPC",
          // description: "ECPC Certificate"
        },
      ],
    },
    {
      title: "EOI",
      description: "Egyptian Olympiad in Informatics",
      achievement: "Rank 51 in Egypt",
      year: "2015",
      images: [
        {
          url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/462316142_7913407118761100_685588124196353855_n.png?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=7cOAfEscTtUQ7kNvwHHXc59&_nc_oc=AdmZ1IgqnVQhS5ZJxSMlE7VO5h2GwBnOM_SaQ_mXEGhRayrAdbc7l7wIrObBPOGqo6k&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=LBTKldq_gsmdhFQ--n6Q6g&oh=00_AfFvKYIPxae6llKl_VT17dG5zIDCLOkf2EigX7n6x00G-g&oe=680AC3F6",
          alt: "EOI",
          // description: "EOI Certificate"
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
          url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funstop.com%2Fc%2Fcognifyz-technologies-845937&psig=AOvVaw31nFsRRzJicCOXXQ6H9naY&ust=1749704243853000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJi59bHK6I0DFQAAAAAdAAAAABAU",
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
