'use client';

import React from 'react';
import styles from './Game.module.css';

interface MobileMenuButtonProps {
  onClick: () => void;
}

export default function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      className={styles.mobileMenuButton}
      onClick={onClick}
      aria-label="Open prize ladder"
    >
      <span className={styles.mobileMenuLine} />
      <span className={styles.mobileMenuLine} />
      <span className={styles.mobileMenuLine} />
    </button>
  );
}
