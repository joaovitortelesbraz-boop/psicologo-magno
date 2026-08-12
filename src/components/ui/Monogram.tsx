type Props = {
  /** Escala do monograma. */
  size?: 'sm' | 'md'
  className?: string
}

const sizes = {
  sm: { m: 'text-[26px]', p: 'text-[19px]' },
  md: { m: 'text-[34px]', p: 'text-[25px]' },
} as const

/**
 * Monograma "MP": duas letras serifadas levemente sobrepostas, no espírito
 * de uma assinatura. Herda a cor do elemento pai.
 */
export function Monogram({ size = 'sm', className = '' }: Props) {
  const s = sizes[size]

  return (
    <span
      aria-hidden="true"
      className={`inline-flex select-none items-end font-serif font-light leading-none ${className}`}
    >
      <span className={s.m}>M</span>
      <span className={`${s.p} -ml-[0.14em] translate-y-[0.06em]`}>P</span>
    </span>
  )
}
