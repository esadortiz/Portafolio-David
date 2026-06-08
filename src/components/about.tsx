"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const workPoints = [
  {
    title: "Diseño claro y profesional",
    description: "Sitios visualmente limpios que transmiten confianza",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Adaptado a cualquier dispositivo",
    description: "Celular, tablet y computador sin perder calidad",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Enfoque en contacto real",
    description: "WhatsApp y formularios para que te escriban fácil",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Publicación en internet",
    description: "Tu sitio listo para compartir con clientes desde el primer día",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Acompañamiento durante el proceso",
    description: "Estoy disponible para dudas, cambios y mejoras",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const createPoints = [
  "Landing pages para servicios",
  "Páginas web para negocios",
  "Portafolios profesionales",
  "Catálogos online",
  "Sitios con formularios de contacto",
  "Integraciones básicas con WhatsApp",
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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

  return (
    <section
      ref={sectionRef}
      id="acerca"
      aria-label="Acerca de mí"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 dark:bg-black transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center lg:justify-start animate-fade-up">
          <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] lg:w-[30rem] lg:h-[40rem] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/About.me.png"
              alt="David Ortiz, desarrollador web en Colombia"
              width={480}
              height={640}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              priority={false}
              sizes="(max-width: 640px) 256px, (max-width: 720px) 288px, (max-width: 1024px) 320px, 480px"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="animate-fade-up-delay-200">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Acerca de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                Mí
              </span>
            </h2>
          </div>

          <div className="animate-fade-up-delay-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              David Ortiz
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Soy desarrollador web y me enfoco en crear páginas modernas, funcionales y fáciles de usar para negocios, emprendedores y profesionales. Mi objetivo es que cada sitio no solo se vea bien, sino que también ayude a generar confianza, recibir mensajes de clientes y presentar servicios de forma clara.
            </p>
          </div>

          <div className="animate-fade-up-delay-400">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Trabajo combinando diseño, desarrollo y herramientas digitales como formularios, WhatsApp, SEO básico y automatizaciones simples para construir sitios listos para publicarse y compartirse con clientes.
            </p>
          </div>

          <div className="animate-fade-up-delay-500">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gray-900 dark:bg-white rounded-full" />
              Mi forma de trabajar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {workPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300"
                >
                  <div className="text-gray-900 dark:text-white flex-shrink-0 mt-0.5">
                    {point.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">
                      {point.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up-delay-600">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gray-900 dark:bg-white rounded-full" />
              Lo que puedo ayudarte a crear
            </h3>
            <div className="flex flex-wrap gap-2">
              {createPoints.map((point) => (
                <span
                  key={point}
                  className="px-4 py-2 bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105 transition-all duration-300"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
