'use client';

import React from 'react';
import type { ReactNode } from 'react';
import styles from './Game.module.css';

export type AnswerVisualState = 'inactive' | 'selected' | 'correct' | 'wrong';

interface AnswerButtonProps {
  label: string;
  children: ReactNode;
  state: AnswerVisualState;
  onClick: () => void;
  disabled?: boolean;
}

export function AnswerButton({
  label,
  children,
  state,
  onClick,
  disabled = false,
}: AnswerButtonProps) {
  const classNames = [styles.answerButton];

  if (state === 'selected') classNames.push(styles['answerButton--selected']);
  if (state === 'correct') classNames.push(styles['answerButton--correct']);
  if (state === 'wrong') classNames.push(styles['answerButton--wrong']);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classNames.join(' ')}
    >
      <span className={styles.answerLabel}>{label}</span>
      <span className={styles.answerText}>{children}</span>
    </button>
  );
}

AnswerButton.defaultProps = {
  disabled: false,
};
