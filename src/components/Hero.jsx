import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__social">
        <a href="https://www.facebook.com/labrendish" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
        <a href="https://www.instagram.com/brenda.howard.coach/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">ig</a>
        <a href="https://www.linkedin.com/in/brendahoward100" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
      </div>

      <div className="hero__content container">
        <div className="hero__copy">
          <img src="/images/sello.png" alt="" className="hero__seal" />
          <p className="hero__title">
            Despierta tu potencial, asume tu liderazgo y transforma tu futuro.
          </p>
          <div className="hero__buttons">
            <a href="#servicios" className="btn btn-primary">Mis servicios</a>
            <a
              href="https://wa.me/524492810359"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hero__contact-btn"
            >
              Contacto
            </a>
          </div>
        </div>
        <img src="/images/hero-cutout.png" alt="" className="hero__portrait" />
      </div>
      <a href="#sobre" className="hero__scroll-down" aria-label="Ir a la siguiente sección">
        <span className="hero__scroll-arrow" />
      </a>
    </section>
  )
}
