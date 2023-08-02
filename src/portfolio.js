/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nguyen Van Loc",
  description:
    "A third-year student with passion on Artificial Intelligence and Data Science",
  og: {
    title: "Nguyen Van Loc's Portfolio",
    type: "website",
    url: "https://nguyenvanloc.online/",
  },
};

//Home Page
const greeting = {
  title: "Nguyen Van Loc",
  logo_name: "NguyenVanLoc",
  nickname: "Penguin",
  subTitle:
    "I am currently a final-year student at University of Science, VNU-HCM, and Python Developer at Saritasa Vietnam.",
  resumeLink:
    "https://drive.google.com/file/d/1y1pZ9hamM3hO6gMTJH6mEtGJgTSAUCn6/view?usp=sharing",
  portfolio_repository: "https://github.com/vanloc1808/vanloc1808.github.io",
  githubProfile: "https://github.com/vanloc1808",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "GitHub",
    link: "https://github.com/vanloc1808",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vanloc1808/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCzKteQG-EbtXQcYGx7Q4_tA",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:vanloc1808@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/vanlocO19180802/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vanloc1808/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Currently learning about Machine Learning, Deep Learning and Data Science",
        "⚡ Beginning some small projects on Data Science and AI",
      ],
      softwareSkills: [
        {
          skillName: "Jupyter Notebook",
          fontAwesomeClassname: "logos-jupyter",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
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
      title: "Software Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Backend Development with Django and Django REST Framework",
        "⚡ Building some small websites with HTML, CSS, and ReactJS (including this website...)",
        "⚡ Mobile Application Development with Java and Android Studio",
        "⚡ Have some school projects with C++ and Python (please check the Projects section)",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "file-icons:c",
          style: {
            color: "#3333FF",
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
          skillName: "Django",
          fontAwesomeClassname: "vscode-icons:file-type-django",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "skill-icons:java-light",
          style: {
            color: "#3333FF",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "mdi:android-studio",
          style: {
            color: "#E34F26",
          },
        },
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
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/vanloc1808",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://leetcode.com/vanloc1808/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/vanloc1808",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "University of Science, Vietnam National University, Ho Chi Minh City",
      subtitle: "Bachelor in Information Technology, Honours Program",
      logo_path: "hcmus_logo.png",
      alt_name: "HCMUS",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Object-Oriented Programming, Data Structures and Algorithms, Computer Systems, Database Management Systems, Computer Networks, Operating Systems etc.",
        "⚡ Apart from this, I have done online courses on Machine Learning, Data Science.",
      ],
      website_link: "https://hcmus.edu.vn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "dlai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/K9MW3KYRFFZR",
      alt_name: "DeepLearning.AI",
      color_code: "#8C151599",
    },

    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "dlai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/VHKCRT38MNFE",
      alt_name: "DeepLearning.AI",
      color_code: "#8C151599",
    },

    {
      title: "Data Science",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/VA25F52RCVC9",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },

    {
      title: "Programming with Google Go",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/K9MW3KYRFFZR",
      alt_name: "DeepLearning.AI",
      color_code: "#8C151599",
    },

    {
      title: "Writing in the Sciences",
      subtitle: "Kristin Sainani",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/CLD23RCC4TXN",
      alt_name: "Stanford University",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Outdor Activities",
  description: "I am currently Python Developer at Saritasa Vietnam.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Python Developer",
          company: "Saritasa Vietnam",
          company_url: "https://www.saritasa.vn/",
          logo_path: "saritasa_logo.png",
          duration: "June 2023 - PRESENT",
          location: "Ho Chi Minh City",
          description:
            "Back-end development with Django, and mainly with Django REST Framework. Build APIs that meet the specification of OpenAPI, implement unit tests, and write documentation for the APIs.\nFamiliar with Postmain and Swagger.",
          color: "#0879bf",
        },
        {
          title: "Python Developer Intern",
          company: "Saritasa Vietnam",
          company_url: "https://www.saritasa.vn/",
          logo_path: "saritasa_logo.png",
          duration: "March 2023 - May 2023",
          location: "Ho Chi Minh City",
          description:
            "Be trained with core Python modules and Django development, moreover with GitHub flow, Jira, Postman, and other skills. Build a project with Django and Django REST Framework.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Outdoor Activities",
      experiences: [
        {
          title: "Le Quy Don Olympia Club",
          company: "Le Quy Don High School for Gifted Students",
          company_url: "https://www.facebook.com/lqdolympiaclub",
          logo_path: "lqd_logo.png",
          duration: "September 2021 - PRESENT",
          location: "Vung Tau City",
          description:
            "I am currently the academic consultant for the club. I am responsible for the club's academic information and questions on competitions, such as Le Quy Don Road to Mount Olympia Competition.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "These are projects that I have done for school subjects and online courses.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have written a paper on Mathematical Formulas Detection project, publicated in the 13rd Conference of University of Science, VNUHCM.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name:
        "A Deep Learning Method for Mathematical Formulas Detection in PDF Documents",
      finishedIn: "Jun 2022",
      publishedOn:
        "Nov 22 2022 in VNUHCM University of Science 13rd Conference",
      description:
        "In this paper, we provide a deep learning method to detect mathematical formulas in scientific PDF documents. This task is quite different from the extraction of mathematical expressions in images. The task of mathematical formulas detection has three main challenges: a large scale span, a large variation of the ratio between the width and the height, and a rich character set and mathematical expressions. Considering these challenges, we use Faster R-CNN, a real-time object detection model, with ResNet50, and a suitable level of Feature Pyramid Network. Our model is trained, tested, and evaluated on the IBEM dataset and provides significant results on both embedded and isolated formulas.",
      url:
        "https://github.com/vanloc1808/HCMUS-Research-Methods/blob/main/paper/main.pdf",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "nvl.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://vanloc1808.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Ho Chi Minh City, Vietnam",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/d/u/0/viewer?msa=0&mid=1IPp8JEozOseXcZ42sTJnOFhuxhs&ll=10.779296088039567%2C106.6803705&z=13",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+84 905481342",
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
