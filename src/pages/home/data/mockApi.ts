import kevinPhoto from '../../../assets/img/kevin.webp';

export type SectionKey = 'home' | 'about' | 'skills' | 'experience' | 'work';

export type HomeResponseBody = {
  id: string;
  name: string;
  title: string;
  role: string;
  description: string;
  experience_years: number;
  location: string;
  availability: string;
  profilePhotoUrl: string;
  socials: {
    linkedin: string;
    github: string;
    skype: string;
  };
};

export type AboutResponseBody = {
  first_name: string;
  last_name: string;
  email: string;
  location: string;
  current_company: string;
  experience_years: number;
  bio: string;
  cv_url: string;
  specializations: string[];
  languages: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  tech: string[];
};

export type ExperienceResponseBody = {
  total: number;
  data: ExperienceItem[];
};

export type WorkItem = {
  title: string;
  url: string | null;
  type: string;
  status: string;
  description: string;
  tech: string[];
};

export type WorkResponseBody = {
  total: number;
  data: WorkItem[];
};

export type SkillsResponseBody = {
  total_skills: number;
  categories: Array<{
    name: string;
    items: string[];
  }>;
};

export type MockApiEntry = {
  method: string;
  path: string;
  headers: Record<string, string>;
  responseStatus: number;
  responseStatusText: string;
  responseBody: Record<string, unknown>;
};

// Placeholder only, no actual API being called
const TOKEN = 'portfolio_pk_Km9x2vQpLr4nHz8Tt5mWe7y';

