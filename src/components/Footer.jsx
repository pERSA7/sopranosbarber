import { siteConfig, waLink } from "../data/siteConfig";
import { WhatsAppIcon } from "./icons";

const footerLinks = [
  ...siteConfig.nav,
  { label: "Reservas", href: "#reservas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#inicio">
              <span className="brand-name">SOPRANOS</span>
              <span className="brand-sub">Barber Studio</span>
            </a>
            <p>{siteConfig.claim}</p>
          </div>

          <nav aria-label="Pie de página">
            <ul className="footer-nav">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-meta">
            <a href={waLink()} className="footer-contact">
              <WhatsAppIcon />
              <span>Contacto por WhatsApp</span>
            </a>
            <p className="footer-copy">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
