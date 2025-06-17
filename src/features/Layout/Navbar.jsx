import "./Navbar.scss";
import CustomLink from "../../shared/components/custom-link/CustomLink";
import { House, ChartLine, Library, Wrench, Brain, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

// Componente que maneja los enlaces de navegación
const NavLinks = () => {
  // Estado para guardar qué sección está activa
  const [seccionActiva, setSeccionActiva] = useState("hero");

  // Lista de enlaces con sus iconos y rutas
  const enlaces = [
    { icono: <House />, ruta: "/#hero", id: "hero" },
    { icono: <ChartLine />, ruta: "/#timeline", id: "timeline" },
    { icono: <Library />, ruta: "/#projects", id: "projects" },
    { icono: <Wrench />, ruta: "/#skills", id: "skills" },
    { icono: <Brain />, ruta: "/#soft-skills", id: "soft-skills" },
    { icono: <Rocket />, ruta: "/#contact", id: "contact" },
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
          
          {/* Enlace con el icono */}
          <CustomLink
            to={enlace.ruta}
            variant={seccionActiva === enlace.id ? 'primary' : 'secondary'}
            className="navbar__link"
          >
            {enlace.icono}
          </CustomLink>
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
