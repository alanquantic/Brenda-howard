import { useState, useRef, useEffect } from 'react'
import './Contacto.css'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [sent, setSent] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ nombre: '', email: '', telefono: '', mensaje: '' })
  }

  return (
    <section className="contacto" id="contacto" ref={sectionRef}>
      <div className="contacto__bg" />
      <div className="container">
        <div className="contacto__grid">
          <div className="contacto__info reveal">
            <p className="contacto__label">Escríbeme</p>
            <h2 className="contacto__title">
              Recibe información<br />de los cursos
            </h2>
            <div className="contacto__divider" />
            <p className="contacto__desc">
              ¿Estás listo para dar el siguiente paso? Déjame tus datos y con gusto te
              haré llegar información sobre programas, talleres y próximas fechas.
            </p>
            <div className="contacto__channels">
              <a
                href="mailto:avivir@brendahoward.mx"
                className="contacto__channel"
              >
                <span className="contacto__channel-icon">✉</span>
                <span>avivir@brendahoward.mx</span>
              </a>
              <a
                href="https://wa.me/524492810359"
                target="_blank"
                rel="noopener noreferrer"
                className="contacto__channel"
              >
                <span className="contacto__channel-icon">💬</span>
                <span>WhatsApp +52 449 281 0359</span>
              </a>
            </div>
            <div className="contacto__social">
              <a href="https://www.facebook.com/labrendish" target="_blank" rel="noopener noreferrer" className="contacto__soc-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/brenda.howard.coach/" target="_blank" rel="noopener noreferrer" className="contacto__soc-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/brendahoward100" target="_blank" rel="noopener noreferrer" className="contacto__soc-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div className="contacto__form-col reveal" style={{ transitionDelay: '0.2s' }}>
            {sent ? (
              <div className="contacto__success">
                <div className="contacto__success-icon">✓</div>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por contactarme. Te responderé pronto.</p>
                <button className="btn btn-primary" onClick={() => setSent(false)}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="contacto__form" onSubmit={handleSubmit}>
                <div className="contacto__field">
                  <label htmlFor="nombre">Nombre completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="contacto__field">
                  <label htmlFor="email">Correo electrónico *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div className="contacto__field">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+52 000 000 0000"
                  />
                </div>
                <div className="contacto__field">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="¿En qué puedo ayudarte?"
                    rows={4}
                  />
                </div>
                <button type="submit" className="btn btn-primary contacto__submit">
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
