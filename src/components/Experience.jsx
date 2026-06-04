import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import useCounter from '../hooks/useCounter'

const TIMELINE = [
  {
    year: '2013 – 2020',
    title: 'CAD Encoder / Designer',
    desc: 'Encoding and designing CAD floor plans, and 3D renders for residential houses using WIH, Architrend, and iCAD Systems.',
  },
  {
    year: '2020 – 2022',
    title: 'System Investigation / Programmer',
    desc: 'Investigating and developing system floor plan designs and 3D rendering of iCAD System.',
    desc: 'Developed dynamic web-based systems for local businesses, including inventory management tools, business websites, and custom CMS platforms using PHP and MySQL.',
  },
  {
    year: '2022 – 2023',
    title: 'Freelance Architectural Designer',
    desc: 'Expanded into freelance architectural design — delivering AutoCAD floor plans, SketchUp models, and 3D renders for residential and small commercial clients.',
  },
  {
    year: '2023 – 2024',
    title: 'Freelance Web and System Developer',
    desc: 'Designed and delivered multiple Attendance & Payroll web systems, integrating biometric devices, automated computation, and detailed reporting modules.',
  },
    {
    year: '2024 – Present',
    title: 'Freelance Web Developer & Architectural Designer',
    desc: 'Leading complex projects using React and PHP while simultaneously handling high-end interior and exterior design projects with advanced 3D visualization.',
  },
]

const EXP_NUMS = [
  { target: 5,  label: 'Years Freelancing'  },
  { target: 30, label: 'Projects Completed' },
  { target: 20, label: 'Happy Clients'      },
  { target: 2,  label: 'Core Disciplines'   },
]

const WEB_CERTS = [
  {
    type: 'Career Certificate',
    title: 'Meta Front-End Developer',
    topics: ['HTML5, CSS3, JavaScript ES6+', 'UI/UX Design', 'React Basic', 'Advanced React'],
    duration: '168 Hours',
    organizer: 'Meta via Coursera',
    date: 'March 2025',
    icon: 'fa-laptop-code',
  },
  {
    type: 'Career Certificate',
    title: 'Comprehensive Introduction to Front-End Engineering',
    topics: ['HTML5, CSS3, JavaScript ES6+', 'Responsive Web Development', 'DOM API'],
    duration: '12 Hours',
    organizer: 'CodeSignal',
    date: 'June 2025',
    icon: 'fa-laptop-code',
  },
  {
    type: 'Career Certificate',
    title: 'Web Design for Everybody: Basics of Web Development & Coding',
    topics: ['HTML5, CSS3, JavaScript ES6+', 'Advanced Styling with Responsive Design', 'Performance Optimization'],
    duration: '80 Hours',
    organizer: 'University of Michigan via Coursera',
    date: 'August 2025',
    icon: 'fa-laptop-code',
  },
  {
    type: 'Career Certificate',
    title: 'Front-End Engineering with React',
    topics: ['JavaScript for React Developers', 'Web Development in React', 'Routing in React Applications'],
    duration: '18 Hours',
    organizer: 'CodeSignal',
    date: 'October 2025',
    icon: 'fa-react',
    iconLib: 'fab',
  },
  {
    type: 'Career Certificate',
    title: 'React Fundamentals',
    topics: ['JavaScript Programming', 'React for Frontend development', 'Front End Application by using Javascript and React JS'],
    duration: '16 Hours 32 Minutes',
    organizer: 'Board Infinity via Coursera',
    date: 'January 2026',
    icon: 'fa-react',
    iconLib: 'fab',
  },
  {
    type: 'Webinar Courses',
    title: 'Learn Vite – Frontend Build Tool Course',
    topics: ['Creating Static Server', 'Tailwind Integration', 'Env Variables', 'Deployments'],
    duration: '2 Hours',
    organizer: 'freeCodeCamp',
    date: 'February 2026',
    icon: 'fa-bolt',
  },
]

const ARCH_CERTS = [
  {
    type: 'Webinar Courses',
    title: 'AutoCAD Professional Drafting Training',
    topics: ['2D Drafting', 'Construction Documentation', 'Layer Management', 'Annotation Standards'],
    duration: '2 Hours',
    organizer: 'Class Central',
    date: 'April 2025',
    icon: 'fa-drafting-compass',
  },
  {
    type: 'Webinar Courses',
    title: 'SketchUp and Lumion Architectural Visualization',
    topics: ['3D Modeling', 'Material Application', 'Rendering Techniques', 'Animation Walkthroughs'],
    duration: '18 Hours',
    organizer: 'Class Central',
    date: 'July 2025',
    icon: 'fa-cube',
  },
  {
    type: 'Webinar Courses',
    title: 'Sustainable Architecture and Green Building Design',
    topics: ['Energy-Efficient Buildings', 'Sustainable Materials', 'Environmental Impact Assessment', 'Green Design Strategies'],
    duration: '6 Hours',
    organizer: 'Architecture and Environment Society',
    date: 'September 2025',
    icon: 'fa-leaf',
  },
]

