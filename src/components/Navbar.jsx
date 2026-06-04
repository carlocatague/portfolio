import { useEffect, useRef, useState } from 'react'

const LOGO_SEQ = [
  { char: '<',  cls: 'bracket'  },
  { char: 'J',  cls: 'initials' },
  { char: 'C',  cls: 'initials' },
  { char: '/',  cls: 'slash'    },
  { char: '>',  cls: 'bracket'  },
]

function LogoTyping() {
  const [chars, setChars]   = useState([])
  const [done,  setDone]    = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    let timer
    function typeNext() {
      const nextChar = LOGO_SEQ[indexRef.current];
      if (!nextChar) {
        setDone(true);
        return;
      }
      setChars((prev) => [...prev, nextChar]);
      indexRef.current++;
      timer = setTimeout(typeNext, indexRef.current === 1 ? 120 : 90);
    }
    timer = setTimeout(typeNext, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {chars.map((c, i) => (
        <span key={i} className={c.cls}>{c.char}</span>
      ))}
      {!done && (
        <span style={{ color: 'var(--accent)', animation: 'blink .75s step-end infinite', fontFamily: 'Courier New, monospace' }}>
          |
        </span>
      )}
    </>
  )
}

const NAV_LINKS = [
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#portfolio',  label: 'Portfolio'  },
  { href: '#experience', label: 'Experience' },
  { href: '#services',   label: 'Services'   },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeSection, setActive]   = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      let current = ''
      document.querySelectorAll('section[id]').forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="nav-inner">
            <a href="#hero" className="nav-logo" aria-label="Home">
              <LogoTyping />
            </a>

            <ul className="nav-links">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{ color: activeSection === l.href.slice(1) ? 'var(--accent)' : '' }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="nav-cta">Hire Me</a>
              </li>
            </ul>

            <div
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setMenuOpen((o) => !o)}
            >
              <span /><span /><span />
            </div>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {[...NAV_LINKS, { href: '#contact', label: 'Hire Me' }].map((l) => (
          <a key={l.href} href={l.href} className="mobile-link" onClick={close}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
