import { Quote } from 'lucide-react'
import { approach } from '../data/siteContent'
import { BotanicalBranch } from './decorations/BotanicalBranch'
import { Reveal } from './ui/Reveal'

export function Approach() {
  return (
    <section
      id="abordagem"
      className="px-5 py-14 sm:px-8 lg:py-20 lg:pl-12 lg:pr-[7%]"
    >
      <Reveal>
        <p className="eyebrow">{approach.label}</p>
        <h2 className="section-title mt-5">{approach.title}</h2>

        <div className="mt-7 max-w-[620px] space-y-5">
          {approach.paragraphs.map((paragraph) => (
            <p key={paragraph} className="font-sans text-[13.5px] leading-[1.8] text-ink-500">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120}>
        <figure className="relative mt-10 overflow-hidden rounded-xl border border-line bg-cream-50 px-6 py-8 shadow-card sm:px-9">
          <Quote
            className="absolute left-6 top-8 h-[22px] w-[22px] text-line-strong sm:left-8"
            strokeWidth={1.2}
            aria-hidden="true"
          />

          <blockquote className="relative pl-8 pr-16 font-serif text-[18px] font-light italic leading-[1.55] text-ink-900 sm:pl-9 sm:text-[20px]">
            {approach.quoteLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </blockquote>

          <BotanicalBranch
            flip
            className="pointer-events-none absolute -bottom-6 right-2 w-[105px] text-olive opacity-[0.22] sm:w-[120px]"
          />
        </figure>
      </Reveal>
    </section>
  )
}
