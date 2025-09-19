import "./Footer.scss";
import LazyImage from "../../shared/components/lazy-image/LazyImage";
import logo from "../../assets/images/contact/logo.svg";
import CustomLink from "../../shared/components/custom-link/CustomLink";
import CustomTooltip from "../../shared/components/custom-tooltip/CustomTooltip";
import { Linkedin, Mail, Github, Download } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content-column footer__content-column--left">
          <LazyImage
            className="footer__content-column-logo"
            src={logo}
            alt="logo"
          />
          <div className="footer__content-column-info">
            <p className="footer__content-column-info-text">
              "La gente olvidará lo que dijiste, olvidará lo que hiciste, pero
              nunca olvidará cómo la hiciste sentir."
            </p>
            <b className="footer__content-left-info-author">Maya Angelou</b>
          </div>
        </div>
        <div className="footer__content-column footer__content-column--right">
          <h3 className="footer__content-column-title">Encuéntrame en</h3>
          <div className="footer__content-column-links">
            <CustomLink
              variant="secondary"
              to="https://www.linkedin.com/in/adrianarcones/"
              external
              className="header__nav-item"
            >
              <CustomTooltip text="Linkedin" position="bottom">
                <Linkedin />
              </CustomTooltip>
            </CustomLink>
            <CustomLink
              variant="secondary"
              to="https://github.com/AdriArcones"
              external
              className="header__nav-item"
            >
              <CustomTooltip text="Github" position="bottom">
                <Github />
              </CustomTooltip>
            </CustomLink>
            <CustomLink
              variant="secondary"
              to="mailto:adrianarconesgomez@gmail.com"
              external
              className="header__nav-item"
            >
              <CustomTooltip text="Correo" position="bottom">
                <Mail />
              </CustomTooltip>
            </CustomLink>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} Adrián Arcones. Todos los derechos
          reservados.
        </p>
        <CustomLink
          variant="secondary"
          to="/privacy-policy"
          external
        >
          Política de Privacidad
        </CustomLink>
      </div>
    </footer>
  );
};
