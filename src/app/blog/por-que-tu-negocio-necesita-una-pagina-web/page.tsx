import type { Metadata } from "next";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

const SITE_URL = "https://www.david-ortiz.dev";
const PAGE_URL = `${SITE_URL}/blog/por-que-tu-negocio-necesita-una-pagina-web`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Por qué tu negocio necesita una página web | David Ortiz",
  description:
    "Descubre las razones clave por las que tu negocio necesita una página web profesional: generar confianza, aparecer en Google y recibir más clientes.",
  keywords: [
    "por qué tener página web",
    "necesito página web para mi negocio",
    "ventajas de tener página web",
    "página web vs redes sociales",
    "presencia digital para negocios",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Por qué tu negocio necesita una página web | David Ortiz",
    description:
      "Descubre por qué una página web profesional es la mejor inversión para tu negocio. Genera confianza, aparece en Google y recibe más clientes.",
    url: PAGE_URL,
    siteName: "David Ortiz",
    type: "article",
    images: [{ url: `${SITE_URL}/icon.png`, width: 512, height: 512, alt: "Por qué necesitas una página web - David Ortiz" }],
  },
};

export default function PorQueTuNegocioNecesitaPaginaWebPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            blogPostingSchema({
              pageUrl: PAGE_URL,
              headline: "¿Por qué tu negocio necesita una página web?",
              description:
                "Descubre las razones clave por las que tu negocio necesita una página web profesional: confianza, Google, organización y contacto directo con clientes.",
              imageUrl: `${SITE_URL}/icon.png`,
              datePublished: "2026-06-07",
            }),
            breadcrumbSchema([
              { name: "Inicio", url: SITE_URL },
              { name: "Blog", url: `${SITE_URL}/blog/por-que-tu-negocio-necesita-una-pagina-web` },
              { name: "¿Por qué tu negocio necesita una página web?", url: PAGE_URL },
            ]),
          ]),
        }}
      />
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

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400 space-y-2">
        <p>Artículo escrito por <strong className="text-gray-700 dark:text-gray-300">David Ortiz</strong>, desarrollador web en Colombia. Creo páginas web profesionales para negocios y emprendedores.</p>
        <p>
          <a href="/blog/cuanto-cuesta-una-pagina-web-en-colombia" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">¿Cuánto cuesta una página web?</a>
          {" · "}
          <a href="/servicios/paginas-web-para-negocios" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">Páginas web para negocios</a>
          {" · "}
          <a href="/#contacto" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">Contacto</a>
        </p>
      </div>
    </>
  );
}
