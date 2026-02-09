import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import AdminAuditTable from "../components/AdminAuditTable";
import CustomSelect from "../../../shared/components/CustomSelect";
import "../super-admin.css";

const AuditLogsPage = () => {
  const [filterAction, setFilterAction] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [dateRange, setDateRange] = useState("7days");

  const actionOptions = [
    { value: "all", label: "All Actions" },
    { value: "login", label: "Login" },
    { value: "logout", label: "Logout" },
    { value: "merchant_created", label: "Merchant Created" },
    { value: "settings_updated", label: "Settings Updated" },
    { value: "verification_approved", label: "Verification Approved" },
    { value: "verification_rejected", label: "Verification Rejected" },
    { value: "api_key_generated", label: "API Key Generated" },
    { value: "api_key_revoked", label: "API Key Revoked" },
  ];

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "success", label: "Success" },
    { value: "failed", label: "Failed" },
  ];

  const dateRangeOptions = [
    { value: "today", label: "Today" },
    { value: "7days", label: "Last 7 Days" },
    { value: "30days", label: "Last 30 Days" },
    { value: "90days", label: "Last 90 Days" },
    { value: "custom", label: "Custom Range" },
  ];

  const handleExport = (format) => {
    console.log(`Exporting audit logs as ${format}`);
    // Export logic would go here
  };

  return (
    <>
      <PageHeader
        title="Audit Logs"
        description="View system logs and activity trails"
      />

      <div className="content_area">
        <div className="audit_controls_wrapper">
          {/* Filter Section */}
          <div className="audit_filters">
            <div className="filter_group">
              <CustomSelect
                options={actionOptions}
                value={filterAction}
                onSelect={setFilterAction}
                className="filter_select"
                placeholder="Action Type"
              />
            </div>

            <div className="filter_group">
              <CustomSelect
                options={statusOptions}
                value={filterStatus}
                onSelect={setFilterStatus}
                className="filter_select"
                placeholder="Status"
              />
            </div>

            <div className="filter_group">
              <CustomSelect
                options={dateRangeOptions}
                value={dateRange}
                onSelect={setDateRange}
                className="filter_select"
                placeholder="Date Range"
              />
            </div>

            <div className="filter_group">
              <input
                type="text"
                id="search_logs"
                placeholder="Search by user, resource, or IP..."
                className="search_input"
              />
            </div>
          </div>

          {/* Export Buttons */}
          <div className="audit_actions">
            <button
              className="secondary_button"
              onClick={() => handleExport("json")}
            >
              <span className="material-symbols-outlined">download</span>
              Export as JSON
            </button>

            <button className="primary_button" onClick={() => handleExport("csv")}>
              <span className="material-symbols-outlined">download</span>
              Export as CSV
            </button>
            
          </div>
        </div>

        {/* Audit Logs Table */}
        <div className="recent_verifications">
          <div className="top_area">
            <p className="section_title">Activity Logs</p>
            <p className="log_count">Showing 10 of 1,245 logs</p>
          </div>

          <AdminAuditTable />
        </div>
      </div>
    </>
  );
};

export default AuditLogsPage;
