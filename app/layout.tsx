import './globals.css';

import type { Metadata } from 'next';
import { Lato, Montserrat } from 'next/font/google';

import { cn } from '@/lib/utils';

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shield Solution Group',
  description:
    'Secure your future with our comprehensive health and life insurance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen antialiased bg-heroBg',
          lato.variable,
          montserrat.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
