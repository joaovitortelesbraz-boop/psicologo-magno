import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation, professional } from '../data/siteContent'
import { Brand } from './ui/Brand'
import { WhatsAppButton } from './ui/ActionButtons'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha o menu no Esc e trava a rolagem do fundo enquanto ele está aberto.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-soft ${
        scrolled || menuOpen
          ? 'border-b border-line bg-cream-50/92 backdrop-blur-md'
          : 'border-b border-transparent bg-cream-50/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-shell items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <a
          href="#inicio"
          className="shrink-0"
          aria-label={`${navigation[0].label} — ${professional.name}, ${professional.roleFull}`}
        >
          <Brand subtitleShort={professional.role} />
        </a>

        {/* Navegação — desktop */}
        <nav aria-label="Navegação principal" className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-6 xl:gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative inline-block py-2 font-sans text-[12.5px] text-ink-700 transition-colors duration-200 hover:text-olive-700 xl:text-[13px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppButton
            label="Agendar conversa"
            compact
            className="hidden !px-5 !py-3 md:inline-flex"
          />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-700 transition-colors duration-200 hover:border-line-strong hover:text-olive-700 lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Navegação — mobile */}
      <div
        id="menu-mobile"
        hidden={!menuOpen}
        className="overflow-hidden border-t border-line bg-cream-50/97 backdrop-blur-md lg:hidden"
      >
        <nav aria-label="Navegação principal (mobile)" className="px-5 pb-7 pt-2 sm:px-8">
          <ul className="flex flex-col">
            {navigation.map((item, index) => (
              <li
                key={item.href}
                className="border-b border-line-soft"
                style={{
                  animation: menuOpen
                    ? `menuItemIn 0.4s cubic-bezier(0.22,0.61,0.36,1) ${index * 45}ms both`
                    : undefined,
                }}
              >
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 font-serif text-[21px] font-light text-ink-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <WhatsAppButton label="Agendar conversa" className="mt-7 w-full" />
        </nav>
      </div>

      <style>{`
        @keyframes menuItemIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </header>
  )
}
