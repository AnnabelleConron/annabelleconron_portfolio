'use client';

import styles from './ProjectFilter.module.css';

interface ProjectFilterProps {
  subjects: string[];
  selected: string | null;
  onSelect: (subject: string | null) => void;
}

export default function ProjectFilter({
  subjects,
  selected,
  onSelect,
}: ProjectFilterProps) {
  return (
    <div className={styles.filter}>
      <select
        className={styles.select}
        value={selected || ''}
        onChange={(e) => onSelect(e.target.value || null)}
      >
        <option value="">All Subjects</option>
        {subjects.map((subject) => (
          <option key={subject} value={subject}>
            {subject}
          </option>
        ))}
      </select>
    </div>
  );
}
