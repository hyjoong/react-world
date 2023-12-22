import './globals.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { MSWProvider } from '@/mocks/MSWProvider';
import ReactQueryProviders from '@/components/providers/ReactQueryProvider';
import { Titillium_Web } from 'next/font/google';

export const metadata: Metadata = {
  title: 'react world',
  description: 'hello react world',
};

// TODO: font file 분리
export const titilliumWeb = Titillium_Web({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-titillium-web',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={titilliumWeb.variable}>
        <MSWProvider>
          <ReactQueryProviders>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="container font-titillium">
                <Navbar />
                {children}
              </div>
            </ThemeProvider>
          </ReactQueryProviders>
        </MSWProvider>
      </body>
    </html>
  );
}
