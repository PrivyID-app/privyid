import React from "react";
import "./status-modal.css";

const StatusModal = ({
  isOpen,
  onClose,
  title = "Insert Status Modal Title",
  description = "Insert your status modal description here. It would look better as two lines of text.",
  buttonText = "Continue",
  type = "info", // can be success, info, error
}) => {
  if (!isOpen) return null;

  return (
    <div className="status_modal_overlay">
      <div className="status_modal_container bounceIn">
        <div className="status_modal_header">
          <div className={`status_modal_icon_wrapper ${type}`}>
            <span className="material-symbols-outlined">
              {type === "success"
                ? "check_circle"
                : type === "error"
                  ? "error"
                  : "info"}
            </span>
          </div>
        </div>

        <div className="status_modal_body">
          <h2 className="status_modal_title">{title}</h2>
          <p className="status_modal_description">{description}</p>
        </div>

        <div className="status_modal_footer">
          <button className="status_modal_button" onClick={onClose}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
