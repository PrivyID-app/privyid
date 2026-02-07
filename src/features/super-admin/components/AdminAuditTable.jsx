import React, { useState } from "react";
import "../super-admin.css";

const AdminAuditTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const auditLogs = [
    {
      id: "AUD-001",
      timestamp: "2024-09-15 10:30:25",
      user: "Emma Wright (Super Admin)",
      action: "Merchant Created",
      resource: "MER-2024-010",
      ipAddress: "192.168.1.100",
      status: "success",
      details: "Created new merchant: Apex Holdings",
    },
    {
      id: "AUD-002",
      timestamp: "2024-09-15 09:45:12",
      user: "John Doe (Admin)",
      action: "Verification Approved",
      resource: "PRY-2024-001",
      ipAddress: "192.168.1.101",
      status: "success",
      details: "Approved KYC verification for Ironclad Systems",
    },
    {
      id: "AUD-003",
      timestamp: "2024-09-15 08:20:45",
      user: "Sarah Johnson (Admin)",
      action: "API Key Generated",
      resource: "API-KEY-789",
      ipAddress: "192.168.1.102",
      status: "success",
      details: "Generated production API key for TechFlow Solutions",
    },
    {
      id: "AUD-004",
      timestamp: "2024-09-14 16:55:30",
      user: "Emma Wright (Super Admin)",
      action: "Settings Updated",
      resource: "PLATFORM-SETTINGS",
      ipAddress: "192.168.1.100",
      status: "success",
      details: "Updated rate limit configuration",
    },
    {
      id: "AUD-005",
      timestamp: "2024-09-14 14:30:18",
      user: "Michael Chen (Admin)",
      action: "Login",
      resource: "AUTH-SESSION",
      ipAddress: "192.168.1.103",
      status: "success",
      details: "Successful admin login",
    },
    {
      id: "AUD-006",
      timestamp: "2024-09-14 12:15:42",
      user: "Unknown User",
      action: "Login",
      resource: "AUTH-SESSION",
      ipAddress: "45.123.67.89",
      status: "failed",
      details: "Failed login attempt - invalid credentials",
    },
    {
      id: "AUD-007",
      timestamp: "2024-09-14 11:05:55",
      user: "Emma Wright (Super Admin)",
      action: "Merchant Suspended",
      resource: "MER-2024-005",
      ipAddress: "192.168.1.100",
      status: "success",
      details: "Suspended merchant: CloudNine Inc due to policy violation",
    },
    {
      id: "AUD-008",
      timestamp: "2024-09-14 09:40:22",
      user: "John Doe (Admin)",
      action: "Verification Rejected",
      resource: "PRY-2024-004",
      ipAddress: "192.168.1.101",
      status: "success",
      details: "Rejected KYB verification for Quantum Dynamics",
    },
    {
      id: "AUD-009",
      timestamp: "2024-09-13 15:25:10",
      user: "Sarah Johnson (Admin)",
      action: "API Key Revoked",
      resource: "API-KEY-456",
      ipAddress: "192.168.1.102",
      status: "success",
      details: "Revoked sandbox API key for GreenLeaf Ventures",
    },
    {
      id: "AUD-010",
      timestamp: "2024-09-13 13:10:33",
      user: "Emma Wright (Super Admin)",
      action: "User Role Updated",
      resource: "USER-045",
      ipAddress: "192.168.1.100",
      status: "success",
      details: "Updated user role from Admin to Super Admin",
    },
  ];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(auditLogs.map((log) => log.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  const getStatusClass = (status) => {
    return status === "success" ? "approved" : "rejected";
  };

  const getStatusLabel = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="merchant_table audit_table">
      <div className="table_header">
        <div className="cell checkbox_cell">
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={selectedRows.length === auditLogs.length}
          />
        </div>
        <div className="cell">
          <p>Timestamp</p>
        </div>
        <div className="cell">
          <p>User/Admin</p>
        </div>
        <div className="cell">
          <p>Action Type</p>
        </div>
        <div className="cell">
          <p>Resource</p>
        </div>
        <div className="cell">
          <p>IP Address</p>
        </div>
        <div className="cell">
          <p>Status</p>
        </div>
        <div className="cell action_cell">
          <p>Details</p>
        </div>
      </div>

      <div className="table_body">
        {auditLogs.map((log) => (
          <div key={log.id} className="table_row">
            <div className="cell checkbox_cell">
              <input
                type="checkbox"
                checked={selectedRows.includes(log.id)}
                onChange={() => handleSelectRow(log.id)}
              />
            </div>
            <div className="cell">
              <p>{log.timestamp}</p>
            </div>
            <div className="cell">
              <p>{log.user}</p>
            </div>
            <div className="cell">
              <p>{log.action}</p>
            </div>
            <div className="cell">
              <p>{log.resource}</p>
            </div>
            <div className="cell">
              <p>{log.ipAddress}</p>
            </div>
            <div className="cell">
              <p className={`status ${getStatusClass(log.status)}`}>
                {getStatusLabel(log.status)}
              </p>
            </div>
            <div className="cell action_cell">
              <p className="audit_details">{log.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAuditTable;
