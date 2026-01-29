import Image from 'next/image';
import styles from './MoreAboutSection.module.css';

export default function MoreAboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>More About Me</h2>
          <p className={styles.text}>
            Outside of design, you&apos;ll find me exploring new places, experimenting
            with photography, or diving into a good book. I&apos;m always looking for
            new sources of inspiration and ways to grow creatively.
          </p>
          <p className={styles.text}>
            I value collaboration, curiosity, and continuous learning. Every project
            is an opportunity to push boundaries and create something that resonates.
          </p>
        </div>
        <div className={styles.imageGrid}>
          <Image
            src="/images/more-about-1.svg"
            alt="More about Annabelle"
            width={600}
            height={400}
            className={styles.image}
          />
          <Image
            src="/images/more-about-2.svg"
            alt="More about Annabelle"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