export const mockApi: Record<SectionKey, MockApiEntry> = {
  home: {
    method: 'GET',
    path: '/v1/portfolio',
    headers: {
      Host: 'api.kevincoxme.dev',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    responseStatus: 200,
    responseStatusText: 'OK',
    responseBody: {
      id: 'usr_kevin_monteza',
      name: 'Kevin Monteza',
      title: 'Mid Software Engineer',
      role: 'Mid Software Engineer & Team Leader',
      description:
        'With over 6 years of experience building scalable web applications. Passionate about clean code, modern technologies, and leading teams to deliver exceptional results.',
      experience_years: 6,
      location: 'Philippines - WFH',
      availability: 'open_to_work',
      profilePhotoUrl: kevinPhoto,
      socials: {
        linkedin: 'linkedin.com/in/kevin-monteza-b13360236',
        github: 'github.com/kevincoxme',
        skype: 'join.skype.com/invite/kioTyHq8O1UK',
      },
    } satisfies HomeResponseBody,
  },
  about: {
    method: 'GET',
    path: '/v1/portfolio/about',
    headers: {
      Host: 'api.kevincoxme.dev',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    responseStatus: 200,
    responseStatusText: 'OK',
    responseBody: {
      first_name: 'Kevin',
      last_name: 'Monteza',
      email: 'kevin.g.monteza@gmail.com',
      location: 'Philippines - WFH',
      current_company: 'Vananaz Technologies Inc.',
      experience_years: 6,
      bio: 'A Software Engineer with 6+ years of quality PHP, MySQL and Node.js development experience. Skilled at building applications with Laravel and Express.js, and user interfaces using React.js and Vue.js.',
      cv_url: 'assets/pdf/Kevin Monteza Resume.pdf',
      specializations: ['Full-Stack Development', 'Team Leadership', 'CI/CD Pipelines'],
      languages: ['PHP', 'JavaScript', 'TypeScript', 'Node.js'],
    } satisfies AboutResponseBody,
  },
  skills: {
    method: 'GET',
    path: '/v1/portfolio/skills',
    headers: {
      Host: 'api.kevincoxme.dev',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    responseStatus: 200,
    responseStatusText: 'OK',
    responseBody: {
      total_skills: 58,
      categories: [
        {
          name: 'Frontend Development',
          items: [
            'React',
            'Vue.js',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'HTML5',
            'CSS3',
            'Sass',
            'Bootstrap',
            'Tailwind CSS',
            'Redux',
            'jQuery',
          ],
        },
        {
          name: 'Backend Development',
          items: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'GraphQL', 'Livewire', 'Inertia.js'],
        },
        {
          name: 'Testing & Quality',
          items: ['PHPUnit', 'Jest'],
        },
        {
          name: 'Principles & Practices',
          items: ['OOP', 'SOLID'],
        },
        {
          name: 'Databases & Storage',
          items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
        },
        {
          name: 'DevOps & Tools',
          items: [
            'Git',
            'GitHub',
            'Docker',
            'AWS',
            'Linux',
            'NPM',
            'Webpack',
            'Postman',
            'GitLab',
            'Bitbucket',
            'CI/CD',
            'Laravel Sail',
          ],
        },
        {
          name: 'AI Tools',
          items: ['ChatGPT', 'Codex', 'Cursor', 'Claude Code'],
        },
        {
          name: 'AWS',
          items: [
            'S3',
            'Secrets Manager',
            'Parameter Store',
            'Amplify',
            'App Runner',
            'WAF',
            'ECS',
            'Lambda',
            'Cognito',
            'SES',
          ],
        },
      ],
    } satisfies SkillsResponseBody,
  },
  experience: {
    method: 'GET',
    path: '/v1/portfolio/experience',
    headers: {
      Host: 'api.kevincoxme.dev',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    responseStatus: 200,
    responseStatusText: 'OK',
    responseBody: {
      total: 4,
      data: [
        {
          title: 'Software Engineer',
          company: 'Vananaz Technologies',
          location: 'Philippines - WFH',
          period: 'Feb 2023 - Present',
          type: 'full_time',
          description:
            'Lead a small team of developers, overseeing task delegation, providing technical guidance, creating technical documentation, and conducting code reviews. Collaborate with project managers, QA, business analysts, designers, and development engineers to produce project specifications. Contribute to Node.js, React web, and Laravel-based applications throughout the full software development lifecycle. Troubleshoot and debug issues, maintaining clear documentation for developed features and APIs.',
          tech: ['Node.js', 'Laravel', 'React.js', 'Docker', 'CI/CD', 'REST APIs', 'GraphQL'],
        },
        {
          title: 'Mid Fullstack Web Developer',
          company: 'ExpaDigital',
          location: 'Philippines - WFH',
          period: 'Apr 2021 - Feb 2023',
          type: 'full_time',
          description:
            "Developed CRM web-based applications that processed, analyzed, and rendered data visually. Maximized applications' efficiency, data quality, scope, operability, and flexibility. Managed and optimized databases using SQL. Developed app integrations with REST APIs for Google Maps, Cloud Storage, and payment processors. Deployed applications using CI/CD platform and build automation (Bitbucket Pipeline). Created unit and feature testing to verify code usability across multiple devices.",
          tech: ['Laravel', 'Vue.js', 'MySQL', 'REST APIs', 'CI/CD', 'Bitbucket'],
        },
        {
          title: 'Jr. PHP Developer',
          company: 'Flexion Technology',
          location: 'Makati, Philippines - WFH',
          period: 'Jun 2019 - Apr 2021',
          type: 'full_time',
          description:
            'Collaborated with team leaders to establish project goals, projections, and milestones. Employed coding practices based on commonly accepted standards to establish site layout and user interface. Utilized PHP, SQL, JavaScript, and other back-end libraries. Developed and implemented performance improvement strategies. Coordinated with project management staff on database development timelines and project scope. Collaborated on all stages of systems development lifecycle, from requirement gathering to production releases.',
          tech: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'SQL'],
        },
        {
          title: 'ICT Staff',
          company: 'Terumo Philippines Corporation',
          location: 'Sta. Rosa Laguna, Philippines',
          period: 'Jul 2018 - May 2019',
          type: 'full_time',
          description:
            'Managed quality assurance program, including on-site evaluations, internal audits, and customer surveys. Led risk assessment meetings, offering input on system impact, component criticality, and data integrity. Analyzed pre-release software titles for compliance with User Requirement Specifications. Collaborated on Standard Operating Procedure development and validation master plans.',
          tech: ['Quality Assurance', 'System Validation', 'Documentation'],
        },
      ],
    } satisfies ExperienceResponseBody,
  },
  work: {
    method: 'GET',
    path: '/v1/portfolio/work',
    headers: {
      Host: 'api.kevincoxme.dev',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    responseStatus: 200,
    responseStatusText: 'OK',
    responseBody: {
      total: 9,
      data: [
        {
          title: 'Spendr',
          url: 'spendr.me',
          type: 'personal',
          status: 'live',
          description:
            'A personal expense and budget tracking app that helps users monitor daily spending, categorize transactions, and gain clear insights into their financial habits.',
          tech: [
            'React',
            'TypeScript',
            'Firebase',
            'Material UI',
            'Anthropic',
            'Gemini',
            'OpenAI',
            'Styled Components',
            'Cloudflare Pages',
          ],
        },
        {
          title: 'VerseFire',
          url: 'versefire.online',
          type: 'personal',
          status: 'live',
          description:
            'A personal PWA project — a platform that delivers daily Bible verses, features an AI-powered Bible chat, and includes an offline Bible for easy access anytime.',
          tech: ['React', 'TypeScript', 'Firebase', 'Material UI', 'OpenAI', 'Styled Components'],
        },
        {
          title: 'careroster',
          url: 'careroster.co.uk',
          type: 'client',
          status: 'live',
          description:
            'An all-in-one platform that brings scheduling, timesheets, and payroll reporting into one seamless workflow for care providers.',
          tech: ['Laravel', 'TypeScript', 'Inertia.js', 'Tailwind CSS'],
        },
        {
          title: 'estelaresorts',
          url: 'estelaresorts.com',
          type: 'client',
          status: 'live',
          description:
            'A local business website for a resort, showcasing amenities and enabling online inquiries.',
          tech: ['WordPress', 'React', 'TypeScript'],
        },
        {
          title: 'growlaunch',
          url: 'growlaunch.io',
          type: 'client',
          status: 'live',
          description: 'A start-up business branding and marketing website built for UK clients.',
          tech: ['React', 'TypeScript', 'Laravel', 'Inertia.js', 'Tailwind CSS'],
        },
        {
          title: 'COVID Testing Solutions',
          url: 'covidtestingsolutions.co.uk',
          type: 'client',
          status: 'live',
          description:
            'An app for tracking customers who have received the COVID vaccine, with reporting and management features.',
          tech: ['Laravel', 'Vue.js', 'TypeScript', 'Inertia.js', 'Tailwind CSS'],
        },
        {
          title: 'ExpaDigital CRM',
          url: 'crm.expadigital.com',
          type: 'client',
          status: 'live',
          description:
            'A custom CRM application built for UK customers, handling lead management, reporting, and data visualization.',
          tech: [
            'Laravel',
            'React.js',
            'Vue.js',
            'TypeScript',
            'Inertia.js',
            'Livewire',
            'Tailwind CSS',
          ],
        },
        {
          title: 'ICT Scoreboard',
          url: null,
          type: 'internal',
          status: 'private',
          description:
            'An internal app that tracks and monitors department KPIs with real-time scoring dashboards.',
          tech: ['PHP', 'MySQL', 'TypeScript'],
        },
        {
          title: 'QMIS',
          url: null,
          type: 'internal',
          status: 'private',
          description: 'An internal Quality Management Information System developed for DOST.',
          tech: ['PHP', 'MySQL', 'TypeScript'],
        },
      ],
    } satisfies WorkResponseBody,
  },
};

export const navItems: Array<{ key: SectionKey; label: string; description: string }> = [
  { key: 'home', label: 'Home', description: 'Overview & socials' },
  { key: 'about', label: 'About', description: 'Background & story' },
  { key: 'skills', label: 'Skills', description: 'Tech & tools' },
  { key: 'experience', label: 'Experience', description: 'Work history' },
  { key: 'work', label: 'Work', description: 'Projects built' },
];
