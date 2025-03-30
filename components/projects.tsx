"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, Play } from "lucide-react"

export function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "GVSanime",
      description:
        "Plataforma de streaming de anime con funcionalidades de búsqueda avanzada, listas personalizadas y recomendaciones basadas en preferencias del usuario.",
      image: "/coming soon.png",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "#",
      demo: "#",
      featured: true,
      process:
        "Este proyecto nació de mi pasión por el anime y la necesidad de una plataforma que ofreciera una experiencia personalizada. Implementé un sistema de recomendaciones basado en el historial de visualización y desarrollé una interfaz intuitiva para mejorar la experiencia de usuario.",
    },
    {
      id: 2,
      title: "Dashboard Analítico",
      description:
        "Dashboard interactivo para visualización de datos de ventas y métricas de rendimiento con filtros dinámicos y reportes automatizados.",
      image: "/coming soon.png",
      tags: ["Python", "Power BI", "SQL", "Pandas"],
      category: "data",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Sistema de Gestión",
      description:
        "CRUD completo para gestión de inventario y ventas con autenticación de usuarios y diferentes niveles de acceso.",
      image: "/coming soon.png",
      tags: ["React", "Node.js", "MongoDB", "JWT"],
      category: "fullstack",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 4,
      title: "App de Clima",
      description:
        "Aplicación que muestra el pronóstico del tiempo en tiempo real con visualizaciones interactivas y alertas personalizadas.",
      image: "/coming soon.png",
      tags: ["React", "API", "Tailwind CSS"],
      category: "frontend",
      github: "#",
      demo: "#",
      featured: false,
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const featuredProject = projects.find((project) => project.featured)

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
    <section id="projects" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y destacados en desarrollo web y análisis de datos.
          </p>
        </motion.div>

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6">Proyecto Destacado</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400/20 to-slate-600/20 dark:from-slate-500/20 dark:to-slate-300/20 z-10"></div>
                <Image
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">{featuredProject.title}</h4>
                <p className="text-foreground/80 mb-4">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-foreground/70 mb-6 text-sm">{featuredProject.process}</p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="sm" variant="outline">
                    <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="secondary">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4" />
                      Ver Video
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="data">Análisis de Datos</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects
                .filter((project) => !project.featured)
                .map((project) => (
                  <motion.div key={project.id} variants={item}>
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                        <p className="text-foreground/80 text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-3 mt-auto pt-2">
                          <Button asChild size="sm" variant="outline">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-1 h-3 w-3" />
                              Código
                            </a>
                          </Button>
                          <Button asChild size="sm">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-1 h-3 w-3" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

