import './Testimonials.scss'
import CustomSection from '../../shared/components/custom-section/CustomSection'
import TestimonialsCard from './TestimonialsCard'
import { testimonialsData } from '../../data/testimonialsData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useRef } from 'react'

// Importar estilos de Swiper
import 'swiper/css'

export const Testimonials = () => {
  const swiperRef = useRef(null)

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop()
    }
  }

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start()
    }
  }
  return (
    <CustomSection
      title="Comentarios"
      subtitle="Detrás de cada línea de código, hay personas, ideas y café compartido." 
      id="reviews"
      className="testimonials"
    >
      <div 
        className="testimonials-carousel-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          speed={3000}
          allowTouchMove={false}
          freeMode={true}
          freeModeMomentum={false}
          className="testimonials-carousel"
          breakpoints={{
            320: {
              spaceBetween: 32,
            },
            768: {
              spaceBetween: 24,
            },
          }}
        >
          {/* Renderizar los testimonios varias veces para mayor fluidez */}
          {[...Array(3)].map((_, groupIndex) => (
            testimonialsData.map((testimonial, index) => (
              <SwiperSlide 
                key={`testimonial-${testimonial.id}-${groupIndex}-${index}`}
                className="testimonials-slide"
              >
                <TestimonialsCard {...testimonial} />
              </SwiperSlide>
            ))
          ))}
        </Swiper>
      </div>
    </CustomSection>
  )
} 