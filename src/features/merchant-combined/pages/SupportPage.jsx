import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const SupportPage = () => {
  const supportOptions = [
    {
      title: "Technical Support",
      description: "Get help with API integrations and technical issues",
      icon: "settings_input_component",
      email: "tech-support@privy.id",
    },
    {
      title: "Account Management",
      description: "Manage your merchant account and credentials",
      icon: "manage_accounts",
      email: "accounts@privy.id",
    },
    {
      title: "Billing & Invoices",
      description: "Inquiries about payments and billing cycles",
      icon: "receipt_long",
      email: "billing@privy.id",
    },
  ];

  return (
    <div className="content_wrapper">
      <PageHeader
        title="Support & Help Center"
        description="We're here to help you with any questions or issues"
      />
      <div className="content_area">
        <div className="overview_wrapper">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className="overview_card"
              style={{ cursor: "pointer" }}
            >
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: "1.5rem",
                      color: "var(--primary-color-500)",
                    }}
                  >
                    {option.icon}
                  </span>
                </div>
              </div>
              <div className="card_content">
                <p
                  className="card_title"
                  style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}
                >
                  {option.title}
                </p>
                <p
                  className="card_description"
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-soft-400)",
                    fontWeight: 300,
                  }}
                >
                  {option.description}
                </p>
                <p
                  className="card_value"
                  style={{
                    fontSize: "1rem",
                    marginTop: "1rem",
                    color: "var(--primary-color-500)",
                  }}
                >
                  {option.email}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="recent_verifications" style={{ marginTop: "3rem" }}>
          <div className="top_area">
            <p className="section_title">Frequently Asked Questions</p>
          </div>
          <div
            className="faq_list"
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "1.5rem",
              padding: "1rem",
            }}
          >
            <div className="faq_item">
              <p style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
                How do I start a batch verification?
              </p>
              <p
                style={{
                  fontWeight: 300,
                  color: "var(--text-soft-400)",
                  fontSize: "0.875rem",
                }}
              >
                You can upload a CSV or Excel file in the Batch Verification
                section. Make sure your file follows the required template.
              </p>
            </div>
            <div className="faq_item">
              <p style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
                What document formats are supported?
              </p>
              <p
                style={{
                  fontWeight: 300,
                  color: "var(--text-soft-400)",
                  fontSize: "0.875rem",
                }}
              >
                We support JPEG, PNG, PDF, and MP4 formats for supporting
                documents, with a maximum size of 50 MB per file.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
