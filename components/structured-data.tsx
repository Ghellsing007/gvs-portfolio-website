export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Garving Vásquez Severino",
    "jobTitle": "Desarrollador Fullstack & Analista de Datos",
    "description": "Desarrollador fullstack junior y analista de datos especializado en React, Next.js, Node.js, MongoDB, Python, SQL y Power BI.",
    "url": "https://garvingvasquez.com",
    "image": "https://garvingvasquez.com/hero.jpg",
    "sameAs": [
      "https://linkedin.com/in/garving-vasquez",
      "https://github.com/garvingvasquez"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Python",
      "SQL",
      "Power BI",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Data Analysis",
      "Web Development"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Universidad Abierta Para Adultos (UAPA)"
    },
    "nationality": {
      "@type": "Country",
      "name": "República Dominicana"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}