'use client';

import React from 'react';
import { QuestionConfig } from '@/types/game';
import styles from './Game.module.css';

interface PrizeLadderProps {
  questions: QuestionConfig[];
  currentIndex: number;
}

export default function PrizeLadder({ questions, currentIndex }: PrizeLadderProps) {
  return (
    <ol className={styles.prizeList}>
      {questions.map((qustion, index) => {
        const isActive = index === currentIndex;
        const isPassed = index < currentIndex;

        const classNames = [
          styles.prizeItem,
          isActive && styles['prizeItem--active'],
          !isActive && isPassed && styles['prizeItem--passed'],
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <li key={qustion.id} className={classNames}>
            $
            {qustion.prize.toLocaleString()}
          </li>
        );
      })}
    </ol>
  );
}
