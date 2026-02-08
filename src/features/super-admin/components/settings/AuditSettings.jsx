import React, { useState } from "react";
import ImageCheckbox from "../../../../shared/components/ImageCheckbox.jsx";
import CustomSelect from "../../../../shared/components/CustomSelect.jsx";
import "../../super-admin.css";

const AuditSettings = () => {
  const [logRetentionPeriod, setLogRetentionPeriod] = useState("30_days");
  const [logAllApiRequests, setLogAllApiRequests] = useState(true);
  const [logAdminActions, setLogAdminActions] = useState(true);
  const [exportFormat, setExportFormat] = useState("json");

  const logRetentionOptions = [
    { value: "30_days", label: "30 days" },
    { value: "90_days", label: "90 days" },
    { value: "180_days", label: "180 days" },
    { value: "365_days", label: "365 days" },
    { value: "indefinite", label: "Indefinite" },
  ];

  const exportFormatOptions = [
    { value: "json", label: "JSON" },
    { value: "csv", label: "CSV" },
    { value: "xml", label: "XML" },
  ];

  const handleSave = () => {
    console.log("Saving audit settings:", {
      logRetentionPeriod,
      logAllApiRequests,
      logAdminActions,
      exportFormat,
    });
  };

  const handleCheckboxChange = (settingName) => {
    switch (settingName) {
      case "logAllApiRequests":
        setLogAllApiRequests(!logAllApiRequests);
        break;
      case "logAdminActions":
        setLogAdminActions(!logAdminActions);
        break;
      default:
        break;
    }
  };

  return (
    <div className="settings_section">
      <h3>Audit Configuration</h3>
      <p className="section_description">
        Configure audit logging and compliance settings
      </p>

      <div className="settings_form">
        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Log Retention Period</label>
          <CustomSelect
            options={logRetentionOptions}
            value={logRetentionPeriod}
            onSelect={setLogRetentionPeriod}
            className="filter_select"
          />
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Log All API Requests</label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={logAllApiRequests}
              onChange={() => handleCheckboxChange("logAllApiRequests")}
            />
            <span className="toggle_description">
              Log all API requests for compliance
            </span>
          </div>
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Log Admin Actions</label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={logAdminActions}
              onChange={() => handleCheckboxChange("logAdminActions")}
            />
            <span className="toggle_description">
              Log all admin user actions
            </span>
          </div>
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Export Format</label>
          <CustomSelect
            options={exportFormatOptions}
            value={exportFormat}
            onSelect={setExportFormat}
            className="filter_select"
          />
        </div>

        <button className="save_button" onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};

export default AuditSettings;
