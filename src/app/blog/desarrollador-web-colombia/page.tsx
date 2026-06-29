import type { Metadata } from "next";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

const SITE_URL = "https://www.david-ortiz.dev";
const PAGE_URL = `${SITE_URL}/blog/desarrollador-web-colombia`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Desarrollador Web en Colombia: Guía para Contratar al Mejor | David Ortiz",
  description:
    "Guía completa para contratar un desarrollador web en Colombia. Precios, tecnologías, diferencias entre freelance y agencia, y cómo elegir al profesional adecuado para tu negocio.",
  keywords: [
    "desarrollador web Colombia",
    "contratar desarrollador web Colombia",
    "desarrollo web Colombia",
    "diseñador web Colombia",
    "páginas web Colombia",
    "programador web Colombia",
    "servicios de desarrollo web Colombia",
    "desarrollo de páginas web Colombia",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Desarrollador Web en Colombia: Guía para Contratar al Mejor",
    description:
      "Guía completa para contratar un desarrollador web en Colombia. Precios, tecnologías, diferencias freelance vs agencia y cómo elegir al profesional adecuado.",
    url: PAGE_URL,
    siteName: "David Ortiz",
    type: "article",
    images: [
      { url: `${SITE_URL}/icon.png`, width: 512, height: 512, alt: "Desarrollador web Colombia - David Ortiz" },
    ],
  },
};

