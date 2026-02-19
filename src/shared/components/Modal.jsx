import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_container" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <h3 className="modal_title">{title}</h3>
          <button className="modal_close_btn" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="modal_content">{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
