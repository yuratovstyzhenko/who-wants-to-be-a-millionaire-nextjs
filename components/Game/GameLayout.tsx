import React, { ReactNode } from 'react';
import styles from './Game.module.css';

interface GameLayoutProps {
  main: ReactNode;
  sidebar: ReactNode;
}

export default function GameLayout({ main, sidebar }: GameLayoutProps) {
  return (
    <main className={styles.gameLayout}>
      <section className={styles.gameMain}>{main}</section>
      <aside className={styles.gameSidebar}>{sidebar}</aside>
    </main>
  );
}
