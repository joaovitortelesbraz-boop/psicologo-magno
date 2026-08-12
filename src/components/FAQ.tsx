import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faq } from '../data/siteContent'
import { Reveal } from './ui/Reveal'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section
      id="faq"
      className="border-y border-line bg-cream-100 px-5 py-14 sm:px-8 lg:px-10 lg:py-16"
    >
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <h2 className="eyebrow text-center">{faq.label}</h2>
        </Reveal>

        <ul className="mt-8 grid gap-3.5 md:grid-cols-2 md:gap-x-6 lg:mt-9">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index
            const buttonId = `faq-pergunta-${index}`
            const panelId = `faq-resposta-${index}`

            return (
              <Reveal
                as="li"
                key={item.question}
                delay={50 * index}
                className="h-fit overflow-hidden rounded-lg border border-line bg-cream-50 shadow-card transition-colors duration-300 hover:border-line-strong"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans text-[13px] text-ink-900 sm:text-[13.5px]"
                  >
                    {item.question}
                    <ChevronDown
                      className={`h-[17px] w-[17px] shrink-0 text-ink-400 transition-transform duration-300 ease-soft ${
                        isOpen ? 'rotate-180 text-olive-700' : ''
                      }`}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  data-open={isOpen}
                  className="collapsible"
                >
                  <div>
                    <p className="border-t border-line-soft px-5 pb-5 pt-4 font-sans text-[12.5px] leading-[1.75] text-ink-500">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
