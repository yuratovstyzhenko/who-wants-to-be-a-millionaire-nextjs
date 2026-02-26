'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import GameOverScreen from '@/components/Game/GameOverScreen';

export default function GameOverPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const scoreParam = searchParams.get('score');
  const earnedPrize = Number(scoreParam ?? '0');

  const handleRestart = () => {
    router.push('/');
  };

  return <GameOverScreen earnedPrize={earnedPrize} onRestart={handleRestart} />;
}
