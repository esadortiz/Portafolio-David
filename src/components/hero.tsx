import { HeroTyping } from "@/components/hero-typing";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Inicio"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 pt-24 sm:pt-28 bg-white dark:bg-black"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center gap-8 sm:gap-12">
        <div className="space-y-6 sm:space-y-8 animate-fade-up text-center w-full">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transform transition-all duration-700 hover:scale-105 text-gray-900 dark:text-white">
              Diseño y desarrollo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                páginas web
              </span>{" "}
              para negocios que quieren crecer en internet
            </h1>

            <HeroTyping />
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto font-light tracking-wide transform transition-all duration-700 hover:text-gray-900 dark:hover:text-white">
            Soy{" "}
            <span className="font-semibold text-gray-900 dark:text-white bg-gradient-to-r from-gray-100 dark:from-gray-800 to-transparent px-2 py-1 rounded">
              David Ortiz
            </span>
            , desarrollador web. Creo sitios modernos, responsivos y funcionales para emprendedores, profesionales y empresas que necesitan mostrar sus servicios, recibir clientes y fortalecer su presencia digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up-delay-400 justify-center">
            <a
              href="https://wa.me/573106289086?text=Hola%20David%2C%20quiero%20informaci%C3%B3n%20para%20crear%20una%20p%C3%A1gina%20web%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp para crear tu página web"
              className="group bg-black dark:bg-white border-2 border-black dark:border-white text-white dark:text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer text-sm sm:text-base"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span className="font-medium">Quiero mi página web</span>
            </a>
            <a
              href="#proyectos"
              className="group bg-white dark:bg-black border-2 border-black dark:border-white text-black dark:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer text-sm sm:text-base"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-y-1 transition-transform"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <span className="font-medium">Ver proyectos</span>
            </a>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 sm:pt-8 transform transition-all duration-500 hover:border-gray-300 dark:hover:border-gray-600">
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3 tracking-widest uppercase text-center">
              Encuéntrame en
            </p>
            <div className="flex gap-6 justify-center">
              <a
                href="https://wa.me/573106289086?text=Hola%20David%2C%20quiero%20informaci%C3%B3n%20para%20crear%20una%20p%C3%A1gina%20web%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="text-gray-600 hover:text-green-600 transition-all hover:scale-125 hover:rotate-12 transform duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
              <a
                href="https://github.com/esadortiz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver GitHub de David Ortiz"
                className="text-gray-600 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-125 hover:rotate-12 transform duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/david_oh14/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver Instagram de David Ortiz"
                className="text-gray-600 hover:text-pink-600 transition-all hover:scale-125 hover:rotate-12 transform duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
