const faqs = [
  {
    question: "¿Qué servicios ofrece David Ortiz?",
    answer:
      "Ofrezco diseño y desarrollo de páginas web para negocios, landing pages profesionales, e-commerce y catálogos online. También integro formularios de contacto, botones de WhatsApp, SEO técnico básico y publico cada sitio en internet para que esté listo desde el primer día.",
  },
  {
    question: "¿David Ortiz crea páginas web para negocios?",
    answer:
      "Sí, desarrollo páginas web profesionales para negocios de todos los tamaños: emprendimientos, tiendas, clínicas, profesionales independientes y empresas que quieren mostrar sus servicios y recibir clientes por internet.",
  },
  {
    question: "¿Trabaja con clientes en Bogotá y Colombia?",
    answer:
      "Sí, trabajo con clientes en toda Colombia, incluyendo Bogotá, Valledupar y otras ciudades. La comunicación es remota por WhatsApp, correo y videollamada, así que no importa en qué ciudad estés.",
  },
  {
    question: "¿Puede integrar WhatsApp en mi página web?",
    answer:
      "Sí, todas las páginas web que desarrollo incluyen botones de WhatsApp para que tus clientes te escriban directo con un solo clic, además de formularios de contacto y llamadas a la acción.",
  },
  {
    question: "¿Hace landing pages y e-commerce?",
    answer:
      "Sí, creo landing pages enfocadas en presentar un servicio o producto y captar clientes rápido. También desarrollo sitios de e-commerce y catálogos online para vender por internet.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      aria-label="Preguntas frecuentes"
      className="py-20 px-4 sm:px-6 bg-white dark:bg-black"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Preguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Frecuentes
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Respuestas claras sobre mis servicios de desarrollo web
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-colors duration-200 min-h-[44px]">
                <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-2">
                  {faq.question}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 text-gray-400 dark:text-gray-500 transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="px-5 pb-4 sm:px-6 sm:pb-5 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
