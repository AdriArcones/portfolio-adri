import React from "react";
import "./CustomButton.scss";

const CustomButton = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  type = "button",
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`custom-button ${variant} ${size} ${fullWidth ? "full-width" : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {leftIcon && <span className="custom-button__icon">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="custom-button__icon">{rightIcon}</span>}
    </button>
  );
};



export default CustomButton;
