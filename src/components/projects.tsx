"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Sonrisa Viva Odontología",
    type: "Landing page profesional para clínica odontológica",
    description:
      "Sitio web profesional para una clínica odontológica, diseñado para presentar servicios, generar confianza y facilitar el contacto con pacientes mediante WhatsApp, formulario de contacto, mapa de ubicación y chatbot informativo.",
    features: [
      "Diseño moderno y responsive",
      "Secciones de servicios, beneficios, contacto y testimonios",
      "Chatbot informativo con respuestas locales y Gemini como apoyo",
      "Formulario de contacto conectado con Resend",
      "Botón de WhatsApp",
      "Mapa de ubicación",
      "Páginas legales",
      "SEO básico",
      "Deploy en Vercel",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Resend",
      "Gemini API",
      "Vercel",
    ],
    demo: "https://odontologia-sonrisa-viva.vercel.app",
    github: "https://github.com/esadortiz/Odontologia-SonrisaViva",
    image: "/sonrisa-viva-preview.png",
    imageAlt: "Vista previa del sitio web Sonrisa Viva Odontología",
    imageWidth: 800,
    imageHeight: 450,
  },
  {
    id: 2,
    title: "AUREALUXE E-commerce",
    type: "Tienda e-commerce multipágina",
    description:
      "Tienda web de e-commerce moderna y funcional, desarrollada para negocios que necesitan vender productos online. Incluye catálogo de productos, carrito de compras, autenticación de usuarios, seguimiento de pedidos, ofertas, newsletter y conexión con Supabase.",
    features: [
      "Catálogo de productos",
      "Carrito de compras persistente",
      "Checkout con pedidos simulados",
      "Autenticación de usuarios",
      "Perfil e historial de compras",
      "Seguimiento de pedidos",
      "Página de ofertas y newsletter",
      "Formulario de contacto",
      "Supabase como base de datos y autenticación",
      "Deploy en Vercel",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "GitHub",
    ],
    demo: "https://aurealuxe.vercel.app/productos.html",
    github: "https://github.com/esadortiz/AUREALUXE",
    image: "/aurealuxe-preview.png",
    imageAlt: "Vista previa del e-commerce AUREALUXE",
    imageWidth: 800,
    imageHeight: 450,
  },
];

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="proyectos"
      aria-label="Proyectos destacados"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-white dark:bg-black transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Proyectos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              destacados
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Estos son algunos proyectos reales que demuestran cómo puedo ayudar
            a negocios a tener presencia digital, captar clientes y mejorar su
            comunicación online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`group bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-bold uppercase tracking-wider">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Características
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5" role="list">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-emerald-500 flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver sitio web de ${project.title}`}
                    className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-sm font-semibold"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Ver sitio
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código de ${project.title} en GitHub`}
                    className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-5 py-2.5 rounded-full hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-105 text-sm font-semibold"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Ver código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
