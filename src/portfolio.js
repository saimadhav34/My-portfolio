/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Madhav's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Madhav Portfolio",
    type: "website",
    url: "http://Madhav.com/",
  },
};

//Home Page
const greeting = {
  title: "Sai Madhav",
  logo_name: "madhav", 
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1ISfxfgDesnmt2ObqABIe_HUspQQLdQuf/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/saimadhav34",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/r00pasri1",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "saimadhav3414@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/saimadhav34",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sai-madhav-nampally-608468339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:saimadhav3414@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

];

const skills = {
  data: [

    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
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
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building machine learning models using Python and Scikit-learn",
        "⚡ Applying AI techniques for data prediction and analysis",
        "⚡ Deploying AI models using cloud infrastructure"
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB"
          }
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E"
          }
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458"
          }
        },
        {
          skillName: "Cloud AI Tools",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          },
        },
      ],
    },
    
    {
      title: "Prompt Engineering",
      fileName: "DesignImg",
      skills: [
        "⚡ Crafting optimized prompts for AI models to enhance response accuracy",
        "⚡ Developing tools for automatic prompt optimization",
        "⚡ Integrating prompt engineering techniques into web applications and machine learning workflows"
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB"
          }
        },
        {
          skillName: "AI Model APIs",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#412991"
          }
        },
        {
          skillName: "LLM Interaction",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688"
          }
        },
        {
          skillName: "Prompt Optimization Tools",
          fontAwesomeClassname: "simple-icons:dialogflow",
          style: {
            color: "#FF9800"
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
      profileLink: "https://leetcode.com/u/madhav07c//",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/saimadhav3414",
    },
    
  
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vaagdevi college of engineering",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "vaagdevi.png",
      alt_name: "vaagdevi",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ Currently pursuing a B.Tech in CSE with coursework in machine learning and data analytics",
    "⚡ Proficient in programming languages like Python and Java, with practical experience in developing machine learning models",
    "⚡ Strong problem-solving skills developed through academic projects and practical machine learning applications",
    "⚡ Experienced in data preprocessing, feature engineering, and model training using libraries like Scikit-learn and Pandas",
    "⚡ Knowledgeable in deploying ML models and integrating them into full-stack applications"
      ],
      website_link: "https://www.vaagdevi.edu.in/",
      },
    {
      title: "shine junior college",
      subtitle: "M.P.C. in Intermediate",
      logo_path: "shine.png",
      alt_name: "Jawahar Navodaya vidyalaya",
      duration: "2019 - 2021",
      descriptions: [
        "⚡  I completed my Intermediate in M.P.C. at shine junior college with 83%.",
        "⚡  Studied core subjects including Mathematics, Physics, and Chemistry with a strong focus on problem-solving and analytical skills.",
        "⚡ Achieved consistent academic excellence and received recognition for outstanding performance in academics.",
      ],
      website_link: "https://shinejuniorcolleges.com/",
    }, 
   
  ],
};