const PORTFOLIO_EXP = [
  {
    category: 'Web Development',
    icon: 'fa-code',
    items: [
      'Developed responsive websites using HTML, CSS, JavaScript, React, and Vite.',
      'Integrated RESTful APIs and dynamic content management systems.',
      'Optimized website performance and mobile responsiveness.',
      'Designed user-friendly interfaces following modern UI/UX principles.',
    ],
  },
  {
    category: 'Architectural Design',
    icon: 'fa-drafting-compass',
    items: [
      'Produced architectural plans, elevations, and 3D models using AutoCAD and SketchUp.',
      'Created realistic renderings and walkthrough animations using Lumion.',
      'Assisted in residential and commercial design projects.',
      'Prepared presentation drawings and construction documentation.',
    ],
  },
]

function CertCard({ cert, index }) {
  const iconLib = cert.iconLib || 'fas'
  return (
    <div
      className="cert-card"
      style={{
        animation: `certFadeIn 0.4s ease both`,
        animationDelay: `${index * 0.07}s`,
      }}
    >
      <div className="cert-card-top">
        <div className="cert-icon">
          <i className={`${iconLib} ${cert.icon}`} />
        </div>
        <div className="cert-meta">
          <span className="cert-type">{cert.type}</span>
          {cert.duration && <span className="cert-duration"><i className="fas fa-clock" /> {cert.duration}</span>}
        </div>
      </div>
      <h4 className="cert-title">{cert.title}</h4>
      <ul className="cert-topics">
        {cert.topics.map((t) => (
          <li key={t}><i className="fas fa-check" />{t}</li>
        ))}
      </ul>
      <div className="cert-footer">
        <span className="cert-org"><i className="fas fa-building" />{cert.organizer}</span>
        <span className="cert-date"><i className="fas fa-calendar" />{cert.date}</span>
      </div>
    </div>
  )
}

export default function Experience() {
  const [certTab, setCertTab] = useState('web')
  useScrollReveal()
  useCounter()

  return (
    <section id="experience" className="section">
      <div className="container">

        {/* ── Header ── */}
        <div className="reveal">
          <div className="section-tag">Experience</div>
          <h2 className="section-title">My <em>Journey</em> So Far</h2>
          <p className="section-subtitle">
            Five years of freelancing, continuous learning, and delivering results across two disciplines.
          </p>
        </div>

        {/* ── Timeline + Stats ── */}
        <div className="experience-inner">
          <div className="exp-left reveal-left delay-1">
            <p className="exp-summary">
              From launching my first client website to delivering full architectural design
              packages, every project has refined my skills and deepened my passion for
              creating things that truly matter.
            </p>
            <div className="exp-numbers">
              {EXP_NUMS.map((n) => (
                <div key={n.label} className="exp-num-card">
                  <div className="num counter" data-target={n.target}>0</div>
                  <div className="lbl">{n.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="timeline reveal-right delay-2">
            {TIMELINE.map((t) => (
              <div key={t.year} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-year">{t.year}</div>
                  <h3 className="timeline-title">{t.title}</h3>
                  <p className="timeline-desc">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Certificates ── */}
        <div className="certs-wrap" style={{ marginTop: '5rem' }}>
          <div className="reveal">
            <div className="section-tag">Certificates &amp; Webinars</div>
            <h3 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: '0.5rem' }}>
              Learning &amp; <em>Growth</em>
            </h3>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Continuously upskilling through certified training and professional webinars.
            </p>
          </div>

          {/* Tab switcher */}
          <div className="cert-tabs reveal">
            <button
              className={`cert-tab-btn ${certTab === 'web' ? 'active' : ''}`}
              onClick={() => setCertTab('web')}
            >
              <i className="fas fa-code" /> Web Development
            </button>
            <button
              className={`cert-tab-btn ${certTab === 'arch' ? 'active' : ''}`}
              onClick={() => setCertTab('arch')}
            >
              <i className="fas fa-drafting-compass" /> Architectural Design
            </button>
          </div>

          <div className="certs-grid">
            {(certTab === 'web' ? WEB_CERTS : ARCH_CERTS).map((cert, i) => (
              <CertCard key={cert.title} cert={cert} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
