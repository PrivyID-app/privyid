import React, { useState } from "react";
import Tabs from "./Tabs";
import Accordion from "./Accordion";
import ImageCheckbox from "./ImageCheckbox";
import styles from "./ApiDeveloperContent.module.css";

const ApiDeveloperContent = () => {
  const [activeTab, setActiveTab] = useState("quick-start");

  const tabs = [
    { label: "Quick Start", key: "quick-start" },
    { label: "API Keys", key: "api-keys" },
    { label: "Webhooks", key: "webhooks" },
    { label: "Logs", key: "logs" },
    { label: "Documentation", key: "documentation" },
  ];

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
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
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
        <Accordion
          title={
            <div className={styles.checklistItemHeader}>
              <ImageCheckbox checked={true} onChange={() => {}} />
              <span className={styles.checklistItemLabel}>
                1. Generate API Keys (Sandbox)
              </span>
              <span className={styles.checklistItemTime}>2 mins</span>
            </div>
          }
          className={styles.accordionString}
        >
          <p className={styles.accordionBody}>
            Go to the API Keys tab and generate your sandbox keys to start
            testing.
          </p>
        </Accordion>
        <Accordion
          title={
            <div className={styles.checklistItemHeader}>
              <ImageCheckbox checked={false} onChange={() => {}} />
              <span className={styles.checklistItemLabel}>
                2. Install SDK or Configure HTTP Client
              </span>
              <span className={styles.checklistItemTime}>2 mins</span>
            </div>
          }
          className={styles.accordionString}
        >
          <p className={styles.accordionBody}>
            Install the official SDK for your language or configure your HTTP
            client.
          </p>
        </Accordion>
        <Accordion
          title={
            <div className={styles.checklistItemHeader}>
              <ImageCheckbox checked={false} onChange={() => {}} />
              <span className={styles.checklistItemLabel}>
                3. Make Your First API Call
              </span>
              <span className={styles.checklistItemTime}>2 mins</span>
            </div>
          }
          className={styles.accordionString}
        >
          <p className={styles.accordionBody}>
            Use the generated keys to authenticate and make your first request.
          </p>
        </Accordion>
        {/* Add more items as needed, simplifying for brevity/example */}
      </div>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Quick Start Code Examples</h3>
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
  const [activeTab, setActiveTab] = useState("sandbox");

  const tabs = [
    { label: "Sandbox Mode", key: "sandbox" },
    { label: "Production Mode", key: "production" },
  ];

  return (
    <div className={styles.sectionContent}>
      <div className={styles.leftColumn}>
        <div style={{ marginBottom: "1rem" }}>
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>
              {activeTab === "sandbox" ? "Sandbox" : "Production"} API Keys
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-sub-600)",
                fontWeight: "300",
              }}
            >
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
              <ImageCheckbox checked={true} onChange={() => {}} />
              verification.completed
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: "300",
              }}
            >
              <ImageCheckbox checked={true} onChange={() => {}} />
              verification.pending
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: "300",
              }}
            >
              <ImageCheckbox checked={false} onChange={() => {}} />
              verification.failed
            </label>
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <button className="primary_button">Save Changes</button>
          <button className="secondary_button">Cancel</button>
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
                <th style={{ padding: "0.75rem", fontWeight: "300" }}>
                  Timestamp
                </th>
                <th style={{ padding: "0.75rem", fontWeight: "300" }}>
                  Method
                </th>
                <th style={{ padding: "0.75rem", fontWeight: "300" }}>
                  Endpoint
                </th>
                <th style={{ padding: "0.75rem", fontWeight: "300" }}>
                  Status
                </th>
                <th style={{ padding: "0.75rem", fontWeight: "300" }}>
                  Latency
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "0.75rem",
                    fontWeight: "300",
                    color: "var(--text-sub-600)",
                  }}
                >
                  Jan 16, 10:30 AM
                </td>
                <td
                  style={{
                    padding: "0.75rem",
                    fontWeight: "300",
                    color: "var(--text-sub-600)",
                  }}
                >
                  POST
                </td>
                <td
                  style={{
                    padding: "0.75rem",
                    fontWeight: "300",
                    color: "var(--text-sub-600)",
                  }}
                >
                  /v1/kyc/initiate
                </td>
                <td
                  style={{
                    padding: "0.75rem",
                    fontWeight: "300",
                    color: "var(--text-sub-600)",
                  }}
                >
                  <span style={{ color: "var(--state-success-base)" }}>
                    200 OK
                  </span>
                </td>
                <td
                  style={{
                    padding: "0.75rem",
                    fontWeight: "300",
                    color: "var(--text-sub-600)",
                  }}
                >
                  145ms
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "0.75rem",
                    fontWeight: "300",
                    color: "var(--text-sub-600)",
                  }}
                >
                  Jan 16, 10:28 AM
                </td>
                <td
                  style={{
                    padding: "0.75rem",
                    fontWeight: "300",
                    color: "var(--text-sub-600)",
                  }}
                >
                  GET
                </td>
                <td
                  style={{
                    padding: "0.75rem",
                    fontWeight: "300",
                    color: "var(--text-sub-600)",
                  }}
                >
                  /v1/kyc/status/123
                </td>
                <td
                  style={{
                    padding: "0.75rem",
                    fontWeight: "300",
                    color: "var(--text-sub-600)",
                  }}
                >
                  <span style={{ color: "var(--state-success-base)" }}>
                    200 OK
                  </span>
                </td>
                <td
                  style={{
                    padding: "0.75rem",
                    fontWeight: "300",
                    color: "var(--text-sub-600)",
                  }}
                >
                  80ms
                </td>
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
          <a href="#" className={styles.docItem}>
            <div className={styles.docItemContent}>
              <span className="material-symbols-outlined">article</span>
              <span className={styles.docItemLabel}>Getting Started Guide</span>
            </div>
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a href="#" className={styles.docItem}>
            <div className={styles.docItemContent}>
              <span className="material-symbols-outlined">api</span>
              <span className={styles.docItemLabel}>API Reference</span>
            </div>
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a href="#" className={styles.docItem}>
            <div className={styles.docItemContent}>
              <span className="material-symbols-outlined">code</span>
              <span className={styles.docItemLabel}>SDKs & Libraries</span>
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

export default ApiDeveloperContent;
