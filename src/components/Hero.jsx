import { media, waLink } from "../data/siteConfig";
import { WhatsAppIcon } from "./icons";

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-label="Presentación de SOPRANOS Barber Studio">
      <div className="hero-media" aria-hidden="true">
        <video
          src={media.heroVideo}
          poster={media.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <p className="kicker hero-kicker">Barbería contemporánea</p>
        <h1 className="hero-title">
          <span className="hero-title-line">Tu estilo.</span>
          <em className="hero-title-signature">Nuestra firma.</em>
        </h1>
        <p className="hero-lead">
          Cortes precisos, atención al detalle y un espacio pensado para
          quienes valoran su estilo.
        </p>
        <div className="hero-actions">
          <a className="btn btn-solid" href={waLink()}>
            <WhatsAppIcon />
            <span>Reservar turno</span>
          </a>
          <a className="btn btn-ghost" href="#servicios">
            <span>Explorar servicios</span>
          </a>
        </div>
      </div>

      <a className="hero-scroll" href="#servicios" aria-label="Continuar hacia servicios">
        <span className="hero-scroll-label" aria-hidden="true">
          Deslizá
        </span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
