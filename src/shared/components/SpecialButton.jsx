import React from "react";
import "./special-button.css";

const SpecialButton = ({
  children,
  onClick,
  className = "",
  icon,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`special_button ${className}`}
      onClick={onClick}
    >
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {children}
    </button>
  );
};

export default SpecialButton;
