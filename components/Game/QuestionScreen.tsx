'use client';

import React from 'react';
import type { QuestionConfig } from '@/types/game';
import { AnswerButton } from './AnswerButton';
import styles from './Game.module.css';

interface QuestionScreenProps {
  question: QuestionConfig;
  selectedAnswerId: string | null;
  isRevealed: boolean;
  onSelectAnswer: (answerId: string) => void;
}

const getLetter = (index: number): string => String.fromCharCode(65 + index);

export default function QuestionScreen({
  question,
  selectedAnswerId,
  isRevealed,
  onSelectAnswer,
}: QuestionScreenProps) {
  return (
    <section className={styles.question}>
      <div className={styles.questionContent}>
        <h1 className={styles.questionTitle}>{question.text}</h1>

        <div className={styles.answersGrid}>
          {question.answers.map((answer, index) => {
            const isSelected = selectedAnswerId === answer.id;
            const { isCorrect } = answer;

            let state: 'inactive' | 'selected' | 'correct' | 'wrong' = 'inactive';

            if (isRevealed) {
              if (isCorrect) {
                state = 'correct';
              } else if (isSelected && !isCorrect) {
                state = 'wrong';
              }
            } else if (isSelected) {
              state = 'selected';
            }

            return (
              <AnswerButton
                key={answer.id}
                label={getLetter(index)}
                state={state}
                onClick={() => onSelectAnswer(answer.id)}
                disabled={isRevealed}
              >
                {answer.text}
              </AnswerButton>
            );
          })}
        </div>
      </div>
    </section>
  );
}
