"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { portfolioConfig } from "@/config/portfolio"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const { title, subtitle, rights, quote } = portfolioConfig[language].footer

  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              {title}
            </Link>
            <p className="text-sm text-foreground/60 mt-1">{subtitle}</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-foreground/60">&copy; {currentYear} {rights}</p>
            <p className="text-sm text-foreground/60 mt-1 italic">{quote}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
