import React, { useState } from "react";
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

  return (
    <div className="settings_section">
      <h3>Platform Configuration</h3>
      <p className="section_description">
        Manage global platform settings and system configuration
      </p>

      <div className="settings_form">
        <div className="form_row">
          <label>Maintenance Mode</label>
          <div className="toggle_wrapper">
            <input
              type="checkbox"
              checked={settings.maintenanceMode}
              onChange={(e) =>
                setSettings({ ...settings, maintenanceMode: e.target.checked })
              }
              className="toggle_input"
            />
            <span className="toggle_description">
              Enable maintenance mode to restrict platform access
            </span>
          </div>
        </div>

        <div className="form_row">
          <label>Global API Rate Limit</label>
          <input
            type="number"
            value={settings.apiRateLimit}
            onChange={(e) =>
              setSettings({ ...settings, apiRateLimit: e.target.value })
            }
            placeholder="Requests per minute"
          />
        </div>

        <div className="form_row">
          <label>Session Timeout</label>
          <input
            type="number"
            value={settings.sessionTimeout}
            onChange={(e) =>
              setSettings({ ...settings, sessionTimeout: e.target.value })
            }
            placeholder="Minutes"
          />
        </div>

        <div className="form_row">
          <label>New Merchant Registrations</label>
          <div className="toggle_wrapper">
            <input
              type="checkbox"
              checked={settings.allowNewRegistrations}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  allowNewRegistrations: e.target.checked,
                })
              }
              className="toggle_input"
            />
            <span className="toggle_description">
              Allow new merchants to register
            </span>
          </div>
        </div>

        <div className="form_row">
          <label>Email Verification</label>
          <div className="toggle_wrapper">
            <input
              type="checkbox"
              checked={settings.requireEmailVerification}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  requireEmailVerification: e.target.checked,
                })
              }
              className="toggle_input"
            />
            <span className="toggle_description">
              Require email verification for new accounts
            </span>
          </div>
        </div>

        <div className="form_row">
          <label>Sandbox Environment</label>
          <div className="toggle_wrapper">
            <input
              type="checkbox"
              checked={settings.enableSandbox}
              onChange={(e) =>
                setSettings({ ...settings, enableSandbox: e.target.checked })
              }
              className="toggle_input"
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
