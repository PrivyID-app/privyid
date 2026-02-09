import React, { useState } from "react";
import ImageCheckbox from "../../../../shared/components/ImageCheckbox.jsx";
import CustomSelect from "../../../../shared/components/CustomSelect.jsx";
import "../../super-admin.css";

const SecuritySettings = () => {
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [ipWhitelist, setIpWhitelist] = useState("");
  const [passwordPolicy, setPasswordPolicy] = useState("standard");

  const passwordPolicyOptions = [
    { value: "standard", label: "Standard (8+ characters)" },
    {
      value: "strong",
      label: "Strong (12+ characters, mixed case, numbers, symbols)",
    },
    {
      value: "very_strong",
      label: "Very Strong (16+ characters, all requirements)",
    },
  ];

  const handleSave = () => {
    console.log("Saving security settings:", {
      twoFactorAuth,
      ipWhitelist,
      passwordPolicy,
    });
  };

  return (
    <div className="settings_section">
      <h3>Security Configuration</h3>
      <p className="section_description">
        Manage security settings and access controls
      </p>

      <div className="settings_form">
        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Two-Factor Authentication</label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={twoFactorAuth}
              onChange={() => setTwoFactorAuth(!twoFactorAuth)}
            />
            <span className="toggle_description">
              Require 2FA for all admin accounts
            </span>
          </div>
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>IP Whitelist</label>
          <textarea
            placeholder="Enter IP addresses (one per line)"
            rows="4"
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              width: "100%",
              border: "1px solid var(--stroke-sub-300)",
              borderRadius: "0.8rem",
              padding: "1rem",
            }}
            value={ipWhitelist}
            onChange={(e) => setIpWhitelist(e.target.value)}
          />
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Password Policy</label>
          <CustomSelect
            options={passwordPolicyOptions}
            value={passwordPolicy}
            onSelect={setPasswordPolicy}
            className="filter_select" // Reusing filter_select class for styling
          />
        </div>

        <button className="save_button" onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};

export default SecuritySettings;
