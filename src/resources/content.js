const person = {
  firstName: "M ABDUL",
  lastName: "GHOFUR",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "IoT Engineer",
  avatar: "/images/avatar.jpg",
  email: "abdulghofur0940@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Indonesia", "Java"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/algar12",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/gopungs1/",
  },
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://www.linkedin.com/company/once-ui/",
  // },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@gopungs1",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/IMG_0273.JPG",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Connecting sensors to systems—bridging the physical and digital worlds</>,
  featured: {
    display: true,
    title: <>Featured project: <strong className="ml-4">Air.Guard</strong></>,
    href: "/work/air-guard-gas-monitoring",
  },
  subline: (
    <>
      I'm Ghofur, an IoT Engineer and Full-Stack Developer specializing in ESP8266, Laravel, React, and ML.
      <br /> Building smart systems from embedded sensors to cloud dashboards, with expertise in real-time monitoring and automation.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ghofur is a Bojonegoro-based IoT engineer with a passion for turning real-world problems into smart,
        connected solutions. His work bridges embedded systems, cloud integration
        and the intersection of hardware and software.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FREELACE",
        timeframe: "2023 - Present",
        role: "Junior IoT Engineer",
        achievements: [
          <>
            Developed and deployed an IoT-based monitoring system using ESP8266 and Laravel, reducing manual checks by 60%.
          </>,
          <>
            Integrated MQTT and HTTP protocols for real-time data transmission between devices and cloud, improving system responsiveness by 35%.
          </>,
          <>
            Collaborated on Smart Garden automation, enabling remote control of pumps and sensors, and improved soil moisture efficiency.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Screenshot from 2025-06-05 08-59-03.jpg",
            alt: "IOT Project",
            width: 16,
            height: 9,
          },
        ],
      },
      // {
      //   company: "Creativ3",
      //   timeframe: "2018 - 2022",
      //   role: "Lead Designer",
      //   achievements: [
      //     <>
      //       Developed a design system that unified the brand across multiple platforms, improving
      //       design consistency by 40%.
      //     </>,
      //     <>
      //       Led a cross-functional team to launch a new product line, contributing to a 15% increase
      //       in overall company revenue.
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universitas Nahdlatul Ulama Sunan Giri",
        description: <>Studied Sistem Komputer.</>,
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "IoT & Embedded Systems",
        description: <>Membangun sistem monitoring real-time dengan ESP8266, sensor MQ-2/DHT22, dan integrasi Firebase/MQTT untuk komunikasi perangkat.</>,
        images: [
          {
            src: "/images/projects/project-01/Screenshot from 2025-06-05 08-59-03.jpg",
            alt: "IoT Monitoring Dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Machine Learning",
        description: <>Mengembangkan model Computer Vision dengan TensorFlow/Keras untuk klasifikasi gambar, data augmentation, dan optimasi performa model.</>,
        images: [],
      },
      {
        title: "Full-Stack Web Development",
        description: <>Expert dalam Laravel + FilamentPHP untuk backend, React + Vite untuk frontend modern, dengan Tailwind CSS untuk styling responsif.</>,
        images: [
          {
            src: "/images/projects/project-01/Screenshot from 2025-06-20 02-17-43.jpg",
            alt: "Laravel Dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Database & DevOps",
        description: <>Mengelola MySQL databases, Firebase Realtime Database, dengan deployment menggunakan Docker untuk scalability.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
