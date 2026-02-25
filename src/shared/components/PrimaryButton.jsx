import React from "react";
import "./primary-button.css";

const PrimaryButton = ({
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
      className={`primary_btn ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

export default PrimaryButton;
