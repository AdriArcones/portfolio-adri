import "./Timeline.scss";
import CustomSection from "../../shared/components/custom-section/CustomSection";
import CustomTimeline from "./CustomTimeline";
import { timelineData } from "../../data/timelineData";

export const Timeline = () => {
  return (
    <CustomSection
      title="Mi Experiencia"
      subtitle="Un viaje de aprendizaje y crecimiento en el desarrollo web"
      id="timeline"
      className="timeline__section"
    >
      <CustomTimeline data={timelineData} />
    </CustomSection>
  );
};
