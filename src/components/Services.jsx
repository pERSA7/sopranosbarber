import Reveal from "./Reveal";
import { services, formatPrice } from "../data/services";
import { waLink } from "../data/siteConfig";

export default function Services() {
  return (
    <section className="section services" id="servicios" aria-labelledby="servicios-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">Servicios</p>
          <h2 className="section-title" id="servicios-title">
            El arte <em>del detalle.</em>
          </h2>
          <p className="section-lead">
            Cada corte tiene su técnica. Cada cliente, su estilo.
          </p>
        </Reveal>

        <ul className="service-list">
          {services.map((service, index) => (
            <Reveal
              as="li"
              className="service-row"
              key={service.name}
              delay={index * 70}
            >
              <span className="service-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="service-info">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <p className="service-price">
                <strong>{formatPrice(service.price)}</strong>
              </p>
              <a
                className="btn btn-ghost service-cta"
                href={waLink(
                  `Hola SOPRANOS Barber Studio, quiero reservar un turno para ${service.name}.`
                )}
              >
                <span>Reservar</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
