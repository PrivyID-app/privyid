import React from "react";
import "./vertical-step-indicator.css";

const VerticalStepIndicator = ({ steps, currentStep }) => {
  return (
    <div className="v_step_indicator_wrapper">
      <div className="v_step_items_container">
        {steps.map((step, index) => {
          const isActive = index <= currentStep;

          return (
            <div key={index} className="v_step_item">
              <div className="v_step_title_group">
                <p
                  className={`v_step_title_bg ${
                    isActive ? "active_step" : "inactive_step"
                  }`}
                >
                  {step.title}
                </p>
                <p
                  className={`v_step_title_sm ${
                    isActive ? "active_step" : "inactive_step"
                  }`}
                >
                  {step.subtitle}
                </p>
              </div>

              <div className="v_step_icon_box">
                <img
                  src={isActive ? step.activeIcon : step.inactiveIcon}
                  alt={`${step.title} Icon`}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="v_step_bar_container">
        {steps.map((_, index) => (
          <div key={index} className="v_step_dot_wrapper">
            <div
              className={`v_step_dot ${
                index <= currentStep
                  ? "v_step_active_dot"
                  : "v_step_inactive_dot"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalStepIndicator;
