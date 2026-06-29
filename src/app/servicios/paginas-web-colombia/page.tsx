import type { Metadata } from "next";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

const SITE_URL = "https://www.david-ortiz.dev";
const PAGE_URL = `${SITE_URL}/servicios/paginas-web-colombia`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Páginas web para negocios en Colombia | David Ortiz",
  description:
    "Creo páginas web profesionales para negocios en toda Colombia: Bogotá, Medellín, Cali, Barranquilla, Cartagena y más. Sitios web modernos con WhatsApp integrado.",
  keywords: [
    "páginas web Colombia",
    "desarrollo web Colombia",
    "diseño web Colombia",
    "páginas web para negocios Colombia",
    "landing page Colombia",
    "sitios web profesionales Colombia",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Páginas web para negocios en Colombia | David Ortiz",
    description:
      "Creo páginas web profesionales para negocios en toda Colombia. Desarrollo remoto con comunicación fluida por WhatsApp.",
    url: PAGE_URL,
    siteName: "David Ortiz",
    images: [{ url: `${SITE_URL}/icon.png`, width: 512, height: 512, alt: "Páginas web en Colombia por David Ortiz" }],
  },
};

export default function PaginasWebColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema({
              pageUrl: PAGE_URL,
              serviceName: "Creación de páginas web para negocios en Colombia",
              description:
                "Creo páginas web profesionales para negocios en toda Colombia. Desarrollo remoto con comunicación por WhatsApp y correo.",
            }),
            breadcrumbSchema([
              { name: "Inicio", url: SITE_URL },
              { name: "Servicios", url: `${SITE_URL}/#servicios` },
              { name: "Páginas web en Colombia", url: PAGE_URL },
            ]),
          ]),
        }}
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
        Creación de páginas web para negocios en Colombia
      </h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
        Trabajo con negocios, emprendedores y profesionales en toda Colombia. Desarrollo páginas web de forma remota, con comunicación fluida por WhatsApp, videollamada y correo, sin importar la ciudad en la que te encuentres.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Presencia digital para negocios en cualquier ciudad de Colombia
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        No importa si tu negocio está en una ciudad grande o en un municipio pequeño. Una página web profesional te permite llegar a más clientes, mostrar lo que haces y generar confianza. Algunas de las ciudades donde he trabajado o puedo ayudarte:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-600 dark:text-gray-300 my-6">
        {[
          "Bogotá",
          "Medellín",
          "Cali",
          "Barranquilla",
          "Cartagena",
          "Bucaramanga",
          "Pereira",
          "Manizales",
          "Santa Marta",
          "Cúcuta",
          "Ibagué",
          "Villavicencio",
          "Pasto",
          "Neiva",
          "Armenia",
        ].map((city) => (
          <div key={city} className="bg-gray-50 dark:bg-white/5 rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-800 text-center">
            {city}
          </div>
        ))}
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        ¿Cómo funciona el desarrollo remoto de páginas web?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        El proceso es sencillo y no requiere que estemos en la misma ciudad:
      </p>
      <ol className="list-decimal pl-5 sm:pl-6 space-y-3 text-gray-600 dark:text-gray-300 mb-6">
        <li><strong>Conversamos por WhatsApp o videollamada:</strong> me cuentas sobre tu negocio, qué servicios ofreces y qué necesitas en tu página web.</li>
        <li><strong>Definimos el proyecto:</strong> te propongo una estructura para tu sitio con las secciones y funcionalidades que mejor se adapten a tu negocio.</li>
        <li><strong>Desarrollo tu página:</strong> trabajo en el diseño y desarrollo. Te comparto avances para que veas cómo va quedando.</li>
        <li><strong>Revisión y ajustes:</strong> revisamos juntos la página y hacemos los ajustes necesarios.</li>
        <li><strong>Publicación:</strong> tu página queda disponible en internet para que tus clientes puedan encontrarte.</li>
      </ol>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Tipos de páginas web que puedo crear para tu negocio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {[
          { title: "Página web para negocios", desc: "Sitio completo con inicio, servicios, acerca de, contacto y WhatsApp." },
          { title: "Landing page", desc: "Página enfocada en un servicio o campaña, con llamado a la acción directo." },
          { title: "Catálogo digital", desc: "Muestra tus productos con fotos, descripciones y botón de WhatsApp por producto." },
          { title: "Tienda online", desc: "E-commerce con carrito, gestión de productos y opciones de pago." },
          { title: "Portafolio profesional", desc: "Para profesionales independientes que quieren mostrar su trabajo y experiencia." },
          { title: "Página corporativa", desc: "Sitio institucional para empresas que necesitan presencia digital formal." },
        ].map((item) => (
          <div key={item.title} className="bg-gray-50 dark:bg-white/5 rounded-xl p-4 sm:p-5 border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Preguntas frecuentes
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Puedes trabajar con mi negocio si estoy en otra ciudad?</h3>
          <p className="text-gray-600 dark:text-gray-300">Sí. Todo el proceso se hace de forma remota. La comunicación es por WhatsApp, correo o videollamada. No hay diferencia en el resultado.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿La página web puede atraer clientes de mi ciudad?</h3>
          <p className="text-gray-600 dark:text-gray-300">Sí. Con la configuración de SEO adecuada, tu página puede aparecer en Google cuando alguien busca servicios como los tuyos en tu ciudad o región.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Cuánto cuesta una página web en Colombia?</h3>
          <p className="text-gray-600 dark:text-gray-300">El precio varía según el tipo de página, las secciones y funcionalidades que necesites. Escríbeme por WhatsApp y te doy información detallada sin compromiso.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Ofreces mantenimiento después de publicar la página?</h3>
          <p className="text-gray-600 dark:text-gray-300">Sí. Podemos coordinar actualizaciones cuando necesites modificar información, agregar secciones o hacer cambios en tu página.</p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400 space-y-2">
        <p>Soy <strong className="text-gray-700 dark:text-gray-300">David Ortiz</strong>, desarrollador web. Trabajo con clientes en toda Colombia mediante comunicación remota.</p>
        <p>
          <a href="/servicios/paginas-web-para-negocios" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">Páginas web para negocios</a>
          {" · "}
          <a href="/servicios/landing-pages" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">Landing pages</a>
          {" · "}
          <a href="/#contacto" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">Contacto</a>
        </p>
      </div>
    </>
  );
}
