import React from 'react';
import styles from './styles.module.css';

export default function Section({ number, title }) {
  const label = number != null ? `Section ${number} · ${title}` : title;
  return (
    <div className={styles.sectionDivider}>
      <p className={styles.sectionDividerLabel}>{label}</p>
    </div>
  );
}
