import React, { useState, useEffect } from "react";
import "./Header.scss";
import logo from "../../assets/images/header/logo-blanco.svg";
import CustomButton from "../../shared/components/custom-button/CustomButton";
import { ArrowDownToLine, ArrowRight, Menu, X } from "lucide-react";
import CustomLink from "../../shared/components/custom-link/CustomLink";
import { Github, Instagram, Linkedin } from "lucide-react";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Mostrar header si estamos en la parte superior o scrolleando hacia arriba
      if (currentScrollY <= 0 || currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        // Cerrar el menú cuando el header se oculta
        setIsMenuOpen(false);
      }

      // Detectar si estamos en la parte superior
      setIsTop(currentScrollY <= 0);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`header ${isVisible ? "header--visible" : "header--hidden"}`}
    >
      <div className={`header__content ${isTop ? "header--top" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="header__logo">
          <img src={logo} alt="Logo" className="header__logo-image" />
          <p className="header__logo-text">
            <span>A</span>dri <span>A</span>rcones
          </p>
        </div>

        <div className="header__menu">
          <nav className="header__nav">
            <CustomLink
              variant="secondary"
              to="https://www.linkedin.com/in/adrianarcones/"
              external
            >
              <Linkedin />
            </CustomLink>
            <CustomLink
              variant="secondary"
              to="https://github.com/AdriArcones"
              external
            >
              <Github />
            </CustomLink>
            <CustomLink
              variant="secondary"
              to="https://www.instagram.com/adri_arcones/"
              external
            >
              <Instagram />
            </CustomLink>
          </nav>

          <div className="header__cta">
            <CustomButton
              size="small"
              variant="outline"
              rightIcon={<ArrowDownToLine />}
            >
              Curriculum
            </CustomButton>

            <CustomButton
              size="small"
              variant="primary"
              rightIcon={<ArrowRight />}
            >
              Contactame
            </CustomButton>
          </div>
        </div>

        <div className="header__menu-mobile">
          <CustomButton size="small" variant="text" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </CustomButton>
        </div>
      </div>
    </header>
  );
};
