import { Portfolio } from '../types';

const useGetPortfolio = (): Portfolio => {
  return {
    experience: 6,
    company: 'Vananaz Technologies Inc.',
    socials: [
      {
        url: 'https://www.linkedin.com/in/kevin-monteza-b13360236/',
        icon: '',
      },
      {
        url: 'https://join.skype.com/invite/kioTyHq8O1UK',
        icon: '',
      },
      {
        url: 'https://github.com/kevincoxme',
        icon: '',
      },
    ],
    skillGroups: [
      {
        title: 'Frontend Development',
        items: [
          { name: 'React', icon: 'React' },
          { name: 'Vue.js', icon: 'Vue.js' },
          { name: 'Next.js', icon: 'Next.js' },
          { name: 'TypeScript', icon: 'TypeScript' },
          { name: 'JavaScript', icon: 'JavaScript' },
          { name: 'HTML5', icon: 'HTML5' },
          { name: 'CSS3', icon: 'CSS3' },
          { name: 'Sass', icon: 'Sass' },
          { name: 'Bootstrap', icon: 'Bootstrap' },
          { name: 'Tailwind CSS', icon: 'Tailwind CSS' },
          { name: 'Redux', icon: 'Redux' },
          { name: 'jQuery', icon: 'jQuery' },
        ],
      },
      {
        title: 'Backend Development',
        items: [
          { name: 'Node.js', icon: 'Node.js' },
          { name: 'Express.js', icon: 'Express.js' },
          { name: 'PHP', icon: 'PHP' },
          { name: 'Laravel', icon: 'Laravel' },
          { name: 'GraphQL', icon: 'GraphQL' },
          { name: 'Livewire', icon: 'Livewire' },
          { name: 'Inertia.js', icon: 'Inertia.js' },
        ],
      },
      {
        title: 'Testing & Quality',
        items: [
          { name: 'PHPUnit', icon: 'PHPUnit' },
          { name: 'Jest', icon: 'Jest' },
        ],
      },
      {
        title: 'Principles & Practices',
        items: [
          { name: 'OOP', icon: 'OOP' },
          { name: 'SOLID', icon: 'SOLID' },
        ],
      },
      {
        title: 'Databases & Storage',
        items: [
          { name: 'MySQL', icon: 'MySQL' },
          { name: 'MongoDB', icon: 'MongoDB' },
          { name: 'PostgreSQL', icon: 'PostgreSQL' },
          { name: 'Redis', icon: 'Redis' },
          { name: 'Firebase', icon: 'Firebase' },
        ],
      },
      {
        title: 'DevOps & Tools',
        items: [
          { name: 'Git', icon: 'Git' },
          { name: 'GitHub', icon: 'GitHub' },
          { name: 'Docker', icon: 'Docker' },
          { name: 'AWS', icon: 'AWS' },
          { name: 'Linux', icon: 'Linux' },
          { name: 'NPM', icon: 'NPM' },
          { name: 'Webpack', icon: 'Webpack' },
          { name: 'Postman', icon: 'Postman' },
          { name: 'GitLab', icon: 'GitLab' },
          { name: 'Bitbucket', icon: 'Bitbucket' },
          { name: 'CI/CD', icon: 'CI/CD' },
          { name: 'Laravel Sail', icon: 'Laravel Sail' },
        ],
      },
    ],
    experiences: [
      {
        title: 'Software Engineer',
        period: 'Feb 2023 - Present',
        company: 'Vananaz Technologies | Philippines - WFH',
        description:
          'Lead a small team of developers, overseeing task delegation, providing technical guidance, creating technical documentation, and conducting code reviews. Collaborate with project managers, QA, business analysts, designers, and development engineers to produce project specifications. Contribute to Node.js, React web, and Laravel-based applications throughout the full software development lifecycle. Troubleshoot and debug issues, maintaining clear documentation for developed features and APIs.',
        tech: ['Laravel', 'React.js', 'Node.js', 'Docker', 'CI/CD', 'GitLab'],
      },
      {
        title: 'Mid Fullstack Web Developer',
        period: 'Apr 2021 - Feb 2023',
        company: 'ExpaDigital | Philippines - WFH',
        description:
          "Developed CRM web-based applications that processed, analyzed, and rendered data visually. Maximized applications' efficiency, data quality, scope, operability, and flexibility. Managed and optimized databases using SQL. Developed app integrations with REST APIs for Google Maps, Cloud Storage, and payment processors. Deployed applications using CI/CD platform and build automation (Bitbucket Pipeline). Created unit and feature testing to verify code usability across multiple devices.",
        tech: ['Laravel', 'Vue.js', 'MySQL', 'REST APIs', 'CI/CD', 'Bitbucket'],
      },
      {
        title: 'Jr. PHP Developer',
        period: 'Jun 2019 - Apr 2021',
        company: 'Flexion Technology | Makati, Philippines - WFH',
        description:
          'Collaborated with team leaders to establish project goals, projections, and milestones. Employed coding practices based on commonly accepted standards to establish site layout and user interface. Utilized PHP, SQL, JavaScript, and other back-end libraries. Developed and implemented performance improvement strategies. Coordinated with project management staff on database development timelines and project scope. Collaborated on all stages of systems development lifecycle, from requirement gathering to production releases.',
        tech: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'SQL'],
      },
      {
        title: 'ICT Staff',
        period: 'Jul 2018 - May 2019',
        company: 'Terumo Philippines Corporation | Sta. Rosa Laguna, Philippines',
        description:
          'Managed quality assurance program, including on-site evaluations, internal audits, and customer surveys. Led risk assessment meetings, offering input on system impact, component criticality, and data integrity. Analyzed pre-release software titles for compliance with User Requirement Specifications (URS). Collaborated on Standard Operating Procedure (SOP) development. Developed validation master plans, process flow diagrams, and standard operating procedures.',
        tech: ['Quality Assurance', 'System Validation', 'Documentation'],
      },
    ],
    work: [
      {
        title: 'VerseFire',
        href: 'https://versefire.online/',
        description:
          'A personal PWA project I developed—a platform that delivers daily Bible verses, features an AI-powered Bible chat, and includes an offline Bible for easy access anytime.',
      },
      {
        title: 'careroster',
        href: 'https://careroster.co.uk/',
        description:
          'An All-in-one that brings scheduling, timesheets, and payroll reporting into one seamless platform.',
      },
      {
        title: 'estelaresorts',
        href: 'https://estelaresorts.com/',
        description: 'A local business website',
      },
      {
        title: 'growlaunch',
        href: 'https://www.growlaunch.io/',
        description: 'A start-up business branding website for UK clients',
      },
      {
        title: 'COVID Testing Solutions',
        href: 'https://covidtestingsolutions.co.uk/',
        description: 'An app for tracking customers that has COVID Vaccine',
      },
      {
        title: 'ExpaDigital CRM',
        href: 'https://crm.expadigital.com/',
        description: 'A custom CRM applications for UK Customers',
      },
      {
        title: 'ICT Scoreboard',
        href: '',
        description: "An internal app that keep and monitor department's KPIs",
      },
      {
        title: 'QMIS',
        href: '',
        description: 'An internal Management Information System for DOST',
      },
    ],
  };
};

export default useGetPortfolio;
