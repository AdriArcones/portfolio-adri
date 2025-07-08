import React from "react";
import PropTypes from "prop-types";
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

CustomTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  className: PropTypes.string,
  isVisible: PropTypes.bool,
};

export default CustomTooltip; 