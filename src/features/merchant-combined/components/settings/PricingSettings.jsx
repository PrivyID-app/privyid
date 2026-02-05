import React, { useState } from "react";
import "../../pages/SettingsPage.css";

const PricingSettings = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="settings_section">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <div>
          <h2 className="section_title">
            Choose a pricing plan that's right for your business
          </h2>
          <p className="section_description" style={{ marginBottom: 0 }}>
            Select the plan that best fits your business needs. You can upgrade
            anytime.
          </p>
        </div>

        {/* Simple Billing Toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "var(--bg-weak-50)",
            padding: "4px",
            borderRadius: "8px",
          }}
        >
          <button
            onClick={() => setBillingCycle("monthly")}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              border: "none",
              backgroundColor:
                billingCycle === "monthly"
                  ? "var(--bg-white-0)"
                  : "transparent",
              boxShadow:
                billingCycle === "monthly"
                  ? "0 1px 2px rgba(0,0,0,0.1)"
                  : "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: billingCycle === "monthly" ? 500 : 400,
              color:
                billingCycle === "monthly"
                  ? "var(--text-strong-950)"
                  : "var(--text-sub-600)",
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              border: "none",
              backgroundColor:
                billingCycle === "yearly" ? "var(--bg-white-0)" : "transparent",
              boxShadow:
                billingCycle === "yearly"
                  ? "0 1px 2px rgba(0,0,0,0.1)"
                  : "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: billingCycle === "yearly" ? 500 : 400,
              color:
                billingCycle === "yearly"
                  ? "var(--text-strong-950)"
                  : "var(--text-sub-600)",
            }}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="pricing_cards">
        {/* Start Up Plan */}
        <div className="pricing_card">
          <span className="pricing_badge">Start up</span>
          <div style={{ marginBottom: "8px" }}>
            <span className="pricing_amount">
              ₦{billingCycle === "monthly" ? "70" : "700"}
            </span>
            <span className="pricing_period">
              /{billingCycle === "monthly" ? "month" : "year"}
            </span>
          </div>
          <p
            style={{
              color: "var(--text-sub-600)",
              fontSize: "0.8rem",
              marginBottom: "1.5rem",
            }}
          >
            For small businesses and startups
          </p>

          <button className="secondary_btn" style={{ width: "100%" }}>
            Select
          </button>

          <ul className="pricing_features">
            <li className="pricing_feature">
              <span
                className="material-symbols-outlined"
                style={{
                  color: "var(--state-stable-base)",
                  fontSize: "20px",
                  fontWeight: 300,
                }}
              >
                check_circle
              </span>
              <span>One person team</span>
            </li>
            <li className="pricing_feature">
              <span
                className="material-symbols-outlined"
                style={{
                  color: "var(--state-stable-base)",
                  fontSize: "20px",
                  fontWeight: 300,
                }}
              >
                check_circle
              </span>
              <span>Up to 200 verifications per month</span>
            </li>
            <li className="pricing_feature">
              <span
                className="material-symbols-outlined"
                style={{
                  color: "var(--state-stable-base)",
                  fontSize: "20px",
                  fontWeight: 300,
                }}
              >
                check_circle
              </span>
              <span>Only one verification at a time</span>
            </li>
          </ul>
        </div>

        {/* Growth Plan */}
        <div
          className="pricing_card"
          style={{
            borderColor: "var(--state-stable-base)",
            borderWidth: "2px",
          }}
        >
          <span
            className="pricing_badge"
            style={{
              backgroundColor: "var(--state-stable-base)",
              color: "var(--text-strong-950)",
            }}
          >
            Growth plan
          </span>
          <div style={{ marginBottom: "8px" }}>
            <span className="pricing_amount">
              ₦{billingCycle === "monthly" ? "150" : "1500"}
            </span>
            <span className="pricing_period">
              /{billingCycle === "monthly" ? "month" : "year"}
            </span>
          </div>
          <p
            style={{
              color: "var(--text-sub-600)",
              fontSize: "14px",
              marginBottom: "24px",
            }}
          >
            For growing companies
          </p>

          <button className="secondary_btn" style={{ width: "100%" }}>
            Select
          </button>

          <ul className="pricing_features">
            <li className="pricing_feature">
              <span
                className="material-symbols-outlined"
                style={{
                  color: "var(--state-stable-base)",
                  fontSize: "20px",
                  fontWeight: 300,
                }}
              >
                check_circle
              </span>
              <span>One person team</span>
            </li>
            <li className="pricing_feature">
              <span
                className="material-symbols-outlined"
                style={{
                  color: "var(--state-stable-base)",
                  fontSize: "20px",
                  fontWeight: 300,
                }}
              >
                check_circle
              </span>
              <span>Up to 200 verifications per month</span>
            </li>
            <li className="pricing_feature">
              <span
                className="material-symbols-outlined"
                style={{
                  color: "var(--state-stable-base)",
                  fontSize: "20px",
                  fontWeight: 300,
                }}
              >
                check_circle
              </span>
              <span>Only one verification at a time</span>
            </li>
          </ul>
        </div>

        {/* Custom Plan */}
        <div className="pricing_card">
          <span className="pricing_badge">Enterprise</span>
          <div style={{ marginBottom: "8px" }}>
            <span className="pricing_amount">Custom</span>
            <span className="pricing_period">/month</span>
          </div>
          <p
            style={{
              color: "var(--text-sub-600)",
              fontSize: "14px",
              marginBottom: "24px",
            }}
          >
            Contact us for Custom pricing for large organisations
          </p>

          <button className="secondary_btn" style={{ width: "100%" }}>
            Select
          </button>

          <ul className="pricing_features">
            <li className="pricing_feature">
              <span
                className="material-symbols-outlined"
                style={{
                  color: "var(--state-stable-base)",
                  fontSize: "20px",
                  fontWeight: 300,
                }}
              >
                check_circle
              </span>
              <span>One person team</span>
            </li>
            <li className="pricing_feature">
              <span
                className="material-symbols-outlined"
                style={{
                  color: "var(--state-stable-base)",
                  fontSize: "20px",
                  fontWeight: 300,
                }}
              >
                check_circle
              </span>
              <span>Up to 200 verifications per month</span>
            </li>
            <li className="pricing_feature">
              <span
                className="material-symbols-outlined"
                style={{
                  color: "var(--state-stable-base)",
                  fontSize: "20px",
                  fontWeight: 300,
                }}
              >
                check_circle
              </span>
              <span>Only one verification at a time</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingSettings;
