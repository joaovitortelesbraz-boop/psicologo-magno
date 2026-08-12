import { about } from '../data/siteContent'
import { BotanicalBranch } from './decorations/BotanicalBranch'
import { Reveal } from './ui/Reveal'

export function About() {
  return (
    <section
      id="sobre"
      className="relative px-5 py-14 sm:px-8 lg:border-r lg:border-line lg:py-20 lg:pl-[9%] lg:pr-14"
    >
      {/* Detalhe botânico: fica na margem, nunca disputa com o texto. */}
      <BotanicalBranch
        className="pointer-events-none absolute -left-8 top-8 hidden w-[190px] text-olive opacity-[0.14] lg:block xl:w-[215px]"
      />

      <Reveal className="relative">
        <p className="eyebrow">{about.label}</p>

        <h2 className="section-title mt-5">
          <span className="block">{about.titleTop}</span>
          <span className="block italic">{about.titleName}</span>
        </h2>

        <div className="mt-7 max-w-[420px] space-y-5">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="font-sans text-[13.5px] leading-[1.8] text-ink-500">
              {paragraph}
            </p>
          ))}
        </div>

        <a href={about.ctaHref} className="btn-outline mt-9 w-full sm:w-auto">
          {about.ctaLabel}
        </a>
      </Reveal>
    </section>
  )
}
