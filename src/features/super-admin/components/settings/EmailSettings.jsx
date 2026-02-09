import React, { useState } from "react";
import "../../super-admin.css";

const EmailSettings = () => {
  const [smtpHost, setSmtpHost] = useState("");
  const [smtpPort, setSmtpPort] = useState("");
  const [smtpUsername, setSmtpUsername] = useState("");
  const [smtpPassword, setSmtpPassword] = useState("");
  const [fromName, setFromName] = useState("");

  const handleSave = () => {
    console.log("Saving email settings:", {
      smtpHost,
      smtpPort,
      smtpUsername,
      smtpPassword,
      fromName,
    });
  };

  return (
    <div className="settings_section">
      <h3>Email Configuration</h3>
      <p className="section_description">
        Configure SMTP settings and email templates
      </p>

      <div className="settings_form">
        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>SMTP Host</label>
          <input
            type="text"
            placeholder="smtp.example.com"
            value={smtpHost}
            onChange={(e) => setSmtpHost(e.target.value)}
            style={{fontSize: "1rem", fontWeight: "400", width: "100%", border: "1px solid var(--stroke-sub-300)", borderRadius: "0.8rem", padding: "1rem" }}
          />
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>SMTP Port</label>
          <input
            type="number"
            placeholder="587"
            value={smtpPort}
            onChange={(e) => setSmtpPort(e.target.value)}
            style={{fontSize: "1rem", fontWeight: "400", width: "100%", border: "1px solid var(--stroke-sub-300)", borderRadius: "0.8rem", padding: "1rem" }}
          />
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>SMTP Username</label>
          <input
            type="text"
            placeholder="noreply@privyid.com"
            value={smtpUsername}
            onChange={(e) => setSmtpUsername(e.target.value)}
            style={{fontSize: "1rem", fontWeight: "400", width: "100%", border: "1px solid var(--stroke-sub-300)", borderRadius: "0.8rem", padding: "1rem" }}
          />
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>SMTP Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={smtpPassword}
            onChange={(e) => setSmtpPassword(e.target.value)}
            style={{fontSize: "1rem", fontWeight: "400", width: "100%", border: "1px solid var(--stroke-sub-300)", borderRadius: "0.8rem", padding: "1rem" }}
          />
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>From Name</label>
          <input
            type="text"
            placeholder="PrivyID"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            style={{fontSize: "1rem", fontWeight: "400", width: "100%", border: "1px solid var(--stroke-sub-300)", borderRadius: "0.8rem", padding: "1rem" }}
          />
        </div>

        <button className="save_button" onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};

export default EmailSettings;
