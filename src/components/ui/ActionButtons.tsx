import { Instagram } from 'lucide-react'
import { externalLinkProps, getInstagramUrl, getWhatsAppUrl } from '../../lib/links'
import { WhatsAppIcon } from './WhatsAppIcon'

type ButtonProps = {
  label: string
  className?: string
  /** Tamanho do ícone, para o botão compacto do header. */
  compact?: boolean
}

type WhatsAppButtonProps = ButtonProps & {
  /** Peso visual do CTA. `outline` para chamadas mais discretas. */
  variant?: 'primary' | 'outline'
  /** Mensagem inicial específica da seção. Sem valor, usa a padrão. */
  message?: string
}

/**
 * CTA de WhatsApp. Enquanto `WHATSAPP_NUMBER` estiver vazio, o link rola até
 * a seção de contato em vez de apontar para um número inexistente.
 */
export function WhatsAppButton({
  label,
  className = '',
  compact = false,
  variant = 'primary',
  message,
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(message)

  return (
    <a
      {...externalLinkProps(url)}
      className={`${variant === 'outline' ? 'btn-outline' : 'btn-primary'} ${className}`}
      aria-label={url ? `${label} pelo WhatsApp` : `${label} — contato`}
    >
      <WhatsAppIcon className={compact ? 'h-[15px] w-[15px]' : 'h-[17px] w-[17px]'} />
      {label}
    </a>
  )
}

/** CTA secundário para o Instagram, com o mesmo cuidado de fallback. */
export function InstagramButton({ label, className = '' }: ButtonProps) {
  const url = getInstagramUrl()

  return (
    <a
      {...externalLinkProps(url)}
      className={`btn-outline ${className}`}
      aria-label={url ? `${label} (abre em nova aba)` : label}
    >
      <Instagram className="h-[17px] w-[17px]" strokeWidth={1.5} aria-hidden="true" />
      {label}
    </a>
  )
}
