// Pequeños Navegantes
import PequenosNavegantesDesktop from "../assets/images/projects/pequenos-navegantes/pequenos-navegantes-desktop.png";
import PequenosNavegantesMovil from "../assets/images/projects/pequenos-navegantes/pequenos-navegantes-mobile.png";

// NightLy
import NightlyDesktop from "../assets/images/projects/nightly/nightly-desktop.png";
import NightlyMovil from "../assets/images/projects/nightly/nightly-mobile.png";

export const projectsData = [
  {
    title: "NightLy",
    description: "Plataforma de eventos nocturnos con sistema completo: búsqueda avanzada, filtrado personalizado, reservas, favoritos y notificaciones via correo.",
    image: NightlyDesktop,
    images: [
      {
        src: NightlyDesktop,
        label: "Vista Desktop"
      },
      {
        src: NightlyMovil,
        label: "Vista Móvil"
      }
    ],
    link: "https://nightly.it.com/",
    github: "https://github.com/Astaarr/Nightly",
    tags: ["React", "Sass", "Node JS"]
  },
  {
    title: "Pequeños Navegantes",
    description: "Gestión integral de campamentos urbanos: reservas flexibles, paneles administrativos para padres, monitores y admin, y control de actividades y grupos.",
    image: PequenosNavegantesDesktop,
    images: [
      {
        src: PequenosNavegantesDesktop,
        label: "Vista Desktop"
      },
      {
        src: PequenosNavegantesMovil,
        label: "Vista Móvil"
      }
    ],
    link: "https://www.google.com",
    github: "https://github.com/Astaarr/PequenosNavegantes",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  

]; 