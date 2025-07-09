import "./Navbar.scss";
import CustomButton from "../../shared/components/custom-button/CustomButton";
import CustomTooltip from "../../shared/components/custom-tooltip/CustomTooltip";
import { House, ChartLine, Library, Wrench, MessageSquareQuote, Contact } from "lucide-react";
import { useEffect, useState } from "react";
import { navbarData } from "../../data/navbarData";
import { rafThrottle } from "../../shared/utils/throttle";

// Componente que maneja los enlaces de navegación
const NavLinks = () => {
  // Estado para guardar qué sección está activa
  const [seccionActiva, setSeccionActiva] = useState("hero");

  // Mapeo de nombres de iconos a componentes
  const iconMap = {
    House: <House />,
    ChartLine: <ChartLine />,
    Library: <Library />,
    Wrench: <Wrench />,
    MessageSquareQuote: <MessageSquareQuote />,
    Contact: <Contact />
  };

  // Lista de enlaces extraída de los datos mockeados
  const enlaces = navbarData.enlaces;

  // Función que se ejecuta cuando el usuario hace scroll
  const detectarSeccionActiva = () => {
    const windowHeight = window.innerHeight;
    const threshold = windowHeight * 0.3; // 30% del viewport

    // Recorremos las secciones de abajo hacia arriba
    for (let i = enlaces.length - 1; i >= 0; i--) {
      const seccion = document.getElementById(enlaces[i].id);
      
      if (seccion) {
        const rect = seccion.getBoundingClientRect();
        
        // Para la sección Skills, solo considerar cuando está centrada
        if (enlaces[i].id === "skills") {
          // Skills solo está activa cuando está centrada (top <= 0 y bottom >= windowHeight)
          if (rect.top <= 0 && rect.bottom >= windowHeight) {
            setSeccionActiva(enlaces[i].id);
            break;
          }
        } else {
          // Para otras secciones, usar la lógica normal
          if (rect.top <= threshold && rect.bottom >= threshold) {
            setSeccionActiva(enlaces[i].id);
            break;
          }
        }
      }
    }
  };

  // Función para manejar el click en un enlace
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Configuramos el detector de scroll cuando el componente se monta
  useEffect(() => {
    // Throttle del detector de scroll para mejor rendimiento
    const throttledDetector = rafThrottle(detectarSeccionActiva);
    
    // Añadimos el detector de scroll
    window.addEventListener("scroll", throttledDetector);
    
    // Comprobamos la sección inicial
    detectarSeccionActiva();

    // Limpiamos el detector cuando el componente se desmonta
    return () => window.removeEventListener("scroll", throttledDetector);
  }, []);

  return (
    <>
      {enlaces.map((enlace) => (
        <div key={enlace.id} className="navbar__link-container">
          {/* Indicador que se muestra detrás del icono activo */}
          <div 
            className={`navbar__indicator ${
              seccionActiva === enlace.id ? 'active' : ''
            }`} 
          />
          
          {/* Botón con tooltip */}
          <CustomTooltip text={enlace.nombre} position="top">
            <CustomButton
              variant="text"
              onClick={() => handleClick(enlace.id)}
              className={`navbar__link ${seccionActiva === enlace.id ? 'navbar__link--active' : ''}`}
            >
              {iconMap[enlace.icono]}
            </CustomButton>
          </CustomTooltip>
        </div>
      ))}
    </>
  );
};

// Componente principal de la barra de navegación
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <NavLinks />
      </div>
    </nav>
  );
};
