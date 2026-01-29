import Image from 'next/image';
import styles from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className={styles.gallery}>
      {images.map((src, index) => (
        <div key={index} className={styles.imageWrapper}>
          <Image
            src={src}
            alt={`${alt} - Image ${index + 1}`}
            width={800}
            height={533}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}
