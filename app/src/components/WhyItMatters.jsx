import React from 'react';
import styles from './styles.module.css';

export default function WhyItMatters({ label = 'Why it matters at Continuous:', children }) {
  return (
    <div className={styles.callout}>
      <p className={styles.calloutBody}>
        <strong className={styles.calloutLabel}>{label}</strong>
        {children}
      </p>
    </div>
  );
}
