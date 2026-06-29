import type { Metadata } from "next";

const SITE_URL = "https://www.david-ortiz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Términos y Condiciones | David Ortiz",
  description:
    "Términos y Condiciones del sitio web de David Ortiz, desarrollador web en Colombia. Información sobre el uso del sitio, servicios, propiedad intelectual y limitación de responsabilidad.",
  keywords: [
    "términos y condiciones",
    "condiciones de uso",
    "términos legales Colombia",
    "uso del sitio web",
    "propiedad intelectual",
  ],
  alternates: {
    canonical: `${SITE_URL}/terminos-y-condiciones`,
  },
  openGraph: {
    title: "Términos y Condiciones | David Ortiz",
    description:
      "Términos y Condiciones del sitio web de David Ortiz. Uso del sitio, servicios, propiedad intelectual y legislación aplicable.",
    url: `${SITE_URL}/terminos-y-condiciones`,
    siteName: "David Ortiz",
    images: [{ url: `${SITE_URL}/icon.png`, width: 512, height: 512, alt: "Términos y Condiciones - David Ortiz" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16">
        <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mb-6 sm:mb-8">
          <a href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Inicio
          </a>
          <span className="mx-2">/</span>
          <span>Términos y Condiciones</span>
        </p>

        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h1>Términos y Condiciones</h1>

          <h2>Identificación</h2>
          <p>
            El sitio web <strong>https://www.david-ortiz.dev</strong> es un espacio personal y
            profesional de David Ortiz, desarrollador web en Colombia, destinado a ofrecer servicios
            de diseño y desarrollo web.
          </p>

          <h2>Uso del sitio</h2>
          <p>
            El usuario puede navegar libremente por el sitio, consultar información sobre los
            servicios ofrecidos y enviar solicitudes de contacto y cotización a través del formulario
            habilitado, WhatsApp o correo electrónico.
          </p>

          <h2>Servicios ofrecidos</h2>
          <p>Los servicios de desarrollo web que ofrezco incluyen:</p>
          <ul>
            <li>Diseño y desarrollo de páginas web para negocios.</li>
            <li>Landing pages profesionales.</li>
            <li>E-commerce y catálogos online.</li>
            <li>Formularios de contacto y botones de WhatsApp.</li>
            <li>SEO técnico básico.</li>
            <li>Despliegue web en Vercel.</li>
          </ul>

          <h2>Cotizaciones</h2>
          <p>
            La información publicada en este sitio web no constituye una oferta comercial definitiva.
            Los precios, tiempos de entrega, alcances y condiciones se acuerdan de forma individual
            con cada cliente mediante comunicación directa por WhatsApp o correo electrónico.
          </p>

          <h2>Propiedad intelectual</h2>
          <p>
            Los textos, diseños, código fuente, estructura visual, logotipos y contenidos originales
            de este sitio web pertenecen a David Ortiz, salvo aquellos recursos de terceros utilizados
            bajo licencia. Queda prohibida la reproducción total o parcial del contenido sin
            autorización previa.
          </p>

          <h2>Proyectos de clientes</h2>
          <p>
            Los proyectos de desarrollo web realizados para clientes se regirán por el acuerdo
            específico establecido entre las partes. Cada cliente conserva los derechos sobre su
            contenido, marca e información suministrada.
          </p>

          <h2>Limitación de responsabilidad</h2>
          <p>
            David Ortiz procura mantener la información del sitio web actualizada y precisa. Sin
            embargo, no se garantiza que el sitio esté libre de errores, interrupciones o que toda
            la información esté completa en todo momento.
          </p>

          <h2>Enlaces externos</h2>
          <p>
            Este sitio web puede contener enlaces a servicios de terceros como WhatsApp, GitHub,
            Instagram, Vercel u otros. David Ortiz no controla las políticas de privacidad, términos
            ni prácticas de dichos servicios externos. Se recomienda al usuario revisar las políticas
            de cada plataforma.
          </p>

          <h2>Protección de datos personales</h2>
          <p>
            El tratamiento de datos personales recolectados a través de este sitio web se rige por la{" "}
            <a href="/politica-de-privacidad">Política de Privacidad</a>, en cumplimiento de la Ley
            1581 de 2012 de Colombia.
          </p>

          <h2>Legislación aplicable</h2>
          <p>
            Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier
            controversia derivada del uso de este sitio web se resolverá conforme a la legislación
            colombiana.
          </p>

          <p>
            <strong>Fecha de última actualización:</strong> 7 de junio de 2026.
          </p>
        </article>

        <hr className="my-10 sm:my-12 border-gray-200 dark:border-gray-800" />

        <div className="flex justify-center gap-6">
          <a href="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
            Volver al inicio
          </a>
          <a href="/politica-de-privacidad" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
            Política de Privacidad
          </a>
        </div>
      </div>
    </div>
  );
}
