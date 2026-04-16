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

// Maps video filename → thumbnail path(s).
// Arrays handle the same filename appearing multiple times — first occurrence
// uses index 0, second uses index 1, etc.
const VIDEO_THUMBNAILS: Record<string, string | string[]> = {
  'UBSMobileApp_Video.mp4':
    '/images/projects/ubs-mobile/UBSMobileApp_Video.png',
  'Video-Essay-SACEBA.mp4': [
    '/images/projects/remnants-of-absence/Exhibition-Video-Essay.png',
    '/images/projects/remnants-of-absence/Video-Essay-SACEBA.png',
  ],
  'Photogrammetry-LCD-Display-at-SACEBA.mp4':
    '/images/projects/remnants-of-absence/Photogrammetry-LCD-Display-at-SACEBA.png',
  'Photogrammetry-Reconstruction-Result-of-Three-Scenes.mp4':
    '/images/projects/remnants-of-absence/Photogrammetry-Reconstruction-Result-of-Three-Scenes.png',
};

function injectVideoThumbnails(html: string, bPath: string): string {
  const seen: Record<string, number> = {};

  return html.replace(/<video[\s\S]*?<\/video>/gi, (match) => {
    const srcMatch = match.match(/<source[^>]+src="([^"]+)"[^>]*>/i);
    const filename = srcMatch ? srcMatch[1].split('/').pop()! : '';

    seen[filename] = (seen[filename] ?? 0) + 1;
    const occurrence = seen[filename];

    const entry = VIDEO_THUMBNAILS[filename];
    const thumbnailPath = Array.isArray(entry)
      ? entry[occurrence - 1]
      : entry;

    if (!thumbnailPath) {
      // Unknown video — fall back to blank placeholder
      return `<div class="video-wrapper">${match}<div class="video-print-placeholder"></div></div>`;
    }

    return `<div class="video-wrapper">${match}<img class="video-thumbnail-placeholder" src="${bPath}${thumbnailPath}" alt="Video thumbnail" /></div>`;
  });
}

export default async function PdfPage() {
  const projects = await Promise.all(
    ORDERED_SLUGS.map(async (slug) => {
      const project = getProjectBySlug(slug);
      const rawHtml = await getProjectHtml(project.content);
      const contentHtml = injectVideoThumbnails(rawHtml, basePath);
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
