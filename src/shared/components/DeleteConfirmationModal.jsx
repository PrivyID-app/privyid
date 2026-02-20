import React from "react";
import "./status-modal.css";

const DeleteConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  itemName = "this record",
}) => {
  if (!isOpen) return null;

  return (
    <div className="status_modal_overlay">
      <div
        className="status_modal_container bounceIn"
        style={{ maxWidth: "400px" }}
      >
        <div className="status_modal_header">
          <div className="status_modal_icon_wrapper error">
            <span className="material-symbols-outlined">delete_forever</span>
          </div>
        </div>

        <div className="status_modal_body">
          <h2 className="status_modal_title">Confirm Deletion</h2>
          <p className="status_modal_description">
            Are you sure you want to delete <strong>{itemName}</strong>? This
            action cannot be undone and will permanently remove the data from
            our servers.
          </p>

          <div
            className="status_modal_footer"
            style={{ gap: "12px", marginTop: "24px" }}
          >
            <button
              type="button"
              className="status_modal_button"
              style={{ backgroundColor: "#f3f4f6", color: "#333" }}
              onClick={onClose}
            >
              No, Keep it
            </button>
            <button
              type="button"
              className="status_modal_button"
              style={{ backgroundColor: "#ef4444" }}
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
