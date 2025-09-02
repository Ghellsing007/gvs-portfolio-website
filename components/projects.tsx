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
      title: "Orpheus",
      description: "Plataforma para compartir escuchar y reproducir musica.",
      image: "/orpheus-music.png",
      tags: ["React", "Next.js", "Tailwind CSS", "API"],
      category: "web",
      github: "#",
      demo: "https://orpheus-music-sand.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      title: "Rendrly",
      description: "Plataforma para rentar y administrar vehículos.",
      image: "/rendrly.png",
      tags: ["React", "Next.js", "Tailwind CSS", "API"],
      category: "mobile",
      github: "#",
      demo: "https://rendrly.netlify.app/",
      featured: false,
    },
    {
      id: 3,
      title: "GVSAnime",
      description: "Web de anime con API de Jikan y diseño moderno.",
      image: "/GVSanime.png",
      tags: ["React", "Next.js", "Tailwind CSS", "API"],
      category: "web",
      github: "#",
      demo: "https://gvsanime.vercel.app/",
      featured: false,
    },
    {
      id: 4,
      title: "Agendly-Saas",
      description: "Plataforma de agendas online para optimizar la atención al cliente y administrar horarios de forma eficiente.",
      image: "/agendly-saas.webp",
      tags: ["React", "Next.js", "Tailwind CSS", "API"],
      category: "web",
      github: "#",
      demo: "https://agendly-saas.netlify.app/",
      featured: false,
    },
    {
      id: 5,
      title: "inmoplus",
      description: "Plataforma para la gestión y publicación de inmuebles (bienes raíces). Permite buscar propiedades, agendar visitas y contactar agentes.",
      image: "/inmoplus.png",
      tags: ["React", "Next.js", "Tailwind CSS", "API"],
      category: "web",
      github: "#",
      demo: "https://inmoplus.netlify.app/",
      featured: false,
    },
    {
      id: 6,
      title: "generationqr",
      description: "Generador de códigos QR online.",
      image: "/gvs-QR.png",
      tags: ["React", "Next.js", "Tailwind CSS", "API"],
      category: "web",
      github: "#",
      demo: "https://inmoplus.netlify.app/",
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
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Proyectos</h2>
          <div className="h-1 w-16 sm:w-20 bg-primary mx-auto"></div>
          <p className="mt-3 sm:mt-4 text-foreground/80 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Una selección de mis trabajos más recientes y destacados en desarrollo web y análisis de datos.
          </p>
        </motion.div>

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Proyecto Destacado</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400/20 to-slate-600/20 dark:from-slate-500/20 dark:to-slate-300/20 z-10"></div>
                <Image
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h4 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3">{featuredProject.title}</h4>
                <p className="text-foreground/80 mb-4 text-sm sm:text-base leading-relaxed">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs py-1 px-2">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col xs:flex-row gap-3">
                  <Button asChild size="sm" className="w-full xs:w-auto min-h-[44px]">
                    <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visitar sitio
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="data">Análisis de Datos</TabsTrigger>
            </TabsList>
          </div>  */}

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
                      <div className="relative h-40 sm:h-48">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                      <CardContent className="p-4 sm:p-6">
                        <h4 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h4>
                        <p className="text-foreground/80 text-sm mb-4 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs py-1 px-2">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-col gap-3 mt-auto pt-2">
                          {project.demo && (
                            <Button asChild size="sm" className="w-full min-h-[44px]">
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Demo
                              </a>
                            </Button>
                          )}
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

