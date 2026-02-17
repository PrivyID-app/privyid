import React from "react";
import "./special-button.css";

const SpecialButton = ({
  children,
  onClick,
  className = "",
  icon,
  type = "button",
  variant = "primary",
  as: Component = "button",
  ...props
}) => {
  return (
    <Component
      type={Component === "button" ? type : undefined}
      className={`special_button ${variant === "secondary" ? "secondary" : ""} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon &&
        (typeof icon === "string" ? (
          <span className="material-symbols-outlined">{icon}</span>
        ) : (
          icon
        ))}
    </Component>
  );
};

export default SpecialButton;
