import CustomCard from "../../shared/components/custom-card/CustomCard";
import CustomAvatar from "../../shared/components/custom-avatar/CustomAvatar";
import CustomLink from "../../shared/components/custom-link/CustomLink";

const TestimonialsCard = ({ name, description, nickname, linkedin }) => {
  return (
    <CustomCard glass className="testimonials-card">
      <div className="testimonials-card__header">
        <CustomAvatar 
          name={name}
          size="medium"
          className="testimonials-card__avatar"
        />
        <div className="testimonials-card__header-info">
          <h1 className="testimonials-card__header-info-name">{name}</h1>
          <CustomLink to={`https://www.linkedin.com/in/${linkedin}`} external>@{nickname}</CustomLink>
        </div>
      </div>

      <div className="testimonials-card__content">
        <p>{description}</p>
      </div>
    </CustomCard>
  );
};

export default TestimonialsCard;
