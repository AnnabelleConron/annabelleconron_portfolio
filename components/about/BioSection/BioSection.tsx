import Image from 'next/image';
import styles from './BioSection.module.css';

export default function BioSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/profile.jpg"
            alt="Annabelle Conron"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.heading}>About Me</h1>
          <p className={styles.text}>
            I&apos;m Annabelle Conron, a designer and creative thinker passionate about
            crafting meaningful experiences. With a background in design and a love
            for problem-solving, I bring ideas to life through thoughtful research,
            visual storytelling, and user-centered design.
          </p>
          <p className={styles.text}>
            My work spans branding, digital design, and creative strategy. I believe
            great design starts with understanding people and ends with delighting them.
          </p>
        </div>
      </div>
    </section>
  );
}
