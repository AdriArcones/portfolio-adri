import "./Hero.scss";
import CustomSection from "../../shared/components/custom-section/CustomSection";
import heroImage from "../../assets/images/hero/hero-image2.png";
import { ArrowDownToLine, CheckCheck, Quote } from "lucide-react";
import CustomButton from "../../shared/components/custom-button/CustomButton";
import CustomCard from "../../shared/components/custom-card/CustomCard";
import CustomLink from "../../shared/components/custom-link/CustomLink";
import quote from "../../assets/images/hero/quote.svg";


export const Hero = () => {
  return (
    <CustomSection id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__title-container">
            <p className="hero__subtitle">
              <CheckCheck className="hero__subtitle-icon" />
              Desarrollador Frontend
            </p>
            <h1 className="hero__title">
              Hola, soy{" "}
              <span className="hero__title--emphasis">Adrián Arcones</span>
            </h1>
          </div>

          <div className="hero__description-container">
            <p className="hero__description">
              En este mundo digital que <strong>evoluciona</strong>{" "}
              constantemente, he aprendido que lo importante no es tener todas
              las <strong>respuestas</strong>, sino la{" "}
              <strong>capacidad</strong> de encontrarlas.
            </p>

            <p className="hero__description">
              Dame un reto, un <strong>objetivo</strong> y algo de tiempo. Lo
              demás, lo <strong>averiguo.</strong>
            </p>
          </div>

          <div className="hero__buttons">
          <CustomButton
              onClick={() => {
                window.location.href = "#contact";
              }}
              variant="outline"
              className="hero__button"
            >
              ¿Hablamos?
            </CustomButton>

          </div>
        </div>

        <div className="hero__image">
          <img src={heroImage} alt="Hero" />
          <CustomCard glass className="hero__card">
            <div className="hero__card-quote-container">
              <img src={quote} alt="Quote" className="hero__card-quote" />
            </div>
            <p className="hero__card-text">
              “La gente olvidará lo que dijiste, olvidará lo que hiciste, pero
              nunca olvidará cómo la hiciste sentir.”
            </p>
            <strong className="hero__card-author">Maya Angelou</strong>
          </CustomCard>
        </div>
      </div>
    </CustomSection>
  );
};
