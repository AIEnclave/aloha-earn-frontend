'use client';

import './globals.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '../contexts/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { SessionProvider } from 'next-auth/react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

const queryClient = new QueryClient();

interface RootLayoutProps {
  children: React.ReactNode;
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <ThemeProvider>
              <AuthProvider>
                <div className="layout">
                  <Header />
                  <main className="main">
                    {children}
                  </main>
                  <Footer />
                </div>
              </AuthProvider>
            </ThemeProvider>
          </SessionProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
