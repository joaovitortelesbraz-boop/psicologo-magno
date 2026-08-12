import { ExternalLink, Instagram } from 'lucide-react'
import { footer, professional } from '../data/siteContent'
import { externalLinkProps, getDeveloperUrl } from '../lib/links'
import { Brand } from './ui/Brand'

export function Footer() {
  // Crédito de desenvolvimento: nome e ícone apontam para o mesmo perfil.
  const developerUrl = getDeveloperUrl()

  return (
    <footer className="bg-olive-950 text-cream-100">
      <div className="mx-auto flex max-w-shell flex-col items-center gap-6 px-5 py-8 text-center sm:px-8 lg:flex-row lg:justify-between lg:gap-8 lg:px-10 lg:py-6 lg:text-left">
        <Brand
          tone="light"
          monogramSize="md"
          subtitle={`${professional.roleFull} | ${professional.crp}`}
          subtitleShort={`${professional.role} | ${professional.crp}`}
        />

        <p className="order-3 font-sans text-[11.5px] text-cream-100/60 lg:order-none">
          © {footer.year} {professional.name}. {footer.copyright}
        </p>

        <div className="flex items-center gap-5">
          <p className="font-sans text-[11.5px] text-cream-100/60">
            {footer.developerLabel}{' '}
            <a
              {...externalLinkProps(developerUrl, '#inicio')}
              className="inline-flex items-center gap-1.5 text-cream-100 transition-colors duration-200 hover:text-white"
            >
              {footer.developerName}
              <ExternalLink className="h-[13px] w-[13px]" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </p>

          <span aria-hidden="true" className="h-4 w-px bg-cream-100/20" />

          <a
            {...externalLinkProps(developerUrl, '#inicio')}
            aria-label={`Instagram da ${footer.developerName} (abre em nova aba)`}
            className="text-cream-100/70 transition-colors duration-200 hover:text-cream-100"
          >
            <Instagram className="h-[17px] w-[17px]" strokeWidth={1.4} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
