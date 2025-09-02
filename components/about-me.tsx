"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutMe() {
  const skills = [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "Python", category: "data" },
    { name: "SQL", category: "data" },
    { name: "Excel", category: "data" },
    { name: "Power BI", category: "data" },
    { name: "Git", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "Oracle", category: "tools" },
  ]

  const languages = [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Basico (en proceso de mejora)" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mí</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center order-2 md:order-1"
          >
            <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-300 opacity-75 blur"></div>
              <div className="relative rounded-full overflow-hidden w-full h-full border-4 border-background">
                <Image
                  src="/hero.jpg"
                  alt="Garving Vásquez Severino - Desarrollador Fullstack & Analista de Datos"
                  width={320}
                  height={320}
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2"
          >
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Desarrollador Fullstack & Analista de Datos</h3>
            <p className="text-foreground/80 mb-3 sm:mb-4 text-left leading-relaxed text-sm sm:text-base">
              Soy un apasionado desarrollador con experiencia en la creación de aplicaciones web completas y análisis de
              datos. Mi enfoque combina habilidades técnicas con una mentalidad orientada a soluciones, permitiéndome
              construir productos digitales que resuelven problemas reales.
            </p>
            <p className="text-foreground/80 mb-3 sm:mb-4 text-left leading-relaxed text-sm sm:text-base">
              Mi trayectoria me ha llevado a especializarme tanto en el desarrollo frontend con React y Next.js, como en
              el backend con Node.js y MongoDB. Complemento estas habilidades con análisis de datos utilizando Python,
              SQL y herramientas de visualización como Power BI.
            </p>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Idiomas:</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <Badge key={language.name} variant="outline" className="px-3 py-1">
                    {language.name}: {language.level}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Tecnologías y Herramientas</h3>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={item}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="flex flex-col items-center justify-center p-3 sm:p-4 h-full min-h-[80px] sm:min-h-[100px]">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 sm:mb-3">
                      <span className="text-lg sm:text-xl font-bold text-primary">{skill.name.charAt(0)}</span>
                    </div>
                    <h4 className="font-medium text-center text-sm sm:text-base leading-tight">{skill.name}</h4>
                    <span className="text-xs text-foreground/60 mt-1 capitalize">{skill.category}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

