import React, { useState } from "react";
import ImageCheckbox from "../../../../shared/components/ImageCheckbox.jsx";
import "../../super-admin.css";

const PlatformSettings = () => {
  const [settings, setSettings] = useState({
    maintenanceMode: false,
    apiRateLimit: 1000,
    sessionTimeout: 30,
    allowNewRegistrations: true,
    requireEmailVerification: true,
    enableSandbox: true,
  });

  const handleSave = () => {
    console.log("Saving platform settings:", settings);
  };

  const handleCheckboxChange = (settingName) => {
    setSettings((prev) => ({
      ...prev,
      [settingName]: !prev[settingName],
    }));
  };

  return (
    <div className="settings_section">
      <h3>Platform Configuration</h3>
      <p className="section_description">
        Manage global platform settings and system configuration
      </p>

      <div className="settings_form">
        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Maintenance Mode</label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={settings.maintenanceMode}
              onChange={() => handleCheckboxChange("maintenanceMode")}
            />
            <span className="toggle_description">
              Enable maintenance mode to restrict platform access
            </span>
          </div>
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Global API Rate Limit</label>
          <input
            type="number"
            value={settings.apiRateLimit}
            onChange={(e) =>
              setSettings({ ...settings, apiRateLimit: e.target.value })
            }
            placeholder="Requests per minute"
            style={{fontSize: "1rem", fontWeight: "400", width: "100%", border: "1px solid var(--stroke-sub-300)", borderRadius: "0.8rem", padding: "1rem" }}
          />
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Session Timeout</label>
          <input
            type="number"
            value={settings.sessionTimeout}
            onChange={(e) =>
              setSettings({ ...settings, sessionTimeout: e.target.value })
            }
            placeholder="Minutes"
            style={{fontSize: "1rem", fontWeight: "400", width: "100%", border: "1px solid var(--stroke-sub-300)", borderRadius: "0.8rem", padding: "1rem" }}
          />
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>New Merchant Registrations</label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={settings.allowNewRegistrations}
              onChange={() => handleCheckboxChange("allowNewRegistrations")}
            />
            <span className="toggle_description">
              Allow new merchants to register
            </span>
          </div>
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Email Verification</label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={settings.requireEmailVerification}
              onChange={() => handleCheckboxChange("requireEmailVerification")}
            />
            <span className="toggle_description">
              Require email verification for new accounts
            </span>
          </div>
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Sandbox Environment</label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={settings.enableSandbox}
              onChange={() => handleCheckboxChange("enableSandbox")}
            />
            <span className="toggle_description">
              Enable sandbox environment for testing
            </span>
          </div>
        </div>

        <button className="save_button" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PlatformSettings;
