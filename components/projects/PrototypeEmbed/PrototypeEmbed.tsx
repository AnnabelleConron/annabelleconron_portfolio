import styles from './PrototypeEmbed.module.css';

interface PrototypeEmbedProps {
  url: string;
  title: string;
}

export default function PrototypeEmbed({ url, title }: PrototypeEmbedProps) {
  if (!url) return null;

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Prototype</h3>
      <div className={styles.embedContainer}>
        <iframe
          src={url}
          title={`${title} prototype`}
          className={styles.iframe}
          allowFullScreen
        />
      </div>
    </div>
  );
}
