"use client";

import { useState, useEffect, useRef } from "react";

export function Trajectory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
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

  const cards = [
    {
      title: "Páginas web modernas",
      icon: (
        <div className="bg-black dark:bg-white p-3 rounded-lg w-16 h-16 flex items-center justify-center">
          <svg className="w-10 h-10 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      ),
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML y CSS"],
    },
    {
      title: "Diseño claro y responsive",
      icon: (
        <div className="bg-black dark:bg-white p-3 rounded-lg w-16 h-16 flex items-center justify-center">
          <svg className="w-10 h-10 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.342l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </div>
      ),
      items: ["Adaptado a celular", "Adaptado a tablet", "Adaptado a computador", "UI/UX", "Navegación clara"],
    },
    {
      title: "Funciones para captar clientes",
      icon: (
        <div className="bg-black dark:bg-white p-3 rounded-lg w-16 h-16 flex items-center justify-center">
          <svg className="w-10 h-10 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      ),
      items: ["WhatsApp integrado", "Formularios de contacto", "Botones de acción", "Mapas de ubicación", "Páginas legales"],
    },
    {
      title: "Publicación y presencia online",
      icon: (
        <div className="bg-black dark:bg-white p-3 rounded-lg w-16 h-16 flex items-center justify-center">
          <svg className="w-10 h-10 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      items: ["Hosting en Vercel", "Dominio personalizado", "SEO básico", "Sitemap y robots", "Optimización inicial"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="trayectoria"
      aria-label="Lo que puedo construir para tu negocio"
      className={`min-h-screen bg-white dark:bg-black text-black dark:text-white py-20 px-4 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
          Lo que puedo construir{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            para tu negocio
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Combino desarrollo web, diseño responsive, formularios, WhatsApp, SEO básico y publicación en internet para crear sitios listos para atraer clientes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className={`bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 shadow-lg rounded-xl p-6 transform transition-all duration-500 hover:scale-105 hover:border-gray-400 dark:hover:border-gray-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="flex flex-col items-center">
              {card.icon}
              <h3 className="text-xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">{card.title}</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
