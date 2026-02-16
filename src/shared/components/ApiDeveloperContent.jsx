import React, { useState } from "react";
import styles from "./ApiDeveloperContent.module.css";

const ApiDeveloperContent = () => {
  const [activeTab, setActiveTab] = useState("quick-start");

  const renderTabContent = () => {
    switch (activeTab) {
      case "quick-start":
        return <QuickStartTab />;
      case "api-keys":
        return <ApiKeysTab />;
      case "webhooks":
        return <WebhooksTab />;
      case "logs":
        return <LogsTab />;
      case "documentation":
        return <DocumentationTab />;
      default:
        return <QuickStartTab />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        {["quick-start", "api-keys", "webhooks", "logs", "documentation"].map(
          (tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${
                activeTab === tab ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </button>
          ),
        )}
      </div>
      {renderTabContent()}
    </div>
  );
};

// --- Tab Components ---

const QuickStartTab = () => (
  <div className={styles.sectionContent}>
    <div className={styles.leftColumn}>
      <WelcomeBanner
        title="Welcome to PrivyID API Platform"
        description="Get started with privacy-first identity verification in less than 30 minutes. No document storage needed."
      />
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Integration Checklist</h3>
          <div className={styles.checklistProgress}>
            <span>0 of 7 completed</span>
          </div>
        </div>
        <ChecklistItem
          label="1. Generate API Keys (Sandbox)"
          time="2 mins"
          isActive={true}
        />
        <ChecklistItem
          label="2. Install SDK or Configure HTTP Client"
          time="2 mins"
        />
        <ChecklistItem label="3. Make Your First API Call" time="2 mins" />
        <ChecklistItem label="4. Set Up Webhook Endpoint" time="2 mins" />
        <ChecklistItem label="5. Test Token Validation" time="2 mins" />
        <ChecklistItem label="6. Generate Production Keys" time="2 mins" />
        <ChecklistItem label="7. Go Live" time="2 mins" />
      </div>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Quick Start Code Examples</h3>
        {/* Code block placeholder */}
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <span className={styles.codeLanguage}>Javascript</span>
            <div className={styles.copyButton}>Copy</div>
          </div>
          <pre>
            {`const privy = new PrivyID({
  apiKey: 'pk_test_...'
});

await privy.verify({
  userId: 'user_123',
  type: 'identity'
});`}
          </pre>
        </div>
      </div>
    </div>
    <div className={styles.rightColumn}>
      <div className={styles.tocTitle}>
        <span className="material-symbols-outlined">menu</span>
        On this page
      </div>
      <a href="#" className={styles.tocLink}>
        Welcome to PrivyID
      </a>
      <a href="#" className={styles.tocLink}>
        Integration Checklist
      </a>
      <a href="#" className={styles.tocLink}>
        Code Examples
      </a>
      <a href="#" className={styles.tocLink}>
        Installing SDK
      </a>
    </div>
  </div>
);

const ApiKeysTab = () => {
  const [mode, setMode] = useState("sandbox");

  return (
    <div className={styles.sectionContent}>
      <div className={styles.leftColumn}>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <button
            className={
              mode === "sandbox" ? styles.primaryButton : styles.secondaryButton
            }
            onClick={() => setMode("sandbox")}
          >
            Sandbox Mode
          </button>
          <button
            className={
              mode === "production"
                ? styles.primaryButton
                : styles.secondaryButton
            }
            onClick={() => setMode("production")}
          >
            Production Mode
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>
              {mode === "sandbox" ? "Sandbox" : "Production"} API Keys
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-sub-600)" }}>
              Use these for testing. No real charges or data.
            </p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Publishable Key (Client-side safe)
            </label>
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type="text"
                value="pk_test_4eC39HqLyjWDarjtT1zdp7dc"
                readOnly
              />
              <button className={styles.copyButton}>
                <span className="material-symbols-outlined">content_copy</span>
              </button>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Secret Key (Server-side only)
            </label>
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type="password"
                value="sk_test_************************"
                readOnly
              />
              <button className={styles.copyButton}>
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className={styles.copyButton}>
                <span className="material-symbols-outlined">content_copy</span>
              </button>
            </div>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--state-warning-base)",
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "1rem" }}
              >
                warning
              </span>
              Keep this secret! Never expose in client code
            </p>
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.tocTitle}>
          <span className="material-symbols-outlined">menu</span>
          On this page
        </div>
        <a href="#" className={styles.tocLink}>
          API Keys
        </a>
        <a href="#" className={styles.tocLink}>
          Authentication
        </a>
        <a href="#" className={styles.tocLink}>
          Errors
        </a>
      </div>
    </div>
  );
};

