import type { Metadata } from "next";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

const SITE_URL = "https://www.david-ortiz.dev";
const PAGE_URL = `${SITE_URL}/blog/pagina-web-vs-instagram-para-negocios`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Página web vs Instagram para negocios | Qué conviene más",
  description:
    "Comparativa entre página web profesional e Instagram para negocios. Ventajas, limitaciones y la mejor estrategia para combinar ambas herramientas.",
  keywords: [
    "página web vs Instagram",
    "Instagram o página web para negocio",
    "qué es mejor para mi negocio",
    "tener página web o solo Instagram",
    "comparativa página web y redes sociales",
    "marketing digital para negocios",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Página web vs Instagram para negocios | Qué conviene más",
    description:
      "Comparativa completa entre tener página web profesional o usar solo Instagram para tu negocio. Ventajas, desventajas y recomendación final.",
    url: PAGE_URL,
    siteName: "David Ortiz",
    type: "article",
    images: [{ url: `${SITE_URL}/icon.png`, width: 512, height: 512, alt: "Página web vs Instagram - David Ortiz" }],
  },
};

export default function PaginaWebVsInstagramPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            blogPostingSchema({
              pageUrl: PAGE_URL,
              headline: "Página web o Instagram: ¿qué necesita realmente tu negocio?",
              description:
                "Comparativa entre tener una página web profesional o usar solo Instagram. Ventajas, limitaciones y la mejor estrategia para negocios en Colombia.",
              imageUrl: `${SITE_URL}/icon.png`,
              datePublished: "2026-06-07",
            }),
            breadcrumbSchema([
              { name: "Inicio", url: SITE_URL },
              { name: "Blog", url: `${SITE_URL}/blog/pagina-web-vs-instagram-para-negocios` },
              { name: "Página web vs Instagram", url: PAGE_URL },
            ]),
          ]),
        }}
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
        Página web o Instagram: ¿qué necesita realmente tu negocio?
      </h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
        Muchos emprendedores y dueños de negocio se preguntan si es suficiente con tener un perfil de Instagram o si necesitan una página web. La respuesta corta es: lo ideal es tener ambas. Pero si tienes que elegir, aquí te explico las ventajas de cada opción.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Ventajas de Instagram para tu negocio
      </h2>
      <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
        <li><strong>Es gratis:</strong> crear un perfil de empresa no tiene costo.</li>
        <li><strong>Alcance inmediato:</strong> puedes llegar a personas que no te conocen a través de publicaciones, reels e historias.</li>
        <li><strong>Interacción directa:</strong> los clientes pueden comentar, reaccionar y enviarte mensajes rápido.</li>
        <li><strong>Fácil de actualizar:</strong> publicar contenido es sencillo y no requiere conocimientos técnicos.</li>
        <li><strong>Visual:</strong> si tu negocio tiene un componente visual fuerte (comida, moda, fotografía), Instagram es una vitrina natural.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Limitaciones de Instagram para un negocio
      </h2>
      <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
        <li><strong>No apareces en Google:</strong> los perfiles de Instagram no suelen aparecer en los primeros resultados de búsqueda.</li>
        <li><strong>Algoritmo impredecible:</strong> hoy tu contenido puede llegar a miles de personas y mañana a casi nadie.</li>
        <li><strong>Información desorganizada:</strong> tus servicios, precios y datos de contacto están dispersos entre publicaciones, historias y destacadas.</li>
        <li><strong>No es completamente tuyo:</strong> dependes de las reglas y cambios de Instagram. Si la plataforma decide limitar tu alcance, no puedes hacer mucho.</li>
        <li><strong>Menor percepción de formalidad:</strong> un perfil de Instagram no transmite la misma seriedad que una página web con dominio propio.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Ventajas de una página web profesional
      </h2>
      <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
        <li><strong>Apareces en Google:</strong> cuando alguien busca tu tipo de negocio o servicio, tu página puede salir en los resultados.</li>
        <li><strong>Es tuya:</strong> controlas el diseño, contenido y experiencia. Nadie puede limitar tu alcance.</li>
        <li><strong>Información organizada:</strong> servicios, precios, contacto, ubicación y preguntas frecuentes, todo en un solo lugar.</li>
        <li><strong>Imagen profesional:</strong> tener tupropionegocio.com genera más confianza que un perfil de Instagram.</li>
        <li><strong>Contacto inmediato:</strong> botón de WhatsApp, formulario y correo visibles y accesibles en todo momento.</li>
        <li><strong>Disponible 24/7:</strong> tu página trabaja incluso cuando no estás atendiendo.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        La mejor estrategia: combinar ambas
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        No se trata de elegir una sobre la otra. Lo ideal es tener un perfil de Instagram activo que atraiga personas, y una página web profesional que las convierta en clientes. Instagram puede ser el canal de promoción y tu página web el destino donde los clientes encuentran toda la información y te contactan.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Por ejemplo: publicas en Instagram sobre tus servicios, incluyes el enlace a tu página web en la biografía, y cuando alguien quiere más información, llega a un sitio profesional con todos los detalles y un botón directo de WhatsApp.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Preguntas frecuentes
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Puedo empezar con Instagram y luego tener página web?</h3>
          <p className="text-gray-600 dark:text-gray-300">Sí. Muchos negocios empiezan con redes sociales y luego dan el paso a una página web cuando necesitan más profesionalismo o quieren aparecer en Google.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Es muy costoso mantener ambas?</h3>
          <p className="text-gray-600 dark:text-gray-300">Instagram es gratis. La página web tiene un costo de desarrollo inicial y gastos anuales de dominio y hosting. Pero la inversión se justifica con los clientes que puedes atraer.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Puedo vincular mi página web con Instagram?</h3>
          <p className="text-gray-600 dark:text-gray-300">Sí. Puedes poner el enlace de tu página web en la biografía de Instagram, en las historias y en las publicaciones para dirigir tráfico a tu sitio.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Qué hago si ya tengo muchos seguidores en Instagram?</h3>
          <p className="text-gray-600 dark:text-gray-300">Eso es una ventaja. Una página web complementa tu presencia en redes. Tus seguidores de Instagram pueden visitar tu sitio para más información y terminar contactándote.</p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400 space-y-2">
        <p>Artículo escrito por <strong className="text-gray-700 dark:text-gray-300">David Ortiz</strong>, desarrollador web en Colombia. Ayudo a negocios a combinar presencia digital profesional con redes sociales.</p>
        <p>
          <a href="/blog/por-que-tu-negocio-necesita-una-pagina-web" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">¿Por qué necesitas una página web?</a>
          {" · "}
          <a href="/servicios/paginas-web-para-negocios" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">Páginas web para negocios</a>
          {" · "}
          <a href="/#contacto" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">Contacto</a>
        </p>
      </div>
    </>
  );
}
