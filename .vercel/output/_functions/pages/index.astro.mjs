import { i as createAstro, j as createComponent, p as renderComponent, r as renderTemplate, u as unescapeHTML, q as Fragment, l as addAttribute, v as renderScript, w as renderHead, x as renderSlot } from '../chunks/astro/server_D7eCUp8f.mjs';
import 'kleur/colors';
/* empty css                                 */
import { escape } from 'html-escaper';
import { c as getImage } from '../chunks/_astro_assets_BW2CJsC9.mjs';
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { MdWifi } from 'react-icons/md';
import { FaLink, FaApple, FaGithub, FaLinkedin, FaEnvelope, FaTrophy, FaGraduationCap, FaBriefcase, FaUsers, FaPalette, FaBookOpen, FaCode, FaChevronLeft, FaExternalLinkAlt, FaFolder, FaFile } from 'react-icons/fa';
import { IoClose, IoCellular, IoBatteryHalfOutline, IoSearchSharp, IoHelpCircle, IoMail, IoCall, IoDocumentText, IoCodeSlash } from 'react-icons/io5';
import { VscVscode } from 'react-icons/vsc';
import { BsGithub, BsStickyFill, BsFilePdf, BsCalendar, BsSpotify, BsLinkedin } from 'react-icons/bs';
import { RiTerminalFill } from 'react-icons/ri';
import { IoIosCall, IoIosMail } from 'react-icons/io';
export { renderers } from '../renderers.mjs';

const createMetaTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<meta ${attrs}>`;
};
const createLinkTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<link ${attrs}>`;
};
const createOpenGraphTag = (property, content) => {
  return createMetaTag({ property: `og:${property}`, content });
};
const buildOpenGraphMediaTags = (mediaType, media) => {
  let tags = "";
  const addTag = (tag) => {
    tags += tag + "\n";
  };
  media.forEach((medium) => {
    addTag(createOpenGraphTag(mediaType, medium.url));
    if (medium.alt) {
      addTag(createOpenGraphTag(`${mediaType}:alt`, medium.alt));
    }
    if (medium.secureUrl) {
      addTag(createOpenGraphTag(`${mediaType}:secure_url`, medium.secureUrl));
    }
    if (medium.type) {
      addTag(createOpenGraphTag(`${mediaType}:type`, medium.type));
    }
    if (medium.width) {
      addTag(createOpenGraphTag(`${mediaType}:width`, medium.width.toString()));
    }
    if (medium.height) {
      addTag(
        createOpenGraphTag(`${mediaType}:height`, medium.height.toString())
      );
    }
  });
  return tags;
};
const buildTags = (config) => {
  let tagsToRender = "";
  const addTag = (tag) => {
    tagsToRender += tag + "\n";
  };
  if (config.title) {
    const formattedTitle = config.titleTemplate ? config.titleTemplate.replace("%s", config.title) : config.title;
    addTag(`<title>${escape(formattedTitle)}</title>`);
  }
  if (config.description) {
    addTag(createMetaTag({ name: "description", content: config.description }));
  }
  let robotsContent = [];
  if (typeof config.noindex !== "undefined") {
    robotsContent.push(config.noindex ? "noindex" : "index");
  }
  if (typeof config.nofollow !== "undefined") {
    robotsContent.push(config.nofollow ? "nofollow" : "follow");
  }
  if (config.robotsProps) {
    const {
      nosnippet,
      maxSnippet,
      maxImagePreview,
      noarchive,
      unavailableAfter,
      noimageindex,
      notranslate
    } = config.robotsProps;
    if (nosnippet) robotsContent.push("nosnippet");
    if (typeof maxSnippet === "number") robotsContent.push(`max-snippet:${maxSnippet}`);
    if (maxImagePreview)
      robotsContent.push(`max-image-preview:${maxImagePreview}`);
    if (noarchive) robotsContent.push("noarchive");
    if (unavailableAfter)
      robotsContent.push(`unavailable_after:${unavailableAfter}`);
    if (noimageindex) robotsContent.push("noimageindex");
    if (notranslate) robotsContent.push("notranslate");
  }
  if (robotsContent.length > 0) {
    addTag(createMetaTag({ name: "robots", content: robotsContent.join(",") }));
  }
  if (config.canonical) {
    addTag(createLinkTag({ rel: "canonical", href: config.canonical }));
  }
  if (config.mobileAlternate) {
    addTag(
      createLinkTag({
        rel: "alternate",
        media: config.mobileAlternate.media,
        href: config.mobileAlternate.href
      })
    );
  }
  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach((languageAlternate) => {
      addTag(
        createLinkTag({
          rel: "alternate",
          hreflang: languageAlternate.hreflang,
          href: languageAlternate.href
        })
      );
    });
  }
  if (config.openGraph) {
    const title = config.openGraph?.title || config.title;
    if (title) {
      addTag(createOpenGraphTag("title", title));
    }
    const description = config.openGraph?.description || config.description;
    if (description) {
      addTag(createOpenGraphTag("description", description));
    }
    if (config.openGraph.url) {
      addTag(createOpenGraphTag("url", config.openGraph.url));
    }
    if (config.openGraph.type) {
      addTag(createOpenGraphTag("type", config.openGraph.type));
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      addTag(buildOpenGraphMediaTags("image", config.openGraph.images));
    }
    if (config.openGraph.videos && config.openGraph.videos.length) {
      addTag(buildOpenGraphMediaTags("video", config.openGraph.videos));
    }
    if (config.openGraph.locale) {
      addTag(createOpenGraphTag("locale", config.openGraph.locale));
    }
    if (config.openGraph.site_name) {
      addTag(createOpenGraphTag("site_name", config.openGraph.site_name));
    }
    if (config.openGraph.profile) {
      if (config.openGraph.profile.firstName) {
        addTag(
          createOpenGraphTag(
            "profile:first_name",
            config.openGraph.profile.firstName
          )
        );
      }
      if (config.openGraph.profile.lastName) {
        addTag(
          createOpenGraphTag(
            "profile:last_name",
            config.openGraph.profile.lastName
          )
        );
      }
      if (config.openGraph.profile.username) {
        addTag(
          createOpenGraphTag(
            "profile:username",
            config.openGraph.profile.username
          )
        );
      }
      if (config.openGraph.profile.gender) {
        addTag(
          createOpenGraphTag("profile:gender", config.openGraph.profile.gender)
        );
      }
    }
    if (config.openGraph.book) {
      if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
        config.openGraph.book.authors.forEach((author) => {
          addTag(createOpenGraphTag("book:author", author));
        });
      }
      if (config.openGraph.book.isbn) {
        addTag(createOpenGraphTag("book:isbn", config.openGraph.book.isbn));
      }
      if (config.openGraph.book.releaseDate) {
        addTag(
          createOpenGraphTag(
            "book:release_date",
            config.openGraph.book.releaseDate
          )
        );
      }
      if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
        config.openGraph.book.tags.forEach((tag) => {
          addTag(createOpenGraphTag("book:tag", tag));
        });
      }
    }
    if (config.openGraph.article) {
      if (config.openGraph.article.publishedTime) {
        addTag(
          createOpenGraphTag(
            "article:published_time",
            config.openGraph.article.publishedTime
          )
        );
      }
      if (config.openGraph.article.modifiedTime) {
        addTag(
          createOpenGraphTag(
            "article:modified_time",
            config.openGraph.article.modifiedTime
          )
        );
      }
      if (config.openGraph.article.expirationTime) {
        addTag(
          createOpenGraphTag(
            "article:expiration_time",
            config.openGraph.article.expirationTime
          )
        );
      }
      if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
        config.openGraph.article.authors.forEach((author) => {
          addTag(createOpenGraphTag("article:author", author));
        });
      }
      if (config.openGraph.article.section) {
        addTag(
          createOpenGraphTag(
            "article:section",
            config.openGraph.article.section
          )
        );
      }
      if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
        config.openGraph.article.tags.forEach((tag) => {
          addTag(createOpenGraphTag("article:tag", tag));
        });
      }
    }
    if (config.openGraph.video) {
      if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
        config.openGraph.video.actors.forEach((actor) => {
          addTag(createOpenGraphTag("video:actor", actor.profile));
          if (actor.role) {
            addTag(createOpenGraphTag("video:actor:role", actor.role));
          }
        });
      }
      if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
        config.openGraph.video.directors.forEach((director) => {
          addTag(createOpenGraphTag("video:director", director));
        });
      }
      if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
        config.openGraph.video.writers.forEach((writer) => {
          addTag(createOpenGraphTag("video:writer", writer));
        });
      }
      if (config.openGraph.video.duration) {
        addTag(
          createOpenGraphTag(
            "video:duration",
            config.openGraph.video.duration.toString()
          )
        );
      }
      if (config.openGraph.video.releaseDate) {
        addTag(
          createOpenGraphTag(
            "video:release_date",
            config.openGraph.video.releaseDate
          )
        );
      }
      if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
        config.openGraph.video.tags.forEach((tag) => {
          addTag(createOpenGraphTag("video:tag", tag));
        });
      }
      if (config.openGraph.video.series) {
        addTag(
          createOpenGraphTag("video:series", config.openGraph.video.series)
        );
      }
    }
  }
  if (config.facebook && config.facebook.appId) {
    addTag(
      createMetaTag({ property: "fb:app_id", content: config.facebook.appId })
    );
  }
  if (config.twitter) {
    if (config.twitter.cardType) {
      addTag(
        createMetaTag({
          name: "twitter:card",
          content: config.twitter.cardType
        })
      );
    }
    if (config.twitter.site) {
      addTag(
        createMetaTag({ name: "twitter:site", content: config.twitter.site })
      );
    }
    if (config.twitter.handle) {
      addTag(
        createMetaTag({
          name: "twitter:creator",
          content: config.twitter.handle
        })
      );
    }
  }
  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach((metaTag) => {
      const attributes = {
        content: metaTag.content
      };
      if ("name" in metaTag && metaTag.name) {
        attributes.name = metaTag.name;
      } else if ("property" in metaTag && metaTag.property) {
        attributes.property = metaTag.property;
      } else if ("httpEquiv" in metaTag && metaTag.httpEquiv) {
        attributes["http-equiv"] = metaTag.httpEquiv;
      }
      addTag(createMetaTag(attributes));
    });
  }
  if (config.additionalLinkTags && config.additionalLinkTags.length > 0) {
    config.additionalLinkTags.forEach((linkTag) => {
      const attributes = {
        rel: linkTag.rel,
        href: linkTag.href
      };
      if (linkTag.sizes) {
        attributes.sizes = linkTag.sizes;
      }
      if (linkTag.media) {
        attributes.media = linkTag.media;
      }
      if (linkTag.type) {
        attributes.type = linkTag.type;
      }
      if (linkTag.color) {
        attributes.color = linkTag.color;
      }
      if (linkTag.as) {
        attributes.as = linkTag.as;
      }
      if (linkTag.crossOrigin) {
        attributes.crossorigin = linkTag.crossOrigin;
      }
      addTag(createLinkTag(attributes));
    });
  }
  return tagsToRender.trim();
};

