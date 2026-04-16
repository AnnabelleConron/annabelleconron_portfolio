'use client';

import styles from './pdf.module.css';

export default function PrintButton() {
  return (
    <button className={styles.printButton} onClick={() => window.print()}>
      Print / Save as PDF
    </button>
  );
}
