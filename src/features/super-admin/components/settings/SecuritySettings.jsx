import React from "react";
import "../../super-admin.css";

const SecuritySettings = () => {
  return (
    <div className="settings_section">
      <h3>Security Configuration</h3>
      <p className="section_description">
        Manage security settings and access controls
      </p>

      <div className="settings_form">
        <div className="form_row">
          <label>Two-Factor Authentication</label>
          <div className="toggle_wrapper">
            <input type="checkbox" defaultChecked className="toggle_input" />
            <span className="toggle_description">
              Require 2FA for all admin accounts
            </span>
          </div>
        </div>

        <div className="form_row">
          <label>IP Whitelist</label>
          <textarea placeholder="Enter IP addresses (one per line)" rows="4" />
        </div>

        <div className="form_row">
          <label>Password Policy</label>
          <select>
            <option>Standard (8+ characters)</option>
            <option>
              Strong (12+ characters, mixed case, numbers, symbols)
            </option>
            <option>Very Strong (16+ characters, all requirements)</option>
          </select>
        </div>

        <button className="save_button">Save Changes</button>
      </div>
    </div>
  );
};

export default SecuritySettings;
