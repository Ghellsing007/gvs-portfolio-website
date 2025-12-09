"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Briefcase, GraduationCap } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio";
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"

export function Resume() {
  const { language } = useLanguage()
  const { title, downloadCv, experienceTitle, educationTitle, experience, education, keySkills, keySkillsTitle } = portfolioConfig[language].resume;
  const cvFile = portfolioConfig[language].cvFile;

  return (
    <section id="resume" className="py-12 sm:py-16">
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" asChild>
              <a href={cvFile} download>
                <Download className="mr-2 h-4 w-4" />
                {downloadCv}
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">{experienceTitle}</h3>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/20 last:border-0">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                  <div className="mb-1">
                    <h4 className="text-lg sm:text-xl font-bold">{job.role}</h4>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground block mb-3">{job.period}</span>
                  <p className="text-foreground/80 leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">{educationTitle}</h3>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/20 last:border-0">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                  <div className="mb-1">
                    <h4 className="text-lg sm:text-xl font-bold">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-muted-foreground block mb-3">{edu.period}</span>
                  <p className="text-foreground/80 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>

            {keySkills && (
              <div className="mt-12">
                 <h3 className="text-xl sm:text-2xl font-bold mb-6">
                   {keySkillsTitle}
                 </h3>
                 <div className="space-y-4">
                   {keySkills.map((category) => (
                     <div key={category.title}>
                       <h4 className="font-semibold mb-2">{category.title}</h4>
                       <div className="flex flex-wrap gap-2">
                         {category.items.map((skill) => (
                           <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
                             {skill}
                           </Badge>
                         ))}
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
