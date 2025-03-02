import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "@/app/images/logo.png"; // Asegúrate de que la ruta sea correcta

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar fijo */}
      <nav className="fixed top-10 left-10 right-10 z-50 bg-white rounded-2xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 " >
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                {/* Accede a la propiedad src del objeto logo */}
                <img src={logo.src} alt="Logo" className="h-8" />
              </Link>
            </div>
            <div className="flex">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-start pt-16">
          <div className="bg-white rounded-md shadow-lg w-full max-w-md mx-4 overflow-hidden">
            <div className="px-4 py-3">
              <div className="flex justify-between items-center mb-6">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* Accede a la propiedad src del objeto logo */}
                  <img src={logo.src} alt="Logo" className="h-8" />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                  aria-label="Cerrar menú"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-4">
                <Link
                  href="/"
                  className="block text-gray-800 hover:text-gray-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  href="/explora"
                  className="block text-gray-800 hover:text-gray-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Explora
                </Link>
                <Link
                  href="/contacto"
                  className="block text-gray-800 hover:text-gray-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Espaciador para compensar el navbar fijo */}
      <div className="h-16" />
      {/* Aqui iria el contenido principal de tu pagina */}
    </>
  );
}