import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Project, ProjectFrontmatter } from './types';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getProjectBySlug(slug: string): Project {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content,
  };
}

export async function getProjectHtml(content: string): Promise<string> {
  const result = await remark().use(html).process(content);
  return result.toString();
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  const slugs = fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));

  const projects = slugs.map((slug) => getProjectBySlug(slug));

  return projects.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getFeaturedProjects(): Project[] {
  const all = getAllProjects();
  const featured = all.filter((p) => p.frontmatter.featured);
  return featured.length > 0 ? featured.slice(0, 2) : all.slice(0, 2);
}
