import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

type RevealProps = {
  children: ReactNode
  /** Atraso em ms, para escalonar itens de uma mesma lista. */
  delay?: number
  className?: string
  style?: CSSProperties
  /** Elemento renderizado — útil para manter HTML semântico. */
  as?: 'div' | 'li' | 'article' | 'section'
}

/** Fade + deslocamento vertical discreto quando o bloco entra na viewport. */
export function Reveal({ children, delay = 0, className = '', style, as = 'div' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  // As tags aceitas compartilham os mesmos atributos usados aqui; o cast
  // mantém a tipagem simples sem abrir mão do HTML semântico.
  const Tag = as as 'div'

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
