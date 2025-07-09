import "./Timeline.scss";
import CustomSection from "../../shared/components/custom-section/CustomSection";
import CustomTimeline from "./CustomTimeline";
import { timelineData } from "../../data/timelineData";

export const Timeline = () => {
  return (
    <CustomSection
      title="Mi Experiencia"
      subtitle="El camino se hace al andar (y a veces, corriendo)"
      id="timeline"
      className="timeline__section"
    >
      <CustomTimeline data={timelineData} />
    </CustomSection>
  );
};
