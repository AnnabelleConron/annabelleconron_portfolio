import Image from 'next/image';
import { getAllProjects, getProjectBySlug, getProjectHtml } from '@/lib/markdown';
import ProjectHeader from '@/components/projects/ProjectHeader/ProjectHeader';
import ImageGallery from '@/components/projects/ImageGallery/ImageGallery';
import PrototypeEmbed from '@/components/projects/PrototypeEmbed/PrototypeEmbed';
import '@/styles/markdown.css';
import styles from './projectDetail.module.css';

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  return {
    title: `${project.frontmatter.title} | Annabelle Conron`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  const contentHtml = await getProjectHtml(project.content);
  const hasVideo = project.content.includes('<video');

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <ProjectHeader
          title={project.frontmatter.title}
          description={project.frontmatter.description}
        />

        {!hasVideo && (
          <div className={styles.coverWrapper}>
            <Image
              src={project.frontmatter.coverImage}
              alt={project.frontmatter.title}
              width={1200}
              height={800}
              className={styles.coverImage}
              priority
            />
          </div>
        )}

        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {project.frontmatter.galleryImages && (
          <ImageGallery
            images={project.frontmatter.galleryImages}
            alt={project.frontmatter.title}
          />
        )}

        {project.frontmatter.prototypeUrl && (
          <PrototypeEmbed
            url={project.frontmatter.prototypeUrl}
            title={project.frontmatter.title}
          />
        )}
      </div>
    </div>
  );
}
