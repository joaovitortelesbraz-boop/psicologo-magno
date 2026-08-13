import { assessmentProcess } from '../data/siteContent'
import { Reveal } from './ui/Reveal'

export function AssessmentProcess() {
  return (
    <section
      id="processo"
      className="px-5 py-14 sm:px-8 lg:flex lg:flex-col lg:justify-center lg:py-20 lg:pl-12 lg:pr-[7%]"
    >
      <Reveal>
        <p className="eyebrow">{assessmentProcess.label}</p>
        <h2 className="section-title mt-5">{assessmentProcess.title}</h2>
      </Reveal>

      <ol className="relative mt-9 space-y-7">
        <span
          aria-hidden="true"
          className="absolute bottom-5 left-[17px] top-5 w-px bg-line-strong/70"
        />

        {assessmentProcess.steps.map((step, index) => (
          <Reveal as="li" key={step.number} delay={70 * index} className="relative flex gap-5">
            <span className="relative z-10 mt-[2px] flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full border border-line bg-cream-50 font-serif text-[14px] text-olive-700">
              {step.number}
            </span>

            <div className="pt-0.5">
              <p className="eyebrow">{step.label}</p>
              <h3 className="mt-1.5 font-serif text-[18px] font-light leading-snug text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[390px] font-sans text-[12.5px] leading-[1.7] text-ink-500">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
