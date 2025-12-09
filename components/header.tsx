"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { portfolioConfig } from "@/config/portfolio"

export function Header() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const navLinks = portfolioConfig[language].nav

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between max-w-full">
        <Link href="/" className="text-lg sm:text-xl font-bold text-primary">
          Garving Vasquez S.
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-foreground/80 hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
          {mounted && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                aria-label="Toggle language"
                className="mr-2"
              >
                <span className="font-bold text-sm">{language === "es" ? "EN" : "ES"}</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </>
          )}
        </nav>

        <div className="flex items-center md:hidden space-x-2">
          {mounted && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                aria-label="Toggle language"
                className="min-h-[44px] min-w-[44px]"
              >
                <span className="font-bold text-sm">{language === "es" ? "EN" : "ES"}</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="min-h-[44px] min-w-[44px]"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="min-h-[44px] min-w-[44px]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileMenuOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.25 }}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] sm:top-[68px] left-0 w-full h-[calc(100vh-64px)] sm:h-[calc(100vh-68px)] z-40 md:hidden bg-background/95 backdrop-blur-md flex items-center justify-center"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col items-center gap-6 sm:gap-8 text-center px-6 w-full max-w-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg sm:text-xl text-foreground/90 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/10 w-full text-center min-h-[48px] flex items-center justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}