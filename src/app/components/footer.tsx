import Link from "next/link"
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#FFD700] text-black py-6 px-4">
      <div className="max-w-xs mx-auto">
        <h2 className="text-3xl font-bold cursive mb-6 underline">Parchate</h2>

        <nav className="space-y-2 text-sm">
          <Link href="/nosotros" className="block hover:opacity-75 transition-opacity">
            Nosotros
          </Link>
          <Link href="/explora" className="block hover:opacity-75 transition-opacity">
            Explora
          </Link>
          <Link href="/contacto" className="block hover:opacity-75 transition-opacity">
            Contacto
          </Link>
          <Link href="/terminos" className="block hover:opacity-75 transition-opacity">
            Términos de Uso
          </Link>
          <Link href="/privacidad" className="block hover:opacity-75 transition-opacity">
            Privacidad y Datos
          </Link>
          <Link href="/cookies" className="block hover:opacity-75 transition-opacity">
            Uso de Cookies
          </Link>
          <Link href="/mapa-sitio" className="block hover:opacity-75 transition-opacity">
            Mapa del Sitio
          </Link>
        </nav>

        <div className="mt-6 space-y-2">
          <a
            href="https://goo.gl/maps/your-location"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-75 transition-opacity"
          >
            <MapPin className="h-5 w-5 mr-2" />
            <span>Nuestra ubicación</span>
          </a>
          <a href="tel:+573001234567" className="flex items-center hover:opacity-75 transition-opacity">
            <Phone className="h-5 w-5 mr-2" />
            <span>+57 300 123 4567</span>
          </a>
          <a href="mailto:info@marabunta.co" className="flex items-center hover:opacity-75 transition-opacity">
            <Mail className="h-5 w-5 mr-2" />
            <span>info@marabunta.co</span>
          </a>
        </div>

        <div className="flex space-x-4 mt-6">
          <a
            href="https://instagram.com/parchate"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            aria-label="Síguenos en Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://facebook.com/parchate"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            aria-label="Síguenos en Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

