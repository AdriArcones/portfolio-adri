import PropTypes from "prop-types";
import "./CustomChip.scss";

const CustomChip = ({ 
    label, 
    onClick,
    className = "",
    color = "primary",
    size = "md"
}) => {
  return (
    <div className={`custom-chip ${className} ${color} ${size}`} onClick={onClick}>
      {label}
    </div>
  );
};

CustomChip.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default CustomChip;
