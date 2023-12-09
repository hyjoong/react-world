import './globals.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { MSWProvider } from '@/mocks/MSWProvider';
import ReactQueryProviders from '@/components/providers/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'react world',
  description: 'hello react world',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <MSWProvider>
          <ReactQueryProviders>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="container">
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
