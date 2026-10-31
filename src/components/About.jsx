import Reveal from "./Reveal";
import { media } from "../data/siteConfig";

export default function About() {
  return (
    <section className="section about" id="nosotros" aria-labelledby="nosotros-title">
      <div className="container about-inner">
        <Reveal className="about-media">
          <img
            src={media.about.src}
            alt={media.about.alt}
            width="720"
            height="960"
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <Reveal className="about-copy" delay={110}>
          <p className="kicker">Nosotros</p>
          <h2 className="section-title" id="nosotros-title">
            Más que <em>un corte.</em>
          </h2>
          <p>
            Creemos que el estilo está en los detalles. Trabajamos cada corte
            con precisión, dedicación y respeto por la identidad de cada
            cliente.
          </p>
          <p>
            Un espacio donde la técnica, la experiencia y la atención
            personalizada se encuentran.
          </p>
          <p className="about-sign" aria-hidden="true">
            <span>Equipo SOPRANOS</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
