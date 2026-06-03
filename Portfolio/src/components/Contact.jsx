import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import useScrollReveal from '../hooks/useScrollReveal'

const SERVICE_OPTIONS = [
  'Website Development',
  'Attendance & Payroll System',
  'Business Web Application',
  'Interior Design',
  'Exterior Design',
  '3D Architectural Visualization',
  'Other',
]

const CONTACT_DETAILS = [
  { icon: 'fa-envelope',      label: 'Email',    value: 'carlocatague26@gmail.com' },
  { icon: 'fa-phone',         label: 'Phone',    value: '+63 952 473 3317'          },
  { icon: 'fa-map-marker-alt',label: 'Location', value: 'Cavite, Philippines'           },
]

const SOCIALS = [
  { icon: 'fab fa-facebook-f', label: 'Facebook',  href: '#' },
  { icon: 'fab fa-linkedin-in',label: 'LinkedIn',  href: '#' },
  { icon: 'fab fa-github',     label: 'GitHub',    href: '#' },
  { icon: 'fab fa-instagram',  label: 'Instagram', href: '#' },
  { icon: 'fab fa-behance',    label: 'Behance',   href: '#' },
]

function validateEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
}

export default function Contact() {
  useScrollReveal()

  const formRef = useRef(null)
  const [status,  setStatus]  = useState('idle') // idle | sending | success | error
  const [errors,  setErrors]  = useState({})
  const [values,  setValues]  = useState({ name: '', email: '', service: '', message: '' })

  const set = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }))

  function validate() {
    const errs = {}
    if (!values.name.trim())                errs.name    = 'Please enter your full name.'
    if (!values.email.trim())               errs.email   = 'Please enter your email address.'
    else if (!validateEmail(values.email))  errs.email   = 'Please enter a valid email address.'
    if (!values.message.trim())             errs.message = 'Please write a message.'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('sending')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          reply_to:  values.email,
          service:   values.service || 'Not specified',
          message:   values.message,
          to_email:  'carlocatague26@gmail.com',
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const reset = () => {
    setStatus('idle')
    setValues({ name: '', email: '', service: '', message: '' })
    setErrors({})
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="reveal" style={{ maxWidth: '560px' }}>
          <div className="section-tag">Contact</div>
          <h2 className="section-title">Let's Build Something <em>Together</em></h2>
        </div>

        <div className="contact-inner">
          {/* ── Info ── */}
          <div className="contact-info reveal-left delay-1">
            <p className="contact-text">
              Have a project in mind? Whether it's a web application, architectural design, or a
              hybrid of both — I'd love to hear about it. Reach out and let's make it happen.
            </p>

            <div className="contact-details">
              {CONTACT_DETAILS.map((d) => (
                <div key={d.label} className="contact-item">
                  <div className="contact-item-icon">
                    <i className={`fas ${d.icon}`} />
                  </div>
                  <div>
                    <div className="contact-item-label">{d.label}</div>
                    <div className="contact-item-value">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="social-link" aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Form ── */}
          <div className="contact-form reveal-right delay-2">
            {status === 'success' && (
              <div className="form-success" style={{ display: 'block' }}>
                <i className="fas fa-check-circle" />
                <p>Message sent successfully!</p>
                <span>I'll get back to you at the earliest.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="form-error" style={{ display: 'block' }}>
                <i className="fas fa-exclamation-circle" />
                <p>Oops! Something went wrong.</p>
                <span>
                  Please try again or email directly at{' '}
                  <strong>carlocatague26@gmail.com</strong>
                </span>
                <button onClick={reset} className="btn-retry">Try Again</button>
              </div>
            )}

            {(status === 'idle' || status === 'sending') && (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name" type="text" value={values.name}
                    onChange={set('name')} placeholder="Your full name"
                    className={errors.name ? 'invalid' : ''}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email" type="email" value={values.email}
                    onChange={set('email')} placeholder="your@email.com"
                    className={errors.email ? 'invalid' : ''}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service" value={values.service}
                    onChange={set('service')}
                    style={{ appearance: 'none', WebkitAppearance: 'none' }}
                  >
                    <option value="" disabled>Select a service...</option>
                    {SERVICE_OPTIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" value={values.message}
                    onChange={set('message')}
                    placeholder="Tell me about your project..."
                    className={errors.message ? 'invalid' : ''}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <button type="submit" className="form-submit" disabled={status === 'sending'}>
                  {status === 'sending'
                    ? <><i className="fas fa-spinner fa-spin" /> Sending…</>
                    : <><i className="fas fa-paper-plane" /> Send Message</>
                  }
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
