import type { Metadata } from "next";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

const SITE_URL = "https://www.david-ortiz.dev";
const PAGE_URL = `${SITE_URL}/servicios/ecommerce`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "E-commerce y catálogos online para negocios | David Ortiz",
  description:
    "Tiendas online y catálogos digitales para negocios que quieren vender o mostrar productos en internet. Soluciones simples con WhatsApp integrado.",
  keywords: [
    "e-commerce Colombia",
    "tiendas online para negocios",
    "catálogos digitales",
    "vender por internet Colombia",
    "tienda virtual pequeña",
    "catálogo con WhatsApp",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "E-commerce y catálogos online para negocios | David Ortiz",
    description:
      "Tiendas online y catálogos digitales para negocios que quieren vender o mostrar productos por internet.",
    url: PAGE_URL,
    siteName: "David Ortiz",
    images: [{ url: `${SITE_URL}/icon.png`, width: 512, height: 512, alt: "E-commerce por David Ortiz" }],
  },
};

export default function EcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema({
              pageUrl: PAGE_URL,
              serviceName: "E-commerce y catálogos online",
              description:
                "Tiendas online y catálogos digitales para negocios que quieren vender o mostrar productos en internet en Colombia.",
            }),
            breadcrumbSchema([
              { name: "Inicio", url: SITE_URL },
              { name: "Servicios", url: `${SITE_URL}/#servicios` },
              { name: "E-commerce", url: PAGE_URL },
            ]),
          ]),
        }}
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
        Tiendas online y catálogos digitales para vender en internet
      </h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
        Si tienes productos que quieres vender por internet o simplemente necesitas un catálogo digital para que tus clientes vean lo que ofreces, puedo ayudarte a crear una solución a la medida de tu negocio.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Soluciones para vender por internet
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        No todos los negocios necesitan una tienda online compleja. Dependiendo del tamaño de tu negocio y la cantidad de productos que manejes, podemos definir la mejor opción:
      </p>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">Catálogo digital con WhatsApp</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Ideal para negocios pequeños que quieren mostrar sus productos de forma organizada. Cada producto tiene foto, descripción y un botón directo de WhatsApp para que el cliente pregunte o haga su pedido. Es simple, rápido y no requiere pasarela de pago.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">Tienda online con carrito de compras</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Para negocios que necesitan un sistema más completo: carrito de compras, cálculo de envío, gestión de inventario y pasarela de pago. Esta solución es más robusta y está pensada para negocios con mayor volumen de productos y ventas.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">Página de producto o servicio con formulario de pedido</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        Si vendes pocos productos o un servicio principal, una página enfocada con formulario de pedido puede ser suficiente. El cliente ve el producto, llena sus datos y recibe confirmación por WhatsApp o correo.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        ¿Qué incluye un catálogo o tienda online?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-6">
        {[
          "Diseño profesional y moderno",
          "Galería de productos con fotos",
          "Descripciones y precios visibles",
          "Botón de WhatsApp por producto",
          "Formulario de contacto o pedido",
          "Adaptable a celular y tablet",
          "Carga rápida de imágenes",
          "SEO básico para Google",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3 bg-gray-50 dark:bg-white/5 rounded-xl p-3 sm:p-4 border border-gray-200 dark:border-gray-800">
            <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-200">{item}</span>
          </div>
        ))}
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
        Preguntas frecuentes
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Necesito saber de programación para manejar la tienda?</h3>
          <p className="text-gray-600 dark:text-gray-300">No. Te entrego la tienda lista para usar y te explico cómo gestionar productos, pedidos y consultas de forma sencilla.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Se pueden recibir pagos en línea?</h3>
          <p className="text-gray-600 dark:text-gray-300">Sí. Si tu negocio lo necesita, puedo integrar pasarelas de pago o simplemente usar WhatsApp para coordinar pagos por transferencia, según prefieras.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Puedo manejar inventario desde la página?</h3>
          <p className="text-gray-600 dark:text-gray-300">Para catálogos simples, podemos mostrar disponibilidad. Para tiendas con más volumen, puedo integrar un panel de administración de inventario.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">¿Cuántos productos puedo mostrar?</h3>
          <p className="text-gray-600 dark:text-gray-300">Desde unos pocos productos hasta catálogos más grandes. Conversemos sobre el tamaño de tu catálogo para recomendarte la mejor opción.</p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400 space-y-2">
        <p>Soy <strong className="text-gray-700 dark:text-gray-300">David Ortiz</strong>, desarrollador web en Colombia. Creo tiendas online y catálogos digitales para vender por internet.</p>
        <p>
          <a href="/servicios/paginas-web-para-negocios" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">Páginas web para negocios</a>
          {" · "}
          <a href="/servicios/landing-pages" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">Landing pages</a>
          {" · "}
          <a href="/#contacto" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">Solicitar cotización</a>
        </p>
      </div>
    </>
  );
}
