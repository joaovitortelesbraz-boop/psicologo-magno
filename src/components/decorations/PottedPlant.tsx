type Props = {
  className?: string
}

/**
 * Vaso com planta em traço fino e tons de sálvia/creme. Reproduz o objeto do
 * canto direito da referência sem recorrer a uma foto chamativa.
 */
export function PottedPlant({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 150 190"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g stroke="#7C8062" strokeWidth={1.1} strokeLinecap="round" strokeLinejoin="round">
        {/* Folhas altas, tipo espada */}
        <path d="M75 128 C 62 104, 56 74, 60 44 C 70 70, 78 98, 78 128 Z" fill="#DFE2CF" />
        <path d="M76 128 C 88 100, 98 76, 108 56 C 106 88, 96 112, 82 130 Z" fill="#E7E9DA" />
        <path d="M74 130 C 58 112, 44 96, 34 76 C 52 90, 68 108, 78 128 Z" fill="#E7E9DA" />
        <path d="M75 130 C 74 106, 76 82, 82 60 C 88 84, 86 110, 80 130 Z" fill="#D7DBC5" />
        <path d="M75 130 C 66 116, 52 108, 40 104 C 56 106, 70 116, 78 128 Z" fill="#EDEFE2" />
        <path d="M76 130 C 88 118, 102 110, 116 106 C 100 112, 86 120, 80 130 Z" fill="#EDEFE2" />
      </g>

      {/* Vaso */}
      <g stroke="#C9BFAF" strokeWidth={1.1} strokeLinejoin="round">
        <path d="M45 128 H105 L98 182 A4 4 0 0 1 94 186 H56 A4 4 0 0 1 52 182 Z" fill="#F4EFE7" />
        <path d="M45 128 H105" />
        <path d="M43 124 H107 A2 2 0 0 1 107 132 H43 A2 2 0 0 1 43 124 Z" fill="#EFE8DD" />
        <path d="M60 140 L57 176" stroke="#E2D9CB" strokeWidth={0.9} />
      </g>

      {/* Sombra muito suave sob o vaso */}
      <ellipse cx="75" cy="187" rx="34" ry="3.5" fill="#000" opacity="0.05" />
    </svg>
  )
}
