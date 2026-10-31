// Servicios y precios — DATO DE EJEMPLO: reemplazá los precios reales
// del negocio acá (enteros, en pesos argentinos).

export const services = [
  {
    name: "Corte Clásico",
    description: "Un corte limpio y personalizado, adaptado a tu estilo.",
    price: 12000,
  },
  {
    name: "Fade / Degradado",
    description: "Transiciones precisas y acabados definidos.",
    price: 15000,
  },
  {
    name: "Corte + Barba",
    description: "Una combinación equilibrada para un look completo.",
    price: 20000,
  },
  {
    name: "Perfilado de Barba",
    description: "Definición de contornos y cuidado de los detalles.",
    price: 8000,
  },
];

export function formatPrice(price) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(price);
}
