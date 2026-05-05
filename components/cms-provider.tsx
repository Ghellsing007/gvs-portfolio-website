"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { portfolioApi } from "@/lib/api";

const CMSContext = createContext<any>(null);

export function CMSProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [profile, projects, certifications, experience, skills] = await Promise.all([
          portfolioApi.getProfile(),
          portfolioApi.getProjects(),
          portfolioApi.getCertifications(),
          portfolioApi.getExperience(),
          portfolioApi.getSkills(),
        ]);

        // Adaptamos la data al formato que espera el sitio
        const cmsData = {
          personalInfo: {
            name: profile.name,
            title: profile.title,
            email: profile.email,
            phone: profile.phone,
            website: profile.social?.web,
            social: [
              { name: "GitHub", url: profile.social?.github, icon: "Github" },
              { name: "LinkedIn", url: profile.social?.linkedin, icon: "Linkedin" },
              { name: "Web", url: profile.social?.web, icon: "Globe" },
            ].filter(s => s.url),
          },
          es: {
            cvFile: profile.cvUrl,
            hero: profile.hero?.es,
            about: {
              title: "Sobre Mí",
              summary: profile.bio?.es,
              skillsTitle: "Tecnologías y Herramientas",
              skills: skills.map((s: any) => ({ name: s.name, category: s.category })),
              languagesTitle: "Idiomas",
              languages: [
                { name: "Español", level: "Nativo" },
                { name: "Inglés", level: "Básico" },
              ],
            },
            projects: projects.map((p: any) => ({
              title: p.title.es,
              description: p.description.es,
              image: p.image,
              tags: p.tags,
              link: p.link,
              github: p.github,
            })),
            certifications: certifications.map((c: any) => ({
              title: c.title,
              issuer: c.issuer,
              date: c.date,
              link: c.link,
              image: c.image,
            })),
            resume: {
              experience: experience.filter((e: any) => e.type === "experience").map((e: any) => ({
                company: e.company,
                role: e.role,
                period: e.period,
                description: e.description.es,
                skills: e.skills || [],
              })),
              education: experience.filter((e: any) => e.type === "education").map((e: any) => ({
                institution: e.institution,
                degree: e.degree,
                period: e.period,
                description: e.description.es,
              })),
              keySkills: Array.from(new Set(skills.map((s: any) => s.category))).map(cat => ({
                title: cat,
                items: skills.filter((s: any) => s.category === cat).map((s: any) => s.name)
              }))
            }
          },
          en: {
            cvFile: profile.cvUrl,
            hero: profile.hero?.en || profile.hero?.es,
            about: {
              title: "About Me",
              summary: profile.bio?.en || profile.bio?.es,
              skillsTitle: "Technologies & Tools",
              skills: skills.map((s: any) => ({ name: s.name, category: s.category })),
              languagesTitle: "Languages",
              languages: [
                { name: "Spanish", level: "Native" },
                { name: "English", level: "Basic" },
              ],
            },
            projects: projects.map((p: any) => ({
              title: p.title.en || p.title.es,
              description: p.description.en || p.description.es,
              image: p.image,
              tags: p.tags,
              link: p.link,
              github: p.github,
            })),
            certifications: certifications.map((c: any) => ({
              title: c.title,
              issuer: c.issuer,
              date: c.date,
              link: c.link,
              image: c.image,
            })),
            resume: {
              experience: experience.filter((e: any) => e.type === "experience").map((e: any) => ({
                company: e.company,
                role: e.role,
                period: e.period,
                description: e.description.en || e.description.es,
                skills: e.skills || [],
              })),
              education: experience.filter((e: any) => e.type === "education").map((e: any) => ({
                institution: e.institution,
                degree: e.degree,
                period: e.period,
                description: e.description.en || e.description.es,
              })),
              keySkills: Array.from(new Set(skills.map((s: any) => s.category))).map(cat => ({
                title: cat,
                items: skills.filter((s: any) => s.category === cat).map((s: any) => s.name)
              }))
            }
          }
        };

        setData(cmsData);
      } catch (error) {
        console.error("Error loading CMS data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <CMSContext.Provider value={{ data, loading }}>
      {children}
    </CMSContext.Provider>
  );
}

export const useCMS = () => useContext(CMSContext);
