import { getProjectBySlug, getProjectHtml } from '@/lib/markdown';
import { basePath } from '@/lib/config';
import '@/styles/markdown.css';
import './pdf-global.css';
import styles from './pdf.module.css';
import PrintButton from './PrintButton';

export const metadata = {
  title: 'Portfolio | Annabelle Conron',
};

const ORDERED_SLUGS = [
  'ubs-mobile',
  'remnants-of-absence',
  'kinesis',
  'galactic-guide',
  'memory-match',
];

const TOC_ENTRIES = [
  { slug: 'ubs-mobile', title: 'UBS Mobile', subject: 'User Experience' },
  { slug: 'remnants-of-absence', title: 'Remnants of Absence', subject: 'Physical Computing' },
  { slug: 'kinesis', title: 'Kinesis', subject: 'Physical Computing' },
  { slug: 'galactic-guide', title: 'Galactic Guide', subject: 'Data Visualisation' },
  { slug: 'memory-match', title: 'Memory Match', subject: 'Programming Interactions' },
];

function injectVideoPrintPlaceholders(html: string): string {
  return html.replace(
    /<video[\s\S]*?<\/video>/gi,
    (match) =>
      `<div class="video-wrapper">${match}<div class="video-print-placeholder">Video content — view the full portfolio at annabelleconron.github.io/annabelleconron_portfolio</div></div>`,
  );
}

export default async function PdfPage() {
  const projects = await Promise.all(
    ORDERED_SLUGS.map(async (slug) => {
      const project = getProjectBySlug(slug);
      const rawHtml = await getProjectHtml(project.content);
      const contentHtml = injectVideoPrintPlaceholders(rawHtml);
      const hasVideo = project.content.includes('<video');
      return { ...project, contentHtml, hasVideo };
    }),
  );

  return (
    <div className={styles.pdfRoot}>
      {/* ── Cover / Table of Contents ───────────────────────────── */}
      <section className={styles.coverPage}>
        <div className={styles.coverMeta}>
          <h1 className={styles.coverName}>Annabelle Conron</h1>
          <p className={styles.coverSubtitle}>Portfolio — 2026</p>
          <p className={styles.coverEmail}>annabelle.conron@student.supsi.ch</p>
        </div>

        <nav className={styles.toc} aria-label="Contents">
          <h2>Contents</h2>
          <ol>
            {TOC_ENTRIES.map(({ slug, title, subject }) => (
              <li key={slug}>
                <a href={`#${slug}`} className={styles.tocTitle}>
                  {title}
                </a>
                <span className={styles.tocSubject}>{subject}</span>
              </li>
            ))}
          </ol>
        </nav>

        <PrintButton />
      </section>

      {/* ── Project sections ────────────────────────────────────── */}
      {projects.map((project) => (
        <article key={project.slug} id={project.slug} className={styles.projectSection}>
          <header className={styles.projectHeader}>
            <p className={styles.projectLabel}>{project.frontmatter.subject}</p>
            <h2 className={styles.projectTitle}>{project.frontmatter.title}</h2>
            {project.frontmatter.description && (
              <p className={styles.projectDescription}>{project.frontmatter.description}</p>
            )}
          </header>

          {!project.hasVideo && project.frontmatter.coverImage && (
            <div className={styles.coverImageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}${project.frontmatter.coverImage}`}
                alt={project.frontmatter.title}
              />
            </div>
          )}

          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: project.contentHtml }}
          />

          {project.frontmatter.galleryImages && project.frontmatter.galleryImages.length > 0 && (
            <div className={styles.gallery}>
              {project.frontmatter.galleryImages.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={`${basePath}${src}`}
                  alt={`${project.frontmatter.title} — image ${i + 1}`}
                  className={styles.galleryImage}
                />
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
