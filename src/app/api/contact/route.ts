import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { nombre, correo, mensaje, captchaValue } = body

    // Verificar reCAPTCHA
    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaValue}`,
    })

    const recaptchaResult = await recaptchaResponse.json()

    if (!recaptchaResult.success) {
      return NextResponse.json({ message: "Verificación de reCAPTCHA fallida" }, { status: 400 })
    }

    // Configurar el transporte de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Enviar el correo
    await transporter.sendMail({
      from: '"Formulario de Contacto" <noreply@tudominio.com>',
      to: "DIGITAL@MARABUNTA.COM",
      subject: `Prueba Técnica Full Stack Parchate, ${nombre}`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`,
      html: `<p><strong>Nombre:</strong> ${nombre}</p>
             <p><strong>Correo:</strong> ${correo}</p>
             <p><strong>Mensaje:</strong> ${mensaje}</p>`,
    })

    return NextResponse.json({ message: "Mensaje enviado correctamente" }, { status: 200 })
  } catch (error) {
    console.error("Error al enviar el mensaje:", error)
    return NextResponse.json({ message: "Error al enviar el mensaje" }, { status: 500 })
  }
}

