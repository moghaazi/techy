'use client';

import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from './providers/AuthProvider'
import ScrollProgressProvider from './providers/ScrollProgressProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Techy',
//   description: 'Latest Tech News',
//   icons: '../favicon.png',
// }

export default function RootLayout({ children}) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <ScrollProgressProvider>
              {children}
            </ScrollProgressProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
