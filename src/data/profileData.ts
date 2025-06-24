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
  profileImage: 'https://media.licdn.com/dms/image/v2/C5103AQH8MndqZ4-ing/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1559565048480?e=1756339200&v=beta&t=CKgtj9H9sIfGoyvVCNNZkE33mHJkEO9FgDY0uWnOzkU'
};

// TODO: Update with actual work experience from LinkedIn
export const experiences: Experience[] = [
  {
    company: 'Company Name', // Update from LinkedIn
    role: 'Software Developer', // Update from LinkedIn
    period: '2023 - Present', // Update from LinkedIn
    location: 'Ho Chi Minh City, Vietnam',
    description: 'Description of role and responsibilities from LinkedIn profile.',
    achievements: [
      'Achievement 1 from LinkedIn',
      'Achievement 2 from LinkedIn',
      'Achievement 3 from LinkedIn'
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
    title: 'Project Name 1',
    description: 'Description of project from LinkedIn or portfolio',
    tech: ['React', 'TypeScript', 'Node.js'],
    github: 'https://github.com/phan-thien-quoc/project1',
    live: 'https://project1-demo.com',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    title: 'Project Name 2',
    description: 'Description of project from LinkedIn or portfolio',
    tech: ['Vue.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/phan-thien-quoc/project2',
    live: 'https://project2-demo.com',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    title: 'Project Name 3',
    description: 'Description of project from LinkedIn or portfolio',
    tech: ['React', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com/phan-thien-quoc/project3',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  }
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