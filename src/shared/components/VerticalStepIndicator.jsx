import React from "react";
import "./vertical-step-indicator.css";

const VerticalStepIndicator = ({ steps, currentStep }) => {
  return (
    <div className="single_verification_indicator">
      <div className="step_container">
        {steps.map((step, index) => {
          const isActive = index <= currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="personal_info_step">
              <div className="step_title">
                <p
                  className={`step_title_bg ${
                    isActive ? "active_step" : "inactive_step"
                  }`}
                >
                  {step.title}
                </p>
                <p
                  className={`step_title_sm ${
                    isActive ? "active_step" : "inactive_step"
                  }`}
                >
                  {step.subtitle}
                </p>
              </div>

              <div className="service_card_icon_sm">
                <img
                  src={isActive ? step.activeIcon : step.inactiveIcon}
                  alt={`${step.title} Icon`}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bar">
        {steps.map((_, index) => (
          <div key={index} className="dot_wrapper">
            <div
              className={`dot ${
                index <= currentStep ? "active_dot" : "inactive_dot"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalStepIndicator;
