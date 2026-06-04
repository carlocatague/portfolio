import { useRef } from 'react'
import useTyping  from '../hooks/useTyping'
import useCounter from '../hooks/useCounter'

const STATS = [
  { target: 5,  label: 'Years Experience'  },
  { target: 30, label: 'Projects Delivered' },
  { target: 20, label: 'Happy Clients'      },
]

export default function Hero() {
  const typingRef = useRef(null)
  useTyping(typingRef, 1400)
  useCounter()

  return (
    <section id="hero">
      <div className="hero-bg">
        <div className="hero-bg-mesh" />
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>

      <div className="container">
        <div className="hero-inner">
          {/* ── Content ── */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Available for Projects
            </div>

            <h1 className="hero-name">
              <span className="first">John Carlo</span>
              <span className="last">Catague</span>
            </h1>

            <p className="hero-role">
              <span ref={typingRef} />
              <span className="typing-cursor">|</span>
            </p>

            <p className="hero-desc">
              Crafting <strong>modern digital experiences</strong> and{' '}
              <strong>architectural concepts</strong> that blend creativity
              with functionality. From responsive web systems to stunning
              spatial designs.
            </p>

            <div className="hero-cta">
              <a href="#portfolio" className="btn-primary">
                <i className="fas fa-folder-open" /> View Projects
              </a>
              <a href="#contact" className="btn-outline">
                <i className="fas fa-paper-plane" /> Contact Me
              </a>
            </div>

            <div className="hero-stats">
              {STATS.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <div
                    className="hero-stat-num counter"
                    data-target={s.target}
                  >
                    0
                  </div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Visual ── */}
          <div className="hero-visual">
            <div className="hero-avatar-wrap">
              <div className="hero-avatar-bg" />
              <div className="hero-avatar-inner">
                {/*
                  ╔══════════════════════════════════════════════╗
                  ║  PROFILE PHOTO — replace src with your image ║
                  ║  Recommended: portrait, min 600×750 px       ║
                  ╚══════════════════════════════════════════════╝
                */}
                <img
                  src="/images/Carlo.png"
                  alt="John Carlo Catague – Freelancer"
                  loading="eager"
                />
              </div>
            </div>

            <div className="hero-floating-badge badge-tl">
              <i className="fas fa-code" />
              <span>Developer</span>
            </div>
            <div className="hero-floating-badge badge-br">
              <i className="fas fa-drafting-compass" />
              <span>Designer</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
