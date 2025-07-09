import "./Projects.scss";
import { useState } from "react";
import CustomSection from "../../shared/components/custom-section/CustomSection";
import CustomButton from "../../shared/components/custom-button/CustomButton";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../../data/projectsData";

export const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const projectsToShow = projectsData.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < projectsData.length;
  const isExpanded = visibleProjects > 3;

  const handleToggleProjects = () => {
    if (isExpanded) {
      // Contraer de vuelta a 3 proyectos
      setVisibleProjects(3);
    } else {
      // Expandir 6 proyectos más
      setVisibleProjects(prev => Math.min(prev + 6, projectsData.length));
    }
  };

  return (
    <CustomSection
      title="Proyectos"
      subtitle="Ideas que dejaron de ser código para convertirse en historias"
      id="projects"
    >
      <div className="projects__container">
        {projectsToShow.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      
      {(hasMoreProjects || isExpanded) && (
        <div className="projects__show-more">
          <CustomButton
            variant="outline"
            size="large"
            onClick={handleToggleProjects}
          >
            {isExpanded ? "Ver menos" : "Ver más proyectos"}
          </CustomButton>
        </div>
      )}
    </CustomSection>
  );
};
