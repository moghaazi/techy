import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from  './providers/AuthProvider'
import ScrollProgressProvider from './providers/ScrollProgressProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Techy',
  description: 'Latest Tech News',
  icons: '../favicon.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ScrollProgressProvider>
            {children}
          </ScrollProgressProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
