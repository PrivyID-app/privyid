import React, { useState } from "react";
import "./mobile-verification.css";
import logoBlack from "../../assets/images/Logo black.svg";

const MobileVerificationPage = () => {
  const [currentStep, setCurrentStep] = useState(1); // 1: Enter Details, 2: Upload Documents, 3: Selfie Instructions, 4: Selfie Capture, 5: Status

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleCancel = () => {
    // Implement cancel logic, e.g., redirect to a different page
    console.log("Verification cancelled");
  };

  const handleCapture = () => {
    // Implement selfie capture logic
    console.log("Selfie captured");
    setCurrentStep(5); // Move to status screen after capture
  };

  return (
    <div className="mobile_verification_flow">
      {/* SECTION 1: ENTER DETAILS */}
      {currentStep === 1 && (
        <div className="enter_details">
          <div className="logo">
            <img src={logoBlack} alt="privyID logo" />
          </div>

          <section id="details">
            <h2>Enter Details for Verification</h2>

            <div className="alert error">
              Please fill all required fields correctly.
            </div>

            <label>First Name *</label>
            <input type="text" placeholder="John" />

            <label>Last Name *</label>
            <input type="text" placeholder="Doe" />

            <label>Select Verification Type *</label>
            <select>
              <option>Select your Verification Type</option>
              <option>National ID</option>
              <option>Passport</option>
              <option>Driver’s License</option>
            </select>

            <label>ID Number *</label>
            <input type="text" placeholder="e.g AYHUIN3779NBK" />

            <div className="actions">
              <button className="btn-cancel" onClick={handleCancel}>
                Cancel
              </button>
              <button className="btn-next" onClick={handleNext}>
                Next
              </button>
            </div>
          </section>
        </div>
      )}

      {/* SECTION 2: UPLOAD DOCUMENTS */}
      {currentStep === 2 && (
        <div className="upload_documents">
          <div className="logo">
            <img src={logoBlack} alt="privyID logo" />
          </div>

          <section id="documents">
            <h2>Upload Documents</h2>
            <div className="alert error">
              Uploaded file exceeds 5MB or unsupported format.
            </div>

            <label>Front Page of Document</label>
            <div className="upload-box">
              <input type="file" hidden />
              <label className="upload-text">
                <u>Click to Upload</u> <span>(Max size 5mb)</span>
              </label>
            </div>
            <div className="spacer">
              <label>Back Page of Document</label>
              <label className="upload-box">
                <input type="file" hidden />
                <label className="upload-text">
                  <u>Click to Upload</u> <span>(Max size 5mb)</span>
                </label>
              </label>
            </div>

            <div className="actions">
              <button className="btn-cancel" onClick={handleBack}>
                Back
              </button>
              <button className="btn-next" onClick={handleNext}>
                Next
              </button>
            </div>
          </section>
        </div>
      )}

      {/* SECTION 3: SELFIE INSTRUCTIONS */}
      {currentStep === 3 && (
        <div className="selfie_instruction">
          <div className="logo">
            <img src={logoBlack} alt="privyID logo" />
          </div>

          <section id="selfie-info">
            <h2>Selfie Verification</h2>

            <p>Before you take a selfie, please checkout the instructions below:</p>

            <div className="instructions">
              <ul>
                <li>Remove hats, glasses, and face coverings</li>
                <li>Make sure you're in a well-lit area</li>
                <li>Look straight at the camera</li>
                <li>Keep your face fully within the frame</li>
                <li>Avoid blur or motion</li>
              </ul>
            </div>

            <div className="actions">
              <button className="btn-cancel" onClick={handleBack}>
                Back
              </button>
              <button className="btn-next" onClick={handleNext}>
                Take Selfie
              </button>
            </div>
          </section>
        </div>
      )}

      {/* SECTION 4: SELFIE CAPTURE */}
      {currentStep === 4 && (
        <div className="selfie_capture">
          <div className="logo">
            <img src={logoBlack} alt="privyID logo" />
          </div>

          <section id="selfie-capture">
            <h2 className="center">Your face should fit in the frame</h2>

            <div className="camera-frame"></div>

            <div className="center">
              <button className="btn-capture" onClick={handleCapture}>
                Capture
              </button>
            </div>

            <div className="alert success">Selfie captured successfully.</div>
          </section>
        </div>
      )}

      {/* SECTION 5: SUCCESS/FAILED SCREEN PAGE */}
      {currentStep === 5 && (
        <div className="screen success">
          <header className="logo">
            <img src={logoBlack} alt="privyID logo" />
          </header>

          <section className="status">
            <div className="icon">
              {/* Check or exclamation handled in CSS */}
            </div>

            <p className="message">Verification Successful</p>

            {/* For failed state change text to: Verification Failed */}
          </section>
        </div>
      )}
    </div>
  );
};

export default MobileVerificationPage;
