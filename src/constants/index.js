import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  MedicalPager,
  ImageGeneretingAi,
  Zoom,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content writter",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Front-end web developement",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      " I can create visually appealing and functional websites that meet the needs of clients and users.",
      "I can create engaging user experiences that keep users coming back to your website.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I can optimize your website for search engines, making it easier for users to find you online.",
    ],
  },
  {
    title: "Back-end web developemnt",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "I can design and manage databases using MySQL and MongoDB",
      " I can optimize your website's performance by improving database queries, caching, and other techniques.",
      "I can integrate payment gateways such as Stripe to enable online transactions.",
      " I can design and implement solutions that ensure your website is scalable and highly available, even during peak traffic periods.",
    ],
  },
  {
    title: "React developement",
    iconBg: "#E6DEDD",
    points: [
      "Developing user interfaces using React components",
      "Creating responsive and mobile-friendly designs using CSS frameworks like Bootstrap or Material UI",
      " Providing maintenance and support for existing React applications",
      "Integrating React with other technologies such as Redux and Node.js",
    ],
  },
  {
    title: "Content Writting",
    iconBg: "#383E56",
    points: [
      " I can write website content that is informative, engaging, and optimized for search engines.",
      "I can write email marketing campaigns that are persuasive and optimized for conversions.",
      "I can write engaging blog posts that are informative and shareable.",
      "I can write product descriptions that are informative, persuasive, and optimized for search engines.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      " He was able to take my ideas and turn them into a beautiful, functional website that exceeded my expectations",
    name: "Natnael Birhanu",
    designation: "Automated Tester",
    company: "Kaiser Permanente",
    image:
      "https://media.licdn.com/dms/image/C4D03AQFDpeFp3TDGZg/profile-displayphoto-shrink_200_200/0/1640174574841?e=1687996800&v=beta&t=bKMpzH5zAX6M2ZqNPkdqCWcRcz5R162Zgwkdmg367WU",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tewodros does.",
    name: "Natnael Guchima",
    designation: "QA Tester",
    company: "Kaiser Permanente",
    image:
      "https://www.upwork.com/profile-portraits/c1lMyQcWm-2C9D8i4w4_2j7wh--qXMqkXXRkuX10obSGdygZ3a2XSt8_E4TN7XCi9o",
  },
  {
    testimonial:
      "Working with Tewodros was an absolute pleasure. Their dedication and expertise in web development truly shone through in the final product. Thank you for your hard work and commitment to excellence!",
    name: "Kedir Nasir",
    designation: "Full-stack web developer",
    company: "Evangadi Tech",
    image:
      "https://media.licdn.com/dms/image/D4E03AQEf1SKhVksQcA/profile-displayphoto-shrink_200_200/0/1682688142544?e=1687996800&v=beta&t=EF4ews1Rlesc8_N34L0W0NGLPPkFKm4zfvxXCoh8udU",
  },
];

const projects = [
  {
    name: "Medical Pager",
    description:
      "The website features a real-time chat system that enables medical personnel to communicate with each other instantly. In addition, the platform also offers SMS messaging using Twilio, which allows users to send and receive text messages from their mobile devices.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: MedicalPager,
    source_code_link: "https://github.com/",
  },
  {
    name: "Amazon-clone",
    description:
      "I have developed a fully functional Amazon clone using React that replicates the core features of the popular e-commerce platform. The website have similar functionalities like offical Amazon website, such as browsing products, adding items to a cart, and making purchases.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },

  {
    name: "Image genereting AI",
    description:
      "I have created a cutting-edge front-end for an image generating AI using React. This AI utilizes state-of-the-art algorithms to generate stunning images with incredible accuracy and detail. Users can interact with the AI to create unique images tailored to their specific needs and preferences.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: ImageGeneretingAi,
    source_code_link: "https://github.com/",
  },
  {
    name: "Apple-clone",
    description:
      "An Apple Clone using React would be a website or application that mimics the design and functionality of Apple's official website. It would be built using the React JavaScript library, which is a popular choice for building interactive user interfaces.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Netflix-Clone",
    description:
      "This website built using the MERN stack. The website have similar functionalities to Netflix. The website is responsive and optimized for different screen sizes, including mobile devices.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Zoom-Clone",
    description:
      "I have developed Zoom Clone which participate two person. It allows users to join meetings with ease chat The user-friendly interface and high-quality video and audio. staying connected has never been easier.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: Zoom,

    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
