export interface SocialLinks {
  github: string | null;
  linkedin: string | null;
  email: string | null;
  phone?: string | null;
  location?: string | null;
  resume: string | null;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  description: string;
  details: string[];
  stack: string[];
  github: string | null;
  liveDemo: string | null;
  featured: boolean;
  date?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "full-time" | "internship" | "freelance" | "contract";
  period: string | null;
  description: string[];
  stack: string[];
}

export interface SkillGroup {
  id: string;
  label: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string | null;
  location: string;
  coursework?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  status?: string;
  statusColor?: string;
  chips?: string[];
}

export interface Achievement {
  id: string;
  category: string;
  title: string;
  organization?: string;
  description: string;
  badge?: string;
}
