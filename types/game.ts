export interface AnswerConfig {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuestionConfig {
  id: string;
  text: string;
  answers: AnswerConfig[];
  prize: number;
}

export interface GameConfig {
  questions: QuestionConfig[];
}

export type GameStatus = 'start' | 'question';