const $$Astro$4 = createAstro("https://majidqurashi.vercel.app/");
const $$AstroSeo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AstroSeo;
  const {
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(buildTags({
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  }))}` })}`;
}, "/home/majid-qurashi/Documents/code/projects/portfolio-apple/node_modules/@astrolib/seo/src/AstroSeo.astro", void 0);

const macBackground1 = new Proxy({"src":"/_astro/mac-background1.BN3pAP-K.jpg","width":6016,"height":3384,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/majid-qurashi/Documents/code/projects/portfolio-apple/src/assets/images/mac-background1.jpg";
							}
							
							return target[name];
						}
					});

const macBackground3 = new Proxy({"src":"/_astro/mac-background3.Ct4jh3Yv.jpg","width":2400,"height":1350,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/majid-qurashi/Documents/code/projects/portfolio-apple/src/assets/images/mac-background3.jpg";
							}
							
							return target[name];
						}
					});

const id$2 = "kgpwriter";
const title$2 = "KGP Writer – Collaborative Writing Platform";
const description$2 = "A web application that allows students to write, share, and comment on articles. Built using modern web technologies with a focus on user-friendly design and functionality.";
const repoUrl$2 = "https://github.com/yourusername/kgpwriter";
const liveUrl$1 = "https://kgpwriter.netlify.app";
const techStack$2 = ["React","Node.js","Express","MongoDB","JWT Authentication","CSS3","HTML5"];
const structure$2 = {"root":"kgp-writer","children":[{"name":"index.html","type":"file"},{"name":"public","type":"directory","children":[{"name":"favicon.ico","type":"file"},{"name":"manifest.json","type":"file"},{"name":"logo192.png","type":"file"},{"name":"logo512.png","type":"file"}]},{"name":"src","type":"directory","children":[{"name":"App.js","type":"file"},{"name":"index.js","type":"file"},{"name":"components","type":"directory","children":[{"name":"ArticleEditor.js","type":"file"},{"name":"ArticleList.js","type":"file"},{"name":"CommentSection.js","type":"file"},{"name":"Navbar.js","type":"file"}]},{"name":"styles","type":"directory","children":[{"name":"App.css","type":"file"}]}]},{"name":"server.js","type":"file"},{"name":"package.json","type":"file"},{"name":"README.md","type":"file"}]};
const images$2 = [];
const _comment$1 = "Structure reflects React app with frontend src, public assets, backend server.js and main files";
const kgpwriter = {
  id: id$2,
  title: title$2,
  description: description$2,
  repoUrl: repoUrl$2,
  liveUrl: liveUrl$1,
  techStack: techStack$2,
  structure: structure$2,
  images: images$2,
  _comment: _comment$1,
};

const id$1 = "CV-Builder";
const title$1 = "Majid Yaseen Qurashi – CV Builder";
const description$1 = "A personal CV and portfolio web application built using Astro, HTML, CSS, JavaScript, PHP, SQL and Bootstrap. Showcases education, projects, skills and contact information with a clean, responsive design deployed on Netlify.";
const repoUrl$1 = "https://cv-majid.netlify.app/";
const techStack$1 = ["Astro","HTML","CSS","JavaScript","PHP","SQL","Bootstrap","Figma","Photoshop","Git","Java","C","C++"];
const structure$1 = {"root":"cv-majid","children":[{"name":"index.html","type":"file"},{"name":"astro.config.mjs","type":"file"},{"name":"package.json","type":"file"},{"name":"public","type":"directory","children":[{"name":"favicon.ico","type":"file"},{"name":"resume.pdf","type":"file"},{"name":"images","type":"directory","children":[{"name":"profile.jpg","type":"file"},{"name":"skill-html.png","type":"file"},{"name":"skill-css.png","type":"file"}]}]},{"name":"src","type":"directory","children":[{"name":"pages","type":"directory","children":[{"name":"index.astro","type":"file"},{"name":"projects.astro","type":"file"},{"name":"skills.astro","type":"file"}]},{"name":"components","type":"directory","children":[{"name":"ProjectCard.astro","type":"file"},{"name":"SkillIcon.astro","type":"file"},{"name":"ContactForm.astro","type":"file"}]},{"name":"styles","type":"directory","children":[{"name":"global.css","type":"file"},{"name":"theme.css","type":"file"}]}]}]};
const images$1 = [];
const cvbuilder = {
  id: id$1,
  title: title$1,
  description: description$1,
  repoUrl: repoUrl$1,
  techStack: techStack$1,
  structure: structure$1,
  images: images$1,
};

const id = "portfolio";
const title = "Qurashi Studio – Professional Designer & Vlogger";
const description = "A personal portfolio showcasing logo & brand design, poster design, web design, motion graphics, video editing, 3D animation, and social media content. Built and deployed using web technologies.";
const repoUrl = "https://github.com/majid-qurashi/MajidYaseenQurashi";
const liveUrl = "https://qurashi.netlify.app";
const techStack = ["HTML","CSS","JavaScript","3D Design (e.g. Maya)","Adobe Photoshop","Adobe After Effects","Motion Graphic Tools","Video Editing Suites"];
const structure = {"root":"qurashi-studio","children":[{"name":"index.html","type":"file"},{"name":"css","type":"directory","children":[{"name":"styles.css","type":"file"}]},{"name":"js","type":"directory","children":[{"name":"scripts.js","type":"file"}]},{"name":"images","type":"directory","children":[{"name":"logo.jpg","type":"file"},{"name":"poster1.jpg","type":"file"},{"name":"portfolio-thumbnail.png","type":"file"}]},{"name":"about.html","type":"file"},{"name":"contact.html","type":"file"},{"name":"3d-design.html","type":"file"}]};
const images = [];
const _comment = "Structure reflects portfolio pages (home, about, contact, 3D design) and asset folders";
const portfolio = {
  id,
  title,
  description,
  repoUrl,
  liveUrl,
  techStack,
  structure,
  images,
  _comment,
};

