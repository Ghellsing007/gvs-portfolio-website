"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Award } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio";
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"

export function Certifications() {
  const { language } = useLanguage()
  const { items: certifications, title, subtitle } = portfolioConfig[language].certifications;

  return (
    <section id="certifications" className="py-12 sm:py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-lg sm:text-xl font-bold leading-tight">
                      {cert.title}
                    </CardTitle>
                    <Award className="h-6 w-6 text-primary flex-shrink-0" />
                  </div>
                  <CardDescription className="text-base font-medium text-foreground/80">
                    {cert.platform}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="mr-2 h-4 w-4" />
                    {cert.date}
                  </div>
                  {cert.url && cert.url !== "#" && (
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline mt-2 inline-block"
                    >
                      {language === 'es' ? 'Ver credencial' : 'View credential'}
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
