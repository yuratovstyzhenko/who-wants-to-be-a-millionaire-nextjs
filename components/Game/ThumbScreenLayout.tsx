'use client';

import React from 'react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import styles from './Game.module.css';

type ThumbScreenVariant = 'start' | 'gameOver';

interface ThumbScreenLayoutProps {
  children: ReactNode;
  variant: ThumbScreenVariant;
}

export default function ThumbScreenLayout({
  children,
  variant,
}: ThumbScreenLayoutProps) {
  const rootClassName = variant === 'start' ? styles.thumbRootStart : styles.thumbRootGameOver;

  return (
    <main className={rootClassName}>
      <div className={styles.thumbInner}>
        <div className={styles.thumbIllustration}>
          <Image
            src="/thumb-illustration.svg"
            alt="Thumb up"
            width={452}
            height={357}
            priority
            className={styles.thumbImage}
          />
        </div>

        <div className={styles.thumbContent}>{children}</div>
      </div>
    </main>
  );
}
