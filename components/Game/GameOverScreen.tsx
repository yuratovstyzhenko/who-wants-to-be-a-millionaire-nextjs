'use client';

import React from 'react';
import styles from './Game.module.css';
import ThumbScreenLayout from './ThumbScreenLayout';

interface GameOverScreenProps {
  earnedPrize: number;
  onRestart: () => void;
}

export default function GameOverScreen({
  earnedPrize,
  onRestart,
}: GameOverScreenProps) {
  return (
    <ThumbScreenLayout variant="gameOver">
      <div className={styles.gameOverText}>
        <p className={styles.gameOverLabel}>Total score:</p>
        <h1 className={styles.gameOverScore}>
          $
          {earnedPrize.toLocaleString()}
          {' '}
          earned
        </h1>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className={styles.primaryButton}
      >
        Try again
      </button>
    </ThumbScreenLayout>
  );
}
