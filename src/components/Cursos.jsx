import { useEffect, useRef } from 'react'
import './Cursos.css'

const cursos = [
  {
    img: '/images/curso-punto-de-quiebre.png',
    imageClass: 'curso-card__img--full',
    title: 'Punto de quiebre',
    desc: 'Lidera tu próximo nivel. Masterclass para almas líderes y emprendedoras. 13 de octubre de 2026, 09:00 h (México).',
    link: 'https://learning.becomehigherhuman.com/products/courses/punto-de-quiebre-oct',
    price: 'Masterclass',
  },
  {
    img: '/images/curso-nolimits.webp',
    title: 'No Limits. Para Líderes y emprendedores',
    desc: 'Nuestro cliente principal es toda persona que sienta un fuego interno, sabiendo que tiene todo el potencial para crecer.',
    link: 'https://learning.becomehigherhuman.com/products/courses/BHH',
    price: 'Curso',
  },
]

export default function Cursos() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    cardsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="cursos" id="cursos">
      <div className="container">
        <h2 className="section-title">Cursos</h2>
        <div className="cursos__grid">
          {cursos.map((curso, i) => (
            <div
              key={i}
              className="curso-card reveal"
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <img src={curso.img} alt={curso.title} className={`curso-card__img ${curso.imageClass || ''}`} loading="lazy" />
              <div className="curso-card__body">
                <span className="curso-card__tag">{curso.price}</span>
                <h3 className="curso-card__title">{curso.title}</h3>
                <p className="curso-card__desc">{curso.desc}</p>
                <a
                  href={curso.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary curso-card__btn"
                >
                  Ver curso
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
