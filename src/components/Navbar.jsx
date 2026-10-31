import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Gestión del menú móvil: cierre con Escape, bloqueo de scroll y foco.
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar${scrolled ? " is-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span className="brand-name">SOPRANOS</span>
          <span className="brand-sub">Barber Studio</span>
        </a>

        <nav className="nav" aria-label="Navegación principal">
          <ul
            id="menu-principal"
            className={`nav-menu${open ? " is-open" : ""}`}
          >
            {siteConfig.nav.map((link, index) => (
              <li key={link.href}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-menu-cta">
              <a className="btn btn-solid" href="#reservas" onClick={closeMenu}>
                Reservar turno
              </a>
            </li>
          </ul>
        </nav>

        <a className="btn btn-ghost navbar-cta" href="#reservas">
          Reservar turno
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
