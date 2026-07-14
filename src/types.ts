export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
  imageUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export interface SiteData {
  hero: {
    firstName: string;
    lastName: string;
    titles: string[];
    bio: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    stats: { label: string; value: string }[];
  };
  projects: Project[];
  experience: Experience[];
  skills: SkillCategory[];
  contact: {
    email: string;
    socials: { name: string; url: string; icon: string }[];
  };
}
