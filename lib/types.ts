export interface ProjectFrontmatter {
  title: string;
  subtitle?: string;
  date: string;
  subject: string;
  coverImage: string;
  featured?: boolean;
  galleryImages?: string[];
  prototypeUrl?: string;
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}
