import { neuropsych } from '../data/siteContent'
import { WhatsAppButton } from './ui/ActionButtons'
import { Reveal } from './ui/Reveal'

const { assessment, collaboration } = neuropsych

export function NeuropsychAssessment() {
  return (
    <section id="neuropsicologia" className="bg-cream-50">
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid items-start gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-x-16 xl:gap-x-20">
          <Reveal>
            <p className="eyebrow">{assessment.label}</p>
            <h2 className="section-title mt-5 max-w-[460px]">{assessment.title}</h2>

            <div className="mt-7 max-w-[520px] space-y-5">
              {assessment.paragraphs.map((paragraph) => (
                <p key={paragraph} className="font-sans text-[13.5px] leading-[1.8] text-ink-500">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl border border-line bg-cream-100/70 px-6 py-7 shadow-card sm:px-7">
              <h3 className="font-serif text-[22px] font-light leading-snug text-ink-900 sm:text-[24px]">
                {collaboration.title}
              </h3>

              <p className="mt-3 max-w-[520px] font-sans text-[13px] leading-[1.8] text-ink-500">
                {collaboration.description}
              </p>

              <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2.5 sm:gap-x-5">
                {collaboration.professionals.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 font-sans text-[12.5px] text-ink-700 sm:gap-5"
                  >
                    {index > 0 && (
                      <span aria-hidden="true" className="hidden h-3 w-px bg-line-strong sm:block" />
                    )}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <WhatsAppButton
            variant="outline"
            label={neuropsych.ctaLabel}
            message={neuropsych.whatsappMessage}
            className="mt-12 w-full sm:w-auto"
          />
        </Reveal>
      </div>
    </section>
  )
}
