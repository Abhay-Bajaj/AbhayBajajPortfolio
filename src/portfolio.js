// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/RefreshAnimation"; // refresh screen animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Abhay Bajaj",
  title: "Hi all, I'm Abhay.",
  subTitle: (
    "A Software Engineer passionate about building useful technology, solving challenging problems, and creating reliable software across a variety of platforms and technologies."
  ),
  resumeLink: "https://docs.google.com/document/d/1drln7fSJH_Mvk-paczpZJ0UsbpzjELMxjuw1eu6TAcY/edit?tab=t.0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/abhay-bajaj",
  linkedin: "https://www.linkedin.com/in/abhay-bajaj-391861259/",

  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build intuitive user experiences with a strong focus on usability, performance, and clean design"
    ),
    emoji(
      "⚡ Turn ideas into real products by planning, developing, and iterating on end-to-end solutions"),
    emoji(
      "⚡ Work comfortably across the full development lifecycle, from frontend logic to backend systems"
    ),
    emoji(
      "⚡ Continuously learn and adapt to new tools and technologies to solve real-world problems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "OpenAI",
      fontAwesomeClassname: "fab fa-openai"
    }
  ],
  display: true // Set false to hide this section
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section
  schools: [
    {
      schoolName: "San Francisco State University",
      logo: require("./assets/images/SFSULogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2024 - August 2026",
      desc: "Advanced computer science studies with an emphasis on software development, systems programming, and applied computing.",
      descBullets: [
        "Completed advanced coursework in software development, data structures, operating systems, databases, and web development.",
        "Built experience across full-stack development, systems programming, and software engineering through academic projects.",
        "Strengthened analytical and problem-solving skills through calculus, linear algebra, probability, statistics, and physics."
      ]
    },
    {
      schoolName: "Las Positas College",
      logo: require("./assets/images/LPCLogo.png"),
      subHeader: "Associate of Arts in Computer Science",
      duration: "August 2021 - May 2024",
      desc: "Built a strong foundation in computer science and mathematics through core programming, theory, and problem-solving coursework.",
      descBullets: [
        "Completed foundational coursework in programming, data structures, discrete mathematics, and computer architecture.",
        "Built a strong foundation in algorithmic thinking, debugging, calculus, and linear algebra.",
        "Developed problem-solving and logical reasoning skills through programming and mathematics coursework."
      ]
    }
  ]
};

// Top proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend & APIs",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming & CS Foundations",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud, DevOps & Tools",
      progressPercentage: "75%"
    }
  ],
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Tech Fellow - TIP102",
      company: "CodePath",
      companylogo: require("./assets/images/codepath.webp"),
      date: "May 2026 – September 2026",
      descBullets: [
        "Supported 400+ students in CodePath's Intermediate Technical Interview Prep program through live breakout sessions, debugging, and technical guidance.",
        "Guided students through data structures, algorithms, and HackerRank coding problems while troubleshooting technical issues and collaborating with instructors and fellow Tech Fellows."
      ]
    },
    {
      role: "AI Engineering Fellow",
      company: "Handshake AI",
      companylogo: require("./assets/images/HandshakeLogo.jpg"),
      date: "December 2025 – February 2026",
      descBullets: [
        "Evaluated 500+ large language model outputs using structured rubrics and test cases, identifying hallucinations, reasoning errors, edge cases, and inconsistent behavior across complex evaluation scenarios.",
        "Documented recurring failure patterns and summarized technical findings to improve evaluation consistency, support model-quality analysis, and inform prompt and test-case refinement."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Reality AI Labs",
      companylogo: require("./assets/images/RealityAILogo.jpeg"),
      date: "February 2025 – August 2025",
      descBullets: [
        "Developed and debugged Python backend services, REST APIs, Redis workflows, and cloud-deployed AI integrations, supporting reliable application functionality, data processing, and system communication.",
        "Built full-stack features using React, Next.js, Node.js, and Firebase while troubleshooting performance issues, integrating AI functionality, and improving application responsiveness and user experience."
      ]
    }
  ]
};

/* Open Source Section to view my github pinned projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Big projects I have worked on
const bigProjects = {
  title: "Big Projects",
  // subtitle: "SOME PROJECTS I CODED",
  projects: [
    {
      // image: require("./assets/images/"),
      projectName: "GatorBazaar",
      projectDesc: "Full-Stack Marketplace Platform",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Abhay-Bajaj/GatorBazaar"
        }
      ]
    },
    {
      // image: require("./assets/images/"),
      projectName: "Exploding Kittens",
      projectDesc: "Interactive strategy card game",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Abhay-Bajaj/ExplodingKittens"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle: "",

  achievementsCards: [
    {
      title: "",
      subtitle: "",
      // image: require("./assets/images/"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: ("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "abhaybajaj2003@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  resumeSection
};
