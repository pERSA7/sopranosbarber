// ============================================================
// CONFIGURACIÓN DEL SITIO — SOPRANOS BARBER STUDIO
// Centralizá acá todos los datos que cambian por negocio.
//
// Los datos señalados con "DATO DE EJEMPLO" son ficticios:
// reemplazalos por los datos reales antes de publicar la web.
// ============================================================

export const siteConfig = {
  name: "SOPRANOS Barber Studio",
  shortName: "SOPRANOS",
  claim: "Técnica, detalle y estilo en cada corte.",

  // DATO DE EJEMPLO — reemplazá el número real: código de país + número,
  // sin "+", sin espacios y sin guiones (ej: 5491100000000).
  whatsapp: {
    phone: "5490000000000",
    defaultMessage: "Hola SOPRANOS Barber Studio, quiero reservar un turno.",
  },

  // Dirección real del local. El mapa del sitio se genera a partir de `line`.
  // `mapsUrl` abre la ficha completa en Google Maps (link compartible).
  address: {
    line: "9 de Julio 563, U9100 Trelew, Chubut",
    mapsUrl: "https://maps.app.goo.gl/cDF9PR4DjzQvYXUg7",
  },

  // DATO DE EJEMPLO — ajustá los días y horarios reales.
  hours: [
    { days: "Lunes a viernes", time: "10:00 – 21:00" },
    { days: "Sábados", time: "13:00 – 21:00" },
    { days: "Domingos", time: "Cerrado" },
  ],

  nav: [
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Galería", href: "#galeria" },
  ],
};

export function waLink(message) {
  const { phone, defaultMessage } = siteConfig.whatsapp;
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${phone}?text=${text}`;
}

// Referencias de imágenes y video (carpeta /public/media).
// Reemplazá los archivos manteniendo los nombres, o actualizá las rutas acá.
// BASE_URL hace que funcionen igual en GitHub Pages (subcarpeta) que en un
// dominio propio (raíz) sin editar nada al publicar.
export const media = {
  heroVideo: `${import.meta.env.BASE_URL}media/hero.mp4`,
  heroPoster: `${import.meta.env.BASE_URL}media/hero-poster.webp`,
  about: {
    src: `${import.meta.env.BASE_URL}media/about.webp`,
    // Texto alternativo descriptivo de la foto principal de "Nosotros".
    alt: "Barbero trabajando con tijera sobre un corte con mechones grises",
  },
  gallery: [
    // `area` controla la composición de la grilla en escritorio: a | b | c | d | e
    {
      src: `${import.meta.env.BASE_URL}media/gallery-01.webp`,
      alt: "Corte con degradado al ras y yemas grises texturadas — vista lateral",
      area: "a",
    },
    {
      src: `${import.meta.env.BASE_URL}media/gallery-02.webp`,
      alt: "Degradado medio sobre tupé oscuro terminado con precisión — vista lateral",
      area: "b",
    },
    {
      src: `${import.meta.env.BASE_URL}media/gallery-03.webp`,
      alt: "Corte mullet con textura rizada y contorno inferior prolijo — vista lateral",
      area: "c",
    },
    {
      src: `${import.meta.env.BASE_URL}media/gallery-04.webp`,
      alt: "Acabadura del cuello con degradado limpio, reflejada en el espejo del estudio",
      area: "d",
    },
    {
      src: `${import.meta.env.BASE_URL}media/gallery-05.webp`,
      alt: "Interior del estudio durante un turno: espejo, sillón y herramientas de trabajo",
      area: "e",
    },
  ],
};
