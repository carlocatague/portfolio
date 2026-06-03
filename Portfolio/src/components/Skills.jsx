import { useEffect } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const WEB_SKILLS = [
  { name: 'HTML / CSS',        pct: 90 },
  { name: 'JavaScript',        pct: 88 },
  { name: 'React / Vite',      pct: 82 },
  { name: 'PHP',               pct: 85 },
  { name: 'MySQL',             pct: 80 },
  { name: 'Responsive Design', pct: 90 },
]

const ARCH_SKILLS = [
  { name: 'AutoCAD',          pct: 80 },
  { name: 'SketchUp',         pct: 95 },
  { name: 'Lumion',           pct: 82 },
  { name: 'Interior Design',  pct: 85 },
  { name: 'Exterior Design',  pct: 88 },
  { name: '3D Rendering',   pct: 84 },
]

function SkillBar({ name, pct }) {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" data-width={pct} />
      </div>
    </div>
  )
}

function SkillCategory({ icon, title, skills, delay }) {
  return (
    <div className={`skills-category reveal delay-${delay}`}>
      <div className="cat-header">
        <div className="cat-icon"><i className={`fas ${icon}`} /></div>
        <h3>{title}</h3>
      </div>
      <div className="skill-list">
        {skills.map((s) => <SkillBar key={s.name} {...s} />)}
      </div>
    </div>
  )
}

export default function Skills() {
  useScrollReveal()

  // Animate skill bars on intersect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-fill').forEach((fill) => {
              setTimeout(() => { fill.style.width = fill.dataset.width + '%' }, 200)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    document.querySelectorAll('.skills-category').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="reveal">
          <div className="section-tag">Skills &amp; Expertise</div>
          <h2 className="section-title">What I <em>Bring</em> to the Table</h2>
          <p className="section-subtitle">
            A versatile skill set bridging the <strong>digital</strong> and <strong>physical</strong> worlds built over years of hands-on learning.
          </p>
        </div>

        <div className="skills-grid">
          <SkillCategory icon="fa-code"               title="Web Development"      skills={WEB_SKILLS}  delay={1} />
          <SkillCategory icon="fa-drafting-compass"   title="Architectural Designing" skills={ARCH_SKILLS} delay={2} />
        </div>
      </div>
    </section>
  )
}
