import React, { useState } from "react";
import ToggleCard from "../ToggleCard";

const SecuritySettings = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="security_settings_section">
      <div className="header">
        <p className="info">Change password</p>
        <p>Forgot your password? Change it here</p>
      </div>

      <div className="security_form">
        <div className="form_group">
          <label>Old Password</label>
          <div className="password_input_wrapper">
            <input
              type={showOld ? "text" : "password"}
              placeholder="**********"
            />
            <button
              type="button"
              className="pw_toggle"
              onClick={() => setShowOld(!showOld)}
            >
              <span className="material-symbols-outlined">
                {showOld ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>

        <div className="form_row_grid">
          <div className="form_group">
            <label>New Password</label>
            <div className="password_input_wrapper">
              <input
                type={showNew ? "text" : "password"}
                placeholder="**********"
              />
              <button
                type="button"
                className="pw_toggle"
                onClick={() => setShowNew(!showNew)}
              >
                <span className="material-symbols-outlined">
                  {showNew ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>
          <div className="form_group">
            <label>Confirm New Password</label>
            <div className="password_input_wrapper">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="**********"
              />
              <button
                type="button"
                className="pw_toggle"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                <span className="material-symbols-outlined">
                  {showConfirm ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="two_factor_area">
          <ToggleCard
            title="Two-factor authentication"
            description="Add an extra layer of security"
            checked={twoFactor}
            onChange={setTwoFactor}
          />
        </div>

        <div style={{ marginTop: "24px" }}>
          <button
            className="primary_btn"
            onClick={() => alert("Security settings updated!")}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
