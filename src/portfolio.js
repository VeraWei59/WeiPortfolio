/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Wei's Portfolio",
  description:
    " I am a Master’s graduate in finance and accounting, based in the UK, with one year of experience in the financial services sector. I am now seeking to take the next step in my career, leveraging my expertise to drive value and contribute to business growth.",
  og: {
    title: "Wei Zhao Portfolio",
    type: "website",
    url: "https://verawei59.github.io/home",
  },
};

//Home Page
const greeting = {
  title: "Wei Zhao",
  logo_name: "Wei Zhao",
  nickname: "Wei",
  subTitle:
    "I am a Master’s graduate in finance and accounting, based in the UK, with one year of experience in the financial services sector. I am now seeking to take the next step in my career, leveraging my expertise to drive value and contribute to business growth.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/verawei59",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/verawei59",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/wei-zhao",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:weizhao59@yahoo.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];


const skills = {
  data: [
    {
      title: "Financial Services & Accounting",
      fileName: "FinanceImg",
      skills: [
        "⚡ Proficient in financial data analysis and reporting using tools like Microsoft Excel, Power BI, and SQL.",
        "⚡ Experience in managing client onboarding, resolving queries, and maintaining financial records.",
        "⚡ Strong understanding of regulatory standards and compliance in the financial sector.",
        "⚡ Expertise in using CRM systems to manage client data and support financial products.",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "fa-file-excel",
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "fa-chart-bar",
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "fa-database",
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "fa-chart-pie",
        },
        {
          skillName: "Microsoft Dynamics",
          fontAwesomeClassname: "fa-tachometer-alt",
        },
      ],
    },
    {
      title: "Project Management & Consultancy",
      fileName: "ConsultingImg",
      skills: [
        "⚡ Experienced in financial consultancy projects with a focus on data analysis and strategy development.",
        "⚡ Skilled in performing SWOT analysis for market strategy feasibility.",
        "⚡ Proactive in gathering client feedback to ensure high-quality deliverables.",
        "⚡ Hands-on experience with project management tools and workflows to streamline financial operations.",
      ],
      softwareSkills: [
        {
          skillName: "Jira",
          fontAwesomeClassname: "fa-tasks",
        },
        {
          skillName: "Microsoft Office Suite",
          fontAwesomeClassname: "fa-file-word",
        },
        {
          skillName: "PowerPoint",
          fontAwesomeClassname: "fa-file-powerpoint",
        },
        {
          skillName: "Microsoft Project",
          fontAwesomeClassname: "fa-project-diagram",
        },
      ],
    },
    {
      title: "Technical & Analytical Skills",
      fileName: "TechImg",
      skills: [
        "⚡ Strong command of advanced Excel functions, including PivotTables, VLOOKUPs, and financial modeling.",
        "⚡ Knowledgeable in database management and data analytics tools.",
        "⚡ Adept at using SQL for querying databases and managing large datasets.",
        "⚡ Ability to present data-driven insights using data visualization tools like Power BI and Tableau.",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "fa-file-excel",
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "fa-database",
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "fa-chart-bar",
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "fa-chart-pie",
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
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
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
      profileLink: "http://codeforces.com/profile/layman_brother",
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
      title: "University of Southampton",
      subtitle: "MSc Accounting and Finance",
      logo_path: "southampton_logo.png", // Replace with the actual logo path
      alt_name: "University of Southampton",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ Achieved Distinction in the MSc program with a focus on financial analysis, corporate finance, and international accounting standards.",
        "⚡ Coursework included advanced financial reporting, financial modeling, corporate governance, and investment management.",
        "⚡ Completed a research project on the impact of ESG factors on corporate financial performance."
      ],
      website_link: "https://www.southampton.ac.uk/",
    },
    {
      title: "Jilin University of Finance and Economics",
      subtitle: "BSc Accounting (Dual Degree)",
      logo_path: "jilin_logo.png", // Replace with the actual logo path
      alt_name: "Jilin University of Finance and Economics",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Specialized in financial accounting, taxation, auditing, and business management.",
        "⚡ Participated in a range of financial projects, focusing on financial reporting, investment strategies, and risk management."
      ],
      website_link: "https://www.jlufe.edu.cn/", // Replace with the correct URL if needed
    },
    {
      title: "Charles Sturt University",
      subtitle: "BSc Business Studies (Dual Degree)",
      logo_path: "charles_sturt_logo.png", // Replace with the actual logo path
      alt_name: "Charles Sturt University",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Completed a dual degree program, focusing on core business concepts such as finance, management, marketing, and operations.",
        "⚡ Developed skills in business strategy, financial analysis, and organizational management."
      ],
      website_link: "https://www.csu.edu.au/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Excel: Advanced Formulas and Functions",
      subtitle: "LinkedIn Learning",
      logo_path: "linkedin_logo.png", // Replace with actual logo path
      certificate_link:
        "https://www.linkedin.com/learning/certificates/e79df718d6a45841958cbc7bdb4d021cf21f3f25ecaef711e6ae73a11e4ba3d5", // Update with actual certificate link
      alt_name: "LinkedIn Learning",
      color_code: "#0077B5", // LinkedIn blue
    },
    {
      title: "Corporate Finance: Environmental, Social, and Governance (ESG)",
      subtitle: "LinkedIn Learning",
      logo_path: "linkedin_logo.png", // Replace with actual logo path
      certificate_link:
        "https://www.linkedin.com/learning/certificates/d4c17da352688cc6425cc4a7fdda231ada18d7fc2733ce8885520e1be7ffaa5c", // Update with actual certificate link
      alt_name: "LinkedIn Learning",
      color_code: "#0077B5", // LinkedIn blue
    },
    {
      title: "Excel PivotTables: Mastering PivotTables and PivotCharts",
      subtitle: "LinkedIn Learning",
      logo_path: "linkedin_logo.png", // Replace with actual logo path
      certificate_link:
        "https://www.linkedin.com/learning/certificates/e40c937ec852e3c369254d9ea98cfd2ea52b69066f9765254cebf0e665cf9221", // Update with actual certificate link
      alt_name: "LinkedIn Learning",
      color_code: "#0077B5", // LinkedIn blue
    },
    {
      title: "Wealth and Personal Banking Job Simulation",
      subtitle: "HSBC",
      logo_path: "hsbc_logo.png", // Replace with actual logo path
      certificate_link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/HSBC/JuJuCEGtKKQd8E4NH_HSBC_KNHvqSKXE29eK67Jr_1699185839087_completion_certificate.pdf", // Update with actual certificate link
      alt_name: "HSBC",
      color_code: "#db0011", // HSBC red
    },
    {
      title: "Partial ACCA Qualification",
      subtitle: "ACCA",
      logo_path: "acca_logo.png", // Replace with actual logo path
      certificate_link: "", // If available online, provide a link, otherwise leave empty
      alt_name: "ACCA",
      color_code: "#9B1D20", // ACCA red
    },
  ],
};


// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  description:
    "I have gained experience in financial services, investment management, and consulting roles, developing expertise in financial data analysis, client management, and financial reporting.",
  header_image_path: "experience.svg", // Replace with the path to your header image
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Financial Services Administrator",
          company: "Quilter",
          company_url: "https://www.quilter.com/", // Update with actual link
          logo_path: "quilter_logo.png", // Replace with the actual logo path
          duration: "January 2024 – Present",
          location: "UK",
          description: `
            - Liaise with internal and external stakeholders, including clients, financial advisers, and third-party service providers.
            - Review and process invoices and transactions, ensuring accuracy and compliance with regulatory standards.
            - Manage CRM systems for client data, project tracking, and financial product management.
            - Assist in preparing financial reports and documentation, supporting the advisory team’s objectives.
          `,
          color: "#0077B5", // Company-specific color (if any)
        },
        {
          title: "Financial Assistant",
          company: "Beijing Hanqing International Investment Management Co. Ltd.",
          company_url: "", // Add company URL if available
          logo_path: "hanqing_logo.png", // Replace with actual logo path
          duration: "June 2020 – August 2020",
          location: "Beijing, China",
          description: `
            - Managed financial records, ensuring accurate data entry in accounting systems.
            - Resolved client queries and handled claims efficiently, ensuring smooth financial processes.
          `,
          color: "#D14836", // Custom company color
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Finance and Investment Intern",
          company: "Guodu Securities",
          company_url: "", // Add company URL if available
          logo_path: "guodu_logo.png", // Replace with actual logo path
          duration: "July 2019 – September 2019",
          location: "China",
          description: `
            - Accurately processed invoices into financial systems and handled investor queries.
            - Assisted in preparing materials for meetings and managing investment-related documentation.
          `,
          color: "#fc1f20", // Custom company color
        },
        {
          title: "eXate Student Consultancy Project",
          company: "eXate",
          company_url: "https://www.exate.com/", // Update with actual link
          logo_path: "exate_logo.png", // Replace with actual logo path
          duration: "June 2022 – July 2022",
          location: "Remote",
          description: `
            - Conducted a SWOT analysis to evaluate market strategies and assess their feasibility.
            - Analyzed diverse datasets to develop actionable solutions based on client requirements.
            - Proactively gathered feedback from clients to ensure high-quality reporting.
          `,
          color: "#0077B5", // Custom company color
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
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
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



