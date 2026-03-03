import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../shared/services/supabase";
import { useGlobal } from "../../../app/GlobalContext";
import { useOnboarding } from "../onboarding.context";
import { ACCOUNT_TYPE_STEPS } from "../onboarding.constants";
import StatusModal from "../../../shared/components/StatusModal";

import selectBoxFill from "../../../assets/images/Radio-selected [1.0].svg";
import selectBoxInactive from "../../../assets/images/select-box-circle-fill-inactive.svg";
import trafficLights from "../../../assets/images/Traffic Lights (Big Sur).svg";

const SetupStep = ({ onBack }) => {
  const navigate = useNavigate();
  const { showToast } = useGlobal();
  const { selectedServices, tempUser } = useOnboarding();
  const [activeTab, setActiveTab] = useState("sandbox");
  const [copiedKey, setCopiedKey] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [loading, setLoading] = useState(false);
  // sandbox key is provided to the merchant after signing up;
  // do not hard‑code real credentials in source control.
  const [apiKeys, setApiKeys] = useState({
    sandbox: import.meta.env.VITE_SANDBOX_KEY || "",
    production: "Production Key Not Found",
  });

  const currentSubStep = 4;

  useEffect(() => {
    fetchApiKeys();
  }, []);

  const fetchApiKeys = async () => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData?.user || tempUser;

      if (!user) return;

      const { data, error } = await supabase
        .from("api_tokens")
        .select("token")
        .eq("merchant_id", user.id)
        .eq("name", "Default Token")
        .single();

      if (data) {
        setApiKeys((prev) => ({ ...prev, production: data.token }));
      }
    } catch (error) {
      console.error("Error fetching API keys:", error);
    }
  };

  const codeSnippet = `const PrivyID = require('privyid');

                        const client = new PrivyID('${apiKeys.production}');

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
    setModalType("success");
    setShowModal(true);
  };

  const handleCopyKey = (key) => {
    navigator.clipboard.writeText(key);
    setModalTitle("API Key Copied!");
    setModalDescription(
      "Your API key has been copied securely to your clipboard.",
    );
    setModalType("success");
    setShowModal(true);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleComplete = async () => {
    setLoading(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData?.user || tempUser;

      if (!user) throw new Error("User session not found.");

      const { error } = await supabase
        .from("merchants")
        .update({
          onboarding_step: "completed",
        })
        .eq("id", user.id);

      if (error) throw error;

      showToast("Onboarding complete!", "success");

      // Navigate based on selected service type
      const userId = userData.user.id;
      if (selectedServices.includes("kyc_only")) {
        navigate(`/m/${userId}/kyc`);
      } else if (selectedServices.includes("kyb_only")) {
        navigate(`/m/${userId}/kyb`);
      } else if (selectedServices.includes("kyc_kyb")) {
        navigate(`/m/${userId}/combined`);
      } else {
        // Fallback or default
        navigate(`/m/${userId}/combined`);
      }
    } catch (error) {
      showToast(error.message || "Failed to complete setup.", "error");
    } finally {
      setLoading(false);
    }
  };

  const renderTabContent = () => {
    const key = activeTab === "sandbox" ? apiKeys.sandbox : apiKeys.production;
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
        <button
          className="next_button complete_btn"
          onClick={handleComplete}
          disabled={loading}
        >
          {loading ? "Completing..." : "Complete Setup"}
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
