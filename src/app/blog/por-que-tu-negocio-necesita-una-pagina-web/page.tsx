import type { Metadata } from "next";

const SITE_URL = "https://www.david-ortiz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Por qué tu negocio necesita una página web | David Ortiz",
  description:
    "Descubre por qué tu negocio debería tener una página web profesional: confianza, presencia en Google, contacto directo con clientes y diferenciación de la competencia.",
  keywords: [
    "por qué necesito una página web",
    "beneficios de tener página web",
    "ventajas sitio web para negocios",
    "importancia página web negocio",
    "presencia digital para emprendedores",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog/por-que-tu-negocio-necesita-una-pagina-web`,
  },
  openGraph: {
    title: "Por qué tu negocio necesita una página web | David Ortiz",
    description:
      "Descubre los beneficios de tener una página web profesional: confianza, clientes desde Google y contacto directo.",
    url: `${SITE_URL}/blog/por-que-tu-negocio-necesita-una-pagina-web`,
    siteName: "David Ortiz",
    type: "article",
  },
};

export default function PorQueTuNegocioNecesitaPaginaWebPage() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
        ¿Por qué tu negocio necesita una página web?
      </h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
        Muchos dueños de negocio creen que con tener Instagram o Facebook es suficiente. Y si bien las redes sociales son importantes, no reemplazan una página web profesional. Aquí te explico por qué.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        1. Genera confianza en tus clientes
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Cuando un cliente potencial busca información sobre tu negocio, una página web profesional transmite seriedad y compromiso. Un perfil de Instagram puede verse bien, pero no ofrece la misma sensación de formalidad que un sitio web con diseño cuidado, información clara y medios de contacto visibles.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        2. Puedes aparecer en Google
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Cuando alguien busca en Google &quot;restaurante en Bogotá&quot;, &quot;abogado en Medellín&quot; o &quot;tienda de ropa en Cali&quot;, los resultados muestran páginas web, no perfiles de Instagram. Una página web bien configurada puede aparecer en los resultados de búsqueda y atraer clientes que están buscando exactamente lo que ofreces.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        3. Muestras tus servicios de forma organizada
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        En una página web puedes organizar tus servicios por categorías, incluir precios, descripciones detalladas, fotos de tu trabajo y toda la información que un cliente necesita para decidirse. Las redes sociales mezclan tu contenido con el de otros y no permiten esa organización.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        4. Contacto directo con clientes
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Una página web puede integrar botones de WhatsApp, formularios de contacto, enlaces a tu correo y mapa de ubicación. El cliente puede contactarte de inmediato, sin necesidad de seguirte, enviarte un mensaje directo o esperar a que respondas en redes.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        5. Te diferencias de la competencia
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Si tu competencia solo tiene Instagram y tú tienes una página web profesional, tienes una ventaja clara. Transmites más profesionalismo y le das al cliente una razón para elegirte a ti.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        6. No dependes solo de las redes sociales
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Las redes sociales cambian sus algoritmos constantemente. Hoy tu publicación puede llegar a muchas personas y mañana a casi nadie. Tu página web es tuya. Tú controlas el contenido, la información y la experiencia que reciben tus clientes.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Preguntas frecuentes
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Realmente necesito una página web si ya tengo redes sociales?</h3>
          <p className="text-gray-600 dark:text-gray-300">Las redes sociales son un complemento, no un reemplazo. Una página web te da presencia en Google, muestra profesionalismo y centraliza toda la información de tu negocio en un solo lugar.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Es complicado tener una página web?</h3>
          <p className="text-gray-600 dark:text-gray-300">No. Una vez que está publicada, lo único que necesitas es compartir el enlace con tus clientes. Si necesitas hacer cambios, podemos coordinarlos sin problema.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Puedo recibir clientes desde Google?</h3>
          <p className="text-gray-600 dark:text-gray-300">Sí. Con la configuración de SEO incluida en mis proyectos, tu página puede aparecer en los resultados de búsqueda cuando las personas busquen servicios como los tuyos.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Vale la pena la inversión?</h3>
          <p className="text-gray-600 dark:text-gray-300">Un solo cliente que llegue por tu página web puede justificar la inversión. Y la página sigue trabajando para ti todos los días, incluso cuando no estás atendiendo.</p>
        </div>
      </div>
    </>
  );
}
