# Portafolio Personal - David Ortiz

Guía breve para clonar, instalar y ejecutar el proyecto, cualquier duda sígueme en Instagram. 😁

[![Instagram](https://img.shields.io/badge/Instagram-@david_oh14-E4405F?logo=instagram&logoColor=white)](https://instagram.com/david_oh14)

## Requisitos
- Node.js 18+ (recomendado 20)
- npm 9+ o pnpm/yarn

## Instalación
```bash
git clone <https://github.com/esadortiz/Portafolio1.git>
cd Portafolio1
npm install
```

## Desarrollo
```bash
# Para correr el proyecto y verlo, despues vas a la APP
npm run dev
```

App disponible en `http://localhost:3000`.

## Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables (ver `.env.example`):

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=tu-correo@ejemplo.com
```

- `RESEND_API_KEY`: Clave de API de [Resend](https://resend.com) para enviar correos desde el formulario de contacto.
- `CONTACT_EMAIL`: Correo que recibirá los mensajes del formulario.

> **Nota:** Nunca subas `.env.local` al repositorio. Ya está excluido en `.gitignore`.

## Build y producción
```bash
npm run build
npm start
```

## Redes sociales (sígueme y da ⭐ al repo)

Por favor, apóyame dando una estrella a este repositorio y siguiéndome en mis redes. ¡Esto me ayuda muchísimo a seguir creando!

- Instagram: `https://instagram.com/david_oh14`
- LinkedIn: `https://www.linkedin.com/in/esau-undefined-b9424137a`
- GitHub: `https://github.com/esadortiz`

## Estructura de carpetas
```text
.
├─ public/
│ ├─About.me.png
│ ├─Cv_Esau_Ortiz.pdf
│ ├─sonrisa-viva-preview.png
│ └─ aurealuxe-preview.png
├─ src/
│  ├─ app/
│ │ ├─ layout.tsx # Root layout (App Router)
│ │ ├─ page.tsx # Página principal
│ │ ├─ api/
│ │ │ └─ contacto/
│ │ │ └─ route.ts # API endpoint para formulario de contacto (Resend)
│ │ └─ globals.css # Estilos globales + animaciones
│  ├─ components/
│ │ ├─ header.tsx # Navegación fija con scroll spy
│ │ ├─ hero.tsx # Sección principal con animación de typing
│ │ ├─ about.tsx # Sección Acerca de Mí
│ │ ├─ projects.tsx # Proyectos con animación on-scroll
│ │ ├─ services.tsx # Servicios que ofreces
│ │ ├─ trajectory.tsx # Trayectoria profesional
│ │ ├─ contact.tsx # Formulario de contacto + info de contacto
│ │ ├─ footer.tsx # Footer con enlaces sociales
│  │  ├─ loading-screen.tsx# Pantalla de carga inicial
│  │  └─ page-wrapper.tsx  # Wrapper para gestión de carga/scroll
│  └─ types/
│     └─ css.d.ts         # Definiciones de tipos para CSS
├─ eslint.config.mjs
├─ next.config.js
├─ next-env.d.ts
├─ postcss.config.js
├─ postcss.config.mjs
├─ tailwind.config.js
├─ tsconfig.json
└─ package.json
```

## Notas
- Este proyecto usa Next.js (App Router), Tailwind CSS y componentes client/server mixtos.
- Las imágenes del `hero` y `about` deben existir en `public/`.
- El formulario de contacto envía correos vía Resend. Configura `RESEND_API_KEY` y `CONTACT_EMAIL` antes de usarlo.
- En desarrollo local con Resend, el `from` usa `onboarding@resend.dev`. Para producción, verifica tu dominio en Resend y actualiza el `from` en `src/app/api/contacto/route.ts`.

## Deploy (Vercel sugerido)
1. Importa el repo en Vercel.
2. Framework: Next.js (auto-detección).
3. Agrega las variables de entorno (`RESEND_API_KEY` y `CONTACT_EMAIL`) en el panel de Vercel → Settings → Environment Variables.
4. Deploy.



