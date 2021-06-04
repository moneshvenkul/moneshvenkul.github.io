/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Monesh Venkul's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Monesh Venkul Portfolio",
    type: "website",
    url: "http://MoneshVenkul.com/",
  },
};

//Home Page
const greeting = {
  title: "Monesh Venkul Vommi",
  logo_name: "MoneshVenkul",
  nickname: "monesh_venkul",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1rKYhmrP3m9oNZg1RrqqtHCPnBgt0hZOf/view?usp=sharing",
  portfolio_repository: "https://github.com/moneshvenkul",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/moneshvenkul",
  // linkedin: "https://www.linkedin.com/in/monesh-venkul-vommi-8a80b6174/",
  // gmail: "MoneshVenkul98@gmail.com",
  // gitlab: "https://gitlab.com/MoneshVenkul98",

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
  {
    name: "Udemy",
    link: "https://www.udemy.com/user/monesh-venkul-vommi2/",
    fontAwesomeIcon: "fas fa-chalkboard-teacher", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#EC5252", // Reference https://simpleicons.org/?q=instagram
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
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
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
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
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/mvvenkul",
    },
    {
      siteName: "Guvi",
      iconifyClassname: "vs:g-square",
      style: {
        color: "#339933",
      },
      profileLink: "https://www.guvi.in/mvvenkul",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "logos:udemy",
      style: {
        color: "",
      },
      profileLink: "https://www.udemy.com/user/monesh-venkul-vommi2/",
    }
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/monesh_venkul",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "https://codeforces.com/profile/Monesh_Venkul",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@MoneshVenkul",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/mvvenkul",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sathyabama Institute of Science and Technology",
      subtitle: "B.Tech. CSE in Computer Engineering",
      logo_path: "college_logo.png",
      alt_name: "Sathyabama University in Chennai",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, IoT, ML etc.",
        "⚡ Apart from this, I have done courses on Augmented Reality, Cyber Security, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for many Selective Programmes which is given to top 10% of students in college. I have received appreciation from respected director for consistently best performance in academics.",
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
      certificate_link:
        "https://learndigital.withgoogle.com/link/1tb5mplmosg",
      alt_name: "Google Certificate",
      color_code: "#0C9D5899"
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
      certificate_link:
        "https://www.hackerrank.com/certificates/ac6ae2d31bb8",
      alt_name: "Javascript Hackerrank",
      color_code: "#1F70C199",
    },
    {
      title: "Problem Solving (Intermediate)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/186dc9c7e36a",
      alt_name: "Problem Solving Hackerrank",
      color_code: "#D83B0199",
    },
    {
      title: "React JS",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/ef906dcaee86",
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
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Full Stack Developer, Designer and Software Developer. I have also worked with some well established companies mostly as Full Stack Developer. I love organising events and that is why I am also involved with many opensource communities and also as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full Stack Software Engineer",
          company: "HCL Technologies",
          company_url: "https://www.hcltech.com/",
          logo_path: "hcl.png",
          duration: "August 2020 - PRESENT",
          location: "Bengaluru, Karnataka",
          description:
            "My role is to develop complete front end, back end projects i.e., a Full Stack Software Developer.",
          color: "#0879bf",
        },
        {
          title: "Technical Instructor",
          company: "Udemy",
          company_url: "https://www.udemy.com/user/monesh-venkul-vommi2/",
          logo_path: "udemy.png",
          duration: "December 2018 - July 2020",
          location: "Vizag, AndhraPradesh",
          description:
            `Total students: nearly 30,000
            My courses: Learn Hacking and use mobile as a hacking machine, Hacking wifi 100%
            works evil twin attack, Learn Python from Zero to Professional with Projects.
            `,
          color: "#9b1578",
        },
        {
          title: "Full Stack Web Developer",
          company: "Service4StartUp",
          company_url: "https://www.linkedin.com/company/service4startup/about/",
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
          company_url: "https://www.youtube.com/channel/UCRQ77SxTf4WRoJEO6YNPakA",
          logo_path: "youtube.png",
          duration: "December 2018 - August 2020",
          location: "Chennai, TamilNadu & Vizag, AndhraPradesh",
          description: "Self - Employed with no income but passion. Slowly growing with growing community. Will create better tutorials in future.",
          color: "orange",
        },
        {
          title: "Social Media Marketing Specialist",
          company: "mLearning Community",
          company_url: "http://www.m-learning.in/",
          logo_path: "mlearning.jpg",
          duration: "June 2018 - July 2018",
          location: "Chennai, TamilNadu",
          description: "Specialized in the skill of Social Marketing | Increased the Communities Interaction from users by 25% | Managed to Complete the work in due-date | Developed time management skills.",
          color: "blue",
        },
        {
          title: "Enterprise Resources Planning Developer",
          company: "Steel Plant",
          company_url: "https://www.vizagsteel.com/index.asp",
          logo_path: "steelplant.png",
          duration: "April 2018 - May 2018",
          location: "Chennai, TamilNadu",
          description: "Professional work | Real time Exposure to Industry | Made Presentations and developed the skill of Professional level Resource Management.",
          color: "black",
        },
        {
          title: "App Developer",
          company: "Learnorama",
          company_url: "",
          logo_path: "learnorama.jpg",
          duration: "December 2017 — January 2018",
          location: "Chennai, TamilNadu",
          description: "Got the award of Best App Developer and Won the Hackathon competition through leading a team.",
          color: "pink",
        },
        {
          title: "Front End Web Developer",
          company: "Different Hair",
          company_url: "",
          logo_path: "differenthair.jpeg",
          duration: "July 2017 — September 2017",
          location: "Chennai, TamilNadu",
          description: "Designed Front End of the website and Improved user Interface of the website without a team",
          color: "green",
        },
        
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Web Developer",
          company: "Service4StartUp",
          company_url: "https://www.linkedin.com/company/service4startup/about/",
          logo_path: "service4startup.jfif",
          duration: "December 2018 - March 2019",
          location: "Chennai, TamilNadu",
          description:
            "My Internship role is to create a Web-based Product. Built a standalone Web Product through leading a team. We had many difficulties at first but we made a software development approach to identify the problems and solved the errors in the product. We also improved the efficiency of the website by overall 25% through Web-Optimization. This was an amazing opportunity to prove myself as a web developer. This internship has really boosted my skills. It had been great working with Service4Startup. They are very cooperative, encouraging and patient towards my work and myself. I heartily wish the company to grow towards higher standards in their domain. And Thank you so much for letting me be a part of your long Journey.",
          color: "#fc1f20",
        },
        {
          title: "Social Media Marketing Specialist",
          company: "mLearning Community",
          company_url: "http://www.m-learning.in/",
          logo_path: "mlearning.jpg",
          duration: "June 2018 - July 2018",
          location: "Chennai, TamilNadu",
          description: "Specialized in the skill of Social Marketing | Increased the Communities Interaction from users by 25% | Managed to Complete the work in due-date | Developed time management skills.",
          color: "blue",
        },
        {
          title: "Enterprise Resources Planning Developer",
          company: "Steel Plant",
          company_url: "https://www.vizagsteel.com/index.asp",
          logo_path: "steelplant.png",
          duration: "April 2018 - May 2018",
          location: "Chennai, TamilNadu",
          description: "Professional work | Real time Exposure to Industry | Made Presentations and developed the skill of Professional level Resource Management.",
          color: "black",
        },
        {
          title: "App Developer",
          company: "Learnorama",
          company_url: "",
          logo_path: "learnorama.jpg",
          duration: "December 2017 — January 2018",
          location: "Chennai, TamilNadu",
          description: "Got the award of Best App Developer and Won the Hackathon competition through leading a team.",
          color: "pink",
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
          description: "Designed Front End of the website and Improved user Interface of the website without a team",
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
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure and web servers.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "MyPic.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Educational Channel",
    subtitle:
      "For individual fundamental empowerment, I like to make powerful video lessons that create impact on each of the reader individually to change the core of their character and their carrer development.",
    link: "https://www.youtube.com/channel/UCRQ77SxTf4WRoJEO6YNPakA",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Flat No: 104 Ramsan Estate Apartments, Ramnagar, Visakhapatnam 530002 ",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/ZxMHxRZ2Ai8sc52DA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7989283721",
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
  contactPageData,
};
