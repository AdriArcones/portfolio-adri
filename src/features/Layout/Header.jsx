import React, { useState, useEffect } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo-blanco.svg";
import CustomButton from "../../shared/components/custom-button/CustomButton";
import { ArrowRight } from "lucide-react";
import CustomLink from "../../shared/components/custom-link/CustomLink";
import { Github, Instagram, Linkedin } from "lucide-react";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mostrar header si estamos en la parte superior o scrolleando hacia arriba
      if (currentScrollY <= 0 || currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? 'header--visible' : 'header--hidden'}`}>
      <div className="header__content">
        <div className="header__logo">
          <img src={logo} alt="Logo" className="header__logo-image" />
          <p className="header__logo-text"><span>A</span>dri <span>A</span>rcones</p>
        </div>

        <nav className="header__nav">
            <CustomLink variant="secondary" to="https://www.linkedin.com/in/adrianarcones/" external><Linkedin /></CustomLink>
            <CustomLink variant="secondary" to="https://github.com/AdriArcones" external><Github /></CustomLink>
            <CustomLink variant="secondary" to="https://www.instagram.com/adri_arcones/" external><Instagram /></CustomLink>
        </nav>

        <div className="header__cta">
          <CustomButton size="small" variant="outline" rightIcon={<ArrowRight />}>
            Contactame
          </CustomButton>
        </div>
      </div>
    </header>
  );
};