const userConfig = {
  // Personal Information
  name: "Majid Qurashi",
  role: "Computer Science Engineer",
  location: "J&K India",
  website: "qurashi.vercel.app",
  roleFocus: "Web developer",
  age: 20,
  // Social Links
  social: {
    github: "https://github.com/majid-qurashi",
    linkedin: "https://www.linkedin.com/in/majidqurashi/"
    // Add your LinkedIn URL
  },
  // Contact Information
  contact: {
    email: "majidqurashi958@gmail.com",
    phone: "+919541****94",
    // Add your phone number
    calendly: "https://calendly.com/majidqurashi"
    // Add your Calendly URL
  },
  // Spotify Configuration
  spotify: {
    playlistId: "5WsS94KKm5wDhgEpg8VcgM"},
  // Resume Configuration
  resume: {
    url: "https://cv-majid.netlify.app/",
    localPath: "/resume.pdf"
  },
  // Education Background
  education: [
    {
      degree: "Bachelor of Technology Computer Science & Engineering",
      major: "Computer Science & Engineering",
      institution: "Government College of Engineering & Technology Safapora Kashmir",
      location: "Ganderbal J&K, India",
      year: "2023-Ongoing",
      description: "Relevant coursework: Data Structures, Algorithms, Database Management, Software Engineering, Artificial Intelligence, Computer Networks, Operating Systems, Computer Architecture, Computer Organization, Computer Security, Computer Graphics, Computer Systems, Computer Networks, Operating Systems, Computer Architecture, Computer Organization, Computer Security, Computer Graphics, Computer Systems",
      images: [
        {
          url: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqAarC7nJd3gDxjumhF24WwGtuxQzuOE1oBkqeZ7tjl6_nkLSRJZNNxNPN44c246HvJGuBlhSwXb_N74kNyYyhGMAM8SRlx-ja6O5udJt5D9LfQF7u2qsd0YDo5u48KB3oGWc9onQ=s1360-w1360-h1020",
          alt: "GCET Kashmir ",
          description: "GCET Kashmir Campus"
        }
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      major: "Computer Science",
      institution: "Kashmir Government Polytechnic College Srinagar",
      location: "Srinagar J&K, India",
      year: "2020-2023",
      description: "Relevant coursework: Data Structures, Algorithms, Database Management, Software Engineering, Artificial Intelligence, Computer Networks, Operating Systems, Computer Architecture, Computer Organization, Computer Security, Computer Graphics, Computer Systems, Computer Networks, Operating Systems, Computer Architecture, Computer Organization, Computer Security, Computer Graphics, Computer Systems",
      images: [
        {
          url: "https://kgpsrinagar.edu.in/uploads/gallery/media/S2.jpg",
          alt: "KGP Srinagar ",
          description: "KGP Srinagar Campus"
        }
      ]
    }
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
          alt: "PW Skills"
          // description: "ITI Campus"
        }
      ]
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
          alt: "NIELIT"
          // description: "DEPI Logo"
        }
      ]
    }
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
    "SQL Server"
  ],
  extraCurricularRoles: [
    {
      role: "Campus Ambessder",
      institution: "Academor",
      location: "Remote",
      year: "2023-2024",
      images: [
        {
          url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.academor.com%2F&psig=AOvVaw2ohxNwZStYG3886WAoruQ7&ust=1749703271575000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjXwYbH6I0DFQAAAAAdAAAAABAE",
          alt: "Academor"
          // description: "NUICPC Campus"
        }
      ]
    }
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
          description: "Iceless curling demo"
        }
      ]
    }
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
          description: "DPL Handwara"
        }
      ]
    }
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
          alt: "cognifyz"
          // description: "Luftborn Logo"
        }
      ]
    }
  ],
  // SEO Configuration
  seo: {
    title: "Majid Qurashi - Web Developer",
    description: "Software Developer based in Kashmir specializing in React, Next.js, and modern web technologies"},
  // Theme Configuration
  theme: {
    // Spotify green
    secondaryColor: "#1d1d1f"},
  // Projects Configuration
  projects: [
    kgpwriter,
    portfolio,
    cvbuilder
    // Add more projects here
  ]
};

const $$Astro$3 = createAstro("https://majidqurashi.vercel.app/");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const backgrounds = await Promise.all([
    getImage({ src: macBackground1, width: 3500 }),
    getImage({ src: macBackground3, width: 3500 }),
    getImage({ src: macBackground3, width: 3500 })
  ]);
  return renderTemplate`<!-- Core meta tags --><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><meta name="author"${addAttribute(userConfig.name, "content")}><!-- SEO Configuration -->${renderComponent($$result, "AstroSeo", $$AstroSeo, { "title": Astro2.props.title || userConfig.seo.title, "description": Astro2.props.description || userConfig.seo.description, "canonical": Astro2.props.canonical || userConfig.website, "openGraph": {
    url: Astro2.props.openGraph?.url || userConfig.website,
    title: Astro2.props.openGraph?.title || userConfig.seo.title,
    description: Astro2.props.openGraph?.description || userConfig.seo.description,
    images: [
      {
        url: ""
        // og image here
      }
    ],
    site_name: Astro2.props.openGraph?.site_name || userConfig.name
  } })}<!-- Add your favicon files in public/images/ --><link rel="apple-touch-icon" sizes="180x180" href="https://avatars.githubusercontent.com/u/97130221?s=400&u=aaa4eb0bf9d07b901f0b15df8540fefea2fca729&v=4"><link rel="icon" type="image/png" sizes="32x32" href="https://avatars.githubusercontent.com/u/97130221?s=400&u=aaa4eb0bf9d07b901f0b15df8540fefea2fca729&v=4"><link rel="icon" type="image/png" sizes="16x16" href="https://avatars.githubusercontent.com/u/97130221?s=400&u=aaa4eb0bf9d07b901f0b15df8540fefea2fca729&v=4"><!-- Theme colors for browsers --><meta name="msapplication-TileColor"${addAttribute(userConfig.theme.secondaryColor, "content")}><meta name="theme-color"${addAttribute(userConfig.theme.secondaryColor, "content")}><!-- Auto-generated sitemap --><link rel="sitemap" href="/sitemap-index.xml"><!-- Preload background images for performance -->${backgrounds.map((bg) => renderTemplate`<link rel="preload"${addAttribute(bg.src, "href")} as="image" type="image/webp" fetchpriority="high">`)}`;
}, "/home/majid-qurashi/Documents/code/projects/portfolio-apple/src/components/global/BaseHead.astro", void 0);

const $$Astro$2 = createAstro("https://majidqurashi.vercel.app/");
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/home/majid-qurashi/Documents/code/projects/portfolio-apple/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/majid-qurashi/Documents/code/projects/portfolio-apple/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro$1 = createAstro("https://majidqurashi.vercel.app/");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/home/majid-qurashi/Documents/code/projects/portfolio-apple/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/majid-qurashi/Documents/code/projects/portfolio-apple/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro = createAstro("https://majidqurashi.vercel.app/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" class="scroll-smooth selection:bg-gray-900 selection:text-white overflow-x-hidden"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": Astro2.props.title, "description": Astro2.props.description, "canonical": Astro2.props.canonical, "openGraph": Astro2.props.openGraph })}${renderComponent($$result, "Analytics", $$Index$2, {})}${renderComponent($$result, "SpeedInsights", $$Index$1, {})}${renderHead()}</head> <body class="overflow-x-hidden bg-gray-900"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/majid-qurashi/Documents/code/projects/portfolio-apple/src/layouts/Layout.astro", void 0);

function HelpModal({
  isOpen,
  onClose,
  onTerminalClick
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setActiveStep(0);
    }
  }, [isOpen]);
  const steps = [
    {
      title: "Welcome to My Portfolio!",
      content: "This is a macOS-inspired portfolio with interactive features. Let me show you around!",
      animation: "animate-fade-in",
      button: null
    },
    {
      title: "The Terminal",
      content: "The MacTerminal is your AI-powered assistant. Ask it anything about me, my skills, or my experience!",
      animation: "animate-slide-in-right",
      button: {
        text: "Open Terminal",
        icon: /* @__PURE__ */ jsx(RiTerminalFill, { size: 20 }),
        onClick: () => {
          if (onTerminalClick) {
            onTerminalClick();
            handleClose();
          }
        }
      }
    },
    {
      title: "Desktop Dock",
      content: "The dock at the bottom contains all the main features of my portfolio. Each icon represents a different section:",
      animation: "animate-slide-in-left",
      button: null,
      features: [
        { icon: /* @__PURE__ */ jsx(BsGithub, { size: 20 }), text: "GitHub Projects" },
        { icon: /* @__PURE__ */ jsx(BsStickyFill, { size: 20 }), text: "Resume Notes" },
        { icon: /* @__PURE__ */ jsx(BsFilePdf, { size: 20 }), text: "Resume Viewer" },
        { icon: /* @__PURE__ */ jsx(BsCalendar, { size: 20 }), text: "Schedule a Call" },
        { icon: /* @__PURE__ */ jsx(BsSpotify, { size: 20 }), text: "Spotify Playlist" },
        { icon: /* @__PURE__ */ jsx(FaLink, { size: 20 }), text: "Contact Links" },
        { icon: /* @__PURE__ */ jsx(RiTerminalFill, { size: 20 }), text: "Terminal" }
      ]
    },
    {
      title: "Menu Bar",
      content: "Use the menu bar to access my resume, projects, and contact information. Hover over my name for a cool surprise!",
      animation: "animate-slide-in-up",
      button: null
    }
  ];
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      handleClose();
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
        style: { opacity: isVisible ? 1 : 0 },
        onClick: handleClose
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `relative bg-gray-900/95 rounded-lg p-6 max-w-md w-full mx-4 transform transition-all duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`,
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleClose,
              className: "absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",
              children: /* @__PURE__ */ jsx(IoClose, { size: 24 })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: `${steps[activeStep].animation} mb-4`, children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-2", children: steps[activeStep].title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: steps[activeStep].content }),
            steps[activeStep].features && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 mt-4", children: steps[activeStep].features.map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-300", children: [
              /* @__PURE__ */ jsx("div", { className: "text-white", children: feature.icon }),
              /* @__PURE__ */ jsx("span", { children: feature.text })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex space-x-2", children: steps.map((_, index) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setActiveStep(index),
                className: `w-2 h-2 rounded-full transition-colors ${index === activeStep ? "bg-white" : "bg-gray-600"}`
              },
              index
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              steps[activeStep].button && /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: steps[activeStep].button?.onClick,
                  className: "px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors flex items-center gap-2",
                  children: [
                    steps[activeStep].button?.icon,
                    steps[activeStep].button?.text
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleNext,
                  className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",
                  children: activeStep === steps.length - 1 ? "Got it!" : "Next"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}

