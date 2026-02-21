/**
 * mobile-verification.js
 * Step-based flow controller for the Mobile Verification page.
 * Controls: step navigation, form validation, file upload, camera, and submission.
 */

// ============================
// STATE
// ============================
const TOTAL_STEPS = 4;
let currentStep = 1;
let cameraStream = null;
let capturedImageData = null;
let uploadedFront = false;
let uploadedBack = false;

// ============================
// STEP NAVIGATION
// ============================

/**
 * Navigate to a specific step.
 * @param {number} stepNum - target step (1-4, or 'success')
 * @param {boolean} [startCamera] - if true, attempt to start camera after switching
 */
function goToStep(stepNum, startCamera = false) {
  // Validate step 1 fields before proceeding
  if (stepNum === 2 && !validateStep1()) return;

  // Hide current step
  const allSteps = document.querySelectorAll(".mvf_step");
  allSteps.forEach((s) => s.classList.remove("active"));

  // Show target step
  const target = document.getElementById(
    stepNum === "success" ? "step_success" : `step_${stepNum}`,
  );
  if (target) target.classList.add("active");

  currentStep = typeof stepNum === "number" ? stepNum : TOTAL_STEPS;
  updateProgressBar();

  // Start camera when entering step 4
  if (startCamera || stepNum === 4) {
    startCameraStream();
  }
}

/**
 * Update the width of the progress fill bar.
 */
function updateProgressBar() {
  const fill = document.getElementById("mvf_progress_fill");
  if (!fill) return;
  const pct = Math.min((currentStep / TOTAL_STEPS) * 100, 100);
  fill.style.width = pct + "%";
}

/**
 * Cancel the flow — could redirect or just show a cancelled state.
 */
function cancelFlow() {
  if (confirm("Are you sure you want to cancel verification?")) {
    // In a real app you'd close the window or redirect.
    window.history.back();
  }
}

// ============================
// STEP 1 VALIDATION
// ============================
function validateStep1() {
  const firstName = document.getElementById("first_name").value.trim();
  const lastName = document.getElementById("last_name").value.trim();
  const vType = document.getElementById("verification_type").value;
  const idNumber = document.getElementById("id_number").value.trim();
  const errorEl = document.getElementById("step1_error");

  if (!firstName || !lastName || !vType || !idNumber) {
    showAlert(errorEl, "Please fill all required fields correctly.");
    return false;
  }

  hideAlert(errorEl);
  return true;
}

// ============================
// STEP 2 VALIDATION
// ============================
function validateStep2() {
  const errorEl = document.getElementById("step2_error");

  if (!uploadedFront || !uploadedBack) {
    showAlert(
      errorEl,
      "Please upload both the front and back of your document.",
    );
    return;
  }

  hideAlert(errorEl);
  goToStep(3);
}

// ============================
// FILE UPLOAD HANDLING
// ============================

/**
 * Programmatically trigger the hidden file input.
 * @param {string} inputId - id of the <input type="file">
 */
function triggerUpload(inputId) {
  document.getElementById(inputId).click();
}

/**
 * Handle file selection — validate and display the file name.
 * @param {HTMLInputElement} input
 * @param {string} boxId - id of the upload box wrapper
 * @param {string} nameId - id of the file name span
 */
function handleFileUpload(input, boxId, nameId) {
  const file = input.files[0];
  const errorEl = document.getElementById("step2_error");

  if (!file) return;

  // Validate file type
  const allowed = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
  if (!allowed.includes(file.type)) {
    showAlert(errorEl, "Unsupported file format. Please use JPG or PNG.");
    input.value = "";
    return;
  }

  // Validate file size (5 MB)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    showAlert(errorEl, "File exceeds 5MB. Please upload a smaller image.");
    input.value = "";
    return;
  }

  hideAlert(errorEl);

  // Show file name and mark box as uploaded
  const box = document.getElementById(boxId);
  const nameSpan = document.getElementById(nameId);
  nameSpan.textContent = file.name;
  box.classList.add("uploaded");

  // Track upload state
  if (boxId === "upload_front_box") uploadedFront = true;
  if (boxId === "upload_back_box") uploadedBack = true;
}

// ============================
// CAMERA HANDLING
// ============================

/**
 * Request camera access and start the video stream.
 */
