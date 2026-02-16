import React, { useState } from "react";
import Tabs from "./Tabs";
import Accordion from "./Accordion";
import FileDropzone from "./FileDropzone";
import RadioButton from "./RadioButton";
import StatusChip from "./StatusChip";
import Table from "./Table";
import Drawer from "./Drawer";
import styles from "./SupportContent.module.css";

const SupportContent = () => {
  const [activeTab, setActiveTab] = useState("submit-ticket");
  const [priority, setPriority] = useState("low");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const tabs = [
    { label: "Submit Ticket", key: "submit-ticket" },
    { label: "Tickets", key: "tickets" },
    { label: "Resources", key: "resources" },
  ];

  // Mock Ticket Data
  const tickets = [
    {
      id: "TKT-1234",
      issue: "API Authentication Issue",
      category: "Technical",
      status: "In Progress",
      date: "24-01-2026",
    },
    {
      id: "TKT-1198",
      issue: "Batch Verification Pricing",
      category: "Billing",
      status: "Resolved",
      date: "24-01-2026",
    },
    {
      id: "TKT-1150",
      issue: "Webhook Not Triggering",
      category: "Technical",
      status: "Pending Support",
      date: "23-01-2026",
    },
  ];

  const resources = [
    {
      title: "API Documentation",
      description: "Complete API reference with code examples",
      link: "View Docs",
      icon: "code",
    },
    {
      title: "Getting Started Guide",
      description: "Step-by-step integration tutorials",
      link: "Read Guide",
      icon: "menu_book",
    },
    {
      title: "Video Tutorials",
      description: "Watch how to integrate and use PrivyID",
      link: "Watch Videos",
      icon: "play_circle",
    },
    {
      title: "Community Forum",
      description: "Connect with other developers and merchants",
      link: "Join Community",
      icon: "forum",
    },
    {
      title: "Status Page",
      description: "Real-time platform status and uptime",
      link: "Check Status",
      icon: "dns",
    },
    {
      title: "Changelog",
      description: "Latest features and updates",
      link: "View Updates",
      icon: "history",
    },
  ];

  const columns = [
    { header: "Ticket ID", key: "id", width: "120px" },
    { header: "Issue", key: "issue" },
    { header: "Category", key: "category", width: "150px" },
    {
      header: "Status",
      key: "status",
      width: "150px",
      render: (val) => <StatusChip status={val} />,
    },
    { header: "Date", key: "date", width: "150px" },
  ];

  const actions = [
    { icon: "visibility", onClick: (row) => console.log("View", row) },
    { icon: "delete", onClick: (row) => console.log("Delete", row) },
  ];

  const renderSubmitTicket = () => (
    <div className={styles.frame}>
      <div className={styles.contentWrapper}>
        {/* Priority Selection */}
        <div className={styles.priorityOptions}>
          {["low", "medium", "high", "urgent"].map((p) => (
            <RadioButton
              key={p}
              checked={priority === p}
              onChange={() => setPriority(p)}
              label={p.charAt(0).toUpperCase() + p.slice(1)}
              className={
                styles[`radio${p.charAt(0).toUpperCase() + p.slice(1)}`]
              }
            />
          ))}
        </div>

        {/* Form Group */}
        <div className={styles.form}>
          <div className={styles.inputFields}>
            <div className={styles.inputGroup}>
              <div className={styles.label}>
                Subject <span className={styles.required}>*</span>
              </div>
              <input
                className={styles.inputBasic}
                type="text"
                placeholder="Brief Description of your issue"
              />
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.label}>
                Category <span className={styles.required}>*</span>
              </div>
              <select className={styles.selectBasic}>
                <option>Technical Issue</option>
                <option>Billing</option>
                <option>General Inquiry</option>
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.label}>
              Description <span className={styles.required}>*</span>
            </div>
            <textarea
              className={styles.textAreaBasic}
              placeholder="Please provide detailed information about your issue"
            />
          </div>

          <div className={styles.fileUploadArea_container}>
            <FileDropzone onFileSelect={(file) => console.log(file)} />
          </div>

          <div className={styles.buttonWrapper}>
            <button className={styles.draftButton}>
              <span className="material-symbols-outlined">save</span>
              Save as Draft
            </button>
            <button className="primary_button">
              <span className="material-symbols-outlined">send</span>
              Submit Ticket
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Sidebar */}
      <div className={styles.faqWrapper}>
        <div className={styles.faqTitle}>
          <span className="material-symbols-outlined">help</span>
          Frequently Asked Questions
        </div>
        <Accordion title="How long does verification take?">
          <div
            style={{
              padding: "0.5rem",
              color: "var(--text-sub-500)",
              fontSize: "0.875rem",
            }}
          >
            Verification typically takes between a few seconds to 24 hours
            depending on the document type.
          </div>
        </Accordion>
        <Accordion title="What happens if verification fails?">
          <div
            style={{
              padding: "0.5rem",
              color: "var(--text-sub-500)",
              fontSize: "0.875rem",
            }}
          >
            You will receive a detailed reason for the rejection, and the user
            can retry with valid documents.
          </div>
        </Accordion>
        <Accordion title="Can I test the API before live?">
          <div
            style={{
              padding: "0.5rem",
              color: "var(--text-sub-500)",
              fontSize: "0.875rem",
            }}
          >
            Yes, use the Sandbox environment keys provided in the API tab.
          </div>
        </Accordion>
      </div>
    </div>
  );

  const renderTickets = () => (
    <div className={styles.ticketsSection}>
      <div className={styles.searchBar}>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <input
            className={styles.inputBasic}
            placeholder="Search tickets..."
            style={{ width: "300px" }}
          />
        </div>
        <button
          className="primary_button"
          onClick={() => setActiveTab("submit-ticket")}
        >
          <span className="material-symbols-outlined">add</span>
          New Ticket
        </button>
      </div>

      <Table
        columns={columns}
        data={tickets}
        showCheckbox={true}
        actions={actions}
      />
    </div>
  );

  const renderResources = () => (
    <div className={styles.resourcesSection}>
      <div className={styles.resourceCategory}>
        <div className={styles.categoryTitle}>
          <span className="material-symbols-outlined">library_books</span>
          Documentation & Guides
        </div>
        <div className={styles.resourceCardsGrid}>
          {resources.map((res, i) => (
            <div key={i} className={styles.resourceCard}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "32px", color: "var(--color-primary)" }}
              >
                {res.icon}
              </span>
              <div className={styles.resourceCardContent}>
                <div style={{ fontWeight: 500 }}>{res.title}</div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-soft-400)",
                  }}
                >
                  {res.description}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    color: "var(--color-primary)",
                    fontSize: "0.875rem",
                    marginTop: "0.5rem",
                    fontWeight: 500,
                  }}
                >
                  {res.link}{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "16px" }}
                  >
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      {/* Header Cards (Live Chat, Email, Phone) */}
      <div className={styles.cardWrapper}>
        <div className={styles.supportCard}>
          <div className={styles.supportCardHeader}>
            <div className={styles.supportIcon}>
              <span
                className="material-symbols-outlined"
                style={{ color: "#1fc16b" }}
              >
                chat
              </span>
            </div>
            <div className={styles.supportCardText}>
              <div className={styles.supportCardTitle}>Live Chat</div>
              <div className={styles.supportCardSubtitle}>Online now</div>
            </div>
          </div>
          <div
            className={styles.supportCardButton}
            onClick={() => setIsDrawerOpen(true)}
          >
            Start Chat
          </div>
        </div>

        <div className={styles.supportCard}>
          <div className={styles.supportCardHeader}>
            <div className={styles.supportIcon}>
              <span
                className="material-symbols-outlined"
                style={{ color: "#47c2ff" }}
              >
                mail
              </span>
            </div>
            <div className={styles.supportCardText}>
              <div className={styles.supportCardTitle}>Email Support</div>
              <div className={styles.supportCardSubtitle}>24-48h response</div>
            </div>
          </div>
          <a
            href="mailto:support@privyid.com"
            className={styles.supportCardButton}
          >
            support@privyid.com
          </a>
        </div>

        <div className={styles.supportCard}>
          <div className={styles.supportCardHeader}>
            <div className={styles.supportIcon}>
              <span
                className="material-symbols-outlined"
                style={{ color: "#7d52f4" }}
              >
                call
              </span>
            </div>
            <div className={styles.supportCardText}>
              <div className={styles.supportCardTitle}>Phone Support</div>
              <div className={styles.supportCardSubtitle}>Mon-Fri 9AM-6PM</div>
            </div>
          </div>
          <a href="tel:+2349021234567" className={styles.supportCardButton}>
            +234 902 123 4567
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={styles.tabsContainer}>
        <div className={styles.headerSection}>
          <div className={styles.titleSection}>
            <div className={styles.titleMain}>
              {activeTab === "submit-ticket"
                ? "Create Support Ticket"
                : activeTab === "tickets"
                  ? "Your Support Tickets"
                  : "Support Resources"}
            </div>
            <div className={styles.titleSub}>
              {activeTab === "submit-ticket"
                ? "Our support team typically responds within 2-4 hours"
                : activeTab === "tickets"
                  ? "Track and manage your support requests"
                  : "Browse documentation, guides, and community resources"}
            </div>
          </div>
        </div>

        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className={styles.customTabs}
        />

        <div
          style={{
            flex: 1,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {activeTab === "submit-ticket" && renderSubmitTicket()}
          {activeTab === "tickets" && renderTickets()}
          {activeTab === "resources" && renderResources()}
        </div>
      </div>

      {/* Live Chat Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Live Chat Support"
        width="450px"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            color: "var(--text-soft-400)",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "48px" }}
          >
            chat_bubble_outline
          </span>
          <p>How can we help you today?</p>
          <button className="primary_button" style={{ width: "100%" }}>
            Start Conversation
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default SupportContent;
