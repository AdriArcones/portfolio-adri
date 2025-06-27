import "./Projects.scss";
import CustomSection from "../../shared/components/custom-section/CustomSection";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../../data/projectsData";

export const Projects = () => {
  return (
    <CustomSection
      title="Proyectos"
      subtitle="Mis desafíos y proyectos"
      id="projects"
    >
      <div className="projects__container">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </CustomSection>
  );
};
