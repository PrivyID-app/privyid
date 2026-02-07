import React from "react";
import "../../super-admin.css";

const AuditSettings = () => {
  return (
    <div className="settings_section">
      <h3>Audit Configuration</h3>
      <p className="section_description">
        Configure audit logging and compliance settings
      </p>

      <div className="settings_form">
        <div className="form_row">
          <label>Log Retention Period</label>
          <select>
            <option>30 days</option>
            <option>90 days</option>
            <option>180 days</option>
            <option>365 days</option>
            <option>Indefinite</option>
          </select>
        </div>

        <div className="form_row">
          <label>Log All API Requests</label>
          <div className="toggle_wrapper">
            <input type="checkbox" defaultChecked className="toggle_input" />
            <span className="toggle_description">
              Log all API requests for compliance
            </span>
          </div>
        </div>

        <div className="form_row">
          <label>Log Admin Actions</label>
          <div className="toggle_wrapper">
            <input type="checkbox" defaultChecked className="toggle_input" />
            <span className="toggle_description">
              Log all admin user actions
            </span>
          </div>
        </div>

        <div className="form_row">
          <label>Export Format</label>
          <select>
            <option>JSON</option>
            <option>CSV</option>
            <option>XML</option>
          </select>
        </div>

        <button className="save_button">Save Changes</button>
      </div>
    </div>
  );
};

export default AuditSettings;
