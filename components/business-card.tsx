"use client"

import { useState, type ComponentType, type KeyboardEvent, type SVGProps } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio";
import { useLanguage } from "@/components/language-provider"

export function BusinessCard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const { language } = useLanguage()
  const personalInfo = portfolioConfig.personalInfo;
  const businessCard = portfolioConfig[language].businessCard;
  const about = portfolioConfig[language].about;

  const toggleFlip = () => setIsFlipped((prev) => !prev)
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      toggleFlip()
    }
  }

  return (
    <section
      className="relative pt-24 pb-10 sm:pt-32 sm:pb-14 bg-background"
      aria-label="Tarjeta interactiva con detalles de Garving Vásquez Severino"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
          <p className="text-base sm:text-lg text-foreground/70">
            {language === 'es' 
              ? "Echa un vistazo a quién soy, qué hago y cómo podemos colaborar."
              : "Take a look at who I am, what I do, and how we can collaborate."}
          </p>
        </div>

        <div
          role="button"
          tabIndex={0}
          onClick={toggleFlip}
          onKeyDown={handleKeyDown}
          className="mx-auto w-full max-w-4xl cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          style={{ perspective: "2000px" }}
          aria-pressed={isFlipped}
          aria-label="Tarjeta de presentación interactiva de Garving Vásquez Severino"
        >
          <div
            className={cn(
              "relative w-full min-h-[640px] sm:h-[500px] lg:h-[420px] transition-transform duration-700 [transform-style:preserve-3d]",
              isFlipped && "[transform:rotateY(180deg)]"
            )}
          >
            <CardFront personalInfo={personalInfo} businessCard={businessCard} />
            <CardBack personalInfo={personalInfo} summary={about.summary[0]} language={language} />
          </div>
        </div>

        <p className="mt-6 text-sm text-foreground/60 text-center">
          {language === 'es'
            ? "Presiona la tarjeta para alternar entre la información frontal y posterior."
            : "Click the card to toggle between front and back info."}
        </p>
      </div>
    </section>
  )
}

function CardFront({ 
  personalInfo, 
  businessCard 
}: { 
  personalInfo: typeof portfolioConfig.personalInfo,
  businessCard: typeof portfolioConfig.es.businessCard | typeof portfolioConfig.en.businessCard
}) {
  const { name, phone, email, website } = personalInfo
  const { title, company, location, tagline, skills } = businessCard

  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl [backface-visibility:hidden]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/60 to-background/90 dark:from-primary/20 dark:via-background/40 dark:to-background/70" />
      <div className="absolute inset-0 opacity-20">
        <CircuitLines className="h-full w-full text-primary/40" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-28 opacity-25">
        <RetroWave className="h-full w-full text-primary/30" />
      </div>
      <div className="relative z-10 h-full">
        <div className="hidden h-full flex-col gap-5 p-5 sm:flex sm:gap-6 sm:p-8 lg:flex-row">
          <div className="flex items-center justify-center lg:w-1/3">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary/30 to-primary/10 blur" />
              <div className="relative h-32 w-32 xs:h-36 xs:w-36 sm:h-40 sm:w-40 lg:h-44 lg:w-44 overflow-hidden rounded-full border-4 border-background/70 shadow-lg">
                <Image
                  src="/hero.jpg"
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 200px, 240px"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 text-primary">
                <RetroPhone className="h-12 w-12 text-primary/80 dark:text-primary/60" />
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between gap-5 sm:gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">{name}</h3>
              <p className="text-base sm:text-xl text-primary/80 dark:text-primary/60 font-medium">{title}</p>
              <p className="text-sm sm:text-base text-foreground/70">{company}</p>
              <p className="mt-3 text-sm sm:text-base text-foreground/70 leading-relaxed">{tagline}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoItem icon={MapPin} label="Ubicación" value={location} />
              <InfoItem icon={Phone} label="Teléfono" value={phone} />
              <InfoItem icon={Mail} label="Correo" value={email} />
              <InfoItem icon={Globe} label="Web" value={website} isLink />
            </div>

            <div>
              <p className="text-xs font-semibold tracking-wide text-primary/70 uppercase mb-2">Stack principal</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] sm:text-xs font-medium text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col items-center gap-4 p-5 text-center sm:hidden">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-primary/10 blur" />
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-background/70 shadow-lg">
              <Image
                src="/hero.jpg"
                alt={name}
                fill
                className="object-cover"
                sizes="120px"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <h3 className="text-xl font-semibold text-foreground">{name}</h3>
            <p className="text-sm font-medium text-primary/80 dark:text-primary/60">{title}</p>
            <p className="text-xs text-foreground/70">{company}</p>
          </div>

          <p className="text-sm text-foreground/70 leading-relaxed">
            {tagline}
          </p>

          <div className="w-full space-y-3 text-left">
            <InfoItem icon={MapPin} label="Ubicación" value={location} variant="compact" />
            <InfoItem icon={Phone} label="Teléfono" value={phone} variant="compact" />
            <InfoItem icon={Mail} label="Correo" value={email} variant="compact" />
          </div>

          <div className="w-full">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary/70 mb-2">
              Stack principal
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.slice(0, 4).map((skill: string) => (
                <span
                  key={skill}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-medium text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40" />
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-primary/40 via-primary/20 to-primary/60" />
      <div className="absolute inset-y-0 left-0 w-[3px] bg-primary/20" />
      <div className="absolute inset-y-0 right-0 w-[3px] bg-primary/30" />
    </div>
  )
}

