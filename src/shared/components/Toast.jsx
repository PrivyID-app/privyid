import React, { useEffect, useState } from "react";
import "./toast-styles.css";

const Toast = ({
  message,
  type = "info",
  duration = 3000,
  isVisible,
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`toast_container ${type}`}>
      <div className="toast_content">
        <span className="material-symbols-outlined toast_icon">
          {type === "success"
            ? "check_circle"
            : type === "error"
              ? "error"
              : "info"}
        </span>
        <p className="toast_message">{message}</p>
      </div>
      <button className="toast_close" onClick={onClose}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
};

export default Toast;
