import type { ReactNode } from 'react'
import { Focus, History, Languages, ListChecks, Puzzle, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { neuropsych } from '../data/siteContent'
import type { NeuroAreaIcon } from '../data/siteContent'
import { WhatsAppButton } from './ui/ActionButtons'
import { Reveal } from './ui/Reveal'

const AREA_ICONS: Record<NeuroAreaIcon, LucideIcon> = {
  attention: Focus,
  memory: History,
  language: Languages,
  reasoning: Puzzle,
  social: Users,
  executive: ListChecks,
}

const { intro, contexts, assessment, process, collaboration } = neuropsych

/** Faixa interna de duas colunas: texto editorial à esquerda, painel à direita. */
const SPLIT = 'grid items-start gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-x-16 xl:gap-x-20'

/** Separador entre as faixas internas da seção. */
const DIVIDER = 'mt-14 border-t border-line pt-14 lg:mt-16 lg:pt-16'

/** Painel de borda fina — mesma linguagem em todos os blocos laterais. */
function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-line bg-cream-100/70 px-6 py-6 shadow-card sm:px-7">
      <h3 className="font-serif text-[19px] font-light leading-snug text-ink-900">{title}</h3>
      {children}
    </div>
  )
}

/** Título dos blocos de fechamento da seção. */
function BlockTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-serif text-[22px] font-light leading-snug text-ink-900 sm:text-[24px]">
      {children}
    </h3>
  )
}

/**
 * Seção única de Neuropsicologia, em quatro faixas internas:
 *
 *   1. o que faz o neuropsicólogo (abertura, largura inteira)
 *   2. avaliação neuropsicológica   +  áreas que podem ser investigadas
 *   3. como funciona a avaliação (quatro etapas)
 *   4. situações em que contribui   +  trabalho integrado
 *   5. contato
 *
 * Cada informação aparece uma única vez: o bloco de avaliação apresenta o
 * serviço, as etapas detalham o percurso, e as seis áreas cognitivas só
 * existem no painel "Áreas que podem ser investigadas".
 */
export function NeuropsychAssessment() {
  return (
    <section id="neuropsicologia" className="bg-cream-50">
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* ----------------------------- 1. O que faz um neuropsicólogo */}
        <Reveal>
          <p className="eyebrow">{intro.label}</p>

          <h2 className="section-title mt-5 max-w-[460px]">{intro.title}</h2>

          <div className="mt-7 max-w-[520px] space-y-5">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-sans text-[13.5px] leading-[1.8] text-ink-500">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* ----------------- 2. Avaliação neuropsicológica + 3. áreas avaliadas */}
        <div className={`${DIVIDER} ${SPLIT}`}>
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
            <Panel title={assessment.areasLabel}>
              <ul className="mt-4 grid grid-cols-1 border-t border-line-soft sm:grid-cols-2 sm:gap-x-8">
                {assessment.areas.map((area) => {
                  const Icon = AREA_ICONS[area.icon]

                  return (
                    <li
                      key={area.label}
                      /* Sem filete na última linha: 1 coluna no mobile, 2 a partir de sm. */
                      className="group flex items-center gap-3.5 border-b border-line-soft py-3.5 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                    >
                      <Icon
                        className="h-[17px] w-[17px] shrink-0 text-ink-400 transition-colors duration-300 group-hover:text-olive-700"
                        strokeWidth={1.4}
                        aria-hidden="true"
                      />
                      <span className="font-sans text-[13px] leading-snug text-ink-700 transition-colors duration-300 group-hover:text-ink-900">
                        {area.label}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </Panel>
          </Reveal>
        </div>

        {/* --------------------------------- 5. Como funciona a avaliação */}
        <div className={DIVIDER}>
          <Reveal>
            <BlockTitle>{process.title}</BlockTitle>
          </Reveal>

          {/* Numeral + filete: composição editorial, sem virar quatro cards. */}
          <ol className="mt-8 grid gap-x-14 gap-y-10 sm:grid-cols-2 lg:mt-10 xl:gap-x-20">
            {process.steps.map((step, index) => (
              <Reveal as="li" key={step.number} delay={60 * index}>
                <div className="flex items-center gap-4">
                  <span className="font-serif text-[26px] font-light leading-none text-olive-700">
                    {step.number}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-line" />
                </div>

                <p className="eyebrow mt-4">{step.label}</p>

                <h4 className="mt-2 font-serif text-[20px] font-light leading-snug text-ink-900">
                  {step.title}
                </h4>

                <p className="mt-2.5 max-w-[440px] font-sans text-[12.5px] leading-[1.75] text-ink-500">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* ------------------- 6. Situações que contribui + 7. atuação conjunta */}
        <div
          className={`${DIVIDER} grid gap-y-10 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-20`}
        >
          <Reveal>
            <BlockTitle>{contexts.title}</BlockTitle>

            <p className="mt-3 max-w-[520px] font-sans text-[13px] leading-[1.8] text-ink-500">
              {contexts.description}
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {contexts.items.map((item) => (
                <li key={item} className="flex items-baseline gap-2.5">
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 shrink-0 translate-y-[-2px] rounded-full bg-olive/45"
                  />
                  <span className="font-sans text-[12.5px] leading-[1.6] text-ink-700">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <BlockTitle>{collaboration.title}</BlockTitle>

            <p className="mt-3 max-w-[520px] font-sans text-[13px] leading-[1.8] text-ink-500">
              {collaboration.description}
            </p>

            {/* Composição tipográfica, sem ícone médico e sem foto genérica. */}
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
          </Reveal>
        </div>

        {/* --------------------------------------------------------- 7. Contato */}
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
