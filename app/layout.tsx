import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Who Wants to Be a Millionaire',
  description: 'Test task – quiz game built with Next.js',
  openGraph: {
    title: 'Who Wants to Be a Millionaire',
    description: 'Play the classic quiz built with Netx.js & TypeScript',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
