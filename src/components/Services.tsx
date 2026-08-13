import { Focus, History, Languages, ListChecks, Puzzle, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services } from '../data/siteContent'
import type { CognitiveAreaIcon } from '../data/siteContent'
import { Reveal } from './ui/Reveal'

const AREA_ICONS: Record<CognitiveAreaIcon, LucideIcon> = {
  attention: Focus,
  memory: History,
  language: Languages,
  reasoning: Puzzle,
  social: Users,
  executive: ListChecks,
}

export function Services() {
  return (
    <section
      id="servicos"
      className="bg-white/45 px-5 py-14 sm:px-8 lg:border-r lg:border-line lg:py-20 lg:pl-[9%] lg:pr-14"
    >
      <Reveal>
        <p className="eyebrow">{services.label}</p>
        <h2 className="section-title mt-5">{services.title}</h2>
      </Reveal>

      <ul className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:mt-9 lg:gap-4 xl:grid-cols-3">
        {services.areas.map((area, index) => {
          const Icon = AREA_ICONS[area.icon]

          return (
            <Reveal
              as="li"
              key={area.label}
              delay={60 * index}
              className="group rounded-[10px] border border-line bg-cream-50 px-5 py-6 text-center shadow-card transition duration-300 ease-soft hover:-translate-y-[3px] hover:border-line-strong hover:shadow-card-hover"
            >
              <Icon
                className="mx-auto h-[26px] w-[26px] text-ink-700 transition-colors duration-300 group-hover:text-olive-700"
                strokeWidth={1.15}
                aria-hidden="true"
              />

              <h3 className="mt-4 font-serif text-[19px] font-normal leading-[1.2] text-ink-900">
                {area.label}
              </h3>
            </Reveal>
          )
        })}
      </ul>

      <Reveal delay={180} className="mt-10 border-t border-line pt-8">
        <h3 className="font-serif text-[21px] font-light leading-snug text-ink-900">
          {services.contexts.title}
        </h3>

        <p className="mt-3 max-w-[620px] font-sans text-[12.5px] leading-[1.75] text-ink-500">
          {services.contexts.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {services.contexts.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line bg-cream-50/80 px-3.5 py-2 font-sans text-[11.5px] leading-none text-ink-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
