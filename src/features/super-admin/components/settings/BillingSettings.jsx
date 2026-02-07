import React from "react";
import "../../super-admin.css";

const BillingSettings = () => {
  return (
    <div className="settings_section">
      <h3>Billing Configuration</h3>
      <p className="section_description">
        Manage payment gateways and pricing tiers
      </p>

      <div className="settings_form">
        <div className="form_row">
          <label>Payment Gateway</label>
          <select>
            <option>Paystack</option>
            <option>Flutterwave</option>
            <option>Stripe</option>
          </select>
        </div>

        <div className="form_row">
          <label>API Key</label>
          <input type="password" placeholder="Enter payment gateway API key" />
        </div>

        <div className="form_row">
          <label>Currency</label>
          <select>
            <option>NGN - Nigerian Naira</option>
            <option>USD - US Dollar</option>
            <option>GBP - British Pound</option>
          </select>
        </div>

        <button className="save_button">Save Changes</button>
      </div>
    </div>
  );
};

export default BillingSettings;
