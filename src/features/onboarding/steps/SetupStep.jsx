import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../onboarding.context";
import { ACCOUNT_TYPE_STEPS } from "../onboarding.constants";
import selectBoxFill from "../../../assets/images/select-box-circle-fill.svg";
import selectBoxInactive from "../../../assets/images/select-box-circle-fill-inactive.svg";
import trafficLights from "../../../assets/images/Traffic Lights (Big Sur).svg";
import StatusModal from "../../../shared/components/StatusModal";

const SetupStep = ({ onNext, onBack }) => {
  const navigate = useNavigate();
  const { selectedServices } = useOnboarding();
  const [activeTab, setActiveTab] = useState("sandbox");
  const [copiedKey, setCopiedKey] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const currentSubStep = 4; // Index for 'Setup' in ACCOUNT_TYPE_STEPS

  const sandboxKey = "sk_test_51Hxxxxxx";
  const productionKey = "sk_live_51HqLyjWDarjtT1zdp7dcA89";

  const codeSnippet = `const PrivyID = require('privyid');

                        const client = new PrivyID('sk_live_51HqLyjWDarjtT1zdp7dcA89');

                        // Verify a passport
                        
                        const verification = await client.verify({
                        type: 'passport',
                        document: documentFile,
                        liveness: true
                        
                        });

                        console.log(verification.status); // 'verified'
                        console.log(verification.token);  // verification token`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setModalTitle("Code Copied!");
    setModalDescription(
      "The code snippet has been copied to your clipboard successfully.",
    );
    setShowModal(true);
  };

  const handleCopyKey = (key) => {
    navigator.clipboard.writeText(key);
    setModalTitle("API Key Copied!");
    setModalDescription(
      "Your API key has been copied securely to your clipboard.",
    );
    setShowModal(true);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleComplete = () => {
    // Navigate based on selected service type
    if (selectedServices.includes("kyc_only")) {
      navigate("/merchant-kyc");
    } else if (selectedServices.includes("kyb_only")) {
      navigate("/merchant-kyb");
    } else if (selectedServices.includes("kyc_kyb")) {
      navigate("/merchant-combined");
    } else {
      // Fallback to onNext if no service selected
      onNext();
    }
  };

  const renderTabContent = () => {
    const key = activeTab === "sandbox" ? sandboxKey : productionKey;
    const title = activeTab === "sandbox" ? "Sandbox" : "Production";
    const description =
      activeTab === "sandbox"
        ? "Test environment for development. No real verifications processed."
        : "Production environment for development. Real verifications processed.";

    return (
      <div className={`${activeTab}_content tab_active_content`}>
        <form className={`${activeTab}_api`}>
          <p className="test_environ_txt">{description}</p>

          <div className="api_key_group">
            <div className="label_cont">
              <span className="material-symbols-outlined">key</span>
              <label
                htmlFor={`${activeTab}_api_key`}
                className={`${activeTab}_api_key_label`}
              >
                API Key
              </label>
            </div>
            <div className="input_and_btns">
              <input
                type={showPassword ? "text" : "password"}
                id={`${activeTab}_api_key`}
                name={`${activeTab}_api_key`}
                value={key}
                readOnly
                className={`${activeTab}_api_key_input`}
              />

              <div className="button_grp">
                <button
                  type="button"
                  className="copy_button"
                  onClick={() => handleCopyKey(key)}
                >
                  {copiedKey === key ? "Copied!" : "Copy"}
                </button>
                <button
                  type="button"
                  className="hide_text_button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            <div className="not_hint">
              <span className="material-symbols-outlined warning_icon">
                warning
              </span>
              <p className="hint_text">
                Keep your API keys secret. Do not share them publicly.
              </p>
            </div>
          </div>
        </form>

        <div className="api_sample">
          <div className="api_sample_title">
            <div className="sample_icon">
              <img src={trafficLights} alt="Icon" />
            </div>

            <button
              type="button"
              className="copy_button"
              onClick={handleCopyCode}
            >
              <span className="material-symbols-outlined">content_copy</span>
              Copy
            </button>
          </div>

          <pre>
            <code className="language-javascript">{codeSnippet}</code>
          </pre>
        </div>
      </div>
    );
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
        <p className="onboarding_step_title_text_bg">Environment Setup</p>
        <p className="onboarding_step_title_text_sm">
          Your API keys and environment configuration.
        </p>
      </div>

      <div className="setup_body">
        <div className="tab_menu">
          <div
            className={`tab_menu_item ${activeTab === "sandbox" ? "tab_active" : "tab_inactive"}`}
            onClick={() => setActiveTab("sandbox")}
          >
            Sandbox
          </div>
          <div
            className={`tab_menu_item ${activeTab === "production" ? "tab_active" : "tab_inactive"}`}
            onClick={() => setActiveTab("production")}
          >
            Production
          </div>
        </div>

        {renderTabContent()}
      </div>

      <div className="button_wrapper">
        <button className="back_button" onClick={onBack}>
          Back
        </button>
        <button className="next_button complete_btn" onClick={handleComplete}>
          Complete Setup{" "}
          <span className="material-symbols-outlined">check_circle</span>
        </button>
      </div>
      <StatusModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalTitle}
        description={modalDescription}
        type={modalType}
      />
    </div>
  );
};

export default SetupStep;
