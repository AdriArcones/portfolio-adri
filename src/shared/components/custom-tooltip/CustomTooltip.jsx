import React from "react";
import "./CustomTooltip.scss";

const CustomTooltip = ({ 
    children,
    text,
    position = "top",
    className = "",
    isVisible = false
}) => {
  return (
    <div className={`custom-tooltip ${className}`}>
      {children}
      <div className={`custom-tooltip__content ${position} ${isVisible ? 'visible' : ''}`}>
        {text}
      </div>
    </div>
  );
};



export default CustomTooltip; 