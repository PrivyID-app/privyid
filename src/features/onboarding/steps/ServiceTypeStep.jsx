import React, { useState } from "react";
import { useOnboarding } from "../onboarding.context";
import { ACCOUNT_TYPE_STEPS } from "../onboarding.constants";
import selectBoxFill from "../../../assets/images/select-box-circle-fill.svg";
import selectBoxInactive from "../../../assets/images/select-box-circle-fill-inactive.svg";
import shieldLine from "../../../assets/images/shield-line.svg";
import shinningStar from "../../../assets/images/shining-2-line.svg";
import buildingLine from "../../../assets/images/building-line.svg";
import ServiceCard from "../components/ServiceCard";

const ServiceTypeStep = ({ onNext, onBack }) => {
  const { selectedServices, setSelectedServices } = useOnboarding();
  const [currentSubStep] = useState(1); // 1 is index for 'Select Service'

  const services = [
    {
      id: "kyc_only",
      title: "KYC Only",
      description: "Individual identity verification for your end users.",
      icon: shieldLine,
    },
    {
      id: "kyb_only",
      title: "KYB Only",
      description: "Business verification for corporate clients.",
      icon: shinningStar,
    },
    {
      id: "kyc_kyb",
      title: "KYC & KYB",
      description: "Complete verification suite for all client types.",
      icon: buildingLine,
    },
  ];

  const toggleService = (serviceId) => {
    const isSelected = selectedServices.includes(serviceId);
    if (isSelected) {
      setSelectedServices([]);
    } else {
      setSelectedServices([serviceId]);
    }
  };

  const handleNext = () => {
    if (selectedServices.length > 0) {
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
        <p className="onboarding_step_title_text_bg">Select Service Type</p>
        <p className="onboarding_step_title_text_sm">
          Choose the type of verification services you need for your business.
        </p>
      </div>

      <div className="service_step_body">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            isSelected={selectedServices.includes(service.id)}
            onClick={toggleService}
          />
        ))}
      </div>

      <div className="button_wrapper">
        <button className="back_button" onClick={onBack}>
          Back
        </button>
        <button
          className="next_button"
          onClick={handleNext}
          disabled={selectedServices.length === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ServiceTypeStep;
