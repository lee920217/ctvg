"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LanguageContext from './context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export default function RootLayout({
  children, params
}: RootLayoutProps) {
  return (
      <html lang={params.lang}>
        <body className={inter.className}>
            {children}
        </body>
      </html>
  )
}