function MacToolbar({
  onTerminalClick,
  onShowTutorial
}) {
  const [currentDateTime, setCurrentDateTime] = useState(/* @__PURE__ */ new Date());
  const [activeMenu, setActiveMenu] = useState(null);
  const [showSignature, setShowSignature] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(/* @__PURE__ */ new Date());
    }, 6e4);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const formatMacDate = (date) => {
    const weekday = date.toLocaleString("en-US", { weekday: "short" });
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const hour = date.toLocaleString("en-US", {
      hour: "numeric",
      hour12: true
    });
    const minute = date.getMinutes().toString().padStart(2, "0");
    const period = date.getHours() >= 12 ? "PM" : "AM";
    return `${weekday} ${month} ${day} ${hour.replace(
      /\s?[AP]M/,
      ""
    )}:${minute} ${period}`;
  };
  const formatIPhoneTime = (date) => {
    let hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, "0");
    hour = hour % 12;
    hour = hour ? hour : 12;
    return `${hour}:${minute}`;
  };
  const handleVSCodeClick = () => {
    window.location.href = "vscode:/";
  };
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };
  const handleAction = (action) => {
    if (action) {
      action();
      setActiveMenu(null);
    }
  };
  const menus = {
    File: [
      {
        label: "Resume",
        icon: /* @__PURE__ */ jsx(IoDocumentText, { size: 16 }),
        action: () => window.open(userConfig.resume.url, "_blank")
      },
      {
        label: "Projects",
        icon: /* @__PURE__ */ jsx(IoCodeSlash, { size: 16 }),
        action: () => window.open(userConfig.social.github, "_blank")
      }
    ],
    Edit: [
      {
        label: "Copy Email",
        icon: /* @__PURE__ */ jsx(IoMail, { size: 16 }),
        action: () => {
          navigator.clipboard.writeText(userConfig.contact.email);
          alert("Email copied to clipboard!");
        }
      },
      {
        label: "Copy Phone",
        icon: /* @__PURE__ */ jsx(IoCall, { size: 16 }),
        action: () => {
          navigator.clipboard.writeText(userConfig.contact.phone);
          alert("Phone number copied to clipboard!");
        }
      }
    ],
    Go: [
      {
        label: "GitHub",
        icon: /* @__PURE__ */ jsx(FaGithub, { size: 16 }),
        action: () => window.open(userConfig.social.github, "_blank")
      },
      {
        label: "LinkedIn",
        icon: /* @__PURE__ */ jsx(FaLinkedin, { size: 16 }),
        action: () => window.open(userConfig.social.linkedin, "_blank")
      },
      {
        label: "Email",
        icon: /* @__PURE__ */ jsx(FaEnvelope, { size: 16 }),
        action: () => window.open(`mailto:${userConfig.contact.email}`)
      }
    ],
    Help: [
      {
        label: "Show Help",
        icon: /* @__PURE__ */ jsx(IoHelpCircle, { size: 16 }),
        action: () => setShowHelp(true)
      },
      {
        label: "Show Tutorial",
        icon: /* @__PURE__ */ jsx(IoHelpCircle, { size: 16 }),
        action: () => onShowTutorial?.()
      }
    ]
  };
  const renderMenu = (menuItems) => /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 mt-1 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl py-1 min-w-[200px]", children: menuItems.map((item, index) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => handleAction(item.action),
        className: "w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-700/50 flex items-center gap-2",
        children: [
          item.icon,
          item.label
        ]
      }
    ),
    item.submenu && /* @__PURE__ */ jsx("div", { className: "absolute left-full top-0 ml-1 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl py-1 min-w-[200px]", children: item.submenu.map((subItem, subIndex) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => handleAction(subItem.action),
        className: "w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-700/50 flex items-center gap-2",
        children: [
          subItem.icon,
          subItem.label
        ]
      },
      subIndex
    )) })
  ] }, index)) });
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      HelpModal,
      {
        isOpen: showHelp,
        onClose: () => setShowHelp(false),
        onTerminalClick
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-50 md:hidden bg-transparent text-white h-12 px-8 flex items-center justify-between text-base font-medium", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: formatIPhoneTime(currentDateTime) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx(IoCellular, { size: 20 }),
        /* @__PURE__ */ jsx(MdWifi, { size: 20 }),
        /* @__PURE__ */ jsx(IoBatteryHalfOutline, { size: 24 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-50 hidden md:flex bg-black/20 backdrop-blur-md text-white h-6 px-4 items-center justify-between text-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", ref: menuRef, children: [
        /* @__PURE__ */ jsx(FaApple, { size: 16 }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-semibold hover:text-gray-300 transition-colors cursor-pointer",
              onMouseEnter: () => setShowSignature(true),
              onMouseLeave: () => setShowSignature(false),
              children: userConfig.name
            }
          ),
          showSignature && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 mt-1 bg-white/98 backdrop-blur-sm rounded-lg p-4 shadow-xl z-[100]", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/src/assets/images/me.svg",
              alt: "Signature",
              className: "w-[100px] h-[100px]"
            }
          ) })
        ] }),
        Object.entries(menus).map(([menu, items]) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "cursor-pointer hover:text-gray-300 transition-colors",
              onClick: () => handleMenuClick(menu),
              children: menu
            }
          ),
          activeMenu === menu && renderMenu(items)
        ] }, menu))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx(
          VscVscode,
          {
            size: 16,
            className: "cursor-pointer hover:opacity-80 transition-opacity",
            onClick: handleVSCodeClick,
            title: "Open in VSCode"
          }
        ),
        /* @__PURE__ */ jsx(MdWifi, { size: 16 }),
        /* @__PURE__ */ jsx(IoSearchSharp, { size: 16 }),
        /* @__PURE__ */ jsx("span", { className: "cursor-default", children: formatMacDate(currentDateTime) })
      ] })
    ] })
  ] });
}

