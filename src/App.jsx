import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SobreMi from './components/SobreMi'
import Servicios from './components/Servicios'
import Galeria from './components/Galeria'
import Cursos from './components/Cursos'
import Libro from './components/Libro'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreMi />
        <Servicios />
        <Galeria />
        <Cursos />
        <Libro />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
