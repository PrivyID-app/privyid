import React from "react";
import "../../super-admin.css";

const AdminNotificationSettings = () => {
  return (
    <div className="settings_section">
      <h3>Notification Preferences</h3>
      <p className="section_description">
        Configure admin notification preferences
      </p>

      <div className="settings_form">
        <div className="form_row">
          <label>New Merchant Registration</label>
          <div className="toggle_wrapper">
            <input type="checkbox" defaultChecked className="toggle_input" />
            <span className="toggle_description">
              Notify when a new merchant registers
            </span>
          </div>
        </div>

        <div className="form_row">
          <label>Verification Requests</label>
          <div className="toggle_wrapper">
            <input type="checkbox" defaultChecked className="toggle_input" />
            <span className="toggle_description">
              Notify on new verification requests
            </span>
          </div>
        </div>

        <div className="form_row">
          <label>Security Alerts</label>
          <div className="toggle_wrapper">
            <input type="checkbox" defaultChecked className="toggle_input" />
            <span className="toggle_description">
              Notify on security events and failed logins
            </span>
          </div>
        </div>

        <div className="form_row">
          <label>System Alerts</label>
          <div className="toggle_wrapper">
            <input type="checkbox" defaultChecked className="toggle_input" />
            <span className="toggle_description">
              Notify on system errors and downtime
            </span>
          </div>
        </div>

        <button className="save_button">Save Changes</button>
      </div>
    </div>
  );
};

export default AdminNotificationSettings;