let globalZIndex = 10;
const MIN_WIDTH = 400;
const MIN_HEIGHT = 300;
function DraggableWindow({
  title,
  onClose,
  children,
  initialPosition = { x: 0, y: 0 },
  initialSize = { width: 400, height: 300 },
  className = ""
}) {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [zIndex, setZIndex] = useState(globalZIndex);
  const [isMobile, setIsMobile] = useState(false);
  const windowRef = useRef(null);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const bringToFront = () => {
    globalZIndex += 1;
    setZIndex(globalZIndex);
  };
  const handleMouseDown = (e) => {
    if (isMobile) return;
    if (e.target instanceof HTMLElement) {
      bringToFront();
      if (e.target.closest(".window-header")) {
        setIsDragging(true);
        const rect = windowRef.current?.getBoundingClientRect();
        if (rect) {
          setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }
        e.preventDefault();
      } else if (e.target.closest(".resize-handle")) {
        setIsResizing(true);
        setResizeDirection(e.target.getAttribute("data-direction"));
        e.preventDefault();
      }
    }
  };
  const handleMouseMove = (e) => {
    if (isMobile) return;
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      const windowWidth = windowRef.current?.offsetWidth || 0;
      const windowHeight = windowRef.current?.offsetHeight || 0;
      const maxX = window.innerWidth - windowWidth / 2;
      const maxY = window.innerHeight - windowHeight / 2;
      const minX = -windowWidth / 2;
      const minY = 24;
      setPosition({
        x: Math.max(minX, Math.min(newX, maxX)),
        y: Math.max(minY, Math.min(newY, maxY))
      });
    } else if (isResizing) {
      const rect = windowRef.current?.getBoundingClientRect();
      if (rect) {
        const newSize = { ...size };
        const newPosition = { ...position };
        if (resizeDirection?.includes("right")) {
          newSize.width = Math.max(MIN_WIDTH, e.clientX - rect.left);
        }
        if (resizeDirection?.includes("left")) {
          const newWidth = Math.max(MIN_WIDTH, rect.right - e.clientX);
          newSize.width = newWidth;
          newPosition.x = rect.right - newWidth;
        }
        if (resizeDirection?.includes("bottom")) {
          newSize.height = Math.max(MIN_HEIGHT, e.clientY - rect.top);
        }
        if (resizeDirection?.includes("bottom-left")) {
          const newWidth = Math.max(MIN_WIDTH, rect.right - e.clientX);
          newSize.width = newWidth;
          newPosition.x = rect.right - newWidth;
          newSize.height = Math.max(MIN_HEIGHT, e.clientY - rect.top);
        }
        setSize(newSize);
        setPosition(newPosition);
      }
    }
  };
  const handleMouseUp = () => {
    if (isMobile) return;
    setIsDragging(false);
    setIsResizing(false);
    setResizeDirection(null);
  };
  useEffect(() => {
    bringToFront();
    if (isMobile) return;
    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "none";
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "";
    };
  }, [isDragging, isResizing, resizeDirection, dragOffset, isMobile]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: windowRef,
      className: `${isMobile ? "fixed inset-0 m-4 rounded-xl" : "absolute rounded-xl"} bg-[#1d1d1f] shadow-xl overflow-hidden p-0 transition-all duration-300 ${isDragging ? "cursor-grabbing" : "cursor-default"} ${className}`,
      style: {
        ...isMobile ? {} : {
          left: position.x,
          top: position.y,
          width: size.width,
          height: size.height
        },
        zIndex,
        transition: isDragging || isResizing ? "none" : "all 0.2s ease-out"
      },
      onMouseDown: handleMouseDown,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "window-header bg-gray-800 h-6 flex items-center space-x-2 px-4 rounded-t-xl sticky top-0 left-0 right-0 z-10", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500" }),
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-300 flex-grow text-center font-semibold", children: title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative h-[calc(100%-1.5rem)]", children: [
          children,
          !isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "resize-handle absolute bottom-0 left-0 right-0 h-2 cursor-ns-resize",
                "data-direction": "bottom"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "resize-handle absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize",
                "data-direction": "right"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "resize-handle absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize",
                "data-direction": "left"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "resize-handle absolute bottom-0 right-0 w-3 h-3 cursor-nwse-resize",
                "data-direction": "bottom-right"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "resize-handle absolute bottom-0 left-0 w-3 h-3 cursor-nesw-resize",
                "data-direction": "bottom-left"
              }
            )
          ] })
        ] })
      ]
    }
  );
}

const PLACEHOLDER_MESSAGES = [
  "Type your question...",
  "What are your skills?",
  "Where are you located?",
  "What projects have you worked on?"
];
function MacTerminal({ isOpen, onClose }) {
  const [chatHistory, setChatHistory] = useState({
    messages: [],
    input: ""
  });
  const [isTyping, setIsTyping] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    let timeout;
    const currentMessage = PLACEHOLDER_MESSAGES[currentPlaceholderIndex];
    const animatePlaceholder = () => {
      if (isDeleting) {
        if (placeholder.length === 0) {
          setIsDeleting(false);
          setCurrentPlaceholderIndex(
            (prev) => (prev + 1) % PLACEHOLDER_MESSAGES.length
          );
          timeout = setTimeout(animatePlaceholder, 400);
        } else {
          setPlaceholder((prev) => prev.slice(0, -1));
          timeout = setTimeout(animatePlaceholder, 80);
        }
      } else {
        if (placeholder.length === currentMessage.length) {
          timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setPlaceholder(currentMessage.slice(0, placeholder.length + 1));
          timeout = setTimeout(animatePlaceholder, 120);
        }
      }
    };
    timeout = setTimeout(animatePlaceholder, 100);
    return () => clearTimeout(timeout);
  }, [placeholder, isDeleting, currentPlaceholderIndex]);
  const welcomeMessage = `Welcome to My Portfolio

Name: ${userConfig.name}
Role: ${userConfig.role}
Location: ${userConfig.location}

Contact: ${userConfig.contact.email}
GitHub: ${userConfig.social.github}

Ask me anything!
`;
  const currentDate = /* @__PURE__ */ new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const systemPrompt = `IMPORTANT: You ARE ${userConfig.name} themselves. You must always speak in first-person ("I", "my", "me"). Never refer to "${userConfig.name}" in third-person.
CURRENT DATE: ${formattedDate} - Always use this exact date when discussing the current date/year.

Example responses:
Q: "Where do you live?"
A: "I live in ${userConfig.location}"

Q: "What's your background?"
A: "I'm a ${userConfig.role} with a focus for ${userConfig.roleFocus}"

Q: "How old are you?"
A: "I'm ${userConfig.age} years old"

Core details about me:
- I'm ${userConfig.age} years old
- I live in ${userConfig.location}
- I'm a ${userConfig.role}
- My email is ${userConfig.contact.email}
- I was born in ${userConfig.location}

My technical expertise:
${userConfig.skills.map((skill) => `- ${skill}`).join("\n")}

My education:
- ${JSON.stringify(userConfig.education)}

My professional experience:
${userConfig.experience.map(
    (exp) => `- ${exp.title} at ${exp.company}, ${exp.location} (${exp.period})`
  ).join("\n")}

My projects:
${userConfig.projects.map((project) => `- ${project.title}: ${project.description}`).join("\n")}

My achievements and competitions:
${userConfig.competitions.map((comp) => `- ${comp.title} (${comp.year}): ${comp.achievement}`).join("\n")}

Response rules:
1. ALWAYS use first-person (I, me, my)
2. Never say "${userConfig.name}" or refer to myself in third-person
3. Keep responses concise and professional
4. Use markdown formatting when appropriate
5. Maintain a friendly, conversational tone

If a question is unrelated to my work or portfolio, say: "That's outside my area of expertise. Feel free to email me at ${userConfig.contact.email} and we can discuss further!"`;
  useEffect(() => {
    setChatHistory((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        { role: "assistant", content: welcomeMessage }
      ]
    }));
  }, []);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory.messages]);
  const handleInputChange = (e) => {
    setChatHistory((prev) => ({ ...prev, input: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInput = chatHistory.input.trim();
    if (!userInput) return;
    setChatHistory((prev) => ({
      messages: [...prev.messages, { role: "user", content: userInput }],
      input: ""
    }));
    setIsTyping(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: systemPrompt },
            ...chatHistory.messages,
            { role: "user", content: userInput }
          ]
        })
      });
      if (!response.ok) throw new Error("Failed to get response");
      const data = await response.json();
      setChatHistory((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          { role: "assistant", content: data.message }
        ]
      }));
    } catch (error) {
      setChatHistory((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            role: "assistant",
            content: `I'm having trouble processing that. Please email me at ${userConfig.contact.email}`
          }
        ]
      }));
    } finally {
      setIsTyping(false);
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: `${userConfig.website} ⸺ zsh`,
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.1),
        y: Math.floor(window.innerHeight * 0.1)
      },
      initialSize: { width: 700, height: 500 },
      className: "bg-black/90 backdrop-blur-sm",
      children: /* @__PURE__ */ jsxs("div", { className: "p-1 text-gray-200 font-mono text-sm h-full flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto rounded-lg p-1", children: [
          chatHistory.messages.map((msg, index) => /* @__PURE__ */ jsx("div", { className: "mb-2", children: msg.role === "user" ? /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-400 font-bold", children: ">" }),
            /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap", children: msg.content })
          ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-green-400 font-bold", children: [
              "$",
              userConfig.website
            ] }),
            /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap", children: msg.content })
          ] }) }, index)),
          isTyping && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-2 h-2 bg-green-400 rounded-full animate-bounce",
                style: { animationDelay: "0ms" }
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-2 h-2 bg-green-400 rounded-full animate-bounce",
                style: { animationDelay: "150ms" }
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-2 h-2 bg-green-400 rounded-full animate-bounce",
                style: { animationDelay: "300ms" }
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { ref: messagesEndRef })
        ] }),
        /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, className: "mt-2 rounded-lg p-2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "whitespace-nowrap text-green-400 font-bold", children: [
            userConfig.website,
            " root %"
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: chatHistory.input,
              onChange: handleInputChange,
              className: "w-full sm:flex-1 bg-transparent outline-none text-white placeholder-gray-400",
              placeholder
            }
          )
        ] }) })
      ] })
    }
  );
}

