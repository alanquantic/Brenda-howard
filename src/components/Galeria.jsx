import { useState, useEffect, useRef } from 'react'
import './Galeria.css'

const images = [
  { src: '/images/galeria1.jpg', alt: 'Evento Brenda Howard' },
  { src: '/images/galeria2.jpg', alt: 'Taller de coaching' },
  { src: '/images/galeria3.jpg', alt: 'Sesión grupal' },
  { src: '/images/galeria4.jpg', alt: 'Conferencia liderazgo' },
  { src: '/images/galeria5.jpg', alt: 'Retiro transformación' },
  { src: '/images/galeria6.jpg', alt: 'Workshop Brenda Howard' },
]

export default function Galeria() {
  const [lightbox, setLightbox] = useState(null)
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

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
    itemsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight' && lightbox !== null)
        setLightbox((prev) => (prev + 1) % images.length)
      if (e.key === 'ArrowLeft' && lightbox !== null)
        setLightbox((prev) => (prev - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox])

  return (
    <section className="galeria" id="galeria" ref={sectionRef}>
      <div className="container">
        <p className="galeria__label">Momentos</p>
        <h2 className="section-title">Galería</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Imágenes de talleres, retiros, conferencias y momentos de transformación junto a
          líderes y emprendedores.
        </p>
        <div className="galeria__grid">
          {images.map((img, i) => (
            <div
              key={i}
              className="galeria__item reveal"
              ref={(el) => (itemsRef.current[i] = el)}
              style={{ transitionDelay: `${(i % 3) * 0.12}s` }}
              onClick={() => setLightbox(i)}
            >
              <img src={img.src} alt={img.alt} className="galeria__img" loading="lazy" />
              <div className="galeria__item-overlay">
                <span className="galeria__zoom-icon">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="galeria__lightbox" onClick={() => setLightbox(null)}>
          <button className="galeria__lb-close" onClick={() => setLightbox(null)}>×</button>
          <button
            className="galeria__lb-nav galeria__lb-prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length) }}
          >‹</button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="galeria__lb-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="galeria__lb-nav galeria__lb-next"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length) }}
          >›</button>
          <p className="galeria__lb-counter">{lightbox + 1} / {images.length}</p>
        </div>
      )}
    </section>
  )
}
