// Pequeños Navegantes
import PequenosNavegantesDesktop from "../assets/images/projects/pequenos-navegantes/pequenos-navegantes-desktop.png";
import PequenosNavegantesMovil from "../assets/images/projects/pequenos-navegantes/pequenos-navegantes-mobile.png";

// NightLy
import NightlyDesktop from "../assets/images/projects/nightly/nightly-desktop.png";
import NightlyMovil from "../assets/images/projects/nightly/nightly-mobile.png";

export const projectsData = [
  {
    title: "Pequeños Navegantes",
    description: "Una página web para una empresa de campamentos. La web permite reservar al usuario según sus necesidades y a los monitores y administradores gestionar los datos.",
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
  {
    title: "NightLy",
    description: "Una aplicación web para encontrar planes de ocio nocturno personalizados. La aplicación incluye numerosos filtros para encontrar el plan perfecto y hacer reservas.",
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
    tags: ["React", "Sass"]
  },

]; 