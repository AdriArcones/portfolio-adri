import "./Navbar.scss";
import CustomButton from "../../shared/components/custom-button/CustomButton";
import { House, ChartLine, Library, Wrench, Brain, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

// Componente que maneja los enlaces de navegación
const NavLinks = () => {
  // Estado para guardar qué sección está activa
  const [seccionActiva, setSeccionActiva] = useState("hero");

  // Lista de enlaces con sus iconos y rutas
  const enlaces = [
    { icono: <House />, id: "hero" },
    { icono: <ChartLine />, id: "timeline" },
    { icono: <Library />, id: "projects" },
    { icono: <Wrench />, id: "skills" },
    { icono: <Brain />, id: "soft-skills" },
    { icono: <Rocket />, id: "contact" },
  ];

  // Función que se ejecuta cuando el usuario hace scroll
  const detectarSeccionActiva = () => {
    // Calculamos la posición del scroll
    const posicionScroll = window.scrollY + window.innerHeight / 3;

    // Recorremos las secciones de abajo hacia arriba
    for (let i = enlaces.length - 1; i >= 0; i--) {
      const seccion = document.getElementById(enlaces[i].id);
      
      // Si encontramos una sección que está en la vista
      if (seccion && seccion.offsetTop <= posicionScroll) {
        setSeccionActiva(enlaces[i].id);
        break;
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
    // Añadimos el detector de scroll
    window.addEventListener("scroll", detectarSeccionActiva);
    
    // Comprobamos la sección inicial
    detectarSeccionActiva();

    // Limpiamos el detector cuando el componente se desmonta
    return () => window.removeEventListener("scroll", detectarSeccionActiva);
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
          
          {/* Botón con el icono */}
          <CustomButton
            variant="text"
            onClick={() => handleClick(enlace.id)}
            className={`navbar__link ${seccionActiva === enlace.id ? 'navbar__link--active' : ''}`}
          >
            {enlace.icono}
          </CustomButton>
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
