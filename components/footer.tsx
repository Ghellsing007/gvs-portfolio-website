import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Portfolio
            </Link>
            <p className="text-sm text-foreground/60 mt-1">Desarrollador Full Stack & Analista de Datos</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-foreground/60">&copy; {currentYear} Todos los derechos reservados</p>
            <p className="text-sm text-foreground/60 mt-1 italic">"El código es poesía en movimiento"</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

