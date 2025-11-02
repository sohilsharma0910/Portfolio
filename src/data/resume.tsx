import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sohil Sharma",
  initials: "SS",
  url: "https://github.com/sohilsharma0910",
  location: "Jaipur, India",
  locationLink: "https://www.google.com/maps/place/jaipur",
  description:
    "Full Stack Developer with expertise in the MERN stack, specializing in building scalable and high-performance web applications.",
  summary:
    // "Coming from a non-tech background, I embraced the challenge of learning web development and became a Full Stack Developer with expertise in the MERN stack. Through self-learning, hands-on projects, and continuous exploration, I mastered front-end and back-end technologies. I thrive on solving complex problems, optimizing performance, and building scalable applications. My journey reflects my passion for technology, adaptability, and relentless pursuit of excellence in web development."
    "As a full-stack software developer, I specialize in building real-time, scalable, and secure web applications using the MERN stack with clean, production-ready architecture. With strong proficiency in C++ and JavaScript, I enjoy developing intuitive, reliable systems that balance performance, security, and seamless user experiences. I’ve built and deployed responsive full-stack projects including a real-time location tracker, social and e-commerce platforms, and immersive landing pages. These projects have strengthened my ability to write clean, scalable code and understand the nuances of full-stack architecture and system design. Alongside hands-on development, I have a strong foundation in Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, and Cybersecurity, enabling me to solve complex problems and architect robust solutions. Driven by curiosity and a love for problem-solving, I’m always exploring new technologies and better ways to build impactful software. I’m looking to contribute to meaningful products and collaborate with creative, thoughtful, performance-focused teams that value innovation, user impact, and engineering excellence. Let’s create something exceptional together!!!!",
  avatarUrl: "/pfp.jpg",
  skills: [
    "React",
    "Typescript",
    "Node.js",
    "Mongoose",
    "ExpressJS",
    "MongoDB",
    "Tailwind CSS",
    "PHP",
    "MySQL", 
    "Laravel",
    "Payment Gateway Integration",
    "Socket.Io",
    "Cloudinary",
    "Multer"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sohil.sharma.k1901@gmail.com",
    tel: "+919649691196",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sohilsharma0910",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sohil-sharma-162b5a245/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SohilSharma0910",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@MR.ANIMESH_BHARADWAJ",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Appronic Software Pvt Ltd",
      href: "",
      badges: ['Completed'],
      location: "On-site",
      title: "Full-Stack Web Developer Intern",
      logoUrl: "/faviconV1.png",
      start: "Jan 2025",
      end: "May 2025",
      description:
        // "Full Stack Developer specializing in the MERN stack, building scalable and high-performance web applications. Experienced in React.js, Node.js, Express, and MongoDB, with additional expertise in WordPress backend, bug fixes, and optimizations. Also skilled in PHP, Laravel, and MySQL. Passionate about problem-solving and creating seamless user experiences.",
        "Developed a responsive Admin Dashboard using React.js and Tailwind CSS, ensuring a smooth user experience.  Assisted in backend integration with Node.js, Express.js & MongoDB, supporting API development and database interactions.  Collaborated with the team to refine UI/UX, optimize performance, and conduct code reviews.",
    },
   
  ],
  education: [
    {
      school: "Lovely Professional University",
      href: "https://www.lpu.in/",
      degree: "Master of Compurter Applications (MCA)",
      logoUrl: "/faviconV3.png",
      start: "2025",
      end: "2027",
    },
    {
      school: "JECRC University, Jaipur",
      href: "https://jecrcuniversity.edu.in/",
      degree: "Bachelor of Compurter Applications (BCA)",
      Specialization: "Cloud Computing and Full Stack Development",
      logoUrl: "/faviconV4.png",
      start: "2022",
      end: "2025",
    },
   
  ],
  projects: [
    
    {
      title: "AI Powered Code Reviewer",
      href: "https://ai-powered-code-reviewer-rust.vercel.app",
      dates: "Web Project",
      active: true,
      description:
        "AI-Powered Code Reviewer – Built a web-based code review tool using MERN Stack and [Google Gemini API](https://gemini.google.com/) to analyze code quality, detect errors, and suggest optimizations. Features include real-time feedback, best practices recommendations, and performance improvements for multiple programming languages.",
      technologies: [
        "TailwindCSS",
        'Express JS',
        "React JS",
        "Node JS",
        "Google Gemini's API"
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-powered-code-reviewer-rust.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/AbhishekShrivastav73/AI-powered-code-reviewer",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/ai-powered.png",
      video:
      ""
        // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "My Party Hostess",
      href: "https://mypartyhost-frontend.vercel.app/",
      dates: "Product (Live Project)",
      active: true,
      description:
        "A full-stack MERN-based event management platform that allows users to book and manage events seamlessly. Implemented secure Stripe payments, real-time chat between users and vendors using Socket.IO, and cloud image uploads with Multer + Cloudinary. Designed a responsive and modern UI using React.js & Tailwind CSS, backed by a scalable Node.js + Express.js API and MongoDB for data management.",
      technologies: [
        "React JS",
        "Mongoose",
        "Mongo DB",
        "TailwindCSS",
        "Stripe",
        "Socket.Io",
        "Multer",
        "Cloudinary",
        "Express",
        "Node JS"
      ],
      links: [
        {
          type: "Website",
          href: "https://mypartyhost-frontend.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "/myparty2.png",
      video: "",
    },
    {
      title: "Auth Boilerplate",
      href: "https://www.npmjs.com/package/auth-boilerplate-express",
      dates: "NPM Package",
      active: true,
      description:
        "A lightweight authentication boilerplate for MERN stack applications with JWT-based authentication, role-based access control (RBAC), and easy API setup. Now includes built-in Multer support for file uploads.",
      technologies: [
        "NPM",
        "Mongoose",
        "Express JS",
        "JWT",
        "Bcrypt"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/auth-boilerplate-express",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "/npm-package.png",
      video: "",
    },
    {
      title: "Rejouice Landing Page Clone",
      href: "https://abhishekshrivastav73.github.io/Rejouice/",
      dates: "Frontend Project",
      active: true,
      description:
        "A pixel-perfect clone of the Rejouice agency’s landing page built using HTML, CSS, JavaScript, and GSAP for smooth and interactive animations. Focused on creating fluid transitions, scroll-based effects, and a modern interactive experience that closely replicates the original website’s feel and motion design.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "GSAP",
      ],
      links: [
        {
          type: "Website",
          href: "https://abhishekshrivastav73.github.io/Rejouice/",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "/rejouice.png",
      video: "",
    },
    {
      title: "Dribble UI Clone",
      href: "https://abhishekshrivastav73.github.io/Dribbble-Clone/",
      dates: "Frontend Project",
      active: true,
      description:
        "A visually appealing Dribbble homepage clone created using HTML, CSS, and JavaScript. Recreated the platform’s modern layout, hover animations, and responsive grid system, focusing on pixel-perfect design and smooth user interactions to match the original Dribbble interface.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "GSAP",
      ],
      links: [
        {
          type: "Website",
          href: "https://abhishekshrivastav73.github.io/Dribbble-Clone/",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "/dribble.png",
      video: "",
    },
   
  ],
  hackathons: [
    {
      "title": "REIMAGINE Hackathon",
      "dates": "July 2023",
      "location": "Sheryians Coding School",
      "description": "Competed in all 3 rounds of the REIMAGINE Hackathon, reaching the final stage. Redesigned the NIKE and Xbox websites with modern UI/UX, leveraging GSAP, Three.js, and SASS to create immersive and interactive experiences.",
      "icon": "code",
      "image": "https://your-image-link.com/reimagine-hackathon.png",
      "links": []
    },    
    
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },

  ],
} as const;
