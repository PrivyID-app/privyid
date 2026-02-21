import React, { useState, useRef, useEffect, useCallback } from "react";
import "./mobile-verification.css";
import Logo from "../../assets/images/Logo black.svg";

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────
const TOTAL_STEPS = 4;

const SELFIE_INSTRUCTIONS = [
  { icon: "👀", text: "Look straight at the camera" },
  { icon: "☀️", text: "Make sure you're in a well-lit area" },
  { icon: "👒", text: "Remove hats, glasses, and face coverings" },
  { icon: "📷", text: "Keep your face fully within the frame" },
  { icon: "🚫", text: "Avoid blur or sudden movement" },
];

const VERIFICATION_TYPES = [
  { value: "national_id", label: "National ID" },
  { value: "passport", label: "Passport" },
  { value: "drivers_license", label: "Driver's License" },
];

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
const MobileVerificationPage = () => {
  // Step: 1 | 2 | 3 | 4 | "success"
  const [step, setStep] = useState(1);

  // Step 1 form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    verificationType: "",
    idNumber: "",
  });
  const [step1Error, setStep1Error] = useState("");

  // Step 2 upload state
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [step2Error, setStep2Error] = useState("");

  // Step 4 camera state
  const [cameraError, setCameraError] = useState("");
  const [selfieSuccess, setSelfieSuccess] = useState(false);
  const [capturedDataUrl, setCapturedDataUrl] = useState(null);

  // Refs
  const frontInputRef = useRef(null);
  const backInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const capturedImgRef = useRef(null);
  const streamRef = useRef(null);

  // ── Progress bar percentage ──────────────────
  const progressPct =
    step === "success" ? 100 : Math.min((step / TOTAL_STEPS) * 100, 100);

  // ── Clean up camera on unmount ───────────────
  useEffect(() => {
    return () => stopStream();
  }, []);

  // ── Camera helpers ───────────────────────────
  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
  };

  const startCameraStream = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    setCameraError("");
    setSelfieSuccess(false);
    setCapturedDataUrl(null);

    // Reset visibility
    video.hidden = false;
    if (capturedImgRef.current) capturedImgRef.current.hidden = true;

    stopStream();

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 640 },
          height: { ideal: 800 },
        },
        audio: false,
      });
      streamRef.current = stream;
      video.srcObject = stream;
      await video.play();
    } catch (err) {
      console.error("Camera error:", err);
      setCameraError(
        "Camera access denied. Please allow camera permission and try again.",
      );
    }
  }, []);

  // ── Navigation ───────────────────────────────
  const goToStep = (targetStep, openCamera = false) => {
    if (targetStep === 2 && !validateStep1()) return;
    if (targetStep === 3) stopStream(); // leave step 4 camera if going back
    setStep(targetStep);
    if (openCamera || targetStep === 4) {
      // startCameraStream is called via useEffect below
    }
  };

  // Start camera when step 4 becomes active
  useEffect(() => {
    if (step === 4) {
      startCameraStream();
    } else {
      stopStream();
    }
  }, [step, startCameraStream]);

  const cancelFlow = () => {
    if (window.confirm("Are you sure you want to cancel verification?")) {
      window.history.back();
    }
  };

  // ── Step 1 Validation ────────────────────────
  const validateStep1 = () => {
    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.verificationType ||
      !form.idNumber.trim()
    ) {
      setStep1Error("Please fill all required fields correctly.");
      return false;
    }
    setStep1Error("");
    return true;
  };

  // ── Step 2 Validation ────────────────────────
  const validateStep2 = () => {
    if (!frontFile || !backFile) {
      setStep2Error("Please upload both the front and back of your document.");
      return;
    }
    setStep2Error("");
    setStep(3);
  };

  // ── File Upload Handler ──────────────────────
  const handleFileChange = (e, side) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setStep2Error("Unsupported file format. Please use JPG or PNG.");
      e.target.value = "";
      return;
    }
    if (file.size > MAX_SIZE) {
      setStep2Error("File exceeds 5MB. Please upload a smaller image.");
      e.target.value = "";
      return;
    }

    setStep2Error("");
    if (side === "front") setFrontFile(file);
    if (side === "back") setBackFile(file);
  };

  // ── Selfie Capture ───────────────────────────
  const captureSelfie = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!streamRef.current || !video || !canvas) {
      startCameraStream();
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    // Mirror to match front-camera feel
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
    setCapturedDataUrl(dataUrl);
    setSelfieSuccess(true);

    // Stop stream after capture
    stopStream();
    video.hidden = true;
    if (capturedImgRef.current) {
      capturedImgRef.current.src = dataUrl;
      capturedImgRef.current.hidden = false;
    }
  };

  const retakeSelfie = () => {
    setCapturedDataUrl(null);
    setSelfieSuccess(false);
    startCameraStream();
  };

  // ── Submit Verification ──────────────────────
  const submitVerification = () => {
    stopStream();
    setStep("success");
  };

  // ─────────────────────────────────────────────
  // Render Steps
  // ─────────────────────────────────────────────

  const renderStep1 = () => (
    <div className={`mvf_step active`} id="step_1">
      <div className="mvf_header">
        <div className="mvf_logo">
          <img src={Logo} alt="PrivyID logo" />
        </div>
        <div className="mvf_step_label">Step 1 of 4</div>
      </div>

      <div className="mvf_body">
        <h2 className="mvf_title">Enter Your Details</h2>
        <p className="mvf_subtitle">
          Please provide your information to begin verification.
        </p>

        {step1Error && (
          <div className="mvf_alert mvf_alert_error visible">
            <span className="mvf_alert_icon">⚠</span>
            {step1Error}
          </div>
        )}

        <div className="mvf_form_group">
          <label className="mvf_label" htmlFor="first_name">
            First Name <span className="mvf_required">*</span>
          </label>
          <input
            className="mvf_input"
            id="first_name"
            type="text"
            placeholder="e.g. John"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
        </div>

        <div className="mvf_form_group">
          <label className="mvf_label" htmlFor="last_name">
            Last Name <span className="mvf_required">*</span>
          </label>
          <input
            className="mvf_input"
            id="last_name"
            type="text"
            placeholder="e.g. Doe"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
        </div>

        <div className="mvf_form_group">
          <label className="mvf_label" htmlFor="verification_type">
            Verification Type <span className="mvf_required">*</span>
          </label>
          <select
            className="mvf_select"
            id="verification_type"
            value={form.verificationType}
            onChange={(e) =>
              setForm({ ...form, verificationType: e.target.value })
            }
          >
            <option value="">Select Verification Type</option>
            {VERIFICATION_TYPES.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="mvf_form_group">
          <label className="mvf_label" htmlFor="id_number">
            ID Number <span className="mvf_required">*</span>
          </label>
          <input
            className="mvf_input"
            id="id_number"
            type="text"
            placeholder="e.g. AYHUIN3779NBK"
            value={form.idNumber}
            onChange={(e) => setForm({ ...form, idNumber: e.target.value })}
          />
        </div>
      </div>

      <div className="mvf_actions">
        <button className="secondary_button" onClick={cancelFlow}>
          Cancel
        </button>
        <button className="primary_button" onClick={() => goToStep(2)}>
          Next →
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="mvf_step active" id="step_2">
      <div className="mvf_header">
        <div className="mvf_logo">
          <img src={Logo} alt="PrivyID logo" />
        </div>
        <div className="mvf_step_label">Step 2 of 4</div>
      </div>

      <div className="mvf_body">
        <h2 className="mvf_title">Upload Documents</h2>
        <p className="mvf_subtitle">Upload clear photos of your ID document.</p>

        {step2Error && (
          <div className="mvf_alert mvf_alert_error visible">
            <span className="mvf_alert_icon">⚠</span>
            {step2Error}
          </div>
        )}

        {/* Front Page */}
        <div className="mvf_form_group">
          <label className="mvf_label">
            Front Page <span className="mvf_required">*</span>
          </label>
          <div
            className={`mvf_upload_box${frontFile ? " uploaded" : ""}`}
            onClick={() => frontInputRef.current?.click()}
          >
            <input
              type="file"
              ref={frontInputRef}
              accept="image/*"
              hidden
              onChange={(e) => handleFileChange(e, "front")}
            />
            <span className="material-symbols-outlined mvf_upload_icon">
              upload_file
            </span>
            <div className="mvf_upload_text">
              <span className="mvf_upload_link">Click to Upload</span>
              <span className="mvf_upload_hint">JPG, PNG • Max 5MB</span>
            </div>
            {frontFile && (
              <span className="mvf_file_name">{frontFile.name}</span>
            )}
          </div>
        </div>

        {/* Back Page */}
        <div className="mvf_form_group">
          <label className="mvf_label">
            Back Page <span className="mvf_required">*</span>
          </label>
          <div
            className={`mvf_upload_box${backFile ? " uploaded" : ""}`}
            onClick={() => backInputRef.current?.click()}
          >
            <input
              type="file"
              ref={backInputRef}
              accept="image/*"
              hidden
              onChange={(e) => handleFileChange(e, "back")}
            />
            <span className="material-symbols-outlined mvf_upload_icon">
              upload_file
            </span>
            <div className="mvf_upload_text">
              <span className="mvf_upload_link">Click to Upload</span>
              <span className="mvf_upload_hint">JPG, PNG • Max 5MB</span>
            </div>
            {backFile && <span className="mvf_file_name">{backFile.name}</span>}
          </div>
        </div>
      </div>

      <div className="mvf_actions">
        <button className="secondary_button" onClick={() => setStep(1)}>
          ← Back
        </button>
        <button className="primary_button" onClick={validateStep2}>
          Next →
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="mvf_step active" id="step_3">
      <div className="mvf_header">
        <div className="mvf_logo">
          <img src={Logo} alt="PrivyID logo" />
        </div>
        <div className="mvf_step_label">Step 3 of 4</div>
      </div>

      <div className="mvf_body">
        <h2 className="mvf_title">Selfie Verification</h2>
        <p className="mvf_subtitle">
          Before you take a selfie, please read the instructions below:
        </p>

        <div className="mvf_instructions_list">
          {SELFIE_INSTRUCTIONS.map(({ icon, text }, i) => (
            <div key={i} className="mvf_instruction_item">
              <div className="mvf_instruction_icon">{icon}</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mvf_actions">
        <button className="secondary_button" onClick={() => setStep(2)}>
          ← Back
        </button>
        <button className="primary_button" onClick={() => setStep(4)}>
          Open Camera
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="mvf_step active" id="step_4">
      <div className="mvf_header">
        <div className="mvf_logo">
          <img src={Logo} alt="PrivyID logo" />
        </div>
        <div className="mvf_step_label">Step 4 of 4</div>
      </div>

      <div className="mvf_body mvf_body_camera">
        <h2 className="mvf_title mvf_title_center">
          Position your face in the frame
        </h2>

        <div className="mvf_camera_wrapper">
          <video
            ref={videoRef}
            id="mvf_camera_video"
            autoPlay
            playsInline
            muted
          />
          <canvas ref={canvasRef} id="mvf_camera_canvas" hidden />
          <div className="mvf_camera_overlay">
            <div className="mvf_camera_oval" />
          </div>
          <img
            ref={capturedImgRef}
            id="mvf_captured_preview"
            className="mvf_captured_img"
            src=""
            alt="Captured selfie"
            hidden
          />
        </div>

        {selfieSuccess && (
          <div className="mvf_alert mvf_alert_success visible">
            ✓ Selfie captured successfully!
          </div>
        )}
        {cameraError && (
          <div className="mvf_alert mvf_alert_error visible">
            ⚠ {cameraError}
          </div>
        )}
      </div>

      <div className="mvf_actions mvf_actions_camera">
        {capturedDataUrl && (
          <button
            id="btn_retake"
            className="secondary_button"
            onClick={retakeSelfie}
          >
            ← Retake
          </button>
        )}
        {!capturedDataUrl && (
          <button
            id="btn_capture"
            className="primary_button"
            onClick={captureSelfie}
          >
            ⏺ Capture
          </button>
        )}
        {capturedDataUrl && (
          <button
            id="btn_submit"
            className="primary_button mvf_btn_full"
            onClick={submitVerification}
          >
            Submit →
          </button>
        )}
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="mvf_step active" id="step_success">
      <div className="mvf_header">
        <div className="mvf_logo">
          <img src={Logo} alt="PrivyID logo" />
        </div>
      </div>

      <div className="mvf_body mvf_body_result">
        <div className="mvf_result_icon mvf_result_success">
          <span>✓</span>
        </div>
        <h2 className="mvf_result_title">Verification Successful</h2>
        <p className="mvf_result_msg">
          Your identity has been verified. You may now close this window.
        </p>
      </div>

      <div className="mvf_actions">
        <button
          className="primary_button mvf_btn_full"
          onClick={() => window.close()}
        >
          Close
        </button>
      </div>
    </div>
  );

  // ─────────────────────────────────────────────
  // Main Render
  // ─────────────────────────────────────────────
  return (
    <div className="mvf_outer">
      <div className="mvf_device">
        {/* Progress Bar */}
        <div className="mvf_progress_bar">
          <div
            className="mvf_progress_fill"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Steps Container */}
        <div className="mvf_steps_container">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
          {step === "success" && renderSuccess()}
        </div>
      </div>
    </div>
  );
};

export default MobileVerificationPage;
