import React, { useState, useEffect } from "react";
import { useOnboarding } from "../onboarding.context";
import { ACCOUNT_TYPE_STEPS, ONBOARDING_STEPS } from "../onboarding.constants";
import Tabs from "../../../shared/components/Tabs";
import selectBoxFill from "../../../assets/images/select-box-circle-fill.svg";
import selectBoxInactive from "../../../assets/images/select-box-circle-fill-inactive.svg";
import checkboxGreen from "../../../assets/images/Checkbox-green [1.0].svg";
import cardPatternWhite from "../../../assets/images/card-pattern-white-bg.svg";
import cardPatternBlack from "../../../assets/images/card-pattern.svg";
import CustomSelect from "../../../shared/components/CustomSelect";

const ServiceTypeBothStep = ({ onNext, onBack, onStepChange }) => {
  const {
    kycOptions,
    setKycOptions,
    kybOptions,
    setKybOptions,
    setSelectedServices,
  } = useOnboarding();
  const [currentSubStep] = useState(1);
  const [activeTab, setActiveTab] = useState("kyc");

  const kycServices = [
    { id: "drivers_license", title: "Driver's License" },
    { id: "international_passport", title: "International Passport" },
    { id: "national_id", title: "National ID (NIN)" },
    { id: "bvn_verification", title: "BVN Verification" },
    { id: "voters_card", title: "Voter's Card" },
    { id: "utility_bill", title: "Utility Bill Verification" },
  ];

  const kybServices = [
    { id: "cac_registration", title: "CAC Registration" },
    { id: "tin_verification", title: "Tax Identification Number (TIN)" },
    { id: "cac_verification", title: "Corporate Affairs Commission (CAC)" },
    { id: "director_verification", title: "Director Verification" },
    { id: "bank_account_verification", title: "Bank Account Verification" },
    { id: "business_verification", title: "Business Verification" },
  ];

  const [selectedKycIds, setSelectedKycIds] = useState(
    Array.isArray(kycOptions) ? kycOptions : [],
  );
  const [selectedKybIds, setSelectedKybIds] = useState(
    Array.isArray(kybOptions) ? kybOptions : [],
  );

  useEffect(() => {
    setKycOptions(selectedKycIds);
  }, [selectedKycIds, setKycOptions]);

  useEffect(() => {
    setKybOptions(selectedKybIds);
  }, [selectedKybIds, setKybOptions]);

  const toggleKycService = (id) => {
    setSelectedKycIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleKybService = (id) => {
    setSelectedKybIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleSelectAll = () => {
    if (activeTab === "kyc") {
      if (selectedKycIds.length === kycServices.length) {
        setSelectedKycIds([]);
      } else {
        setSelectedKycIds(kycServices.map((s) => s.id));
      }
    } else {
      if (selectedKybIds.length === kybServices.length) {
        setSelectedKybIds([]);
      } else {
        setSelectedKybIds(kybServices.map((s) => s.id));
      }
    }
  };

  const handleSwitchService = (e) => {
    const value = e.target.value;
    if (value === "kyc") {
      setSelectedServices(["kyc_only"]);
      onStepChange(ONBOARDING_STEPS.SERVICE_TYPE_KYC);
    } else if (value === "kyb") {
      setSelectedServices(["kyb_only"]);
      onStepChange(ONBOARDING_STEPS.SERVICE_TYPE_KYB);
    }
  };

  const tabs = [
    { label: "KYC Options", key: "kyc" },
    { label: "KYB Options", key: "kyb" },
  ];

  const currentServices = activeTab === "kyc" ? kycServices : kybServices;
  const currentSelectedIds =
    activeTab === "kyc" ? selectedKycIds : selectedKybIds;

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
          Select Service Type - Both KYC & KYB
        </p>
        <p className="onboarding_step_title_text_sm">
          Choose the type of verification services you need for your business.
        </p>
      </div>

      <div className="service_step_body_kyc">
        <div className="service_selector">
          <div className="service_selector_dropdown">
            <label htmlFor="service_selector">Switch Service Type</label>
            <CustomSelect
              options={[
                { label: "KYC Only", value: "kyc" },
                { label: "KYB Only", value: "kyb" },
                { label: "Both KYC & KYB", value: "both" },
              ]}
              value="both"
              onSelect={(val) =>
                handleSwitchService({ target: { value: val } })
              }
              className="service_selector_custom"
            />
          </div>

          <div
            className="select_all"
            onClick={handleSelectAll}
            style={{ cursor: "pointer" }}
          >
            {currentSelectedIds.length === currentServices.length &&
              currentServices.length > 0 && (
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

        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <div
          key={activeTab}
          className={`service_selector_list ${activeTab === "kyc" ? "for_kyc" : "for_kyb"}`}
        >
          {currentServices.map((service) => {
            const isSelected = currentSelectedIds.includes(service.id);
            return (
              <div
                key={service.id}
                className={`service_selector_list_item ${isSelected ? "is-selected" : ""}`}
                onClick={() =>
                  activeTab === "kyc"
                    ? toggleKycService(service.id)
                    : toggleKybService(service.id)
                }
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
            {currentSelectedIds.length} of {currentServices.length} selected
          </p>
        </div>
      </div>

      <div className="button_wrapper">
        <button className="back_button" onClick={onBack}>
          Back
        </button>
        <button
          className="next_button"
          onClick={onNext}
          disabled={selectedKycIds.length === 0 || selectedKybIds.length === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ServiceTypeBothStep;
