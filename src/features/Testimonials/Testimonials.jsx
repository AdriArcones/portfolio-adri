import './Testimonials.scss'
import CustomSection from '../../shared/components/custom-section/CustomSection'
import TestimonialsCard from './TestimonialsCard'
import { testimonialsData } from '../../data/testimonialsData'
import { useState, useEffect, useRef } from 'react'

export const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false)
  const carouselRef = useRef(null)
  const [translateX, setTranslateX] = useState(0)

  // Duplicar testimonios para crear efecto infinito
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData]

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setTranslateX(prev => {
        // Calcular ancho basado en el tamaño de pantalla
        const isMobile = window.innerWidth <= 768
        const cardWidth = isMobile ? 280 : 300
        const gap = isMobile ? 32 : 24 // $spacing-lg : $spacing-md (2rem : 1.5rem)
        const totalCardWidth = cardWidth + gap
        const totalWidth = totalCardWidth * testimonialsData.length
        
        // Si llegamos al final del primer conjunto, reiniciar suavemente
        if (prev <= -totalWidth) {
          return 0
        }
        
        // Mover hacia la izquierda (velocidad configurable)
        return prev - 0.5
      })
    }, 6) // ~60fps para movimiento suave

    return () => clearInterval(interval)
  }, [isHovered, testimonialsData.length])

  return (
    <CustomSection
      title="Reviews"
      subtitle="Mi experiencia anterior con otros retos" 
      id="reviews"
      className="testimonials"
    >
      <div 
        className="testimonials-carousel-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          ref={carouselRef}
          className="testimonials-carousel"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: 'none'
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialsCard 
              key={`testimonial-${testimonial.id}-${index}`} 
              {...testimonial} 
            />
          ))}
        </div>
      </div>
    </CustomSection>
  )
} 