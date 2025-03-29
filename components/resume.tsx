"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Briefcase, GraduationCap } from "lucide-react"

export function Resume() {
  const experience = [
    {
      id: 1,
      role: "Desarrollador Full Stack",
      company: "Tech Solutions",
      period: "2022 - Presente",
      description:
        "Desarrollo de aplicaciones web utilizando React, Node.js y MongoDB. Implementación de APIs RESTful y optimización de rendimiento.",
      skills: ["React", "Node.js", "MongoDB", "Express", "Git"],
    },
    {
      id: 2,
      role: "Analista de Datos",
      company: "Data Insights",
      period: "2020 - 2022",
      description:
        "Análisis de datos de ventas y marketing. Creación de dashboards interactivos y reportes automatizados para la toma de decisiones.",
      skills: ["Python", "SQL", "Power BI", "Excel", "Pandas"],
    },
    {
      id: 3,
      role: "Desarrollador Frontend",
      company: "Web Creations",
      period: "2019 - 2020",
      description:
        "Diseño y desarrollo de interfaces de usuario responsivas y accesibles. Implementación de mejoras de UX/UI.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Figma"],
    },
  ]

  const education = [
    {
      id: 1,
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Universidad Tecnológica",
      period: "2015 - 2019",
      description: "Especialización en desarrollo de software y análisis de datos.",
    },
    {
      id: 2,
      degree: "Bootcamp de Desarrollo Web Full Stack",
      institution: "Coding Academy",
      period: "2019",
      description: "Programa intensivo de 12 semanas enfocado en tecnologías web modernas.",
    },
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
    <section id="resume" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Currículum</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <div className="mt-6">
            <Button asChild size="lg">
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-2xl font-bold">Experiencia</h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {experience.map((job) => (
                <motion.div key={job.id} variants={item}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold">{job.role}</h4>
                        <Badge variant="outline">{job.period}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-3">{job.company}</p>
                      <p className="text-foreground/80 text-sm mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-2xl font-bold">Educación</h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {education.map((edu) => (
                <motion.div key={edu.id} variants={item}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-3">{edu.institution}</p>
                      <p className="text-foreground/80 text-sm">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12">
              <div className="flex items-center mb-8">
                <h3 className="text-2xl font-bold">Habilidades Clave</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Desarrollo</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Desarrollo Full Stack</li>
                      <li>• Arquitectura de Software</li>
                      <li>• Optimización de Rendimiento</li>
                      <li>• Testing y Debugging</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Análisis</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Visualización de Datos</li>
                      <li>• Modelado Estadístico</li>
                      <li>• ETL y Procesamiento</li>
                      <li>• Reportes Automatizados</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

