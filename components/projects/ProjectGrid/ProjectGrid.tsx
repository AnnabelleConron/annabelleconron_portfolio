import { Project } from '@/lib/types';
import ProjectCard from '@/components/projects/ProjectCard/ProjectCard';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return <p className={styles.empty}>No projects found.</p>;
  }

  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          slug={project.slug}
          frontmatter={project.frontmatter}
        />
      ))}
    </div>
  );
}
