import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Booking />
        <Location />
      </main>
      <Footer />
    </>
  );
}
