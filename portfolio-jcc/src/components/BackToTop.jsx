import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <a
      href="#hero"
      id="back-top"
      className={visible ? 'visible' : ''}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up" />
    </a>
  )
}
