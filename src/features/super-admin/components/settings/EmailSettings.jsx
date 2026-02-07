import React from "react";
import "../../super-admin.css";

const EmailSettings = () => {
  return (
    <div className="settings_section">
      <h3>Email Configuration</h3>
      <p className="section_description">
        Configure SMTP settings and email templates
      </p>

      <div className="settings_form">
        <div className="form_row">
          <label>SMTP Host</label>
          <input type="text" placeholder="smtp.example.com" />
        </div>

        <div className="form_row">
          <label>SMTP Port</label>
          <input type="number" placeholder="587" />
        </div>

        <div className="form_row">
          <label>SMTP Username</label>
          <input type="text" placeholder="noreply@privyid.com" />
        </div>

        <div className="form_row">
          <label>SMTP Password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <div className="form_row">
          <label>From Name</label>
          <input type="text" placeholder="PrivyID" />
        </div>

        <button className="save_button">Save Changes</button>
      </div>
    </div>
  );
};

export default EmailSettings;
