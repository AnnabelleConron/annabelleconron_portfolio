import Link from 'next/link';
import styles from './ProjectHeader.module.css';

interface ProjectHeaderProps {
  title: string;
  subtitle?: string;
}

export default function ProjectHeader({ title, subtitle }: ProjectHeaderProps) {
  return (
    <header className={styles.header}>
      <Link href="/projects/" className={styles.back}>
        &larr; Back to Projects
      </Link>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}
