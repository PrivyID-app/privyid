import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerticalStepIndicator from "../../../shared/components/VerticalStepIndicator";
import "../../merchant-kyc/pages/SingleVerification.css"; // Reuse KYC styles

// Icons
import UserIcon from "../../../assets/images/user-6-line.svg";
import BodyScanGrey from "../../../assets/images/body-scan-line-grey.svg";
import BodyScanGreen from "../../../assets/images/body-scan-line-green.svg";
import FileTextGrey from "../../../assets/images/file-text-line-grey.svg";
import FileTextActive from "../../../assets/images/file-text-line.svg";
import CardPatternWhite from "../../../assets/images/card-pattern-white-bg.svg";
import CardPatternBlack from "../../../assets/images/card-pattern.svg";
import CheckboxIcon from "../../../assets/images/Checkbox [1.0].svg";

const SingleVerification = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: "", // Adapted for KYB
    businessEmail: "", // Adapted for KYB
    regNumber: "", // Adapted for KYB
    idType: "",
  });

  const steps = [
    {
      title: "Business Information",
      subtitle: "Enter Business Details",
      activeIcon: UserIcon,
      inactiveIcon: UserIcon,
    },
    {
      title: "Business Verification",
      subtitle: "Select Verification Type",
      activeIcon: BodyScanGreen,
      inactiveIcon: BodyScanGrey,
    },
    {
      title: "Review Data",
      subtitle: "Details of Verified Records",
      activeIcon: FileTextActive,
      inactiveIcon: FileTextGrey,
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Reset the flow to Step 1
    setCurrentStep(0);
    setFormData({
      businessName: "",
      businessEmail: "",
      regNumber: "",
      idType: "",
    });
  };

  const updateFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectIdType = (type) => {
    setFormData((prev) => ({ ...prev, idType: type }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="personal_info_content">
            <form
              className="user_info_form"
              onSubmit={(e) => {
                e.preventDefault();
                handleNext();
              }}
            >
              <div className="merch_kyc_service">
                <div className="report_container_title">
                  <p>Business Information</p>
                </div>
                <div className="input_group">
                  <label className="input_label" htmlFor="businessName">
                    Business Name
                  </label>
                  <div className="input_wrapper">
                    <input
                      className="input"
                      type="text"
                      id="businessName"
                      name="businessName"
                      placeholder="Enter business name"
                      value={formData.businessName}
                      onChange={updateFormData}
                      required
                    />
                    <span className="material-symbols-outlined icon">
                      corporate_fare
                    </span>
                  </div>
                </div>

                <div className="input_group">
                  <label className="input_label" htmlFor="businessEmail">
                    Business Email
                  </label>
                  <div className="input_wrapper">
                    <input
                      className="input"
                      type="email"
                      id="businessEmail"
                      name="businessEmail"
                      placeholder="Enter business email"
                      value={formData.businessEmail}
                      onChange={updateFormData}
                      required
                    />
                    <span className="material-symbols-outlined icon">mail</span>
                  </div>
                </div>

                <div className="input_group">
                  <label className="input_label" htmlFor="regNumber">
                    Registration Number
                  </label>
                  <div className="input_wrapper">
                    <input
                      className="input"
                      type="text"
                      id="regNumber"
                      name="regNumber"
                      placeholder="Enter registration number"
                      value={formData.regNumber}
                      onChange={updateFormData}
                      required
                    />
                    <span className="material-symbols-outlined icon">
                      badge
                    </span>
                  </div>
                </div>
              </div>

              <button className="submit_button" type="submit">
                Next
              </button>
            </form>
          </div>
        );
      case 1:
        const idTypes = [
          "Certificate of Incorporation",
          "Tax Identification Number (TIN)",
          "Memorandum of Association",
          "Utility Bill (Business)",
          "Standard Organization Certificate",
          "Other Business Documents",
        ];
        return (
          <div className="verification_type_content">
            <div className="report_container_title">
              <p>Business Verification</p>
            </div>
            <div className="kyb_service_list">
              {idTypes.map((type) => (
                <div
                  key={type}
                  className={`kyb_service_item ${formData.idType === type ? "active" : ""}`}
                  onClick={() => selectIdType(type)}
                >
                  <p className="kyb_service_item_title">{type}</p>
                  <div className="card_pattern">
                    <img
                      src={CardPatternWhite}
                      alt="Pattern"
                      className="card-pattern-white"
                    />
                    <img
                      src={CardPatternBlack}
                      alt="Pattern"
                      className="card-pattern-black"
                    />
                  </div>
                  <div className="kyb_service_item_icon">
                    <span className="material-symbols-outlined">
                      south_east
                    </span>
                    {formData.idType === type && (
                      <img
                        src={CheckboxIcon}
                        alt="Checkbox"
                        className="checkbox_icon checked"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="button_wrapper">
              <button className="back_button" onClick={handleBack}>
                Back
              </button>
              <button
                className="next_button"
                onClick={handleNext}
                disabled={!formData.idType}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="verification_details_content">
            <div className="report">
              <div className="report_container_title">
                <p>Business Verified Details</p>
              </div>
              <div className="details_report">
                <div className="report_title">
                  <p>Verified Details</p>
                  <button className="secondary_button">
                    Export as CSV
                    <span className="material-symbols-outlined">upload</span>
                  </button>
                </div>
                <div className="report_content">
                  <div className="report_row">
                    <p className="report_label">Business Name</p>
                    <p className="report_value">{formData.businessName}</p>
                  </div>
                  <div className="report_row">
                    <p className="report_label">Business Email</p>
                    <p className="report_value">{formData.businessEmail}</p>
                  </div>
                  <div className="report_row">
                    <p className="report_label">Verification Type</p>
                    <p className="report_value">{formData.idType}</p>
                  </div>
                  <div className="report_row">
                    <p className="report_label">Reg. Number</p>
                    <p className="report_value">{formData.regNumber}</p>
                  </div>
                  <div className="report_row">
                    <p className="report_label">Status</p>
                    <p className="report_value status verified">Verified</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="button_wrapper">
              <button className="back_button" onClick={handleBack}>
                Back
              </button>
              <button className="next_button" onClick={handleComplete}>
                Complete
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <PageHeader
        title="Single Business Verification"
        description="Verify individual business records quickly and securely"
        notificationLink="/merchant-kyb/notifications"
      />

      <div className="content_area">
        <div className="single_verification_wrapper">
          <VerticalStepIndicator steps={steps} currentStep={currentStep} />
          {renderStep()}
        </div>
      </div>
    </>
  );
};

export default SingleVerification;
