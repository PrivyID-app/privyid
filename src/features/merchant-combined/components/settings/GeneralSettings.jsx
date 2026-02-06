import React, { useRef, useState } from "react";
import "../../pages/SettingsPage.css";
import { useAppContext } from "../../../../context/AppContext";

const GeneralSettings = () => {
  const { company, updateCompany } = useAppContext();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({ ...company });

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, logo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const fieldMap = {
      "company-name": "name",
      "company-slogan": "slogan",
    };
    const field = fieldMap[id];
    if (field) {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSave = () => {
    updateCompany(formData);
    alert("Company profile updated!");
  };

  return (
    <div className="settings_section">
      <h2 className="section_title">Update profile</h2>
      <p className="section_description">
        You can update your account information below.
      </p>

      {/* Logo Upload */}
      <div className="logo_upload_section">
        <label className="form_label">Upload Company Logo</label>
        <div className="logo_upload_container">
          <div className="logo_preview">
            <img src={formData.logo} alt="Company logo" />
          </div>
          <div className="logo_actions">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/png, image/jpeg"
              onChange={handleLogoUpload}
            />
            <button
              className="upload_btn"
              onClick={() => fileInputRef.current.click()}
            >
              Update
            </button>
            <span className="upload_hint">PNG, JPEG 500 x 500px</span>
          </div>
        </div>
      </div>

      {/* Company Name */}
      <div className="form_group">
        <label className="form_label" htmlFor="company-name">
          Company Name
        </label>
        <input
          type="text"
          id="company-name"
          className="form_input"
          placeholder="ACME Ltd"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* Company Slogan */}
      <div className="form_group">
        <label className="form_label" htmlFor="company-slogan">
          Company Slogan
        </label>
        <input
          type="text"
          id="company-slogan"
          className="form_input"
          placeholder="Your Slogan"
          value={formData.slogan}
          onChange={handleChange}
        />
      </div>

      {/* Location */}
      <div className="form_group">
        <label className="form_label" htmlFor="location">
          Location
        </label>
        <div className="phone_input_group">
          <div className="phone_prefix">
            <span>🇳🇬</span>
          </div>
          <input
            type="text"
            id="location"
            className="form_input"
            placeholder="Nigeria"
            defaultValue="Nigeria"
          />
        </div>
      </div>

      {/* Phone Number */}
      <div className="form_group">
        <label className="form_label" htmlFor="phone-number">
          Phone number
        </label>
        <div className="phone_input_group">
          <div className="phone_prefix">
            <span>🇳🇬</span>
            <span>+234</span>
          </div>
          <input
            type="tel"
            id="phone-number"
            className="form_input"
            placeholder="Enter phone number"
          />
        </div>
      </div>

      {/* Email Address */}
      <div className="form_group">
        <label className="form_label" htmlFor="email-address">
          Email address
        </label>
        <input
          type="email"
          id="email-address"
          className="form_input"
          placeholder="support@privyid.com"
          defaultValue="support@privyid.com"
          disabled
        />
        <div
          style={{
            marginTop: "8px",
            fontSize: "12px",
            color: "var(--text-sub-600)",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "14px" }}
          >
            info
          </span>
          <span>Contact support to change your email address</span>
        </div>
      </div>

      {/* Save Button */}
      <button className="primary_btn" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
};

export default GeneralSettings;
