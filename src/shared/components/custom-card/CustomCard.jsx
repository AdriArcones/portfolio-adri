import React from "react";
import PropTypes from "prop-types";
import "./CustomCard.scss";

const CustomCard = ({
  children,
  title,
  subtitle,
  className = "",
  onClick,
  glass = false,
  glow = false,
}) => {
  return (
    <div
      className={`custom-card ${glass ? "glass" : ""} ${glow ? "glow" : ""} ${
        onClick ? "clickable" : ""
      } ${className}`}
      onClick={onClick}
    >
      <div className="custom-card__content">
        <div className="custom-card__header">
          {title && <h3 className="custom-card__title">{title}</h3>}
          {subtitle && <p className="custom-card__subtitle">{subtitle}</p>}
        </div>

        <div className="custom-card__body">{children}</div>
      </div>
    </div>
  );
};

CustomCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  glass: PropTypes.bool,
  glow: PropTypes.bool,
};

export default CustomCard;
