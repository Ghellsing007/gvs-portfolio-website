import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutMe } from "@/components/about-me"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Resume } from "@/components/resume"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <AboutMe />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


