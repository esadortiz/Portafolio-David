import type { Metadata } from "next";

const SITE_URL = "https://www.david-ortiz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Política de Privacidad | David Ortiz",
  description:
    "Política de Privacidad y Tratamiento de Datos Personales de David Ortiz, desarrollador web en Colombia. Conoce cómo se recopilan, usan y protegen tus datos personales.",
  keywords: [
    "política de privacidad",
    "tratamiento de datos personales",
    "ley 1581 de 2012",
    "habeas data Colombia",
    "protección de datos",
  ],
  alternates: {
    canonical: `${SITE_URL}/politica-de-privacidad`,
  },
  openGraph: {
    title: "Política de Privacidad | David Ortiz",
    description:
      "Política de Privacidad y Tratamiento de Datos Personales. Conoce cómo se protegen tus datos.",
    url: `${SITE_URL}/politica-de-privacidad`,
    siteName: "David Ortiz",
    images: [{ url: `${SITE_URL}/icon.png`, width: 512, height: 512, alt: "Política de Privacidad - David Ortiz" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16">
        <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mb-6 sm:mb-8">
          <a href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Inicio
          </a>
          <span className="mx-2">/</span>
          <span>Política de Privacidad</span>
        </p>

        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h1>Política de Privacidad y Tratamiento de Datos Personales</h1>

          <p>
            En cumplimiento de la Ley 1581 de 2012 de Colombia sobre protección de datos personales
            y el derecho de habeas data, presento la Política de Privacidad y Tratamiento de Datos
            Personales aplicable al sitio web <strong>https://www.david-ortiz.dev</strong>.
          </p>

          <h2>Responsable del tratamiento</h2>
          <ul>
            <li><strong>Nombre:</strong> David Ortiz</li>
            <li><strong>Correo electrónico:</strong> esauortiz014@gmail.com</li>
            <li><strong>Sitio web:</strong> https://www.david-ortiz.dev</li>
          </ul>

          <h2>Datos que se pueden recolectar</h2>
          <p>
            A través del formulario de contacto, WhatsApp, correo electrónico o cualquier otro medio
            de comunicación disponible en el sitio, se podrán recolectar los siguientes datos
            personales suministrados voluntariamente por los usuarios:
          </p>
          <ul>
            <li>Nombre</li>
            <li>Correo electrónico</li>
            <li>Teléfono</li>
            <li>Mensaje enviado por formulario</li>
            <li>Información entregada voluntariamente por WhatsApp o correo</li>
          </ul>

          <h2>Finalidades del tratamiento</h2>
          <p>Los datos personales recolectados serán utilizados para las siguientes finalidades:</p>
          <ul>
            <li>Responder solicitudes de contacto y cotizaciones.</li>
            <li>Atender consultas sobre servicios web.</li>
            <li>Realizar seguimiento comercial relacionado con la solicitud del usuario.</li>
            <li>Comunicación por WhatsApp o correo electrónico.</li>
            <li>Mejora del servicio ofrecido.</li>
          </ul>

          <h2>Base de autorización</h2>
          <p>
            El usuario autoriza el tratamiento de sus datos personales al marcar el checkbox de
            autorización en el formulario de contacto y enviar sus datos. También se entiende que
            autoriza el tratamiento cuando envía información voluntariamente por WhatsApp o correo
            electrónico para solicitar información o servicios.
          </p>

          <h2>Derechos del titular</h2>
          <p>
            De acuerdo con la Ley 1581 de 2012, como titular de los datos personales tienes derecho a:
          </p>
          <ul>
            <li>Conocer, actualizar y rectificar tus datos personales.</li>
            <li>Solicitar la eliminación de tus datos cuando consideres que no están siendo tratados conforme a la ley.</li>
            <li>Revocar la autorización otorgada para el tratamiento de tus datos.</li>
            <li>Consultar el uso que se ha dado a tus datos personales.</li>
          </ul>

          <h2>¿Cómo ejercer tus derechos?</h2>
          <p>
            Puedes ejercer tus derechos de habeas data enviando un correo electrónico a{" "}
            <a href="mailto:esauortiz014@gmail.com">esauortiz014@gmail.com</a> con el asunto
            &quot;Protección de datos personales&quot;. Tu solicitud será atendida en los términos
            establecidos por la ley.
          </p>

          <h2>Conservación de los datos</h2>
          <p>
            Los datos personales se conservarán durante el tiempo necesario para atender la solicitud
            y dar seguimiento comercial razonable, salvo que el usuario solicite su eliminación de
            forma explícita.
          </p>

          <h2>Seguridad</h2>
          <p>
            Se aplican medidas razonables de seguridad técnicas y organizativas para proteger la
            información personal contra acceso no autorizado, pérdida, alteración o divulgación.
          </p>

          <h2>Transferencia a terceros</h2>
          <p>
            Los datos personales pueden ser tratados por herramientas necesarias para operar el sitio
            web, como servicios de correo electrónico (Resend), hosting (Vercel) o comunicación
            (WhatsApp), únicamente para las finalidades indicadas en esta política. No se venden,
            comparten ni transfieren datos personales a terceros con fines comerciales ajenos al
            servicio ofrecido.
          </p>

          <h2>Menores de edad</h2>
          <p>
            Los servicios ofrecidos a través de este sitio web están dirigidos a personas mayores de
            edad o negocios. Si un menor de edad envía datos personales, se podrá solicitar la
            autorización de su representante legal.
          </p>

          <h2>Cambios en la política de privacidad</h2>
          <p>
            David Ortiz podrá actualizar esta Política de Privacidad en cualquier momento. Los cambios
            serán publicados en esta misma página y, cuando corresponda, se notificará a los usuarios
            por los medios de contacto disponibles.
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
          <a href="/terminos-y-condiciones" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
            Términos y Condiciones
          </a>
        </div>
      </div>
    </div>
  );
}
