import TheHeader from '@/components/TheHeader';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Otakufest PH',
  description: 'Official website for Otakufest PH',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <TheHeader />
        <main className="flex flex-col grow basis-0">{children}</main>
      </body>
    </html>
  );
}