function MobileDock({ onGitHubClick, onNotesClick, onResumeClick, onTerminalClick }) {
  const handleEmailClick = () => {
    window.location.href = `mailto:${userConfig.contact.email}`;
  };
  const handleSpotifyClick = () => {
    window.open(`https://open.spotify.com/playlist/${userConfig.spotify.playlistId}`, "_blank");
  };
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-0 left-0 right-0 md:hidden flex flex-col items-center z-10 space-y-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-4 mb-4 p-3 rounded-3xl space-x-4 flex justify-around items-center max-w-[400px] mx-auto", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onGitHubClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-black rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsGithub, { size: 55, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onNotesClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsStickyFill, { size: 55, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onResumeClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-red-600 to-red-400 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsFilePdf, { size: 55, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onTerminalClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-black rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(RiTerminalFill, { size: 55, className: "text-white" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-4 mb-4 p-3 bg-gradient-to-t from-gray-700 to-gray-800 backdrop-blur-xl rounded-3xl space-x-4 flex justify-around items-center max-w-[400px] mx-auto", children: [
      /* @__PURE__ */ jsx("a", { href: `tel:${userConfig.contact.phone}`, className: "flex flex-col items-center", children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-green-600 to-green-400 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(IoIosCall, { size: 55, className: "text-white" }) }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleEmailClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(IoIosMail, { size: 55, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx("a", { href: userConfig.social.linkedin, className: "flex flex-col items-center", children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-[#0a66c2] rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsLinkedin, { size: 50, className: "text-white" }) }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleSpotifyClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-black to-black/55 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsSpotify, { size: 55, className: "text-[#1ED760]" }) })
        }
      )
    ] })
  ] });
}

function ResumeViewer({ isOpen, onClose }) {
  useRef(null);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: "Resume.pdf",
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.4),
        y: Math.floor(window.innerHeight * 0.2)
      },
      className: "w-[90%] h-[90%] max-w-5xl",
      initialSize: { width: 800, height: 600 },
      children: /* @__PURE__ */ jsx("div", { className: "h-full bg-white", children: /* @__PURE__ */ jsx("figure", { className: "h-full", children: /* @__PURE__ */ jsx("object", { data: userConfig.resume.localPath, type: "application/pdf", width: "100%", className: "h-full" }) }) })
    }
  );
}

function SpotifyPlayer({ isOpen, onClose, playlistId }) {
  const [isMinimized, setIsMinimized] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: "Spotify Player",
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.1),
        y: Math.floor(window.innerHeight * 0.2)
      },
      className: `w-[90%] max-w-md transition-all duration-300 ${isMinimized ? "h-16" : "h-[300px]"}`,
      initialSize: { width: 800, height: 600 },
      children: /* @__PURE__ */ jsx("div", { className: `h-full transition-all duration-300 ${isMinimized ? "hidden" : "block"}`, children: /* @__PURE__ */ jsx(
        "iframe",
        {
          src: `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`,
          width: "100%",
          height: "100%",
          allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
          loading: "lazy",
          className: "border-0"
        }
      ) })
    }
  );
}

const DesktopDock = ({ onTerminalClick, onNotesClick, onGitHubClick, activeApps }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [showResume, setShowResume] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);
  const [showLinksPopup, setShowLinksPopup] = useState(false);
  const linksPopupRef = useRef(null);
  const handleLinksClick = () => {
    setShowLinksPopup(!showLinksPopup);
  };
  const handleCalendarClick = () => {
    window.open(userConfig.contact.calendly, "_blank");
  };
  const handleSpotifyClick = () => {
    setShowSpotify(true);
  };
  const handleResumeClick = () => {
    setShowResume(true);
  };
  const handleCloseResume = () => {
    setShowResume(false);
  };
  const handleCloseSpotify = () => {
    setShowSpotify(false);
  };
  const handleEmailClick = () => {
    window.open(`mailto:${userConfig.contact.email}`, "_blank");
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (linksPopupRef.current && !linksPopupRef.current.contains(event.target)) {
        setShowLinksPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const Tooltip = ({ text }) => /* @__PURE__ */ jsx("div", { className: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap", children: text });
  const LinksPopup = () => /* @__PURE__ */ jsx(
    "div",
    {
      ref: linksPopupRef,
      className: "absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800/90 w-30 backdrop-blur-sm rounded-lg p-4 shadow-xl",
      children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-y-2", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: userConfig.social.linkedin,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 text-gray-300 hover:text-white",
            children: [
              /* @__PURE__ */ jsx(BsLinkedin, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "LinkedIn" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: userConfig.social.github,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 text-gray-300 hover:text-white",
            children: [
              /* @__PURE__ */ jsx(BsGithub, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "GitHub" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `mailto:${userConfig.contact.email}`,
            className: "flex items-center gap-2 text-gray-300 hover:text-white",
            children: [
              /* @__PURE__ */ jsx(IoIosMail, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Email" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `tel:${userConfig.contact.phone}`,
            className: "flex items-center gap-2 text-gray-300 hover:text-white",
            children: [
              /* @__PURE__ */ jsx(IoIosCall, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Call" })
            ]
          }
        )
      ] })
    }
  );
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 hidden md:flex justify-center pb-4 z-100", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-600/50 backdrop-blur-sm rounded-2xl p-2 shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onGitHubClick,
          onMouseEnter: () => setHoveredIcon("github"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative group",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-black to-black/60 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.github ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(BsGithub, { size: 35, className: "text-gray-100" }) }),
            hoveredIcon === "github" && /* @__PURE__ */ jsx(Tooltip, { text: "My Projects" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onNotesClick,
          onMouseEnter: () => setHoveredIcon("notes"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative group",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.notes ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(BsStickyFill, { size: 35, className: "text-white" }) }),
            hoveredIcon === "notes" && /* @__PURE__ */ jsx(Tooltip, { text: "Resume Notes" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleResumeClick,
          onMouseEnter: () => setHoveredIcon("resume"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative group",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-red-600 to-red-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.resume ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(BsFilePdf, { size: 35, className: "text-white" }) }),
            hoveredIcon === "resume" && /* @__PURE__ */ jsx(Tooltip, { text: "View Resume" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleCalendarClick,
          onMouseEnter: () => setHoveredIcon("calendar"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-t from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95", children: /* @__PURE__ */ jsx(BsCalendar, { size: 30, className: "text-white" }) }),
            hoveredIcon === "calendar" && /* @__PURE__ */ jsx(Tooltip, { text: "Schedule a Call" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleSpotifyClick,
          onMouseEnter: () => setHoveredIcon("spotify"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-green-600 to-green-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.spotify ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(BsSpotify, { size: 35, className: "text-white" }) }),
            hoveredIcon === "spotify" && /* @__PURE__ */ jsx(Tooltip, { text: "Spotify Playlist" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleEmailClick,
          onMouseEnter: () => setHoveredIcon("email"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-t from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95", children: /* @__PURE__ */ jsx(IoIosMail, { size: 40, className: "text-white" }) }),
            hoveredIcon === "email" && /* @__PURE__ */ jsx(Tooltip, { text: "Email" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleLinksClick,
          onMouseEnter: () => setHoveredIcon("links"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-t from-purple-600 to-purple-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95", children: /* @__PURE__ */ jsx(FaLink, { size: 30, className: "text-white" }) }),
            hoveredIcon === "links" && /* @__PURE__ */ jsx(Tooltip, { text: "Contact Links" }),
            showLinksPopup && /* @__PURE__ */ jsx(LinksPopup, {})
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onTerminalClick,
          onMouseEnter: () => setHoveredIcon("terminal"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-black to-black/60 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.terminal ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(RiTerminalFill, { size: 35, className: "text-white" }) }),
            hoveredIcon === "terminal" && /* @__PURE__ */ jsx(Tooltip, { text: "Terminal" })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx(ResumeViewer, { isOpen: showResume, onClose: handleCloseResume }),
    /* @__PURE__ */ jsx(
      SpotifyPlayer,
      {
        isOpen: showSpotify,
        onClose: handleCloseSpotify,
        playlistId: userConfig.spotify.playlistId
      }
    )
  ] });
};

const NotesApp = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState("menu");
  const [activeImageIndices, setActiveImageIndices] = useState({});
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const handleBackClick = () => {
    setActiveSection("menu");
  };
  const handleNextImage = (itemId, images) => {
    setActiveImageIndices((prevIndices) => ({
      ...prevIndices,
      [itemId]: ((prevIndices[itemId] ?? -1) + 1) % images.length
    }));
  };
  const handlePrevImage = (itemId, images) => {
    setActiveImageIndices((prevIndices) => ({
      ...prevIndices,
      [itemId]: ((prevIndices[itemId] ?? 0) - 1 + images.length) % images.length
    }));
  };
  if (!isOpen) return null;
  const education = userConfig.education || [];
  const experience = userConfig.experience || [];
  const courses = userConfig.courses || [];
  const skills = userConfig.skills || [];
  const roles = userConfig.extraCurricularRoles || [];
  const activities = userConfig.extraCurricularActivities || [];
  const competitions = userConfig.competitions || [];
  const renderBackButton = () => /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: handleBackClick,
      className: "flex items-center gap-2 text-gray-300 hover:text-gray-100 mb-4",
      children: [
        /* @__PURE__ */ jsx(FaChevronLeft, {}),
        /* @__PURE__ */ jsx("span", { children: "Back to Menu" })
      ]
    }
  );
  const renderImageCarousel = (itemId, images) => {
    const currentIndex = activeImageIndices[itemId] ?? 0;
    if (!images || images.length === 0 || currentIndex >= images.length) {
      return null;
    }
    return /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden mb-2", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: images[currentIndex].url,
          alt: images[currentIndex].alt,
          className: "w-full h-48 object-contain bg-gray-900 rounded-lg"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400 mb-3", children: images[currentIndex].description }),
      images.length > 1 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handlePrevImage(itemId, images),
            className: "bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center",
            children: "←"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
          currentIndex + 1,
          " / ",
          images.length
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleNextImage(itemId, images),
            className: "bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center",
            children: "→"
          }
        )
      ] })
    ] });
  };
  const renderEducation = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Education" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: education.map((item, index) => {
      const itemId = `education-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: [
          item.degree,
          " ",
          item.major && `- ${item.major}`
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.institution,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.year }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: item.description }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderExperience = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Professional Experience" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: experience.map((item, index) => {
      const itemId = `experience-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.company,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.period }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: item.description }),
        item.technologies && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: item.technologies.map((tech, i) => /* @__PURE__ */ jsx("span", { className: "px-2 py-1 bg-gray-700 rounded text-xs text-gray-300", children: tech }, i)) }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderCourses = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Courses" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: courses.map((item, index) => {
      const itemId = `courses-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.institution,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.year }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: item.description }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderSkills = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Skills" }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: skills.map((skill, index) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-gray-700 rounded text-sm text-gray-300", children: skill }, index)) }) })
  ] });
  const renderExtraCurricularRoles = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Extracurricular Roles" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: roles.map((item, index) => {
      const itemId = `roles-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.role }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.institution,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.year }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderExtraCurricularActivities = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Extracurricular Activities" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: activities.map((item, index) => {
      const itemId = `activities-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.institution,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.year }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderCompetitions = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Competitions" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: competitions.map((item, index) => {
      const itemId = `competitions-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.title }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-300 mb-2", children: item.description }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-400 mb-3", children: [
          "Achievement: ",
          item.achievement,
          " (",
          item.year,
          ")"
        ] }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderMenu = () => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "My Notes" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("competitions"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaTrophy, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Competitions" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "View my competition history and achievements" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("education"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaGraduationCap, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Education" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "View my educational background and qualifications" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("experience"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaBriefcase, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Professional Experience" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Explore my professional work experience" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("roles"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaUsers, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Extracurricular Roles" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "My involvement in student activities and roles" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("activities"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaPalette, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Extracurricular Activities" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "My participation in events and activities" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("courses"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaBookOpen, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Courses" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Check out courses I have completed" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("skills"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaCode, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Skills" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "See my technical skills and expertise" })
          ]
        }
      )
    ] })
  ] });
  const getWindowTitle = () => {
    switch (activeSection) {
      case "menu":
        return "Notes";
      case "education":
        return "Education Notes";
      case "experience":
        return "Experience Notes";
      case "courses":
        return "Courses Notes";
      case "skills":
        return "Skills Notes";
      case "roles":
        return "Extracurricular Roles Notes";
      case "activities":
        return "Extracurricular Activities Notes";
      case "competitions":
        return "Competitions Notes";
      default:
        return "Notes";
    }
  };
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: getWindowTitle(),
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.3),
        y: Math.floor(window.innerHeight * 0.2)
      },
      className: "w-[93vw] md:max-w-4xl max-h-[90vh] flex flex-col",
      initialSize: { width: 700, height: 600 },
      children: /* @__PURE__ */ jsx("div", { className: "flex flex-col flex-grow min-h-0 h-full", children: /* @__PURE__ */ jsxs("div", { className: "overflow-y-auto flex-grow min-h-0 p-4 md:p-6", children: [
        activeSection === "menu" && renderMenu(),
        activeSection === "education" && renderEducation(),
        activeSection === "experience" && renderExperience(),
        activeSection === "courses" && renderCourses(),
        activeSection === "skills" && renderSkills(),
        activeSection === "roles" && renderExtraCurricularRoles(),
        activeSection === "activities" && renderExtraCurricularActivities(),
        activeSection === "competitions" && renderCompetitions()
      ] }) })
    }
  );
};

