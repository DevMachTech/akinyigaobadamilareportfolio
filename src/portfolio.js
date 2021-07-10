/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Akinyiga's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Akinyiga obadamilare Portfolio",
    type: "website",
    url: "https://github.com/DevMachTech",
  },
};

//Home Page
const greeting = {
  title: "Akinyiga Obadamilare",
  logo_name: "Akinyiga Obdamilare",
  nickname: "Devmachtech",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1FbOPDpD2eS5-c22hq501CK4mzBEcKCbr/view?usp=sharing",
  portfolio_repository: "https://github.com/DevMachTech",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/DevMachTech",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/akinyigaobadamilare/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  //{
  //  name: "YouTube",
  //  link: "https://www.youtube.com/channel/UC53Yt9jbs-JDWaNQJBOC5IA",
  //  fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //  backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  //},
  {
    name: "Gmail",
    link: "mailto:akinyigaobadare@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/akinyigaO",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100007378428087",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  //{
  //  name: "Instagram",
  //  link: "",
  //  fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //  backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  //},
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
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
      ],
    },
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
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
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
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Zindi",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://zindi.africa/users/Akinyiga_Obadamilare_DSN",
    },
    /*  {
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
    },*/
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/politeprogrammer",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Olabisi Onabanjo university",
      subtitle: "B.Sc. in Computer Science",
      logo_path: "school_logo-removebg-preview.png",
      alt_name: "OLABISI ONABANJO",
      duration: "2018 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I have participated in various extra-curricular activate, oe of them is participating at Data Science Nigeria 2019 and 2020 Bootcamp which top 150 participant on kaggle and zindi africa competition were selected from a poll of over 1k",
      ],
      website_link: "https://oouagoiwoye.edu.ng/",
    },
  ],
};

const certifications = {
  certifications: [
    /*{
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },*/
    {
      title: "Managing Machine Learning Projects with Google Cloud",
      subtitle: "- GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5CGBBSF47K52",
      alt_name: "Google Cloud",
      color_code: "#4285F499",
    },
    /*{
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },*/
    {
      title: "Developing AI Applications on Azure",
      subtitle: "- LearnQuest",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/AQDGZTMTABEF",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Microsoft certified Data Fundamental Professional",
      subtitle: "- Satya Nadella",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/18nuHmfbTe6t9vRRrIyAY3chQ_63wwqbo/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Marketing Analytics with Python Track",
      subtitle: "- DataCamp",
      logo_path: "datacamp.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/track/6bfbc0a15b6fd758f501ae84d767e8d6f77a416f",
      alt_name: "Datacamp",
      color_code: "#03EF62",
    },
    {
      title: "Deep Learning for NLP in Python Track",
      subtitle: "- DataCamp",
      logo_path: "datacamp.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/track/3f0212e5b23be5262ea5a8cc8138c77b60f5992c",
      alt_name: "Datacamp",
      color_code: "#03EF62",
    },
    {
      title: "Spatial Data with R Track",
      subtitle: "- DataCamp",
      logo_path: "datacamp.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/track/01ee95155267e02cf1f236bd5d8c7d4892a48d49",
      alt_name: "Datacamp",
      color_code: "#03EF62",
    },
    /* {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },*/
    {
      title: "Marketing Analytics",
      subtitle: "- University of Virgina | Barden School of Business",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/364ZG2PE6MSY",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    /*{
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
    {
      title: "Data Science Nigeria Bootcamp",
      subtitle: "- Data Science Nigeria",
      logo_path: "data science nigeria.png",
      certificate_link:
        "https://drive.google.com/file/d/1l5IZfXzdadVGxeHgok1UBMzzVFB7FIAM/view?usp=sharing",
      alt_name: "DSN",
      color_code: "#FFFFFF",
    },
    {
      title: "Design Thinking and Problem Solving",
      subtitle: "- Data Science Nigeria/AI Common/Technnovation",
      logo_path: "data science nigeria.png",
      certificate_link:
        "https://drive.google.com/file/d/1VFL_JpTarJkk1N_C_8HWSCaQitu0pBjp/view?usp=sharing",
      alt_name: "DSN",
      color_code: "#FFFFFF",
    },
    {
      title:
        "Innovation, Growth and Digital Business Techniques for Building Category-King Companies",
      subtitle: "- Prof. Ndubuisi Ekekwe | Mini-MBA",
      logo_path: "tekedia.png",
      certificate_link:
        "https://drive.google.com/file/d/1nBUejolEB1CmFl_zv5_VV2FjYyeclRJo/view?usp=sharing",
      alt_name: "Mini-MBA",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work, Internship and Volunteership",
      experiences: [
        {
          title: "Data Science Nigeria AI+ Community Lead",
          company: "Data Science Nigeria",
          company_url: "https://www.datasciencenigeria.org/",
          logo_path: "data science nigeria.png",
          duration: "January 2019 - Present",
          location: "Lagos, Nigeria",
          description:
            "Contribute to the vision of Data Science Nigeria at training 1 million AI Talents in 10 years",
          color: "#4285F4",
        },
        {
          title: "Data Science Intern",
          company: "Hypelbase Limited",
          company_url: "",
          logo_path: "hypelbase.jpg",
          duration: "June 2021 - Present",
          location: "Work From Home",
          description: "Data Science Software Solution.",
          color: "#0071C5",
        },
        {
          title: "Competitive Data Scientist",
          company: "Zindi Africa",
          company_url: "https://zindi.africa/",
          logo_path: "zindi logo.png",
          duration: "September 2019 - Present",
          location: "Cape Town, South Africa",
          description: "Participation at zindi africa competitions.",
          color: "#fc1f20",
        },
        {
          title: "Competitive Data Scientist",
          company: "Kaggle",
          company_url: "https://www.kaggle.com/",
          logo_path: "kaggle.png",
          duration: "September 2019 - Present",
          location: "	San Francisco, United States",
          description: "Participation at kaggle competitions.",
          color: "#20BEFF",
        },
      ],
    },
    /*{
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Hypelbase Limited",
          company_url:
            "",
          logo_path: "intel_logo.jpg",
          duration: "June 20121 - Present",
          location: "Work From Home",
          description:
            "Data Science Software Solution.",
          color: "#0071C5",
        },
      ],
    },*/
    /*{
      title: "Volunteerships",
      experiences: [
        {
          title: "Data Science Nigeria AI+ Community Lead",
          company: "Data Science Nigeria",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "January 2019 - Present",
          location: "Lagos, Nigeria",
          description:
            "Contribute to the vision of Data Science Nigeria at training 1 million AI Talents in 10 years",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },*/
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "akiprofile-pic.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://akinyigaobadamilare.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "No 10, Fatai Olokoga Street, Ikorodu Lagos, Nigeria",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/qCsEzCoWzoJd29NB7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+234 8085599131",
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
