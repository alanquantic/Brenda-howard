import './Libro.css'

export default function Libro() {
  return (
    <section className="libro" id="libro">
      <div className="container">
        <h2 className="section-title">Libro</h2>
        <div className="libro__grid">
          <img src="/images/libro-original.webp" alt="" className="libro__img" />
          <div className="libro__content">
            <h3 className="libro__title">DIVÓRCIATE de tus juicios</h3>
            <p className="libro__desc">
              Tras varias experiencias personales, fui entendiendo cómo nuestras creencias,
              juicios y paradigmas nos llevan a actuar con cierta convicción, que lejos de
              favorecernos, muchas veces nos perjudica. Cuando esto sucede, la vida nos coloca
              frente a sucesos que nos hacen despertar y tomar acción de forma muy distinta,
              llevándonos por necesidad a divorciarnos de nuestros propios juicios para
              realmente empezar a vivir con amor.
            </p>
            <a
              href="https://a.co/d/gssyBke"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary libro__btn"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
