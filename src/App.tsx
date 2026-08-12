import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { NeuropsychAssessment } from './components/NeuropsychAssessment'
import { TherapyProcess } from './components/TherapyProcess'
import { Approach } from './components/Approach'
import { FAQ } from './components/FAQ'
import { ContactCTA } from './components/ContactCTA'
import { OfficeLocation } from './components/OfficeLocation'
import { Footer } from './components/Footer'
import { warnPendingConfig } from './lib/links'

/**
 * Faixa de duas colunas separadas por um filete vertical, como na referência.
 * Em telas menores as colunas viram blocos empilhados.
 */
function SplitBand({
  className = '',
  columns = '42/58',
  children,
}: {
  className?: string
  columns?: '42/58' | '58/42'
  children: ReactNode
}) {
  const columnClass = columns === '58/42' ? 'lg:grid-cols-[58fr_42fr]' : 'lg:grid-cols-[42fr_58fr]'

  return (
    <div className={className}>
      <div className={`mx-auto grid max-w-shell ${columnClass}`}>{children}</div>
    </div>
  )
}

export default function App() {
  useEffect(warnPendingConfig, [])

  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-olive-700 focus:px-5 focus:py-3 focus:text-[12px] focus:uppercase focus:tracking-wider2 focus:text-cream-50"
      >
        Ir para o conteúdo
      </a>

      <Header />

      <main>
        <Hero />

        <SplitBand className="border-y border-line bg-cream-200">
          <About />
          <Approach />
        </SplitBand>

        <SplitBand className="bg-blush" columns="58/42">
          <Services />
          <TherapyProcess />
        </SplitBand>

        <NeuropsychAssessment />

        <FAQ />
        <ContactCTA />
        {/* Fecha o bloco de contato: endereço presencial antes do rodapé. */}
        <OfficeLocation />
      </main>

      <Footer />
    </>
  )
}
