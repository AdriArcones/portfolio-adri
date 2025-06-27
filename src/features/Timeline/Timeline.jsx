import "./Timeline.scss";
import CustomSection from "../../shared/components/custom-section/CustomSection";
import CustomTimeline from "./CustomTimeline";
import CustomLink from "../../shared/components/custom-link/CustomLink";
import { timelineData } from "../../data/timelineData";

// Función para procesar el contenido del timeline
const processTimelineContent = (yearData) => {
  return yearData.content.map((contentItem, index) => (
    <div key={index} className="timeline__content">
      <p 
        className="timeline__text"
        dangerouslySetInnerHTML={{ __html: contentItem.text }}
      />
      <div className="timeline__image-container">
        {contentItem.images.map((image, imgIndex) => (
          <img key={imgIndex} src={image} alt={`Timeline ${yearData.title}`} />
        ))}
      </div>
      {contentItem.link && (
        <CustomLink external to={contentItem.link.url}>
          {contentItem.link.text}
        </CustomLink>
      )}
    </div>
  ));
};

// Transformar los datos para el formato esperado por CustomTimeline
const transformedTimelineData = timelineData.map(yearData => ({
  title: yearData.title,
  content: (
    <div className="timeline__content-year">
      {processTimelineContent(yearData)}
    </div>
  )
}));

export const Timeline = () => {
  return (
    <CustomSection
      title="Timeline"
      subtitle="Mi viaje como desarrollador web"
      id="timeline"
      className="timeline__section"
    >
      <CustomTimeline data={transformedTimelineData} />
    </CustomSection>
  );
};
