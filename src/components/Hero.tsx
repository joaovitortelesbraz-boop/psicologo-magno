import {
  CalendarDays,
  GraduationCap,
  Heart,
  MapPin,
  MessageCircle,
  Music,
  PawPrint,
  UserRound,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { hero, professional } from '../data/siteContent'
import type { HeroFactIcon } from '../data/siteContent'
import { withExperienceYears } from '../lib/experience'
import { Reveal } from './ui/Reveal'

const FACT_ICONS: Record<HeroFactIcon, LucideIcon> = {
  person: UserRound,
  calendar: CalendarDays,
  location: MapPin,
  pets: PawPrint,
  chat: MessageCircle,
  heart: Heart,
  education: GraduationCap,
  music: Music,
}

/**
 * Foto do profissional. Com `hasStudioBackground`, o fundo de estúdio é
 * dissolvido no ambiente do hero via blend + máscara (ver styles/index.css).
 */
function HeroPhoto({ className = '' }: { className?: string }) {
  const { src, alt, hasStudioBackground } = hero.photo

  return (
    <img
      src={src}
      alt={alt}
      width={1240}
      height={1250}
      decoding="async"
      className={`hero-photo select-none object-contain object-bottom ${
        hasStudioBackground ? 'hero-photo--blend' : ''
      } ${className}`}
    />
  )
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Camada de ambiente + foto. Isolada para que o blend da foto atinja
          apenas o fundo, nunca os textos. */}
      <div className="hero-ambient absolute inset-0 isolate">
        <HeroPhoto className="absolute bottom-0 left-[57%] hidden h-[min(80vh,700px)] w-auto max-w-none -translate-x-1/2 lg:block xl:left-[54%] xl:h-[min(82vh,760px)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-shell px-5 pt-[var(--header-h)] sm:px-8 lg:px-10">
        <div className="grid items-center gap-y-10 pb-14 pt-10 lg:h-[min(86vh,780px)] lg:min-h-[620px] lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.95fr)_minmax(215px,0.85fr)] lg:gap-x-6 lg:py-0 xl:gap-x-8">
          {/* ------------------------------------------------ Coluna esquerda */}
          <Reveal className="max-w-[520px] lg:max-w-none">
            <p className="eyebrow">
              {professional.roleFull} <span aria-hidden="true">·</span> {professional.crp}
            </p>

            {/* Escala calibrada pela referência: ~44px em 1024 e ~58px em 1440. */}
            <h1 className="mt-5 font-serif font-light leading-[1.06] tracking-[-0.01em] text-ink-900 [font-size:clamp(2.25rem,0.6rem+3.37vw,3.625rem)]">
              {hero.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {/* Sem CTA neste bloco: o respiro do parágrafo é o fecho da
                composição. O agendamento fica no header e nas seções abaixo. */}
            <p className="mt-7 max-w-[380px] font-sans text-[14.5px] leading-[1.75] text-ink-500 sm:text-[15px] lg:mt-8">
              {hero.description}
            </p>
          </Reveal>

          {/* -------------------------------------------------- Foto (mobile) */}
          <div className="flex justify-center lg:hidden">
            <HeroPhoto className="h-[clamp(300px,62vw,440px)] w-auto max-w-none" />
          </div>

          {/* ------------------------------------------------- Coluna direita */}
          <Reveal delay={120} className="lg:col-start-3">
            <ul className="mx-auto w-full max-w-[420px] lg:max-w-none">
              {hero.facts.map((fact, index) => {
                const Icon = FACT_ICONS[fact.icon]

                return (
                  <li
                    key={fact.lines.join(' ')}
                    className={`grid grid-cols-[40px_1fr] ${
                      index > 0 ? 'border-t border-line/70' : ''
                    }`}
                  >
                    <span className="flex items-start justify-start border-r border-line/70 pt-[15px]">
                      <Icon
                        className="h-[17px] w-[17px] text-ink-500"
                        strokeWidth={1.4}
                        aria-hidden="true"
                      />
                    </span>

                    <p
                      className={`py-3 pl-4 font-sans text-[12.5px] leading-[1.55] sm:text-[13px] ${
                        fact.emphasis ? 'font-medium text-ink-900' : 'text-ink-700'
                      }`}
                    >
                      {fact.lines.map((line, i) => (
                        <span key={line} className="lg:block">
                          {withExperienceYears(line)}
                          {i < fact.lines.length - 1 ? ' ' : ''}
                        </span>
                      ))}
                    </p>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
