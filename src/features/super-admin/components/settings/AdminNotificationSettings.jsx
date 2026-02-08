import React, { useState } from "react";
import ImageCheckbox from "../../../shared/components/ImageCheckbox";
import "../../super-admin.css";

const AdminNotificationSettings = () => {
  const [newMerchantNotification, setNewMerchantNotification] = useState(true);
  const [verificationRequestsNotification, setVerificationRequestsNotification] =
    useState(true);
  const [securityAlertsNotification, setSecurityAlertsNotification] =
    useState(true);
  const [systemAlertsNotification, setSystemAlertsNotification] =
    useState(true);

  const handleSave = () => {
    console.log("Saving notification settings:", {
      newMerchantNotification,
      verificationRequestsNotification,
      securityAlertsNotification,
      systemAlertsNotification,
    });
  };

  const handleCheckboxChange = (settingName) => {
    switch (settingName) {
      case "newMerchant":
        setNewMerchantNotification(!newMerchantNotification);
        break;
      case "verificationRequests":
        setVerificationRequestsNotification(!verificationRequestsNotification);
        break;
      case "securityAlerts":
        setSecurityAlertsNotification(!securityAlertsNotification);
        break;
      case "systemAlerts":
        setSystemAlertsNotification(!systemAlertsNotification);
        break;
      default:
        break;
    }
  };

  return (
    <div className="settings_section">
      <h3>Notification Preferences</h3>
      <p className="section_description">
        Configure admin notification preferences
      </p>

      <div className="settings_form">
        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>New Merchant Registration</label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={newMerchantNotification}
              onChange={() => handleCheckboxChange("newMerchant")}
            />
            <span className="toggle_description">
              Notify when a new merchant registers
            </span>
          </div>
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Verification Requests</label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={verificationRequestsNotification}
              onChange={() => handleCheckboxChange("verificationRequests")}
            />
            <span className="toggle_description">
              Notify on new verification requests
            </span>
          </div>
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Security Alerts</label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={securityAlertsNotification}
              onChange={() => handleCheckboxChange("securityAlerts")}
            />
            <span className="toggle_description">
              Notify on security events and failed logins
            </span>
          </div>
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>System Alerts</label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={systemAlertsNotification}
              onChange={() => handleCheckboxChange("systemAlerts")}
            />
            <span className="toggle_description">
              Notify on system errors and downtime
            </span>
          </div>
        </div>

        <button className="save_button" onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};

export default AdminNotificationSettings;
