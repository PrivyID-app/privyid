import React from "react";
import "./special-button.css";

const SpecialButton = ({
  children,
  onClick = () => {},
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
      <span className="btn_text">{children}</span>
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
