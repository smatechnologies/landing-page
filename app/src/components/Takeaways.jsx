import React from 'react';
import styles from './styles.module.css';

export function Takeaways({ children }) {
  return <div className={styles.takeawayGrid}>{children}</div>;
}

export function Takeaway({ number, title, children }) {
  return (
    <div className={styles.takeawayCard}>
      {number != null && <p className={styles.takeawayNumber}>{number}</p>}
      <p className={styles.takeawayTitle}>{title}</p>
      <p className={styles.takeawayBody}>{children}</p>
    </div>
  );
}
