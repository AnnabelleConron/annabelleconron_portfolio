import { getAllProjects } from '@/lib/markdown';
import { getUniqueSubjects } from '@/lib/projects';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata = {
  title: 'Projects | Annabelle Conron',
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const subjects = getUniqueSubjects(projects);

  return <ProjectsPageClient projects={projects} subjects={subjects} />;
}
