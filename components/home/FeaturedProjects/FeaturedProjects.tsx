import Link from 'next/link';
import { Project } from '@/lib/types';
import ProjectCard from '@/components/projects/ProjectCard/ProjectCard';
import styles from './FeaturedProjects.module.css';

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Featured Projects</h2>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              frontmatter={project.frontmatter}
            />
          ))}
        </div>
        <div className={styles.cta}>
          <Link href="/projects/" className={styles.link}>
            Explore all projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
