"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-12 sm:pt-16 pb-8 bg-gradient-to-b from-background to-background/95"
    >
      <div className="container mx-auto px-4 py-6 sm:py-16 flex flex-col items-center text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-700 dark:from-slate-400 dark:to-slate-200 leading-tight px-2">
            Transformo ideas en aplicaciones reales.
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-foreground/80 leading-relaxed px-2">
            Desarrollador Fullstack y Analista de Datos especializado en crear soluciones digitales.
          </p>
          <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 xs:gap-4 w-full max-w-md xs:max-w-none">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 dark:from-slate-400 dark:to-slate-500 dark:hover:from-slate-500 dark:hover:to-slate-600 w-full xs:w-auto min-h-[44px]"
            >
              <a href="#resume">Ver CV</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full xs:w-auto min-h-[44px]">
              <a href="#projects">Ver Proyectos</a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full xs:w-auto min-h-[44px]">
              <a href="#contact">Contacto</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 w-full max-w-md"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-300 opacity-75 blur"></div>
            <div className="relative bg-background rounded-lg p-1">
              <div className="h-2 w-full bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-300 rounded-full">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "85%" }}
                  transition={{
                    delay: 1,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="h-full bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-300 rounded-full"
                ></motion.div>
              </div>
            </div>
          </div>
          <p className="text-sm text-foreground/60 mt-2">Siempre aprendiendo, siempre creando</p>
        </motion.div>
      </div>
    </section>
  )
}

