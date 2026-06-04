import useScrollReveal from '../hooks/useScrollReveal'

const SERVICES = [
  { icon: 'fa-globe',          title: 'Website Development',            desc: 'Modern, responsive websites built with clean code, optimized performance, and exceptional user experience across all devices.' },
  { icon: 'fa-users-cog',      title: 'Attendance & Payroll Systems',   desc: 'Automated HR systems with biometric integration, payroll computation, and reporting — tailored for your business workflow.' },
  { icon: 'fa-briefcase',      title: 'Business Web Applications',      desc: 'Custom web-based business tools: inventory, POS, CRM, and management systems built on PHP and MySQL.' },
  { icon: 'fa-couch',          title: 'Interior Design',                desc: 'Thoughtful interior concepts with material selection, furniture layout, lighting plans, and detailed 2D/3D representations.' },
  { icon: 'fa-building',       title: 'Exterior Design',                desc: 'Striking exterior facades and site layouts for residential and commercial properties, from concept to photorealistic render.' },
  { icon: 'fa-cube',           title: '3D Rendering Visualizations',    desc: 'High-quality 3D renders and walkthroughs that bring architectural concepts to life, perfect for presentations and approvals.' },
]

export default function Services() {
  useScrollReveal()

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 4rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Services</div>
          <h2 className="section-title">How I Can <em>Help</em> You</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Professional services crafted to elevate your brand, business, and spaces.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={s.title} className={`service-card reveal delay-${(i % 3) + 1}`}>
              <div className="service-icon">
                <i className={`fas ${s.icon}`} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
