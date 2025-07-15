import "./Contact.scss";
import CustomSection from "../../shared/components/custom-section/CustomSection";
import CustomForm from "./CustomForm";
import LazyImage from "../../shared/components/lazy-image/LazyImage";
import contactImage from "../../assets/images/contact/contact.png";
export const Contact = () => {
  return (
    <CustomSection
      title="Contacta conmigo"
      subtitle="¿Te ha gustado mi historia? Estaré encantado de escuchar la tuya"
      id="contact"
    >
      <div className="contact">
        <div className="contact__image">
          <LazyImage src={contactImage} alt="Contact" priority={true} />
        </div>
        <CustomForm className="contact__form" />
      </div>
    </CustomSection>
  );
};
