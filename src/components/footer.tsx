export function Footer() {
  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black py-12 sm:py-16 px-4 sm:px-6" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-400 dark:from-black dark:to-gray-600 bg-clip-text text-transparent">
              David Ortiz
            </h2>
            <p className="text-gray-300 dark:text-gray-800 leading-relaxed text-sm font-medium">
              Desarrollador web en Colombia. Creo páginas web modernas, responsivas y profesionales para negocios que quieren crecer en internet.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold text-gray-300 dark:text-black mb-4 sm:mb-5 tracking-widest uppercase">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black font-medium transition-colors text-sm duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#acerca" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black font-medium transition-colors text-sm duration-200">
                  Acerca
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black font-medium transition-colors text-sm duration-200">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black font-medium transition-colors text-sm duration-200">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black font-medium transition-colors text-sm duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold text-gray-300 dark:text-black mb-4 sm:mb-5 tracking-widest uppercase">
              Servicios web
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/servicios/paginas-web-para-negocios" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black font-medium transition-colors text-sm duration-200">
                  Páginas web para negocios
                </a>
              </li>
              <li>
                <a href="/servicios/landing-pages" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black font-medium transition-colors text-sm duration-200">
                  Landing pages
                </a>
              </li>
              <li>
                <a href="/servicios/ecommerce" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black font-medium transition-colors text-sm duration-200">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="/servicios/paginas-web-bogota" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black font-medium transition-colors text-sm duration-200">
                  Páginas web en Bogotá
                </a>
              </li>
              <li>
                <a href="/servicios/paginas-web-colombia" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black font-medium transition-colors text-sm duration-200">
                  Páginas web en Colombia
                </a>
              </li>
              <li>
                <a href="/blog/cuanto-cuesta-una-pagina-web-en-colombia" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black font-medium transition-colors text-sm duration-200">
                  Precios de páginas web
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold text-gray-300 dark:text-black mb-4 sm:mb-5 tracking-widest uppercase">
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <svg className="w-5 h-5 text-gray-300 dark:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:esauortiz014@gmail.com" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors text-sm font-medium">
                  esauortiz014@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <svg className="w-5 h-5 text-gray-300 dark:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="https://wa.me/573106289086?text=Hola%20David%2C%20quiero%20informaci%C3%B3n%20para%20crear%20una%20p%C3%A1gina%20web%20para%20mi%20negocio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors text-sm font-medium"
                >
                  310 628 9086
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <svg className="w-5 h-5 text-gray-300 dark:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 dark:text-gray-700 text-sm font-medium">Colombia</span>
              </div>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold text-gray-300 dark:text-black mb-4 sm:mb-5 tracking-widest uppercase">
              Sígueme
            </h3>
            <div className="flex gap-6 justify-center sm:justify-start">
              <a
                href="https://wa.me/573106289086?text=Hola%20David%2C%20quiero%20informaci%C3%B3n%20para%20crear%20una%20p%C3%A1gina%20web%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="text-gray-300 dark:text-gray-800 hover:text-green-500 dark:hover:text-green-600 transition-all hover:scale-110 transform duration-200"
              >
                <svg width="22" height="22" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
              <a
                href="https://github.com/esadortiz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver GitHub de David Ortiz"
                className="text-gray-300 dark:text-gray-800 hover:text-white dark:hover:text-black transition-all hover:scale-110 transform duration-200"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/david_oh14/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver Instagram de David Ortiz"
                className="text-gray-300 dark:text-gray-800 hover:text-pink-500 dark:hover:text-pink-400 transition-all hover:scale-110 transform duration-200"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 dark:border-gray-200 pt-6 sm:pt-8 mt-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-4">
            <a href="/politica-de-privacidad" className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black text-xs transition-colors">
              Política de Privacidad
            </a>
            <span className="hidden sm:inline text-gray-700 dark:text-gray-400">|</span>
            <a href="/terminos-y-condiciones" className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black text-xs transition-colors">
              Términos y Condiciones
            </a>
          </div>
          <p className="text-gray-300 dark:text-gray-800 text-center text-xs sm:text-sm font-medium">
            © 2026 David Ortiz. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
