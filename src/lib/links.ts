import {
  INSTAGRAM_URL,
  DEVELOPER_URL,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from '../data/siteContent'

/**
 * Monta o link do WhatsApp no formato https://wa.me/<numero>?text=<mensagem>.
 * Retorna `null` enquanto o número real não for configurado — nunca use um
 * número fictício como fallback.
 */
export function getWhatsAppUrl(message: string = WHATSAPP_MESSAGE): string | null {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, '')
  if (!digits) return null
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

/** URL do Instagram, ou `null` enquanto o perfil real não for informado. */
export function getInstagramUrl(): string | null {
  return INSTAGRAM_URL.trim() || null
}

/** URL do desenvolvedor, ou `null` enquanto não for informada. */
export function getDeveloperUrl(): string | null {
  return DEVELOPER_URL.trim() || null
}

/* --------------------------------------------------------------------------
 * Google Maps
 *
 * `search` e `dir` fazem parte das Google Maps URLs (`api=1`): esquema
 * público, gratuito e sem chave, que abre o aplicativo no celular quando ele
 * está instalado. O embed usa `output=embed`, também sem chave.
 * -------------------------------------------------------------------------- */

/** Abre a ficha do local no Google Maps. */
export function getMapsSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

/** Abre a navegação com o consultório como destino. */
export function getMapsDirectionsUrl(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`
}

/** Prévia estática em iframe, sem API key. */
export function getMapsEmbedUrl(query: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
}

/**
 * Props prontas para um `<a>` externo que pode ainda não ter destino.
 * Sem URL configurada, o link vira uma âncora interna para a seção de contato
 * (comportamento gracioso, sem link quebrado e sem dado inventado).
 */
export function externalLinkProps(url: string | null, fallbackHash = '#contato') {
  if (!url) {
    return { href: fallbackHash } as const
  }
  return { href: url, target: '_blank', rel: 'noopener noreferrer' } as const
}

/** Avisa no console (apenas em dev) quais configurações ainda faltam. */
export function warnPendingConfig(): void {
  if (!import.meta.env.DEV) return

  const pending: string[] = []
  if (!WHATSAPP_NUMBER.replace(/\D/g, '')) pending.push('WHATSAPP_NUMBER')
  if (!INSTAGRAM_URL.trim()) pending.push('INSTAGRAM_URL')
  if (!DEVELOPER_URL.trim()) pending.push('DEVELOPER_URL')

  if (pending.length) {
    console.warn(
      `[configuração pendente] Defina em src/data/siteContent.ts: ${pending.join(', ')}. ` +
        'Enquanto isso, os botões correspondentes apenas rolam até a seção de contato.',
    )
  }
}
