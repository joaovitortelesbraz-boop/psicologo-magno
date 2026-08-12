import { professionalExperience } from '../data/siteContent'

/** Token que os textos usam para receber o total calculado. */
const YEARS_TOKEN = '{anosDeAtuacao}'

/**
 * Anos completos entre a data-base e hoje, somados ao valor-base.
 *
 * Tudo é calculado em datas LOCAIS (`new Date(ano, mês, dia)` e os getters
 * `getFullYear/getMonth/getDate`), nunca em UTC — assim o número não vira
 * adiantado para quem estiver em fuso negativo. A hora é descartada dos dois
 * lados, então a virada acontece exatamente à meia-noite do aniversário.
 *
 * A contagem NÃO usa `anoAtual - anoInicial`: o incremento só ocorre quando o
 * aniversário da data-base já passou dentro do ano corrente.
 */
export function calcYearsSince(baseYears: number, baseDate: string, today: Date): number {
  const [baseYear, baseMonth, baseDay] = baseDate.split('-').map(Number)

  const base = new Date(baseYear, baseMonth - 1, baseDay)
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate())

  // Antes da data-base (relógio atrasado, por exemplo): mantém o valor-base.
  if (now < base) return baseYears

  const anniversary = new Date(now.getFullYear(), base.getMonth(), base.getDate())
  const elapsed = now.getFullYear() - base.getFullYear() - (now < anniversary ? 1 : 0)

  return baseYears + elapsed
}

/** Anos de atuação hoje, a partir da configuração central. */
export function getProfessionalExperienceYears(today: Date = new Date()): number {
  return calcYearsSince(
    professionalExperience.baseYears,
    professionalExperience.baseDate,
    today,
  )
}

/**
 * Substitui `{anosDeAtuacao}` pelo total calculado. Textos sem o token passam
 * intactos, então pode ser aplicado a qualquer linha sem efeito colateral.
 */
export function withExperienceYears(text: string, today?: Date): string {
  if (!text.includes(YEARS_TOKEN)) return text
  // split/join troca todas as ocorrências sem exigir `lib: es2021`.
  return text.split(YEARS_TOKEN).join(String(getProfessionalExperienceYears(today)))
}
