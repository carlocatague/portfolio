import useScrollReveal from '../hooks/useScrollReveal'

const HIGHLIGHTS = [
  { icon: 'fa-laptop-code',       title: 'Web Development',      desc: 'Modern, responsive, and scalable web applications.'        },
  { icon: 'fa-building',          title: 'Architectural Design',  desc: 'Innovative spatial solutions and 3D render visualizations.'       },
  { icon: 'fa-palette',           title: 'UI/UX Design',          desc: 'User-centered interfaces with elegant aesthetics.'         },
  { icon: 'fa-cogs',              title: 'Systems Development',   desc: 'Business systems tailored to real workflow needs.'         },
]

export default function About() {
  useScrollReveal()

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-inner">
          {/* ── Visual ── */}
          <div className="about-visual reveal-left">
            <div className="about-deco-line" />
            <div className="about-img-card">
              {/*
                ╔═══════════════════════════════════════════════════╗
                ║  ABOUT PHOTO — replace src with your image        ║
                ║  Recommended: portrait/professional, 4:5 ratio    ║
                ╚═══════════════════════════════════════════════════╝
              */}
              <img
                src="/images/Skills.png"
                alt="John Carlo Catague – About"
                loading="lazy"
              />
            </div>
            <div className="about-exp-badge">
              <span className="num">5+</span>
              <span className="label">Yrs Exp</span>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="about-content reveal-right">
            <div className="section-tag">About Me</div>
            <h2 className="section-title">
              A Creative <em>Freelancer</em>
              <br />With Dual Expertise
            </h2>
            <div className="divider" />

            <p className="about-text">
              I'm <strong>John Carlo Catague</strong>, a freelancer
              with over <strong>5 years of experience</strong> merging the worlds
              of web technology and architectural design. I create modern,
              efficient, and visually compelling solutions for clients across
              diverse industries.
            </p>
            <p className="about-text">
              My work spans from developing{' '}
              <strong>robust web systems</strong> — attendance trackers, payroll
              tools, and business platforms — to crafting{' '}
              <strong>immersive architectural visualizations</strong> for
              residential and commercial spaces.
            </p>

            <div className="about-highlights">
              {HIGHLIGHTS.map((h, i) => (
                <div key={h.title} className={`highlight-item reveal delay-${i + 1}`}>
                  <i className={`fas ${h.icon}`} />
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary" style={{ display: 'inline-flex', marginTop: '1rem' }}>
              <i className="fas fa-envelope" /> Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
