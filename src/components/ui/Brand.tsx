import { professional } from '../../data/siteContent'
import { Monogram } from './Monogram'

type Props = {
  /** Claro para fundos escuros (rodapé), escuro para fundos claros (header). */
  tone?: 'dark' | 'light'
  /** Linha secundária. Padrão: a atuação completa do profissional. */
  subtitle?: string
  /**
   * Versão curta da linha secundária, usada abaixo de 640px. Evita que a
   * atuação completa quebre o bloco de marca em telas estreitas.
   */
  subtitleShort?: string
  monogramSize?: 'sm' | 'md'
  className?: string
}

/** Bloco de marca: monograma, filete vertical e nome do profissional. */
export function Brand({
  tone = 'dark',
  subtitle = professional.roleFull,
  subtitleShort,
  monogramSize = 'sm',
  className = '',
}: Props) {
  const isDark = tone === 'dark'

  return (
    <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
      <Monogram size={monogramSize} className={isDark ? 'text-olive-700' : 'text-cream-100'} />

      <span
        aria-hidden="true"
        className={`h-9 w-px ${isDark ? 'bg-line-strong' : 'bg-cream-100/25'}`}
      />

      <span className="flex flex-col gap-[3px] leading-none">
        <span
          className={`font-sans text-[10.5px] font-medium uppercase tracking-[0.16em] sm:text-[11px] ${
            isDark ? 'text-ink-900' : 'text-cream-100'
          }`}
        >
          {professional.name}
        </span>
        <span
          className={`font-sans text-[8.5px] uppercase tracking-[0.28em] sm:text-[9px] ${
            isDark ? 'text-ink-400' : 'text-cream-100/60'
          }`}
        >
          {subtitleShort ? (
            <>
              <span className="sm:hidden">{subtitleShort}</span>
              <span className="hidden sm:inline">{subtitle}</span>
            </>
          ) : (
            subtitle
          )}
        </span>
      </span>
    </div>
  )
}
