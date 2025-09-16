// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Shivam6388469930', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['shivam/gitprofile', 'shivam/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '🔥 Job Portal using Next.js – Full-Stack Web App',
          description:
            'A modern full-stack job portal built with Next.js, offering seamless job search and recruitment features — complete with role-based user and admin authentication, payment gateway integration, and image management using Cloudinary.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://job-protal-2.vercel.app/',
        },
        {
          title: '🔥 BBLC Libary using Next.js – Full-Stack Web App',
          description:
            'A modern, full-featured student management system for BBLC, built using Next.js, designed to streamline communication and operations between students, admins, and parents. The platform includes separate login/signup panels for users and admins, along with integrated modules for library management, online fee payment, attendance tracking, and a contact system.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
         {
          title: '🔥 Bytecode using Next.js – Full-Stack Web App',
          description:
           'Bytecode Blog is a modern, full-featured blog management web application built with a powerful tech stack. It provides seamless publishing and interaction experiences for both regular users and admins. Includes secure authentication, rich text editing, comment threads, and a full admin dashboard.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Shivam Agrahari', description: '', imageURL: '' },
  social: {
    github:'Shivam6388469930/',
    linkedin: 'shivam-agrahari-1a816b240/',
    facebook: '',
    instagram: 'agrahari8058',
    // website: 'https://www.arifszn.com',
    phone: '6388469930',
    email: 'agraharishivam6388@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1emq0Q4jNzBkNDr9mJcEWzenBjuYHNLH_/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    "Java",
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'Git',
    'Vercel',
    // 'Docker',
    'Bootstrap',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Sarthak Tech',
      position: 'Jr.Full Stack Developor',
      from: 'November 2024',
      to: 'May 2025',
      companyLink: 'https://sarthaktech.co.in/',
    },
    {
      company: 'Coreweb Technology',
      position: 'Jr.React Developer',
      from: 'July 2025',
      to: 'Present',
      companyLink: 'https://www.corewebtechnology.com',
    },
  ],
  certifications: [
    {
      name: 'Full Stack Web Developer InternShip ',
      body: 'I have successfully completed 16-week full stack web developer InternShip at INNOVATE INTERN,running from october 2024 to January 2025',
      year: 'Jan 2025',
      link: 'https://example.com',
    },

  ],
  educations: [
    {
      institution: 'Hric Khalilabad',
      degree: 'High School',
      from: '2018',
      to: '2019',
    },
    {
      institution: 'Hric Khalilabad',
      degree: 'Intermediate',
      from: '2020',
      to: '2021',
    },
     {
      institution: 'Sheat College Of Engineering',
      degree: 'B.Tech',
      from: '2021',
      to: '2025',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'Shivam6388469930', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/Shivam6388469930"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
