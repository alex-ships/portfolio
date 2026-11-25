/**
 * Skills Data
 * Grouped cleanly into Web, Backend & Data, Tools, and Automation.
 * No progress bars, presented as clean structured tags.
 */
export const skillsData = [
  {
    category: 'Web',
    description: 'Core frontend development and modern UI engineering',
    skills: [
      { name: 'HTML5', highlight: true },
      { name: 'CSS3 / Modern CSS', highlight: true },
      { name: 'JavaScript (ES6+)', highlight: true },
      { name: 'React', highlight: true },
      { name: 'Vite', highlight: true },
    ],
  },
  {
    category: 'Backend and Data',
    description: 'Server architectures, relational databases, and data modeling',
    skills: [
      { name: 'NestJS', highlight: true },
      { name: 'Express', highlight: false },
      { name: 'PostgreSQL', highlight: true },
      { name: 'Prisma ORM', highlight: true },
      { name: 'Python', highlight: false },
    ],
  },
  {
    category: 'Tools',
    description: 'Version control, developer environment, and deployment pipelines',
    skills: [
      { name: 'Git', highlight: true },
      { name: 'GitHub', highlight: true },
      { name: 'Vercel', highlight: true },
      { name: 'VS Code', highlight: false },
    ],
  },
  {
    category: 'Automation',
    description: 'Low-code orchestration, API integrations, and workflow bots',
    skills: [
      { name: 'n8n', highlight: true },
    ],
  },
];
