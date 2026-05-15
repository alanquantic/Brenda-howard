import './SobreMi.css'

export default function SobreMi() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre__intro container">
        <div className="sobre__heading">
          <h2 className="section-title">Sobre mi</h2>
          <div className="sobre__heading-divider" />
        </div>
        <div className="sobre__grid">
          <div className="sobre__content">
            <h3 className="sobre__lead">
              El miedo te inhabilita o te potencializa... ¿Estás listo para descubrir realmente tu potencial?
            </h3>
            <p className="sobre__text">
              Soy una mujer apasionada a la vida y que sin pensarlo ni planearlo, la vida me
              regaló las experiencias necesarias para descubrir todo ese potencial que llevaba
              adentro y que por lo mismo hoy se ha convertido en mi propósito de vida. A través
              de mis experiencias personales, inspirar a otros a que se atrevan a conectar con
              su fuego interno y descubrir su potencial.
            </p>
            <a href="https://wa.me/524492810359" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Contáctame
            </a>
          </div>
          <p className="sobre__text sobre__bio">
            Soy madre de cuatro hijos, directora de la franquicia inmobiliaria REMAX 100 durante
            casi 10 años y actualmente en Howard Corporativo Inmobiliario, ofreciendo el servicio
            de una plataforma para crecimiento de inmobiliarios. Soy conferencista, coach y
            creadora del programa Become Higher Human.
          </p>
          <img src="/images/hero-portrait.png" alt="Brenda Howard" className="sobre__photo" />
        </div>
      </div>

      <div className="sobre__program">
        <div className="container sobre__program-grid">
          <img src="/images/program-photo.jpeg" alt="Brenda Howard" className="sobre__program-photo" />
          <div>
            <h3>
              A través de talleres, pláticas, retiros y sesiones de coaching y mentoría personalizada,
              ayudo a líderes y emprendedores a liberar su máximo potencial.
            </h3>
            <a href="https://becomehigherhuman.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Conoce más
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