const WebhooksTab = () => (
  <div className={styles.sectionContent}>
    <div className={styles.leftColumn}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Webhook Configuration</h3>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Webhook URL</label>
          <div className={styles.inputWrapper}>
            <div className={styles.inputPrefix}>https://</div>
            <input
              className={styles.input}
              type="text"
              placeholder="yourapp.com/privyid/webhook"
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Events to send:</label>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
              }}
            >
              <input type="checkbox" defaultChecked /> verification.completed
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
              }}
            >
              <input type="checkbox" defaultChecked /> verification.pending
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
              }}
            >
              <input type="checkbox" /> verification.failed
            </label>
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <button className={styles.primaryButton}>Save Changes</button>
          <button className={styles.secondaryButton}>Cancel</button>
        </div>
      </div>
    </div>
    <div className={styles.rightColumn}>
      <div className={styles.tocTitle}>
        <span className="material-symbols-outlined">menu</span>
        On this page
      </div>
      <a href="#" className={styles.tocLink}>
        Configuration
      </a>
      <a href="#" className={styles.tocLink}>
        Events
      </a>
      <a href="#" className={styles.tocLink}>
        Security
      </a>
    </div>
  </div>
);

const LogsTab = () => (
  <div className={styles.sectionContent}>
    <div className={styles.leftColumn}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Recent API Requests</h3>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.875rem",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid var(--stroke-soft-200)",
                  textAlign: "left",
                }}
              >
                <th style={{ padding: "0.75rem" }}>Timestamp</th>
                <th style={{ padding: "0.75rem" }}>Method</th>
                <th style={{ padding: "0.75rem" }}>Endpoint</th>
                <th style={{ padding: "0.75rem" }}>Status</th>
                <th style={{ padding: "0.75rem" }}>Latency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "0.75rem" }}>Jan 16, 10:30 AM</td>
                <td style={{ padding: "0.75rem" }}>POST</td>
                <td style={{ padding: "0.75rem" }}>/v1/kyc/initiate</td>
                <td style={{ padding: "0.75rem" }}>
                  <span style={{ color: "var(--state-success-base)" }}>
                    200 OK
                  </span>
                </td>
                <td style={{ padding: "0.75rem" }}>145ms</td>
              </tr>
              <tr>
                <td style={{ padding: "0.75rem" }}>Jan 16, 10:28 AM</td>
                <td style={{ padding: "0.75rem" }}>GET</td>
                <td style={{ padding: "0.75rem" }}>/v1/kyc/status/123</td>
                <td style={{ padding: "0.75rem" }}>
                  <span style={{ color: "var(--state-success-base)" }}>
                    200 OK
                  </span>
                </td>
                <td style={{ padding: "0.75rem" }}>80ms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className={styles.rightColumn}>
      <div className={styles.tocTitle}>
        <span className="material-symbols-outlined">menu</span>
        On this page
      </div>
      <a href="#" className={styles.tocLink}>
        Requests
      </a>
      <a href="#" className={styles.tocLink}>
        Errors
      </a>
    </div>
  </div>
);

const DocumentationTab = () => (
  <div className={styles.sectionContent}>
    <div className={styles.leftColumn}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Documentation Resources</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <a href="#" className={styles.checklistItem}>
            <div className={styles.checklistItemContent}>
              <span className="material-symbols-outlined">article</span>
              <span className={styles.checklistItemLabel}>
                Getting Started Guide
              </span>
            </div>
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a href="#" className={styles.checklistItem}>
            <div className={styles.checklistItemContent}>
              <span className="material-symbols-outlined">api</span>
              <span className={styles.checklistItemLabel}>API Reference</span>
            </div>
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a href="#" className={styles.checklistItem}>
            <div className={styles.checklistItemContent}>
              <span className="material-symbols-outlined">code</span>
              <span className={styles.checklistItemLabel}>
                SDKs & Libraries
              </span>
            </div>
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
    <div className={styles.rightColumn}>
      <div className={styles.tocTitle}>
        <span className="material-symbols-outlined">menu</span>
        On this page
      </div>
      <a href="#" className={styles.tocLink}>
        Guides
      </a>
      <a href="#" className={styles.tocLink}>
        Reference
      </a>
      <a href="#" className={styles.tocLink}>
        Support
      </a>
    </div>
  </div>
);

// --- Sub-components ---

const WelcomeBanner = ({ title, description }) => (
  <div className={styles.welcomeBanner}>
    <div className={styles.bannerIcon}>
      <span className="material-symbols-outlined">lock</span>
    </div>
    <div className={styles.bannerText}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const ChecklistItem = ({ label, time, isActive }) => (
  <div
    className={`${styles.checklistItem} ${isActive ? styles.checklistItemActive : ""}`}
  >
    <div className={styles.checklistItemContent}>
      <input type="checkbox" checked={false} readOnly />
      <span className={styles.checklistItemLabel}>{label}</span>
    </div>
    <div className={styles.checklistItemContent}>
      <span className={styles.checklistItemTime}>{time}</span>
      <span
        className="material-symbols-outlined"
        style={{ fontSize: "1.25rem" }}
      >
        expand_more
      </span>
    </div>
  </div>
);

export default ApiDeveloperContent;
