import { CircleUserRound, MapPin } from 'lucide-react'
import { contact } from '../data/siteContent'
import { PottedPlant } from './decorations/PottedPlant'
import { InstagramButton, WhatsAppButton } from './ui/ActionButtons'
import { Reveal } from './ui/Reveal'

export function ContactCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-cream-200">
      {/* Só entra quando há folga real na direita — nunca por cima do texto. */}
      <PottedPlant className="pointer-events-none absolute -bottom-1 right-3 hidden w-[118px] xl:block" />

      <div className="relative mx-auto grid max-w-shell items-center gap-y-10 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px_minmax(0,0.95fr)] lg:gap-x-12 lg:px-10 lg:py-12 xl:pr-[170px]">
        {/* --------------------------------------------------------- Esquerda */}
        <Reveal className="flex items-start gap-5">
          <CircleUserRound
            className="mt-1 hidden h-11 w-11 shrink-0 text-ink-400 sm:block"
            strokeWidth={0.9}
            aria-hidden="true"
          />

          <div>
            <h2 className="font-serif text-[26px] font-light leading-[1.15] text-ink-900 sm:text-[28px]">
              {contact.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p className="mt-3 max-w-[280px] font-sans text-[12.5px] leading-[1.7] text-ink-500">
              {contact.description}
            </p>
          </div>
        </Reveal>

        {/* ----------------------------------------------------------- Centro */}
        <Reveal delay={90} className="flex flex-col gap-3">
          <WhatsAppButton label={contact.whatsappLabel} className="w-full" />
          <InstagramButton label={contact.instagramLabel} className="w-full" />

          {/* Nota complementar: informa sem disputar atenção com os botões. */}
          <p className="text-balance text-center font-sans text-[11.5px] leading-[1.6] text-ink-400">
            {contact.paymentNote}
          </p>
        </Reveal>

        {/* ---------------------------------------------------------- Direita */}
        <Reveal delay={160} className="lg:pl-10">
          <div className="flex items-start gap-3.5">
            <MapPin className="mt-[2px] h-[18px] w-[18px] shrink-0 text-ink-500" strokeWidth={1.4} aria-hidden="true" />
            <p className="font-sans text-[12.5px] leading-[1.6]">
              <span className="block font-medium text-ink-900">{contact.presentialTitle}</span>
              <span className="block text-ink-500">{contact.presentialCity}</span>
            </p>
          </div>

          <hr className="my-4 max-w-[230px] border-line" />

          <p className="max-w-[230px] font-sans text-[12.5px] leading-[1.7] text-ink-500">
            {contact.onlineNote}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
