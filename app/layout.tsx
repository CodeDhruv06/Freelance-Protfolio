import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevTribe - Web3 & Full Stack Development',
  description: 'A team of three passionate freelance web developers building cutting-edge web3 and full-stack applications for global clients.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head >
        <link rel="icon" type="image/jpg" href="/logo.jpg"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
