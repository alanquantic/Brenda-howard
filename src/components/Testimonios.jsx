import { useState, useEffect, useRef } from 'react'
import './Testimonios.css'

const testimonios = [
  {
    text: 'Que independientemente del estado en que te encuentres, este taller te impulsa a crecer exponencialmente personal y profesionalmente.',
  },
  {
    text: 'La profundidad y sencillez con que se abordan los temas permite un trabajo con enfoque claro. Además, en todo momento invita a la acción.',
  },
  {
    text: 'Es un excelente taller que te permite explorar, analizar y cuestionar de manera positiva el por qué de tus acciones, logrando una mejora increíble en tu día a día.',
  },
]

export default function Testimonios() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef(null)
  const sectionRef = useRef(null)

  const resetInterval = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonios.length)
    }, 5000)
  }

  useEffect(() => {
    resetInterval()
    return () => clearInterval(intervalRef.current)
  }, [])

  const goTo = (i) => {
    setActive(i)
    resetInterval()
  }

  return (
    <section className="testimonios" id="testimonios" ref={sectionRef}>
      <div className="testimonios__bg" />
      <div className="container">
        <h2 className="section-title testimonios__heading">Testimonios</h2>

        <div className="testimonios__slider">
          <div className="testimonios__track" style={{ transform: `translateX(-${active * 100}%)` }}>
            {testimonios.map((t, i) => (
              <div key={i} className="testimonio-slide">
                <div className="testimonio-card">
                  <div className="testimonio-card__quote">“</div>
                  <p className="testimonio-card__text">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonios__dots">
          {testimonios.map((_, i) => (
            <button
              key={i}
              className={`testimonios__dot ${i === active ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>

        <div className="testimonios__arrows">
          <button
            className="testimonios__arrow"
            onClick={() => goTo((active - 1 + testimonios.length) % testimonios.length)}
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            className="testimonios__arrow"
            onClick={() => goTo((active + 1) % testimonios.length)}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
