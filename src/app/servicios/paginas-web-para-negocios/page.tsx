import type { Metadata } from "next";

const SITE_URL = "https://www.david-ortiz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Páginas web para negocios en Colombia | David Ortiz",
  description:
    "Creo páginas web modernas y funcionales para negocios que necesitan mostrar servicios, generar confianza y recibir clientes. Sitios web profesionales en Colombia.",
  keywords: [
    "páginas web para negocios",
    "desarrollo web para negocios",
    "sitios web profesionales Colombia",
    "diseño web para emprendedores",
    "páginas web con WhatsApp",
    "presencia digital para negocios",
  ],
  alternates: {
    canonical: `${SITE_URL}/servicios/paginas-web-para-negocios`,
  },
  openGraph: {
    title: "Páginas web para negocios en Colombia | David Ortiz",
    description:
      "Sitios web modernos, responsivos y funcionales para negocios que necesitan presencia digital profesional.",
    url: `${SITE_URL}/servicios/paginas-web-para-negocios`,
    siteName: "David Ortiz",
  },
};

export default function PaginasWebParaNegociosPage() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
        Páginas web para negocios que quieren crecer en internet
      </h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
        Si tienes un negocio, emprendimiento o ejerces como profesional independiente, una página web es la herramienta más efectiva para mostrar lo que haces, generar confianza en tus clientes y recibir mensajes directos sin depender solo de redes sociales.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        ¿Por qué tu negocio necesita una página web profesional?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Muchos negocios todavía dependen únicamente de Instagram, Facebook o WhatsApp. Si bien estas herramientas son útiles, no reemplazan una página web propia. Un sitio profesional te permite:
      </p>
      <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
        <li>Mostrar todos tus servicios de forma organizada y clara.</li>
        <li>Aparecer en Google cuando alguien busca lo que ofreces.</li>
        <li>Generar confianza con información real, contacto directo y diseño profesional.</li>
        <li>Recibir mensajes de clientes por WhatsApp, formulario o correo.</li>
        <li>Diferenciarte de la competencia que solo tiene redes sociales.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        ¿Qué tipo de negocios se benefician de una página web?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Casi cualquier negocio puede beneficiarse de tener presencia en internet. Algunos ejemplos:
      </p>
      <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
        <li>Restaurantes y cafeterías que quieren mostrar su menú y recibir reservas.</li>
        <li>Consultorios y clínicas que necesitan presentar sus servicios y generar confianza.</li>
        <li>Tiendas y emprendimientos que quieren mostrar su catálogo de productos.</li>
        <li>Profesionales independientes (abogados, contadores, arquitectos, entrenadores).</li>
        <li>Negocios de servicios (limpieza, mantenimiento, transporte, eventos).</li>
        <li>Marcas personales que necesitan un portafolio profesional.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        ¿Qué incluye una página web para negocios?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Cada proyecto que desarrollo incluye todo lo necesario para que tu negocio tenga una presencia digital completa:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-6">
        {[
          "Diseño moderno y profesional",
          "Adaptable a celular y tablet",
          "Botón directo de WhatsApp",
          "Formulario de contacto",
          "Secciones personalizadas según tu negocio",
          "Optimización para Google (SEO básico)",
          "Publicación en internet",
          "Asesoría inicial sin compromiso",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3 bg-gray-50 dark:bg-white/5 rounded-xl p-3 sm:p-4 border border-gray-200 dark:border-gray-800">
            <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-200">{item}</span>
          </div>
        ))}
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Preguntas frecuentes
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Cuánto tiempo toma crear una página web?</h3>
          <p className="text-gray-600 dark:text-gray-300">Depende del proyecto. Una página web básica puede estar lista en pocos días. Proyectos con más secciones o funcionalidades pueden tomar más tiempo. Te doy un estimado cuando conversemos sobre tu negocio.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Necesito saber de tecnología?</h3>
          <p className="text-gray-600 dark:text-gray-300">No. Yo me encargo de todo el desarrollo. Solo necesito que me cuentes sobre tu negocio, qué servicios ofreces y qué te gustaría mostrar en tu página.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Puedo actualizar la página después?</h3>
          <p className="text-gray-600 dark:text-gray-300">Sí. Podemos coordinar actualizaciones cuando necesites agregar información, cambiar fotos o ajustar secciones.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿La página aparece en Google?</h3>
          <p className="text-gray-600 dark:text-gray-300">Sí. Todas las páginas que desarrollo incluyen configuración básica de SEO para que Google pueda encontrarlas e indexarlas correctamente.</p>
        </div>
      </div>
    </>
  );
}
