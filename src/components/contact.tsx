"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicio, setServicio] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombre.trim(),
          email: email.trim(),
          telefono: telefono.trim(),
          servicio: servicio.trim(),
          mensaje: mensaje.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "No se pudo enviar el mensaje.");
        return;
      }

      setSuccess(true);
      setNombre("");
      setEmail("");
      setTelefono("");
      setServicio("");
      setMensaje("");
    } catch {
      setError(
        "No pude enviar tu mensaje en este momento. También puedes escribirme por WhatsApp al 310 628 9086."
      );
    } finally {
      setSending(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-200 text-sm";

  return (
    <section
      ref={sectionRef}
      id="contacto"
      aria-label="Contacto"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-white dark:bg-black transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-5xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            ¿Necesitas una página web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              para tu negocio?
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mt-4">
            Cuéntame qué tipo de página necesitas y te ayudo a convertir tu idea en un sitio profesional, moderno y fácil de compartir con tus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nombre *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre"
                    autoComplete="name"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    autoComplete="email"
                    className={inputBase}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="300 123 4567"
                    autoComplete="tel"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Servicio de interés
                  </label>
                  <select
                    id="servicio"
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    className={inputBase}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Página web para negocios">Página web para negocios</option>
                    <option value="Landing page">Landing page de alto impacto</option>
                    <option value="Formularios y contacto">Formularios y contacto</option>
                    <option value="Diseño responsive">Diseño responsive</option>
                    <option value="SEO básico">SEO básico</option>
                    <option value="Asistente o chatbot">Asistente y automatización</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  required
                  rows={5}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Cuéntame sobre tu proyecto o negocio..."
                  className={`${inputBase} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 min-h-[44px]"
              >
                {sending ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  "Enviar mensaje"
                )}
              </button>

              {success && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800" role="alert">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Mensaje enviado correctamente. Pronto me pondré en contacto contigo.
                  </p>
                </div>
              )}

              {error && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800" role="alert">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    {error}
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                También puedes contactarme directamente
              </h3>

              <a
                href="https://wa.me/573106289086?text=Hola%20David%2C%20quiero%20informaci%C3%B3n%20para%20crear%20una%20p%C3%A1gina%20web%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp al 310 628 9086"
                className="group flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 448 512" fill="white">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">WhatsApp</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">310 628 9086</p>
                </div>
              </a>

              <a
                href="mailto:esauortiz014@gmail.com"
                aria-label="Enviar correo a esauortiz014@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-black">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Correo electrónico</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">esauortiz014@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Ubicación</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
