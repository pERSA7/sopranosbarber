import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Reveal from "./Reveal";
import { media } from "../data/siteConfig";

export default function Gallery() {
  const images = media.gallery;
  const [active, setActive] = useState(null);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const current = active !== null ? images[active] : null;

  const close = useCallback(() => {
    setActive(null);
    triggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (direction) => {
      setActive((value) => (value + direction + images.length) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    if (active === null) return undefined;
    dialogRef.current?.querySelector(".lightbox-close")?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  // Captura de foco dentro del visor + navegación con teclado.
  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      close();
      return;
    }
    if (event.key === "ArrowRight") {
      step(1);
      return;
    }
    if (event.key === "ArrowLeft") {
      step(-1);
      return;
    }
    if (event.key !== "Tab") return;

    const focusables = dialogRef.current?.querySelectorAll(
      "button:not([tabindex='-1'])"
    );
    if (!focusables || focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <section className="section gallery" id="galeria" aria-labelledby="galeria-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">Galería</p>
          <h2 className="section-title" id="galeria-title">
            El trabajo <em>habla.</em>
          </h2>
          <p className="section-lead">
            Cortes y acabados reales, hechos dentro del estudio.
          </p>
        </Reveal>

        <ul className="gallery-grid">
          {images.map((image, index) => (
            <Reveal
              as="li"
              key={image.src}
              className={`gallery-item gallery-area-${image.area}`}
              delay={(index % 3) * 90}
            >
              <button
                type="button"
                className="gallery-button"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setActive(index);
                }}
                aria-label={`Ampliar imagen: ${image.alt}`}
                aria-haspopup="dialog"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width="720"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ampliada: ${current.alt}`}
          onKeyDown={onKeyDown}
          ref={dialogRef}
        >
          <button
            type="button"
            className="lightbox-backdrop"
            tabIndex={-1}
            aria-hidden="true"
            onClick={close}
          />
          <figure className="lightbox-figure">
            <img key={current.src} src={current.src} alt={current.alt} />
            <figcaption>{current.alt}</figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={() => step(-1)}
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={() => step(1)}
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={22} />
          </button>
          <button
            type="button"
            className="lightbox-close"
            onClick={close}
            aria-label="Cerrar imagen ampliada"
          >
            <X size={22} />
          </button>
        </div>
      )}
    </section>
  );
}
