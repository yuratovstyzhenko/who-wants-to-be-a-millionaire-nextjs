'use client';

import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import GameOverScreen from '@/components/Game/GameOverScreen';

function GameOverContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const scoreParam = searchParams.get('score');
  const parsed = Number(scoreParam);
  const earnedPrize = Number.isFinite(parsed) ? parsed : 0;

  const handleRestart = () => {
    router.push('/');
  };

  return (<GameOverScreen earnedPrize={earnedPrize} onRestart={handleRestart} />);
}

export default function GameOverPage() {
  return (
    <Suspense fallback={null}>
      <GameOverContent />
    </Suspense>
  );
}
