import Link from 'next/link';
import styles from './ProjectHeader.module.css';

interface ProjectHeaderProps {
  title: string;
  description?: string;
}

export default function ProjectHeader({ title, description }: ProjectHeaderProps) {
  return (
    <header className={styles.header}>
      <Link href="/projects/" className={styles.back}>
        &larr; Back to Projects
      </Link>
      <h1 className={styles.title}>{title}</h1>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}
