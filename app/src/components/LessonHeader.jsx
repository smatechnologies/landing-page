import React from 'react';
import styles from './styles.module.css';

export default function LessonHeader({ eyebrow, title, meta }) {
  return (
    <div className={styles.lessonHeader}>
      {eyebrow && <p className={styles.lessonEyebrow}>{eyebrow}</p>}
      <h1 className={styles.lessonTitle}>{title}</h1>
      {meta && <p className={styles.lessonMeta}>{meta}</p>}
    </div>
  );
}
