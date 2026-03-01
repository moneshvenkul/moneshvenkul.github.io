/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Monesh Venkul's Portfolio",
  description: `Senior Full-Stack Developer specializing in React, Angular, Node.js, Java, Python, and cloud engineering across AWS and Azure. I build high-performance, secure, and scalable digital products for enterprise and consumer platforms.`,
  og: {
    title: "Monesh Venkul Vommi Portfolio",
    type: "website",
    url: "https://moneshvenkul.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Monesh Venkul Vommi",
  logo_name: "MoneshVenkulVommi",
  nickname: "monesh_venkul",
  subTitle: `Senior Full-Stack Developer with 6+ years of experience building enterprise products in finance and technology. I design clean user experiences, build resilient backend services, and ship scalable cloud-native solutions using React, Angular, Vue, Node.js, Java, Python, AWS, and Azure.`,
  resumeLink:
    "https://unhnewhaven-my.sharepoint.com/:b:/g/personal/mvomm1_unh_newhaven_edu/EWst9Ou7KyFHvvSzI3P8X_gBMGvqK8BTM5RnZg1xDxKgHw?e=Dan4ZB",
  portfolio_repository:
    "https://github.com/moneshvenkul/moneshvenkul.github.io",
  githubProfile: "https://github.com/moneshvenkul",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/moneshvenkul",
  // linkedin: "https://www.linkedin.com/in/monesh-venkul-vommi-8a80b6174/",
  // gmail: "mvvenkul@gmail.com",

  {
    name: "Github",
    link: "https://github.com/moneshvenkul",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/monesh-venkul-vommi-8a80b6174/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCRQ77SxTf4WRoJEO6YNPakA",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:mvvenkul@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Architecting and delivering production-grade web applications using React, Angular, Vue, Node.js, Java, and Python across enterprise environments.",
        "⚡ Building robust APIs, reusable UI systems, and performant data-driven workflows with strong attention to quality, accessibility, and maintainability.",
        "⚡ Leading Agile teams, mentoring developers, and improving release velocity through CI/CD automation, test strategy, and engineering best practices.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Translating business problems into data-backed solutions using SQL, Python analytics, and visualization tools.",
        "⚡ Applying machine learning fundamentals and experimentation workflows to improve product decisions and operational outcomes.",
        "⚡ Building dashboards and reporting pipelines that make complex metrics easy for stakeholders to understand and act on.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designing cloud-native architectures on AWS and Azure with a focus on reliability, security, and cost-aware scaling.",
        "⚡ Implementing CI/CD pipelines, containerized services, and deployment automation to shorten release cycles and reduce risk.",
        "⚡ Improving observability and operational excellence through better monitoring, incident response, and performance optimization.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing intuitive, modern interfaces that balance user needs with business goals and engineering constraints.",
        "⚡ Crafting reusable design patterns and responsive layouts that improve usability across devices.",
        "⚡ Partnering closely with product and engineering teams to convert design concepts into polished, accessible user experiences.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/monesh_venkul/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/monesh_venkul",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/monesh_venkul",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Zero to Mastery Academy",
      subtitle: "Certification in Computer Science",
      logo_path: "ztm_logo.png",
      alt_name: "ZTM Academy",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Focused on practical software engineering, web development, and system design through project-based learning.",
        "⚡ Strengthened core foundations in data structures, algorithms, and production-grade application architecture.",
        "⚡ Applied skills directly to real-world full-stack projects and engineering interviews.",
      ],
      website_link: "https://zerotomastery.io/",
    },
    {
      title: "University of New Haven",
      subtitle: "M.S. in Business Analytics",
      logo_path: "unh_logo.png",
      alt_name: "University of New Haven",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Concentrated on analytics, data-driven decision making, predictive modeling, and business intelligence.",
        "⚡ Built projects spanning SQL analytics, visualization, machine learning, and cloud-enabled pipelines.",
        "⚡ Combined technical implementation with business context to deliver practical outcomes.",
      ],
      website_link: "https://www.newhaven.edu/",
    },
    {
      title: "Sathyabama University",
      subtitle: "B.E in Computer Science",
      logo_path: "sist_logo.png",
      alt_name: "Sathyabama University",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Built strong foundations in computer science, software engineering, and full-stack application development.",
        "⚡ Worked on collaborative projects using Java, web technologies, and database systems.",
        "⚡ Developed communication and leadership skills through technical events and team initiatives.",
      ],
      website_link: "https://www.sathyabama.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Internet of Things",
      subtitle: "IIT - NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "The Fundamentals of Digital Marketing",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link: "https://learndigital.withgoogle.com/link/1tb5mplmosg",
      alt_name: "Google Certificate",
      color_code: "#0C9D5899",
    },
    {
      title: "Machine Learning 101",
      subtitle: "- GUVI",
      logo_path: "guvi_logo.png",
      certificate_link:
        "https://www.guvi.in/verify-certificate?id=T3601z4g002mk2f15a",
      alt_name: "Google",
      color_code: "#ffff",
    },
    {
      title: "JavaScript",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/ac6ae2d31bb8",
      alt_name: "Javascript Hackerrank",
      color_code: "#1F70C199",
    },
    {
      title: "Problem Solving (Intermediate)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/186dc9c7e36a",
      alt_name: "Problem Solving Hackerrank",
      color_code: "#D83B0199",
    },
    {
      title: "React JS",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/ef906dcaee86",
      alt_name: "React Js hackerrank",
      color_code: "#1F70C199",
    },
    {
      title: "Robotic Process Automation",
      subtitle: "- GUVI - IITM Research Park",
      logo_path: "guvi_logo.png",
      certificate_link:
        "https://www.guvi.in/verify-certificate?id=EhvDj13049a9663J27",
      alt_name: "Google",
      color_code: "#ffff",
    },
    {
      title: "Build a Face Recognition Application using Python",
      subtitle: "- Guvi - AI India",
      logo_path: "guvi_logo.png",
      certificate_link:
        "https://www.guvi.in/verify-certificate?id=649n0tXH18l34426Ju",
      alt_name: "Build a Face Recognition Application using Python",
      color_code: "#ffff",
    },
    {
      title: " The Complete Android Ethical Hacking Practical Course C|AEHP",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-c3555b8b-72f6-43ed-9ec3-7c0d0123e6cd/",
      alt_name: "Android Ethical Hacking",
      color_code: "#ffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience, Internships, and Leadership",
  description:
    "I am a senior full-stack developer with 6+ years of experience delivering high-impact digital products in finance, consulting, and education. I specialize in modern frontend systems, backend APIs, cloud engineering, and team mentorship to ship reliable software at scale.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Full Stack Developer",
          company: "Capital One",
          company_url: "https://www.capitalone.com/",
          logo_path: "Capital_One-Logo.png",
          duration: "June 2024 – Present",
          location: "Richmond, VA, United States",
          description:
            "Building and modernizing customer-facing web applications using Vue.js, TypeScript, and RxJS in an enterprise banking environment. Delivering Node.js service enhancements, strong validation patterns, and resilient data integrations across PostgreSQL, Oracle, MongoDB, Cassandra, and DynamoDB. Driving code quality with automated test coverage (Jasmine/Karma), Agile delivery in Jira, and collaborative Git workflows.",
          color: "#ff0000",
        },
        {
          title: "Senior Full Stack Developer",
          company: "Fidelity Investments",
          company_url: "https://www.fidelity.com/",
          logo_path: "unh_logo.png",
          duration: "August 2022 – May 2024",
          location: "Merrimack, NH, United States",
          description:
            "Delivered secure, customer-facing financial platform capabilities using Angular/React frontends and Node.js/Java backend services. Built API integrations, improved transaction workflows, optimized application performance, and partnered with product, QA, and DevOps teams for reliable production releases.",
          color: "#ff0000",
        },
        {
          title: "Senior Full Stack Developer",
          company: "Cognixia",
          company_url: "https://www.cognixia.com/",
          logo_path: "cognixia.png",
          duration: "March 2024 – Present",
          location: "Basking Ridge, NJ, United States",
          description:
            "Delivered full-stack consulting solutions for enterprise clients using Angular, Vue.js, Node.js, and Python/Django. Implemented scalable APIs and dashboard experiences backed by PostgreSQL, Oracle, MongoDB, Cassandra, and DynamoDB. Collaborated with cross-functional teams to ship accessible UI/UX improvements, data visualizations, and tested releases under Agile-Scrum practices.",
          color: "#ff0000",
        },
        {
          title: "Graduate Assistant & Provost Scholarship Recipient",
          company: "University of New Haven",
          company_url: "https://www.newhaven.edu/",
          logo_path: "unh_logo.png",
          duration: "August 2022 - December 2023",
          location: "West Haven, Connecticut, United States",
          description:
            "Supported analytics-led academic initiatives at the University of New Haven while completing my M.S. in Business Analytics. Built reporting models and data-backed insights for program planning, contributed to workshops on data literacy, and helped improve academic decision-making through measurable performance tracking.",
          color: "#ff0000",
        },
        {
          title: "Full Stack Software Dev Instructor",
          company: "AlmaBetter",
          company_url: "https://www.almabetter.com/",
          logo_path: "AlmaBetter_Logo.jpg",
          duration: "May 2022 - December 2023",
          location: "Bengaluru, Karnataka",
          description:
            "Mentored 300+ learners across multiple cohorts in full-stack development (JavaScript, React, Angular, Node.js, Python, Java, and SQL). Designed project-based curriculum, conducted code reviews, and supported interview readiness. Consistently received strong learner feedback for clear explanations, practical assignments, and career-focused mentorship.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Software Engineer",
          company: "HCL Technologies",
          company_url: "https://www.hcltech.com/",
          logo_path: "hcl.png",
          duration: "August 2020 - August 2022",
          location: "Bengaluru, Karnataka",
          description: `Engineered and deployed enterprise applications for banking clients using Java, Spring Boot, microservices, REST APIs, and SQL/NoSQL data stores. Contributed to scalable architecture decisions, CI/CD delivery through Azure DevOps, and production reliability improvements. Recognized for consistent execution quality and impactful delivery across multiple releases.`,
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Technical Instructor",
          company: "Udemy",
          company_url: "https://www.udemy.com/user/monesh-venkul-vommi2/",
          logo_path: "udemy.png",
          duration: "December 2018 - July 2020",
          location: "Vizag, AndhraPradesh",
          description: `Created and published technical courses on programming and web development for a global audience. Taught Python, Java, JavaScript, and full-stack development fundamentals with a hands-on learning style. Built a growing learner community through practical projects and clear concept breakdowns.`,
          color: "#9b1578",
        },
        {
          title: "Full Stack Web Developer",
          company: "Service4StartUp",
          company_url:
            "https://www.linkedin.com/company/service4startup/about/",
          logo_path: "service4startup.jfif",
          duration: "December 2018 - March 2019",
          location: "Chennai, TamilNadu",
          description:
            "Built a web-based product during internship by collaborating across product and engineering needs. Helped improve site performance and frontend usability, strengthened debugging practices, and delivered production-ready UI features as part of a small agile team.",
          color: "#fc1f20",
        },
        {
          title: "Content Creator",
          company: "YouTube",
          company_url:
            "https://www.youtube.com/channel/UCRQ77SxTf4WRoJEO6YNPakA",
          logo_path: "youtube.png",
          duration: "December 2018 - August 2020",
          location: "Chennai, TamilNadu & Vizag, AndhraPradesh",
          description:
            "Built and managed technical tutorial content for an online audience, focusing on developer education and practical software topics.",
          color: "orange",
        },
        {
          title: "Social Media Marketing Specialist",
          company: "mLearning Community",
          company_url: "http://www.m-learning.in/",
          logo_path: "mlearning.jpg",
          duration: "June 2018 - July 2018",
          location: "Chennai, TamilNadu",
          description:
            "Improved social engagement and digital outreach through campaign planning, content execution, and consistent community management.",
          color: "blue",
        },
        {
          title: "Enterprise Resources Planning Developer",
          company: "Steel Plant",
          company_url: "https://www.vizagsteel.com/index.asp",
          logo_path: "steelplant.png",
          duration: "April 2018 - May 2018",
          location: "Chennai, TamilNadu",
          description:
            "Supported ERP-related development tasks and presentations, gaining early exposure to structured enterprise workflows and stakeholder communication.",
          color: "black",
        },
        {
          title: "App Developer",
          company: "Learnorama",
          company_url: "",
          logo_path: "learnorama.jpg",
          duration: "December 2017 — January 2018",
          location: "Chennai, TamilNadu",
          description:
            "Led a small team to build a hackathon app prototype and received recognition for implementation quality and delivery.",
          color: "pink",
        },
        {
          title: "Front End Web Developer",
          company: "Different Hair",
          company_url: "",
          logo_path: "differenthair.jpeg",
          duration: "July 2017 — September 2017",
          location: "Chennai, TamilNadu",
          description:
            "Designed and implemented frontend UI improvements for better usability and user experience.",
          color: "green",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Volunteer",
          company: "Sathyabama University - Village Ticket",
          company_url: "https://www.sathyabama.ac.in/",
          logo_path: "college_logo.png",
          duration: "January 2019 – February 2019",
          location: "Chennai, TamilNadu",
          description:
            "Contributed as a student volunteer for a university community event, supporting planning, coordination, and on-ground execution.",
          color: "#4285F4",
        },
        {
          title: "Front End Web Developer",
          company: "Different Hair",
          company_url: "",
          logo_path: "differenthair.jpeg",
          duration: "July 2017 — September 2017",
          location: "Chennai, TamilNadu",
          description:
            "Designed and implemented frontend UI improvements for better usability and user experience.",
          color: "green",
        },
        {
          title: "Cognizant Student Partner",
          company: "Cognizant",
          company_url: "https://www.cognizant.com/",
          logo_path: "cognizant.jfif",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Led student outreach activities and cloud-awareness sessions, helping peers adopt Azure tools and modern development practices.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A curated collection of full-stack, cloud, and analytics projects that showcase end-to-end delivery—from architecture and development to deployment, performance tuning, and business impact.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "Research and technical writing focused on cloud security, system design, and applied software innovation.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Multi-layer Security in Cloud Storage Using Cryptography",
      createdAt: "2021-05-06T16:26:54Z",
      description: `I have authored a paper titled "Multi-layer Security in Cloud Storage Using Cryptography," which delves into the critical aspect of enhancing security measures in cloud storage environments. This paper focuses on the implementation of advanced cryptographic techniques to create a multi-layered defense mechanism. By analyzing various encryption methods and their application in cloud storage, the paper presents a comprehensive approach to securing sensitive data against potential cyber threats. The research underpinning this paper reflects my deep interest in cloud security and my commitment to developing innovative solutions to bolster data protection in the increasingly cloud-reliant world of information technology.`,
      url: "https://www.scopus.com/authid/detail.uri?authorId=57223107648",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "MyPic.jpg",
    description:
      "I am open to senior software engineering opportunities, solution architecture roles, and high-impact collaborations in full-stack and cloud engineering.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I regularly share technical insights, project learnings, and engineering best practices through LinkedIn posts and long-form content.",
    link:
      "https://www.linkedin.com/in/monesh-venkul-vommi-8a80b6174/recent-activity/all/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "West Haven, CT 06516",
    locality: "West Haven",
    country: "USA",
    region: "Connecticut",
    postalCode: "06516",
    streetAddress: "300 Boston Post Rd",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/ELNQUUj5o4UrPKab8",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+1 (475)4411062",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
