'use client';

import { useState } from 'react';
import { Project } from '@/lib/types';
import { filterProjectsBySubject } from '@/lib/projects';
import ProjectFilter from '@/components/projects/ProjectFilter/ProjectFilter';
import ProjectGrid from '@/components/projects/ProjectGrid/ProjectGrid';
import styles from './projects.module.css';

interface ProjectsPageClientProps {
  projects: Project[];
  subjects: string[];
}

export default function ProjectsPageClient({
  projects,
  subjects,
}: ProjectsPageClientProps) {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const filtered = filterProjectsBySubject(projects, selectedSubject);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>My Projects</h1>
        <ProjectFilter
          subjects={subjects}
          selected={selectedSubject}
          onSelect={setSelectedSubject}
        />
        <ProjectGrid projects={filtered} />
      </div>
    </div>
  );
}