export default function DesarrolladorWebColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            blogPostingSchema({
              pageUrl: PAGE_URL,
              headline:
                "Desarrollador Web en Colombia: Guía Completa para Contratar el Profesional Adecuado",
              description:
                "Guía detallada para negocios y emprendedores en Colombia que buscan contratar un desarrollador web profesional. Tecnologías, precios, diferencias y recomendaciones prácticas.",
              imageUrl: `${SITE_URL}/icon.png`,
              datePublished: "2026-06-07",
            }),
            breadcrumbSchema([
              { name: "Inicio", url: SITE_URL },
              { name: "Blog", url: `${SITE_URL}/blog/desarrollador-web-colombia` },
              {
                name: "Desarrollador Web en Colombia",
                url: PAGE_URL,
              },
            ]),
          ]),
        }}
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
        Desarrollador Web en Colombia: Guía Completa para Contratar el
        Profesional Adecuado
      </h1>

      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
        Si tienes un negocio, emprendimiento o ejerces como profesional
        independiente en Colombia, tarde o temprano te enfrentas a la misma
        necesidad: tener presencia en internet. Y para lograrlo de forma
        profesional, necesitas un desarrollador web en Colombia que entienda
        tu mercado, hable tu idioma y construya exactamente lo que tu negocio
        necesita. En esta guía te explico todo lo que debes saber antes de
        contratar, cuánto cuesta, qué tecnologías se usan hoy y cómo elegir
        al profesional correcto.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        ¿Qué hace un desarrollador web en Colombia?
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Un desarrollador web es el profesional encargado de construir, diseñar y
        publicar sitios en internet. Su trabajo va mucho más allá de escribir
        código: analiza las necesidades del negocio, propone la estructura del
        sitio, crea el diseño visual, integra funcionalidades como formularios,
        botones de WhatsApp, pasarelas de pago, y se asegura de que todo funcione
        correctamente en celulares, tablets y computadores.
      </p>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        En Colombia, el desarrollo web ha crecido significativamente en los
        últimos años. Cada vez más negocios entienden que no basta con tener una
        cuenta de Instagram o un perfil de Facebook. Una{' '}
        <a
          href="/servicios/paginas-web-para-negocios"
          className="text-gray-900 dark:text-white underline hover:no-underline"
        >
          página web para negocios
        </a>{' '}
        es el centro de tu presencia digital: el lugar donde los clientes te
        encuentran, confían en ti y deciden contactarte.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        ¿Cuándo necesita una empresa contratar un desarrollador web?
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        No todas las empresas necesitan un desarrollador web de planta. De
        hecho, la mayoría de los negocios en Colombia se benefician más de
        contratar un desarrollador web freelance para proyectos puntuales.
        Estas son las situaciones más comunes:
      </p>

      <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
        <li>
          <strong>Tu negocio no tiene presencia en internet.</strong> Si solo
          usas redes sociales, estás perdiendo clientes que buscan en Google.
        </li>
        <li>
          <strong>Tu página actual se ve anticuada o no funciona en
          celulares.</strong> El diseño web cambia rápido. Un sitio de hace 3
          años puede estar alejando clientes sin que lo sepas.
        </li>
        <li>
          <strong>Necesitas vender por internet.</strong> Un e-commerce
          profesional requiere conocimientos técnicos que un desarrollador web
          domina.
        </li>
        <li>
          <strong>Quieres aparecer en Google.</strong> El SEO técnico es parte
          del desarrollo web y requiere configuración especializada.
        </li>
        <li>
          <strong>Necesitas automatizar procesos.</strong> Formularios,
          respuestas automáticas, integración con WhatsApp Business: todo eso
          lo implementa un desarrollador web.
        </li>
        <li>
          <strong>Tu competencia ya tiene página web.</strong> Si ellos aparecen
          en Google y tú no, estás en desventaja.
        </li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Beneficios de contratar un desarrollador web profesional
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Contratar a un desarrollador web profesional en Colombia no es un gasto:
        es una inversión. Estos son los beneficios concretos que obtienes:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {[
          {
            title: "Diseño personalizado",
            desc: "Tu página no se verá como una plantilla genérica. Cada elemento se diseña pensando en tu marca y tus clientes.",
          },
          {
            title: "Optimización para Google",
            desc: "Un desarrollador web configura correctamente el SEO técnico para que tu negocio pueda aparecer en los resultados de búsqueda.",
          },
          {
            title: "Funciona en todos los dispositivos",
            desc: "Más del 70% de las visitas en Colombia vienen de celulares. Tu sitio debe verse perfecto en cualquier pantalla.",
          },
          {
            title: "Rapidez de carga",
            desc: "Los sitios lentos pierden clientes. Un profesional optimiza imágenes, código y servidor para que tu página cargue en segundos.",
          },
          {
            title: "Seguridad y mantenimiento",
            desc: "Un sitio profesional incluye certificados SSL, protección contra vulnerabilidades y soporte técnico.",
          },
          {
            title: "Integración con WhatsApp",
            desc: "En Colombia, WhatsApp es el canal de comunicación principal. Un buen desarrollador integra botones directos y respuestas automáticas.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-gray-50 dark:bg-white/5 rounded-xl p-5 border border-gray-200 dark:border-gray-800"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Diferencias entre un desarrollador web freelance y una agencia
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Esta es una de las decisiones más importantes al momento de contratar.
        Ambas opciones tienen ventajas, pero dependen del tamaño y necesidades
        de tu negocio.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                Aspecto
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                Desarrollador Freelance
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                Agencia
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                Precio
              </td>
              <td className="py-3 px-4">Más económico, sin costos de estructura</td>
              <td className="py-3 px-4">Más costoso, incluye overhead administrativo</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                Comunicación
              </td>
              <td className="py-3 px-4">Directa con el desarrollador que ejecuta el proyecto</td>
              <td className="py-3 px-4">A través de account managers o project managers</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                Flexibilidad
              </td>
              <td className="py-3 px-4">Alta, se adapta a cambios y necesidades específicas</td>
              <td className="py-3 px-4">Procesos más rígidos, cambios pueden tener costo adicional</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                Tiempo de entrega
              </td>
              <td className="py-3 px-4">Generalmente más rápido en proyectos pequeños y medianos</td>
              <td className="py-3 px-4">Puede demorar más por la cantidad de proyectos simultáneos</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                Ideal para
              </td>
              <td className="py-3 px-4">
                Negocios pequeños y medianos, emprendedores, landing pages, sitios corporativos
              </td>
              <td className="py-3 px-4">
                Grandes empresas, proyectos complejos con múltiples integraciones
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Para la mayoría de los negocios en Colombia, contratar un desarrollador
        web freelance ofrece la mejor relación costo-beneficio. Obtienes un
        servicio personalizado, comunicación directa y un precio más accesible
        sin sacrificar calidad.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        ¿Cuánto cuesta contratar un desarrollador web en Colombia?
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Esta es la pregunta más frecuente. Los precios varían según el tipo de
        proyecto, la complejidad y la experiencia del desarrollador. A
        continuación te comparto rangos de precios aproximados en el mercado
        colombiano. Son valores de referencia basados en mi experiencia y en
        lo que se maneja actualmente en el sector.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                Tipo de proyecto
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                Rango de precio (COP)
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                ¿Qué incluye?
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                Landing page
              </td>
              <td className="py-3 px-4">$400.000 – $1.200.000</td>
              <td className="py-3 px-4">
                Una sola página enfocada en presentar un servicio, incluye
                botón de WhatsApp, formulario y diseño responsive
              </td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                Sitio web corporativo
              </td>
              <td className="py-3 px-4">$800.000 – $2.500.000</td>
              <td className="py-3 px-4">
                Múltiples secciones: inicio, servicios, acerca de, contacto,
                portafolio. SEO básico y diseño personalizado
              </td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                Tienda online (e-commerce)
              </td>
              <td className="py-3 px-4">$1.500.000 – $5.000.000</td>
              <td className="py-3 px-4">
                Catálogo de productos, carrito de compras, checkout,
                autenticación, panel de administración
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                Mantenimiento mensual
              </td>
              <td className="py-3 px-4">$100.000 – $400.000</td>
              <td className="py-3 px-4">
                Actualizaciones de contenido, soporte técnico, ajustes menores,
                monitoreo de seguridad
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Estos valores son aproximados. El precio final depende de factores como
        la cantidad de secciones, funcionalidades especiales, integraciones con
        sistemas externos y la urgencia del proyecto. Lo más recomendable es{' '}
        <a
          href="/#contacto"
          className="text-gray-900 dark:text-white underline hover:no-underline"
        >
          solicitar una cotización personalizada
        </a>{' '}
        para tu negocio, sin compromiso.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        ¿Qué tecnologías debe manejar un buen desarrollador web?
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        El mundo del desarrollo web evoluciona constantemente. Un desarrollador
        web profesional en Colombia debería dominar tecnologías modernas que
        garanticen sitios rápidos, seguros y fáciles de mantener. Estas son las
        principales:
      </p>

      <div className="space-y-5 my-6">
        {[
          {
            tech: "Next.js",
            desc: "El framework de React más usado hoy para sitios web profesionales. Permite crear páginas que cargan extremadamente rápido y son ideales para SEO porque renderizan contenido en el servidor.",
          },
          {
            tech: "React",
            desc: "La librería de JavaScript más popular del mundo para construir interfaces de usuario interactivas y dinámicas.",
          },
          {
            tech: "TypeScript",
            desc: "Una versión mejorada de JavaScript que añade tipado estático, reduciendo errores y haciendo el código más mantenible a largo plazo.",
          },
          {
            tech: "Tailwind CSS",
            desc: "Un framework de diseño que permite crear interfaces modernas, responsivas y personalizadas sin escribir CSS desde cero, acelerando el desarrollo.",
          },
          {
            tech: "SEO técnico",
            desc: "Configuración de meta tags, datos estructurados JSON-LD, sitemap, robots.txt, Open Graph y optimización para motores de búsqueda.",
          },
          {
            tech: "Optimización de velocidad",
            desc: "Técnicas como lazy loading, compresión de imágenes, code splitting y uso de CDN para que tu sitio cargue en menos de 3 segundos.",
          },
          {
            tech: "Responsive Design",
            desc: "Diseño adaptable que garantiza que tu sitio se vea y funcione perfectamente en celulares, tablets y computadores de cualquier tamaño.",
          },
          {
            tech: "Integración con APIs",
            desc: "Conexión con WhatsApp Business, Resend para correos, Supabase o bases de datos, pasarelas de pago y herramientas de automatización.",
          },
        ].map((item) => (
          <div
            key={item.tech}
            className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-gray-800"
          >
            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white dark:text-black"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                {item.tech}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-0.5">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Cómo elegir el mejor desarrollador web en Colombia
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Elegir al profesional adecuado puede marcar la diferencia entre un
        proyecto exitoso y uno frustrante. Aquí tienes una lista de
        verificación práctica para evaluar a cualquier candidato:
      </p>

      <ol className="list-decimal pl-5 sm:pl-6 space-y-3 text-gray-600 dark:text-gray-300 mb-6">
        <li>
          <strong className="text-gray-900 dark:text-white">
            Revisa su portafolio real.
          </strong>{' '}
          No te conformes con descripciones. Pide ver sitios web que haya
          construido y que estén funcionando. Navega por ellos en tu celular.
        </li>
        <li>
          <strong className="text-gray-900 dark:text-white">
            Pregunta por las tecnologías que usa.
          </strong>{' '}
          Si te habla de tecnologías obsoletas o solo menciona WordPress sin
          más, es una señal de alerta. Un buen desarrollador conoce herramientas
          modernas como Next.js, React o TypeScript.
        </li>
        <li>
          <strong className="text-gray-900 dark:text-white">
            Evalúa su comunicación.
          </strong>{' '}
          ¿Responde con claridad? ¿Explica los conceptos técnicos en palabras
          que entiendes? La comunicación fluida es clave para que el proyecto
          avance sin malentendidos.
        </li>
        <li>
          <strong className="text-gray-900 dark:text-white">
            Pide referencias o testimonios.
          </strong>{' '}
          Un desarrollador con experiencia debería poder conectarte con clientes
          anteriores o mostrarte resultados concretos.
        </li>
        <li>
          <strong className="text-gray-900 dark:text-white">
            Pregunta por el proceso de trabajo.
          </strong>{' '}
          ¿Cómo maneja los cambios? ¿Qué pasa si necesitas ajustes después de
          publicado el sitio? ¿Ofrece mantenimiento?
        </li>
        <li>
          <strong className="text-gray-900 dark:text-white">
            Verifica que incluya SEO básico.
          </strong>{' '}
          Una página web sin SEO es como un local sin letrero. Asegúrate de que
          el desarrollo incluya configuración para Google.
        </li>
        <li>
          <strong className="text-gray-900 dark:text-white">
            Compara presupuestos, pero no elijas solo por precio.
          </strong>{' '}
          Lo barato puede salir caro. Un sitio mal desarrollado te costará más
          arreglarlo que hacerlo bien desde el principio.
        </li>
        <li>
          <strong className="text-gray-900 dark:text-white">
            Pregunta si entrega el código fuente.
          </strong>{' '}
          Algunos desarrolladores o agencias retienen el código. Asegúrate de
          que el código y los accesos sean tuyos al finalizar el proyecto.
        </li>
      </ol>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Errores comunes al contratar un desarrollador web
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        He visto muchos negocios cometer los mismos errores al buscar un
        desarrollador web. Conocerlos te ayudará a evitarlos:
      </p>

      <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
        <li>
          <strong>No tener claros los objetivos del sitio.</strong> Si no sabes
          qué quieres lograr con tu página web, ningún desarrollador podrá
          ayudarte eficazmente.
        </li>
        <li>
          <strong>Elegir solo por el precio más bajo.</strong> Un presupuesto
          muy por debajo del mercado generalmente implica atajos: plantillas
          genéricas, código de baja calidad o ausencia de optimización.
        </li>
        <li>
          <strong>No considerar el mantenimiento.</strong> Una página web no es
          un producto terminado, es un activo digital que necesita
          actualizaciones periódicas.
        </li>
        <li>
          <strong>Ignorar el SEO desde el inicio.</strong> Agregar SEO después
          de tener la página terminada es más costoso y menos efectivo que
          construirlo con SEO desde el día uno.
        </li>
        <li>
          <strong>No pedir que el sitio sea responsive.</strong> Si tu página no
          funciona bien en celulares, perderás más de la mitad de tus visitantes
          potenciales en Colombia.
        </li>
        <li>
          <strong>Firmar sin un acuerdo claro.</strong> Define por escrito el
          alcance, los tiempos de entrega, las formas de pago y qué pasa si hay
          cambios sobre la marcha.
        </li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        ¿Por qué trabajar con un desarrollador web de Colombia?
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Contratar un desarrollador web colombiano tiene ventajas específicas
        que no obtienes con profesionales de otros países:
      </p>

      <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
        <li>
          <strong>Misma zona horaria.</strong> La comunicación fluye sin
          esperas de 12 horas para una respuesta.
        </li>
        <li>
          <strong>Entiende el mercado local.</strong> Sabe cómo se comporta el
          consumidor colombiano, qué espera de un sitio web y qué tipo de
          diseño genera confianza.
        </li>
        <li>
          <strong>Conoce las necesidades de los negocios en Colombia.</strong>{' '}
          Desde integración con WhatsApp (el canal principal de comunicación en
          el país) hasta formas de pago locales.
        </li>
        <li>
          <strong>Precios competitivos en pesos colombianos.</strong> Sin
          tasas de cambio ni comisiones internacionales.
        </li>
        <li>
          <strong>Cobertura nacional.</strong> Puedes trabajar con un
          desarrollador web en{' '}
          <a
            href="/servicios/paginas-web-bogota"
            className="text-gray-900 dark:text-white underline hover:no-underline"
          >
            Bogotá
          </a>
          , Medellín, Cali, Barranquilla o cualquier{' '}
          <a
            href="/servicios/paginas-web-colombia"
            className="text-gray-900 dark:text-white underline hover:no-underline"
          >
            ciudad de Colombia
          </a>{' '}
          de forma remota, con comunicación fluida por WhatsApp, correo y
          videollamada.
        </li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Preguntas frecuentes
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            ¿Cuánto tiempo toma desarrollar una página web?
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Depende de la complejidad. Una landing page puede estar lista en
            3 a 7 días. Un sitio corporativo completo toma entre 2 y 4
            semanas. Una tienda online puede tomar de 3 a 8 semanas según las
            funcionalidades requeridas.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            ¿Necesito saber de tecnología para tener una página web?
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            No. Como desarrollador web, yo me encargo de todo el proceso
            técnico. Solo necesito que me cuentes sobre tu negocio, qué
            servicios ofreces, qué te gustaría mostrar y cómo quieres que te
            contacten los clientes.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            ¿Qué incluye el precio del desarrollo web?
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Un desarrollo web profesional incluye diseño personalizado,
            desarrollo del código, adaptación a dispositivos móviles,
            configuración de formularios y WhatsApp, SEO técnico básico,
            publicación en internet y un período de soporte posterior a la
            entrega. El dominio y hosting se pagan por separado.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            ¿El desarrollador web me ayuda con el dominio y hosting?
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Sí. Te oriento sobre las mejores opciones de dominio y hosting
            según tu presupuesto y necesidades. Si lo prefieres, puedo
            gestionar la compra y configuración por ti.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            ¿Puedo actualizar mi página yo mismo después de publicada?
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Depende de cómo esté construida. Puedo desarrollar tu sitio con
            un panel de administración sencillo para que puedas hacer cambios
            básicos (textos, imágenes, productos). Para cambios más complejos,
            podemos coordinar un plan de mantenimiento.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            ¿Trabajas con clientes fuera de Bogotá?
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Sí, trabajo con clientes en toda Colombia de forma remota. La
            comunicación es por WhatsApp, correo y videollamada. No importa
            si estás en Medellín, Cali, Barranquilla, Cartagena, Bucaramanga
            o cualquier otra ciudad.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            ¿Ofreces garantía sobre el trabajo realizado?
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Sí. Todos mis proyectos incluyen un período de soporte posterior
            a la entrega para corregir cualquier error que pueda surgir.
            También ofrezco planes de mantenimiento para actualizaciones
            continuas.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            ¿Qué pasa si necesito cambios después de publicado el sitio?
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Los cambios posteriores a la entrega se manejan según lo
            acordado. Si están dentro del alcance del soporte post-entrega,
            no tienen costo adicional. Si son nuevas funcionalidades, se
            cotizan por separado.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            ¿Qué formas de pago aceptas?
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Trabajo con transferencias bancarias en Colombia (Bancolombia,
            Nequi, Daviplata). Normalmente manejamos un anticipo del 50% para
            iniciar y el 50% restante al finalizar el proyecto.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            ¿Cómo empiezo a trabajar contigo?
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Escríbeme por{' '}
            <a
              href="https://wa.me/573106289086"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-white underline hover:no-underline"
            >
              WhatsApp al 310 628 9086
            </a>
            , cuéntame sobre tu negocio y lo que necesitas. Te responderé con
            información detallada y sin compromiso. También puedes usar el{' '}
            <a
              href="/#contacto"
              className="text-gray-900 dark:text-white underline hover:no-underline"
            >
              formulario de contacto
            </a>{' '}
            en mi sitio web.
          </p>
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Conclusión
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Contratar un desarrollador web en Colombia es una de las mejores
        decisiones que puedes tomar para hacer crecer tu negocio en internet.
        Ya sea que necesites una{' '}
        <a
          href="/servicios/landing-pages"
          className="text-gray-900 dark:text-white underline hover:no-underline"
        >
          landing page
        </a>{' '}
        para captar clientes, un{' '}
        <a
          href="/servicios/ecommerce"
          className="text-gray-900 dark:text-white underline hover:no-underline"
        >
          e-commerce
        </a>{' '}
        para vender por internet, o un sitio web corporativo completo, elegir
        al profesional adecuado es la clave para obtener un resultado que
        realmente funcione para tu negocio.
      </p>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Soy David Ortiz, desarrollador web freelance en Colombia. Me
        especializo en crear páginas web modernas, rápidas, funcionales y
        optimizadas para que tu negocio aparezca en Google y reciba más
        clientes. Cada proyecto lo construyo con tecnologías actuales como
        Next.js, TypeScript y Tailwind CSS, asegurando un sitio profesional
        que refleje la calidad de tu negocio.
      </p>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Si estás listo para dar el siguiente paso y tener presencia profesional
        en internet, contáctame sin compromiso. Conversemos sobre tu negocio,
        tus objetivos y cómo puedo ayudarte a crecer con una página web
        diseñada para ti.
      </p>

      <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 text-center my-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          ¿Necesitas un desarrollador web en Colombia?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-5 max-w-lg mx-auto">
          Cuéntame sobre tu proyecto y recibe una cotización personalizada sin
          compromiso. Te respondo personalmente por WhatsApp.
        </p>
        <a
          href="https://wa.me/573106289086?text=Hola%20David%2C%20quiero%20informaci%C3%B3n%20para%20crear%20una%20p%C3%A1gina%20web%20para%20mi%20negocio."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1da851] transition-all duration-200 hover:scale-105 shadow-md min-h-[44px] text-sm sm:text-base"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 448 512"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          Escríbeme por WhatsApp
        </a>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400 space-y-2">
        <p>
          Artículo escrito por{' '}
          <strong className="text-gray-700 dark:text-gray-300">
            David Ortiz
          </strong>
          , desarrollador web en Colombia. Ayudo a negocios y emprendedores a
          tener presencia profesional en internet con páginas web modernas y
          optimizadas.
        </p>
        <p>
          <a
            href="/servicios/paginas-web-colombia"
            className="underline hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Páginas web en Colombia
          </a>
          {" · "}
          <a
            href="/blog/cuanto-cuesta-una-pagina-web-en-colombia"
            className="underline hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ¿Cuánto cuesta una página web?
          </a>
          {" · "}
          <a
            href="/servicios/paginas-web-para-negocios"
            className="underline hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Páginas web para negocios
          </a>
          {" · "}
          <a
            href="/#contacto"
            className="underline hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Contacto
          </a>
        </p>
      </div>
    </>
  );
}
