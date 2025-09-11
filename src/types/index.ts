export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  status: string;
  isNDA: boolean;
  category: 'data-science' | 'machine-learning' | 'deep-learning' | 'web-development' | 'data-analysis';
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  category: string;
  icon: string;
}

export interface Certificate {
  id: string;
  title: string;
  category: string;
  icon: string;
  documents: CertificateDocument[];
}

export interface CertificateDocument {
  id: string;
  title: string;
  icon: string;
  encryptedUrl: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  title: string[];
  email: string;
  linkedin: string;
  github: string;
  age: number;
  currentPosition: string;
  education: string;
}