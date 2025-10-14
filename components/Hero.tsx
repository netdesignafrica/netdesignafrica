'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Button } from "./ui/button"
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'
import Link from 'next/link'

const images = [
  '/african-tech-startup-office-modern-workspace.jpg',
  '/modern-office-team-collaboration-african-professio.jpg',
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [])
  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [nextImage])

  return (
  <section className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 overflow-hidden min-h-[60vh] md:min-h-[75vh] lg:min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={`Hero background ${currentImageIndex + 1}`}
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </motion.div>
      </AnimatePresence>
      
  <div className="absolute inset-0 bg-black/20 sm:bg-black/30" /> {/* overlay with reduced opacity on very small screens */}
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl sm:max-w-4xl mx-auto text-center px-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-balance leading-tight mt-6">
              Transforming Ideas into <span className="text-primary">Digital Excellence</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto text-pretty leading-relaxed mt-4">
              We design and develop exceptional websites and custom software solutions for businesses, institutions, and
              individuals across Africa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <button
        onClick={prevImage}
        className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full z-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors hover:bg-white/30"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full z-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors hover:bg-white/30"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  )
}
