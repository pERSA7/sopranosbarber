import { Clock, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig, waLink } from "../data/siteConfig";
import { WhatsAppIcon } from "./icons";

export default function Location() {
  // Mapa incrustado de Google Maps, generado a partir de la dirección
  // configurada (no requiere API key).
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.address.line
  )}&z=16&output=embed`;

  return (
    <section className="section location" id="contacto" aria-labelledby="contacto-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">Contacto</p>
          <h2 className="section-title" id="contacto-title">
            Encontranos.
          </h2>
        </Reveal>

        <Reveal className="location-grid" delay={90}>
          <div className="location-info">
            <div className="location-block">
              <span className="location-icon" aria-hidden="true">
                <MapPin size={18} />
              </span>
              <div>
                <h3>Dirección</h3>
                <p>{siteConfig.address.line}</p>
              </div>
            </div>

            <div className="location-block">
              <span className="location-icon" aria-hidden="true">
                <Clock size={18} />
              </span>
              <div>
                <h3>Horarios</h3>
                <dl className="location-hours">
                  {siteConfig.hours.map((entry) => (
                    <div key={entry.days}>
                      <dt>{entry.days}</dt>
                      <dd>{entry.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="config-note">
                  Dato de ejemplo: ajustá los horarios reales en
                  src/data/siteConfig.js.
                </p>
              </div>
            </div>
          </div>

          <div className="location-side">
            <div className="location-map">
              <iframe
                title="Mapa de ubicación del estudio en Google Maps"
                src={mapsEmbedUrl}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="location-actions">
              <a
                className="btn btn-ghost"
                href={siteConfig.address.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>Ver en Google Maps</span>
              </a>
              <a className="btn btn-solid" href={waLink()}>
                <WhatsAppIcon />
                <span>Reservar por WhatsApp</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
