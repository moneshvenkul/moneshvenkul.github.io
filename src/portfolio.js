/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Monesh Venkul Vommi | Senior Software Engineer & AI Engineer",
  description:
    "Full-stack and AI engineer with 7+ years across fintech, enterprise consulting, and edtech. Built Fidelity's first production RAG pipeline adopted by 3 enterprise teams. AWS Solutions Architect Certified. Open to FAANG and top-tier roles.",
  og: {
    title: "Monesh Venkul Vommi — Portfolio",
    type: "website",
    url: "https://moneshvenkul.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Monesh Venkul Vommi",
  logo_name: "MoneshVenkulVommi",
  nickname: "monesh_venkul",
  subTitle:
    "Full-stack & AI engineer with 7+ years across fintech, enterprise, and edtech. Built Fidelity's first production RAG pipeline — adopted by 3 enterprise teams in 4 weeks. AWS Solutions Architect Certified. I work best where AI meets distributed systems and there's a real latency or scale problem to solve.",
  resumeLink: "./Monesh_Venkul_Resume.pdf",
  portfolio_repository:
    "https://github.com/moneshvenkul/moneshvenkul.github.io",
  githubProfile: "https://github.com/moneshvenkul",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/moneshvenkul",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/monesh-venkul-vommi-8a80b6174/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:mvvenkul@gmail.com",
    fontAwesomeIcon: "fa-envelope",
    fontAwesomePrefix: "fas",
    backgroundColor: "#D14836",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCRQ77SxTf4WRoJEO6YNPakA",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/monesh_venkul/",
    fontAwesomeIcon: null,
    customSvg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>`,
    backgroundColor: "#FFA116",
  },
];

const skills = {
  data: [
    {
      title: "AI & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Built Fidelity's first production RAG pipeline (LangChain + Pinecone) enabling wealth managers to query thousands of financial documents in plain English — adopted by 3 enterprise teams in 4 weeks.",
        "⚡ Designed and shipped AI-powered products including a meal planner with 40% reduction in irrelevant recommendations and a real-time sketch-to-image tool with sub-3s latency using Stable Diffusion.",
        "⚡ Hands-on expertise with LLMs, prompt engineering, vector databases, and embedding pipelines for production AI systems.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: { backgroundColor: "transparent", color: "#74AA9C" },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: { backgroundColor: "transparent", color: "#1C3C3C" },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Engineered scalable RESTful APIs and Vue.js/React component architectures serving 1M+ monthly active users at Ascendion; reduced average page load time by 38%.",
        "⚡ Migrated advisor portal from Create React App to Next.js 14 with SSR and Bun runtime, improving Time-to-Interactive by 32% at Fidelity.",
        "⚡ Delivered and owned core banking microservices (Java/Spring Boot) for a top-5 Indian private bank, handling 500K+ daily transactions with 99.95% uptime SLA.",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { backgroundColor: "transparent", color: "#3178C6" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:next-dot-js",
          style: { color: "#ffffff" },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vue-dot-js",
          style: { color: "#41B883" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: { color: "#339933" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: { color: "#f89820" },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: { color: "#E10098" },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ AWS Certified Solutions Architect — designing reliable, scalable cloud-native architectures with a focus on cost-efficiency and security.",
        "⚡ Reduced CI/CD pipeline execution time by 45% by migrating enterprise test suites from Cypress to Playwright at Ascendion.",
        "⚡ Containerized 8 legacy banking services with Docker and automated deployments via Jenkins CI/CD, achieving zero-downtime releases and reducing manual deployment effort by 70% at HCL.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: { color: "#7B42BC" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: { color: "#D24939" },
        },
      ],
    },
    {
      title: "Databases & Testing",
      fileName: "DesignImg",
      skills: [
        "⚡ Cut complex financial relationship query latency by 58% by replacing relational SQL schemas with a Neo4j graph database, enabling multi-hop traversal across client portfolio networks.",
        "⚡ Introduced Redis API response caching at Ascendion, reducing database read load by 30% during peak traffic windows.",
        "⚡ Drove WCAG 2.1 AA accessibility compliance across 12 product screens, cutting screen-reader rendering latency by 22% and eliminating 40+ audit violations.",
      ],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "Neo4j",
          fontAwesomeClassname: "simple-icons:neo4j",
          style: { color: "#008CC1" },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: { color: "#DC382D" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Playwright",
          fontAwesomeClassname: "simple-icons:playwright",
          style: { color: "#2EAD33" },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "simple-icons:jest",
          style: { color: "#C21325" },
        },
        {
          skillName: "Cypress",
          fontAwesomeClassname: "simple-icons:cypress",
          style: { color: "#17202C" },
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
      style: { color: "#F79F1B" },
      profileLink: "https://leetcode.com/monesh_venkul/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: { color: "#2EC866" },
      profileLink: "https://www.hackerrank.com/monesh_venkul",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: { color: "#1F8ACB" },
      profileLink: "http://codeforces.com/profile/monesh_venkul",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of New Haven",
      subtitle: "M.S. in Business Analytics",
      logo_path: "unh_logo.png",
      alt_name: "University of New Haven",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ GPA 4.0/4.0 — Top of cohort. Concentrated on analytics, data-driven decision making, predictive modeling, and business intelligence.",
        "⚡ Built projects spanning SQL analytics, visualization, machine learning, and cloud-enabled pipelines.",
        "⚡ Recipient of Provost Scholarship — awarded for academic excellence.",
      ],
      website_link: "https://www.newhaven.edu/",
    },
    {
      title: "Sathyabama University",
      subtitle: "B.E. in Computer Science",
      logo_path: "sist_logo.png",
      alt_name: "Sathyabama University",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ GPA 9.2/10. Strong foundations in computer science, software engineering, and full-stack application development.",
        "⚡ Worked on collaborative projects using Java, web technologies, and database systems.",
        "⚡ Published research on Multi-layer Security in Cloud Storage Using Cryptography (Scopus indexed).",
      ],
      website_link: "https://www.sathyabama.ac.in/",
    },
    {
      title: "Zero to Mastery Academy",
      subtitle: "Advanced Software Engineering",
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
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle: "Amazon Web Services",
      logo_path: "aws_logo.svg",
      certificate_link:
        "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
      alt_name: "AWS",
      color_code: "#FF990099",
    },
    {
      title: "Microsoft GitHub Copilot Certified",
      subtitle: "Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://learn.microsoft.com/",
      alt_name: "Microsoft GitHub Copilot",
      color_code: "#0078D499",
    },
    {
      title: "JavaScript",
      subtitle: "HackerRank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/ac6ae2d31bb8",
      alt_name: "Javascript HackerRank",
      color_code: "#2EC86699",
    },
    {
      title: "Problem Solving (Intermediate)",
      subtitle: "HackerRank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/186dc9c7e36a",
      alt_name: "Problem Solving HackerRank",
      color_code: "#2EC86699",
    },
    {
      title: "React JS",
      subtitle: "HackerRank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/ef906dcaee86",
      alt_name: "React JS HackerRank",
      color_code: "#2EC86699",
    },
    {
      title: "The Fundamentals of Digital Marketing",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link: "https://learndigital.withgoogle.com/link/1tb5mplmosg",
      alt_name: "Google Certificate",
      color_code: "#4285F499",
    },
    {
      title: "Machine Learning 101",
      subtitle: "GUVI",
      logo_path: "guvi_logo.png",
      certificate_link:
        "https://www.guvi.in/verify-certificate?id=T3601z4g002mk2f15a",
      alt_name: "ML GUVI",
      color_code: "#FF6B3599",
    },
    {
      title: "Introduction to IoT",
      subtitle: "IIT – NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "7+ Years Building at Scale",
  description:
    "From banking microservices serving 500K+ daily transactions at HCL, to scaling APIs for 1M+ users at Ascendion, to building Fidelity's first production RAG pipeline — I work across the full stack wherever there's a meaningful engineering problem to solve.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "Fidelity Investments",
          company_url: "https://www.fidelity.com/",
          logo_path: "fidelity_logo.svg",
          duration: "June 2025 – Present",
          location: "Roanoke, TX",
          description:
            "Launched the team's first production RAG pipeline (LangChain + Pinecone) enabling wealth managers to query thousands of financial documents in plain English — picked up by 3 enterprise teams within 4 weeks. Slashed complex financial relationship query latency by 58% by replacing relational SQL with a Neo4j graph database enabling multi-hop traversal across client portfolio networks. Improved front-end Time-to-Interactive by 32% migrating the advisor portal from Create React App to Next.js 14 with SSR and Bun. Ran internal workshops on LangChain and RAG patterns for 4 engineers, cutting AI feature onboarding time by 3 weeks across two product squads.",
          color: "#00d4ff",
        },
        {
          title: "Senior Full Stack Developer",
          company: "Ascendion",
          company_url: "https://ascendion.com/",
          logo_path: "ascendion_logo.svg",
          duration: "March 2024 – May 2025",
          location: "Roanoke, TX",
          description:
            "Reduced CI/CD pipeline execution time by 45% by migrating enterprise test suites from Cypress to Playwright, maintaining 95% code coverage across 250+ end-to-end test cases. Engineered scalable RESTful APIs using Java/Spring Boot and built Vue.js component architecture serving 1M+ monthly active users, reducing average page load time by 38%. Drove WCAG 2.1 AA accessibility compliance across 12 product screens, cutting screen-reader rendering latency by 22% and eliminating 40+ accessibility audit violations. Introduced API response caching via Redis, reducing database read load by 30% during peak traffic windows.",
          color: "#7b2fff",
        },
        {
          title: "Full Stack Developer",
          company: "StemSims",
          company_url: "https://www.stemsims.com/",
          logo_path: "stemsims_logo.png",
          duration: "June 2023 – September 2023",
          location: "Gainesville, FL",
          description:
            "Developed React-based interactive STEM simulations with real-time data visualization and machine learning-driven feedback, improving student session completion rates by 20% across 300+ concurrent users. Redesigned PostgreSQL schemas with composite indexing for high-concurrency lab workloads, cutting average query time by 40%. Shipped a shared UI component library adopted across 6 simulation modules.",
          color: "#00d4ff",
        },
        {
          title: "Graduate Technical Provost",
          company: "University of New Haven",
          company_url: "https://www.newhaven.edu/",
          logo_path: "unh_logo.png",
          duration: "Aug 2022 – Dec 2023",
          location: "New Haven, Connecticut · Hybrid",
          description:
            "Developed and implemented 3 new academic programs, resulting in a 15% increase in student enrollment for the subsequent academic year. Organized 6 professional development workshops annually for faculty and staff, leading to improved teaching methodologies and a 20% increase in research publications. Conducted quarterly performance reviews and feedback sessions, maintaining a 95% positive feedback rate from both students and faculty and driving continuous improvement in academic operations.",
          color: "#00ff88",
        },
        {
          title: "Software Engineer",
          company: "HCL Technologies",
          company_url: "https://www.hcltech.com/",
          logo_path: "hcl.png",
          duration: "April 2020 – December 2022",
          location: "Bengaluru, India",
          description:
            "Delivered and owned core banking microservices (Java/Spring Boot) for a top-5 Indian private bank, handling 500K+ daily transactions with 99.95% uptime SLA. Cut average API response time by 35% through PostgreSQL query optimization, connection pooling, and targeted JVM tuning on high-throughput payment processing endpoints. Containerized 8 legacy banking services with Docker and automated deployments via Jenkins CI/CD, achieving zero-downtime releases and reducing manual deployment effort by 70%.",
          color: "#7b2fff",
        },
        {
          title: "Full Stack Software Dev Instructor",
          company: "AlmaBetter",
          company_url: "https://www.almabetter.com/",
          logo_path: "AlmaBetter_Logo.jpg",
          duration: "May 2022 – December 2023",
          location: "Bengaluru, Karnataka",
          description:
            "Mentored 300+ learners across multiple cohorts in full-stack development (JavaScript, React, Angular, Node.js, Python, Java, and SQL). Designed project-based curriculum, conducted code reviews, and supported interview readiness for FAANG-level roles.",
          color: "#00d4ff",
        },
      ],
    },
    {
      title: "Internships & Early Career",
      experiences: [
        {
          title: "Technical Instructor",
          company: "Udemy",
          company_url: "https://www.udemy.com/user/monesh-venkul-vommi2/",
          logo_path: "udemy.png",
          duration: "December 2018 – July 2020",
          location: "Remote",
          description:
            "Created and published technical courses on Python, Java, JavaScript, and full-stack web development for a global audience. Built a learner community through practical projects and clear concept breakdowns.",
          color: "#9b1578",
        },
        {
          title: "Full Stack Web Developer",
          company: "Service4StartUp",
          company_url:
            "https://www.linkedin.com/company/service4startup/about/",
          logo_path: "service4startup.jfif",
          duration: "December 2018 – March 2019",
          location: "Chennai, India",
          description:
            "Built production-ready UI features, improved site performance and frontend usability for an early-stage startup as part of a small agile team.",
          color: "#fc1f20",
        },
        {
          title: "ERP Developer Intern",
          company: "Steel Plant (RINL Vizag Steel)",
          company_url: "https://www.vizagsteel.com/index.asp",
          logo_path: "steelplant.png",
          duration: "April 2018 – May 2018",
          location: "Visakhapatnam, India",
          description:
            "Supported ERP-related development tasks, gaining early exposure to enterprise workflows and stakeholder communication.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Cognizant Student Partner",
          company: "Cognizant",
          company_url: "https://www.cognizant.com/",
          logo_path: "cognizant.jfif",
          duration: "Aug 2019 – May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Led student outreach activities and cloud-awareness sessions, helping peers adopt Azure tools and modern development practices.",
          color: "#D83B01",
        },
        {
          title: "Student Volunteer",
          company: "Sathyabama University",
          company_url: "https://www.sathyabama.ac.in/",
          logo_path: "college_logo.png",
          duration: "January 2019 – February 2019",
          location: "Chennai, TamilNadu",
          description:
            "Contributed as a student volunteer for university community events, supporting planning, coordination, and on-ground execution.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Production-grade AI, full-stack, and cloud projects — each built to solve a real problem with measurable impact.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Research on cloud security and applied software innovation.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Multi-layer Security in Cloud Storage Using Cryptography",
      createdAt: "2021-05-06T16:26:54Z",
      description:
        "Scopus-indexed research on implementing advanced cryptographic techniques to create a multi-layered security defense mechanism for cloud storage environments. Analyzes various encryption methods and their application to protect sensitive data against cyber threats.",
      url: "https://www.scopus.com/authid/detail.uri?authorId=57223107648",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Let's Connect",
    profile_image_path: "MyPic.jpg",
    description:
      "Open to Senior Software Engineer, Staff Engineer, and AI/ML Engineering roles at FAANG and top-tier tech companies. Also available for consulting on RAG pipelines, distributed systems, and high-scale backend architecture.",
  },
  blogSection: {
    title: "Writing & Insights",
    subtitle:
      "I share technical deep-dives on AI/ML engineering, RAG pipelines, distributed systems, and career lessons from working across fintech and enterprise.",
    link:
      "https://www.linkedin.com/in/monesh-venkul-vommi-8a80b6174/recent-activity/all/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Dallas-Fort Worth, TX — Open to Remote",
    locality: "Dallas",
    country: "USA",
    region: "Texas",
    postalCode: "75001",
    streetAddress: "Dallas-Fort Worth Metroplex",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Dallas-Fort+Worth+Metroplex,+TX",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+1 (475) 441-1062",
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
