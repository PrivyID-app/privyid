import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import ApiKeysTable from "../components/api/ApiKeysTable";
import ApiAnalytics from "../components/api/ApiAnalytics";
import RateLimitConfig from "../components/api/RateLimitConfig";
import WebhookManager from "../components/api/WebhookManager";
import "../super-admin.css";

const ApiPage = () => {
  const [environment, setEnvironment] = useState("production");
  const [activeTab, setActiveTab] = useState("keys");

  const apiMetrics = [
    {
      icon: "qr-scan-line.svg",
      value: "45,230",
      title: "Total Requests (24h)",
      rate: "+8.5%",
      trend: "up",
    },
    {
      icon: "time-line-2.svg",
      value: "1.2s",
      title: "Avg Response Time",
      rate: "-0.3s",
      trend: "up",
    },
    {
      icon: "building-line.svg",
      value: "99.9%",
      title: "API Uptime",
      rate: "+0.1%",
      trend: "up",
    },
    {
      icon: "tabler_currency-naira.svg",
      value: "0.02%",
      title: "Error Rate",
      rate: "-0.01%",
      trend: "up",
    },
  ];

  const tabs = [
    { key: "keys", label: "API Keys", icon: "key" },
    { key: "analytics", label: "Analytics", icon: "analytics" },
    { key: "rate_limits", label: "Rate Limits", icon: "speed" },
    { key: "webhooks", label: "Webhooks", icon: "webhook" },
    { key: "docs", label: "Documentation", icon: "description" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "keys":
        return <ApiKeysTable environment={environment} />;
      case "analytics":
        return <ApiAnalytics />;
      case "rate_limits":
        return <RateLimitConfig />;
      case "webhooks":
        return <WebhookManager />;
      case "docs":
        return (
          <div className="api_documentation">
            <h3>API Documentation</h3>
            <div className="doc_links">
              <a href="#" className="doc_link">
                <span className="material-symbols-outlined">description</span>
                <div>
                  <h4>API Reference</h4>
                  <p>Complete API endpoint documentation</p>
                </div>
              </a>
              <a href="#" className="doc_link">
                <span className="material-symbols-outlined">code</span>
                <div>
                  <h4>Code Samples</h4>
                  <p>Integration examples in multiple languages</p>
                </div>
              </a>
              <a href="#" className="doc_link">
                <span className="material-symbols-outlined">webhook</span>
                <div>
                  <h4>Webhook Events</h4>
                  <p>Available webhook events and payloads</p>
                </div>
              </a>
              <a href="#" className="doc_link">
                <span className="material-symbols-outlined">security</span>
                <div>
                  <h4>Authentication</h4>
                  <p>API authentication and security best practices</p>
                </div>
              </a>
            </div>
          </div>
        );
      default:
        return <ApiKeysTable environment={environment} />;
    }
  };

  return (
    <>
      <PageHeader
        title="API & Developers"
        description="Manage API keys, monitor usage, and configure integrations"
      />

      <div className="content_area">
        {/* Environment Toggle */}
        <div className="environment_toggle">
          <button
            className={`env_button ${
              environment === "production" ? "active" : ""
            }`}
            onClick={() => setEnvironment("production")}
          >
            <span className="material-symbols-outlined">cloud</span>
            Production
          </button>
          <button
            className={`env_button ${
              environment === "sandbox" ? "active" : ""
            }`}
            onClick={() => setEnvironment("sandbox")}
          >
            <span className="material-symbols-outlined">science</span>
            Sandbox
          </button>
        </div>

        {/* API Metrics */}
        <div className="overview_wrapper">
          {apiMetrics.map((metric, index) => (
            <div key={index} className="overview_card">
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <img
                    src={`/src/assets/images/${metric.icon}`}
                    alt={`${metric.title} Icon`}
                  />
                </div>
                <div className="card_rate">
                  <span
                    className={`material-symbols-outlined ${metric.trend}_icon`}
                  >
                    {metric.trend === "up" ? "arrow_upward" : "arrow_downward"}
                  </span>
                  <p className="rate_value">{metric.rate}</p>
                </div>
              </div>
              <div className="card_content">
                <p className="card_value">{metric.value}</p>
                <p className="card_title">{metric.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="api_tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`api_tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span className="material-symbols-outlined">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="api_tab_content">{renderTabContent()}</div>
      </div>
    </>
  );
};

export default ApiPage;
