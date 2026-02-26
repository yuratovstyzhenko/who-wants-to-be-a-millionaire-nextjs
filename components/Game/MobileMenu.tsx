'use client';

import React from 'react';
import type { QuestionConfig } from '@/types/game';
import PrizeLadder from './PrizeLadder';
import styles from './Game.module.css';

interface MobileMenuProps {
  questions: QuestionConfig[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  questions,
  currentIndex,
  isOpen,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <aside
      className={styles.mobileMenuOverlay}
      role="dialog"
      aria-modal="true"
      aria-label="Prize ladder"
    >
      <button
        type="button"
        className={styles.mobileMenuClose}
        onClick={onClose}
        aria-label="Close prize ladder"
      >
        ✕
      </button>

      <div className={styles.mobileMenuBody}>
        <PrizeLadder questions={questions} currentIndex={currentIndex} />
      </div>
    </aside>
  );
}
