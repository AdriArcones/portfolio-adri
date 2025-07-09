import { useRef, useEffect, useState } from 'react'
import { useLenis } from 'lenis/react'
import './Skills.scss'
import CustomSection from '../../shared/components/custom-section/CustomSection'
import CustomTabs from '../../shared/components/custom-tabs/CustomTabs'
import { tabs } from '../../data/skillsData'
import { rafThrottle } from '../../shared/utils/throttle'

export const Skills = () => {
  const sectionRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const lenis = useLenis()

  // Función auxiliar para verificar si la sección está centrada en pantalla
  const isSectionCentered = (rect, windowHeight) => {
    return rect.top <= 0 && rect.bottom >= windowHeight
  }

  // Función auxiliar para calcular el progreso de scroll cuando la sección está centrada
  const calculateScrollProgress = (rect, windowHeight) => {
    const sectionHeight = rect.height
    const totalScroll = sectionHeight - windowHeight
    const scrolled = Math.abs(rect.top)
    return Math.max(0, Math.min(1, scrolled / totalScroll))
  }

  // Función auxiliar para determinar el progreso basado en la posición de la sección
  const getProgressBasedOnPosition = (rect, windowHeight) => {
    // Si la sección está centrada, calcular progreso dinámico
    if (isSectionCentered(rect, windowHeight)) {
      return calculateScrollProgress(rect, windowHeight)
    }
    
    // Si la sección está completamente fuera de vista por abajo, progreso máximo
    if (rect.bottom < 0) {
      return 1
    }
    
    // Si la sección está completamente fuera de vista por arriba, progreso mínimo
    if (rect.top > windowHeight) {
      return 0
    }
    
    // Si está parcialmente visible pero no centrada, mantener progreso actual
    return scrollProgress
  }

  useEffect(() => {
    if (!lenis || !sectionRef.current) return

    const updateScrollProgress = () => {
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      const newProgress = getProgressBasedOnPosition(rect, windowHeight)
      setScrollProgress(newProgress)
    }

    // Throttle del scroll listener para mejor rendimiento
    const throttledUpdate = rafThrottle(updateScrollProgress)
    
    const unsubscribe = lenis.on('scroll', throttledUpdate)
    updateScrollProgress()

    return () => {
      unsubscribe()
    }
  }, [lenis, scrollProgress])

  return (
    <div ref={sectionRef} className="skills-sticky-container">
      <CustomSection
        title="Habilidades"
        subtitle="Mis herramientas actuales y las que exploraré para darle vida a nuevos desafíos"
        id="skills"
        className="skills-section"
      >
        <CustomTabs 
          scrollProgress={scrollProgress}
          autoChange={true}
          tabs={tabs}
        />
      </CustomSection>
    </div>
  )
} 