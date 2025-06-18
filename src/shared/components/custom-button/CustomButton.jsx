import React from "react";
import PropTypes from "prop-types";
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

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

export default CustomButton;
