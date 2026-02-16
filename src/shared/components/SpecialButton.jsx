import React from "react";
import "./special-button.css";

const SpecialButton = ({
  children,
  onClick,
  className = "",
  icon,
  type = "button",
  variant = "primary",
}) => {
  return (
    <button
      type={type}
      className={`special_button ${variant === "secondary" ? "secondary" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <span className="material-symbols-outlined">{icon}</span>}
    </button>
  );
};

export default SpecialButton;
