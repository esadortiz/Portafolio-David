import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Error de configuración del servidor." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  try {
    const body = await request.json();
    const { nombre, email, telefono, servicio, mensaje } = body;

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

    const telefonoRow = telefono
      ? `<tr>
           <td style="padding:10px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:140px;">Teléfono</td>
           <td style="padding:10px 16px;color:#4b5563;border-bottom:1px solid #e5e7eb;">${telefono}</td>
         </tr>`
      : "";

    const servicioRow = servicio
      ? `<tr>
           <td style="padding:10px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:140px;">Servicio de interés</td>
           <td style="padding:10px 16px;color:#4b5563;border-bottom:1px solid #e5e7eb;">${servicio}</td>
         </tr>`
      : "";

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
                  <td style="padding:10px 16px;color:#4b5563;border-bottom:1px solid #e5e7eb;">${nombre}</td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:140px;">Email</td>
                  <td style="padding:10px 16px;color:#4b5563;border-bottom:1px solid #e5e7eb;"><a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a></td>
                </tr>
                ${telefonoRow}
                ${servicioRow}
                <tr>
                  <td style="padding:10px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:140px;">Mensaje</td>
                  <td style="padding:10px 16px;color:#4b5563;border-bottom:1px solid #e5e7eb;white-space:pre-wrap;">${mensaje}</td>
                </tr>
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
