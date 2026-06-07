import type { Metadata } from "next";

const SITE_URL = "https://www.david-ortiz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Cuánto cuesta una página web en Colombia | Guía para negocios",
  description:
    "Conoce los factores que influyen en el precio de una página web en Colombia: diseño, secciones, funcionalidades, dominio y mantenimiento. Información clara para negocios.",
  keywords: [
    "cuánto cuesta una página web en Colombia",
    "precio página web Colombia",
    "costo sitio web Colombia",
    "cuánto vale una página web",
    "precio landing page Colombia",
    "presupuesto página web negocio",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog/cuanto-cuesta-una-pagina-web-en-colombia`,
  },
  openGraph: {
    title: "Cuánto cuesta una página web en Colombia | Guía para negocios",
    description:
      "Guía completa sobre los factores que determinan el precio de una página web en Colombia. Información útil para negocios y emprendedores.",
    url: `${SITE_URL}/blog/cuanto-cuesta-una-pagina-web-en-colombia`,
    siteName: "David Ortiz",
    type: "article",
  },
};

export default function CuantoCuestaPaginaWebPage() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
        ¿Cuánto cuesta crear una página web en Colombia?
      </h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
        Esta es una de las preguntas más comunes que recibo de negocios y emprendedores. La respuesta es: depende. El precio de una página web varía según las funcionalidades, el diseño, la cantidad de secciones y otros factores que explico a continuación.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Factores que influyen en el precio de una página web
      </h2>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">1. Tipo de página web</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        No es lo mismo una landing page de una sola sección que un sitio web completo con múltiples páginas, o una tienda online con carrito de compras. Cada tipo de proyecto tiene un nivel de complejidad distinto.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">2. Cantidad de secciones y páginas</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Una página de inicio, una sección de servicios, acerca de, contacto, portafolio. Cada sección adicional requiere diseño, contenido y tiempo de desarrollo.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">3. Diseño personalizado</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Un diseño único, pensado para tu marca y tu negocio, toma más tiempo que usar una plantilla genérica. Pero el resultado comunica profesionalismo y genera más confianza en tus clientes.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">4. Funcionalidades especiales</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Formularios de contacto, integración con WhatsApp, galerías de imágenes, catálogo de productos, carrito de compras, blog, panel de administración. Cada funcionalidad suma al tiempo de desarrollo.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">5. Dominio y hosting</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Tu página necesita un dominio (la dirección web, por ejemplo tunegocio.com) y un hosting (donde se almacena la página). Estos son costos adicionales que se pagan anualmente. Puedo orientarte sobre las mejores opciones según tu presupuesto.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">6. SEO y optimización para Google</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        La configuración básica de SEO para que tu página pueda aparecer en Google está incluida en mis proyectos. Si necesitas una estrategia de posicionamiento más avanzada, eso requiere trabajo adicional.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">7. Mantenimiento y actualizaciones</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Después de publicar tu página, es posible que necesites cambios o actualizaciones. Podemos coordinar un plan de mantenimiento según lo que tu negocio requiera.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        ¿Cuál es el precio aproximado?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        No publico precios fijos porque cada proyecto es diferente. Lo que sí te aseguro es que recibirás un presupuesto claro y detallado antes de empezar, sin costos ocultos. Conversemos sobre tu negocio y te daré una cotización personalizada.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Preguntas frecuentes
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Es caro tener una página web en Colombia?</h3>
          <p className="text-gray-600 dark:text-gray-300">Depende de lo que necesites. Una landing page sencilla tiene un costo menor que un sitio completo con muchas secciones. Lo importante es que una página web es una inversión que te ayuda a recibir más clientes.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Debo pagar todo al inicio?</h3>
          <p className="text-gray-600 dark:text-gray-300">Podemos definir un esquema de pago que funcione para ambas partes. Normalmente se maneja un anticipo para empezar y el resto al finalizar.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Hay costos ocultos?</h3>
          <p className="text-gray-600 dark:text-gray-300">No. Antes de empezar te entrego un presupuesto detallado con todo lo que incluye el proyecto. Los únicos costos adicionales son el dominio y hosting, que se pagan directamente a los proveedores.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Cómo puedo recibir una cotización?</h3>
          <p className="text-gray-600 dark:text-gray-300">Escríbeme por WhatsApp al 310 628 9086, cuéntame sobre tu negocio y lo que necesitas. Te responderé con información detallada sin compromiso.</p>
        </div>
      </div>
    </>
  );
}