const GitHubViewer = ({ isOpen, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedNodes, setExpandedNodes] = useState(/* @__PURE__ */ new Set());
  const [showStructure, setShowStructure] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const toggleNode = (path) => {
    const newExpandedNodes = new Set(expandedNodes);
    if (newExpandedNodes.has(path)) {
      newExpandedNodes.delete(path);
    } else {
      newExpandedNodes.add(path);
    }
    setExpandedNodes(newExpandedNodes);
  };
  const renderFileTree = (node, path = "") => {
    const currentPath = path ? `${path}/${node.name}` : node.name;
    const isExpanded = expandedNodes.has(currentPath);
    return /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center cursor-pointer hover:bg-gray-700/50 p-1 rounded",
          onClick: () => node.type === "directory" && toggleNode(currentPath),
          children: [
            node.type === "directory" ? /* @__PURE__ */ jsx(FaFolder, { className: "text-yellow-500 mr-2" }) : /* @__PURE__ */ jsx(FaFile, { className: "text-blue-400 mr-2" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-200", children: node.name })
          ]
        }
      ),
      node.type === "directory" && isExpanded && node.children && /* @__PURE__ */ jsx("div", { className: "ml-4", children: node.children.map((child) => renderFileTree(child, currentPath)) })
    ] }, currentPath);
  };
  const renderProjectStructure = (projectStructure) => {
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center p-1 rounded", children: [
        /* @__PURE__ */ jsx(FaFolder, { className: "text-yellow-500 mr-2" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-200 font-bold", children: projectStructure.root })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "ml-4", children: projectStructure.children.map((child) => renderFileTree(child, projectStructure.root)) })
    ] });
  };
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowStructure(true);
    setActiveImageIndex(0);
  };
  const handleBackClick = () => {
    setShowStructure(false);
    setSelectedProject(null);
  };
  const handleNextImage = () => {
    if (selectedProject) {
      setActiveImageIndex(
        (prevIndex) => prevIndex + 1 >= selectedProject.images.length ? 0 : prevIndex + 1
      );
    }
  };
  const handlePrevImage = () => {
    if (selectedProject) {
      setActiveImageIndex(
        (prevIndex) => prevIndex - 1 < 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: showStructure ? selectedProject?.title || "GitHub Projects" : "GitHub Projects",
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.2),
        y: Math.floor(window.innerHeight * 0.2)
      },
      className: "w-[93vw] md:max-w-4xl max-h-[90vh] flex flex-col",
      initialSize: { width: 800, height: 600 },
      children: /* @__PURE__ */ jsx("div", { className: "flex flex-col flex-grow min-h-0 h-full", children: /* @__PURE__ */ jsx("div", { className: "overflow-y-auto flex-grow min-h-0 p-4 md:p-6", children: !showStructure ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-200", children: "My Projects" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: userConfig.projects.map((project) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-700/50",
            onClick: () => handleProjectClick(project),
            children: [
              project.images && project.images.length > 0 && /* @__PURE__ */ jsx("div", { className: "w-full h-48 mb-3 overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: project.images[0].url,
                  alt: project.images[0].alt,
                  className: "w-full h-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 text-gray-200", children: project.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-2", children: project.description }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-2", children: project.techStack.map((tech) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "px-2 py-1 bg-gray-700 rounded text-xs text-gray-300",
                  children: tech
                },
                tech
              )) }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: project.repoUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300",
                    onClick: (e) => e.stopPropagation(),
                    children: [
                      /* @__PURE__ */ jsx(FaGithub, {}),
                      /* @__PURE__ */ jsx("span", { children: "Repository" })
                    ]
                  }
                ),
                project.liveUrl && /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: project.liveUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300",
                    onClick: (e) => e.stopPropagation(),
                    children: [
                      /* @__PURE__ */ jsx(FaExternalLinkAlt, {}),
                      /* @__PURE__ */ jsx("span", { children: "Live Demo" })
                    ]
                  }
                )
              ] })
            ]
          },
          project.id
        )) })
      ] }) : /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleBackClick,
            className: "flex items-center gap-2 text-gray-300 hover:text-gray-100 mb-4",
            children: [
              /* @__PURE__ */ jsx(FaChevronLeft, {}),
              /* @__PURE__ */ jsx("span", { children: "Back to Projects" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 rounded-lg p-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-gray-200", children: "Project Structure" }),
            /* @__PURE__ */ jsx("div", { className: "font-mono text-sm", children: selectedProject && renderProjectStructure(selectedProject.structure) })
          ] }),
          selectedProject && selectedProject.images && selectedProject.images.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 rounded-lg p-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-gray-200", children: "Screenshots" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden mb-2", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: selectedProject.images[activeImageIndex].url,
                  alt: selectedProject.images[activeImageIndex].alt,
                  className: "w-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300 mb-3", children: selectedProject.images[activeImageIndex].description }),
              selectedProject.images.length > 1 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-2", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: handlePrevImage,
                    className: "bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center",
                    children: "←"
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
                  activeImageIndex + 1,
                  " / ",
                  selectedProject.images.length
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: handleNextImage,
                    className: "bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center",
                    children: "→"
                  }
                )
              ] })
            ] }),
            selectedProject.repoUrl && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: selectedProject.repoUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300 bg-gray-700/50 p-2 rounded-lg",
                children: [
                  /* @__PURE__ */ jsx(FaGithub, {}),
                  /* @__PURE__ */ jsx("span", { children: "Visit GitHub Repository" })
                ]
              }
            ) }),
            selectedProject.liveUrl && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: selectedProject.liveUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300 bg-gray-700/50 p-2 rounded-lg",
                children: [
                  /* @__PURE__ */ jsx(FaLink, {}),
                  /* @__PURE__ */ jsx("span", { children: "Visit Live Site" })
                ]
              }
            ) })
          ] })
        ] })
      ] }) }) })
    }
  );
};

