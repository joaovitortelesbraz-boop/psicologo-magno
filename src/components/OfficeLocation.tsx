import { Map, MapPin, Navigation } from 'lucide-react'
import { place } from '../data/siteContent'
import { getMapsDirectionsUrl, getMapsEmbedUrl, getMapsSearchUrl } from '../lib/links'
import { Reveal } from './ui/Reveal'

/**
 * Localização do consultório, logo abaixo do CTA final e antes do rodapé —
 * fecha o bloco de contato com o endereço presencial.
 *
 * Desktop: informações + botões à esquerda, prévia do mapa à direita.
 * Mobile: a ordem do DOM já empilha em localização → endereço → botões → mapa.
 */
export function OfficeLocation() {
  const fullAddress = [place.name, ...place.addressLines].join(', ')

  return (
    <section id="localizacao" className="border-t border-line bg-cream-200">
      <div className="mx-auto grid max-w-shell px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-x-14 lg:px-10 lg:py-16 xl:gap-x-16">
        {/* --------------------------------------------------------- Esquerda */}
        <Reveal>
          <p className="eyebrow">{place.label}</p>

          <h2 className="section-title mt-5 max-w-[420px]">{place.title}</h2>

          <div className="mt-6 flex items-start gap-3.5">
            <MapPin
              className="mt-[3px] h-[18px] w-[18px] shrink-0 text-ink-500"
              strokeWidth={1.4}
              aria-hidden="true"
            />

            <address className="font-sans text-[13.5px] not-italic leading-[1.8] text-ink-500">
              <span className="block font-medium text-ink-900">{place.name}</span>
              {place.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={getMapsSearchUrl(place.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${place.mapsLabel}: ${fullAddress} (abre em nova aba)`}
              className="btn-outline w-full sm:w-auto"
            >
              <Map className="h-[17px] w-[17px]" strokeWidth={1.5} aria-hidden="true" />
              {place.mapsLabel}
            </a>

            <a
              href={getMapsDirectionsUrl(place.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${place.directionsLabel} até ${fullAddress} (abre em nova aba)`}
              className="btn-outline w-full sm:w-auto"
            >
              <Navigation className="h-[17px] w-[17px]" strokeWidth={1.5} aria-hidden="true" />
              {place.directionsLabel}
            </a>
          </div>
        </Reveal>

        {/* ---------------------------------------------------------- Direita */}
        {place.map.enabled && (
          <Reveal delay={120} className="mt-10 lg:mt-0">
            <div className="overflow-hidden rounded-xl border border-line shadow-card">
              <iframe
                src={getMapsEmbedUrl(place.mapQuery)}
                title={place.map.title}
                /* Carrega só quando entra em cena: não atrasa o resto da página. */
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[240px] w-full border-0 sm:h-[300px] lg:h-[340px]"
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
