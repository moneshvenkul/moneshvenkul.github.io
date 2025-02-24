/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Monesh Venkul's Portfolio",
  description: `Experienced Full-Stack Developer with 6 years in IT, skilled in Python, Java, JavaScript, React, Node.js, Angular, SQL,
NoSQL, Docker, Azure and AWS. Expert in developing both client and server software. Proven track record in diverse web
projects. Strong problem-solving skills, adaptable, and committed to delivering high-quality results.`,
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
  subTitle: `Experienced Full-Stack Developer with 6 years in IT, skilled in Python, Java, JavaScript, React, Node.js, Angular, SQL,
NoSQL, Docker, Azure and AWS. Expert in developing both client and server software. Proven track record in diverse web
projects. Strong problem-solving skills, adaptable, and committed to delivering high-quality results.`,
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
        "⚡ Building scalable and dynamic web applications using a range of technologies including Python, Java, JavaScript, React.js, and Angular.js, showcasing a strong proficiency in both front-end and back-end development.",
        "⚡ Leading web development projects with a focus on efficient project management and team collaboration, utilizing Agile methodologies and DevOps practices (like Jenkins and Docker) to enhance development efficiency and accelerate time-to-market.",
        "⚡ Imparting knowledge and skills as a Full Stack Software Dev Instructor, focusing on interactive and project-based learning in Python, Java, and JavaScript, thereby fostering student engagement and success in full-stack web development.",
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
        "⚡ Analyzing and interpreting complex datasets using advanced data analytics, machine learning algorithms, and statistical methods to drive decision-making and enhance business strategies.",
        "⚡ Designing and implementing AI-driven solutions, including the use of natural language processing (NLP) and machine learning algorithms, to develop intelligent and innovative applications such as AI-driven chatbots.",
        "⚡ Educating and mentoring in the field of data science and AI, leveraging expertise in Python and machine learning to guide students and professionals, thereby contributing to the development of future talent in these cutting-edge technologies.",
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
        "⚡ Architecting and deploying scalable cloud solutions using AWS and Azure, focusing on building robust infrastructures that ensure high availability and performance for diverse applications.",
        "⚡ Implementing continuous integration and continuous deployment (CI/CD) pipelines using tools like Jenkins and Docker, enhancing software delivery processes and operational efficiency.",
        "⚡ Leading the integration of cloud services into existing infrastructure, ensuring seamless migration and optimization of resources, while also prioritizing security and compliance standards.",
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
        "⚡ Designing intuitive and user-friendly interfaces for web and mobile applications, employing best practices in UI design and leveraging technologies like HTML, CSS, and JavaScript.",
        "⚡ Conducting thorough user experience research and usability testing to create designs that effectively meet user needs and enhance user satisfaction.",
        "⚡ Collaborating closely with development teams to ensure accurate implementation of UI/UX designs, and continuously iterating based on user feedback to improve the overall user experience.",
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
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/monesh_venkul",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
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
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
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
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
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
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
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
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am an experienced Full-Stack Developer with a strong background in Python, Java, JavaScript, React, and Angular, skilled in building both client and server software. My career includes impactful roles at Stem Sims and HCL Technologies, where I led key projects and significantly enhanced user experiences through innovative solutions. As an educator at AlmaBetter and Udemy, I have contributed substantially to student learning and development. My expertise extends to cloud services, data analysis, and Agile methodologies, reflecting my comprehensive skill set in modern IT practices.",
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
            "Developed front-end applications using Vue.js, Typescript, and RxJS. Implemented Node.js server-side validations and database management across PostgreSQL, Oracle, MongoDB, Cassandra, and DynamoDB. Enhanced legacy applications and improved performance through modular architecture. Ensured high code quality with Jasmine and Karma testing frameworks, utilized Agile methodologies with JIRA, and maintained effective version control using Git, GitHub, and SourceTree.",
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
            "Built and upgraded single-page applications using Angular (versions 2-11) and Vue.js. Developed backend solutions with Python/Django and Node.js, incorporating PostgreSQL, Oracle, MongoDB, Cassandra, and DynamoDB. Created intuitive data visualizations with High Charts, implemented robust UI/UX designs with Angular, React, HTML, CSS, SCSS, and maintained rigorous testing standards with Karma, Jasmine, and Enzyme. Facilitated Agile-Scrum practices for effective project delivery.",
          color: "#ff0000",
        },
        {
          title: "Provost Scholarship",
          company: "University of New Haven",
          company_url: "https://www.newhaven.edu/",
          logo_path: "unh_logo.png",
          duration: "August 2022 - December 2023",
          location: "West Haven, Connecticut, United States",
          description:
            "In my strategic leadership role at the University of New Haven, I successfully utilized data-driven decision-making to spearhead the development and launch of three innovative academic programs. By applying thorough market analysis and enrollment forecasting, I achieved a notable 15% increase in student enrollment in the subsequent year. Additionally, I orchestrated six annual professional development workshops focused on advanced teaching methodologies and data literacy for faculty and staff. This initiative significantly enhanced academic productivity and led to a 20% increase in research publications, as quantified by analytical tracking tools. My commitment to continuous improvement was further demonstrated through comprehensive quarterly performance reviews and feedback sessions. By employing statistical analysis and performance metrics, I effectively elevated academic operations and maintained a 95% positive feedback rate from both students and faculty, as evidenced by satisfaction surveys and data analytics.",
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
            "As a Full Stack Software Dev Instructor at AlmaBetter, I played a pivotal role in guiding over 300 students across more than 15 batches, achieving an 85% job placement rate within six months, with 60% of these students securing positions at top-tier tech firms. My extensive experience in full-stack web development, encompassing technologies such as Python, Java, JavaScript, React, Angular, Node.js, Express JS, and SQL, was fundamental in designing and delivering over 500 hours of dynamic, project-based instruction annually. This effort was reflected in a consistently high student feedback score of 4.8/5. Additionally, I significantly enhanced student engagement by over 80%, as evidenced by a 90% success rate in students achieving their career goals. I also facilitated networking opportunities for 70% of the students, helping them forge valuable connections within the tech industry and furthering their career advancement.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Software Engineer",
          company: "HCL Technologies",
          company_url: "https://www.hcltech.com/",
          logo_path: "hcl.png",
          duration: "August 2020 - August 2022",
          location: "Bengaluru, Karnataka",
          description: `At HCL Technologies, I excelled as a Software Engineer, architecting and developing over 10 intricate front-end and back-end applications annually for the banking sector. My work, deeply rooted in leveraging Spring Boot, Core Java, and microservices architecture, involved implementing RESTful APIs and integrating SQL and NoSQL databases, significantly enhancing application efficiency and scalability. I also spearheaded the quarterly deployment of five major applications, utilizing Azure DevOps and Microsoft Azure for CI/CD pipelines, which notably increased client satisfaction by 20%. My efforts and dedication were recognized with two prestigious company-wide awards for outstanding software engineering, underscoring my proficiency in coding standards, design patterns, and software optimization, and contributing significantly to the team's success and project deliverables.`,
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
          description: `At Udemy, I made a significant educational impact by delivering a series of comprehensive, technology-focused courses, reaching over 40,000 students globally. My courses covered essential areas such as programming languages (Python, Java, JavaScript), web development frameworks, and software engineering principles, equipping students with vital skills for industry success. In pursuit of professional growth, I continuously refined my teaching methodologies, focusing on interactive learning and practical applications, which was reflected in an impressive average course rating of 4.7/5. This rating underscored my ability to effectively communicate complex technical concepts to a diverse, international student base. Aligned with Udemy's mission, I played a crucial role in increasing course accessibility and digital learning engagement by 15% year-over-year. My commitment extended to setting ambitious goals to empower an additional 20,000 students with advanced technical skills in the upcoming year, leveraging analytics and feedback to adapt course content for maximum impact and relevance.`,
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
            "My Internship role is to create a Web-based Product. Built a standalone Web Product through leading a team. We had many difficulties at first but we made a software development approach to identify the problems and solved the errors in the product. We also improved the efficiency of the website by overall 25% through Web-Optimization. This was an amazing opportunity to prove myself as a web developer. This internship has really boosted my skills. It had been great working with Service4Startup. They are very cooperative, encouraging and patient towards my work and myself. I heartily wish the company to grow towards higher standards in their domain. And Thank you so much for letting me be a part of your long Journey.",
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
            "Self - Employed with no income but passion. Slowly growing with growing community. Will create better tutorials in future.",
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
            "Specialized in the skill of Social Marketing | Increased the Communities Interaction from users by 25% | Managed to Complete the work in due-date | Developed time management skills.",
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
            "Professional work | Real time Exposure to Industry | Made Presentations and developed the skill of Professional level Resource Management.",
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
            "Got the award of Best App Developer and Won the Hackathon competition through leading a team.",
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
            "Designed Front End of the website and Improved user Interface of the website without a team",
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
            "Had been a Great experience volunteering in this event Village Ticket,it is a event to showcase village traditions and its natural aspects. Raised the funds and been a Active member throughout the event.",
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
            "Designed Front End of the website and Improved user Interface of the website without a team",
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
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
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
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Full Stack, ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
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
    title: "Home Phone",
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
