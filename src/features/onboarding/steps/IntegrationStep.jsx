import React from "react";
import { ACCOUNT_TYPE_STEPS } from "../onboarding.constants";
import { useOnboarding } from "../onboarding.context";
import selectBoxFill from "../../../assets/images/select-box-circle-fill.svg";
import selectBoxInactive from "../../../assets/images/select-box-circle-fill-inactive.svg";
import dashboardLine from "../../../assets/images/dashboard-line.svg";
import codeLine from "../../../assets/images/code-line.svg";
import aiGenerate from "../../../assets/images/ai-generate.svg";
import ServiceCard from "../components/ServiceCard";

const IntegrationStep = ({ onNext, onBack }) => {
  const { integrationMethod, setIntegrationMethod } = useOnboarding();
  const currentSubStep = 3; // Index for 'Integration' in ACCOUNT_TYPE_STEPS

  const methods = [
    {
      id: "dashboard",
      title: "Dashboard Only",
      description: "Manual verification through web interface.",
      icon: dashboardLine,
    },
    {
      id: "api",
      title: "API Only",
      description: "Programmatic verification via RESTful API.",
      icon: codeLine,
    },
    {
      id: "both",
      title: "Dashboard + API",
      description: "Full access to both methods.",
      icon: aiGenerate,
    },
  ];

  const handleSelect = (id) => {
    setIntegrationMethod(id);
  };

  const handleNext = () => {
    if (integrationMethod) {
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
        <p className="onboarding_step_title_text_bg">
          Choose Integration Method
        </p>
        <p className="onboarding_step_title_text_sm">
          Select how you want to integrate PrivyID. You can change this anytime.
        </p>
      </div>

      <div className="service_step_body">
        {methods.map((method) => (
          <ServiceCard
            key={method.id}
            {...method}
            isSelected={integrationMethod === method.id}
            onClick={handleSelect}
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
          disabled={!integrationMethod}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default IntegrationStep;
