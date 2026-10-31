import Reveal from "./Reveal";
import { waLink } from "../data/siteConfig";
import { WhatsAppIcon } from "./icons";

export default function Booking() {
  return (
    <section className="section booking" id="reservas" aria-labelledby="reservas-title">
      <div className="container">
        <Reveal className="booking-panel">
          <p className="kicker">Reservas</p>
          <h2 className="section-title" id="reservas-title">
            Tu próximo corte <em>empieza acá.</em>
          </h2>
          <p className="section-lead">
            Elegí tu horario y coordiná tu próximo turno directamente con
            nosotros.
          </p>
          <a className="btn btn-solid btn-lg" href={waLink()}>
            <WhatsAppIcon />
            <span>Reservar por WhatsApp</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
