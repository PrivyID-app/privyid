import React from "react";
import "../../pages/SettingsPage.css";

const SystemSettings = () => {
  return (
    <div className="settings_section">
      <h2 className="section_title">System Configuration</h2>
      <p className="section_description">
        You can configure your security information below.
      </p>

      {/* Platform Name */}
      <div className="form_group">
        <label className="form_label" htmlFor="platform-name">
          Platform Name
        </label>
        <input
          type="text"
          id="platform-name"
          className="form_input"
          defaultValue="PrivyID"
          readOnly
          disabled
        />
      </div>

      {/* Support Email */}
      <div className="form_group">
        <label className="form_label" htmlFor="support-email">
          Support Email
        </label>
        <input
          type="email"
          id="support-email"
          className="form_input"
          defaultValue="support@privyid.com"
          readOnly
          disabled
        />
      </div>

      {/* Default Verification Timeout */}
      <div className="form_group">
        <label className="form_label" htmlFor="verification-timeout">
          Default Verification Timeout (seconds)
        </label>
        <input
          type="number"
          id="verification-timeout"
          className="form_input"
          defaultValue="30"
          readOnly
          disabled
        />
      </div>

      {/* Minimum Confidence Score */}
      <div className="form_group">
        <label className="form_label" htmlFor="confidence-score">
          Minimum Confidence Score (%)
        </label>
        <input
          type="number"
          id="confidence-score"
          className="form_input"
          defaultValue="85"
          readOnly
          disabled
        />
      </div>

      {/* Run Database Backup Button */}
      <button className="upload_btn" style={{ marginTop: "24px" }}>
        Run database backup
      </button>
    </div>
  );
};

export default SystemSettings;