function CardBack({ 
  personalInfo, 
  summary,
  language
}: { 
  personalInfo: typeof portfolioConfig.personalInfo,
  summary: string,
  language: string
}) {
  const { social, name } = personalInfo
  const currentYear = new Date().getFullYear()

  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/50 to-background/90 dark:from-primary/30 dark:via-background/40 dark:to-background/70" />
      <div className="absolute inset-0 opacity-25">
        <CircuitLines className="h-full w-full text-primary/30" />
      </div>
      <div className="absolute top-10 left-10 opacity-40">
        <RoseIcon className="h-10 w-10 text-primary/50" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-40">
        <RoseIcon className="h-10 w-10 text-primary/50" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center sm:px-12">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-primary/70">{name.split(" ")[0]} {currentYear}</p>
        <h3 className="mt-3 text-xl sm:text-3xl font-semibold text-foreground">
          {language === 'es' ? "Colaboración y resultados" : "Collaboration and results"}
        </h3>
        <p className="mt-4 text-sm sm:text-lg text-foreground/70 max-w-xl">{summary}</p>

        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-2 text-xs sm:text-sm font-medium text-foreground/80 transition-colors hover:border-primary/50 hover:bg-primary/10"
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </a>
          ))}
        </div>

        <p className="mt-8 sm:mt-10 text-[11px] sm:text-xs text-foreground/50 tracking-[0.3em]">
          {language === 'es' ? "Haz clic para regresar" : "Click to flip back"}
        </p>
      </div>

      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30" />
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-primary/30 via-primary/15 to-primary/45" />
      <div className="absolute inset-y-0 left-0 w-[3px] bg-primary/15" />
      <div className="absolute inset-y-0 right-0 w-[3px] bg-primary/25" />
    </div>
  )
}

function InfoItem({
  icon: Icon,
  label,
  value,
  isLink = false,
  variant = "default",
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  value: string
  isLink?: boolean
  variant?: "default" | "compact"
}) {
  const content = isLink ? (
    <a href={value} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
      {value}
    </a>
  ) : (
    value
  )

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/5 text-foreground/80",
        variant === "compact" ? "px-3 py-2 text-sm" : "px-3 py-2.5 sm:py-3 text-sm"
      )}
    >
      <Icon className={cn("h-4 w-4 flex-shrink-0 text-primary/70", variant === "compact" ? "mt-0" : "mt-0.5")} />
      <div>
        <p
          className={cn(
            "uppercase tracking-wide text-primary/60",
            variant === "compact" ? "text-[10px]" : "text-xs"
          )}
        >
          {label}
        </p>
        <p className={cn("break-words", variant === "compact" ? "text-[13px]" : "text-sm")}>{content}</p>
      </div>
    </div>
  )
}

function RetroPhone({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10", className)}
    >
      <rect x="16" y="10" width="32" height="44" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="22" y="16" width="20" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
      {[24, 32, 40].map((cx) => (
        <circle key={`row-1-${cx}`} cx={cx} cy={36} r={1.5} fill="currentColor" />
      ))}
      {[24, 32, 40].map((cx) => (
        <circle key={`row-2-${cx}`} cx={cx} cy={42} r={1.5} fill="currentColor" />
      ))}
      {[24, 32, 40].map((cx) => (
        <circle key={`row-3-${cx}`} cx={cx} cy={48} r={1.5} fill="currentColor" />
      ))}
    </svg>
  )
}

function CircuitLines({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
    >
      <path
        d="M0 20 H380 M20 0 V200 M380 40 V220 M80 40 V140 H200 M300 100 H350 M250 180 H400"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="6 6"
      />
      {[{ cx: 80, cy: 40 }, { cx: 200, cy: 140 }, { cx: 300, cy: 100 }, { cx: 250, cy: 180 }, { cx: 380, cy: 40 }, { cx: 20, cy: 200 }].map((point) => (
        <circle key={`point-${point.cx}-${point.cy}`} cx={point.cx} cy={point.cy} r={4} fill="currentColor" />
      ))}
    </svg>
  )
}

function RetroWave({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
    >
      {[80, 60, 40].map((y, index) => (
        <path
          key={y}
          d={`M0 ${y} Q50 ${y - 40}, 100 ${y} Q150 ${y + 40}, 200 ${y} Q250 ${y - 40}, 300 ${y} Q350 ${y + 40}, 400 ${y}`}
          stroke="currentColor"
          strokeWidth={index === 0 ? 1.5 : 1}
          opacity={1 - index * 0.2}
        />
      ))}
    </svg>
  )
}

function RoseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M12 22C12 17 8 17 8 12C8 7 12 2 12 2C12 2 16 7 16 12C16 17 12 17 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M5 12C8 10 10 5 10 5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19 12C16 10 14 5 14 5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 17C16.5 16 16.5 11.5 16.5 11.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 17C7.5 16 7.5 11.5 7.5 11.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
