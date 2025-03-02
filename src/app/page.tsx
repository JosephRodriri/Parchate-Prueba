"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, useSpring, cubicBezier } from "framer-motion"
import { useRef } from "react"
import { HandHeart, HandHelping, PersonStanding } from "lucide-react"
import Footer from "@/app/components/footer"

import img1 from "@/app/images/1.png"
import img2 from "@/app/images/2.png"
import img3 from "@/app/images/3.png"
import img4 from "@/app/images/4.png"
import img5 from "@/app/images/5.png"
import Navbar from "./components/navbar"

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  // Crear diferentes animaciones para cada imagen
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500], {
      ease: cubicBezier(0.42, 0, 0.58, 1),
    }),
    { stiffness: 10, damping: 20 },
  )

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, 400], {
      ease: cubicBezier(0.42, 0, 0.58, 1),
    }),
    { stiffness: 15, damping: 25 },
  )

  const y3 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, 450], {
      ease: cubicBezier(0.42, 0, 0.58, 1),
    }),
    { stiffness: 12, damping: 22 },
  )

  const y4 = useSpring(
    useTransform(scrollYProgress, [0, 1], [-50, 350], {
      ease: cubicBezier(0.42, 0, 0.58, 1),
    }),
    { stiffness: 8, damping: 18 },
  )
  
  
  const y5 = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, 550], {
      ease: cubicBezier(0.42, 0, 0.58, 1),
    }),
    { stiffness: 14, damping: 24 },
  )
  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

  return (
    <main className="min-h-screen flex flex-col relative bg-transparent">
      <Navbar/>
      <div className="fixed inset-0 bg-black -z-20" />

      {/* Hero Section con imágenes flotantes */}
      <div className="relative min-h-screen">
        {/* Imágenes que se mueven con scroll */}
        <div className="fixed inset-0 w-full h-full overflow-hidden">
          {/* Imagen 1 */}
          <motion.div
            className="absolute"
            style={{
              y: y1, opacity: opacity,
              x: "-40%",
              top: "9%",
            }}
          >
            <Image
              src={img1 || "/placeholder.svg"}
              alt="Imagen principal"
              width={300}
              height={300}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Imagen 2 */}
          <motion.div
            className="absolute"
            style={{
              y: y2,opacity: opacity,
              x: "90%",
              top: "20%",
            }}
          >
            <Image
              src={img2 || "/placeholder.svg"}
              alt="Segunda imagen"
              width={200}
              height={200}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Imagen 3 */}
          <motion.div
            className="absolute"
            style={{
              y: y3,opacity: opacity,
              x: "80%",
              top: "20%",
            }}
          >
            <Image
              src={img3 || "/placeholder.svg"}
              alt="Tercera imagen"
              width={260}
              height={300}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Imagen 4 */}
          <motion.div
            className="absolute"
            style={{
              y: y4,opacity: opacity,
              x: "-20%",
              top: "60%",
            }}
          >
            <Image
              src={img4 || "/placeholder.svg"}
              alt="Cuarta imagen"
              width={300}
              height={300}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Imagen 5 */}
          <motion.div
            className="absolute"
            style={{
              y: y5,opacity: opacity,
              x: "40%",
              top: "50%",
            }}
          >
            <Image
              src={img5 || "/placeholder.svg"}
              alt="Quinta imagen"
              width={300}
              height={300}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
        {/* Contenido del hero centrado */}
        <motion.section
          ref={containerRef}
          className="relative flex items-center justify-center min-h-screen bg-transparent py-16 z-10"
        >
          <motion.div
            style={{ scale }}
            className="relative z-10 text-center space-y-6 px-4 max-w-md mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-light text-white">
              En la vida, <br />
              hay que
            </h1>
            <p className="text-5xl md:text-6xl cursive text-purple-400">
              Parcharse
            </p>
            <p className="text-sm text-gray-300 max-w-md mx-auto mt-6">
              Somos Parchate, y curamos eventos para que tu vida y la de tus
              seres amados, sean un parche
            </p>
          </motion.div>
        </motion.section>
      </div>

      {/* Features Section */}
      <section className="bg-transparent  relative py-16 px-4 z-10">
        <div className=" bg-transparent max-w-md mx-auto space-y-8">
          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-6 rounded-lg border border-purple-500/20 backdrop-blur-sm bg-transparent"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                <HandHeart className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-white text-center text-lg mb-2">
              Eventos seleccionados con amor
              </h3>
              <p className="text-gray-300 text-center text-sm">
              Encontramos eventos que resuenen contigo              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative p-6 rounded-lg border border-purple-500/20 backdrop-blur-sm bg-transparent"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                <HandHelping className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-white text-center text-lg mb-2">
              Para todos los gustos e intereses              </h3>
              <p className="text-gray-300 text-center text-sm">
              Desde rumbas épicas hasta tardeaditas tranquilas              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative p-6 rounded-lg border border-purple-500/20 backdrop-blur-sm bg-black/30"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                <PersonStanding className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-white text-center text-lg mb-2">
              Piensa, explora, ¡arma parche!              </h3>
              <p className="text-gray-300 text-center text-sm">
              Todo en un solo lugar, diseñado para tu comodidad              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative py-16 px-4 z-10">
        <div className="max-w-md mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl text-white font-light">
            ¡Explora todo lo que tenemos para ti!
          </h2>
          <button className="px-8 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-lg">
            ¡Descubre!
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
