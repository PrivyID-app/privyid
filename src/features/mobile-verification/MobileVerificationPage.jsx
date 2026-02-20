import React, { useState } from "react";
import "./mobile-verification.css";
import logoBlack from "../../assets/images/Logo black.svg";
import CustomSelect from "../../shared/components/CustomSelect";

const MobileVerificationPage = () => {
  const [currentStep, setCurrentStep] = useState(1); // 1: Enter Details, 2: Upload Documents, 3: Selfie Instructions, 4: Selfie Capture, 5: Status
  const [verificationType, setVerificationType] = useState("");

  const verificationOptions = [
    { label: "National ID", value: "national_id" },
    { label: "Passport", value: "passport" },
    { label: "Driver’s License", value: "drivers_license" },
  ];

  const handleNext = (e) => {
    e?.preventDefault();
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = (e) => {
    e?.preventDefault();
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleCancel = (e) => {
    e?.preventDefault();
    console.log("Verification cancelled");
  };

  const handleCapture = () => {
    console.log("Selfie captured");
    setCurrentStep(5);
  };

  return (
    <div className="mobile_verification_page">
      <div className="mobile_verification_flow">
        {/* SECTION 1: ENTER DETAILS */}
        {currentStep === 1 && (
          <div className="enter_details">
            <div className="mobile_logo">
              <img src={logoBlack} alt="privyID logo" />
            </div>

            <h2 className="section_header">Personal Details</h2>
            <p className="section_subheader">
              Please provide your basic information as appearing on your ID.
            </p>

            <form id="details" onSubmit={handleNext}>
              <div className="input_group mob_details_form">
                <label>First Name</label>
                <input type="text" placeholder="John" required />
              </div>

              <div className="input_group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" required />
              </div>

              <div className="input_group">
                <label>Verification Type</label>
                <CustomSelect
                  options={verificationOptions}
                  value={verificationType}
                  onSelect={setVerificationType}
                  placeholder="Select your ID type"
                />
              </div>

              <div className="input_group">
                <label>ID Number</label>
                <input type="text" placeholder="e.g AYHUIN3779NBK" required />
              </div>

              <div className="button_wrapper">
                <button
                  type="button"
                  className="secondary_button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button type="submit" className="primary_button">
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {/* SECTION 2: UPLOAD DOCUMENTS */}
        {currentStep === 2 && (
          <div className="upload_documents">
            <div className="mobile_logo">
              <img src={logoBlack} alt="privyID logo" />
            </div>

            <h2 className="section_header">Document Upload</h2>
            <p className="section_subheader">
              Upload clear photos of your selected ID document.
            </p>

            <div className="upload_section">
              <div className="upload_item">
                <label className="input_group label">Front Page</label>
                <div className="upload-box">
                  <span className="material-symbols-outlined upload_icon">
                    upload_file
                  </span>
                  <p className="upload-text">
                    <u>Click to Upload</u>
                    <span>Max size 5MB (JPG, PNG)</span>
                  </p>
                </div>
              </div>

              <div className="upload_item">
                <label className="input_group label">Back Page</label>
                <div className="upload-box">
                  <span className="material-symbols-outlined upload_icon">
                    upload_file
                  </span>
                  <p className="upload-text">
                    <u>Click to Upload</u>
                    <span>Max size 5MB (JPG, PNG)</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="button_wrapper">
              <button className="secondary_button" onClick={handleBack}>
                Back
              </button>
              <button className="primary_button" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* SECTION 3: SELFIE INSTRUCTIONS */}
        {currentStep === 3 && (
          <div className="selfie_instruction">
            <div className="mobile_logo">
              <img src={logoBlack} alt="privyID logo" />
            </div>

            <h2 className="section_header">Selfie Verification</h2>
            <p className="section_subheader">
              Follow these tips for a successful face verification.
            </p>

            <div className="instructions scrollable_body">
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "var(--color-primary)" }}
                  >
                    check_circle
                  </span>
                  <span style={{ fontSize: "0.875rem", fontWeight: 300 }}>
                    Remove hats, glasses, and face coverings
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "var(--color-primary)" }}
                  >
                    check_circle
                  </span>
                  <span style={{ fontSize: "0.875rem", fontWeight: 300 }}>
                    Make sure you're in a well-lit area
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "var(--color-primary)" }}
                  >
                    check_circle
                  </span>
                  <span style={{ fontSize: "0.875rem", fontWeight: 300 }}>
                    Look straight at the camera
                  </span>
                </li>
              </ul>
            </div>

            <div className="button_wrapper">
              <button className="secondary_button" onClick={handleBack}>
                Back
              </button>
              <button className="primary_button" onClick={handleNext}>
                Ready, Start
              </button>
            </div>
          </div>
        )}

        {/* SECTION 4: SELFIE CAPTURE */}
        {currentStep === 4 && (
          <div className="selfie_capture">
            <div className="mobile_logo">
              <img src={logoBlack} alt="privyID logo" />
            </div>

            <div className="selfie_content">
              <h2 className="section_header">Face Scan</h2>
              <p className="section_subheader">
                Position your face within the circle.
              </p>

              <div className="camera_container">
                <div className="camera-frame">
                  {/* Real camera feed will go here */}
                </div>
              </div>
            </div>

            <div className="button_wrapper">
              <button className="secondary_button" onClick={handleBack}>
                Back
              </button>
              <button className="primary_button" onClick={handleCapture}>
                Capture
              </button>
            </div>
          </div>
        )}

        {/* SECTION 5: SUCCESS/FAILED SCREEN PAGE */}
        {currentStep === 5 && (
          <div className="screen">
            <div className="mobile_logo">
              <img src={logoBlack} alt="privyID logo" />
            </div>

            <div className="mob_status success">
              <div className="icon_wrapper">
                <span className="material-symbols-outlined">check_circle</span>
              </div>

              <div className="status_info">
                <h3 className="status_title">Verification Successful</h3>
                <p className="status_message">
                  Your identity has been verified. You can now close this window
                  or continue on your main device.
                </p>
              </div>

              <div className="button_wrapper">
                <button
                  className="primary_button"
                  onClick={() => (window.location.href = "/")}
                >
                  Finished
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileVerificationPage;
