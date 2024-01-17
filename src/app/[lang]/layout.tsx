"use client"
import { Inter } from 'next/font/google'
import './globals.css'

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
        <head>
            <link rel="icon" href="/svg/favicon.svg" sizes="any" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="Engineering Tomorrow, Redefining Frontiers" />
            <meta property="og:description" content="Our services cover the entire software development lifecycle, from consultation, design, development, testing, to operations and community support." />
            <meta property="og:image" content="/img/ogp.png" />
        </head>
        <body className={inter.className}>
            {children}
        </body>
      </html>
  )
}
