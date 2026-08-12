import { useEffect, useRef, useState } from 'react'

type Options = {
  /** Margem inferior para disparar um pouco antes do elemento aparecer. */
  rootMargin?: string
  threshold?: number
}

/**
 * Observa um elemento e devolve `true` na primeira vez que ele entra na
 * viewport. O observer é descartado logo depois — nada fica escutando scroll.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  rootMargin = '0px 0px -12% 0px',
  threshold = 0.12,
}: Options = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Sem suporte a IntersectionObserver: mostra o conteúdo imediatamente.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return { ref, inView }
}
