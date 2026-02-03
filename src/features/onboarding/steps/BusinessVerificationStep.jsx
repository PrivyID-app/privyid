import React, { useState } from "react";
import { ACCOUNT_TYPE_STEPS } from "../onboarding.constants";
import selectBoxFill from "../../../assets/images/select-box-circle-fill.svg";
import selectBoxInactive from "../../../assets/images/select-box-circle-fill-inactive.svg";
import infoIcon from "../../../assets/images/information-fill-dark.svg";

export const BusinessVerificationLeftContent = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="info_modal dark">
      <div className="modal_icon">
        <img src={infoIcon} alt="Info" className="info_icon" />
      </div>

      <div className="modal_content">
        <div className="modal_title">
          <p className="modal_content_title">
            Expected Processing Time - 24 hours
          </p>
          <span
            className="material-symbols-outlined hide_icon close_icon"
            onClick={() => setIsVisible(false)}
          >
            close
          </span>
        </div>
        <p className="modal_content_text">
          You'll receive an email once your business is verified. You can still
          explore the dashboard in the meantime.
        </p>
      </div>
    </div>
  );
};

export const BusinessVerificationLeftTopContent = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="info_modal white">
      <div className="modal_icon">
        <img src={infoIcon} alt="Info" className="info_icon" />
      </div>

      <div className="modal_content">
        <div className="modal_title">
          <p className="modal_content_title">Why KYB?</p>
          <span
            className="material-symbols-outlined close_icon"
            onClick={() => setIsVisible(false)}
          >
            close
          </span>
        </div>
        <p className="modal_content_text">
          KYB verification helps us ensure platform security, prevent fraud, and
          meet regulatory requirements. Most verifications are approved within
          24 hours.
        </p>
      </div>
    </div>
  );
};

const BusinessVerificationStep = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    business_name: "",
    business_type: "",
    registration_number: "",
    tax_id: "",
    country: "",
    business_address: "",
    supporting_documents: null,
  });

  const [isDragging, setIsDragging] = useState(false);

  const currentSubStep = 2; // Index for 'KYB Verification' in ACCOUNT_TYPE_STEPS

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, supporting_documents: file }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, supporting_documents: file }));
    }
  };

  const isFormValid =
    formData.business_name &&
    formData.business_type &&
    formData.registration_number &&
    formData.tax_id &&
    formData.country &&
    formData.business_address;

  return (
    <div className="business_verification">
      <div className="plan_type">
        <div className="onboarding_steps_container">
          {ACCOUNT_TYPE_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`onboarding_step_item ${idx <= currentSubStep ? "active" : ""}`}
            >
              <div className="onboarding_dot">
                <img
                  src={selectBoxFill}
                  alt="select-box-circle-fill"
                  className="active_dot"
                />
                <img
                  src={selectBoxInactive}
                  alt="select-box-circle-fill-inactive"
                  className="inactive_dot"
                />
              </div>
              <p className="onboarding_step_text">{step.name}</p>
            </div>
          ))}
        </div>

        <div className="onboarding_step_title">
          <p className="onboarding_step_title_text_bg">
            Business Verification (KYB)
          </p>
          <p className="onboarding_step_title_text_sm">
            To maintain platform integrity and comply with regulations, we need
            to verify your business.
          </p>
        </div>

        <div className="business_verification_body">
          <form
            id="business_verification_form"
            className="business_verification_form"
            noValidate
          >
            <div className="bv_input_group">
              <label htmlFor="business_name">
                Business Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="business_name"
                name="business_name"
                required
                placeholder="Enter Business Name"
                value={formData.business_name}
                onChange={handleInputChange}
              />
            </div>

            <div className="bv_input_group">
              <div className="service_selector_dropdown bv_selector">
                <label htmlFor="business_type">
                  Business Type <span className="required">*</span>
                </label>
                <select
                  name="business_type"
                  id="business_type"
                  value={formData.business_type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    --- Select Business Type ---
                  </option>
                  <option value="llc"> LLC</option>
                  <option value="corporation"> Corporation</option>
                  <option value="partnership"> Partnership</option>
                  <option value="s-corporation"> S-Corporation</option>
                  <option value="other"> Other</option>
                </select>
                <span className="material-symbols-outlined select_chevron">
                  expand_more
                </span>
              </div>
            </div>

            <div className="bv_input_group">
              <label htmlFor="registration_number">
                Registration Number <span className="required">*</span>
              </label>
              <input
                type="text"
                id="registration_number"
                name="registration_number"
                required
                placeholder="Enter Registration Number"
                value={formData.registration_number}
                onChange={handleInputChange}
              />
            </div>

            <div className="bv_input_group">
              <label htmlFor="tax_id">
                Tax ID <span className="required">*</span>
              </label>
              <input
                type="text"
                id="tax_id"
                name="tax_id"
                required
                placeholder="Enter Tax ID"
                value={formData.tax_id}
                onChange={handleInputChange}
              />
            </div>

            <div className="bv_input_group">
              <div className="country_selector bv_selector">
                <label htmlFor="country">
                  Country <span className="required">*</span>
                </label>
                <select
                  name="country"
                  id="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    --- Select Country ---
                  </option>
                  <option value="ng">Nigeria</option>
                  <option value="us"> United States</option>
                  <option value="canada"> Canada</option>
                  <option value="uk"> United Kingdom</option>
                  <option value="australia"> Australia</option>
                  <option value="other"> Other</option>
                </select>
                <span className="material-symbols-outlined select_chevron">
                  expand_more
                </span>
              </div>
            </div>

            <div className="bv_input_group bv_textarea">
              <label htmlFor="business_address">
                Business Address <span className="required">*</span>
              </label>
              <textarea
                id="business_address"
                name="business_address"
                required
                placeholder="Enter Business Address"
                value={formData.business_address}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="supporting_documents">
              <label htmlFor="supporting_documents">
                Supporting Documents <span className="required">*</span>
              </label>
              <label
                className={`file_dropzone ${isDragging ? "dragover" : ""}`}
                htmlFor="supporting_documents"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="dropzone_content">
                  <div className="dropzone_icon">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "2.5rem" }}
                    >
                      cloud_upload
                    </span>
                  </div>

                  <p className="dropzone_text">
                    {formData.supporting_documents ? (
                      <strong>{formData.supporting_documents.name}</strong>
                    ) : (
                      <>
                        <strong>Choose a file</strong> or drag & drop it here.
                      </>
                    )}
                  </p>

                  <p className="dropzone_hint">
                    JPEG, PNG, PDF, and MP4 formats, up to 50 MB.
                  </p>

                  <span className="browse_button">Browse File</span>
                </div>
              </label>

              <input
                type="file"
                id="supporting_documents"
                name="supporting_documents"
                required
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          </form>
        </div>

        <div className="button_wrapper">
          <button className="back_button" onClick={onBack}>
            Back
          </button>
          <button
            className="next_button"
            onClick={onNext}
            disabled={!isFormValid}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessVerificationStep;
