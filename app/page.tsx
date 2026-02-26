import React from 'react';
import Game from '@/components/Game/Game';
import gameConfig from '@/config/gameConfig.json';

export default function Home() {
  return <Game initialQuestions={gameConfig.questions} />;
}
