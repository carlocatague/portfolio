import { useEffect } from 'react'

function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10)
  const duration = 1800
  const start    = performance.now()

  function update(now) {
    const elapsed  = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased    = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.floor(eased * target)
    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      el.textContent = target + '+'
    }
  }
  requestAnimationFrame(update)
}

export default function useCounter() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    const counters = document.querySelectorAll('.counter')
    counters.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
