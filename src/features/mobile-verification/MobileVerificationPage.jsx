import React, { useState, useEffect } from "react";
import "./mobile-verification.css";
import Logo from "../../assets/images/privyid-admin.svg";
import { supabase } from "../../shared/services/supabase";

const MobileVerificationPage = () => {
  const [step, setStep] = useState(1); // 1: Get Started, 2: Face Verification, 3: Review Photo, 4: Processing, 5: Success
  const [capturedFace, setCapturedFace] = useState(null);
  const [processingStatus, setProcessingStatus] = useState("");
  const [merchantId, setMerchantId] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const mId = urlParams.get("merchant_id");
    if (mId) {
      setMerchantId(mId);
    }
  }, []);

  const handleCaptureFace = () => {
    setCapturedFace("captured");
    setStep(3);
  };

  const handleSubmit = async () => {
    setStep(4);
    setProcessingStatus("uploading");

    try {
      await new Promise((r) => setTimeout(r, 1500));
      setProcessingStatus("analyzing");
      await new Promise((r) => setTimeout(r, 2000));
      setProcessingStatus("verifying");
      await new Promise((r) => setTimeout(r, 1500));

      const mId = merchantId || "unknown_merchant";

      const { error } = await supabase.from("verifications").insert([
        {
          merchant_id: mId,
          verification_type: "kyc",
          status: "pending",
          customer_name: "Mobile User",
          user_identifier:
            "mobile_user_" + Math.random().toString(36).substring(7),
          metadata: {
            id_type: "Passport",
            id_number: "P" + Math.floor(Math.random() * 1000000),
            full_name: "Mobile User Test",
            source: "mobile_link",
          },
        },
      ]);

      if (error) throw error;
      setStep(5);
    } catch (error) {
      console.error("Verification error:", error);
      alert("Verification failed. Please try again.");
      setStep(1);
    }
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="mobile_step_content">
            <h1 className="mobile_title">Verify your identity</h1>
            <p className="mobile_desc">
              Please have your ID document ready. We'll need to take a photo of
              it and a quick selfie.
            </p>
            <div className="mobile_illustration">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "80px", color: "#5AC4AF" }}
              >
                badge
              </span>
            </div>
            <button className="mobile_primary_btn" onClick={() => setStep(2)}>
              Get Started
            </button>
          </div>
        );
      case 2:
        return (
          <div className="mobile_step_content">
            <h1 className="mobile_title">Face Verification</h1>
            <p className="mobile_desc">
              Position your face within the frame and look directly at the
              camera.
            </p>
            <div className="camera_view_simulator">
              <div className="camera_overlay_frame"></div>
              <div className="camera_placeholder">
                <span className="material-symbols-outlined">person</span>
              </div>
            </div>
            <button className="mobile_primary_btn" onClick={handleCaptureFace}>
              Capture Photo
            </button>
          </div>
        );
      case 3:
        return (
          <div className="mobile_step_content">
            <h1 className="mobile_title">Review Photo</h1>
            <p className="mobile_desc">
              Make sure your face is clearly visible and not blurry.
            </p>
            <div className="captured_preview">
              <div className="preview_placeholder">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "60px", color: "#5AC4AF" }}
                >
                  check_circle
                </span>
                <p>Photo Captured</p>
              </div>
            </div>
            <div className="mobile_btn_group">
              <button
                className="mobile_secondary_btn"
                onClick={() => setStep(2)}
              >
                Retake
              </button>
              <button className="mobile_primary_btn" onClick={handleSubmit}>
                Submit Verification
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="mobile_step_content">
            <div className="processing_container">
              <div className="mobile_spinner"></div>
              <h2 className="mobile_title" style={{ marginTop: "24px" }}>
                {processingStatus === "uploading" && "Uploading data..."}
                {processingStatus === "analyzing" &&
                  "Analyzing identity documents..."}
                {processingStatus === "verifying" &&
                  "Finalizing verification..."}
              </h2>
              <p className="mobile_desc">
                This usually takes a few seconds. Do not close this window.
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="mobile_step_content">
            <div className="success_animation">
              <span
                className="material-symbols-outlined success_icon"
                style={{ fontSize: "80px", color: "#5AC4AF" }}
              >
                check_circle
              </span>
            </div>
            <h1 className="mobile_title">Verification Submitted!</h1>
            <p className="mobile_desc">
              Thank you. Your identity verification has been submitted for
              processing. You can now close this window.
            </p>
            <button
              className="mobile_primary_btn"
              onClick={() => window.close()}
            >
              Done
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mobile_verification_container">
      <div className="mobile_header">
        <img
          src={Logo}
          alt="Logo"
          className="mobile_logo"
          style={{ width: "120px" }}
        />
      </div>
      <div className="mobile_progress_bar">
        <div
          className="progress_inner"
          style={{ width: `${(step / 5) * 100}%` }}
        ></div>
      </div>
      <div className="mobile_content_wrapper">{renderCurrentStep()}</div>

      <style>{`
        .mobile_verification_container {
          min-height: 100vh;
          background: #fff;
          display: flex;
          flex-direction: column;
          font-family: sans-serif;
        }
        .mobile_header {
          padding: 20px;
          display: flex;
          justify-content: center;
          border-bottom: 1px solid #eee;
        }
        .mobile_progress_bar {
          height: 4px;
          background: #eee;
          width: 100%;
        }
        .progress_inner {
          height: 100%;
          background: #5AC4AF;
          transition: width 0.3s ease;
        }
        .mobile_content_wrapper {
          flex: 1;
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .mobile_title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
        }
        .mobile_desc {
          font-size: 16px;
          color: #666;
          line-height: 1.5;
          margin-bottom: 32px;
        }
        .mobile_illustration {
          margin: 40px 0;
        }
        .mobile_primary_btn {
          width: 100%;
          padding: 16px;
          background: #5AC4AF;
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          margin-top: auto;
        }
        .mobile_secondary_btn {
          width: 100%;
          padding: 16px;
          background: #f3f4f6;
          color: #1a1a1a;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
        .mobile_btn_group {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
        }
        .camera_view_simulator {
          width: 100%;
          aspect-ratio: 3/4;
          background: #000;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .camera_overlay_frame {
          position: absolute;
          width: 70%;
          height: 60%;
          border: 2px solid rgba(255,255,255,0.5);
          border-radius: 50% 50% 45% 45%;
          box-shadow: 0 0 0 9999px rgba(0,0,0,0.5);
        }
        .camera_placeholder .material-symbols-outlined {
          font-size: 80px;
          color: rgba(255,255,255,0.2);
        }
        .captured_preview {
          width: 100%;
          aspect-ratio: 3/4;
          background: #f9fafb;
          border-radius: 16px;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed #eee;
        }
        .processing_container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 0;
        }
        .mobile_spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(90, 196, 175, 0.2);
          border-top: 4px solid #5AC4AF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default MobileVerificationPage;
