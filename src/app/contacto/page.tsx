"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

export default function ContactoPage() {
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [recaptchaKey, setRecaptchaKey] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    if (!key) {
      console.error("ReCAPTCHA site key no encontrada")
      setSubmitMessage("Error: ReCAPTCHA no está configurado correctamente")
    } else {
      setRecaptchaKey(key)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    if (!recaptchaKey) {
      setSubmitMessage("Error: ReCAPTCHA no está configurado correctamente")
      setIsSubmitting(false)
      return
    }

    const captchaValue = recaptchaRef.current?.getValue()
    if (!captchaValue) {
      setSubmitMessage("Por favor, completa el reCAPTCHA")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, correo, mensaje, captchaValue }),
      })

      const data = await response.json()
      if (response.ok) {
        setSubmitMessage("Mensaje enviado correctamente")
        setNombre("")
        setCorreo("")
        setMensaje("")
        recaptchaRef.current?.reset()
      } else {
        setSubmitMessage("Error al enviar el mensaje: " + data.message)
      }
    } catch (error) {
      setSubmitMessage("Error al enviar el mensaje")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Navbar />

      <div className="flex-1 px-4 pt-20 pb-8">
        <div className="max-w-md mx-auto w-full">
          <div className="space-y-6 bg-gradient-to-b from-zinc-900 to-black p-6 rounded-xl">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-white">¿Hablamos?</h1>
              <p className="text-sm text-gray-400">Estamos para ti, cuéntanos tus dudas, ¡las resolveremos!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm text-gray-300 mb-1">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    className="w-full bg-black/50 border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="correo" className="block text-sm text-gray-300 mb-1">
                    Tu correo
                  </label>
                  <input
                    type="email"
                    id="correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                    className="w-full bg-black/50 border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm text-gray-300 mb-1">
                    Déjanos tu mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    required
                    className="w-full bg-black/50 border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>
              </div>

              {recaptchaKey && (
                <div className="flex justify-center">
                  <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaKey} theme="dark" />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !recaptchaKey}
                className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </form>

            {submitMessage && (
              <div className={`text-center ${submitMessage.includes("Error") ? "text-red-500" : "text-green-500"}`}>
                {submitMessage}
              </div>
            )}

            <div className="text-center">
              <p className="text-white">¡Encuéntranos!</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}