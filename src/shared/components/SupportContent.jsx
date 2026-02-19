import React, { useState, useEffect } from "react";
import Tabs from "./Tabs";
import Accordion from "./Accordion";
import FileDropzone from "./FileDropzone";
import RadioButton from "./RadioButton";
import StatusChip from "./StatusChip";
import Table from "./Table";
import Drawer from "./Drawer";
import CustomSelect from "./CustomSelect";
import styles from "./SupportContent.module.css";
import { supabase } from "../services/supabase";
import { useGlobal } from "../../app/GlobalContext";
import TicketConversation from "./TicketConversation";

const SupportContent = () => {
  const { showToast } = useGlobal();
  const [activeTab, setActiveTab] = useState("submit-ticket");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("technical");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ subject: "", description: "" });
  const [selectedTicketId, setSelectedTicketId] = useState(null);

  useEffect(() => {
    if (activeTab === "tickets") {
      fetchTickets();
    }
  }, [activeTab]);

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) return;

      const { data, error } = await supabase
        .from("tickets")
        .select("*")
        .eq("merchant_id", userData.user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTickets(data || []);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitTicket = async (e) => {
    e.preventDefault();
    if (!formData.subject || !formData.description) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    setSubmitting(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) throw new Error("Not logged in");

      const { error } = await supabase.from("tickets").insert([
        {
          merchant_id: userData.user.id,
          subject: formData.subject,
          message: formData.description,
          priority,
          status: "open",
        },
      ]);

      if (error) throw error;

      showToast("Ticket submitted successfully!", "success");
      setFormData({ subject: "", description: "" });
      setActiveTab("tickets");
    } catch (error) {
      showToast(error.message || "Failed to submit ticket.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const categoryOptions = [
    { label: "Technical Issue", value: "technical" },
    { label: "Billing", value: "billing" },
    { label: "General Inquiry", value: "general" },
  ];

  const tabs = [
    { label: "Submit Ticket", key: "submit-ticket" },
    { label: "Tickets", key: "tickets" },
    { label: "Resources", key: "resources" },
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
    {
      header: "Ticket ID",
      key: "id",
      width: "120px",
      render: (val) => `#${val.split("-")[0].toUpperCase()}`,
    },
    { header: "Subject", key: "subject" },
    {
      header: "Priority",
      key: "priority",
      width: "100px",
      render: (val) => val.toUpperCase(),
    },
    {
      header: "Status",
      key: "status",
      width: "150px",
      render: (val) => <StatusChip status={val} />,
    },
    {
      header: "Date",
      key: "created_at",
      width: "150px",
      render: (val) => new Date(val).toLocaleDateString(),
    },
  ];

  const actions = [
    { icon: "visibility", onClick: (row) => setSelectedTicketId(row.id) },
  ];

  const renderSubmitTicket = () => (
    <div className={styles.frame}>
      <div className={styles.contentWrapper}>
        <form onSubmit={handleSubmitTicket} className={styles.form}>
          {/* Priority Selection */}
          <div className={styles.priorityOptions}>
            {["low", "medium", "high", "urgent"].map((p) => (
              <RadioButton
                key={p}
                checked={priority === p}
                onChange={() => setPriority(p)}
                label={p.charAt(0).toUpperCase() + p.slice(1)}
              />
            ))}
          </div>

          <div className={styles.inputFields}>
            <div className={styles.inputGroup}>
              <div className={styles.label}>
                Subject <span className={styles.required}>*</span>
              </div>
              <input
                className={styles.inputBasic}
                type="text"
                name="subject"
                placeholder="Brief Description of your issue"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.label}>
              Description <span className={styles.required}>*</span>
            </div>
            <textarea
              className={styles.textAreaBasic}
              name="description"
              placeholder="Please provide detailed information about your issue"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.fileUploadArea_container}>
            <FileDropzone onFileSelect={(file) => console.log(file)} />
          </div>

          <div className={styles.buttonWrapper}>
            <button
              type="submit"
              className="primary_button"
              disabled={submitting}
            >
              <span className="material-symbols-outlined">send</span>
              {submitting ? "Submitting..." : "Submit Ticket"}
            </button>
          </div>
        </form>
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
      </div>
    </div>
  );

  const renderTickets = () => {
    if (selectedTicketId) {
      return (
        <TicketConversation
          ticketId={selectedTicketId}
          onBack={() => {
            setSelectedTicketId(null);
            fetchTickets();
          }}
        />
      );
    }

    return (
      <div className={styles.ticketsSection}>
        <div className={styles.searchBar}>
          <button
            className="primary_button"
            onClick={() => setActiveTab("submit-ticket")}
          >
            <span className="material-symbols-outlined">add</span>
            New Ticket
          </button>
        </div>

        {loading ? (
          <p>Loading tickets...</p>
        ) : (
          <Table
            columns={columns}
            data={tickets}
            showCheckbox={false}
            actions={actions}
          />
        )}
      </div>
    );
  };

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
                style={{ fontSize: "32px", color: "var(--icon-sub-600)" }}
              >
                {res.icon}
              </span>
              <div className={styles.resourceCardContent}>
                <div style={{ fontWeight: 400 }}>{res.title}</div>
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
                    fontWeight: 400,
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
