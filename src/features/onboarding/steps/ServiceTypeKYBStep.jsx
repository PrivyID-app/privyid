import React, { useState, useEffect } from "react";
import { useOnboarding } from "../onboarding.context";
import { ACCOUNT_TYPE_STEPS, ONBOARDING_STEPS } from "../onboarding.constants";
import selectBoxFill from "../../../assets/images/select-box-circle-fill.svg";
import selectBoxInactive from "../../../assets/images/select-box-circle-fill-inactive.svg";
import checkboxGreen from "../../../assets/images/Checkbox-green [1.0].svg";
import cardPatternWhite from "../../../assets/images/card-pattern-white-bg.svg";
import cardPatternBlack from "../../../assets/images/card-pattern.svg";

const ServiceTypeKYBStep = ({ onNext, onBack, onStepChange }) => {
  const { kybOptions, setKybOptions, setSelectedServices } = useOnboarding();
  const [currentSubStep] = useState(1); // Still under 'Select Service' step index 1

  const kybServices = [
    { id: "cac_registration", title: "CAC Registration" },
    { id: "tin_verification", title: "Tax Identification Number (TIN)" },
    { id: "cac_verification", title: "Corporate Affairs Commission (CAC)" },
    { id: "director_verification", title: "Director Verification" },
    { id: "bank_account_verification", title: "Bank Account Verification" },
    { id: "business_verification", title: "Business Verification" },
  ];

  // Initialize selection from context if it's an array, otherwise default to empty
  const [selectedIds, setSelectedIds] = useState(
    Array.isArray(kybOptions) ? kybOptions : [],
  );

  const toggleService = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === kybServices.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(kybServices.map((s) => s.id));
    }
  };

  useEffect(() => {
    setKybOptions(selectedIds);
  }, [selectedIds, setKybOptions]);

  const handleSwitchService = (e) => {
    const value = e.target.value;
    if (value === "kyc") {
      setSelectedServices(["kyc_only"]);
      onStepChange(ONBOARDING_STEPS.SERVICE_TYPE_KYC);
    } else if (value === "both") {
      setSelectedServices(["kyc_kyb"]);
      onStepChange(ONBOARDING_STEPS.SERVICE_TYPE_BOTH);
    }
  };

  const handleNext = () => {
    if (selectedIds.length > 0) {
      onNext();
    }
  };

  return (
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
                alt="select-box"
                className="active_dot"
              />
              <img
                src={selectBoxInactive}
                alt="select-box"
                className="inactive_dot"
              />
            </div>
            <p className="onboarding_step_text">{step.name}</p>
          </div>
        ))}
      </div>

      <div className="onboarding_step_title">
        <p className="onboarding_step_title_text_bg">
          Select Service Type - KYB Only
        </p>
        <p className="onboarding_step_title_text_sm">
          Choose the type of verification services you need for your business.
        </p>
      </div>

      <div className="service_step_body_kyc">
        <div className="service_selector">
          <div className="service_selector_dropdown">
            <label htmlFor="service_selector">Switch Service Type</label>
            <div style={{ position: "relative" }}>
              <select
                id="service_selector"
                defaultValue="kyb"
                onChange={handleSwitchService}
              >
                <option value="" disabled>
                  --- Switch Option ---
                </option>
                <option value="kyc">KYC Only</option>
                <option value="kyb">KYB Only</option>
                <option value="both">Both KYC & KYB</option>
              </select>
              <span className="material-symbols-outlined select_chevron">
                expand_more
              </span>
            </div>
          </div>

          <div
            className="select_all"
            onClick={handleSelectAll}
            style={{ cursor: "pointer" }}
          >
            {selectedIds.length === kybServices.length && (
              <img
                src={checkboxGreen}
                alt="Checkbox"
                className="checkbox_icon"
                style={{ display: "block" }}
              />
            )}
            <p className="select_all_label">Select All</p>
          </div>
        </div>

        <div className="service_selector_list for_kyb">
          {kybServices.map((service) => {
            const isSelected = selectedIds.includes(service.id);
            return (
              <div
                key={service.id}
                className={`service_selector_list_item ${isSelected ? "is-selected" : ""}`}
                onClick={() => toggleService(service.id)}
              >
                <p className="service_selector_list_item_content_title">
                  {service.title}
                </p>

                <div className="card_pattern">
                  <img
                    src={cardPatternWhite}
                    alt="Pattern"
                    className="card-pattern-white"
                  />
                  <img
                    src={cardPatternBlack}
                    alt="Pattern"
                    className="card-pattern-black"
                  />
                </div>

                <div className="service_selector_list_item_icon">
                  {!isSelected && (
                    <span className="material-symbols-outlined selection-arrow">
                      south_east
                    </span>
                  )}
                  {isSelected && (
                    <img
                      src={checkboxGreen}
                      alt="Checkbox Active"
                      className="checkbox-active"
                      style={{ display: "block" }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="selector_counter">
          <p className="selector_counter_text">
            {selectedIds.length} of {kybServices.length} selected
          </p>
        </div>
      </div>

      <div className="button_wrapper">
        <button className="back_button" onClick={onBack}>
          Back
        </button>
        <button
          className="next_button"
          onClick={handleNext}
          disabled={selectedIds.length === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ServiceTypeKYBStep;
