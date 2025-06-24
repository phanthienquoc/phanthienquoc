export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  sortDescription: string;
  sortDescription_2: string;
  profileImage: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location?: string;
  gpa?: string;
  achievements?: string[];
}

export interface Skill {
  name: string;
  level: number;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
  featured: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}