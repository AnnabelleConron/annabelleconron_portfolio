import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
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

import { basePath } from './config';

export async function getProjectHtml(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);
  let html = result.toString();
  if (basePath) {
    html = html.replace(/(src|href)="\/(?!\/)/g, `$1="${basePath}/`);
  }
  return html;
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
