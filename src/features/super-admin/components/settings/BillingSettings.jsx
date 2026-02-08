import React, { useState } from "react";
import CustomSelect from "../../../shared/components/CustomSelect";
import "../../super-admin.css";

const BillingSettings = () => {
  const [paymentGateway, setPaymentGateway] = useState("paystack");
  const [apiKey, setApiKey] = useState("");
  const [currency, setCurrency] = useState("ngn");

  const paymentGatewayOptions = [
    { value: "paystack", label: "Paystack" },
    { value: "flutterwave", label: "Flutterwave" },
    { value: "stripe", label: "Stripe" },
  ];

  const currencyOptions = [
    { value: "ngn", label: "NGN - Nigerian Naira" },
    { value: "usd", label: "USD - US Dollar" },
    { value: "gbp", label: "GBP - British Pound" },
  ];

  const handleSave = () => {
    console.log("Saving billing settings:", {
      paymentGateway,
      apiKey,
      currency,
    });
  };

  return (
    <div className="settings_section">
      <h3>Billing Configuration</h3>
      <p className="section_description">
        Manage payment gateways and pricing tiers
      </p>

      <div className="settings_form">
        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Payment Gateway</label>
          <CustomSelect
            options={paymentGatewayOptions}
            value={paymentGateway}
            onSelect={setPaymentGateway}
            className="filter_select"
          />
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>API Key</label>
          <input
            type="password"
            placeholder="Enter payment gateway API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            style={{fontSize: "1rem", fontWeight: "400", width: "100%", border: "1px solid var(--stroke-sub-300)", borderRadius: "0.8rem", padding: "1rem" }}
          />
        </div>

        <div className="form_row">
          <label style={{fontSize: "1rem", fontWeight: "400"}}>Currency</label>
          <CustomSelect
            options={currencyOptions}
            value={currency}
            onSelect={setCurrency}
            className="filter_select"
          />
        </div>

        <button className="save_button" onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};

export default BillingSettings;
