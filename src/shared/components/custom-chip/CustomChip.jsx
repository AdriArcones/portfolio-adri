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



export default CustomChip;
