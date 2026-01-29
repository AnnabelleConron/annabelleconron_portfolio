import Image from 'next/image';
import Link from 'next/link';
import { ProjectFrontmatter } from '@/lib/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  slug: string;
  frontmatter: ProjectFrontmatter;
}

export default function ProjectCard({ slug, frontmatter }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}/`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={frontmatter.coverImage}
          alt={frontmatter.title}
          width={600}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{frontmatter.title}</h3>
        <p className={styles.subject}>{frontmatter.subject}</p>
      </div>
    </Link>
  );
}
