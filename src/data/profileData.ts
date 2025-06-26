import { PersonalInfo, Experience, Education, Skill, Project, Certification } from '../types/profile';

// TODO: Update this with information from LinkedIn profile: https://www.linkedin.com/in/phan-thien-quoc
export const personalInfo: PersonalInfo = {
  name: 'Quoc Phan',
  title: 'Frontend Developer | Full-Stack Capable',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'phanthienquoc@outlook.com', // Update with actual email
  phone: '+84 78787 56 88', // Update with actual phone
  linkedin: 'https://www.linkedin.com/in/phan-thien-quoc',
  github: 'https://github.com/phanthienquoc', // Update with actual GitHub
  summary: `Passionate software developer with expertise in modern web technologies. 
    Experienced in building scalable applications and working with cross-functional teams 
    to deliver high-quality solutions.`, // Update with LinkedIn summary
  sortDescription: `With several years of experience in developing web applications, I am proficient in React.js, CSS3, JavaScript, and Node.js. I have a strong background in Web UI design, HTML, and Cascading Style Sheets (CSS), allowing me to create visually appealing and responsive web interfaces. My expertise extends to comprehending business requirements, technical specifications, and maintaining coding best practices. I also possess excellent communication and collaboration skills, honed through teamwork on various projects. As a dedicated, results-oriented developer, I consistently meet deadlines while working under pressure and bring a creative approach to problem-solving.`,
  sortDescription_2: `
I believe in writing clean, maintainable code and staying updated with the latest industry trends. I enjoy collaborating with cross-functional teams and contributing to projects that make a real impact.`,
  profileImage: 'https://media.licdn.com/dms/image/v2/C5103AQH8MndqZ4-ing/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1559565048480?e=1756339200&v=beta&t=CKgtj9H9sIfGoyvVCNNZkE33mHJkEO9FgDY0uWnOzkU'
};

// TODO: Update with actual work experience from LinkedIn
export const experiences: Experience[] = [
  {
    company: 'FPT Software', // Update from LinkedIn
    role: 'Software Developer', // Update from LinkedIn
    period: '2017 - 2019', // Update from LinkedIn
    location: 'Ho Chi Minh City, Vietnam',
    description: 'Description of role and responsibilities from LinkedIn profile.',
    achievements: [
      
    ]
  },
  // Add more experiences from LinkedIn profile
];

// TODO: Update with actual education from LinkedIn
export const education: Education[] = [
  {
    institution: 'VNUHCM - University of Science', // Update from LinkedIn
    degree: 'College of Science', // Update from LinkedIn
    field: 'Information Technologies', // Update from LinkedIn
    period: '2013 - 2016', // Update from LinkedIn
    location: 'Ho Chi Minh City, Vietnam'
  }
];

// TODO: Update skills based on LinkedIn profile
export const skills: Skill[] = [
  { name: 'React', level: 80, color: 'bg-blue-500', category: 'frontend' },
  { name: 'TypeScript', level: 70, color: 'bg-blue-600', category: 'frontend' },
  { name: 'JavaScript', level: 70, color: 'bg-yellow-500', category: 'frontend' },
  { name: 'Next.js', level: 65, color: 'bg-gray-800', category: 'frontend' },
  { name: 'Express.js', level: 75, color: 'bg-gray-700', category: 'backend' },
  { name: 'Mysql', level: 50, color: 'bg-green-500', category: 'database' },
  { name: 'Git', level: 75, color: 'bg-red-500', category: 'tools' },
  { name: 'Docker', level: 40, color: 'bg-blue-400', category: 'tools' },
  { name: 'AWS', level: 30, color: 'bg-orange-500', category: 'tools' }
];

// TODO: Update with actual projects
export const projects: Project[] = [
  {
    title: 'Aviator Application',
    period:"March 2017 – May 2019",
    company:"FPT SoftWare",
    description: `Application support for flight attendants and pilots have information about flights info, forecast.`,
    tech: ['WPF', 'XAML', 'HMTL5', 'JavaScript'],
    featured: true
  },
  {
    title: 'MLNG Mobile Application',
    period:"March 2017 – May 2019",
    company:"FPT SoftWare - Onsiter- Malaysia PET-ICT",
    description: 'Mobile application perform process electrical permit to work.',
    tech: ["Sencha Touch","Extjs 6.5", "Oath", "HTML5", "CSS3", "Javascript","Jquery","Odic Client", "Bootstrap"],
    featured: true
  },
{
    title: 'Kontormoebler',
    period:"August 2019 – December 2019",
    company:"Redweb",
    description: 'E-commerce web sell furniture scandinavian',
    tech: ["Joomla","RedShop Extension",  "HTML5", "CSS3", "Javascript","Jquery"],
    featured: true
  },
{
    title: 'Ultimate Money(Payment)',
    period:"December 2019 – July 2023",
    company:"Inspirelab",
    description: 'Platform to help merchant manage crypto, transfer, receive crypto currency on ETH, XRP, SOLANA',
    tech: ["Reactjs","MaterialUI","Antd", "Tanstack ReactQuery", "SCSS", "Javascript", "webpack"],
    featured: true
  },
{
    title: 'Portalsite',
    period:"October 2024 – March 2025",
    company:"AIOT",
    role: "teamlead",
    description: 'Portal helps to tracking weather alert systems using XML, linking weather warnings to geographic locations for improved disaster management. Utilized live camera feeds and geospatial data for effective public safety monitoring',
    tech: ["Reactjs","Expressjs","Vite","MySQL","react-leaflet", "tailwindcss","AWS: S3,Cloudfront","Docker","SCSS", "Javascript","BasicAuth"],
    featured: true
  },
{
    title: 'TURN',
    period:"March 2025 – May 2025",
    company:"AIOT",
    role: "Supporter",
    description: 'Booking Page to help customer make booking.',
    tech: ["Reactjs","webpack","Antd", "tailwindcss","Docker","SCSS", "Javascript"],
    featured: true
  },

];

// TODO: Update with certifications from LinkedIn
export const certifications: Certification[] = [
  {
    name: 'Certification Name',
    issuer: 'Certification Provider',
    date: '2023',
    credentialId: 'CREDENTIAL_ID',
    url: 'https://certification-url.com'
  }
];