"use client";

import { useState, useEffect, useRef } from "react";

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Páginas web para negocios",
      description:
        "Diseño y desarrollo sitios web profesionales para clínicas, tiendas, emprendimientos, profesionales independientes y empresas.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Landing pages de alto impacto",
      description:
        "Páginas enfocadas en presentar un servicio, captar clientes y dirigirlos a WhatsApp, formularios o redes sociales.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Formularios y contacto",
      description:
        "Integración de formularios, botones de WhatsApp, mapas, correos de contacto y llamadas a la acción.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Diseño responsive",
      description:
        "Sitios adaptados para celular, tablet y computador, con navegación clara y diseño moderno.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "SEO básico",
      description:
        "Configuración inicial para que el sitio pueda ser indexado por Google: títulos, descripciones, Open Graph, sitemap y robots.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Asistentes y automatización",
      description:
        "Integración de chatbots o asistentes básicos para orientar usuarios, responder preguntas frecuentes y enviar clientes a WhatsApp.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
  ];

  const incluyeItems = [
    "Diseño moderno",
    "Adaptada a celular",
    "Botón de WhatsApp",
    "Formulario de contacto",
    "Secciones personalizadas",
    "Publicación en internet",
    "SEO básico",
    "Asesoría inicial",
  ];

  return (
    <section
      ref={sectionRef}
      id="servicios"
      aria-label="Servicios de desarrollo web"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-white dark:bg-black transition-all duration-1000 relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-2 h-32 bg-gray-400/10 dark:bg-gray-100/10 rounded-full animate-float" style={{ animationDuration: "3s" }} />
        <div className="absolute top-40 right-20 w-1 h-24 bg-gray-400/10 dark:bg-gray-100/10 rounded-full animate-float" style={{ animationDelay: "1s", animationDuration: "4s" }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-40 bg-gray-400/10 dark:bg-gray-100/10 rounded-full animate-float" style={{ animationDelay: "2s", animationDuration: "3.5s" }} />
        <div className="absolute bottom-20 right-1/4 w-1 h-28 bg-gray-400/10 dark:bg-gray-100/10 rounded-full animate-float" style={{ animationDelay: "1.5s", animationDuration: "3s" }} />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Mis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Servicios
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Lo que puedo hacer por tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white dark:bg-white/[0.03] p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:border-gray-900 dark:hover:border-gray-400 transition-all duration-500 hover:-translate-y-3 transform overflow-hidden ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-900/5 to-transparent rounded-full blur-2xl group-hover:from-gray-900/10 transition-colors duration-500" aria-hidden="true" />

              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 rounded-2xl flex items-center justify-center text-white dark:text-black mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg mx-auto md:mx-0">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-black dark:group-hover:text-white transition-colors text-center md:text-left">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs sm:text-sm text-center md:text-left">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              ¿Qué incluye una página web?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Cada proyecto lleva todo lo necesario para que tu negocio tenga presencia profesional en internet.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {incluyeItems.map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-3 bg-gray-50 dark:bg-white/10 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:scale-105 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${0.6 + index * 0.05}s` }}
              >
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12 sm:mt-16 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://wa.me/573106289086?text=Hola%20David%2C%20quiero%20informaci%C3%B3n%20para%20crear%20una%20p%C3%A1gina%20web%20para%20mi%20negocio."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cotizar página web por WhatsApp"
            className="group bg-white dark:bg-white border-2 border-black dark:border-black text-black dark:text-black px-6 py-3 sm:px-10 sm:py-5 rounded-full flex items-center gap-2 sm:gap-3 hover:bg-black dark:hover:bg-black hover:text-white dark:hover:text-white hover:border-white dark:hover:border-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer text-base sm:text-lg font-semibold"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <span>Cotizar mi página web</span>
          </a>
        </div>
      </div>
    </section>
  );
}
