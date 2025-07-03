import './Testimonials.scss'
import CustomSection from '../../shared/components/custom-section/CustomSection'
import TestimonialsCard from './testimonialsCard'
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'

export const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false)

  // Duplicar los testimonios múltiples veces para crear un verdadero efecto infinito
  const duplicatedTestimonials = [
    ...testimonialsData, 
    ...testimonialsData, 
    ...testimonialsData, 
    ...testimonialsData
  ]

  return (
    <CustomSection
      title="Reviews"
      subtitle="Desarrollador Full Stack" 
      id="reviews"
    >
      <div 
        className="testimonials-carousel-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`testimonials-carousel ${isHovered ? 'paused' : ''}`}
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