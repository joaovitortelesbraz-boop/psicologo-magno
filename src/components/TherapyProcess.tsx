import { Clock, Lock, Monitor, UserRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { therapyProcess } from '../data/siteContent'
import type { ProcessIcon } from '../data/siteContent'
import { Reveal } from './ui/Reveal'

const PROCESS_ICONS: Record<ProcessIcon, LucideIcon> = {
  screen: Monitor,
  clock: Clock,
  person: UserRound,
  lock: Lock,
}

export function TherapyProcess() {
  return (
    <section
      id="processo"
      /* A coluna vizinha (6 cards) é bem mais alta: centrar verticalmente no
         desktop evita a sensação de metade vazia embaixo. */
      className="px-5 py-14 sm:px-8 lg:flex lg:flex-col lg:justify-center lg:py-20 lg:pl-12 lg:pr-[7%]"
    >
      <Reveal>
        <p className="eyebrow">{therapyProcess.label}</p>
        <h2 className="section-title mt-5">{therapyProcess.title}</h2>
      </Reveal>

      <ol className="relative mt-9 space-y-7">
        {/* Filete que conecta os passos */}
        <span
          aria-hidden="true"
          className="absolute bottom-5 left-[17px] top-5 w-px bg-line-strong/70"
        />

        {therapyProcess.steps.map((step, index) => {
          const Icon = PROCESS_ICONS[step.icon]

          return (
            <Reveal as="li" key={step.title} delay={70 * index} className="relative flex gap-5">
              <span className="relative z-10 mt-[2px] flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full border border-line bg-cream-50">
                <Icon className="h-[15px] w-[15px] text-ink-700" strokeWidth={1.3} aria-hidden="true" />
              </span>

              <div className="pt-1">
                <h3 className="font-sans text-[13.5px] font-medium leading-snug text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-[350px] font-sans text-[12.5px] leading-[1.7] text-ink-500">
                  {step.description}
                </p>
              </div>
            </Reveal>
          )
        })}
      </ol>
    </section>
  )
}
