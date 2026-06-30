import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const ALLOWED_ORIGINS = [
  "https://david-ortiz.dev",
  "https://www.david-ortiz.dev",
  "http://localhost:3000",
];

const MAX_BODY_SIZE = 100_000;

const SERVICIOS_VALIDOS = [
  "Página web para negocios",
  "Landing page",
  "Formularios y contacto",
  "Diseño responsive",
  "SEO básico",
  "Asistente o chatbot",
  "Otro",
];

const TELEFONO_REGEX = /^[+]?[\d\s()-]{7,20}$/;

const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function htmlEscape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "127.0.0.1";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) return false;

  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: "Origen no autorizado." }, { status: 403 });
  }

  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta de nuevo más tarde." },
      { status: 429 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Error de configuración del servidor." },
      { status: 500 }
    );
  }

  let text: string;
  try {
    text = await request.text();
  } catch {
    return NextResponse.json(
      { error: "No se pudo procesar la solicitud." },
      { status: 400 }
    );
  }

  if (text.length > MAX_BODY_SIZE) {
    return NextResponse.json(
      { error: "El mensaje es demasiado grande." },
      { status: 413 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(text);
  } catch {
    return NextResponse.json(
      { error: "Formato de solicitud inválido." },
      { status: 400 }
    );
  }

  const { nombre, email, telefono, servicio, mensaje, autorizacionDatos, comunicaciones, _hp } = body;

  if (_hp && typeof _hp === "string" && _hp.trim().length > 0) {
    return NextResponse.json(
      { message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  }

  if (!nombre || typeof nombre !== "string" || nombre.trim().length === 0) {
    return NextResponse.json(
      { error: "El nombre es obligatorio." },
      { status: 400 }
    );
  }

  if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
    return NextResponse.json(
      { error: "Ingresa un correo electrónico válido." },
      { status: 400 }
    );
  }

  if (!mensaje || typeof mensaje !== "string" || mensaje.trim().length === 0) {
    return NextResponse.json(
      { error: "El mensaje es obligatorio." },
      { status: 400 }
    );
  }

  if (telefono && typeof telefono === "string" && telefono.trim().length > 0 && !TELEFONO_REGEX.test(telefono.trim())) {
    return NextResponse.json(
      { error: "Ingresa un número de teléfono válido." },
      { status: 400 }
    );
  }

  if (servicio && typeof servicio === "string" && servicio.trim().length > 0 && !SERVICIOS_VALIDOS.includes(servicio.trim())) {
    return NextResponse.json(
      { error: "Selecciona un servicio válido." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);
  try {
    const contactEmail = process.env.CONTACT_EMAIL;
    if (!contactEmail) {
      return NextResponse.json(
        { error: "Error de configuración del servidor." },
        { status: 500 }
      );
    }

    const fecha = new Date().toLocaleString("es-CO", {
      timeZone: "America/Bogota",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const safeNombre = htmlEscape(nombre.trim());
    const safeEmail = htmlEscape(email.trim());
    const safeTelefono = htmlEscape(typeof telefono === "string" && telefono ? telefono.trim() : "");
    const safeServicio = htmlEscape(typeof servicio === "string" && servicio ? servicio.trim() : "");
    const safeMensaje = htmlEscape(mensaje.trim());

    const telefonoRow = safeTelefono
      ? `<tr>
           <td style="padding:10px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:140px;">Teléfono</td>
           <td style="padding:10px 16px;color:#4b5563;border-bottom:1px solid #e5e7eb;">${safeTelefono}</td>
         </tr>`
      : "";

    const servicioRow = safeServicio
      ? `<tr>
           <td style="padding:10px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:140px;">Servicio de interés</td>
           <td style="padding:10px 16px;color:#4b5563;border-bottom:1px solid #e5e7eb;">${safeServicio}</td>
         </tr>`
      : "";

    const autorizacionRow = `
                <tr>
                  <td style="padding:10px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:140px;">Autorización de datos</td>
                  <td style="padding:10px 16px;color:#4b5563;border-bottom:1px solid #e5e7eb;">${autorizacionDatos ? "Sí" : "No"}</td>
                </tr>`;

    const comunicacionesRow = `
                <tr>
                  <td style="padding:10px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:140px;">Comunicaciones comerciales</td>
                  <td style="padding:10px 16px;color:#4b5563;border-bottom:1px solid #e5e7eb;">${comunicaciones ? "Sí" : "No"}</td>
                </tr>`;

    const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nuevo mensaje desde tu portafolio</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f3f4f6;padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1),0 1px 2px rgba(0,0,0,0.06);">
          <tr>
            <td style="background:linear-gradient(135deg,#111827 0%,#374151 100%);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.02em;">Nuevo mensaje desde tu portafolio</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:10px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:140px;">Nombre</td>
                  <td style="padding:10px 16px;color:#4b5563;border-bottom:1px solid #e5e7eb;">${safeNombre}</td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:140px;">Email</td>
                  <td style="padding:10px 16px;color:#4b5563;border-bottom:1px solid #e5e7eb;"><a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">${safeEmail}</a></td>
                </tr>
                ${telefonoRow}
                ${servicioRow}
                <tr>
                  <td style="padding:10px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:140px;">Mensaje</td>
                  <td style="padding:10px 16px;color:#4b5563;border-bottom:1px solid #e5e7eb;white-space:pre-wrap;">${safeMensaje}</td>
                </tr>
                ${autorizacionRow}
                ${comunicacionesRow}
                <tr>
                  <td style="padding:10px 16px;font-weight:600;color:#374151;width:140px;">Fecha</td>
                  <td style="padding:10px 16px;color:#4b5563;">${fecha}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 24px 24px;text-align:center;">
              <p style="margin:0;font-size:13px;color:#9ca3af;">Este mensaje fue enviado desde el formulario de contacto de tu portafolio web.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const { error } = await resend.emails.send({
      from: "Portafolio Web <onboarding@resend.dev>",
      to: [contactEmail],
      subject: "Nuevo mensaje desde tu portafolio web",
      html,
    });

    if (error) {
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje en este momento." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje en este momento." },
      { status: 500 }
    );
  }
}
