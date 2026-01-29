import { Project } from './types';

export function getUniqueSubjects(projects: Project[]): string[] {
  const subjects = projects.map((p) => p.frontmatter.subject);
  return Array.from(new Set(subjects)).sort();
}

export function filterProjectsBySubject(
  projects: Project[],
  subject: string | null
): Project[] {
  if (!subject) return projects;
  return projects.filter((p) => p.frontmatter.subject === subject);
}
