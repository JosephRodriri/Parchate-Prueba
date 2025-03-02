"use client";
import { useState } from "react";
import Image from "next/image";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "@/app/images/67.png";
import img2 from "@/app/images/2.png";
import img3 from "@/app/images/3.png";
import img4 from "@/app/images/4.png";
import img5 from "@/app/images/5.png";

export default function ExploraPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const images = [img1, img2, img3, img4, img5];

  return (
    <main className="min-h-screen flex flex-col bg-pink-100">
      <Navbar />

      <div className="flex-1 px-4 pt-20 pb-8 max-w-md mx-auto w-full">
        <div className="space-y-6">
          {/* Encabezado */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Encuentra <br />
              tu <span className="cursive text-purple-600">Parche</span>
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Explora nuestra selección de actividades de esta semana
            </p>
          </div>

          {/* Barra de búsqueda */}
          <div className="relative">
            <input
              type="text"
              placeholder="Busca aquí..."
              className="w-full px-4 py-3 rounded-full bg-pink-50 border border-pink-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Controles de paginación */}
          <div className="flex justify-between items-center gap-2">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              aria-label="Página anterior"
              onClick={handlePrevPage}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-purple-600 text-white">
              {currentPage}
            </div>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              aria-label="Página siguiente"
              onClick={handleNextPage}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carrusel de actividades */}
          <div className="mt-6">
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              swipeable={false}
              showStatus={false} // Oculta el estatus (puntos de paso)
              showIndicators={false} // Oculta los indicadores (puntos de paso)
              showArrows={false}
              selectedItem={currentPage - 1}
              onChange={(index) => setCurrentPage(index + 1)}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`Actividad ${index + 1}`}
                    width={500}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Actividad {index + 1}
                    </h3>

                    <div className="mt-2 flex justify-between items-center">
                      <button className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700 transition-colors">
                        Reservar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
