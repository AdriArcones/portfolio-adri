import React, { useState, useEffect } from "react";
import "./Header.scss";
import logo from "../../assets/images/header/logo-blanco.svg";
import CustomButton from "../../shared/components/custom-button/CustomButton";
import { ArrowDownToLine, ArrowRight, Menu, X } from "lucide-react";
import CustomLink from "../../shared/components/custom-link/CustomLink";
import { Github, Linkedin, Mail } from "lucide-react";

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-adrian-arcones.pdf';
    link.download = 'CV-Adrian-Arcones.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`header ${isVisible ? "header--visible" : "header--hidden"}`}
    >
      <div
        className={`header__content ${isTop ? "header--top" : ""} ${
          isMenuOpen ? "menu-open" : ""
        }`}
      >
        <div className="header__logo">
          <img src={logo} alt="Logo" className="header__logo-image" />
        </div>

        <div className="header__menu">
          <h2 className="header__title">
            <span className="header__title-text">
              <span className="header__title-text-highlight">
                Links Sociales
              </span>
            </span>
          </h2>
          <nav className="header__nav">
            <CustomLink
              variant="secondary"
              to="https://www.linkedin.com/in/adrianarcones/"
              external
              className="header__nav-item"
            >
              <Linkedin />
              <span className="header__nav-item-text">Linkedin </span>
            </CustomLink>
            <CustomLink
              variant="secondary"
              to="https://github.com/AdriArcones"
              external
              className="header__nav-item"
            >
              <Github />
              <span className="header__nav-item-text">Github </span>
            </CustomLink>
            <CustomLink
              variant="secondary"
              to="mailto:adrianarconesgomez@gmail.com"
              external
              className="header__nav-item"
            >
              <Mail />
              <span className="header__nav-item-text">Correo </span>
            </CustomLink>
          </nav>

          <div className="header__cta">
            <CustomButton
              size="small"
              variant="outline"
              rightIcon={<ArrowDownToLine />}
              onClick={downloadCV}
            >
              Curriculum
            </CustomButton>

            <CustomButton
              size="small"
              variant="primary"
              rightIcon={<ArrowRight />}
              onClick={() => {
                window.location.href = "#contact";
              }}
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

      {/* Overlay que solo aparece cuando el menú está abierto */}
      {isMenuOpen && (
        <div 
          className="header__overlay"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
};
