import React, { useState, useRef } from "react";
import "../../pages/SettingsPage.css";
import Toast from "../../../../shared/components/Toast";

const VerificationLinkSettings = () => {
  const [showUrl, setShowUrl] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [toast, setToast] = useState(null);
  const fileInputRef = useRef(null);
  const url =
    "https://verify.privyid.com/session/id_9Kx2LmQ7uR4tY8xN3aH1?merchant=mk_4821&env=...";

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setToast({ message: "URL copied to clipboard!", type: "success" });
      setTimeout(() => setToast(null), 3000);
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  const performUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="settings_section">
      <h2 className="section_title">Send Secure Verification Link</h2>
      <p className="section_description">
        Allow individuals to complete identity verification through a secure,
        hosted PrivyID session – no integration required.
      </p>

      {/* Reusable Verification URL */}
      <div className="form_group">
        <label className="form_label">
          Reusable Verification URL (Client-side safe)
        </label>
        <div className="verification_url_group">
          <input
            type={showUrl ? "text" : "password"}
            className="form_input"
            value={url}
            readOnly
          />
          <div className="url_actions">
            <button
              className="url_action_btn"
              title={showUrl ? "Hide" : "Show"}
              onClick={() => setShowUrl(!showUrl)}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                {showUrl ? "visibility_off" : "visibility"}
              </span>
            </button>
            <button
              className="url_action_btn"
              title="Copy"
              onClick={handleCopy}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                content_copy
              </span>
            </button>
          </div>
        </div>
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
          <span>
            Anyone with this link can complete an identity verification session
            based on your selected KYC/KYB settings.
          </span>
        </div>
      </div>

      {/* Bulk Invite via Email */}
      <div className="form_group" style={{ marginTop: "32px" }}>
        <label className="form_label">
          Bulk Invite via Email (Upload Recipient List)
        </label>

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <div className="dropzone" onClick={performUpload}>
          <div className="dropzone_content">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "32px", color: "var(--text-sub-600)" }}
            >
              cloud_upload
            </span>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--text-strong-950)",
              }}
            >
              {uploadedFileName
                ? `Selected: ${uploadedFileName}`
                : "Choose a file or drag & drop it here."}
            </div>
            <div style={{ fontSize: "12px" }}>
              JPEG, PNG, PDF, and MP4 formats, up to 50 MB
            </div>
            <button className="upload_btn" style={{ marginTop: "12px" }}>
              Browse File
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: "12px",
            fontSize: "12px",
            color: "var(--text-sub-600)",
            display: "flex",
            alignItems: "flex-start",
            gap: "4px",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "14px", marginTop: "2px" }}
          >
            info
          </span>
          <span>
            Upload a CSV file containing email addresses of individuals you want
            to invite for verification. PrivyID will send each person a secure,
            unique verification link.
          </span>
        </div>

        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "14px",
            color: "var(--state-brand-base, #5D5FEF)",
            marginTop: "16px",
            textDecoration: "none",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "18px" }}
          >
            download
          </span>
          Download CSV Template
        </a>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={true}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default VerificationLinkSettings;