async function startCameraStream() {
  const video = document.getElementById("mvf_camera_video");
  const canvas = document.getElementById("mvf_camera_canvas");
  const capturedImg = document.getElementById("mvf_captured_preview");
  const errorAlert = document.getElementById("selfie_error_alert");
  const successAlert = document.getElementById("selfie_success_alert");
  const btnCapture = document.getElementById("btn_capture");
  const btnRetake = document.getElementById("btn_retake");
  const btnSubmit = document.getElementById("btn_submit");

  // Reset state
  capturedImageData = null;
  capturedImg.hidden = true;
  video.hidden = false;
  hideAlert(successAlert);
  hideAlert(errorAlert);
  btnCapture.hidden = false;
  btnRetake.hidden = true;
  btnSubmit.hidden = true;

  try {
    // Stop any existing stream first
    if (cameraStream) {
      cameraStream.getTracks().forEach((t) => t.stop());
      cameraStream = null;
    }

    // Request front-facing camera
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user", // front camera
        width: { ideal: 640 },
        height: { ideal: 800 },
      },
      audio: false,
    });

    video.srcObject = cameraStream;
    await video.play();

    hideAlert(errorAlert);
  } catch (err) {
    console.error("Camera error:", err);
    showAlert(
      errorAlert,
      "Camera access denied. Please allow camera permission and try again.",
    );
  }
}

/**
 * Capture a still frame from the video stream.
 */
function captureSelfie() {
  const video = document.getElementById("mvf_camera_video");
  const canvas = document.getElementById("mvf_camera_canvas");
  const capturedImg = document.getElementById("mvf_captured_preview");
  const successAlert = document.getElementById("selfie_success_alert");
  const btnCapture = document.getElementById("btn_capture");
  const btnRetake = document.getElementById("btn_retake");
  const btnSubmit = document.getElementById("btn_submit");

  if (!cameraStream) {
    startCameraStream();
    return;
  }

  // Draw current frame to canvas
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");

  // Mirror the capture to match the mirrored video display
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Get image data
  capturedImageData = canvas.toDataURL("image/jpeg", 0.92);

  // Show preview instead of live feed
  capturedImg.src = capturedImageData;
  capturedImg.hidden = false;
  video.hidden = true;

  // Stop the camera stream (good for battery / privacy)
  cameraStream.getTracks().forEach((t) => t.stop());
  cameraStream = null;

  // Update UI
  showAlert(successAlert, "✓ Selfie captured successfully!");
  btnCapture.hidden = true;
  btnRetake.hidden = false;
  btnSubmit.hidden = false;
}

/**
 * Discard captured selfie and restart camera.
 */
function retakeSelfie() {
  capturedImageData = null;
  const successAlert = document.getElementById("selfie_success_alert");
  hideAlert(successAlert);
  startCameraStream();
}

// ============================
// SUBMISSION
// ============================

/**
 * Simulate submitting the verification. Replace with real API call.
 */
function submitVerification() {
  // Stop camera if still running
  if (cameraStream) {
    cameraStream.getTracks().forEach((t) => t.stop());
    cameraStream = null;
  }

  // In a real project: send form data + capturedImageData to your API here.
  // We show the success screen.
  setResultScreen(
    true,
    "Verification Successful",
    "Your identity has been verified. You may now close this window.",
  );
  goToStep("success");
}

/**
 * Configure the result screen.
 * @param {boolean} success
 * @param {string} title
 * @param {string} message
 */
function setResultScreen(success, title, message) {
  const icon = document.getElementById("result_icon");
  const titleEl = document.getElementById("result_title");
  const msgEl = document.getElementById("result_msg");

  icon.className =
    "mvf_result_icon " + (success ? "mvf_result_success" : "mvf_result_failed");
  icon.innerHTML = success ? "<span>&#10003;</span>" : "<span>&#33;</span>";
  titleEl.textContent = title;
  msgEl.textContent = message;
}

// ============================
// ALERT HELPERS
// ============================

function showAlert(el, message) {
  if (!el) return;
  el.textContent = message;
  el.classList.add("visible");
}

function hideAlert(el) {
  if (!el) return;
  el.classList.remove("visible");
}

// ============================
// INIT
// ============================
document.addEventListener("DOMContentLoaded", () => {
  // Start on step 1
  updateProgressBar();

  // Clean up camera if user navigates away
  window.addEventListener("beforeunload", () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((t) => t.stop());
    }
  });

  // Prevent step 4 camera from being started accidentally when going back from step 4
  // (it's only started when explicitly navigating to step 4)
});
