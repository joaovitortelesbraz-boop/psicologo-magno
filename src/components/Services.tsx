import { Brain, CircleUserRound, Flower2, Heart, Leaf, UsersRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services } from '../data/siteContent'
import type { ServiceIcon } from '../data/siteContent'
import { Reveal } from './ui/Reveal'

const SERVICE_ICONS: Record<ServiceIcon, LucideIcon> = {
  anxiety: Brain,
  selfEsteem: CircleUserRound,
  relationships: UsersRound,
  growth: Leaf,
  stress: Flower2,
  grief: Heart,
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

      {/* Dentro da coluna: 2x3 no notebook (onde 3 colunas apertariam o card
          para ~150px) e 3x2 a partir de 1280px, onde a coluna comporta. */}
      <ul className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:mt-9 lg:gap-4 xl:grid-cols-3">
        {services.items.map((service, index) => {
          const Icon = SERVICE_ICONS[service.icon]

          return (
            <Reveal
              as="li"
              key={service.title}
              delay={60 * index}
              className="group rounded-[10px] border border-line bg-cream-50 px-5 py-7 text-center shadow-card transition duration-300 ease-soft hover:-translate-y-[3px] hover:border-line-strong hover:shadow-card-hover"
            >
              <Icon
                className="mx-auto h-[26px] w-[26px] text-ink-700 transition-colors duration-300 group-hover:text-olive-700"
                strokeWidth={1.15}
                aria-hidden="true"
              />

              <h3 className="mt-4 font-serif text-[19px] font-normal leading-[1.2] text-ink-900">
                {service.title}
              </h3>

              <p className="mx-auto mt-2.5 max-w-[195px] font-sans text-[12.5px] leading-[1.65] text-ink-500">
                {service.description}
              </p>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
