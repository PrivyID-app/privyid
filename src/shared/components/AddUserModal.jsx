import React, { useState } from "react";
import "./status-modal.css";

const AddUserModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Viewer",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    onClose();
    setFormData({ name: "", email: "", role: "Viewer" });
  };

  return (
    <div className="status_modal_overlay">
      <div
        className="status_modal_container bounceIn"
        style={{ maxWidth: "450px" }}
      >
        <div className="status_modal_header">
          <div className="status_modal_icon_wrapper info">
            <span className="material-symbols-outlined">person_add</span>
          </div>
        </div>

        <div className="status_modal_body">
          <h2 className="status_modal_title">Add New Team Member</h2>
          <p className="status_modal_description">
            Invite a new user to your organization. They will receive an email
            to join.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{ marginTop: "24px", textAlign: "left" }}
          >
            <div className="form_group" style={{ marginBottom: "16px" }}>
              <label className="form_label">Full Name</label>
              <input
                type="text"
                className="form_input"
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="form_group" style={{ marginBottom: "16px" }}>
              <label className="form_label">Email Address</label>
              <input
                type="email"
                className="form_input"
                placeholder="e.g. john@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="form_group" style={{ marginBottom: "24px" }}>
              <label className="form_label">Role</label>
              <select
                className="form_input"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                required
              >
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>

            <div className="status_modal_footer" style={{ gap: "12px" }}>
              <button
                type="button"
                className="status_modal_button"
                style={{ backgroundColor: "#f3f4f6", color: "#333" }}
                onClick={onClose}
              >
                Cancel
              </button>
              <button type="submit" className="status_modal_button">
                Send Invitation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
