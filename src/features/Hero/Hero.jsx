import "./Hero.scss";
import CustomSection from "../../shared/components/custom-section/CustomSection";
import LazyImage from "../../shared/components/lazy-image/LazyImage";
import heroImage from "../../assets/images/hero/hero-image2.png";
import { CheckCheck } from "lucide-react";
import CustomButton from "../../shared/components/custom-button/CustomButton";
import CustomCard from "../../shared/components/custom-card/CustomCard";
import quote from "../../assets/images/hero/quote.svg";
import { heroData } from "../../data/heroData";

export const Hero = () => {
  return (
    <CustomSection id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__title-container">
            <p className="hero__subtitle">
              <CheckCheck className="hero__subtitle-icon" />
              {heroData.subtitle.text}
            </p>
            <h1 className="hero__title">
              {heroData.title.greeting}{" "}
              <span className="hero__title--emphasis">{heroData.title.name}</span>
            </h1>
          </div>

          <div className="hero__description-container">
            {heroData.descriptions.map((description, index) => (
              <p 
                key={index} 
                className="hero__description"
                dangerouslySetInnerHTML={{ __html: description.text }}
              />
            ))}
          </div>

          <div className="hero__buttons">
            {heroData.buttons.map((button, index) => (
              <CustomButton
                key={index}
                onClick={button.action}
                variant={button.variant}
                className="hero__button"
              >
                {button.text}
              </CustomButton>
            ))}
          </div>
        </div>

        <div className="hero__image">
          <LazyImage 
            src={heroImage} 
            alt="Hero" 
            priority={true}
            style={{ width: '100%', height: '750px' }}
          />
          <CustomCard glass className="hero__card">
            <div className="hero__card-quote-container">
              <img src={quote} alt="Quote" className="hero__card-quote" />
            </div>
            <p className="hero__card-text">
              "{heroData.card.quote}"
            </p>
            <strong className="hero__card-author">{heroData.card.author}</strong>
          </CustomCard>
        </div>
      </div>
    </CustomSection>
  );
};
