"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"
import { useState } from "react"

export function Certifications() {
  const [activeTab, setActiveTab] = useState("all")

  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      platform: "Platzi",
      date: "2023",
      url: "#",
      category: "web",
    },
    {
      id: 2,
      title: "React.js Professional",
      platform: "Platzi",
      date: "2023",
      url: "#",
      category: "web",
    },
    {
      id: 3,
      title: "Node.js & Express",
      platform: "FreeCodeCamp",
      date: "2022",
      url: "#",
      category: "backend",
    },
    {
      id: 4,
      title: "MongoDB for Developers",
      platform: "MongoDB University",
      date: "2022",
      url: "#",
      category: "backend",
    },
    {
      id: 5,
      title: "Data Analysis with Python",
      platform: "Coursera",
      date: "2022",
      url: "#",
      category: "data",
    },
    {
      id: 6,
      title: "SQL Fundamentals",
      platform: "DataCamp",
      date: "2021",
      url: "#",
      category: "data",
    },
    {
      id: 7,
      title: "Power BI Data Analyst",
      platform: "Microsoft Learn",
      date: "2022",
      url: "#",
      category: "data",
    },
    {
      id: 8,
      title: "English B2 Level",
      platform: "EF Standard English Test",
      date: "2023",
      url: "#",
      category: "other",
    },
  ]

  const filteredCertifications =
    activeTab === "all" ? certifications : certifications.filter((cert) => cert.category === activeTab)

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
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificaciones</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            Formación continua y especialización en diferentes áreas del desarrollo y análisis de datos.
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">Todas</TabsTrigger>
              <TabsTrigger value="web">Desarrollo Web</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="data">Análisis de Datos</TabsTrigger>
              <TabsTrigger value="other">Otros</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredCertifications.map((cert) => (
                <motion.div key={cert.id} variants={item}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <Badge variant="outline" className="mb-2 text-xs font-normal">
                          {cert.platform}
                        </Badge>
                        <h4 className="text-lg font-semibold">{cert.title}</h4>
                        <p className="text-sm text-foreground/60">{cert.date}</p>
                      </div>
                      <div className="mt-auto pt-4">
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary flex items-center hover:underline"
                        >
                          Ver certificado
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
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

