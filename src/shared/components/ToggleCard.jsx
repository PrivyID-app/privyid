import React from "react";

/**
 * Global reusable card with a title, description, and toggle switch.
 */
const ToggleCard = ({ title, description, checked, onChange }) => {
  return (
    <div className="notification_card">
      <div className="notification_info">
        <div className="notification_title">{title}</div>
        <div className="notification_desc">{description}</div>
      </div>
      <label className="toggle_switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="slider"></span>
      </label>
      <style>{`
        .toggle_switch {
          position: relative;
          display: inline-block;
          width: 40px;
          height: 24px;
        }
        .toggle_switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle_switch .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: .4s;
          border-radius: 34px;
        }
        .toggle_switch .slider:before {
          position: absolute;
          content: "";
          height: 20px;
          width: 20px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
        }
        .toggle_switch input:checked + .slider {
          background-color: var(--text-strong-950) !important;
        }
        .toggle_switch input:checked + .slider:before {
          transform: translateX(16px);
        }
      `}</style>
    </div>
  );
};

export default ToggleCard;
