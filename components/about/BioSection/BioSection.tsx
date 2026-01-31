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
            I&apos;m Annabelle Conron, I create digital experiences that bridge complex information
            and meaningful interaction. Whether I'm designing interfaces, building browser-based games,
            or transforming datasets into visual narratives, I'm driven by curiosity about how people
            engage with technology.
          </p>
          <p className={styles.text}>
            Currently focused on UX/UI design, data visualization, and creative coding. Always exploring
            new ways to make information accessible and interactions delightful. Open to opportunities 
            in UX/UI design and interaction design.
          </p>
        </div>
      </div>
    </section>
  );
}
