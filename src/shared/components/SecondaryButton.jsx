import React from "react";
import "./secondary-button.css";

const SecondaryButton = ({
  children,
  onClick = () => {},
  className = "",
  type = "button",
  as: Component = "button",
  ...props
}) => {
  return (
    <Component
      type={Component === "button" ? type : undefined}
      className={`secondary_btn ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

export default SecondaryButton;
