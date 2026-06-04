import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver that adds class "visible"
 * to every element matching `.reveal, .reveal-left, .reveal-right`.
 * Call once at the App level or per-section.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
