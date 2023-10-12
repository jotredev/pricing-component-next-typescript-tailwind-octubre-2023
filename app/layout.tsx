import { ReactNode } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/libs/utils';

const font = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pricing',
  description: 'Pricing',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('bg-gray-100 p-5', font.className)}>{children}</body>
    </html>
  );
}
