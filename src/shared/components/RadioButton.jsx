import React from "react";
import RadioIcon from "../../assets/images/Radio [1.0].svg";
import RadioSelectedIcon from "../../assets/images/Radio-selected [1.0].svg";

const RadioButton = ({ checked, onChange, label, className = "" }) => {
  return (
    <label
      className={`radio_button_wrapper ${className}`}
      style={{
        display: "flex",
        gap: "0.5rem",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        style={{ display: "none" }}
      />
      <img
        src={checked ? RadioSelectedIcon : RadioIcon}
        alt={checked ? "Selected" : "Unselected"}
        style={{ width: "20px", height: "20px" }}
      />
      {label && <span className="radio_label">{label}</span>}
    </label>
  );
};

export default RadioButton;
