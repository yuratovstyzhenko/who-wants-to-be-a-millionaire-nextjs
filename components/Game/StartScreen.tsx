'use client';

import React from 'react';
import styles from './Game.module.css';
import ThumbScreenLayout from './ThumbScreenLayout';

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <ThumbScreenLayout variant="start">
      <h1 className={styles.startTitle}>Who wants to be a millionaire?</h1>
      <button type="button" onClick={onStart} className={styles.primaryButton}>
        Start
      </button>
    </ThumbScreenLayout>
  );
}
