import './Servicios.css'

const servicios = [
  {
    type: 'logo',
    title: 'Become Higher Human',
    link: 'https://becomehigherhuman.com',
    linkText: 'Más información',
  },
  {
    type: 'home',
    title: 'Inmobiliaria y Howard Corporativo Inmobiliario',
    link: 'https://www.howard-ci.com',
    linkText: 'Más información',
  },
  {
    type: 'team',
    title: 'Coaching',
    link: '#contacto',
    linkText: 'Más información',
  },
]

function ServicioVisual({ type }) {
  if (type === 'logo') {
    return <img src="/images/logo-full.png" alt="" className="servicio-card__img servicio-card__img--logo" />
  }

  if (type === 'home') {
    return (
      <svg viewBox="0 0 24 24" className="servicio-card__icon" aria-hidden="true">
        <path d="M3 11.5 12 4l9 7.5v8a1 1 0 0 1-1 1h-5.5v-6h-5v6H4a1 1 0 0 1-1-1z" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="servicio-card__icon" aria-hidden="true">
      <path d="M16 11a3 3 0 1 0-2.999-3A3 3 0 0 0 16 11Zm-8 0A3 3 0 1 0 5 8a3 3 0 0 0 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0a8.73 8.73 0 0 0-2.33.29A4.83 4.83 0 0 1 17 16.5V19h6v-2.5C23 14.17 18.33 13 16 13Z" fill="currentColor" />
    </svg>
  )
}

export default function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <div className="container">
        <h2 className="section-title">Mis servicios</h2>
        <div className="servicios__grid">
          {servicios.map((s, i) => (
            <article key={i} className="servicio-card">
              <ServicioVisual type={s.type} />
              <div className="servicio-card__body">
                <h3 className="servicio-card__title">{s.title}</h3>
                <a
                  href={s.link}
                  target={s.link.startsWith('http') ? '_blank' : undefined}
                  rel={s.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="btn btn-primary servicio-card__btn"
                >
                  {s.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
