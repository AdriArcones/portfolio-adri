import CustomCard from "../../shared/components/custom-card/CustomCard";
import CustomChip from "../../shared/components/custom-chip/CustomChip";
import CustomButton from "../../shared/components/custom-button/CustomButton";
import LazyImage from "../../shared/components/lazy-image/LazyImage";
import PhotoGallery from "../../shared/components/photo-gallery/PhotoGallery";
import { Github, ChevronRight } from "lucide-react";

export const ProjectCard = ({
  title,
  description,
  image,
  images,
  link,
  github,
  tags,
}) => {
  return (
    <CustomCard glass glow className="project-card__content">
      <div className="project-card__image-container">
        {images && images.length > 1 ? (
          <PhotoGallery 
            images={images} 
            title={title}
            className="project-card__gallery"
          />
        ) : (
          <LazyImage 
            src={image} 
            alt={title} 
            className="project-card__image inline"
          />
        )}
      </div>

      <div className="project-card__content-container">
        <div className="project-card__title-container">
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__description">{description}</p>
        </div>

        <div className="project-card__buttons">
          <CustomButton
            variant="primary"
            rightIcon={<ChevronRight />}
            onClick={() => {
              window.open(link, "_blank");
            }}
          >
            <span>Ver proyecto</span>
          </CustomButton>

          <CustomButton
            variant="outline"
            onClick={() => {
              window.open(github, "_blank");
            }}
          >
            <Github />
          </CustomButton>
        </div>

        <div className="project-card__tags">
          {tags.map((tag) => (
            <CustomChip key={tag} label={tag} color="secondary" size="sm" />
          ))}
        </div>
      </div>
    </CustomCard>
  );
};
