import React, { useState } from "react";
import { useOnboarding } from "../onboarding.context";
import { ACCOUNT_PLANS, ACCOUNT_TYPE_STEPS } from "../onboarding.constants";
import rocketLine from "../../../assets/images/rocket-line.svg";
import buildingLine from "../../../assets/images/building-line.svg";
import checkboxDefault from "../../../assets/images/Checkbox [1.0].svg";
import checkboxGreen from "../../../assets/images/Checkbox-green [1.0].svg";
import selectBoxFill from "../../../assets/images/Radio-selected [1.0].svg";
import selectBoxInactive from "../../../assets/images/select-box-circle-fill-inactive.svg";
import cardPatternBlack from "../../../assets/images/card-pattern.svg";
import cardPatternWhite from "../../../assets/images/card-pattern-white-bg.svg";

const AccountTypeStep = ({ onNext, onBack }) => {
  const { accountType, setAccountType } = useOnboarding();
  const [selectedPlan, setSelectedPlan] = useState(accountType);
  const [currentSubStep] = useState(0);

  const plans = [
    {
      id: ACCOUNT_PLANS.STARTUP,
      title: "Start Up",
      icon: rocketLine,
      features: [
        "Up to 10,000 verifications/month",
        "All verification types",
        "Dashboard + API access",
        "Standard support (24-48h)",
        "Sandbox environment",
      ],
    },
    {
      id: ACCOUNT_PLANS.ENTERPRISE,
      title: "Enterprise",
      icon: buildingLine,
      features: [
        "Up to 10,000 verifications/month",
        "All verification types",
        "Dashboard + API access",
        "Standard support (24-48h)",
        "Sandbox environment",
      ],
    },
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    setAccountType(planId);
  };

  const handleNext = () => {
    if (selectedPlan) {
      onNext();
    }
  };

  return (
    <div className="plan_type">
      <div className="onboarding_steps_container">
        {ACCOUNT_TYPE_STEPS.map((step, idx) => (
          <div
            key={idx}
            className={`onboarding_step_item ${idx === currentSubStep ? "active" : ""}`}
          >
            <div className="onboarding_dot">
              <img
                src={selectBoxFill}
                alt="select-box-circle-fill"
                className="active_dot"
                style={{ display: idx === currentSubStep ? "block" : "none" }}
              />
              <img
                src={selectBoxInactive}
                alt="select-box-circle-fill-inactive"
                className="inactive_dot"
                style={{ display: idx === currentSubStep ? "none" : "block" }}
              />
            </div>
            <p className="onboarding_step_text">{step.name}</p>
          </div>
        ))}
      </div>

      <div className="onboarding_step_title">
        <p className="onboarding_step_title_text_bg">
          Choose Your Account Type
        </p>
        <p className="onboarding_step_title_text_sm">
          Select the plan that best fits your business needs. You can upgrade
          anytime.
        </p>
      </div>

      <div className="step_body">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`account_type_container ${selectedPlan === plan.id ? "is-selected" : ""}`}
            onClick={() => handlePlanSelect(plan.id)}
            style={{ cursor: "pointer" }}
          >
            <div className="card_top">
              <div className="card_icon">
                <img src={plan.icon} alt="Card Icon" />
              </div>
              <div className="card_check">
                <img
                  src={checkboxDefault}
                  alt="Card Check"
                  className="checkbox-default"
                  style={{
                    display: selectedPlan === plan.id ? "none" : "block",
                  }}
                />
                <img
                  src={checkboxGreen}
                  alt="Card Check Active"
                  className="checkbox-active"
                  style={{
                    display: selectedPlan === plan.id ? "block" : "none",
                  }}
                />
              </div>
            </div>

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

            <div className="card_title">
              <p className="card_title_text_bg">{plan.title}</p>
            </div>

            <ul className="ul_list">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="ul_list_item">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="button_wrapper">
        <button className="back_button" onClick={onBack}>
          Back
        </button>
        <button
          className="next_button"
          onClick={handleNext}
          disabled={!selectedPlan}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AccountTypeStep;
