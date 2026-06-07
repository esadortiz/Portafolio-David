import type { Metadata } from "next";

const SITE_URL = "https://www.david-ortiz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Diseño de páginas web en Bogotá | David Ortiz",
  description:
    "Diseño páginas web profesionales en Bogotá para negocios, emprendedores y profesionales independientes. Presencia digital con WhatsApp y formularios de contacto.",
  keywords: [
    "diseño web Bogotá",
    "páginas web Bogotá",
    "desarrollador web Bogotá",
    "páginas web para negocios Bogotá",
    "landing page Bogotá",
    "tiendas online Bogotá",
    "diseñador web Bogotá Colombia",
  ],
  alternates: {
    canonical: `${SITE_URL}/servicios/paginas-web-bogota`,
  },
  openGraph: {
    title: "Diseño de páginas web en Bogotá | David Ortiz",
    description:
      "Creo páginas web profesionales en Bogotá para negocios que quieren mejorar su presencia digital y recibir clientes.",
    url: `${SITE_URL}/servicios/paginas-web-bogota`,
    siteName: "David Ortiz",
  },
};

export default function PaginasWebBogotaPage() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
        Diseño de páginas web en Bogotá para negocios y emprendedores
      </h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
        Bogotá es una ciudad con alta competencia digital. Si tienes un negocio en la capital, una página web profesional puede ser la diferencia entre que un cliente te elija a ti o a la competencia. Te ayudo a crear un sitio web moderno, responsivo y enfocado en resultados.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Negocios en Bogotá que necesitan página web
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        En Bogotá hay miles de negocios que todavía no tienen presencia digital profesional. Algunos sectores donde una página web puede marcar la diferencia:
      </p>
      <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
        <li><strong>Restaurantes y cafeterías:</strong> muestra tu menú, ubicación y recibe reservas.</li>
        <li><strong>Consultorios médicos y clínicas:</strong> presenta tus servicios, horarios y genera confianza.</li>
        <li><strong>Tiendas y emprendimientos:</strong> exhibe tu catálogo de productos y recibe pedidos.</li>
        <li><strong>Profesionales independientes:</strong> abogados, contadores, arquitectos e ingenieros que quieren mostrar su experiencia.</li>
        <li><strong>Negocios de servicios:</strong> mantenimiento, limpieza, transporte, instalaciones y más.</li>
        <li><strong>Empresas pequeñas y medianas:</strong> que necesitan un sitio corporativo para mostrar lo que hacen.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        ¿Por qué es importante tener página web en Bogotá?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Bogotá es el centro económico de Colombia. La competencia es alta y los clientes cada vez buscan más por internet antes de decidir. Tener una página web profesional te permite:
      </p>
      <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
        <li>Aparecer en Google cuando alguien busca servicios en Bogotá.</li>
        <li>Mostrar tus servicios de forma profesional y organizada.</li>
        <li>Recibir clientes directamente por WhatsApp o formulario.</li>
        <li>Diferenciarte de negocios que solo tienen redes sociales.</li>
        <li>Generar confianza con información real y diseño cuidado.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Trabajo remoto con negocios en Bogotá
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Aunque trabajo de forma remota, la comunicación con negocios en Bogotá es fluida. Podemos coordinar todo por WhatsApp, videollamada o correo. No necesitas estar en la misma ciudad para tener una página web profesional.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Preguntas frecuentes
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Haces páginas web solo para negocios en Bogotá?</h3>
          <p className="text-gray-600 dark:text-gray-300">No. Trabajo con negocios de toda Colombia. Pero tengo experiencia entendiendo las necesidades del mercado bogotano y su nivel de competencia digital.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Cómo es el proceso si estoy en Bogotá y trabajamos remoto?</h3>
          <p className="text-gray-600 dark:text-gray-300">Muy simple. Hablamos por WhatsApp o videollamada, me cuentas sobre tu negocio, definimos lo que necesitas y desarrollo tu página. Te mantengo al tanto del progreso y te entrego el sitio listo para publicar.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿La página web puede atraer clientes de Bogotá?</h3>
          <p className="text-gray-600 dark:text-gray-300">Sí. Con optimización básica de SEO, tu página puede aparecer cuando alguien busca servicios como los tuyos en Bogotá. Es una inversión que te ayuda a llegar a más clientes locales.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Cuánto cuesta una página web en Bogotá?</h3>
          <p className="text-gray-600 dark:text-gray-300">El precio depende del tipo de página y las funcionalidades que necesites. Escríbeme por WhatsApp y te daré información detallada sin compromiso.</p>
        </div>
      </div>
    </>
  );
}
