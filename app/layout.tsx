import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Garving Vásquez Severino | Desarrollador Fullstack & Analista de Datos",
    template: "%s | Garving Vásquez Severino"
  },
  description: "Portafolio profesional de Garving Vásquez Severino, desarrollador fullstack junior y analista de datos. Especializado en React, Next.js, Node.js, MongoDB, Python, SQL y Power BI. Transformo ideas en aplicaciones reales.",
  keywords: [
    "Garving Vásquez Severino",
    "desarrollador fullstack",
    "analista de datos",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Python",
    "SQL",
    "Power BI",
    "Tailwind CSS",
    "portafolio",
    "desarrollador web",
    "programador",
    "República Dominicana",
    "frontend developer",
    "backend developer",
    "data analyst",
    "web developer"
  ],
  authors: [{ name: "Garving Vásquez Severino" }],
  creator: "Garving Vásquez Severino",
  publisher: "Garving Vásquez Severino",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://garvingvasquez.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://garvingvasquez.com',
    title: 'Garving Vásquez Severino | Desarrollador Fullstack & Analista de Datos',
    description: 'Portafolio profesional de Garving Vásquez Severino, desarrollador fullstack junior y analista de datos. Especializado en React, Next.js, Node.js, MongoDB, Python, SQL y Power BI.',
    siteName: 'Garving Vásquez Severino Portfolio',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Garving Vásquez Severino - Desarrollador Fullstack & Analista de Datos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garving Vásquez Severino | Desarrollador Fullstack & Analista de Datos',
    description: 'Portafolio profesional de Garving Vásquez Severino, desarrollador fullstack junior y analista de datos.',
    images: ['/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#64748b" />
        <meta name="msapplication-TileColor" content="#64748b" />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'