const certifications = {
  certifications: [
    {
      title: "web development",
      subtitle: "- free codecamp",
      logo_path: "free web.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/fcccbdc98b9-58e8-413e-8530-caefd3e080f5/responsive-web-design",
      alt_name: "free code camp",
      color_code: "#0a0a23",
    },
    {
      title: "java script",
      subtitle: "- free codecamp",
      logo_path: "free web.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/fcccbdc98b9-58e8-413e-8530-caefd3e080f5/javascript-algorithms-and-data-structures-v8",
      alt_name: "free code camp",
      color_code: "#0a0a23",
    },
   
    {
      title: "Data visualization ",
      subtitle: "-Forage",
      logo_path: "tata.png",
      certificate_link:
        "https://drive.google.com/file/d/1mngxip8cmSGrhKULb-DQAjiXr3Ss-I0n/view?usp=drive_link",
      alt_name: "data analytics",
      color_code: "#FFF",
    },
    {
      title: "Cyber security",
      subtitle: "-Forage",
      logo_path: "mastercard.png",
      certificate_link:
        "https://drive.google.com/file/d/1kd9JfXkDvCnoa-wgibdwfZmZTPCE28hz/view?usp=drive_link",
      alt_name: "cyber security",
      color_code: "#efefea",
    },
    {
      title: "linux",
      subtitle: "vois",
      logo_path: "vois.png",
      certificate_link:
        "https://drive.google.com/file/d/1zU8LuP6Kv6__Mo74nOgfCyp5kpMtGtqR/view?usp=drive_link",
      alt_name: "cyber security",
      color_code: "#FFF",
    },
    {
      title: "Generative AI",
      subtitle: "ORACLE",
      logo_path: "ORACLE.png",
      certificate_link:
        "https://drive.google.com/file/d/1cSVkVZjPfPrF4vMTkLlqgpes-8G0RrfB/view?usp=drive_link",
      alt_name: "cyber security",
      color_code: "#FFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Freelance works ",
  description:
    "I am a Frontend Developer with experience in freelance projects, specializing in creating user-centric, visually engaging web pages. I have worked on various content creation platforms, including managing an Instagram page focused on series and sitcoms, where I successfully grew engagement through optimized content strategies and editing. Additionally, I have experience as a Video Editor for YouTube channels and a gym app, producing instructional videos that enhance user experience. I am highly skilled in meeting tight deadlines, handling multiple projects simultaneously, and delivering high-quality work under pressure.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Freelance Projects",
      work: true,
      experiences: [
        {
          title: "Social media manager",
          company: "social media manager",
          company_url: "",
          logo_path: "insta.png",
          duration: "april 2024 - july 2024",
          location: "Hyderabad,Telangana",
          description:
          "Worked as a Social Media Manager, focusing on increasing followers and engagement by implementing content strategies, analyzing user data, and designing visually appealing posts to improve user interaction."
        ,
          
          color: "#000000",
        },
        {
          title: "Video editor",
          company: "Good to grab more",
          company_url: "https://www.instagram.com/goodtograb_?igsh=cGNpaG9lZnphMjl4",
          logo_path: "goodto.png",
          duration: "June 2024 - july 2024",
          location: "Hyderabad, Telangana",
          description:
            "Worked as a Freelance Video Editor, creating high-quality edits for a personal page, demonstrating technical proficiency with editing tools and building a consistent brand identity that enhanced audience engagement",
          color: "#0879bf",
        },
        {
          title: "video editor",
          company: "Free lancing",
          company_url: "https://fitpass.co.in/studio/dream-fitness-nagaram",
          logo_path: "dreamfit.png",
          duration: "Jan 2024 - March 2024",
          location: "HYDERABAD, INDIA",
          description:
            "Worked as a Video Editor for a gym app, producing high-quality instructional videos showcasing correct exercise techniques and movements. Collaborated closely with fitness trainers to ensure accuracy and clarity in visual content, aligning with the app's user-focused approach. Maintained a consistent brand style while optimizing video formats for seamless integration into the app. Successfully managed multiple projects simultaneously, ensuring all videos were delivered within tight deadlines",
          color: "#9b1578",
        },
        {
          title: "Editor",
          company: "https://www.instagram.com/peru_gurthundi__kada?igsh=MXNrdXp6bXlsd28xYw==",
      
          logo_path: "pgk.png",
          duration: "APRIL 2021 - PRESENT",
          location: "Warangal, Hyderabad",
          description:
            "Managed an Instagram Edits Page focused on series and sitcoms, where I created visually engaging, fan-driven content to attract and maintain a growing audience. Demonstrated creativity and a deep understanding of popular culture trends while editing clips to enhance storytelling. Developed a unique, consistent editing style to align with the target audience, increasing engagement through well-timed posts and effective",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
       
        {
          title: " DATA ANALYTICS USING AI-LLMS",
          company: "Eduskills",
          company_url:
            "https://eduskillsfoundation.org/login/",
          logo_path: "eduskills.png",
          duration: "SEP 2024 - NOV 2024",
          description:
            "Gained expertise in applying AI-driven language models for data analysis, enhancing the ability to extract insights from complex datasets and support data-driven decision-making for analytics tasks.",
          color: "#0071C5",
        },
        {
          title: " AI INTERN- TECHSAKSHAM",
          company: "AICTE",
          company_url:
            "https://eduskillsfoundation.org/login/",
          logo_path: "eduskills.png",
          duration: "NOV 2024 - DEC 2024",
          description:
            "– Gained hands-on experience in AI technologies, applications, and methodologies, enhancing skills in problemsolving, data analysis, and innovative tech solutions",
          color: "#0071C5",
        },
      
      ],
    },
   
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I am a dedicated developer with expertise in web and app development, specializing in creating responsive and interactive user interfaces. My experience includes full-stack development, backend integration, and deploying secure, user-friendly platforms. I have strong knowledge of authentication systems, cloud integration, and database management. With a passion for solving real-world problems, I excel in designing innovative, user-focused solutions. My work reflects proficiency in modern development tools and technologies.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "My page",
  description: "https://www.instagram.com/peru_gurthundi__kada?igsh=MXNrdXp6bXlsd28xYw==",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "peru gurthundi kada",
      createdAt: "2021",
      description: "",
      url: "https://www.instagram.com/peru_gurthundi__kada?igsh=MXNrdXp6bXlsd28xYw==",
    },
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "proj.png",
    description:
      "I am Madhav, a passionate developer with expertise in full-stack web and mobile app development. I have strong skills in creating responsive user interfaces, backend integration, and deploying secure, scalable applications. My domain knowledge includes authentication systems, database management, and cloud integration, with a focus on delivering user-centric solutions. Additionally, my freelancing experience has honed my ability to meet deadlines and handle project pressure effectively. I am dedicated to leveraging modern technologies to design innovative platforms while continuously expanding my expertise.",
  },
  blogSection: {
    title: "Instagram page",
    subtitle:
      "My instagram page",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "phone",
    subtitle: "",
    locality: "WARANGAL",
    country: "INDIA",
    region: "TELANGANA",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/S9kWGn9Lh6KcfpNt9",
  },
  phoneSection: {
    title: "7842138904",
    subtitle: "",
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
