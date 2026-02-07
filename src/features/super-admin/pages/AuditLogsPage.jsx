import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import AdminAuditTable from "../components/AdminAuditTable";
import "../super-admin.css";

const AuditLogsPage = () => {
  const [filterAction, setFilterAction] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [dateRange, setDateRange] = useState("7days");

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
        {/* Filter Section */}
        <div className="audit_filters">
          <div className="filter_group">
            <label htmlFor="action_filter">Action Type</label>
            <select
              id="action_filter"
              value={filterAction}
              onChange={(e) => setFilterAction(e.target.value)}
              className="filter_select"
            >
              <option value="all">All Actions</option>
              <option value="login">Login</option>
              <option value="logout">Logout</option>
              <option value="merchant_created">Merchant Created</option>
              <option value="settings_updated">Settings Updated</option>
              <option value="verification_approved">
                Verification Approved
              </option>
              <option value="verification_rejected">
                Verification Rejected
              </option>
              <option value="api_key_generated">API Key Generated</option>
              <option value="api_key_revoked">API Key Revoked</option>
            </select>
          </div>

          <div className="filter_group">
            <label htmlFor="status_filter">Status</label>
            <select
              id="status_filter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter_select"
            >
              <option value="all">All Status</option>
              <option value="success">Success</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          <div className="filter_group">
            <label htmlFor="date_range">Date Range</label>
            <select
              id="date_range"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="filter_select"
            >
              <option value="today">Today</option>
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>

          <div className="filter_group">
            <label htmlFor="search_logs">Search</label>
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
          <button className="export_button" onClick={() => handleExport("csv")}>
            <span className="material-symbols-outlined">download</span>
            Export CSV
          </button>
          <button
            className="export_button"
            onClick={() => handleExport("json")}
          >
            <span className="material-symbols-outlined">download</span>
            Export JSON
          </button>
        </div>

        {/* Audit Logs Table */}
        <div className="recent_verifications">
          <div className="top_area">
            <p className="section_title">Activity Logs</p>
            <p className="log_count">Showing 10 of 1,245 logs</p>
          </div>

          <AdminAuditTable />

          <div className="pagination">
            <p className="pagination_title">Page 1 of 125</p>

            <div className="pagination_buttons">
              <button className="pagination_button">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              <div className="page">
                <button className="page_button active_page">1</button>
                <button className="page_button">2</button>
                <button className="page_button">3</button>
                <button className="page_button">4</button>
                <button className="page_button">5</button>
              </div>

              <button className="pagination_button">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

            <select
              name="page_dropdown"
              id="page_dropdown"
              className="page_dropdown"
            >
              <option value="1">1/Page 125</option>
              <option value="2">2/Page 125</option>
              <option value="3">3/Page 125</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditLogsPage;
