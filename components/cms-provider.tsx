"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { portfolioApi } from "@/lib/api";
import { portfolioConfig } from "@/config/portfolio";

const CMSContext = createContext<any>(null);

export function CMSProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const useCMS = process.env.NEXT_PUBLIC_USE_CMS === "true";
    if (!useCMS) {
      setLoading(false);
      return;
    }

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
            hero: {
              ...portfolioConfig.es.hero,
              headline: profile.hero?.es?.headline || profile.hero?.es || portfolioConfig.es.hero.headline,
              subheadline: profile.hero?.es?.subheadline || portfolioConfig.es.hero.subheadline,
            },
            about: {
              title: "Sobre Mí",
              summary: profile.bio?.es || portfolioConfig.es.about.summary,
              skillsTitle: "Tecnologías y Herramientas",
              skills: skills.map((s: any) => ({ name: s.name, category: s.category })),
              languagesTitle: "Idiomas",
              languages: [
                { name: "Español", level: "Nativo" },
                { name: "Inglés", level: "Básico" },
              ],
            },
            projects: {
              ...portfolioConfig.es.projects,
              items: projects.map((p: any) => {
                const staticProject = portfolioConfig.es.projects.items.find(
                  (item: any) => item.title.trim().toLowerCase() === p.title.trim().toLowerCase()
                );
                return {
                  id: p._id || p.id,
                  title: p.title,
                  description: p.description?.es || p.description,
                  image: p.imageUrl || p.image || staticProject?.image || "/placeholder.svg",
                  tags: p.tags,
                  demo: p.demoUrl || p.link || "#",
                  github: p.github || "#",
                  featured: p.featured || false,
                  category: p.category || "web",
                };
              }),
            },
            certifications: {
              ...portfolioConfig.es.certifications,
              items: certifications.map((c: any) => ({
                title: c.title,
                platform: c.platform || c.issuer,
                date: c.date,
                url: c.credentialUrl || c.link || c.url || "#",
                category: c.category || "other",
              })),
            },
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
            hero: {
              ...portfolioConfig.en.hero,
              headline: profile.hero?.en?.headline || profile.hero?.en || portfolioConfig.en.hero.headline,
              subheadline: profile.hero?.en?.subheadline || portfolioConfig.en.hero.subheadline,
            },
            about: {
              title: "About Me",
              summary: profile.bio?.en || portfolioConfig.en.about.summary,
              skillsTitle: "Technologies & Tools",
              skills: skills.map((s: any) => ({ name: s.name, category: s.category })),
              languagesTitle: "Languages",
              languages: [
                { name: "Spanish", level: "Native" },
                { name: "English", level: "Basic" },
              ],
            },
            projects: {
              ...portfolioConfig.en.projects,
              items: projects.map((p: any) => {
                const staticProject = portfolioConfig.en.projects.items.find(
                  (item: any) => item.title.trim().toLowerCase() === p.title.trim().toLowerCase()
                );
                return {
                  id: p._id || p.id,
                  title: p.title,
                  description: p.description?.en || p.description?.es || p.description,
                  image: p.imageUrl || p.image || staticProject?.image || "/placeholder.svg",
                  tags: p.tags,
                  demo: p.demoUrl || p.link || "#",
                  github: p.github || "#",
                  featured: p.featured || false,
                  category: p.category || "web",
                };
              }),
            },
            certifications: {
              ...portfolioConfig.en.certifications,
              items: certifications.map((c: any) => ({
                title: c.title,
                platform: c.platform || c.issuer,
                date: c.date,
                url: c.credentialUrl || c.link || c.url || "#",
                category: c.category || "other",
              })),
            },
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