function Desktop({ initialBg, backgroundMap }) {
  const [currentBg, setCurrentBg] = useState(initialBg);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showGitHub, setShowGitHub] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);
  const [activeApps, setActiveApps] = useState({
    terminal: false,
    notes: false,
    github: false,
    resume: false,
    spotify: false
  });
  useEffect(() => {
    const lastBg = localStorage.getItem("lastBackground");
    const hasCompletedTutorial = localStorage.getItem("hasCompletedTutorial") === "true";
    if (lastBg === initialBg) {
      const bgKeys = Object.keys(backgroundMap);
      const availableBgs = bgKeys.filter((bg) => bg !== lastBg);
      const newBg = availableBgs[Math.floor(Math.random() * availableBgs.length)];
      setCurrentBg(newBg);
    }
    if (!hasCompletedTutorial) {
      setShowTutorial(true);
    }
    localStorage.setItem("lastBackground", currentBg);
  }, [initialBg, backgroundMap]);
  const resetTutorial = () => {
    setCurrentTutorialStep(0);
    setShowTutorial(true);
    localStorage.setItem("hasCompletedTutorial", "false");
  };
  const tutorialSteps = [
    {
      title: "Welcome to My Portfolio! 👋",
      content: "This is a macOS-inspired portfolio where you can explore my work and experience. Let me guide you through some of the features!",
      action: () => setShowNotes(true),
      buttonText: "Let's Begin"
    },
    {
      title: "Notes App",
      content: "This is my Notes app where you can find detailed information about my education, experience, and skills. Feel free to explore!",
      action: () => {
        setShowNotes(false);
        setShowGitHub(true);
      },
      buttonText: "Next: Projects"
    },
    {
      title: "GitHub Projects",
      content: "Here you can browse through my projects, see their structure, and check out the code. Each project has screenshots and links to the repository.",
      action: () => {
        setShowGitHub(false);
        setShowTerminal(true);
      },
      buttonText: "Next: Terminal"
    },
    {
      title: "Terminal",
      content: "The terminal is an interactive way to learn more about me. Try asking questions like 'What are your skills?' or 'Tell me about your experience'",
      action: () => {
        setShowTerminal(false);
      },
      buttonText: "Next: Explore"
    },
    {
      title: "Explore",
      content: "Now that you've seen the basics, feel free to explore the rest of the portfolio from the dock below. I've got some cool projects and information waiting for you!",
      action: () => {
        setShowTutorial(false);
      },
      buttonText: "Thanks! I Got it from here!"
    }
  ];
  const handleTutorialAction = () => {
    if (tutorialSteps[currentTutorialStep].action) {
      tutorialSteps[currentTutorialStep].action();
    }
    if (currentTutorialStep < tutorialSteps.length - 1) {
      setCurrentTutorialStep((prev) => prev + 1);
    } else {
      setShowTutorial(false);
      localStorage.setItem("hasCompletedTutorial", "true");
    }
  };
  const handleAppOpen = (app) => {
    setActiveApps((prev) => ({
      ...prev,
      [app]: true
    }));
  };
  const handleAppClose = (app) => {
    setActiveApps((prev) => ({
      ...prev,
      [app]: false
    }));
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative w-screen h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center",
        style: { backgroundImage: `url(${backgroundMap[currentBg]})` }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsx(
      MacToolbar,
      {
        onTerminalClick: () => setShowTerminal(true),
        onShowTutorial: resetTutorial
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-0 flex items-center justify-center h-[calc(100vh-10rem)] md:h-[calc(100vh-1.5rem)] pt-6" }),
    /* @__PURE__ */ jsx(
      MobileDock,
      {
        onGitHubClick: () => {
          setShowGitHub(true);
          handleAppOpen("github");
        },
        onNotesClick: () => {
          setShowNotes(true);
          handleAppOpen("notes");
        },
        onResumeClick: () => {
          setShowResume(true);
          handleAppOpen("resume");
        },
        onTerminalClick: () => {
          setShowTerminal(true);
          handleAppOpen("terminal");
        }
      }
    ),
    /* @__PURE__ */ jsx(
      DesktopDock,
      {
        onTerminalClick: () => {
          setShowTerminal(true);
          handleAppOpen("terminal");
        },
        onNotesClick: () => {
          setShowNotes(true);
          handleAppOpen("notes");
        },
        onGitHubClick: () => {
          setShowGitHub(true);
          handleAppOpen("github");
        },
        activeApps
      }
    ),
    /* @__PURE__ */ jsx(NotesApp, { isOpen: showNotes, onClose: () => {
      setShowNotes(false);
      handleAppClose("notes");
    } }),
    /* @__PURE__ */ jsx(GitHubViewer, { isOpen: showGitHub, onClose: () => {
      setShowGitHub(false);
      handleAppClose("github");
    } }),
    /* @__PURE__ */ jsx(ResumeViewer, { isOpen: showResume, onClose: () => {
      setShowResume(false);
      handleAppClose("resume");
    } }),
    /* @__PURE__ */ jsx(MacTerminal, { isOpen: showTerminal, onClose: () => {
      setShowTerminal(false);
      handleAppClose("terminal");
    } }),
    showTutorial && /* @__PURE__ */ jsx("div", { className: "fixed right-4 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-xl max-w-xs animate-fade-in", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: tutorialSteps[currentTutorialStep].title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300 mb-4", children: tutorialSteps[currentTutorialStep].content }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-400", children: [
          currentTutorialStep + 1,
          " of ",
          tutorialSteps.length
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleTutorialAction,
            className: "text-sm text-blue-400 hover:text-blue-300",
            children: tutorialSteps[currentTutorialStep].buttonText
          }
        )
      ] })
    ] }) })
  ] });
}

const macBackground2 = new Proxy({"src":"/_astro/mac-background2.DAWzICtV.jpg","width":6016,"height":3384,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/majid-qurashi/Documents/code/projects/portfolio-apple/src/assets/images/mac-background2.jpg";
							}
							
							return target[name];
						}
					});

const $$LandingPage = createComponent(async ($$result, $$props, $$slots) => {
  const backgrounds = [macBackground1, macBackground2, macBackground3];
  function getRandomBackground() {
    return `bg-${Math.floor(Math.random() * backgrounds.length) + 1}`;
  }
  const optimizedBackgrounds = await Promise.all(
    backgrounds.map(
      (bg) => getImage({
        src: bg,
        width: 3500
      })
    )
  );
  const backgroundMap = Object.fromEntries(
    optimizedBackgrounds.map((bg, index) => [`bg-${index + 1}`, bg.src])
  );
  return renderTemplate`${renderComponent($$result, "AppLayout", Desktop, { "client:load": true, "initialBg": getRandomBackground(), "backgroundMap": backgroundMap, "client:component-hydration": "load", "client:component-path": "/home/majid-qurashi/Documents/code/projects/portfolio-apple/src/layouts/AppLayout", "client:component-export": "default" })}`;
}, "/home/majid-qurashi/Documents/code/projects/portfolio-apple/src/components/LandingPage.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- 
  Customize these values for your portfolio:
  - title: Your name and role
  - description: Brief description of your expertise
  - canonical: Your website URL
  - openGraph: Social media sharing metadata
-->${renderComponent($$result, "Layout", $$Layout, { "title": userConfig.seo.title, "description": userConfig.seo.description, "canonical": userConfig.website, "openGraph": {
    url: userConfig.website,
    title: userConfig.seo.title,
    description: userConfig.seo.description,
    site_name: userConfig.name
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingPage", $$LandingPage, {})} ` })}`;
}, "/home/majid-qurashi/Documents/code/projects/portfolio-apple/src/pages/index.astro", void 0);

const $$file = "/home/majid-qurashi/Documents/code/projects/portfolio-apple/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
