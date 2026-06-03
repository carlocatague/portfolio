import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const PROJECTS = [
  {
    cat: 'web',
    tag: 'Web Development',
    title: 'Attendance & Payroll System',
    desc: 'A comprehensive HR management system with biometric integration, automated payroll, and detailed reporting dashboards.',
    techs: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    img: 'images/attendancepayroll.jpg',
    alt: 'Attendance & Payroll System',
    href: '#contact',
  },
  {
    cat: 'web',
    tag: 'Web Development',
    title: 'Self-Checkout Kiosk System',
    desc: 'Full-featured online kiosk with inventory management, payment gateway integration, and real-time analytics.',
    techs: ['React', 'Javascript', 'PostgreSQL', 'CSS'],
    img: 'images/selfcheckout.jpg',
    alt: 'Self-Checkout Kiosk System',
    href: 'https://self-checkout-system-v12.vercel.app/',
  },
  {
    cat: 'web',
    tag: 'Web Development',
    title: 'Expenses Tracker System',
    desc: 'Expenses monitoring, budget management system, and detailed reporting dashboards, with role-based access.',
    techs: ['React', 'Javascript', 'PostgreSQL', 'CSS'],
    img: 'images/expensestracker.jpg',
    alt: 'Expenses Tracker System',
    href: 'https://expense-tracker-v2-0.vercel.app/',
  },
  {
    cat: 'arch',
    tag: 'Architectural Design',
    title: 'Exterior Design',
    desc: 'Complete architectural design and 3D visualization of a contemporary two-story villa with open-plan living spaces.',
    techs: ['SketchUp', 'Lumion', 'Rendering'],
    img: 'images/exterior.jpg',
    alt: 'Modern Residential Villa',
    href: '#contact',
  },
  {
    cat: 'arch',
    tag: 'Architectural Design',
    title: 'Interior Design',
    desc: 'High-end interior design project featuring premium material selection, custom furniture layout, and ambient lighting plan.',
    techs: ['SketchUp', 'Lumion', 'Rendering'],
    img: 'images/interior.jpg',
    alt: 'Interior Design',
    href: '#contact',
  },
  {
    cat: 'arch',
    tag: 'Architectural Design',
    title: '3D Rendering Visualizations',
    desc: 'Exterior facade design and space planning for a multi-story commercial building with sustainable design principles.',
    techs: ['SketchUp', 'Lumion', 'Rendering'],
    img: 'images/3dlumion.jpg',
    alt: '3D Rendering Visualizations',
    href: '#contact',
  },
]

const FILTERS = [
  { key: 'all',  label: 'All Projects'       },
  { key: 'web',  label: 'Web Development'    },
  { key: 'arch', label: 'Architectural Design' },
]

export default function Portfolio() {
  const [active, setActive] = useState('all')
  useScrollReveal()

  const visible = PROJECTS.filter((p) => active === 'all' || p.cat === active)

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="portfolio-header reveal">
          <div>
            <div className="section-tag">Portfolio</div>
            <h2 className="section-title">Selected <em>Works</em></h2>
          </div>
          <div className="portfolio-filters">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`filter-btn ${active === f.key ? 'active' : ''}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {visible.map((p, i) => (
            <div
              key={p.title}
              className="project-card"
              data-cat={p.cat}
              style={{
                animation: 'certFadeIn 0.4s ease both',
                animationDelay: `${i * 0.07}s`,
              }}
            >
              <div className="project-img">
                <img src={p.img} alt={p.alt} loading="lazy" />
                <span className="project-tag">{p.tag}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-techs">
                  {p.techs.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
                <a href={p.href} className="project-link">
                  View Project <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
