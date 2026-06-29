import type { Metadata } from "next";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

const SITE_URL = "https://www.david-ortiz.dev";
const PAGE_URL = `${SITE_URL}/servicios/landing-pages`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Landing pages profesionales para negocios | David Ortiz",
  description:
    "Diseño landing pages de alto impacto para presentar servicios, captar clientes y dirigirlos a WhatsApp. Páginas rápidas, enfocadas y efectivas.",
  keywords: [
    "landing pages profesionales",
    "landing page para negocios",
    "páginas de aterrizaje Colombia",
    "landing page WhatsApp",
    "páginas para campañas",
    "landing page para emprendedores",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Landing pages profesionales para negocios | David Ortiz",
    description:
      "Landing pages diseñadas para presentar servicios, captar clientes y dirigirlos a WhatsApp o formularios de contacto.",
    url: PAGE_URL,
    siteName: "David Ortiz",
    images: [{ url: `${SITE_URL}/icon.png`, width: 512, height: 512, alt: "Landing pages por David Ortiz" }],
  },
};

export default function LandingPagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema({
              pageUrl: PAGE_URL,
              serviceName: "Landing pages profesionales",
              description:
                "Diseño landing pages de alto impacto para presentar servicios y captar clientes por WhatsApp en Colombia.",
            }),
            breadcrumbSchema([
              { name: "Inicio", url: SITE_URL },
              { name: "Servicios", url: `${SITE_URL}/#servicios` },
              { name: "Landing pages", url: PAGE_URL },
            ]),
          ]),
        }}
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
        Landing pages diseñadas para presentar tu negocio y captar clientes
      </h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
        Una landing page es una página web enfocada en un solo objetivo: presentar tu servicio o producto y lograr que el visitante tome acción, ya sea escribirte por WhatsApp, llenar un formulario o contactarte directamente.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        ¿Cuándo necesitas una landing page?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Una landing page es ideal cuando necesitas una presencia digital rápida y efectiva. Algunos casos comunes:
      </p>
      <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
        <li>Estás lanzando un nuevo servicio y quieres una página para promocionarlo.</li>
        <li>Tienes una campaña publicitaria y necesitas una página de destino para los anuncios.</li>
        <li>Eres profesional independiente y quieres una página sencilla con tus servicios y contacto.</li>
        <li>Quieres validar una idea de negocio antes de invertir en un sitio más grande.</li>
        <li>Tienes un evento, taller o curso y necesitas una página de inscripción.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Características de una landing page efectiva
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-6">
        {[
          "Diseño limpio y enfocado",
          "Mensaje claro y directo",
          "Llamada a la acción visible",
          "Adaptable a celular",
          "Botón directo de WhatsApp",
          "Formulario de contacto",
          "Carga rápida",
          "Optimización para Google",
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
        ¿En qué se diferencia una landing page de una página web tradicional?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Una página web tradicional suele tener varias secciones como inicio, acerca de, servicios, proyectos y contacto. Una landing page está diseñada con un solo enfoque: llevar al visitante hacia una acción específica. Es más corta, más directa y está optimizada para convertir visitantes en clientes.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Ambas opciones son válidas. La elección depende de tus objetivos. Si tienes un negocio con varios servicios, una página web completa puede ser mejor. Si necesitas promocionar algo específico, una landing page es la herramienta ideal.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Preguntas frecuentes
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Cuánto cuesta una landing page?</h3>
          <p className="text-gray-600 dark:text-gray-300">El precio depende de lo que necesites incluir. Contáctame por WhatsApp y te daré información sin compromiso.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿En cuánto tiempo está lista?</h3>
          <p className="text-gray-600 dark:text-gray-300">Una landing page sencilla puede estar lista en pocos días. Te confirmo el tiempo estimado cuando conversemos sobre tu proyecto.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Puedo usar la landing page para anuncios de Facebook o Instagram?</h3>
          <p className="text-gray-600 dark:text-gray-300">Sí. De hecho, una landing page es el destino ideal para tus campañas publicitarias. Está diseñada para recibir tráfico de anuncios y convertirlo en clientes.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Incluye botón de WhatsApp?</h3>
          <p className="text-gray-600 dark:text-gray-300">Sí. La mayoría de las landing pages que desarrollo incluyen botones directos a WhatsApp para que los clientes puedan contactarte de inmediato.</p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400 space-y-2">
        <p>Soy <strong className="text-gray-700 dark:text-gray-300">David Ortiz</strong>, desarrollador web en Colombia. Creo landing pages enfocadas en convertir visitantes en clientes.</p>
        <p>
          <a href="/servicios/paginas-web-para-negocios" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">Páginas web para negocios</a>
          {" · "}
          <a href="/servicios/ecommerce" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">E-commerce</a>
          {" · "}
          <a href="/#contacto" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">Solicitar cotización</a>
        </p>
      </div>
    </>
  );
}
