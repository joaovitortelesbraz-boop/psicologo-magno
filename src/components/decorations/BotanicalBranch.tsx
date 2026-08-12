type Props = {
  className?: string
  /** Espelha o ramo horizontalmente. */
  flip?: boolean
}

/** Folhas distribuídas ao longo do caule, alternando os lados. */
const LEAVES = [
  { x: 37, y: 222, rot: -104, s: 0.9 },
  { x: 37, y: 222, rot: -24, s: 0.82 },
  { x: 54, y: 193, rot: -100, s: 1 },
  { x: 54, y: 193, rot: -20, s: 0.92 },
  { x: 72, y: 163, rot: -98, s: 1.04 },
  { x: 72, y: 163, rot: -18, s: 0.96 },
  { x: 90, y: 131, rot: -96, s: 0.98 },
  { x: 90, y: 131, rot: -16, s: 0.9 },
  { x: 110, y: 98, rot: -94, s: 0.86 },
  { x: 110, y: 98, rot: -14, s: 0.8 },
  { x: 133, y: 64, rot: -70, s: 0.68 },
]

/**
 * Ramo botânico em linhas finas — detalhe de fundo, nunca protagonista.
 * Herda a cor do texto do elemento pai (use com opacidade baixa).
 */
export function BotanicalBranch({ className = '', flip = false }: Props) {
  return (
    <svg
      viewBox="0 0 200 270"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M20 258 C 60 196, 90 124, 150 40" />

      {LEAVES.map((leaf, i) => (
        <g key={i} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.rot}) scale(${leaf.s})`}>
          <path d="M0 0 C 8 -11, 26 -13, 36 -2 C 26 9, 8 11, 0 0 Z" />
          <path d="M2 0 C 12 -3, 24 -3, 33 -2" strokeWidth={0.7} />
        </g>
      ))}
    </svg>
  )
}
