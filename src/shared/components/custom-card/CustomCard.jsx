import React from "react";
import "./CustomCard.scss";

const CustomCard = ({
  children,
  title = "",
  subtitle = "",
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
      {(title || subtitle) && (
        <div className="custom-card__header">
          {title && <h3 className="custom-card__title">{title}</h3>}
          {subtitle && <p className="custom-card__subtitle">{subtitle}</p>}
        </div>
      )}

      {children}
    </div>
  );
};



export default CustomCard;
