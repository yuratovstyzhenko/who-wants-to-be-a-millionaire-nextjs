'use client';

import React, { useState } from 'react';
import type { GameStatus, QuestionConfig } from '@/types/game';
import { useRouter } from 'next/navigation';
import StartScreen from './StartScreen';
import QuestionScreen from './QuestionScreen';
import GameLayout from './GameLayout';
import PrizeLadder from './PrizeLadder';
import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';

const REVEAL_DELAY = 500;
const NEXT_QUESTION_DELAY = 800;
const FINISH_DELAY = 1000;

interface GameProps {
  initialQuestions: QuestionConfig[];
}

export default function Game({ initialQuestions }: GameProps) {
  const router = useRouter();

  const [gameStatus, setGameStatus] = useState<GameStatus>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [earnedPrize, setEarnedPrize] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentQuestion = initialQuestions[currentQuestionIndex];

  const resetState = () => {
    setSelectedAnswerId(null);
    setIsRevealed(false);
  };

  const handleStart = () => {
    setGameStatus('question');
    setCurrentQuestionIndex(0);
    resetState();
    setEarnedPrize(0);
  };

  const handleSelectAnswer = (answerId: string) => {
    if (isRevealed) return;

    const questionIndex = currentQuestionIndex;
    const question = currentQuestion;
    if (!question) return;

    setSelectedAnswerId(answerId);

    setTimeout(() => {
      const selected = question.answers.find(
        (answer) => answer.id === answerId,
      );
      const isCorrect = selected?.isCorrect ?? false;

      setIsRevealed(true);

      if (isCorrect) {
        setEarnedPrize(question.prize);

        setTimeout(() => {
          const nextIndex = questionIndex + 1;

          if (nextIndex >= initialQuestions.length) {
            router.push(`/game-over?score=${question.prize}`);
          } else {
            setCurrentQuestionIndex(nextIndex);
            resetState();
          }
        }, NEXT_QUESTION_DELAY);
      } else {
        setTimeout(() => {
          router.push(`/game-over?score=${earnedPrize}`);
        }, FINISH_DELAY);
      }
    }, REVEAL_DELAY);
  };

  const handleOpenMobileMenu = () => setIsMobileMenuOpen(true);
  const handleCloseMobileMenu = () => setIsMobileMenuOpen(false);

  if (gameStatus === 'start') {
    return <StartScreen onStart={handleStart} />;
  }

  if (!currentQuestion) {
    return <div>No questions</div>;
  }

  return (
    <>
      <MobileMenuButton onClick={handleOpenMobileMenu} />
      <GameLayout
        main={(
          <QuestionScreen
            question={currentQuestion}
            selectedAnswerId={selectedAnswerId}
            isRevealed={isRevealed}
            onSelectAnswer={handleSelectAnswer}
          />
        )}
        sidebar={(
          <PrizeLadder
            questions={initialQuestions}
            currentIndex={currentQuestionIndex}
          />
        )}
      />

      <MobileMenu
        questions={initialQuestions}
        currentIndex={currentQuestionIndex}
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMobileMenu}
      />
    </>
  );
}
