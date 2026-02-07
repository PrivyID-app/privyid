import React, { useState } from "react";
import "../../super-admin.css";

const RateLimitConfig = () => {
  const [merchants, setMerchants] = useState([
    {
      id: "MER-001",
      name: "Ironclad Systems",
      rateLimit: 1000,
      burstLimit: 50,
      tier: "Enterprise",
    },
    {
      id: "MER-002",
      name: "TechFlow Solutions",
      rateLimit: 500,
      burstLimit: 25,
      tier: "Startup",
    },
    {
      id: "MER-003",
      name: "Quantum Dynamics",
      rateLimit: 1000,
      burstLimit: 50,
      tier: "Enterprise",
    },
  ]);

  const handleUpdateLimit = (id) => {
    console.log(`Updating rate limit for merchant: ${id}`);
  };

  return (
    <div className="rate_limit_config">
      <div className="config_header">
        <h3>Rate Limit Configuration</h3>
        <p className="config_description">
          Configure API rate limits per merchant (requests per minute)
        </p>
      </div>

      <div className="config_table">
        <div className="table_header">
          <div className="cell">Merchant</div>
          <div className="cell">Tier</div>
          <div className="cell">Rate Limit (req/min)</div>
          <div className="cell">Burst Limit</div>
          <div className="cell">Actions</div>
        </div>

        {merchants.map((merchant) => (
          <div key={merchant.id} className="table_row">
            <div className="cell">
              <p>{merchant.name}</p>
            </div>
            <div className="cell">
              <span className="tier_badge">{merchant.tier}</span>
            </div>
            <div className="cell">
              <input
                type="number"
                value={merchant.rateLimit}
                className="limit_input"
                onChange={(e) => {
                  const updated = merchants.map((m) =>
                    m.id === merchant.id
                      ? { ...m, rateLimit: parseInt(e.target.value) }
                      : m,
                  );
                  setMerchants(updated);
                }}
              />
            </div>
            <div className="cell">
              <input
                type="number"
                value={merchant.burstLimit}
                className="limit_input"
                onChange={(e) => {
                  const updated = merchants.map((m) =>
                    m.id === merchant.id
                      ? { ...m, burstLimit: parseInt(e.target.value) }
                      : m,
                  );
                  setMerchants(updated);
                }}
              />
            </div>
            <div className="cell">
              <button
                className="save_button"
                onClick={() => handleUpdateLimit(merchant.id)}
              >
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RateLimitConfig;
